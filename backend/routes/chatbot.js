import express from "express";
import Chat from "../models/Chat.js";

const router = express.Router();

// POST /api/chatbot
// This route will forward the user message to OpenAI (server-side) using
// the `OPENAI_API_KEY` environment variable. If the key is not set, a
// simple rule-based fallback reply is returned.
router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Invalid message" });
  }

  let botReply = "Sorry, I didn't understand that.";

  // If an OpenAI key is configured, call the API from the server (do NOT
  // expose the API key to the browser / frontend).
  if (process.env.OPENAI_API_KEY) {
    try {
      const openaiResp = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful agricultural assistant." },
            { role: "user", content: message },
          ],
          max_tokens: 300,
        }),
      });

      if (!openaiResp.ok) {
        const errText = await openaiResp.text();
        console.error("OpenAI error:", openaiResp.status, errText);
      } else {
        const data = await openaiResp.json();
        const choices = data.choices || [];
        if (choices.length && choices[0].message && choices[0].message.content) {
          botReply = choices[0].message.content.trim();
        }
      }
    } catch (err) {
      console.error("OpenAI request failed:", err);
    }
  } else {
    // Fallback rule-based replies if no OpenAI key is configured
    const lower = message.toLowerCase();
    if (lower.includes("fertilizer")) botReply = "You can use NPK 20:20:20 for balanced growth.";
    else if (lower.includes("pesticide")) botReply = "Use neem oil for pest control.";
    else if (lower.includes("crop")) botReply = "You can try Wheat, Maize, or Rice depending on your soil.";
  }

  // Save conversation to DB (non-blocking if DB fails)
  try {
    await Chat.create({ userMessage: message, botReply });
  } catch (err) {
    console.error("Failed to save chat to DB:", err);
  }

  return res.json({ reply: botReply });
});

export default router;

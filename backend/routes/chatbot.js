import express from "express";
import Chat from "../models/Chat.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;
  let reply = "Sorry, I didn't understand that.";

  if (message.toLowerCase().includes("fertilizer")) reply = "You can use NPK 20:20:20 for balanced growth.";
  else if (message.toLowerCase().includes("pesticide")) reply = "Use neem oil for pest control.";
  else if (message.toLowerCase().includes("crop")) reply = "You can try Wheat, Maize, or Rice depending on your soil.";

  await Chat.create({ userMessage: message, botReply: reply });

  res.json({ reply });
});

export default router;

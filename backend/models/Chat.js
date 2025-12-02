import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  userMessage: String,
  botReply: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Chat", ChatSchema);
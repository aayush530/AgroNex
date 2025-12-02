import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Load .env file
dotenv.config();

// Import Routes
import authRoute from "./routes/auth.js";
import cropRoutes from "./routes/crops.js";
import productRoutes from "./routes/products.js";
import chatbotRoutes from "./routes/chatbot.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoute);
app.use("/api/crops", cropRoutes);
app.use("/api/products", productRoutes);
app.use("/api/chatbot", chatbotRoutes);

// Database Connection
mongoose
  // Database Connection - replace the existing connect call with this:
const mongoUri = process.env.MONGO_URI;
console.log("Using MONGO_URI:", mongoUri ? (mongoUri.includes("@") ? mongoUri.split("@")[1] : mongoUri) : "EMPTY");

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB Error:", err));

mongoose.connection.on("connected", () => {
  console.log("Mongoose connection state: connected");
});
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection state: error", err);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

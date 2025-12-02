import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();
const JWT_SECRET = "SUPER_SECRET_JWT_KEY"; // CHANGE THIS LATER

// REGISTER
router.post("/register", async (req, res) => {
  try {
    console.log("📥 Register request body:", req.body);

    const { name, email, password } = req.body;

    // 1️⃣ Validate input
    if (!name || !email || !password) {
      console.log("❌ Missing fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2️⃣ Check if user exists
    const existing = await User.findOne({ email });
    if (existing) {
      console.log("⚠️ Registration failed - email already used:", email);
      return res.status(400).json({ message: "Email already registered" });
    }

    // 3️⃣ Hash the password
    const hash = await bcrypt.hash(password, 10);

    // 4️⃣ Save the user
    const user = await User.create({
      name,
      email,
      password: hash
    });

    console.log("✅ User registered:", {
      id: user._id,
      email: user.email,
      name: user.name
    });

    // 5️⃣ Return safe user
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error("🔥 Register error:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
});
router.get("/all", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // hide hashed password
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    // Match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password" });

    // Create JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const cropRoutes = require("./routes/crops");
const productRoutes = require("./routes/products");
const chatbotRoutes = require("./routes/chatbot");

app.use("/api/crops", cropRoutes);
app.use("/api/products", productRoutes);
app.use("/api/chatbot", chatbotRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
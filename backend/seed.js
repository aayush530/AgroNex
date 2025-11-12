// backend/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Crop = require('./models/Crop');
const Product = require('./models/Product');

const MONGO_URI = process.env.MONGO_URI;

const crops = [
  { name: "Wheat", phRange: [6, 7], soilType: "loamy", season: "rabi" },
  { name: "Rice", phRange: [5.5, 6.5], soilType: "clay", season: "kharif" },
  { name: "Maize", phRange: [5.8, 7], soilType: "sandy", season: "kharif" },
  { name: "Sugarcane", phRange: [6, 7.5], soilType: "loamy", season: "summer" }
];

const products = [
  { name: "NPK 20:20:20", type: "Fertilizer", description: "Balanced fertilizer for crops" },
  { name: "Neem Oil", type: "Pesticide", description: "Natural pesticide for pest control" },
  { name: "Urea", type: "Fertilizer", description: "Nitrogen fertilizer for leafy growth" }
];

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB, seeding...");
    await Crop.deleteMany({});
    await Product.deleteMany({});
    await Crop.insertMany(crops);
    await Product.insertMany(products);
    console.log("Seeding done.");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

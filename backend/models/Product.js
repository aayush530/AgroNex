const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
});

module.exports = mongoose.model("Product", ProductSchema);
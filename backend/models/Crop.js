const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema({
  name: String,
  phRange: [Number],
  soilType: String,
  season: String,
});

module.exports = mongoose.model("Crop", CropSchema);
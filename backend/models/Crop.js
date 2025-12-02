import mongoose from "mongoose";

const CropSchema = new mongoose.Schema({
  name: String,
  phRange: [Number],
  soilType: String,
  season: String,
});

export default mongoose.model("Crop", CropSchema);
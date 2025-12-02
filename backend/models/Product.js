import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
});

export default mongoose.model("Product", ProductSchema);
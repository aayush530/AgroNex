import express from "express";
import Crop from "../models/Crop.js";

const router = express.Router();

router.post("/recommend", async (req, res) => {
  const { ph, soilType, season } = req.body;
  const phValue = parseFloat(ph);

  const crops = await Crop.find({
    soilType,
    season,
    phRange: { $elemMatch: { $lte: phValue, $gte: phValue } }
  });

  res.json({ crops: crops.length ? crops.map(c => c.name) : ["No suitable crop found"] });
});

export default router;
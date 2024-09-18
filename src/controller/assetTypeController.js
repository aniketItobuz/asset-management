import { assetTypeModel } from "../models/assetType.js";
import { assetTypeZodSchema } from "../zod/zodSchema.js"

export const getAllAssetsType = async (req, res) => {
  try {
    const asset = await assetTypeModel.find();
    return res.json({
      data: asset,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addAssetType = async (req, res) => {
    const result = assetTypeZodSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json(result.error.issues);
    }
    const asset = new assetTypeModel(result.data);
  
    try {
      const b1 = await asset.save();
      res.json(b1);
    } catch (err) {
      res.status(500).send("Error: " + err);
    }
  };
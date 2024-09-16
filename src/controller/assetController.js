import { assetModel } from "../models/asset.js";
import { assetZodSchema } from "../zod/zodSchema.js";

export const getAllAssets = async (req, res) => {
  try {
    const emp = await assetModel.find();
    return res.json({
      data: emp,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addAsset = async (req, res) => {
  const result = assetZodSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json(result.error.issues);
  }
  const hard = new assetModel(result.data);

  try {
    const b1 = await hard.save();
    res.json(b1);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
};

export const deleteAsset = async (req, res) =>{
  try {
    const hard = await assetModel.findByIdAndDelete(req.params.id);
    res.send("Hardware deleted");
  } catch (err) {
    res.send("Error" + err);
  }
}

export const updateAsset = async (req, res) =>{
  try {
    const hard = await assetModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
        serial_no: req.body.serial_no
      },
      { new: true } // Return the updated document
    );

    if (!hard) {
      return res.status(404).send("Hardware not found");
    }
    res.json(hard);
  } catch (err) {
    res.send("Error" + err);
  }
}
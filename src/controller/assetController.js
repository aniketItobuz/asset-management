import { assetModel } from "../models/asset.js";
import { assetZodSchema } from "../zod/zodSchema.js";

export const getAllAssets = async (req, res) => {
  try {
    // Get `page` and `limit` from query params (defaults to page 1 and 10 items per page)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // Calculate the number of documents to skip
    const startIndex = (page - 1) * limit;

    // Fetch assets with pagination
    const assets = await assetModel.find().skip(startIndex).limit(limit);

    // Get total number of assets for pagination metadata
    const totalAssets = await assetModel.countDocuments();

    return res.json({
      data: assets,
      meta: {
        total: totalAssets,
        page,
        limit,
        totalPages: Math.ceil(totalAssets / limit),
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
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

export const getAssetById = async (req, res) =>{
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

export const updateAsset = async (req, res) => {
  try {
    const { name, description, type, serial_no } = req.body;

    // Ensure all required fields are present
    if (!name || !description || !type || !serial_no) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const updatedAsset = await assetModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        type,
        serial_no,
      },
      { new: true } // Return the updated document
    );

    if (!updatedAsset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    res.json(updatedAsset);
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



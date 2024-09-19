import express from "express";
import {
  getAllAssets,
  addAsset,
  deleteAsset,
  updateAsset,
  getAssetById
} from "../controller/assetController.js";

import authenticateToken from "../middleware/authMiddleware.js";

const assetRouter = express.Router();
assetRouter.get("/get-all", authenticateToken, getAllAssets);
assetRouter.get("/get/:id", authenticateToken, getAssetById);
assetRouter.post("/add", authenticateToken, addAsset);
assetRouter.put("/update/:id", authenticateToken, updateAsset);
assetRouter.delete("/delete/:id", authenticateToken, deleteAsset);

export default assetRouter;
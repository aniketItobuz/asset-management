import express from "express";
import {
  getAllAssets,
  addAsset,
  deleteAsset,
  updateAsset
} from "../controller/assetController.js";

const assetRouter = express.Router();
assetRouter.get("/get-all", getAllAssets);
// assetRouter.get("/get/:id", getAssetById);
assetRouter.post("/add", addAsset);
assetRouter.put("/update/:id", updateAsset);
assetRouter.delete("/delete/:id", deleteAsset);

export default assetRouter;
import express from "express";
import { getAllAssetsType, addAssetType } from "../controller/assetTypeController.js";

const assetTypeRouter = express.Router();
assetTypeRouter.get("/get-all", getAllAssetsType);
assetTypeRouter.post("/add", addAssetType);

export default assetTypeRouter;

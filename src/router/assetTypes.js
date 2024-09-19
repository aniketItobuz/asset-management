import express from "express";
import { getAllAssetsType, addAssetType } from "../controller/assetTypeController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const assetTypeRouter = express.Router();
assetTypeRouter.get("/get-all", authenticateToken, getAllAssetsType);
assetTypeRouter.post("/add", authenticateToken, addAssetType);

export default assetTypeRouter;

import express from "express";
import {
  assetAssign,
  assetHistory
} from "../controller/assetAssignController.js";

import authenticateToken from "../middleware/authMiddleware.js";

const assetAssignRouter = express.Router();
assetAssignRouter.post("/assetAssign", authenticateToken, assetAssign);
assetAssignRouter.get("/assetHistory/:asset_id", authenticateToken, assetHistory);


export default assetAssignRouter;
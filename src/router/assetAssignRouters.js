import express from "express";
import {
  assetAssign,
  assetHistory
} from "../controller/assetAssignController.js";

const assetAssignRouter = express.Router();
assetAssignRouter.post("/assetAssign", assetAssign);
assetAssignRouter.get("/assetHistory/:asset_id", assetHistory);


export default assetAssignRouter;
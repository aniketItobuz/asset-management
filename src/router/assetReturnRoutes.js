import express from "express";
import { assetReturn } from "../controller/assetReturnController.js";

const assetReturnRouter = express.Router();
assetReturnRouter.post("/assetReturn", assetReturn);

export default assetReturnRouter;

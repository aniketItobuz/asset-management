import express from "express";
import { assetReturn } from "../controller/assetReturnController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const assetReturnRouter = express.Router();
assetReturnRouter.post("/assetReturn", authenticateToken, assetReturn);

export default assetReturnRouter;

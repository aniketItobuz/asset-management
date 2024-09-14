import express from "express";
import employeeRouter from "./employeeRoutes.js";
import assetRouter from "./assetRoutes.js";

const rootRouter = express.Router();
rootRouter.use("/employee", employeeRouter);
rootRouter.use("/asset", assetRouter);

export default rootRouter;

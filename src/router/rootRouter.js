import express from "express";
import employeeRouter from "./employeeRoutes.js";
import assetRouter from "./assetRoutes.js";
import assetAssignRouter from "./assetAssignRouters.js"

const rootRouter = express.Router();
rootRouter.use("/employee", employeeRouter);
rootRouter.use("/asset", assetRouter);
rootRouter.use("/asset", assetAssignRouter);

export default rootRouter;

import express from "express";
import employeeRouter from "./employeeRoutes.js";
import assetRouter from "./assetRoutes.js";
import assetAssignRouter from "./assetAssignRouters.js"
import assetTypeRouter from "./assetTypes.js"

const rootRouter = express.Router();
rootRouter.use("/employee", employeeRouter);
rootRouter.use("/asset", assetRouter);
rootRouter.use("/asset", assetAssignRouter);
rootRouter.use("/assetType", assetTypeRouter);

export default rootRouter;

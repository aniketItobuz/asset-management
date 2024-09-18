import express from "express";
import employeeRouter from "./employeeRoutes.js";
import assetRouter from "./assetRoutes.js";
import assetAssignRouter from "./assetAssignRouters.js"
import assetTypeRouter from "./assetTypes.js"
import employeeTeamRouter from "./employeeTeamRoutes.js"
import assetReturnRouter from "./assetReturnRoutes.js"

const rootRouter = express.Router();
rootRouter.use("/employee", employeeRouter);
rootRouter.use("/asset", assetRouter);
rootRouter.use("/asset", assetAssignRouter);
rootRouter.use("/asset", assetReturnRouter)
rootRouter.use("/assetType", assetTypeRouter);
rootRouter.use("/employeeTeam", employeeTeamRouter);

export default rootRouter;

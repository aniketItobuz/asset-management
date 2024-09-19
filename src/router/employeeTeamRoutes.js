import express from "express";
import { getAllEmployeeTeam, addEmployeeTeam } from "../controller/employeeTeamController.js";

import authenticateToken from "../middleware/authMiddleware.js";

const employeeTeamRouter = express.Router();
employeeTeamRouter.get("/get-all", authenticateToken, getAllEmployeeTeam);
employeeTeamRouter.post("/add", authenticateToken, addEmployeeTeam);

export default employeeTeamRouter;
import express from "express";
import { getAllEmployeeTeam, addEmployeeTeam } from "../controller/employeeTeamController.js";

const employeeTeamRouter = express.Router();
employeeTeamRouter.get("/get-all", getAllEmployeeTeam);
employeeTeamRouter.post("/add", addEmployeeTeam);

export default employeeTeamRouter;
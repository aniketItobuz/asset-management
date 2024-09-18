import mongoose from "mongoose";
import { employeeTeam } from "../schema/employeeTeam.js";

export const employeeTeamModel = mongoose.model("EmployeeTeam", employeeTeam);
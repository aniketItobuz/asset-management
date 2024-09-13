import express from "express";
import {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/employeeController.js";

const employeeRouter = express.Router();
employeeRouter.get("/get-all", getAllEmployees);
employeeRouter.get("/get/:id", getEmployeeById);
employeeRouter.post("/add", addEmployee);
employeeRouter.put("/update/:id", updateEmployee);
employeeRouter.delete("/delete/:id", deleteEmployee);

export default employeeRouter;

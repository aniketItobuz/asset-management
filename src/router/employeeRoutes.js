import express from "express";
import {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/employeeController.js";

import authenticateToken from "../middleware/authMiddleware.js";

const employeeRouter = express.Router();
employeeRouter.get("/get-all", authenticateToken, getAllEmployees);
employeeRouter.get("/get/:id", authenticateToken, getEmployeeById);
employeeRouter.post("/add", authenticateToken, addEmployee);
employeeRouter.put("/update/:id", authenticateToken, updateEmployee);
employeeRouter.delete("/delete/:id", authenticateToken, deleteEmployee);

export default employeeRouter;

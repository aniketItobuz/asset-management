import express from 'express';
import {getAllEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee} from './controller/employeeController.js'

const rootRouter = express.Router();
rootRouter.get("/get-employees", getAllEmployees)
rootRouter.get("/get-employee/:id", getEmployeeById)
rootRouter.post("/add-employee", addEmployee)
rootRouter.put("/update-employee/:id", updateEmployee)
rootRouter.delete("/delete-employee/:id", deleteEmployee)

export default rootRouter
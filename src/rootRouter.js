import express from 'express';

const rootRouter = express.Router();
import {getAllEmployees} from './controller/employeeController.js'

rootRouter.get("/get-employees", getAllEmployees)

export default rootRouter
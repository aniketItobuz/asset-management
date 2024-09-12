import mongoose from "mongoose";
import {employeeSchema} from '../schema/employee.js'

export const employeeModel = mongoose.model('Employee', employeeSchema)
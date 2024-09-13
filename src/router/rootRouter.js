import express from 'express';
import employeeRouter from './employeeRoutes.js';

const rootRouter = express.Router();
rootRouter.use('/employee',employeeRouter)

export default rootRouter
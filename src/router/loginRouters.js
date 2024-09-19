import express from "express";
import { getLogin } from "../controller/loginController.js";

const loginRouter = express.Router();
loginRouter.post("/get-login", getLogin);

export default loginRouter;
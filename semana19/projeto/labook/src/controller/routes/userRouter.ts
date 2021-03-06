import express from "express";
import { login, signup } from "../userController";

export const userRouter = express.Router();

userRouter.post('/users', signup);
userRouter.post("/user", login);
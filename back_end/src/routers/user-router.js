import express from "express";
import { createUser } from "../controllers/user-control.js";
export const UserRouter = express.Router();
UserRouter.post("/createUser", createUser);

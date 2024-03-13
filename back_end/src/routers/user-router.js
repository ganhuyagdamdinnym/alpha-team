import express from "express";
import { createUser, getUserData } from "../controllers/user-control.js";
export const UserRouter = express.Router();
UserRouter.post("/createUser", createUser);
UserRouter.get("/UserData/:token", getUserData);
UserRouter.post("/inputChocolateToBasket,");

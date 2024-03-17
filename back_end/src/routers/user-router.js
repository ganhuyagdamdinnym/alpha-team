import express from "express";
import {
  createUser,
  getUserData,
  loginByEmail,
} from "../controllers/user-control.js";
export const UserRouter = express.Router();
UserRouter.post("/createUser", createUser);
UserRouter.get("/UserData/:token", getUserData);
UserRouter.get("/loginByEmail/:email", loginByEmail);
UserRouter.post("/inputChocolateToBasket,");

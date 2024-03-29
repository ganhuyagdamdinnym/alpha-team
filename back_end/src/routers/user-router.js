import express from "express";
import { verifyToken } from "../middleware/auto.js";
import {
  //createUser,
  getUserData,
  loginByEmail,
  loginByCode,
  // UserBought,
} from "../controllers/user-control.js";
export const UserRouter = express.Router();
//UserRouter.post("/createUser", createUser);
UserRouter.get("/UserData", verifyToken, getUserData);
UserRouter.get("/loginByEmail/:email", loginByEmail);
UserRouter.post("/loginByEmail", loginByCode);
//UserRouter.post("/inputChocolateToBasket,");

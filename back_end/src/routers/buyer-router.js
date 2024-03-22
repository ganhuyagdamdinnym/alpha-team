import express from "express";
import { getAllBuyerInfo, UserBought } from "../controllers/buyer-control.js";
export const BuyerRouter = express.Router();
BuyerRouter.get("/BuyerData", getAllBuyerInfo);
BuyerRouter.post("/userBought", UserBought);

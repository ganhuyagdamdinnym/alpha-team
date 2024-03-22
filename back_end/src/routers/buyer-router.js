import express from "express";
import { getAllBuyerInfo } from "../controllers/buyer-control.js";
export const BuyerRouter = express.Router();
BuyerRouter.get("/BuyerData", getAllBuyerInfo);

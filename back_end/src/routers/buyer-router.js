import express from "express";
import { checkAdminToken } from "../middleware/checkAdmin.js";
import {
  getAllBuyerInfo,
  UserBought,
  removePurchase,
  confirmDelivery,
} from "../controllers/buyer-control.js";
export const BuyerRouter = express.Router();
BuyerRouter.get("/BuyersData", getAllBuyerInfo);
BuyerRouter.post("/userBought", UserBought);
BuyerRouter.post("/removePurchase", checkAdminToken, removePurchase);
BuyerRouter.post("/confirmDelivery", checkAdminToken, confirmDelivery);

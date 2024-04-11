import express from "express";
import {
  getAllBuyerInfo,
  UserBought,
  removePurchase,
  confirmDelivery,
} from "../controllers/buyer-control.js";
export const BuyerRouter = express.Router();
BuyerRouter.get("/BuyersData", getAllBuyerInfo);
BuyerRouter.post("/userBought", UserBought);
BuyerRouter.post("/removePurchase", removePurchase);
BuyerRouter.post("/confirmDelivery", confirmDelivery);

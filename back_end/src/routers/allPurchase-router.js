import express from "express";
import { getAllPurchaseInfo } from "../controllers/allPurchase-cont.js";
import { verifyToken } from "../middleware/auto.js";
export const AllPurchaseRouter = express.Router();
AllPurchaseRouter.get("/getAllPurchaseInfo", getAllPurchaseInfo);

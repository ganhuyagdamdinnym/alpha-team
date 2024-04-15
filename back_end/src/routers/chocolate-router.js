import express from "express";
import { checkAdminToken } from "../middleware/checkAdmin.js";
import {
  getChocolate,
  getChocolatedata,
  confirmSale,
  refuseSale
} from "../controllers/chocolate-control.js";
export const chocolateRouter = express.Router();
chocolateRouter.post("/getchocolate", getChocolate);
chocolateRouter.get("/getChocolatedata", getChocolatedata);
chocolateRouter.post("/handleSale", checkAdminToken, confirmSale);
chocolateRouter.post("/refuseSale", checkAdminToken, refuseSale);

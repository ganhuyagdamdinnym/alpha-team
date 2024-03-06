import express from "express";
import {
  getChocolate,
  getChocolatedata,
} from "../controllers/chocolate-control.js";
export const chocolateRouter = express.Router();
chocolateRouter.post("/getchocolate", getChocolate);
chocolateRouter.get("/getChocolatedata", getChocolatedata);

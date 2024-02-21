import express from "express"
import { getChocolate } from "../controllers/chocolate-control.js"
export const chocolateRouter = express.Router();
chocolateRouter.post("/getchocolate",getChocolate)

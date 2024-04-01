import express from "express";
import cors from "cors";
import { connect } from "./mongodb.js";
import { chocolateRouter } from "./routers/chocolate-router.js";
import { UserRouter } from "./routers/user-router.js";
import { BuyerRouter } from "./routers/buyer-router.js";
const app = express();
connect();
app.use(cors());
app.use(express.json());
app.use(chocolateRouter);
app.use(UserRouter);
app.use(BuyerRouter);
const port = 8002;
app.listen(port, () => {
  console.log("power on" + port);
});

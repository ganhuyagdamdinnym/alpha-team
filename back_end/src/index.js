import express from "express";
import cors from "cors";
import { connect } from "./mongodb.js";
import { chocolateRouter } from "./routers/chocolate-router.js";
const app = express();
connect();
app.use(cors());
app.use(express.json());
app.use(chocolateRouter);
const port = 8002;
app.listen(port, () => {
  console.log("power on" + port);
});
console.log("hi");

console.log("damdinnym biciv");

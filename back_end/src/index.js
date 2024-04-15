import express from "express";
import cors from "cors";
import { connect } from "./mongodb.js";
import { chocolateRouter } from "./routers/chocolate-router.js";
import { UserRouter } from "./routers/user-router.js";
import { BuyerRouter } from "./routers/buyer-router.js";
import { AllPurchaseRouter } from "./routers/allPurchase-router.js";
import { ChocolateImageModel } from "./model/chocolateHandler-model.js";

const app = express();
connect();
app.use(cors());
app.use(express.json());
app.use(chocolateRouter);
app.use(UserRouter);
app.use(BuyerRouter);
app.use(AllPurchaseRouter);
app.get("/", (req, res) => {
  res.json({ state: 200 });
});

// daima ah gy tsevrhn bolgchih bxo hhah

app.post("/handleChocolateImage", (req, res) => {
  const body = req.body;
  console.log(req.body.base64);
  const data = ChocolateImageModel.create({
    base64: body.base64,
    name: body.name,
  });
  res.json(data);
});

const port = 8002;
app.listen(port, () => {
  console.log("power on" + port);
});

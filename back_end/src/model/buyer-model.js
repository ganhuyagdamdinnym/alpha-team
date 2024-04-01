import { model, Schema } from "mongoose";
const buySchema = new Schema({
  chocolateName: Array,
  pay: Number,
  address: String,
  number: Number,
  createdAt: { type: Date, default: Date.now() },
});
const BuyerSchema = new Schema({
  email: { type: String, require: true, unique: true },
  // number: Number,
  // address: String,
  // paidMoney: Number,
  // boughtChocolates: [{ type: Schema.Types.ObjectId, ref: "Chocolate" }],
  allBuy: [buySchema],
});
export const BuyerModel = model("Buyer", BuyerSchema);

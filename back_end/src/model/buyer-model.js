import { model, Schema } from "mongoose";
const buySchema = new Schema({
  chocolateName: Array,
  pay: Number,
  address: String,
  number: Number,
  deliveryId: Number,
  deliveryStatus: Boolean,
  createdAt: { type: Date, default: Date.now() },
});
const BuyerSchema = new Schema({
  email: { type: String, require: true, unique: true },
  allBuy: [buySchema],
});
export const BuyerModel = model("Buyer", BuyerSchema);

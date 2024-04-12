import { model, Schema } from "mongoose";
const addressType = new Schema({
  district: String,
  commission: String,
  residence: String,
  withNumber: String,
  codeOfResidence: String,
});
const buySchema = new Schema({
  chocolateName: Array,
  pay: Number,
  address: addressType,
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

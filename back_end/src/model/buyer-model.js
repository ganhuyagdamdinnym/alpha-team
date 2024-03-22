import { model, Schema } from "mongoose";
const BuyerSchema = new Schema({
  email: { type: String, require: true, unique: true },
  number: Number,
  address: String,
});
export const BuyerModel = model("Buyer", BuyerSchema);

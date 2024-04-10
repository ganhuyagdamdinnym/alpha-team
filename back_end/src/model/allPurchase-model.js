import { model, Schema } from "mongoose";
const addressType = new Schema({
  district: String,
  commission: String,
  residence: String,
});
const PurchaseSchema = new Schema({
  email: String,
  chocolateName: Array,
  pay: Number,
  address: addressType,
  number: Number,
  deliveryId: Number,
  deliveryStatus: Boolean,
  datenow: { type: Date, default: Date.now },
});
export const PurchaseModel = model("allPurchase", PurchaseSchema);

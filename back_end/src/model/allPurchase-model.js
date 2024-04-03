import { model,Schema } from "mongoose";
const PurchaseSchema= new Schema({
    email:String,
    chocolateName: Array,
    pay: Number,
    address: String,
    number: Number,
    deliveryId:Number,
    datenow: { type: Date, default: Date.now }
})
export const PurchaseModel = model("allPurchase", PurchaseSchema);
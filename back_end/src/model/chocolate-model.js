import { model, Schema } from "mongoose";

const chocolateSchema = new Schema({
  id: Number,
  name: String,
  unit_price: String,
  count_in_box: String,
  box_price: String,
  image: String,
  sort: String,
  saleStatus: Boolean,
  salePrice_unit: Number,
  salePrice_box: Number,
  salePercent: Number,
});
export const ChocolateModel = model("Chocolate", chocolateSchema);

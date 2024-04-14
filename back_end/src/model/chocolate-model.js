import { model, Schema } from "mongoose";

const chocolateSchema = new Schema({
  id: Number,
  name: String,
  unit_price: Number,
  count_in_box: Number,
  box_price: Number,
  image: String,
  sort: String,
  saleStatus: Boolean,
  salePrice_unit: Number,
  salePrice_box: Number,
  salePercent: Number,
});
export const ChocolateModel = model("Chocolate", chocolateSchema);

import { model, Schema } from "mongoose";

const chocolateSchema = new Schema({
  id: Number,
  name: String,
  unit_price: Number,
  count_in_box: Number,
  box_price: Number,
  image: String,
});
export const ChocolateModel = model("Main", chocolateSchema);

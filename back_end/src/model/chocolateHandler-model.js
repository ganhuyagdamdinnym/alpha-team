import { model, Schema } from "mongoose";

const chocolateImageSchema = new Schema({
  base64: String,
  name: String,
});
export const ChocolateImageModel = model(
  "ChocolateImage",
  chocolateImageSchema
);

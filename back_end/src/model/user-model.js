import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  number: Number,
  basket: [{ type: Schema.Types.ObjectId, ref: "Chocolate" }],
});
export const UserModel = model("User", UserSchema);

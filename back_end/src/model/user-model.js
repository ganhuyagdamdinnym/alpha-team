import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  number: Number,
  email: { type: String, require: true, unique: true },
  code: Number,
  //password: String,
  basket: [{ type: Schema.Types.ObjectId, ref: "Chocolate" }],
});
export const UserModel = model("User", UserSchema);

import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  number: { type: Number, require: true, unique: true },
  password: String,
  basket: [{ type: Schema.Types.ObjectId, ref: "Chocolate" }],
});
export const UserModel = model("User", UserSchema);

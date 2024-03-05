import { UserModel } from "../model/user-model.js";
export const createUser = async (req, res) => {
  try {
    const body = req.body;
    await UserModel.create({
      number: body.number,
    });
    res.status(200).json({ message: "succeeded" });
  } catch (err) {
    console.log(err);
  }
};

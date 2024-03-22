import { BuyerModel } from "../model/buyer-model.js";
export const getAllBuyerInfo = (req, res) => {
  console.log("hi");
};
export const UserBought = async (req, res) => {
  const { email, pay, number, name } = req.body;
  console.log("name", name);
  try {
    const user = await BuyerModel.findOne({ email: email });
    if (user == null) {
      await BuyerModel.create({
        email: email,
        allBuy: [
          {
            number: number,
          },
        ],
      });
    } else {
      //   console.log("user", user);
      //   console.log("us", user.allBuy);
      //   const options = {
      //     number: number,
      //     pay: pay,
      //   };
      user.allBuy.push({ number: number, pay: pay, chocolateName: name });
      await user.save();
      console.log("neew", user);
    }
    res
      .status(200)
      .json({ success: true, message: "Purchase recorded successfully" });
  } catch (error) {
    console.log(error);
  }
};

import express from "express";
import { BuyerModel } from "../model/buyer-model.js";
import { PurchaseModel } from "../model/allPurchase-model.js";
export const getAllBuyerInfo = async (req, res) => {
  console.log("hi");
  const allBuyer = await BuyerModel.find();
  res.status(200).json({ allBuyer });
};
export const UserBought = async (req, res) => {
  const { email, allBuy } = req.body;
  console.log("name", allBuy);
  try {
    const user = await BuyerModel.findOne({ email: email });
    if (user == null) {
      await BuyerModel.create({
        email: email,
        allBuy: [
          {
            chocolateName: allBuy.chocolateName,
            pay: allBuy.pay,
            number: allBuy.number,
            address: allBuy.address,
          },
        ],
      });
    } else {
      const newuser = user.allBuy.push({ ...allBuy });
      console.log("hi", newuser);
      await user.save();
      // await BuyerModel.findOneAndDelete({email:email})
      // await BuyerModel.create(user)
      // console.log("neew", user);
    }
    await PurchaseModel.create({
      email: email,
      chocolateName: allBuy.chocolateName,
      pay: allBuy.pay,
      number: allBuy.number,
      address: allBuy.address,
    });

    res
      .status(200)
      .json({ success: true, message: "Purchase recorded successfully" });
  } catch (error) {
    console.log(error);
  }
};

import express from "express";
import { BuyerModel } from "../model/buyer-model.js";
import { PurchaseModel } from "../model/allPurchase-model.js";
import nodemailer from "nodemailer";
export const getAllBuyerInfo = async (req, res) => {
  const allBuyer = await BuyerModel.find();
  res.status(200).json({ allBuyer });
};
export const UserBought = async (req, res) => {
  const { email, allBuy } = req.body;
  const date = new Date();
  console.log("name", date);
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
            createdAt: date,
            deliveryStatus: false,
          },
        ],
      });
    } else {
      const newuser = user.allBuy.push({ ...allBuy });
      console.log("hi", newuser);
      await user.save();
    }
    await PurchaseModel.create({
      email: email,
      chocolateName: allBuy.chocolateName,
      pay: allBuy.pay,
      number: allBuy.number,
      address: allBuy.address,
      deliveryStatus: false,
    });
    //send email to buyer
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "damdinnymg@gmail.com",
        pass: "yfimvgvjmqnmfghb",
      },
    });
    const options = {
      from: "damdinnymg@gmail.com",
      to: email,
      subject: "Password reset",
      text: `Таны худалдан авалт амжилттай боллоо.`,
    };
    await transport.sendMail(options);
    res
      .status(200)
      .json({ success: true, message: "Purchase recorded successfully" });
  } catch (error) {
    console.log(error);
  }
};

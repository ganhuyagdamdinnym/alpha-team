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
  try {
    const user = await BuyerModel.findOne({ email: email });
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    if (user == null) {
      await BuyerModel.create({
        email: email,
        allBuy: [
          {
            chocolateName: allBuy.chocolateName,
            pay: allBuy.pay,
            number: allBuy.number,
            address: {
              district: allBuy.address.district,
              commission: allBuy.address.commission,
              residence: allBuy.address.residence,
            },
            createdAt: date,
            deliveryStatus: false,
            deliveryId: randomNumber,
          },
        ],
      });
    } else {
      const newuser = user.allBuy.push({
        ...{
          chocolateName: allBuy.chocolateName,
          pay: allBuy.pay,
          number: allBuy.number,
          address: {
            district: allBuy.address.district,
            commission: allBuy.address.commission,
            residence: allBuy.address.residence,
          },
          createdAt: date,
          deliveryStatus: false,
          deliveryId: randomNumber,
        },
      });
      await user.save();
    }
    await PurchaseModel.create({
      email: email,
      chocolateName: allBuy.chocolateName,
      pay: allBuy.pay,
      number: allBuy.number,
      address: {
        district: allBuy.address.district,
        commission: allBuy.address.commission,
        residence: allBuy.address.residence,
      },
      deliveryId: randomNumber,
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
export const removePurchase = async (req, res) => {
  const { id, deliveryId } = req.body;
  try {
    const buyer = await BuyerModel.findById(id);
    console.log(buyer);
    const filterPurchase = buyer.allBuy.filter(
      (e) => e.deliveryId !== deliveryId
    );
    await BuyerModel.findByIdAndUpdate(id, {
      allBuy: filterPurchase,
    });
    const lastBuyers = await PurchaseModel.findOneAndDelete({
      deliveryId: deliveryId,
    });
    res
      .status(200)
      .json({ success: true, message: "Purchase removed successfully" });
  } catch (err) {
    console.log(err);
  }
};
export const confirmDelivery = async (req, res) => {
  const { id, deliveryId } = req.body;
};

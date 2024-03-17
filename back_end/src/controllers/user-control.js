import { UserModel } from "../model/user-model.js";
//import AxiosError from "axios"
import { AxiosError } from "axios";
export const createUser = async (req, res) => {
  const alldata = await UserModel.find();
  try {
    let status = false;
    const body = req.body;
    console.log(alldata);
    if (
      alldata.filter((e) => {
        e.number == body.number;
      })
    ) {
      status = true;
    }
    if (status == true) {
      res.status(200).json({ message: body.number });
    } else {
      await UserModel.create({
        number: body.number,
      });
      res.status(200).json({ message: body.number });
    }
  } catch (err) {
    console.log(err);
  }
};
export const getUserData = async (req, res) => {
  const { token } = req.params;
  const PhoneNumber = Number(token);
  const User = await UserModel.findOne({ number: PhoneNumber });
  // console.log("user", User);
  res.status(200).json({ User });
};
export const inputChocolateToBasket = async (req, res) => {
  const { count, chocolate } = req.body;
  console.log("body", req.body);
};
//email
import nodemailer from "nodemailer";
//const password = process.env.APP_HOST_EMAIL_PASSWORD;
const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "damdinnymg@gmail.com",
    //pass: password,
    pass: "yfimvgvjmqnmfghb",
  },
});
export const loginByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const randomNumber = Math.floor(Math.random() * 1000000);
    console.log(randomNumber);
    const options = {
      from: "damdinnymg@gmail.com",
      to: email,
      subject: "Password reset",
      text: `Your password reset code is  ${randomNumber}`,
    };
    await transport.sendMail(options);
    const updatedUser = await UserModel.create({
      email: email,
      code: randomNumber,
    });
    return updatedUser;
  } catch (err) {
    // const error = err as AxiosError;
    // throw new Error(error.message);
    console.log(err);
  }
};

import { UserModel } from "../model/user-model.js";
//import bcrypt from "bcrypt";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AxiosError } from "axios";
import nodemailer from "nodemailer";
export const getUserData = async (req, res) => {
  try {
    const user = req.user;
    //console.log("token", user);
    const User = await UserModel.findOne({ email: user.id });
    // console.log("bolsoo", user);
    res.status(200).json({ User });
  } catch (err) {
    console.log(err);
  }
};
//email

//const password = process.env.APP_HOST_EMAIL_PASSWORD;
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
export const loginByEmail = async (req, res) => {
  const { email } = req.params;
  console.log("email", email);
  try {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    console.log("123", randomNumber);
    const options = {
      from: "damdinnymg@gmail.com",
      to: email,
      subject: "Password reset",
      text: `Your  code is  ${randomNumber}`,
    };
    await transport.sendMail(options);
    const OneUser = await UserModel.findOne({ email: email });
    console.log("user", OneUser);
    if (OneUser == null) {
      await UserModel.create({
        email: email,
        code: randomNumber,
      });
    } else {
      await UserModel.findOneAndUpdate(
        { email: email },
        {
          code: randomNumber,
        }
      );
    }
    res.status(200).json({ message: "Email sent" });
  } catch (err) {
    console.log(err);
  }
};
export const loginByCode = async (req, res) => {
  try {
    const { code, email } = req.body;
    if (code || email) {
      console.log("info", code, email);
      const user = await UserModel.findOne({ email: email });
      console.log("email", user);
      if (user.code == code) {
        // sha256
        const token = jwt.sign({ id: email }, "SomeSecretKey", {
          expiresIn: "2d",
        });
        console.log("hi", token);
        res.status(200).json({ token });
      } else {
        res.status(200).json({ message: "not" });
      }
    } else {
      console.log("aldaa");
    }
  } catch (err) {
    console.log(err);
  }

  //bcrypt
};
export const UserBought = (req, res) => {
  // const { email, price } = req.body;
  // try {
  //   const options = {
  //     from: "amaraaamarbileg06@gmail.com",
  //     to: "damdinnymg@gmail.com",
  //     subject: "Password reset",
  //     text: `${email} хэрэглэгч `,
  //   };
  // } catch (err) {
  //   console.log(err);
  // }
  // console.log("hi");
};

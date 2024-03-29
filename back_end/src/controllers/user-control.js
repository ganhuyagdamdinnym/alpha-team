import { UserModel } from "../model/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AxiosError } from "axios";
// export const createUser = async (req, res) => {
//   const alldata = await UserModel.find();
//   try {
//     let status = false;
//     const body = req.body;
//     console.log(alldata);
//     if (
//       alldata.filter((e) => {
//         e.number == body.number;
//       })
//     ) {
//       status = true;
//     }
//     if (status == true) {
//       res.status(200).json({ message: body.number });
//     } else {
//       await UserModel.create({
//         number: body.number,
//       });
//       res.status(200).json({ message: body.number });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
export const getUserData = async (req, res) => {
  const user = req.user;
  console.log("token", user);
  //const PhoneNumber = Number(token);
  const User = await UserModel.findOne({ email: user.id });
  // / console.log("user", User);
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
  } catch (err) {
    console.log(err);
  }
};
export const loginByCode = async (req, res) => {
  const { code, email } = req.body;
  console.log("info", code, email);
  const user = await UserModel.findOne({ email: email });
  console.log("email", user);
  if (user.code == code) {
    if (bcrypt.compare(email)) {
      // sha256
      const token = jwt.sign({ id: email }, "SomeSecretKey", {
        expiresIn: "2d",
      });
      console.log("hi", token);
      res.status(200).json({ token });
    } else {
      res.status(405).json({ message: "hereglegch alga" });
    }
  } else {
    res.status(200).json({ message: "not" });
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

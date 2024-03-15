import { UserModel } from "../model/user-model.js";
export const createUser = async (req, res) => {
  const alldata = await UserModel.find();
  try {
    let status=false
    const body = req.body;
    console.log(alldata)
  if(alldata.filter((e)=>{e.number==body.number})){
    status=true
  }
  if(status==true){
    res.status(200).json({ message: body.number });
  }else{
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

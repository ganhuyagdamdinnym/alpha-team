import { PurchaseModel } from "../model/allPurchase-model.js";
export const getAllPurchaseInfo = async (req, res) => {
  try {
    const allData = await PurchaseModel.find();
    res.status(200).json({ allData });
  } catch (error) {
    console.log(error);
  }
};

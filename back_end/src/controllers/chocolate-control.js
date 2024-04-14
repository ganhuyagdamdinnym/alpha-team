import { ChocolateModel } from "../model/chocolate-model.js";
export const getChocolatedata = async (req, res) => {
  console.log("hi");
  try {
    const alldata = await ChocolateModel.find();
    res.status(200).json(alldata);
  } catch (err) {
    console.log(err);
  }
};
export const getChocolate = async (req, res) => {
  //console.log("sss");
  const body = req.body;
  const newChocolate = ChocolateModel.create({
    id: body.id,
    name: body.name,
    image: body.image,
    unit_price: body.unit_price,
    box_price: body.box_price,
    count_in_box: body.count_in_box,
    sort: body.sort,
  });
  res.status(200).json({ newChocolate });
};
export const confirmSale = async (req, res) => {
  const { chocolateId, salePercent } = req.body;
  try {
    const chocolate = await ChocolateModel.findById(chocolateId);
    const sale = (chocolate.unit_price / 100) * salePercent;
    const salePrice = chocolate.unit_price - sale;
    const BoxSale = salePrice * chocolate.count_in_box;
    await ChocolateModel.findByIdAndUpdate(chocolateId, {
      saleStatus: true,
      salePrice_unit: salePrice,
      salePrice_box: BoxSale,
      salePercent: salePercent,
    });
    res.status(200).json({ message: "successfully" });
  } catch (err) {
    console.log(err);
  }
};

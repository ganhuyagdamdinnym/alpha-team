import { ChocolateModel } from "../model/chocolate-model.js";
export const getChocolatedata = async (req, res) => {
  console.log("hi");
  const alldata = await ChocolateModel.find();
  console.log("data", alldata);
  res.status(200).json(alldata);
};
export const getChocolate = async (req, res) => {
  console.log("sss");
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

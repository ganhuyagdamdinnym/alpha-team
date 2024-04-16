import { ChocolateModel } from "../model/chocolate-model.js";
export const getChocolatedata = async (req, res) => {
  try {
    const alldata = await ChocolateModel.find();
    res.status(200).json(alldata);
  } catch (err) {
    console.log(err);
  }
};
export const getChocolate = async (req, res) => {
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
  console.log(body.image);
};
export const confirmSale = async (req, res) => {
  const { chocolateId, salePercent } = req.body;
  try {
    const chocolate = await ChocolateModel.findById(chocolateId);
    const sale = (chocolate.unit_price / 100) * salePercent;
    const salePrice = chocolate.unit_price - sale;
    const BoxSale = (chocolate.box_price / 100) * salePercent;
    const saleBox = chocolate.box_price - BoxSale;
    await ChocolateModel.findByIdAndUpdate(chocolateId, {
      saleStatus: true,
      salePrice_unit: salePrice,
      salePrice_box: saleBox,
      salePercent: salePercent,
    });
    res.status(200).json({ message: "successfully saled" });
  } catch (err) {
    console.log(err);
  }
};
export const refuseSale = async (req, res) => {
  const { chocolateId } = req.body;
  await ChocolateModel.findByIdAndUpdate(chocolateId, {
    saleStatus: false,
  });
  res.status(200).json({ message: "succeed refused" });
};
export const deleteChocolate=async(req,res)=>{
  const{id}=req.body
  try{
   await ChocolateModel.findByIdAndDelete(id )
   res.status(200).json({message:"successfully deleted"})
  }catch(errror){
    console.log(errror)
  }
}
import { all } from "axios";
import { useState, useContext } from "react";
import axios from "axios";
import { Back_End_url } from "@/utils/back-url";
import { AuthContext } from "@/hook/authProvider";
export const CashPart = (props) => {
  const { allPrice } = props;
  const [phoneNumber, setPhoneNumber] = useState();
  const [district, setDistrict] = useState("");
  const [commission, setCommission] = useState();
  const [residence, setResidence] = useState();
  const [withNumber, setWithNumber] = useState();
  const [codeOfResidence, setCodeOfResidence] = useState();
  const districtArray = [
    "Сүхбаатар дүүрэг",
    "Баянгол дүүрэг",
    "Баянзүрх дүүрэг",
    "Хан-Уул дүүрэг",
    "Чингэлтэй дүүрэг",
    "Сонгино-Хайрхан дүүрэг",
  ];
  const { curUser: user } = useContext(AuthContext);
  const ConfirmPurchase = async () => {
    const url = `${Back_End_url}/userBought`;
    const chocolates = localStorage.getItem("basket");
    console.log("choco", chocolates);
    const Bag = JSON.parse(chocolates);
    const token = localStorage.getItem("token");
    try {
      await axios.post(url, {
        email: user.email,
        token: token,
        allBuy: {
          pay: allPrice,
          number: phoneNumber,
          chocolateName: Bag,
          address: {
            district: district,
            commission: commission,
            residence: residence,
            withNumber: withNumber,
            codeOfResidence: codeOfResidence,
          },
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      <div className="w-full flex justify-center  py-2 text-2xl text1">
        Нийт үнэ: {allPrice}₮
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-2 text2">
        <h1 className=" px-3">Хүргэлт очих дүүрэг?</h1>
        <select
          onChange={(e) => setDistrict(e.target.value)}
          value={district}
          className=" h-8 px-3 py-1 border-2 border-[#BE9131] rounded-xl text2"
        >
          {districtArray.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-2 text2 ">
        <h1 className=" px-3">Хүргэлт очих хороо?</h1>
        <input
          onChange={(e) => setCommission(e.target.value)}
          value={commission}
          className=" px-3 rounded-xl py-1 border-[#BE9131] border-2 text2"
          type="number"
          placeholder="Хэддүгээр хороо болох?"
        />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2 text2 ">
        <h1 className=" px-3">Хүргэлт очих байр?</h1>
        <input
          onChange={(e) => setResidence(e.target.value)}
          className=" px-3 rounded-xl py-1 border-[#BE9131] border-2 text2"
          placeholder="Хэддүгээр байр болох?"
        />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2 text2 ">
        <h1 className=" px-3">Хүргэлт очих тоот?</h1>
        <input
          onChange={(e) => setWithNumber(e.target.value)}
          value={withNumber}
          className=" px-3 rounded-xl py-1 border-[#BE9131] border-2 text2"
          placeholder="Хэддүгээр тоот болох?"
        />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2 text2 ">
        <h1 className=" px-3">Хүргэлт очих байрны код?</h1>
        <input
          onChange={(e) => setCodeOfResidence(e.target.value)}
          value={codeOfResidence}
          className=" px-3 rounded-xl py-1 border-[#BE9131] border-2 text2"
          placeholder="Орцны кодоо оруулна уу?"
        />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2 text2 ">
        <h1 className=" px-3">Дэлгэрэнгүй ?</h1>
        {/* <form onSubmit={() => console.log("hello")}>
          
         <button type="submit">hello</button> 
        </form> */}
        <input
          className="px-3 rounded-xl py-1 border-[#BE9131] border-2 text2"
          placeholder="Хүргэлтийн заавар"
          required
        />
        <p className=" text-slate-300">Жишээ нь: 2-р орц 4-р давхар</p>
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2 text2 ">
        <h1 className=" px-3">Таны утасны дугаар?</h1>
        <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          className=" px-3 rounded-xl py-1 border-[#BE9131] border-2 text2"
          type="number"
          placeholder="Та утасны дугаараа оруулна уу?"
        />
      </div>

      <div className="w-full flex justify-center mt-[20px]">
        <button
          onClick={() => ConfirmPurchase()}
          className="text-2xl px-4 py-2 bg-[#BE9131] text-white rounded-3xl"
        >
          Худалдаж авах
        </button>
      </div>
    </div>
  );
};

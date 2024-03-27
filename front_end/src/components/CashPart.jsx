import { all } from "axios";
import { useState } from "react";
export const CashPart = (props) => {
  const { allPrice } = props;
  const [district, setDistrict] = useState("");
  const [commission, setCommission] = useState("");
  const districtArray = [
    "Сүхбаатар дүүрэг",
    "Баянгол дүүрэг",
    "Баянзүрх дүүрэг",
    "Хан-Уул дүүрэг",
    "Чингэлтэй дүүрэг",
    "Сонгино-Хайрхан дүүрэг",
  ];
  const commissionNumber = 1;
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
          className=" px-3 rounded-xl py-1 border-[#BE9131] border-2 text2"
          type="number"
          placeholder="Хэддүгээр хороо болох?"
        />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2 text2 ">
        <h1 className=" px-3">Хүргэлт очих байр?</h1>
        <input
          className=" px-3 rounded-xl py-1 border-[#BE9131] border-2 text2"
          placeholder="Хэддүгээр байр болох?"
        />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2 text2 ">
        <h1 className=" px-3">Хүргэлт очих тоот?</h1>
        <input
          className=" px-3 rounded-xl py-1 border-[#BE9131] border-2 text2"
          placeholder="Хэддүгээр тоот болох?"
        />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2 text2 ">
        <h1 className=" px-3">Хүргэлт очих байрны код?</h1>
        <input
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
          className=" px-3 rounded-xl py-1 border-[#BE9131] border-2 text2"
          placeholder="Хүргэлтийн заавар"
          required
        />
        <p className=" text-slate-300">Жишээ нь: 2-р орц 4-р давхар</p>
      </div>
      {/* <div>
        <button className="text-2xl px-1 py-1 bg-[#BE9131] rounded-xl">
          Худалдаж авах
        </button>
      </div> */}
    </div>
  );
};

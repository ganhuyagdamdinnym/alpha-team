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
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-center  py-2 text-2xl">
        Нийт үнэ: {allPrice}₮
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2">
        <h1 className="w-2/5 px-3">Хүргэлт очих дүүрэг?</h1>
        <select
          onChange={(e) => setDistrict(e.target.value)}
          value={district}
          className="w-2/5 h-8 px-3 py-1 border-2 border-[#BE9131] rounded-xl"
        >
          {districtArray.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2 ">
        <h1 className="w-2/5 px-3">Хүргэлт очих хороо?</h1>
        <input
          className="w-2/5 px-3 rounded-xl py-1 border-[#BE9131] border-2"
          type="number"
          placeholder="Хэддүгээр хороо болох?"
        />
      </div>
      {/* <div>
        <button className="text-2xl px-1 py-1 bg-[#BE9131] rounded-xl">
          Худалдаж авах
        </button>
      </div> */}
    </div>
  );
};

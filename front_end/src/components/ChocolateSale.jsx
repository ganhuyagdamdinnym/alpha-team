import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Back_End_url } from "@/utils/back-url";
export const ChocolateSale = (props) => {
  const {
    name,
    unit_price,
    box_price,
    count_in_box,
    image,
    id,
    status,
    percent,
    fetchChocolateData,
  } = props;
  const [salePercent, setSalePercent] = useState(0);
  const [saleStatus, setSaleStatus] = useState(false);
  const HandleAbdicateSale = () => {
    setSaleStatus(false);
    setSalePercent(0);
  };
  const statusSale = () => {
    setSaleStatus(true);
  };
  const handleSaleMinus = () => {
    if (salePercent > 0) {
      setSalePercent(salePercent - 1);
    }
  };
  const handleSalePlus = () => {
    if (salePercent < 100) {
      setSalePercent(Number(salePercent) + 1);
    }
  };
  const HandleConfirmSale = async () => {
    const url = `${Back_End_url}/handleSale`;
    const token = localStorage.getItem("token");
    if (salePercent > 0) {
      try {
        await axios.post(url, {
          chocolateId: id,
          salePercent: salePercent,
          token: token,
        });
      } catch (err) {
        console.log(err);
      }
      fetchChocolateData();
    }
    setSaleStatus(false);
  };
  const HandleChocolateDelete = async () => {
    const url = `${Back_End_url}/deleteChocolate`;
    const token = localStorage.getItem("token");
    try {
      await axios.post(url, {
        id: id,
        token: token,
      });
    } catch (err) {
      console.log(err);
    }
    fetchChocolateData();
  };
  const refuseSale = async () => {
    const url = `${Back_End_url}/refuseSale`;
    const token = localStorage.getItem("token");
    try {
      await axios.post(url, {
        chocolateId: id,
        token: token,
      });
    } catch (err) {
      console.log(err);
    }
    fetchChocolateData();
  };
  const inputStyle = {
    "-moz-appearance": "textfield" /* Firefox */,
    appearance: "none" /* Webkit */,
    width: "100%" /* Adjust as needed */,
    padding: "5px" /* Adjust as needed */,
    border: "1px solid #ccc" /* Adjust as needed */,
    borderRadius: "4px" /* Adjust as needed */,
  };
  return (
    <div className="border-[3.5px] border-[#DCDAD7] rounded-[12px] buyBorder bg-white z-0 ">
      <img
        src={`${image}`}
        className="w-full rounded-t-[8px]"
        style={{ aspectRatio: "1" }}
      />
      <div className="w-full h-[130px] border-[#AD70E] px-4 ">
        <h1 className="text-[#2C261F] h-12 font-semibold">{name}</h1>
        <h1 className="text-[#2C261F]">Ширхэгийн үнэ: {unit_price} ₮</h1>
        <h1 className="text-[#2C261F]">Хайрцгийн үнэ: {box_price} ₮</h1>
        <h1 className="">Хайрцаг дахь ширхэг: {count_in_box}ш</h1>
      </div>
      <div className="w-full flex h-[50px] items-center px-4">
        {saleStatus ? (
          <div className="w-full flex justify-center py-2 ">
            <button className="py-1  rounded-s-[10px] px-1">
              <Image
                onClick={() => HandleAbdicateSale()}
                src="xmark.svg"
                height={32}
                width={32}
              />
            </button>
            <div className="flex py-2 px-2 gap-4  border-black ">
              <Image
                onClick={() => handleSaleMinus()}
                className="cursor-pointer opacity-50"
                src="minus.svg"
                height={16}
                width={16}
              />
              <div className="flex items-center text-[22px]">
                <input
                  onChange={(e) => setSalePercent(e.target.value)}
                  value={salePercent}
                  type="Number"
                  className="w-[50px] h-[30px] text-[20px] text-center flex items-center justify-center border-black border-2 hideNumberArrows"
                />
                %
              </div>
              <Image
                onClick={() => handleSalePlus()}
                className="cursor-pointer opacity-50"
                src="plus.svg"
                height={16}
                width={16}
              />
            </div>
            <button
              onClick={() => HandleConfirmSale()}
              className="py-1 border-black rounded-e-[10px]  px-1 "
            >
              <Image
                className="cursor-pointer"
                src="check.svg"
                height={32}
                width={32}
              />
            </button>
          </div>
        ) : (
          <div className="flex justify-between w-full">
            <button
              onClick={() => statusSale()}
              className="px-2 py-1 border-[#BE9131] border-2 rounded-2xl font-medium"
            >
              {status == true ? (
                <p className="h-[20px] flex items-center">
                  {percent}% Хямдруулсан
                </p>
              ) : (
                <p>Хямдруулах</p>
              )}
            </button>
            {status == true ? (
              <button
                onClick={() => refuseSale()}
                className="px-2 py-1 border-[#BE9131] border-2 rounded-2xl font-medium "
              >
                Цуцлах
              </button>
            ) : null}
          </div>
        )}
        <button
          onClick={() => HandleChocolateDelete()}
          className="px-1 fixed top-1 right-0"
        >
          <Image
            className="cursor-pointer"
            src="xmark.svg"
            height={24}
            width={24}
          />
        </button>
      </div>
    </div>
  );
};

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
export const ChocolateImfo = (props) => {
  const { name, unit_price, box_price, count_in_box, image, id, currentRef } =
    props;
  const [handleCount, setHandleCount] = useState(false);
  const [count, setCount] = useState(1);
  const [bag, setBag] = useState([]);
  const buyChocolate = async () => {
    setHandleCount(true);
  };
  const abdicateBuy = async () => {
    setHandleCount(false);
    setCount(0);
  };
  const HandleCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  // console.log("name", name);
  const HandleBuy = async () => {
    const price = count * box_price;
    if (count > 0) {
      if (localStorage.getItem("basket") == null) {
        const newBag = [...bag];
        newBag.push({
          chocolate: id,
          count: count,
          price: box_price,
          name: name,
          image: image,
        });

        // alert(name);
        localStorage.setItem("basket", JSON.stringify(newBag));
        // const basket = localStorage.getItem("basket");
      } else {
        const rawNewBag = localStorage.getItem("basket");
        const newBag = JSON.parse(rawNewBag);
        let status = false;
        newBag.map((e) => {
          if (e.chocolate === id) {
            status = true;
            //alert("hi");
          }
        });
        if (status == true) {
          const updateBag = newBag.map((e) => {
            if (e.chocolate === id)
              return {
                ...e,
                count: e.count + count,
                price: e.price + price,
                name: name,
                image: image,
              };
            return e;
          });
          localStorage.setItem("basket", JSON.stringify(updateBag));
        } else {
          newBag.push({
            chocolate: id,
            count: count,
            price: price,
            name: name,
            image: image,
          });
          localStorage.setItem("basket", JSON.stringify(newBag));
        }
      }
    }
    setHandleCount(false);
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
      <div className="w-full flex h-[50px] items-center">
        {handleCount ? (
          <div ref={currentRef} className="w-full flex justify-center py-2 ">
            <button className="py-1  rounded-s-[10px] px-1">
              <Image
                onClick={() => abdicateBuy()}
                src="xmark.svg"
                height={24}
                width={24}
              />
            </button>
            <div className="flex py-2 px-2 gap-4  border-black ">
              <Image
                onClick={() => HandleCount()}
                className="cursor-pointer"
                src="minus.svg"
                height={16}
                width={16}
              />
              <p className="text-[20px]">{count}х</p>
              <Image
                onClick={() => setCount(count + 1)}
                className="cursor-pointer"
                src="plus.svg"
                height={16}
                width={16}
              />
            </div>
            <button
              onClick={() => HandleBuy()}
              className="py-1 border-black rounded-e-[10px]  px-1 "
            >
              <Image
                className="cursor-pointer"
                src="check.svg"
                height={24}
                width={24}
              />
            </button>
          </div>
        ) : (
          <button
            onClick={() => buyChocolate()}
            className="px-2  rounded-xl ml-2  mb-2"
          >
            <Image src="hoppet.svg" height={24} width={24} />
          </button>
        )}
      </div>
    </div>
  );
};

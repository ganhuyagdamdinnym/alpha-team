import { useState } from "react";
import Image from "next/image";
import axios from "axios";
export const ChocolateImfo = (props) => {
  const {
    name,
    unit_price,
    box_price,
    count_in_box,
    image,
    id,
    currentRef,
    saleStatus,
    salePercent,
    salePrice_unit,
    salePrice_box,
  } = props;
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
        if (saleStatus == true) {
          alert(salePrice_box);
          newBag.push({
            chocolate: id,
            count: count,
            price: salePrice_box,
            name: name,
            image: image,
          });
        } else {
          newBag.push({
            chocolate: id,
            count: count,
            price: box_price,
            name: name,
            image: image,
          });
        }
        localStorage.setItem("basket", JSON.stringify(newBag));
      } else {
        const rawNewBag = localStorage.getItem("basket");
        const newBag = JSON.parse(rawNewBag);
        let status = false;
        newBag.map((e) => {
          if (e.chocolate === id) {
            status = true;
          }
        });
        if (status == true) {
          const updateBag = newBag.map((e) => {
            if (saleStatus == true) {
              if (e.chocolate === id)
                return {
                  ...e,
                  count: e.count + count,
                  price: e.price + salePrice_box,
                  name: name,
                  image: image,
                };
              return e;
            } else {
              if (e.chocolate === id)
                return {
                  ...e,
                  count: e.count + count,
                  price: e.price + price,
                  name: name,
                  image: image,
                };
              return e;
            }
          });
          localStorage.setItem("basket", JSON.stringify(updateBag));
        } else {
          if (saleStatus == true) {
            newBag.push({
              chocolate: id,
              count: count,
              price: salePrice_box,
              name: name,
              image: image,
            });
            localStorage.setItem("basket", JSON.stringify(newBag));
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
    }
    setHandleCount(false);
  };
  return (
    <div className="border-[3.5px] border-[#DCDAD7] rounded-[12px] buyBorder bg-white z-0 relative">
      {saleStatus ? (
        <div>
          <div className="absolute w-24 right-0 h-24 SalePart rounded-tr-lg"></div>
          <p className="absolute top-0 right-0 z-20 text-white text-2xl flex flex-col justify-end">
            <p className="mr-1">Sale</p>
            <p className="">{salePercent}%</p>
          </p>
        </div>
      ) : null}
      <img
        src={`${image}`}
        className="w-full rounded-t-[8px]"
        style={{ aspectRatio: "1" }}
      />
      <div className="w-full h-[130px] border-[#AD70E] px-4 ">
        <h1 className="text-[#2C261F] h-12 font-semibold">{name}</h1>
        <h1 className="text-[#2C261F] flex gap-1">
          Ширхэгийн үнэ:
          <p className="relative">
            {unit_price}₮
            {saleStatus ? (
              <p className="absolute w-full bg-[red] h-[2px] top-3 -rotate-12"></p>
            ) : null}
          </p>
          {saleStatus ? <p className="">{salePrice_unit}₮</p> : null}
        </h1>
        <h1 className="text-[#2C261F] flex gap-1">
          Хайрцгийн үнэ:
          <p className="relative">
            {box_price}₮
            {saleStatus ? (
              <p className="absolute w-full bg-[red] h-[2px] top-3 -rotate-12"></p>
            ) : null}
          </p>
          {saleStatus ? <p className="">{salePrice_box}₮</p> : null}
        </h1>
        <h1 className="">Хайрцаг дахь ширхэг: {count_in_box}ш</h1>
      </div>
      <div className="w-full flex h-[50px] items-center">
        {handleCount ? (
          <div ref={currentRef} className="w-full flex justify-center py-2 ">
            <button className="py-1  rounded-s-[10px] px-1">
              <Image
                onClick={() => abdicateBuy()}
                src="xmark.svg"
                height={32}
                width={32}
              />
            </button>
            <div className="flex py-2 px-2 gap-4  border-black ">
              <Image
                onClick={() => HandleCount()}
                className="cursor-pointer opacity-50"
                src="minus.svg"
                height={16}
                width={16}
              />
              <p className="text-[20px] font-medium">{count}х</p>
              <Image
                onClick={() => setCount(count + 1)}
                className="cursor-pointer opacity-50"
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
                height={32}
                width={32}
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

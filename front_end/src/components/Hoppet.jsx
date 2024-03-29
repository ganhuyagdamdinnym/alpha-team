import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { Back_End_url } from "@/utils/back-url";
export const Hoppet = (props) => {
  const { id, count, price, bag, fetchLocalStorage, name, image } = props;
  const [number, setNumber] = useState(count);
  const [data, setData] = useState();
  const [Oneprice, setOnePrice] = useState(0);
  const fetchChocolateData = async () => {
    try {
      const url = `${Back_End_url}/getChocolatedata`;
      const res = await axios.get(url);
      const chocolote = res?.data?.filter((e) => e._id == id);
      console.log("price", chocolote.box_price);
      setData(chocolote);
      const newprice = chocolote.box_price * count;
      setOnePrice(newprice);
    } catch (err) {
      console.log("err", err);
    }
  };
  const HandleCount = () => {
    if (number > 0) {
      if (count == 1) {
        const newbag = bag.filter((e) => e.chocolate !== id);
        localStorage.setItem("basket", JSON.stringify(newbag));
        fetchLocalStorage();
      } else {
        setNumber(number - 1);
        const newbag = bag.map((e) => {
          const onePrice = e.price / e.count;
          if (e.chocolate === id)
            return { ...e, count: e.count - 1, price: e.price - onePrice };
          return e;
        });
        localStorage.setItem("basket", JSON.stringify(newbag));
        fetchLocalStorage();
        fetchChocolateData();
      }
    }
  };
  const HandleCountPlus = () => {
    setNumber(number + 1);
    const newbag = bag.map((e) => {
      const onePrice = e.price / e.count;
      if (e.chocolate === id)
        return { ...e, count: e.count + 1, price: e.price + onePrice };
      return e;
    });
    localStorage.setItem("basket", JSON.stringify(newbag));
    fetchLocalStorage();
  };
  const abdicateBuy = () => {
    console.log("id", id);
    const newbag = bag.filter((e) => e.chocolate !== id);
    localStorage.setItem("basket", JSON.stringify(newbag));
    fetchLocalStorage();
  };
  useEffect((e) => {
    fetchChocolateData();
  }, []);
  return (
    <div className="">
      {/* {data?.map((e) => ( */}
      <div>
        <div className="border-[3.5px] border-[#DCDAD7] rounded-[12px] buyBorder bg-white z-0">
          <img
            src={`${image}`}
            className="w-full rounded-t-[8px]"
            style={{ aspectRatio: "1" }}
          />
          <div className="flex flex-col items-center">
            <div className="w-full h-[70px] border-[#AD70E] px-4 py-4">
              <h1 className="text-[#2C261F] h-12 text-[12xl] font-semibold">
                {name}
              </h1>
            </div>
            <div className="w-full  px-4 ">
              <h1 className="text-[12xl]">Үнэ:{price}₮</h1>
              <div className="w-full flex items-center text-[12xl] py-3">
                <h1>Тоо ширхэг:</h1>
                <div className="flex px-2 gap-4">
                  <Image
                    onClick={() => HandleCount()}
                    className="cursor-pointer opacity-[0.5] HandleChocolateCount"
                    src="minus.svg"
                    height={16}
                    width={16}
                  />
                  <p className="text-[20px]">{number}</p>
                  <Image
                    onClick={() => HandleCountPlus()}
                    className="cursor-pointer opacity-[0.5] HandleChocolateCount"
                    src="plus.svg"
                    height={16}
                    width={16}
                  />
                </div>
                <button
                  onClick={() => abdicateBuy()}
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
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

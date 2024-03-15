import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
export const Hoppet = (props) => {
  const { id, count, price, bag, fetchLocalStorage } = props;
  const [number, setNumber] = useState(count);
  const [data, setData] = useState();
  const [minusStatus, setMinusStatus] = useState(false);
  const fetchChocolateData = async () => {
    try {
      const url = `http://localhost:8002/getChocolatedata`;
      const res = await axios.get(url);
      const chocolote = res?.data?.filter((e) => e._id == id);
      setData(chocolote);
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleMinus = () => {
    setMinusStatus(true);
  };
  const HandleCount = () => {
    if (number > 0) {
      setNumber(number - 1);
      const newbag = bag.map((e) => {
        if (e.chocolate === id) return { ...e, count: e.count - 1 };
        return e;
      });
      localStorage.setItem("basket", JSON.stringify(newbag));
      fetchLocalStorage();
    }
  };
  const HandleCountPlus = () => {
    setNumber(number + 1);

    const newbag = bag.map((e) => {
      if (e.chocolate === id) return { ...e, count: e.count + 1 };
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
    <div>
      {data?.map((e) => (
        <div>
          <div className="border-2 border-[#DCDAD7] rounded-[10px] buyBorder bg-white z-0">
            <img
              src={`${e.image}`}
              className="w-full rounded-t-[8px]"
              style={{ aspectRatio: "1" }}
            />
            <div className="w-full  h-[100px] border-[#AD70E] px-4 ">
              <h1 className="text-[#2C261F] h-12">{e.name}</h1>
              <h1>Сагсан дахь ширхэг:{number}ш</h1>
              <h1>Үнэ:{price}₮</h1>
            </div>
            {/* {minusStatus ? ( */}
            <div className="w-full flex justify-center py-2">
              <div className="flex py-2 px-2 gap-4 border-2 border-black ">
                <Image
                  onClick={() => HandleCount()}
                  className="cursor-pointer"
                  src="minus.svg"
                  height={16}
                  width={16}
                />
                <p className="text-[20px]">{number}</p>
                <Image
                  onClick={() => HandleCountPlus()}
                  className="cursor-pointer"
                  src="plus.svg"
                  height={16}
                  width={16}
                />
              </div>
              <button
                onClick={() => abdicateBuy()}
                className="py-1 border-black ] border-b-2 border-t-2 border-r-2 px-1 "
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
      ))}
    </div>
  );
};

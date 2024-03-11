import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
export const Hoppet = (props) => {
  const { id, count, price } = props;
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
            <div className="w-full  h-[150px] border-[#AD70E] px-4 ">
              <h1 className="text-[#2C261F] h-12">{e.name}</h1>
              <h1>Сагсан дахь ширхэг:{count}ш</h1>
              <h1>Үнэ:{price}₮</h1>
            </div>
            {minusStatus ? (
              <div className="w-full flex justify-center py-2">
                <button className="py-1 border-b-2 border-t-2 border-l-2 border-black rounded-s-[10px] px-1">
                  <Image
                    onClick={() => abdicateBuy()}
                    src="xmark.svg"
                    height={24}
                    width={24}
                  />
                </button>
                <div className="flex py-2 px-2 gap-4 border-2 border-black ">
                  <Image
                    onClick={() => HandleCount()}
                    className="cursor-pointer"
                    src="minus.svg"
                    height={16}
                    width={16}
                  />
                  <p className="text-[20px]">{count}</p>
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
                  className="py-1 border-black rounded-e-[10px] border-b-2 border-t-2 border-r-2 px-1 "
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
                onClick={() => handleMinus()}
                className="px-2 py-2 border-2 border-[#EBE9E6] rounded-xl ml-2 basketButton"
              >
                <Image
                  src="minus.svg"
                  height={16}
                  width={16}
                  //className="hoppet"
                />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

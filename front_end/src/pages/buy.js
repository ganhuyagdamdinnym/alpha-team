import { Buysort } from "../components/Buysort";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Buy() {
  const [data, setData] = useState();
  const fetchChocolateData = async () => {
    try {
      const url = `http://localhost:8002/getchocolatedata`;
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  console.log("data", data);
  const HandleSort = () => {
    console.log("hi");
  };
  useEffect((e) => {
    fetchChocolateData();
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col gap-2">
      <div>
        <Buysort HandleSort={HandleSort} />
      </div>
      <div className="flex w-full justify-center">
        <div className="  grid-container ">
          {data?.map((e) => (
            <div className=" border-2  border-[#DCDAD7] rounded-[10px] buyBorder ">
              <img src={`${e.image}`} className="w-full rounded-t-[8px]" />
              <div className="w-full h-[200px] border-[#AD70E]  bg-[#EDFEF] px-4 py-3">
                <h1 className="text-[#2C261F] h-12">{e.name}</h1>
                <h1 className="text-[#2C261F]">Ширхэгийн үнэ:{e.unit_price}</h1>
                <h1 className="text-[#2C261F]">Хайрцгийн үнэ:{e.unit_price}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

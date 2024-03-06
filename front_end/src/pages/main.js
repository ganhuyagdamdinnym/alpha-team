"use client";
import { MainChocolateSort } from "@/components/MainChocolateSort";
import { MainSortBuy } from "@/components/mainSortBuy";
import { MainWilley } from "@/components/mainWilley";
import { Data } from "@/components/localData";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Main() {
  const [data, setData] = useState();
  const fetchChocolateData = async () => {
    //alert("hi");
    try {
      const url = `http://localhost:8002/getchocolatedata`;
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchChocolateData();
  }, []);
  return (
    <div className="overflow-scroll">
      <div className="w-[100vw] h-[100vh] max-[1000px]:h-[auto]">
        <MainWilley />
        <MainChocolateSort />
        <MainSortBuy data={data} />
      </div>

      {/* ariukas part lol ;) */}
      <div className="w-[100vw] h-[100vh] flex items-center flex-wrap">
        {Data.map((e, index) => {
          return (
            <div
              key={index}
              className="flex w-[20%] min-w-max-[300px] max-[1000px]:w-[100%]"
            >
              <img src={e.name} alt="image"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

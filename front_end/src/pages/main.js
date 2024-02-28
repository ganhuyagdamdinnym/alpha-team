"use client";
import { HandleSort } from "@/components/HandleSort";
import { MainChocolateSort } from "@/components/MainChocolateSort";
import { MainSortBuy } from "@/components/mainSortBuy";
import { MainWilley } from "@/components/mainWilley";
import { Data } from "@/components/localData";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
export default function Main() {
  const [data, setData] = useState();
  const [bgcolor, setBgcolor] = useState("green");
  const fetchChocolateData = async () => {
    //alert("hi");
    try {
      const url = `http://localhost:8002/getchocolatedata`;
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
    console.log(data);
  };
  useEffect(() => {
    fetchChocolateData();
  }, []);
  return (
    <div className="overflow-scroll">
      <div className="w-[100vw] h-[100vh]">
        <MainWilley />
        <MainChocolateSort />
        <MainSortBuy data={data} />
        <div
          style={{ position: "fixed", bottom: "0", left: "0" }}
          className="w-[100vw] h-[30px] bg-[red] flex items-center"
        >
          <HandleSort bgcolor={bgcolor} />
        </div>
      </div>

      {/* ariukas part lol ;) */}
      <div className="w-[100vw] h-[100vh] flex items-center flex-wrap">
        {Data.map((e, index) => {
          return (
            <div key={index} className="flex w-[20%]">
              <img src={e.name} alt="image"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

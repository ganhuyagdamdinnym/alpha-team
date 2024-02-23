
"use client"
import { HandleSort } from "@/components/HandleSort";
import { MainChocolateSort } from "@/components/MainChocolateSort";
import { MainSortBuy } from "@/components/mainSortBuy";
import { MainWilley } from "@/components/mainWilley";
import { useEffect, useState } from "react";
import axios from "axios";
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
  );
}

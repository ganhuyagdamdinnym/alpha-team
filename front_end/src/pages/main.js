"use client"
import axios from "axios";
import data from "../chocolate/data.json";
import { HandleSort } from "@/components/HandleSort";
import { MainChocolateSort } from "@/components/MainChocolateSort";
import { MainSortBuy } from "@/components/mainSortBuy";
import { MainWilley } from "@/components/mainWilley";
import { useEffect, useState } from "react";
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
    console.log(data);

  };
  useEffect(() => {
    fetchChocolateData();
  }, []);
  return (
    <div>
      <MainWilley />
      <MainChocolateSort />
      <MainSortBuy />
      <HandleSort />
    </div>
  );
}

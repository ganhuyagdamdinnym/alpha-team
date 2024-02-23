"use client";
import { HandleSort } from "@/components/HandleSort";
import { MainChocolateSort } from "@/components/MainChocolateSort";
import { MainSortBuy } from "@/components/mainSortBuy";
import { MainWilley } from "@/components/mainWilley";
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

  console.log("helloo");
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

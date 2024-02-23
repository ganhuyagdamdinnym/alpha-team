"use client";
import Image from "next/image";
import data from "../chocolate/data.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { HomeChocolate } from "../components/HomeChocolate";
import { HomeAllChoco } from "../components/homeAllChoco";
import { HomeAboutCompany } from "@/components/homeAboutCompany";
export default function Home() {
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
  console.log(data);
  const first = async () => {
    // try {
    //   const url = `http://localhost:8002/getchocolate`;
    //   data.map(async (e) => {
    //     await axios.post(url, {
    //       id: e.id,
    //       name: e.name,
    //       unit_price: e.unit_price,
    //       count_in_box: e.count_in_box,
    //       box_price: e.box_price,
    //       image: e.image,
    //       sort: e.sort,
    //     });
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  };
  useEffect(() => {
    fetchChocolateData();
  }, []);
  //map guih jishee
  // {data?.map((e) => (
  //   <div>
  //     {e.name}
  //     <img src={`${e.image}`} />
  //   </div>
  // ))}
  return (
    <div>
      <HomeChocolate />
      <HomeAllChoco />
      <HomeAboutCompany />
    </div>
  );
}

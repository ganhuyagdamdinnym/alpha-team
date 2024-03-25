import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const fetchAllBuyerInfo = async () => {
    try {
      const url = `http://localhost:8002/BuyersData`;
      const res = await axios.get(url);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAllBuyerInfo();
  }, []);
  return <div className="w-full h-[100vh] px-4 py-1 relative">
    <div className="w-full flex flex-col gap-2 fixed t-0 bg-[red]">
      <p className="text-3xl">Hi Admin!</p>
      <div className="w-full">hello</div>
    </div>
    <div className="w-full ">

    </div>
  </div>;
}

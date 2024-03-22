import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const fetchAllBuyerInfo = async () => {
    try {
      const url = `http://localhost:8002/BuyerData`;
      const res = await axios.get(url);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAllBuyerInfo();
  }, []);
  return <div>hello world admin</div>;
}

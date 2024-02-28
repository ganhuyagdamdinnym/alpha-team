import { Buysort } from "@/components/Buysort";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Buy() {
  const fetchChocolateData = async () => {
    try {
      const url = `http://localhost:8002/getchocolatedata`;
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect((e) => {
    fetchChocolateData();
  }, []);
  return (
    <div>
      <div>
        <Buysort />
      </div>
      <div></div>
    </div>
  );
}

"use client";
import Image from "next/image";
import data from "../chocolate/data.json";
import axios from "axios";
export default function Home() {
  const first = async () => {
    try {
      const url = `http://localhost:8002/getchocolate`;
      data.map(async (e) => {
        await axios.post(url, {
          id: e.id,
          name: e.name,
          unit_price: e.unit_price,
          count_in_box: e.count_in_box,
          box_price: e.box_price,
          image: e.image,
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div onClick={() => first()}>
      hello world
      <div className="h-40 w-40">
        <img src="https://res.cloudinary.com/dtilbfc3a/image/upload/v1708509510/chocolate28_tq9tkx.webp" />
      </div>
    </div>
  );
}

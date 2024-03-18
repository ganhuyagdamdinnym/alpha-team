import { HomeChocolate } from "../components/HomeChocolate";
import { HomeAboutCompany } from "../components/homeAboutCompany";
import data from "@/chocolate/data.json";
import { useState, useEffect } from "react";
export default function Home() {
  console.log(data);
  //hereg bolj magadgui
  // const first = async () => {
  //   try {
  //     const url = `http://localhost:8002/getchocolate`;
  //     data.map(async (e) => {
  //       await axios.post(url, {
  //         id: e.id,
  //         name: e.name,
  //         unit_price: e.unit_price,
  //         count_in_box: e.count_in_box,
  //         box_price: e.box_price,
  //         image: e.image,
  //         sort: e.sort,
  //       });
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const relogin = () => {
    // setLoginStat(false);
  };
  useEffect(() => {
    //first();
  }, []);
  // const [data, setData] = useState();
  // const fetchChocolateData = async () => {
  //alert("hi");
  //   try {
  //     const url = `http://localhost:8002/getchocolatedata`;
  //     const res = await axios.get(url);
  //     setData(res.data);
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };
  // const first = async () => {
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
  // };
  // useEffect(() => {
  //   fetchChocolateData();
  // }, []);
  return (
    <div className={`overflow-y-auto`}>
      <HomeChocolate relogin={relogin} />
      <HomeAboutCompany />
    </div>
  );
}

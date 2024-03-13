import { HomeChocolate } from "../components/HomeChocolate";
import { HomeAboutCompany } from "../components/homeAboutCompany";
import data from "@/chocolate/data.json";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  console.log(data);
  const [loginStat, setLoginStat] = useState(false);
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
  const LoginButtonPress = () => {
    setLoginStat(!loginStat);
  };
  const relogin = () => {
    setLoginStat(false);
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
  //map guih jishee
  // {data?.map((e) => (
  //   <div>
  //     {e.name}
  //     <img src={`${e.image}`} />
  //   </div>
  // ))}
  return (
    <div className={`overflow-y-auto`}>
      {/* <div className={`overflow-y-auto ${loginStat ? "opacity-50" : ""}`}> */}
      <HomeChocolate
        LoginButtonPress={LoginButtonPress}
        loginStat={loginStat}
        relogin={relogin}
      />
      <HomeAboutCompany />
    </div>
  )
}

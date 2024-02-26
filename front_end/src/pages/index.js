"use client";
import { HomeChocolate } from "../components/HomeChocolate";
import { HomeAllChoco } from "../components/homeAllChoco";
import { HomeAboutCompany } from "../components/homeAboutCompany";
import { Login } from "../components/Login";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
export default function Home() {
  const [loginStat, setLoginStat] = useState(false);
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
  const LoginButtonPress = () => {
    setLoginStat(!loginStat);
  };
  useEffect(() => {
    fetchChocolateData();
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
    <div className="">
      <div
        className={`w-full h-20 px-2 flex items-center ${
          loginStat ? "opacity-25" : ""
        }`}
      >
        <Header LoginButtonPress={LoginButtonPress} />
      </div>
      {console.log("loginStat", loginStat)}
      {loginStat ? (
        <div className="w-screen h-screen  flex justify-center items-center">
          <Login />
        </div>
      ) : (
        ""
      )}
      <HomeChocolate />
      <HomeAllChoco />
      <HomeAboutCompany />
    </div>
  );
}

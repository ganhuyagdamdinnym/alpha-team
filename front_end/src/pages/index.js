"use client";
import { HomeChocolate } from "../components/HomeChocolate";

import { HomeAboutCompany } from "../components/homeAboutCompany";
import { Login } from "../components/Login";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [data, setData] = useState();
  const [loginStat, setLoginStat] = useState(false);
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
  //   import { getAuth, signInWithPhoneNumber } from "firebase/auth";

  // const phoneNumber = getPhoneNumberFromUserInput();
  // const appVerifier = window.recaptchaVerifier;

  // const auth = getAuth();
  // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  //     .then((confirmationResult) => {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       window.confirmationResult = confirmationResult;
  //       // ...
  //     }).catch((error) => {
  //       // Error; SMS not sent
  //       // ...
  //     });
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
  const relogin = () => {
    setLoginStat(false);
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
    <div className={`overflow-y-auto`}>
      {/* <div className={`overflow-y-auto ${loginStat ? "opacity-50" : ""}`}> */}
      <HomeChocolate
        LoginButtonPress={LoginButtonPress}
        loginStat={loginStat}
        relogin={relogin}
      />
      <HomeAboutCompany />
      <div className="w-[100vw] h-[100vh] bg-white">helloo</div>
    </div>
  );
}

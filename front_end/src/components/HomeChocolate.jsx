"use client";

import { Header } from "./Header";
import { useState } from "react";
import { Login } from "./Login";
export const HomeChocolate = () => {
  const [loginStat, setLoginStat] = useState(false);
  const LoginButtonPress = () => {
    setLoginStat(!loginStat);
  };
  //const [loginStat, setLoginStat] = useState(false);

  return (
    <div className="h-[100vh] w-[100vw]">
      <video autoPlay muted loop id="myVideo">
        <source src="bg.mp4" type="video/mp4" />
      </video>
      <div className="main">
        <Header LoginButtonPress={LoginButtonPress} />
        {loginStat ? <Login /> : null}
      </div>
    </div>
  );
};

"use client";

import { Header } from "./Header";
import { useState } from "react";
import { Login } from "./Login";
export const HomeChocolate = (props) => {
  //const [loginStat, setLoginStat] = useState(false);
  const { LoginButtonPress, loginStat, relogin } = props;
  return (
    <div className="h-[100vh] w-[100vw]">
      {loginStat ? (
        <div className="w-screen h-screen absolute flex justify-center items-center">
          <Login relogin={relogin} />
          <div className="w-screen h-screen absolute top-0 left-0 opacity-50 z-0 bg-white"></div>
        </div>
      ) : null}
      <video autoPlay muted loop id="myVideo">
        <source src="bg.mp4" type="video/mp4" />
      </video>
      <div className="main">
        <Header LoginButtonPress={LoginButtonPress} />
      </div>
    </div>
  );
};

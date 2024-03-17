"use client";

import { Header } from "./Header";
import { useState } from "react";
import { Login } from "./Login";
import { EnterCode } from "./EnterCode";
export const HomeChocolate = (props) => {
  //const [loginStat, setLoginStat] = useState(false);
  const [codeStatus, setCodeStatus] = useState(true);
  const { LoginButtonPress, loginStat, relogin, setLoginStat } = props;
  const createUser = () => {
    setLoginStat(false);
    setCodeStatus(false);
  };
  return (
    <div className="h-[100vh] w-[100vw]">
      {loginStat ? (
        <div className="w-screen h-screen absolute flex justify-center items-center">
          <Login relogin={relogin} createUser={createUser} />
          <div className="w-screen h-screen absolute top-0 left-0 opacity-50 z-0 bg-white"></div>
        </div>
      ) : null}
      {codeStatus ? null : (
        <div className="w-screen h-screen absolute flex justify-center items-center">
          <EnterCode />
        </div>
      )}
      <video autoPlay muted loop id="myVideo">
        <source src="bg.mp4" type="video/mp4" />
      </video>
      <div className="main">
        <Header LoginButtonPress={LoginButtonPress} />
      </div>
    </div>
  );
};

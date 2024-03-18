"use client";

import { Header } from "./Header";
import { useState } from "react";
import { Login } from "./Login";
import { EnterCode } from "./EnterCode";
export const HomeChocolate = (props) => {
  const [loginStat, setLoginStat] = useState(false);
  const [codeStatus, setCodeStatus] = useState(true);
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [input3, setInput3] = useState();
  const [input4, setInput4] = useState();
  const [input5, setInput5] = useState();
  const [input6, setInput6] = useState();
  const [email, setEmail] = useState("");
  // const createUser = () => {
  //   setLoginStat(false);
  //   setCodeStatus(false);
  // };
  const LoginButtonPress = () => {
    setLoginStat(!loginStat);
  };
  const relogin = () => {
    setLoginStat(false);
  };
  const tester = () => {
    // setCodeStatus(false);
    // setLoginStat(false);
  };
  return (
    <div className="h-[100vh] w-[100vw]">
      {loginStat ? (
        <div className="w-screen h-screen absolute flex justify-center items-center">
          <Login
            relogin={relogin}
            codeStatus={codeStatus}
            setCodeStatus={setCodeStatus}
            setLoginStat={setLoginStat}
            loginStat={loginStat}
            email={email}
            setEmail={setEmail}
          />
          <div className="w-screen h-screen absolute top-0 left-0 opacity-50 z-0 bg-white"></div>
        </div>
      ) : null}
      {codeStatus ? null : (
        <div className="w-screen h-screen absolute flex justify-center items-center">
          <EnterCode email={email} />
        </div>
      )}
      <video autoPlay muted loop id="myVideo">
        <source src="bg.mp4" type="video/mp4" />
      </video>
      <div onClick={tester} className="main">
        <Header LoginButtonPress={LoginButtonPress} />
      </div>
    </div>
  );
};

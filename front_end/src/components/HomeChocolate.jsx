"use client";
import { Header } from "./Header";
import { useState } from "react";
import { Login } from "./Login";
import { EnterCode } from "./EnterCode";
export const HomeChocolate = (props) => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <video autoPlay muted loop id="myVideo">
        <source src="bg.mp4" type="video/mp4" />
      </video>
      <div className="main">
        <Header />
      </div>
    </div>
  );
};

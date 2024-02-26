import Image from "next/image";
import { useState, useEffect } from "react";
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-[400px] h-[600px] bg-[#F06742] flex flex-col gap-4 py-2 rounded-xl z-10">
      <div className="w-full text-white  flex flex-row-reverse px-2 ">
        <Image onClick={() => relogin()} src="ban.svg" height={20} width={20} />
      </div>
      <div className="text-black w-full flex justify-center bg-[red]">
        <Image src="logo.svg" height={60} width={60} />
      </div>
      <h1 className="text-2xl w-full flex justify-center text-white">
        НЭВТРЭХ
      </h1>
      <div className="flex flex-col gap-3 full items-center">
        <input
          className="w-80 px-3 py-2 rounded-xl border-solid border-2"
          placeholder="Утасны дугаар"
        />
        <button className="w-80 text-2xl px-3 py-1 bg-[red] rounded-xl text-white border-solid border-2">
          Next
        </button>
        <button></button>
      </div>
    </div>
  );
};

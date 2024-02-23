import Image from "next/image";
import { useState, useEffect } from "react";
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-[500px] h-[800px]  flex flex-col gap-4 py-4">
      <div className="w-full text-white bg-white flex flex-row-reverse">
        <Image src="ban.svg" height={20} width={20} />
      </div>
      <div className="text-black w-full flex justify-center bg-[red]">
        <Image src="logo.svg" height={60} width={60} />
      </div>
      <div className="flex flex-col gap-3 full items-center">
        <input
          className="w-80 px-3 py-2 rounded-xl border-solid border-2"
          placeholder="Email"
        />
        <input
          className="w-80 px-3 py-2 rounded-xl border-solid border-2"
          placeholder="Password"
        />
      </div>
    </div>
  );
};
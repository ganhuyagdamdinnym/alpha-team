import Image from "next/image";
import axios from "axios";
import { useState } from "react";
export const EnterCode = () => {
  const loginByCode = () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-[350px] h-[300px] bg-[#F06742] flex flex-col gap-4 py-2 rounded-xl border-2 border-white">
      <div className="w-full flex justify-center">
        <Image src="logo.svg" width={64} height={64} />
      </div>
      <div className="h-3/4 w-full flex flex-col items-center gap-4">
        <input
          className="w-80 px-2 py-2 text-2xl border-2 border-[red] rounded-xl "
          placeholder="Кодоо оруулна уу"
        />
        <button
          onClick={loginByCode}
          className="px-4 py-1 text-2xl border-2 rounded-xl text-white"
        >
          НЭВТРЭХ
        </button>
      </div>
    </div>
  );
};

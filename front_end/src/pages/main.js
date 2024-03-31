"use client";

import { MainChocolateSort } from "@/components/MainChocolateSort";
import MainPageGlitchFix from "@/components/Sha2";
export default function Main() {
  return (
    <div className="w-[100vw]">
      <MainPageGlitchFix />
    </div>

    // <div className="overflow-scroll">
    //   <div className="w-[100vw] h-[100vh] max-[1000px]:h-[auto]">
    //     <MainChocolateSort />
    //   </div>
    // </div>
  );
}

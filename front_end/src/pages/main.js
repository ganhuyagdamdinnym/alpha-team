"use client";
import { MainChocolateSort } from "@/components/MainChocolateSort";
import { MainSortBuy } from "@/components/mainSortBuy";
//import { MainWilley } from "@/components/mainWilley";
import { Data } from "@/components/localData";
export default function Main() {
  return (
    <div className="overflow-scroll">
      <div className="w-[100vw] h-[100vh] max-[1000px]:h-[auto]">
        <MainWilley />

        <MainChocolateSort />
        <MainSortBuy />
      </div>

      {/* ariukas part lol ;) */}
      <div className="w-[100vw] h-[100vh] flex items-center flex-wrap">
        {Data.map((e, index) => {
          return (
            <div
              key={index}
              className="flex w-[20%] min-w-max-[300px] max-[1000px]:w-[100%]"
            >
              <img src={e.name} alt="image"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

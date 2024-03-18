"use client";
import { MainChocolateSort } from "@/components/MainChocolateSort";
import { MainSortBuy } from "@/components/mainSortBuy";
export default function Main() {
  return (
    <div className="overflow-scroll">
      <div className="w-[100vw] h-[100vh] max-[1000px]:h-[auto]">
        <MainChocolateSort />
        <MainSortBuy />
      </div>

      {/* ariukas part lol ;) */}
    </div>
  );
}

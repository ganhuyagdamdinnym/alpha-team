import { HandleSort } from "@/components/HandleSort";
import { MainChocolateSort } from "@/components/MainChocolateSort";
import { MainSortBuy } from "@/components/mainSortBuy";
import { MainWilley } from "@/components/mainWilley";
export default function Main() {
  return (
    <div>
      <MainWilley />
      <MainChocolateSort />
      <MainSortBuy />
      <HandleSort />
    </div>
  );
}

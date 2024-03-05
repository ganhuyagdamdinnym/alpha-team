import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Basket() {
  const router = useRouter();
  const backToHome = () => {
    router.push("/buy");
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-[#EBE9E6]">
      <div className="w-full h-[10%] border-b-[16px] border-[red] flex items-center justify-between px-8">
        <button
          className="flex gap-4 px-4 bg-white ml-4 rounded-xl w-24"
          onClick={() => backToHome()}
        >
          <Image src="arrowBig.svg" height={64} width={64} className="basket" />
          {/* <Image src="hoppet2.svg" height={64} width={64} className="basket" /> */}
        </button>
        <Image src="logo.svg" width={64} height={64} />
        <div className="flex mr-4 w-24">hello</div>
      </div>
      <div className="w-full h-[90%]"></div>
    </div>
  );
}

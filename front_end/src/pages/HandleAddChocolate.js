import Image from "next/image";
export default function AddChocolate() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="w-full h-[100px] bg-[#BE9131] flex justify-between px-4">
        <button className="text-white text-2xl w-60 font-medium flex justify-center items-center">
          <p className="">Бүтээгдэхүүн нэмэх</p>
        </button>
        <button>
          <Image src="logo.svg" height={96} width={96} />
        </button>
        <button className="text-white text-2xl w-60 font-medium flex justify-center items-center">
          <p>Хөнгөлөлт</p>
        </button>
      </div>
      <div></div>
    </div>
  );
}

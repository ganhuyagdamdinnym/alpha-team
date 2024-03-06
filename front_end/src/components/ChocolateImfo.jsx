import { useState } from "react";
import Image from "next/image";
export const ChocolateImfo = (props) => {
  const { name, unit_price, box_price, count_in_box, image } = props;
  const [bag, setBag] = useState(false);
  const [count, setCount] = useState(0);
  const buyChocolate = async () => {
    setBag(true);
  };
  return (
    <div className="border-2 border-[#DCDAD7] rounded-[10px] buyBorder bg-white z-0">
      <img
        src={`${image}`}
        className="w-full rounded-t-[8px]"
        style={{ aspectRatio: "1" }}
      />
      <div className="w-full  h-[150px] border-[#AD70E] px-4 ">
        <h1 className="text-[#2C261F] h-12">{name}</h1>
        <h1 className="text-[#2C261F]">Ширхэгийн үнэ: {unit_price} ₮</h1>
        <h1 className="text-[#2C261F]">Хайрцгийн үнэ: {box_price} ₮</h1>
        <h1>Хайрцаг дахь ширхэг: {count_in_box}ш</h1>
      </div>
      <div className="w-full flex">
        {bag ? (
          <div className="w-full flex justify-center py-2">
            <button className="py-1 border-b-2 border-t-2 border-l-2 border-black rounded-s-[10px] px-1">
              <Image src="xmark.svg" height={24} width={24} />
            </button>
            <div className="flex py-2 px-2 gap-4 border-2 border-black ">
              <Image
                onClick={() => setCount(count - 1)}
                className="cursor-pointer"
                src="minus.svg"
                height={16}
                width={16}
              />
              <p className="text-[20px]">{count}</p>
              <Image
                onClick={() => setCount(count + 1)}
                className="cursor-pointer"
                src="plus.svg"
                height={16}
                width={16}
              />
            </div>
            <button className="py-1 border-black rounded-e-[10px] border-b-2 border-t-2 border-r-2 px-1 ">
              <Image
                className="cursor-pointer"
                src="check.svg"
                height={24}
                width={24}
              />
            </button>
          </div>
        ) : (
          <button
            onClick={() => buyChocolate()}
            className="px-2 py-2 border-2 border-[#EBE9E6] rounded-xl ml-2 basketButton"
          >
            <Image
              src="hoppet.svg"
              height={16}
              width={16}
              //className="hoppet"
            />
          </button>
        )}
      </div>
    </div>
  );
};

import { useState } from "react";
import Image from "next/image";

export function Info({ e }) {
  const [show, setShow] = useState(true);
  return (
    <div className="flex flex-col px-8 py-2 bg-white w-[80%] h-[400px] rounded-2xl overflow-y-scroll gap-2">
      <p className="text-2xl border-b-[0.1px] border-[#BE9131] px-2">
        И-мэйл: {e.email}
      </p>
      <Image />
      {show && (
        <div className="flex flex-col gap-4 ">
          {e.allBuy?.map((element) => (
            <div className="border-solid border-2  border-[#BE9131] px-4 py-4 rounded-xl flex relative text-[20px]">
              <div className="absolute bottom-4 right-40 w-8 h-4 z-0">
                Хүргэгдээгүй
              </div>
              <div>
                <div className="flex gap-4">
                  <h1>Шоколадны нэрс:</h1>
                  {element.chocolateName.map((el) => (
                    <div className="flex gap-2">
                      <p>{el.name}</p>
                      <p>{el.count}ш,</p>
                    </div>
                  ))}
                </div>
                <p>Худалдааны цаг:{element.createdAt}</p>
                <p>Худалдааны дүн: {element.pay}₮</p>
                <p>Дугаар: {element.number}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

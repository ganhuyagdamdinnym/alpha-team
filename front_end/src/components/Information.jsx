import { useState } from "react";
import Image from "next/image";

export function Info({ e }) {
  const [show, setShow] = useState(false);
  function handlShow() {
    setShow(!show);
  }
  function arrowImg() {
    if (show == false) {
      return "/downArrow.png";
    } else {
      return "/upArrow.png";
    }
  }
  return (
    <div className="flex flex-col px-8 py-2 bg-white w-[80%] rounded-2xl overflow-y-scroll gap-2 AdminHeader bg-[red]">
      <div
        onClick={handlShow}
        className="flex justify-between text-2xl border-b-[0.1px] border-[#BE9131] px-2"
      >
        <p onClick={handlShow} className="email text-[#010391]">
          {e.email}
        </p>
        {/* <div
          style={{
            backgroundImage: `${arrowImg}`,
            width: "24px",
            height: "24px",
          }}
        ></div> */}
      </div>
      {show && (
        <div className="flex flex-col gap-4 ">
          {e.allBuy?.map((element) => (
            <div className="border-solid border-2  border-[#BE9131] px-4 pb-[30px] pt-2 rounded-xl flex relative text-[20px] flex flex-col ">
              <div className="absolute bottom-4 right-40 w-8 h-4 z-0 textStatusInAdminPage font-medium">
                Хүргэгдээгүй
              </div>
              <div>
                <div className="flex flex-wrap">
                  <h1 className="w-44 textInAdminPage">Шоколадны нэрс:</h1>
                  {element.chocolateName.map((el) => (
                    <div className="flex gap-2 textInAdminPage">
                      <p>{el.name}</p>
                      <p>{el.count}ш,</p>
                    </div>
                  ))}
                </div>
                <p className="textInAdminPage">
                  Худалдааны цаг:{element.createdAt}
                </p>
                <p className="textInAdminPage">
                  Худалдааны дүн: {element.pay}₮
                </p>
                <p className="textInAdminPage">Дугаар: {element.number}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

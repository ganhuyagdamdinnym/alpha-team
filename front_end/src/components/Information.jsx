import { useState, useRef } from "react";
import Image from "next/image";
import { faLess } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { Back_End_url } from "@/utils/back-url";
export function Info({ e }) {
  const [show, setShow] = useState(false);

  function handlShow() {
    setShow(!show);
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
            <Hello element={element} e={e} />
          ))}
        </div>
      )}
    </div>
  );
}
const Hello = ({ element, e }) => {
  const [confirmDelivery, setConfirmDelivery] = useState(false);
  const currentRef = useRef(null);
  const handleEdith = () => {
    setConfirmDelivery(true);
  };
  const back = (ref) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setConfirmDelivery(false);
    }
  };
  const handleRemovePurchase = async (id, deliveryId) => {
    console.log(id, deliveryId);
    try {
      const url = `${Back_End_url}/removePurchase`;
      await axios.post(url, {
        id: id,
        deliveryId: deliveryId,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const HandleConfirmDelivery = async (id, deliveryId) => {
    console.log(id, deliveryId);
    try {
      const url = `${Back_End_url}/confirmDelivery`;
      await axios.post(url, {
        id: id,
        deliveryId: deliveryId,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      onClick={() => back(currentRef)}
      className="border-solid border-2  border-[#BE9131] px-4 pb-[30px] pt-2 rounded-xl flex relative text-[20px] flex flex-col "
    >
      <div className="absolute bottom-4 right-4 h-4 z-0  font-medium">
        {element.deliveryStatus == false ? (
          <Image src="notDelivery.svg" height={24} width={24} />
        ) : (
          <Image src="succeedDelivery.svg" height={24} width={24} />
        )}
      </div>
      {confirmDelivery ? (
        <div
          ref={currentRef}
          className="absolute bg-[#F1EFEF] right-4 top-2 p-2 rounded-xl font-medium flex flex-col gap-4"
        >
          <button
            onClick={() => handleRemovePurchase(e._id, element.deliveryId)}
            className="flex items-center gap-2"
          >
            Худалдан авалт цуцлах
            <Image src="trash.svg" height={16} width={16} />
          </button>
          <button
            onClick={() => HandleConfirmDelivery(e._id, element.deliveryId)}
            className="flex items-center gap-2"
          >
            Хүргэлт баталгаажуулах
            <Image src="succeedDelivery.svg" height={24} width={24} />
          </button>
        </div>
      ) : (
        <Image
          onClick={handleEdith}
          className="absolute right-4 top-0 cursor-pointer z-50"
          src="dots.svg"
          height={24}
          width={24}
        />
      )}
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
        <p className="textInAdminPage">Худалдааны цаг:{element.createdAt}</p>
        <p className="textInAdminPage">Худалдааны дүн: {element.pay}₮</p>
        <p className="textInAdminPage">Дугаар: {element.number}</p>
      </div>
    </div>
  );
};

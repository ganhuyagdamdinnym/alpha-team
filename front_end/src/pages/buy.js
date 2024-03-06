import { Buysort } from "../components/Buysort";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Hoppet } from "../components/Hoppet";
import { UserHead } from "@/components/UserHead";
export default function Buy() {
  const router = useRouter();
  const [data, setData] = useState();
  const [sorts, setSorts] = useState();
  const [bag, setBag] = useState([]);
  const [hoppetStatus, setHoppetStatus] = useState(false);
  const fetchChocolateData = async () => {
    try {
      const url = `http://localhost:8002/getchocolatedata`;
      const res = await axios.get(url);
      setData(res.data);
      setSorts(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  const HandleSort = (sort) => {
    console.log("hi", sorts);
    if (sort == "all") {
      setData(sorts);
    } else {
      const category = sorts.filter((e) => e.sort == sort);
      setData(category);
    }
  };
  const HandeHoppetStatus = () => {
    router.push("/basket");
  };
  const buyChocolate = async () => {};
  useEffect((e) => {
    fetchChocolateData();
  }, []);
  return (
    <div
      className={`w-[100wv] h-[100hv] flex flex-col gap-2 tester bg-[#DCD7D8]`}
    >
      {hoppetStatus ? (
        <div className={`opacity-75 fixed w-screen h-screen bg-[#EAE2E3]`}>
          <button
            onClick={() => HandeHoppetStatus()}
            style={{ position: "fixed", right: "20px", top: "35px" }}
          >
            <Image src="hoppet2.svg" width={32} height={32} />
          </button>
        </div>
      ) : null}
      <div
        style={{ position: "fixed", top: "0", left: "0", zIndex: 20 }}
        className="w-full bg-white"
      >
        <UserHead HandeHoppetStatus={HandeHoppetStatus} />
      </div>
      <div style={{ position: "fixed", bottom: "0", left: "0", zIndex: 10 }}>
        <Buysort HandleSort={HandleSort} />
      </div>
      <div className="grid-container mt-16 mb-8 min-w-88">
        {data?.map((e) => (
          <div className="border-2 border-[#DCDAD7] rounded-[10px] buyBorder bg-white z-0">
            <img
              src={`${e.image}`}
              className="w-full rounded-t-[8px]"
              style={{ aspectRatio: "1" }}
            />
            <div className="w-full  h-[150px] border-[#AD70E] px-4 ">
              <h1 className="text-[#2C261F] h-12">{e.name}</h1>
              <h1 className="text-[#2C261F]">
                Ширхэгийн үнэ: {e.unit_price} ₮
              </h1>
              <h1 className="text-[#2C261F]">Хайрцгийн үнэ: {e.box_price} ₮</h1>
              <h1>Хайрцаг дахь ширхэг: {e.count_in_box}ш</h1>
            </div>
            <div className="w-full flex">
              <button className="px-2 py-2 border-2 border-[#EBE9E6] rounded-xl ml-2 basketButton">
                <Image
                  onClick={() => buyChocolate()}
                  src="hoppet.svg"
                  height={16}
                  width={16}
                  //className="hoppet"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

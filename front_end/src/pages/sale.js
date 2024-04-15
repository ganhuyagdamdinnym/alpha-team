import { useEffect, useState } from "react";
import { Back_End_url } from "@/utils/back-url";
import { ChocolateSale } from "@/components/ChocolateSale";
// import { ChocolateImfo } from "@/components/ChocolateI ;
import Image from "next/image";
import axios from "axios";
export default function Sell() {
  const [data, setData] = useState();
  const fetchChocolateData = async () => {
    try {
      const url = `${Back_End_url}/getChocolatedata`;
      const res = await axios.get(url);
      setData(res.data);
      //setSorts(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchChocolateData();
  }, []);
  console.log(data);
  return (
    <div className={`w-[100wv] h-[100hv] flex flex-col gap-2 tester bg-white`}>
      <div className="w-full h-[100px] bg-[#BE9131] flex justify-between px-4 fixed top-0 z-20">
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
      <div className="grid-container mt-32 mb-16 min-w-88 bg-white ">
        {data?.map((e) => (
          <ChocolateSale
            name={e.name}
            unit_price={e.unit_price}
            box_price={e.box_price}
            count_in_box={e.count_in_box}
            image={e.image}
            id={e._id}
            status={e.saleStatus}
            percent={e.salePercent}
            fetchChocolateData={ fetchChocolateData}
            //currentRef={currentRef}
          />
        ))}
      </div>
    </div>
  );
}

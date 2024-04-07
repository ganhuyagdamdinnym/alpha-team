import { useState, useEffect, useContext } from "react";
import { format, compareAsc } from "date-fns";
import axios from "axios";
import { Back_End_url } from "../utils/back-url";
import { AuthContext } from "@/hook/authProvider";
import Image from "next/image";
import { Info } from "@/components/information";
//import Info from "../components/information";
export default function Home() {
  const [data, setData] = useState();
  const [lastBuyerData, setLastBuyerData] = useState();
  const [lastBuyStatus, setLastBuyStatus] = useState(true);
  const { curUser: user } = useContext(AuthContext);
  const fetchAllBuyerInfo = async () => {
    try {
      const url = `${Back_End_url}/BuyersData`;
      const res = await axios.get(url);
      setData(res?.data?.allBuyer);
      console.log(res.data.allBuyer);
    } catch (err) {
      console.log(err);
    }
  };
  format(new Date(2014, 1, 11), "MM/dd/yyyy");
  //=> '02/11/2014'
  const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
  ];
  dates.sort(compareAsc);
  const Users = () => {
    if (lastBuyStatus == false) {
      setLastBuyStatus(true);
    }
  };
  const Last = async () => {
    if (lastBuyStatus == true) {
      try {
        const url = `${Back_End_url}/getAllPurchaseInfo`;
        const res = await axios.get(url);
        console.log("info", res.data.allData);
        setLastBuyerData(res.data.allData);
      } catch (err) {
        console.log(err);
      }
      setLastBuyStatus(false);
    }
  };
  const StyleSS = {
    ...(lastBuyStatus && {
      transition: "all 400ms ease-in-out",
      transform: "rotateY(360deg)",
    }),
  };
  const Style = {
    ...(!lastBuyStatus && {
      transition: "all 400ms ease-in-out",
      transform: "rotateY(360deg)",
    }),
  };
  useEffect(() => {
    fetchAllBuyerInfo();
  }, []);
  return (
    <div className="w-full h-[100vh] bg-[#F1EFEF] relative overflow-scroll">
      <div className=" header1 h-[100px]">
        <p className="text-3xl text-white ">Hi Admin!</p>
        <div className="w-full text-white">{user.name}</div>
        <div className="bttn1">
          <button
            onClick={Users}
            className={`text-2xl rounded-2xl  ${
              lastBuyStatus
                ? "bg-white text-black"
                : "text-white border-b-[2px]"
            } w-40 py-1 border-white`}
          >
            Хэрэглэгчид
          </button>
          <button
            onClick={Last}
            className={`text-2xl rounded-2xl  ${
              lastBuyStatus
                ? "text-white border-b-[2px] border-white"
                : "bg-white text-black"
            } w-40 py-1`}
          >
            Сүүлийн
          </button>
        </div>
      </div>
      <div style={StyleSS}>
        <div
          style={Style}
          className="w-full h-full flex flex-col items-center mt-[90px] py-4"
        >
          {lastBuyStatus ? (
            <div className="w-full h-full flex flex-col items-center gap-8 px-10 ">
              {data?.map((e) => (
                //<Info e={e} />
                <Info e={e} />
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex px-10 flex-col">
              <div className="w-full h-full border-2  border-[#BE9131] flex ">
                <div className="w-[20%] border-r-2 border-[#BE9131] flex justify-center">
                  <div>И-мэйл</div>
                </div>
                <div className="w-[20%] border-r-2 border-[#BE9131] flex justify-center">
                  <div>Утасны дугаар</div>
                </div>
                <div className="w-[20%] border-r-2 border-[#BE9131] flex justify-center">
                  <div>Хаяг</div>
                </div>
                <div className="w-[20%] border-r-2 border-[#BE9131] flex justify-center">
                  <div>Худалдааны цаг</div>
                </div>
                <div className="w-[20%] flex justify-center">
                  <div>Худалдааны дүн</div>
                </div>
              </div>
              {lastBuyerData?.map((buyer) => (
                <div className="w-full h-full border-b-2 border-[#BE9131] flex ">
                  <div className="w-[20%] border-r-2 border-l-2 border-[#BE9131] flex justify-center">
                    <p>{buyer.email}</p>
                  </div>
                  <div className="w-[20%] border-r-2 border-[#BE9131] flex justify-center">
                    <p>{buyer.number}</p>
                  </div>
                  <div className="w-[20%] border-r-2 border-[#BE9131] flex justify-center">
                    <div>{buyer.address}</div>
                  </div>
                  <div className="w-[20%] border-r-2 border-[#BE9131] flex justify-center">
                    <div>Худалдааны цаг</div>
                  </div>
                  <div className="w-[20%] border-r-2 border-[#BE9131] flex justify-center">
                    <div>Худалдааны дүн</div>
                  </div>
                </div>
              ))}
            </div>
            // <div className="w-full h-full flex flex-col items-center gap-8 px-10 border-2  border-[#BE9131]">
            //   {lastBuyerData?.map((e) => (
            //     <div className="flex  text-[20px]  flex-col px-8 py-2 border-solid border-2  border-[#BE9131]  w-[80%] rounded-2xl overflow-y-scroll gap-[2px] relative bg-white">
            //       <p>И-мэйл: {e.email}</p>
            //       <p>Утасны дугаар:{e.number}</p>
            //       <p>Хаяг:{e.address}</p>
            //       <p>Худалдааны цаг:</p>
            //       <p>Худалдааны дүн: {e.pay}₮</p>
            //       <Image
            //         src="dots.svg"
            //         height={24}
            //         width={24}
            //         className="absolute right-4 cursor-pointer"
            //       />
            //     </div>
            //   ))}
            // </div>
          )}
        </div>
      </div>
    </div>
  );
}

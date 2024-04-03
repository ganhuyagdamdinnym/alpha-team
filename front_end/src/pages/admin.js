import { useState, useEffect,useContext } from "react";
import { format, compareAsc } from "date-fns";
import axios from "axios";
import { Back_End_url } from "../utils/back-url";
import { AuthContext } from "@/hook/authProvider";
import Image from "next/image";
export default function Home() {
  const [data, setData] = useState();
  const [lastBuyerData, setLastBuyerData] = useState();
  const [lastBuyStatus, setLastBuyStatus] = useState(true);
  //const[]
  const {curUser: user } = useContext(AuthContext);
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
    <div className="w-full h-[100] bg-[#F1EFEF] relative">
      <div className="w-full flex flex-col px-4 py-1 gap-2 fix top-0 bg-[#BE9131] r-[4px] z-10 border-b-[20px] border-[#F1EFEF] relative">
        <p className="text-3xl text-white">Hi Admin!</p>
        <div className="w-full text-white">{user.name}</div>
        <div className="absolute right-10 flex gap-4 h-full items-center">
          <button
            onClick={Users}
            className={`text-2xl rounded-2xl  ${
              lastBuyStatus
                ? "bg-white text-black"
                : "text-[#DCD7D8] border-b-[2px]"
            } w-40 py-1 border-white`}
          >
            Хэрэглэгчид
          </button>
          <button
            onClick={Last}
            className={`text-2xl rounded-2xl  ${
              lastBuyStatus
                ? "text-[#DCD7D8] border-b-[2px] border-white"
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
            <div className="w-full h-full flex flex-col items-center gap-8 px-10">
              {data?.map((e) => (
                <div className="flex flex-col px-8 py-2 bg-white w-[80%] h-[400px] rounded-2xl overflow-y-scroll gap-2">
                  <p className="text-2xl border-b-[0.1px] border-black px-2">
                    И-мэйл: {e.email}
                  </p>
                  <div className="flex flex-col gap-4 text-white">
                    {e.allBuy?.map((e) => (
                      <div className="bg-[#BE9131] px-4 py-4 rounded-xl flex relative text-[20px]">
                        <div className="absolute bottom-4 right-40 w-8 h-4 z-0">
                          Хүргэгдээгүй
                        </div>
                        <div>
                          <div className="flex gap-4">
                            <h1>Шоколадны нэрс:</h1>
                            {e.chocolateName.map((e) => (
                              <div className="flex gap-2">
                                <p>{e.name}</p>
                                <p>{e.count}ш,</p>
                              </div>
                            ))}
                          </div>
                          <p>Худалдааны цаг:{e.createdAt}</p>
                          <p>Худалдааны дүн: {e.pay}₮</p>
                          <p>Дугаар: {e.number}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center gap-8 px-10">
              {lastBuyerData?.map((e) => (
                <div className="flex text-[20px] font-medium flex-col px-8 py-2 bg-[#BE9131] text-white w-[80%] rounded-2xl overflow-y-scroll gap-[2px] relative">
                  <p >
                    И-мэйл: {e.email}
                  </p>
                  <p>
                    Утасны дугаар:{e.number}
                  </p>
                  <p>
                    Хаяг:{e.address}
                  </p>
                  <p>Худалдааны цаг:</p>
                  <p>Худалдааны дүн: {e.pay}₮</p>
                  <Image src="dots.svg" height={24} width={24} className="absolute right-4 cursor-pointer"/>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

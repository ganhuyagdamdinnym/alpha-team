import { useState, useEffect, useContext } from "react";
import { format, compareAsc } from "date-fns";
import axios from "axios";
import { Back_End_url } from "../utils/back-url";
import { AuthContext } from "@/hook/authProvider";
import Image from "next/image";
import { Info } from "@/components/Information";
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
  console.log(lastBuyerData);
  format(new Date(2014, 1, 11), "MM/dd/yyyy");
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
        <p className="text-3xl text-white hiAdmin ml-2">Hi Admin!</p>
        <div className="w-full text-[#010391] ml-2">{user.name}</div>
        <div className="bttn1 gap-2">
          <button
            onClick={Users}
            className={`text-2xl rounded-2xl  ${
              lastBuyStatus
                ? "bg-white text-[#010391]"
                : "text-white border-b-[2px]"
            } w-40 py-1 border-white buttonInAdminPageHeader`}
          >
            Хэрэглэгчид
          </button>
          <button
            onClick={Last}
            className={`text-2xl rounded-2xl  ${
              lastBuyStatus
                ? "text-white border-b-[2px] border-white"
                : "bg-white text-[#010391]"
            } w-40 py-1 buttonInAdminPageHeader`}
          >
            Сүүлийн
          </button>
        </div>
      </div>
      <div style={StyleSS}>
        <div
          style={Style}
          className="w-full h-full flex flex-col items-center mt-[90px] py-4 px-4"
        >
          {lastBuyStatus ? (
            <div className="w-full h-full flex flex-col items-center gap-8 px-[10px] overflow-x-auto">
              {data?.map((e) => (
                <Info e={e} />
              ))}
            </div>
          ) : (
            <table
              style={{ width: "100%" }}
              className="border-2 border-[#BE9131]"
            >
              <thead>
                <tr className="border-b-2 border-[#BE9131]">
                  <th className="w-[25px] border-r-2 border-[#BE9131]"></th>
                  <th className="border-r-2 border-[#BE9131] min-w-48">
                    И-мэйл
                  </th>
                  <th className="border-r-2 border-[#BE9131] w-32">
                    Утасны дугаар
                  </th>
                  <th className="border-r-2 border-[#BE9131] min-w-48">Хаяг</th>
                  <th className="border-r-2 border-[#BE9131] min-w-48">
                    Худалдааны цаг
                  </th>
                  <th className="border-r-2 border-[#BE9131] min-w-96">
                    Авсан шоколаднууд
                  </th>
                  <th>Худалдааны дүн</th>
                  <th>Стасус</th>
                </tr>
              </thead>
              <tbody>
                {lastBuyerData.map((buyer, index) => (
                  <tr>
                    <td className="border-r-2 border-[#BE9131] border-b-2">
                      {index + 1}
                    </td>
                    <td className="border-r-2 border-[#BE9131] border-b-2">
                      {buyer.email}
                    </td>
                    <td className="border-r-2 border-[#BE9131] border-b-2">
                      {buyer.number}
                    </td>
                    <td className="border-r-2 border-[#BE9131] border-b-2">
                      {buyer.address}
                    </td>
                    <td className="border-r-2 border-[#BE9131] border-b-2">
                      tsag
                    </td>
                    <td className="border-r-2 border-[#BE9131] border-b-2">
                      Germany
                    </td>
                    <td className="border-b-2 border-[#BE9131] border-r-2">
                      {buyer.pay}₮
                    </td>
                    <td className="border-b-2  border-[#BE9131]">
                    
                      {
                        buyer.deliveryStatus==true?<Image src="succeedDelivery.svg" height={16} width={16}/>:<Image src="notDelivery.svg" height={16} width={16}/>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

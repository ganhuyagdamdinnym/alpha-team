import { useState, useEffect, useContext } from "react";
import { format, compareAsc } from "date-fns";
import axios from "axios";
import { Back_End_url } from "../utils/back-url";
import { AuthContext } from "@/hook/authProvider";
import Image from "next/image";
import { Info } from "@/components/Information";
import Head from "next/head";
import { useParams, useRouter } from "next/navigation";

//import Info from "../components/information";
export default function Home() {
  const [data, setData] = useState();
  const [lastBuyerData, setLastBuyerData] = useState();
  const [lastBuyStatus, setLastBuyStatus] = useState(true);
  const { curUser: user } = useContext(AuthContext);
  const [confirmDelivery, setConfirmDelivery] = useState(false);
  console.log("user", user);
  const router = useRouter();
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
  // format(new Date(2014, 1, 11), "MM/dd/yyyy");
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
  console.log("hh", lastBuyerData);
  console.log("data", data);
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
  useEffect(() => {
    // if (user?.email) {
    //   if (user.email !== "damdinnymg@gmail.com") {
    //     router.push("/");
    //   }
    // }
  }, [user]);
  return (
    <div
      //onClick={() => back(currentRef)}
      className="w-full h-[100vh] bg-[#F1EFEF] relative overflow-scroll"
    >
      <Head>
        <title>Chocolate</title>
      </Head>
      <div className="header1 h-[100px]">
        <div className="flex gap-4">
          <p className="text-3xl text-white hiAdmin ml-2">Hi Admin!</p>
          <button
            onClick={() => router.push("/sale")}
            className={`text-xl rounded-2xl text-[#010391] border-b-[2px] w-40 py-1 border-white  bg-white`}
          >
            Бүтээгдэхүүн
          </button>
        </div>

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
          className="h-full mt-[90px] py-4 px-4 w-[100%] overflow-scroll"
        >
          {lastBuyStatus ? (
            <div className="w-full h-full flex flex-col items-center gap-8 px-[10px] overflow-x-auto">
              {data?.map((e) => (
                <Info
                  e={e}
                  confirmDelivery={confirmDelivery}
                  setConfirmDelivery={setConfirmDelivery}
                  fetchAllBuyerInfo={fetchAllBuyerInfo}
                />
              ))}
            </div>
          ) : (
            <div className="">
              <table
                // style={{ width: "100%" }}
                className="border-2 border-[#BE9131] w-[100%]"
              >
                <thead>
                  <tr className="border-b-2 border-[#BE9131]">
                    <th className="w-[25px] border-r-2 border-[#BE9131] min-w-[25px]"></th>
                    <th className="border-r-2 border-[#BE9131] min-w-48">
                      И-мэйл
                    </th>
                    <th className="border-r-2 border-[#BE9131] min-w-24 w-24">
                      Худалдааны Код
                    </th>
                    <th className="border-r-2 border-[#BE9131] w-24 min-w-24">
                      Утасны дугаар
                    </th>
                    <th className="border-r-2 border-[#BE9131] min-w-52">
                      Хаяг
                    </th>
                    <th className="border-r-2 border-[#BE9131] min-w-32">
                      Худалдааны цаг
                    </th>
                    <th className="border-r-2 border-[#BE9131] min-w-96">
                      Авсан шоколаднууд
                    </th>
                    <th className="border-r-2 border-[#BE9131] min-w-24 w-32">
                      Худалдааны дүн
                    </th>
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
                        {buyer.deliveryId}
                      </td>
                      <td className="border-r-2 border-[#BE9131] border-b-2">
                        {buyer.number}
                      </td>
                      <td className="border-r-2 border-[#BE9131] border-b-2">
                        Дүүрэг:{buyer?.address?.district},Хороо:
                        {buyer?.address?.commission},Байр:
                        {buyer?.address?.residence}
                      </td>
                      <td className="border-r-2 border-[#BE9131] border-b-2">
                        {buyer.datenow}
                      </td>
                      <td className="border-r-2 border-[#BE9131] border-b-2 ">
                        {buyer.chocolateName.map((choco) => (
                          <h className="flex gap-2">
                            <p>{choco.name}</p>
                            <p className="font-semibold">{choco.count}ш,</p>
                          </h>
                        ))}
                      </td>
                      <td className="border-b-2 border-[#BE9131] border-r-2">
                        {buyer.pay}₮
                      </td>
                      <td className="border-b-2 border-[#BE9131]">
                        {buyer.deliveryStatus == true ? (
                          <Image
                            className="m-auto"
                            src="succeedDelivery.svg"
                            height={16}
                            width={16}
                          />
                        ) : (
                          <Image
                            className="m-auto"
                            src="notDelivery.svg"
                            height={16}
                            width={16}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

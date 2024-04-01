import { useState, useEffect } from "react";
import { format, compareAsc } from "date-fns";
import axios from "axios";
import { Back_End_url } from "../utils/back-url";
export default function Home() {
  const [data, setData] = useState();
  const [lastBuyStatus, setLastBuyStatus] = useState(false);
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
  const Users = () => {};
  const Last = () => {};
  // const StyleSS = {
  //   ...(signUpAndSignIn && {
  //     transition: "all 400ms ease-in-out",
  //     transform: "rotateY(360deg)",
  //   }),
  // };
  // const Style = {
  //   ...(!signUpAndSignIn && {
  //     transition: "all 400ms ease-in-out",
  //     transform: "rotateY(360deg)",
  //   }),
  // };
  useEffect(() => {
    fetchAllBuyerInfo();
  }, []);
  return (
    <div className="w-full h-[100vh] bg-[#DCD7D8]">
      <div className="w-full flex flex-col px-4 py-1 gap-2 fixed top-0 bg-[#BE9131] r-[4px] z-10 border-b-[20px] border-[#DCD7D8] relative">
        <p className="text-3xl">Hi Admin!</p>
        <div className="w-full">hello</div>
        <div className="absolute right-10 flex gap-4 h-full items-center">
          <button
            onClick={Users}
            className="text-2xl text-[#DCD7D8] bg-white w-40 py-1"
          >
            Хэрэглэгчид
          </button>
          <button
            onClick={Last}
            className="text-2xl text-black bg-white w-40 py-1"
          >
            Сүүлийн
          </button>
        </div>
      </div>
      <div>
        <div className="w-full h-full flex flex-col items-center mt-[90px] py-4  ">
          <div className="w-full h-full flex flex-col items-center gap-8 px-10">
            {data?.map((e) => (
              <div className="flex flex-col px-8 py-2 bg-white w-[80%] h-[400px] rounded-2xl overflow-y-scroll gap-2">
                <p className="text-2xl border-b-[0.1px] border-black px-2">
                  И-мэйл: {e.email}
                </p>
                <div className="flex flex-col gap-4">
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
                        <p>Худалдааны цаг: djj</p>
                        <p>Худалдааны дүн: {e.pay}₮</p>
                        <p>Дугаар: {e.number}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

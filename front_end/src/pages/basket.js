import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Hoppet } from "@/components/Hoppet";
import { CashPart } from "@/components/CashPart";
//import { Back_End_url } from "../utils/back-url";
import { Back_End_url } from "@/utils/back-url";
import { AuthContext } from "@/hook/authProvider";
export default function Basket() {
  const currentRef = useRef(null);
  // const [user, setUser] = useState();
  const { token, curUser: user } = useContext(AuthContext);
  const [bag, setBag] = useState();
  const [BuyStatus, setBuyStatus] = useState(false);
  const [price, setPrice] = useState(0);
  const router = useRouter();
  const fetchLocalstorage = () => {
    //alert("hi");
    if (localStorage.getItem("basket") !== null) {
      const rawBag = localStorage.getItem("basket");
      const Bag = JSON.parse(rawBag);
      let sum = 0;
      Bag.map((e) => {
        sum = sum + Number(e.price);
      });
      setPrice(sum);
      setBag(Bag);
    }
  };
  console.log("price", price);
  const backToBuyPart = () => {
    router.push("/buy");
  };
  const BackToHome = () => {
    router.push("/");
  };
  const HandleToBuy = () => {
    setBuyStatus(true);
  };
  const back = (ref) => {
    if (ref.current && !ref.current.contains(event.target)) {
      //alert("hi");
      setBuyStatus(false);
    }
  };
  useEffect(() => {}, [token]);
  useEffect(() => {
    fetchLocalstorage();
  }, []);

  return (
    <div onClick={() => back(currentRef)} className=" w-[100wv] h-[100hv] ]">
      {/* <div className="w-screen h-screen bg-[red] absolute top-0 z-auto"></div> */}
      <div
        style={{ position: "fixed", top: "0", left: "0", zIndex: 10 }}
        className="w-full bg-white relative"
      >
        <div className="flex items-center justify-center border-[#BE9131] border-b-[15px] py-2 px-4">
          <button
            className="flex gap-4 px-2  ml-4 rounded-xl w-24 bg-white py-2 items-center justify-center fixed left-0"
            onClick={() => backToBuyPart()}
          >
            <Image
              src="arrowBig.svg"
              height={42}
              width={42}
              className="basket"
              priority={true}
            />
            {/* <Image src="hoppet2.svg" height={64} width={64} className="basket" /> */}
          </button>
          <Image
            onClick={() => BackToHome()}
            className="cursor-pointer logoInBasket"
            src="logo.svg"
            width={96}
            height={96}
            priority={true}
          />
          <div className="flex mr-4 gap-2 items-center fixed right-0 userHeadEmail">
            <div className="border-2 border-[#BE9131] rounded-full w-[40px] h-[40px] flex justify-center items-center userBorder">
              <Image
                src="user.svg"
                className="userImage"
                height={24}
                width={24}
              />
            </div>
            <p className="font-medium text-[#000391] text-2xl username">
              {user.name}
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={() => back(currentRef)}
        className={`buy-container mt-32 mb-8 w-full px-4 min-w-88 ${
          BuyStatus ? "opacity-25" : null
        }`}
      >
        {bag?.map((item, index) => (
          <Hoppet
            fetchLocalStorage={fetchLocalstorage}
            id={item.chocolate}
            count={item.count}
            price={item.price}
            name={item.name}
            image={item.image}
            bag={bag}
          />
        ))}
      </div>
      {BuyStatus ? (
        <div
          onClick={() => back(currentRef)}
          style={{ position: "absolute", top: 0, bottom: 0, zIndex: 30 }}
          className="flex justify-center w-screen h-screen items-center relative"
        >
          <div
            style={{ position: "absolute", zIndex: 40 }}
            className="cashPart  "
            ref={currentRef}
          >
            <CashPart
              allPrice={price}
              BuyStatus={BuyStatus}
              setBuyStatus={setBuyStatus}
            />
          </div>
        </div>
      ) : (
        <div
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
          className="px-3 py-2 bg-white rounded-xl border-2 border-[#BE9131]"
          onClick={() => HandleToBuy()}
        >
          <Image src="cash.svg" height={32} width={32} />
        </div>
      )}
    </div>
  );
}

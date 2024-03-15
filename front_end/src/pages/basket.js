import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect, useRef } from "react";
import { UserTokenContext } from "./_app";
import axios from "axios";
import { Hoppet } from "@/components/Hoppet";
export default function Basket() {
  const currentRef = useRef(null);
  const [user, setUser] = useState();
  const { token } = useContext(UserTokenContext);
  const [bag, setBag] = useState();
  const [BuyStatus, setBuyStatus] = useState(false);
  const [price, setPrice] = useState(0);
  const router = useRouter();
  const fetchLocalstorage = () => {
    if (localStorage.getItem("basket") !== null) {
      const rawBag = localStorage.getItem("basket");
      const Bag = JSON.parse(rawBag);
      let sum = 0;
      Bag.map((e) => {
        sum = sum + e.price;
        //setPrice(price + e.price);
      });
      setPrice(sum);
      setBag(Bag);
    }
  };
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
  const UserData = async () => {
    try {
      if (token) {
        const url = `http://localhost:8002/UserData/${token}`;
        const res = await axios.get(url);
        console.log(res.data.User);
        setUser(res.data.User);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    UserData();
  }, [token]);
  useEffect(() => {
    fetchLocalstorage();
  }, []);
  console.log(bag);
  console.log("une", price);
  return (
    <div onClick={() => back(currentRef)} className=" w-[100wv] h-[100hv] ]">
      <div
        style={{ position: "fixed", top: "0", left: "0", zIndex: 20 }}
        className={`w-full border-b-[20px] py-2 border-[red] flex items-center justify-between bg-[#dcd7d8]`}
      >
        <button
          className="flex gap-4 px-4 bg-white ml-4 rounded-xl w-24"
          onClick={() => backToBuyPart()}
        >
          <Image src="arrowBig.svg" height={64} width={64} className="basket" />
        </button>
        <Image
          onClick={() => BackToHome()}
          className="cursor-pointer"
          src="logo.svg"
          width={64}
          height={64}
        />
        <div className="flex mr-4 w-24 gap-2">
          <Image src="user.svg" height={16} width={16} />
          {user?.number}
        </div>
      </div>
      <div
        onClick={() => back(currentRef)}
        className={`buy-container mt-24 mb-8 w-full px-4 min-w-88 ${
          BuyStatus ? "opacity-25" : null
        }`}
      >
        {bag?.map((e, index) => (
          <Hoppet
            fetchLocalStorage={fetchLocalstorage}
            id={e.chocolate}
            count={e.count}
            price={e.price}
            bag={bag}
          />
        ))}
      </div>

      {BuyStatus ? (
        <div
          onClick={() => back(currentRef)}
          style={{ position: "absolute", top: 0, bottom: 0, zIndex: 30 }}
          className="flex justify-center w-screen h-screen items-center"
        >
          <div
            style={{ position: "absolute", zIndex: 40 }}
            className="w-[50%] h-[60%] bg-white border-[red] border-4 rounded-3xl"
            ref={currentRef}
          >
            {" "}
          </div>
        </div>
      ) : (
        <div
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
          className="px-3 py-2 bg-white rounded-xl border-2 border-[red]"
          onClick={() => HandleToBuy()}
        >
          <Image src="cash.svg" height={32} width={32} />
        </div>
      )}
    </div>
  );
}

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import { UserTokenContext } from "./_app";
import axios from "axios";
import { Hoppet } from "@/components/Hoppet";
export default function Basket() {
  const [user, setUser] = useState();
  const { token } = useContext(UserTokenContext);
  const [bag, setBag] = useState();
  const [price, setPrice] = useState(0);
  const router = useRouter();
  const backToHome = () => {
    router.push("/buy");
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
  }, []);
  console.log(bag);
  console.log("une", price);
  return (
    <div className=" w-[100wv] h-[100hv]">
      <div
        style={{ position: "fixed", top: "0", left: "0", zIndex: 20 }}
        className="w-full border-b-[4px] py-2 border-[red] flex items-center justify-between "
      >
        <button
          className="flex gap-4 px-4 bg-white ml-4 rounded-xl w-24"
          onClick={() => backToHome()}
        >

          <Image src="arrowBig.svg" height={64} width={64} className="basket" />
        </button>
        <Image src="logo.svg" width={64} height={64} />
        <div className="flex mr-4 w-24">{user?.number}</div>
      </div>
      <div className="buy-container mt-16 mb-8 min-w-88">
        {bag?.map((e, index) => (
          <Hoppet id={e.chocolate} count={e.count} price={e.price} />
        ))}
      </div>
    </div>
  );
}
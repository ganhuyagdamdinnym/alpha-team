import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import { UserTokenContext } from "./_app";
import axios from "axios";
export default function Basket() {
  const [user, setUser] = useState();
  const { token } = useContext(UserTokenContext);
  console.log(token, "2");
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
    UserData(token);
  }, []);
  return (
    <div className="w-[100vw] h-[100vh] bg-[#EBE9E6]">
      <div className="w-full py-2 border-b-[16px] border-[red] flex items-center justify-between px-8">
        <button
          className="flex gap-4 px-4 bg-white ml-4 rounded-xl w-24"
          onClick={() => backToHome()}
        >
          <Image src="arrowBig.svg" height={64} width={64} className="basket" />
        </button>
        <Image src="logo.svg" width={64} height={64} />
        <div className="flex mr-4 w-24">{user?.number}</div>
      </div>
      <div className="w-full h-[90%]"></div>
    </div>
  );
}

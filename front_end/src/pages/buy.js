import { Buysort } from "../components/Buysort";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserHead } from "@/components/UserHead";
import { UserTokenContext } from "./_app";
import { ChocolateImfo } from "@/components/ChocolateImfo";
export default function Buy() {
  const { token } = useContext(UserTokenContext);
  console.log("token", token);
  const router = useRouter();
  const [data, setData] = useState();
  const [sorts, setSorts] = useState();
  const [user, setUser] = useState();
  //const [hoppetStatus, setHoppetStatus] = useState(false);
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
  const fetchChocolateData = async () => {
    try {
      const url = `http://localhost:8002/getChocolatedata`;
      const res = await axios.get(url);
      setData(res.data);
      setSorts(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  const HandleSort = (sort) => {
    console.log("hi", sorts);
    if (sort == "all") {
      setData(sorts);
    } else {
      const category = sorts.filter((e) => e.sort == sort);
      setData(category);
    }
  };
  const HandeHoppetStatus = () => {
    router.push("/basket");
  };
  useEffect(() => {
    fetchChocolateData();
    UserData();
  }, []);
  useEffect(() => {
    fetchChocolateData();
    UserData();
  }, [token]);
  return (
    <div
      className={`w-[100wv] h-[100hv] flex flex-col gap-2 tester bg-[#DCD7D8]`}
    >
      <div className={`opacity-75 fixed w-screen h-screen bg-[#EAE2E3]`}>
        <button
          onClick={() => HandeHoppetStatus()}
          style={{ position: "fixed", right: "20px", top: "35px" }}
        >
          <Image src="hoppet2.svg" width={32} height={32} />
        </button>
      </div>

      <div
        style={{ position: "fixed", top: "0", left: "0", zIndex: 20 }}
        className="w-full bg-white"
      >
        <UserHead
          HandeHoppetStatus={HandeHoppetStatus}
          userNumber={user?.number}
        />
      </div>
      <div style={{ position: "fixed", bottom: "0", left: "0", zIndex: 10 }}>
        <Buysort HandleSort={HandleSort} />
      </div>
      <div className="grid-container mt-16 mb-8 min-w-88">
        {data?.map((e) => (
          <ChocolateImfo
            name={e.name}
            unit_price={e.unit_price}
            box_price={e.box_price}
            count_in_box={e.count_in_box}
            image={e.image}
            id={e._id}
          />
        ))}
      </div>
    </div>
  );
}

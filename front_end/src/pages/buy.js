import { Buysort } from "../components/Buysort";
import { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserHead } from "@/components/UserHead";
import { ChocolateImfo } from "@/components/ChocolateImfo";
import { Back_End_url } from "@/utils/back-url";
import { AuthContext } from "@/hook/authProvider";
export default function Buy() {
  const currentRef = useRef(null);
  const { token, curUser: user } = useContext(AuthContext);
  const router = useRouter();
  const [data, setData] = useState();
  const [sorts, setSorts] = useState();
  // const [user, setUser] = useState();
  // const UserData = async () => {
  //   try {
  //     if (token) {
  //       const url = `${Back_End_url}/UserData`;
  //       const res = await axios.get(url, {
  //         headers: {
  //           token: token,
  //         },
  //       });
  //       console.log(res.data.User);
  //       setUser(res.data.User);
  //     }
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };
  const back = (ref) => {
    if (ref.current && !ref.current.contains(event.target)) {
      //alert("hi");
      setHandleCount(false);
    }
  };
  const fetchChocolateData = async () => {
    try {
      const url = `${Back_End_url}/getChocolatedata`;
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
    // UserData();
  }, []);
  useEffect(() => {
    // fetchChocolateData();
    // UserData();
  }, [token]);
  return (
    <div
      //onClick={() => back(currentRef)}
      className={`w-[100wv] h-[100hv] flex flex-col gap-2 tester bg-white`}
    >
      {/* <div
        className={`opacity-75 fixed w-screen h-screen bg-[white] border-2 border-[#be9131]`}
      >
        <button
          onClick={() => HandeHoppetStatus()}
          style={{ position: "fixed", right: "20px", top: "35px" }}
          className="border-2 border-[#be9131]"
        >
          <Image src="hoppet2.svg" width={32} height={32} />
        </button>
      </div> */}
      <div
        style={{ position: "fixed", top: "0", left: "0", zIndex: 20 }}
        className="w-full bg-white"
      >
        <UserHead HandeHoppetStatus={HandeHoppetStatus} userEmail={user} />
      </div>
      <div style={{ position: "fixed", bottom: "0", left: "0", zIndex: 10 }}>
        <Buysort HandleSort={HandleSort} />
      </div>
      <div className="grid-container mt-32 mb-16 min-w-88 bg-white ">
        {data?.map((e) => (
          <ChocolateImfo
            name={e.name}
            unit_price={e.unit_price}
            box_price={e.box_price}
            count_in_box={e.count_in_box}
            image={e.image}
            id={e._id}
            currentRef={currentRef}
          />
        ))}
      </div>
    </div>
  );
}

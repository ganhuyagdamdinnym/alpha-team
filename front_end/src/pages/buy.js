import { Buysort } from "../components/Buysort";
import { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserHead } from "@/components/UserHead";
import { ChocolateImfo } from "@/components/ChocolateImfo";
import { Back_End_url } from "@/utils/back-url";
import { AuthContext } from "@/hook/authProvider";
// import { currentUser } from "@clerk/nextjs";
export default function Buy() {
  const currentRef = useRef(null);
  const { token, curUser: user } = useContext(AuthContext);
  const router = useRouter();
  const [data, setData] = useState();
  const [sorts, setSorts] = useState();
  const [handleSortName, setHandleSortName] = useState();
  //get user

  const getUserInfo = async () => {
    // const user = await currentUser();
    // res.json({ user });
    try {
      const result = await axios.get("/api/handleWithGoogle");
      const email = result.data?.user.emailAddresses[0].emailAddress;
      console.log("result", result.data?.user.emailAddresses[0].emailAddress);
      const token = localStorage.getItem("clerk-db-jwt");
      if (token !== null) {
        const url = `${Back_End_url}/userLoginWithGoogle`;
        await axios.post(url, {
          email: email,
        });
      }
    } catch (err) {
      console.log(err);
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

  const HandleSort = (sort, name) => {
    console.log("hi", sorts);
    if (sort == "all") {
      setData(sorts);
    } else {
      const category = sorts.filter((e) => e.sort == sort);
      setData(category);
      setHandleSortName(name);
    }
  };
  const HandeHoppetStatus = () => {
    router.push("/basket");
  };
  useEffect(() => {
    getUserInfo();
    fetchChocolateData();
  }, []);
  useEffect(() => {}, [token]);
  ///
  return (
    <div className={`w-[100wv] h-[100hv] flex flex-col gap-2 tester bg-white`}>
      <div
        style={{ position: "fixed", top: "0", left: "0", zIndex: 20 }}
        className="w-full bg-white"
      >
        <UserHead HandeHoppetStatus={HandeHoppetStatus} userEmail={user} />
      </div>
      <div style={{ position: "fixed", bottom: "0", left: "0", zIndex: 10 }}>
        <Buysort HandleSort={HandleSort} handleSortName={handleSortName} />
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
            saleStatus={e.saleStatus}
            salePercent={e.salePercent}
            salePrice_unit={e.salePrice_unit}
            salePrice_box={e.salePrice_box}
          />
        ))}
      </div>
    </div>
  );
}

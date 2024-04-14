import { HomeChocolate } from "../components/HomeChocolate";
import { HomeAboutCompany } from "../components/HomeAboutCompany";
// import { useEffect } from "react";
import { currentUser } from "@clerk/nextjs";
export default function Home() {
  // const user = await currentUser();
  // console.log(user, "üserr");
  //hereg bolj magadgui
  // const first = async () => {
  //   try {
  //     const url = `http://localhost:8002/getchocolate`;
  //     data.map(async (e) => {
  //       await axios.post(url, {
  //         id: e.id,
  //         name: e.name,
  //         unit_price: e.unit_price,
  //         count_in_box: e.count_in_box,
  //         box_price: e.box_price,
  //         image: e.image,
  //         sort: e.sort,
  //       });
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const relogin = () => {
    // setLoginStat(false);
  };
  // const Tester = async () => {
  //   const user = await currentUser();
  //   console.log("user", user);
  //   res.json({ user });
  // };
  // Tester();
  // useEffect(() => {
  //   //first();
  //   Tester();
  // }, []);
  // const [data, setData] = useState();
  // const fetchChocolateData = async () => {
  //alert("hi");
  //   try {
  //     const url = `http://localhost:8002/getchocolatedata`;
  //     const res = await axios.get(url);
  //     setData(res.data);
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };
  // const first = async () => {
  // try {
  //   const url = `http://localhost:8002/getchocolate`;
  //   data.map(async (e) => {
  //     await axios.post(url, {
  //       id: e.id,
  //       name: e.name,
  //       unit_price: e.unit_price,
  //       count_in_box: e.count_in_box,
  //       box_price: e.box_price,
  //       image: e.image,
  //       sort: e.sort,
  //     });
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
  // };
  // useEffect(() => {
  //   fetchChocolateData();
  // }, []);
  return (
    <div className={`overflow-y-auto `}>
      <div></div>
      <HomeChocolate relogin={relogin} />
      <HomeAboutCompany />s
    </div>
  );
}

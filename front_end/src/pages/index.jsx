import { HomeChocolate } from "../components/HomeChocolate";
import { HomeAboutCompany } from "../components/HomeAboutCompany";
import { useEffect } from "react";
import { useState } from "react";
import { Login } from "../components/Login";
import { EnterCode } from "../components/EnterCode";
import { Header } from "../components/Header";

export default function Home(props) {
  const [loginStat, setLoginStat] = useState(false);
  const [codeStatus, setCodeStatus] = useState(true);
  const [email, setEmail] = useState("");
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

  const LoginButtonPress = () => {
    setLoginStat(true);
  };
  const relogin = () => {
    setLoginStat(false);
  };
  const tester = () => {};
  const back = () => {
    setCodeStatus(true);
  };
  useEffect(() => {
    //first();
  }, []);
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
    <div className={`overflow-y-auto `} relogin={relogin}>
      {loginStat ? (
        <div className="w-screen h-screen absolute flex justify-center items-center">
          <Login
            relogin={relogin}
            codeStatus={codeStatus}
            setCodeStatus={setCodeStatus}
            setLoginStat={setLoginStat}
            loginStat={loginStat}
            email={email}
            setEmail={setEmail}
          />
          <div className="w-[100vw] h-[100vh] absolute top-0 left-0 opacity-50 z-0 bg-white"></div>
        </div>
      ) : null}

      {codeStatus ? null : (
        <div className="w-screen h-screen absolute flex justify-center items-center">
          <EnterCode email={email} back={back} />
        </div>
      )}
      <div onClick={tester} className="main">
        <Header LoginButtonPress={LoginButtonPress} />
      </div>

      <div>
        <HomeChocolate />
        <HomeAboutCompany />
      </div>
    </div>
  );
}

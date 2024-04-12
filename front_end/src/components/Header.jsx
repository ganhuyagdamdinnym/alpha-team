import Image from "next/image";
import { useRouter } from "next/router";
import { Login } from "./Login";
import { useState } from "react";
import { EnterCode } from "./EnterCode";
export const Header = (props) => {
  const router = useRouter();
  // const { LoginButtonPress } = props;
  const [loginStat, setLoginStat] = useState(false);
  const [codeStatus, setCodeStatus] = useState(true);
  const [email, setEmail] = useState("");

  const header = ["About", "Our Chocolate", "Login"];
  const jumptomain = () => {
    router.push("/main");
  };
  const jumptoAbout = () => {
    router.push("/companyAbout");
  };
  const jumptoHome = () => {
    router.push("/");
  };
  const LoginButtonPress = () => {
    setLoginStat(true);
  };
  const relogin = () => {
    setLoginStat(false);
  };
  const back = () => {
    setCodeStatus(true);
  };
  return (
    <div className="w-full fixed t-0 h-10 z-[9999999]">
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
          <div className="w-screen h-screen absolute top-0 left-0 opacity-50 z-0 bg-white"></div>
        </div>
      ) : null}
      {codeStatus ? null : (
        <div className="w-screen h-screen absolute flex justify-center items-center">
          <EnterCode email={email} back={back} />
        </div>
      )}
      <div className="w-full flex justify-center text-white text-2xl gap-8 items-center mt-[20px] bg-white py-1">
        <button onClick={() => jumptomain()}>
          <p
            style={{ color: "#160d98" }}
            className="font-medium border-b-[0.5px] border-[#160d98] px-1 header-choco  w-36 headerText"
          >
            ШОКОЛАД
          </p>
        </button>
        <Image
          onClick={jumptoHome}
          className="cursor-pointer logoInBasket"
          priority={true}
          alt="logo"
          src="logo.svg"
          height={96}
          width={96}
        />
        <button onClick={jumptoAbout}>
          <p
            style={{ color: "#160d98" }}
            className="font-medium border-b-[0.5px] border-[#160d98] px-1 header-choco w-36 headerText"
          >
            ТУХАЙ
          </p>
        </button>
        <button onClick={() => LoginButtonPress()} className="buy rounded-xl ">
          <p>ХУДАЛДАА ХИЙХ</p>
        </button>
      </div>
    </div>
  );
};

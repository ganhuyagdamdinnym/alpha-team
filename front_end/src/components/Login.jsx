import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { UserTokenContext } from "@/pages/_app";
import axios from "axios";
export const Login = (props) => {
  const { relogin, email, setEmail, setCodeStatus, setLoginStat, loginStat } =
    props;
  const { token } = useContext(UserTokenContext);
  //const [email, setEmail] = useState("");
  const router = useRouter();
  // const createUser = async () => {
  //   if (number == "") {
  //     alert("utasnii dugaaraa hiine uu");
  //   } else {
  //     try {
  //       const url = `http://localhost:8002/createUser`;
  //       const response = await axios.post(url, {
  //         number: number,
  //       });
  //       router.push("/buy");
  //       console.log(response.data);
  //       localStorage.setItem("token", response.data.message);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };
  const ShortEmail = token.split("@");
  // Take the first part of the split string
  const cutString = ShortEmail[0]; // Or you can use destructuring like const [cutString] = parts;
  //console.log("con", cutString);
  const loginCurrentUser = () => {
    if (token) {
      router.push("/buy");
    }
  };
  const loginByEmail = async () => {
    if (email == "") {
      alert("И-мэйл хаягаа оруулна уу");
    } else {
      setCodeStatus(false);
      setLoginStat(false);
      try {
        const url = `http://localhost:8002/loginByEmail/${email}`;
        await axios.get(url);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="w-[500px] h-[600px] bg-[#F06742] flex flex-col gap-4 py-2 rounded-xl z-10 loginPart">
      <div className="w-full text-white  flex flex-row-reverse px-2 ">
        <Image
          alt="photo"
          onClick={() => relogin()}
          src="ban.svg"
          height={20}
          width={20}
        />
      </div>
      <div className="text-black w-full flex justify-center bg-[red]">
        <Image
          alt="photo"
          priority={true}
          src="logo.svg"
          height={60}
          width={60}
        />
      </div>
      <h1 className="text-2xl w-full flex justify-center text-white">
        НЭВТРЭХ
      </h1>
      <div className="flex w-full justify-center">
        <div className="w-3/4 text-2xl py-1  rounded-xl text-[white] flex flex-col gap-2">
          <button
            onClick={() => loginCurrentUser()}
            className="w-full text-2xl py-1 bg-[red] rounded-xl text-[#dcd7d8] border-solid border-2 flex flex-col items-center"
          >
            {cutString}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 full items-center">
        <form
          className="w-full flex flex-col gap-3 full items-center"
          onSubmit={loginByEmail}
        >
          <input
            className="w-3/4 px-3 py-2 rounded-xl border-solid border-2"
            type="email"
            placeholder="И-мэйл хаягаа оруулна уу"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button
            type="submit"
            className="w-3/4 text-2xl px-3 py-1 bg-[red] rounded-xl text-white border-solid border-2"
          >
            НЭВТРЭХ
          </button>
        </form>

        <button></button>
      </div>

      <div id="sign-in-button"></div>
    </div>
  );
};

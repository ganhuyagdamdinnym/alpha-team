import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { Back_End_url } from "@/utils/back-url";
import axios from "axios";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import { AuthContext } from "@/hook/authProvider";
export const Login = (props) => {
  const { relogin, email, setEmail, setCodeStatus, setLoginStat, loginStat } =
    props;
  //const { token } = useContext(AuthContext);
  const { token, curUser: user } = useContext(AuthContext);
  const router = useRouter();
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
        const url = `${Back_End_url}/loginByEmail/${email}`;
        await axios.get(url);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="w-[500px] h-[600px] bg-[#F06742] flex flex-col gap-4  rounded-xl z-10 loginPart">
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
          {user.name == null ? null : (
            <button
              onClick={() => loginCurrentUser()}
              className="w-full text-2xl py-1 bg-[red] rounded-xl text-white border-solid border-2 flex  items-center justify-center  h-[40px]"
            >
              {user.name}
            </button>
          )}
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
        {token ? null : (
          <SignInButton afterSignInUrl="/buy" afterSignUpUrl="/buy">
            <div className="flex bg-white w-3/4 h-[36px] items-center gap-2 justify-center rounded-xl text-[20px]">
              <div>
                <img src="googleIcon.png" className="h-[20px] w-[20px]" />
              </div>
              <p className="font-medium text-2xl signInButton">
                Continue with google
              </p>
            </div>
          </SignInButton>
        )}
      </div>
      <div id="sign-in-button"></div>
    </div>
  );
};

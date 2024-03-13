import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { UserTokenContext } from "@/pages/_app";
import axios from "axios";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/pages/_app";
import { root } from "postcss";
export const Login = (props) => {
  const { relogin } = props;
  const { token } = useContext(UserTokenContext);
  const router = useRouter();
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const createUser = async () => {

    if (number == "") {
      alert("utasnii dugaaraa hiine uu");
    } else {
      try {
        const url = `http://localhost:8002/createUser`;
        const response = await axios.post(url, {
          number: number,
        });
        router.push("/buy");
        console.log(response.data);
        localStorage.setItem("token", response.data.message);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const loginCurrentUser = () => {
    if (token) {
      router.push("/buy");
    }
  };
  // useEffect(() => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
  //     size: "invisible",
  //     callback: (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       onSignInSubmit();
  //     },
  //   });
  //   window.recaptchaVerifier.render().then(function (widgetId) {
  //     grecaptcha.reset(widgetId);
  //   });
  // }, []);
  // const createUser = () => {
  //   const appVerifier = window.recaptchaVerifier;
  //   createUserWithEmailAndPassword(auth, "email@gmail.com", "pass1234")
  //     .then((authUser) => {
  //       console.log("Success. The user is created in Firebase");
  //       router.push("/logged_in");
  //     })
  //     .catch((error) => {
  //       // An error occurred. Set error message to be displayed to user
  //       // setError(error.message);
  //     });
  //   // signInWithPhoneNumber(auth, "+97696483484", appVerifier)
  //   //   .then((confirmationResult) => {
  //   //     console.log(confirmationResult);
  //   //     window.confirmationResult = confirmationResult;
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error(error);
  //   //   });
  // };
  return (
    <div className="w-[400px] h-[600px] bg-[#F06742] flex flex-col gap-4 py-2 rounded-xl z-10 loginPart">
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
        <Image alt="photo" src="logo.svg" height={60} width={60} />
      </div>
      <h1 className="text-2xl w-full flex justify-center text-white">
        НЭВТРЭХ
      </h1>
      <div className="flex w-full justify-center">
        <div className="w-3/4 text-2xl py-1  rounded-xl text-[white] flex flex-col gap-2">
          {/* <div className="flex w-full justify-center gap-4 text-[35px]">
            <Image src="user2.svg" height={24} width={24} />
            {token}
          </div> */}
          <button
            onClick={() => loginCurrentUser()}
            className="w-full text-2xl py-1 bg-[red] rounded-xl text-[#dcd7d8] border-solid border-2 flex flex-col items-center"
          >
            <p>Одоогийн хэрэглэгч</p>
            {/* <div className="flex gap-2">
              <Image
                src="user2.svg"
                height={16}
                width={16}
                className="rounded-full w-8 h-8 px-1 py-1 border-2 border-solid"
              />
              {token}
            </div> */}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 full items-center">
        <input
          className="w-3/4 px-3 py-2 rounded-xl border-solid border-2"
          type="number"
          placeholder="Утасны дугаар"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        {/* <input
          className="w-3/4 px-3 py-2 rounded-xl border-solid border-2"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        /> */}
        <button
          onClick={createUser}
          className="w-3/4 text-2xl px-3 py-1 bg-[red] rounded-xl text-white border-solid border-2"
        >
          НЭВТРЭХ
        </button>

        <button></button>
      </div>

      <div id="sign-in-button"></div>
    </div>
  );
};

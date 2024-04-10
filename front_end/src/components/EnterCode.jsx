import Image from "next/image";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Back_End_url } from "@/utils/back-url";
import { AuthContext } from "@/hook/authProvider";
// import { Back_End_url } from "@/pages/back-url";
export const EnterCode = (props) => {
  const { email, back } = props;
  const router = useRouter();
  const { setToken } = useContext(AuthContext);

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);
  const options = {
    1: input1Ref,
    2: input1Ref,
    3: input2Ref,
    4: input3Ref,
    5: input4Ref,
    6: input5Ref,
  };
  const HandleNextInput = (e) => {
    if (e.target.value === "") {
      if (input1Ref.current.value == "") {
        input1Ref.current.focus();
      } else if (input2Ref.current.value == "") {
        input2Ref.current.focus();
      } else if (input3Ref.current.value == "") {
        input3Ref.current.focus();
      } else if (input4Ref.current.value == "") {
        input4Ref.current.focus();
      } else if (input5Ref.current.value == "") {
        input5Ref.current.focus();
      } else if (input6Ref.current.value == "") {
        input6Ref.current.focus();
      }
    }
  };
  const HandleBackspace = (e) => {
    if (e.key == "Backspace") {
    }
  };
  const HandleChange = async (e, inputRef, number) => {
    console.log(e.key);
    if (
      e.key == "1" ||
      e.key == "2" ||
      e.key == "3" ||
      e.key == "4" ||
      e.key == "5" ||
      e.key == "6" ||
      e.key == "7" ||
      e.key == "8" ||
      e.key == "9" ||
      e.key == "0"
    ) {
      inputRef.current.value = e.key;
      if (input1Ref.current.value == "") {
        input1Ref.current.focus();
      } else if (input2Ref.current.value == "") {
        input2Ref.current.focus();
      } else if (input3Ref.current.value == "") {
        input3Ref.current.focus();
      } else if (input4Ref.current.value == "") {
        input4Ref.current.focus();
      } else if (input5Ref.current.value == "") {
        input5Ref.current.focus();
      } else if (input6Ref.current.value == "") {
        input6Ref.current.focus();
      }
    } else if (e.key == "Backspace") {
      console.log(inputRef.current.value);
      if (inputRef.current.value) {
        return;
      } else {
        console.log(options[number]);
        options[number]?.current.focus();
      }
    }
    if (
      input1Ref.current.value !== "" &&
      input2Ref.current.value !== "" &&
      input3Ref.current.value !== "" &&
      input4Ref.current.value !== "" &&
      input5Ref.current.value !== "" &&
      input6Ref.current.value !== ""
    ) {
      try {
        const code =
          input1Ref.current.value +
          input2Ref.current.value +
          input3Ref.current.value +
          input4Ref.current.value +
          input5Ref.current.value +
          input6Ref.current.value;
        console.log("email", code, email);
        const url = `${Back_End_url}/loginByEmail`;
        const res = await axios.post(url, {
          email: email,
          code: code,
        });
        if (res.data.message == "not") {
          alert("code is wrong");
          input1Ref.current.value = "";
          input2Ref.current.value = "";
          input3Ref.current.value = "";
          input4Ref.current.value = " ";
          input5Ref.current.value = "";
          input6Ref.current.value = "";
          input1Ref.current.focus();
        } else {
          const token = res.data.token;
          console.log("token", res.data);
          localStorage.setItem("token", token);
          localStorage.removeItem("basket");
          setToken(token);

          if (name == "dulamsuren894@gmail.com") {
            router.push("/admin");
          } else {
            router.push("/buy");
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="w-[350px] h-[300px] bg-[#F06742] flex flex-col gap-4 py-2 rounded-xl border-2 border-white relative">
      <div onClick={back} className=" absolute right-2 top-2">
        <Image src="x.svg" height={16} width={16} />
      </div>
      <div className="w-full flex justify-center">
        <Image src="logo.svg" priority={true} width={64} height={64} />
      </div>
      <div className="h-3/4 w-full flex flex-col items-center gap-4">
        <div className="w-80 px-2 py-2 text-3xl  flex gap-2 justify-center">
          <input
            value=""
            ref={input1Ref}
            className="w-[30px] text-center rounded-[5px] py-2"
            onKeyUpCapture={(e) => HandleChange(e, input1Ref, 1)}
            onClick={(e) => HandleNextInput(e)}
            onKeyDown={(e) => HandleBackspace(e)}
          />
          <input
            value=""
            ref={input2Ref}
            onKeyUpCapture={(e) => HandleChange(e, input2Ref, 2)}
            onKeyDown={(e) => HandleBackspace(e)}
            onClick={(e) => HandleNextInput(e)}
            className="w-[30px] text-center rounded-[5px]"
          />
          <input
            onKeyUpCapture={(e) => HandleChange(e, input3Ref, 3)}
            onClick={(e) => HandleNextInput(e)}
            onKeyDown={(e) => HandleBackspace(e)}
            ref={input3Ref}
            className="w-[30px] text-center rounded-[5px]"
          />
          <input
            ref={input4Ref}
            className="w-[30px] text-center rounded-[5px]"
            onKeyUpCapture={(e) => HandleChange(e, input4Ref, 4)}
            onClick={(e) => HandleNextInput(e)}
            onKeyDown={(e) => HandleBackspace(e)}
          />
          <input
            ref={input5Ref}
            className="w-[30px] text-center rounded-[5px]"
            onKeyUpCapture={(e) => HandleChange(e, input5Ref, 5)}
            onClick={(e) => HandleNextInput(e)}
            onKeyDown={(e) => HandleBackspace(e)}
          />
          <input
            ref={input6Ref}
            className="w-[30px] text-center rounded-[5px]"
            onKeyUpCapture={(e) => HandleChange(e, input6Ref, 6)}
            onClick={(e) => HandleNextInput(e)}
            onKeyDown={(e) => HandleBackspace(e)}
          />
        </div>
      </div>
    </div>
  );
};

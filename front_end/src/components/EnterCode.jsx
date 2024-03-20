import Image from "next/image";
import axios from "axios";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
export const EnterCode = (props) => {
  const { email } = props;
  const router = useRouter();
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);
  // const loginByCode = async () => {
  //   try {
  //     const url = `http://localhost:8002/loginByEmail`;
  //     const res = await axios.post(url, {
  //       email: email,
  //       code: code,
  //     });
  //     if (res.data.message == "ok") {
  //       router.push("/buy");
  //     } else {
  //       alert("code is wrong");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
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
  const HandleBackspace = (e) => {};
  const HandleChange = async (e, inputRef) => {
    console.log(e.key);
    if (e.key == Number) {
      alert("hi");
    }
    inputRef.current.value = e.key;

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
        const url = `http://localhost:8002/loginByEmail`;
        const res = await axios.post(url, {
          email: email,
          code: code,
        });
        if (res.data.message == "not") {
          alert("code is wrong");
        } else {
          router.push("/buy");
          console.log("ss", response.data.message);
          localStorage.setItem("token", response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  // const Tester = () => {
  //   const code = input1Ref.current.value + input2Ref.current.value;
  //   console.log("code", code);
  // };
  return (
    <div className="w-[350px] h-[300px] bg-[#F06742] flex flex-col gap-4 py-2 rounded-xl border-2 border-white">
      <div className="w-4 h-4 bg-[white] absolute right-"></div>
      <div className="w-full flex justify-center">
        <Image src="logo.svg" priority={true} width={64} height={64} />
      </div>
      <div className="h-3/4 w-full flex flex-col items-center gap-4">
        <div className="w-80 px-2 py-2 text-2xl border-2 border-[red] rounded-xl flex gap-2 justify-center">
          <input
            value=""
            ref={input1Ref}
            className="w-[20px] text-center rounded-[5px]"
            onKeyUpCapture={(e) => HandleChange(e, input1Ref)}
            onClick={(e) => HandleNextInput(e)}
            onKeyDown={(e) => HandleBackspace(e)}
          />
          <input
            value=""
            ref={input2Ref}
            onChange={(e) => HandleChange(e)}
            onKeyDown={(e) => HandleBackspace(e)}
            onClick={(e) => HandleNextInput(e)}
            className="w-[20px] text-center rounded-[5px]"
          />
          <input
            value=""
            onChange={(e) => HandleChange(e)}
            onClick={(e) => HandleNextInput(e)}
            onKeyDown={(e) => HandleBackspace(e)}
            ref={input3Ref}
            // onChange={() => {
            //   input4Ref.current.focus();
            // }}
            className="w-[20px] text-center rounded-[5px]"
          />
          <input
            ref={input4Ref}
            // onChange={() => {
            //   console.log(input2Ref.current);
            //   input5Ref.current.focus();
            // }}
            className="w-[20px] text-center rounded-[5px]"
            onChange={(e) => HandleChange(e)}
            onClick={(e) => HandleNextInput(e)}
            onKeyDown={(e) => HandleBackspace(e)}
          />
          <input
            ref={input5Ref}
            // onChange={() => {
            //   console.log(input2Ref.current);
            //   input6Ref.current.focus();
            // }}
            className="w-[20px] text-center rounded-[5px]"
            onChange={(e) => HandleChange(e)}
            onClick={(e) => HandleNextInput(e)}
            onKeyDown={(e) => HandleBackspace(e)}
          />
          <input
            ref={input6Ref}
            className="w-[20px] text-center rounded-[5px]"
            onChange={(e) => HandleChange(e)}
            onClick={(e) => HandleNextInput(e)}
            onKeyDown={(e) => HandleBackspace(e)}
          />
        </div>
      </div>
    </div>
  );
};

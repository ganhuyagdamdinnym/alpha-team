import Image from "next/image";
import axios from "axios";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
export const EnterCode = (props) => {
  const router = useRouter();
  const { email } = props;
  const [code, setCode] = useState("");
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);
  const loginByCode = async () => {
    try {
      const url = `http://localhost:8002/loginByEmail`;
      const res = await axios.post(url, {
        email: email,
        code: code,
      });
      if (res.data.message == "ok") {
        router.push("/buy");
      } else {
        alert("code is wrong");
      }
    } catch (err) {
      console.log(err);
    }
    // alert(email);
  };
  return (
    <div className="w-[350px] h-[300px] bg-[#F06742] flex flex-col gap-4 py-2 rounded-xl border-2 border-white">
      <div className="w-full flex justify-center">
        <Image src="logo.svg" width={64} height={64} />
      </div>
      <div className="h-3/4 w-full flex flex-col items-center gap-4">
        <input
          onChange={(e) => setCode(e.target.value)}
          value={code}
          className="w-80 px-2 py-2 text-2xl border-2 border-[red] rounded-xl "
          placeholder="Кодоо оруулна уу"
        />
        <div className="w-80 px-2 py-2 text-2xl border-2 border-[red] rounded-xl flex gap-2 justify-center">
          <input
            ref={input1Ref}
            className="w-[20px] text-center"
            onChange={() => {
              if (input1Ref.current.value == null) {
              } else {
                console.log("hi", input1Ref.current.value);
                setCode(input1Ref.current.value);
                input2Ref.current.focus();
              }
            }}
            // onClick={(e) => {
            //   if (e.target.value !== "") {
            //     input2Ref.current.focus();
            //   }
            // }}
            // onKeyDown={}
          />
          <input
            ref={input2Ref}
            onChange={() => {
              input3Ref.current.focus();
            }}
            className="w-[20px] text-center"
          />
          <input
            ref={input3Ref}
            onChange={() => {
              input4Ref.current.focus();
            }}
            className="w-[20px] text-center"
            onClick={() => {}}
          />
          <input
            ref={input4Ref}
            onChange={() => {
              console.log(input2Ref.current);
              input5Ref.current.focus();
            }}
            className="w-[20px] text-center"
            onClick={() => {}}
          />
          <input
            ref={input5Ref}
            onChange={() => {
              console.log(input2Ref.current);
              input6Ref.current.focus();
            }}
            className="w-[20px] text-center"
            onClick={() => {}}
          />
          <input
            ref={input6Ref}
            className="w-[20px] text-center"
            onClick={() => {}}
          />
        </div>
        <button
          onClick={loginByCode}
          className="px-4 py-1 text-2xl border-2 rounded-xl text-white"
        >
          НЭВТРЭХ
        </button>
      </div>
    </div>
  );
};

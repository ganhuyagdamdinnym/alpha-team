import { Back_End_url } from "@/utils/back-url";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState();
  const [curUser, setCurUser] = useState({});

  const checkToken = () => {
    if (window == "/main") {
    } else {
      const localToken = localStorage.getItem("token");
      if (localToken === null) {
        router.push("/");
      } else {
        setToken(localToken);
        getUserData(localToken);
      }
    }
  };
  const getUserData = async (token) => {
    try {
      if (token) {
        const url = `${Back_End_url}/UserData`;
        const res = await axios.get(url, {
          headers: {
            token: token,
          },
        });
        // console.log(res.data.User);
        const user = res.data.User.email;
        const shortEmail = user.split("@");
        const name = shortEmail[0];
        setCurUser({ ...res.data.User, name });
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const value = { token, curUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

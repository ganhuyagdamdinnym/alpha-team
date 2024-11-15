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
    // window /main tai tentskue
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
  // const checkAdminToken = () => {
  //   if (window?.location?.pathname == "/admin") {

  //   } else {
  //     const localToken = localStorage.getItem("token");
  //     if (localToken === null) {
  //       router.push("/");
  //     } else {
  //       setToken(localToken);
  //       getUserData(localToken);
  //     }
  //   }
  // };
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
    if (token) getUserData(token);
  }, [token]);

  useEffect(() => {
    checkToken();
  }, []);

  const value = { token, curUser, setToken, getUserData };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

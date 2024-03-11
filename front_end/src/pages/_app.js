import "@/styles/globals.css";
import { useRouter } from "next/navigation";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const UserTokenContext = createContext({});
// const firebaseConfig = {
//   apiKey: "AIzaSyDPVatrQKiEBy2xZlRVwyFLxg9YCI8uJIA",
//   authDomain: "test-a3593.firebaseapp.com",
//   projectId: "test-a3593",
//   storageBucket: "test-a3593.appspot.com",
//   messagingSenderId: "102316079335",
//   appId: "1:102316079335:web:22a50bcd6279d99ce3ca42",
//   measurementId: "G-J4W7FN1QER",
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// auth.languageCode = "it";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [token, setToken] = useState();

  const checkToken = () => {
    if (window) {
      const localToken = localStorage.getItem("token");
      if (localToken === null) {
        router.push("/");
      } else {
        setToken(localToken);
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <UserTokenContext.Provider value={{ token }}>
      <Component {...pageProps} />;
    </UserTokenContext.Provider>
  );
}

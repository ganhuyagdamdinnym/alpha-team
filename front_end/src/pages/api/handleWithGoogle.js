import { clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import axios from "axios";
import { Back_End_url } from "@/utils/back-url";
export default async function handler(req, res) {
  const { userId } = getAuth(req);
  console.log("hi");
  const user = await clerkClient.users.getUser(userId);
  const userData = user.data?.user.emailAddresses[0];
  // try {
  //   // const result = await axios.get("/api/handleWithGoogle");
  //   // const email = result.data?.user.emailAddresses[0].emailAddress;
  //   console.log("result", user.data?.user.emailAddresses[0].emailAddress);
  //   const email = user.data?.user.emailAddresses[0].emailAddress;
  //   const token = localStorage.getItem("clerk-db-jwt");
  //   console.log("tt", emil);
  //   // if (token !== null) {
  //   const url = `${Back_End_url}/userLoginWithGoogle`;
  //   const res = await axios.post(url, {
  //     email: email,
  //     // type: "clerk",
  //   });
  //   // console.log("res",res.data.token)
  //   localStorage.setItem("token", res.data.token);
  //   // }
  // } catch (err) {
  //   console.log(err);
  // }
  res.json({ user });
}

import { clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import axios from "axios";
export default async function handler(req, res) {
  const { userId } = getAuth(req);
  console.log("hi");
  const user = await clerkClient.users.getUser(userId);
  const userData = user.data?.user.emailAddresses[0];
  //result.data?.user.emailAddresses.emailAddress
  // try {
  // } catch (eerr) {
  //   console(eerr);
  // }
  // res.json({ user });
  //return Response.json({ user });
  res.json({ user });
}

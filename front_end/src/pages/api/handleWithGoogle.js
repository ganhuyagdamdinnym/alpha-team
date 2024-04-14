import { currentUser } from "@clerk/nextjs";

export async function GET(req, res) {
  const user = await currentUser();
  res.json({ user });
  //return Response.json({ user });
}

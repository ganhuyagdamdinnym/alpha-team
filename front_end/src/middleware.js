import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({ publicRoutes: ["/buy", "/"] });
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/buy", "/(api|trpc)(.*)"],
};

import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({ publicRoutes: ["/main", "/companyAbout","/"], });
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/buy", "/(api|trpc)(.*)"],
};

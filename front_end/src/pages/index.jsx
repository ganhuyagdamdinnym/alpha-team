import { HomeChocolate } from "../components/HomeChocolate";
import { HomeAboutCompany } from "../components/HomeAboutCompany";
import { useEffect } from "react";
export default function Home() {
  const relogin = () => {
    // setLoginStat(false);
  };
  return (
    <div className={`overflow-y-auto `}>
      <div></div>
      <HomeChocolate relogin={relogin} />
      <HomeAboutCompany />
    </div>
  );
}

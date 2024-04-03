import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export const UserHead = (props) => {
  const router = useRouter();
  const { HandeHoppetStatus, userEmail } = props;
  const backToHome = () => {
    router.push("/");
  };
  // const email = userEmail?.email?.split("@");
  // const cutString = email?.[0];

  return (
    <div className="flex items-center justify-center border-[#BE9131] border-b-[15px] py-2 px-4 relative">
      <button
        className="flex gap-4 px-2 rounded-xl w-24  py-2 items-center justify-center fixed left-0"
        onClick={() => HandeHoppetStatus()}
      >
        <Image
          alt="photo"
          src="hoppet2.svg"
          height={32}
          width={32}
          className="basket"
          priority={true}
        />
        {/* <Image src="hoppet2.svg" height={64} width={64} className="basket" /> */}
      </button>
      <Image
      
        onClick={() => backToHome()}
        className="cursor-pointer logoInBasket"
        src="logo.svg"
        width={96}
        height={96}
        priority={true}
      />
      <div className="flex mr-4 gap-2 items-center fixed right-0 userHeadEmail">
        <div className="border-2 border-[#BE9131] rounded-full w-[25px] h-[25px] flex justify-center items-center">
          <Image src="user.svg" height={12} width={12} />
        </div>
        <p className="font-medium text-2xl  username">{userEmail.name}</p>
      </div>
    </div>
  );
};

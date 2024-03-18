import Image from "next/image";
import { useRouter } from "next/router";

export const Header = (props) => {
  const router = useRouter();
  const { LoginButtonPress } = props;
  const header = ["About", "Our Chocolate", "Login"];

  const jumptomain = () => {
    router.push("/main");
  };
  return (
    <div className="w-full">
      <div className="w-full flex justify-center text-white text-2xl gap-8 items-center mt-[20px] ">
        <button onClick={() => jumptomain()}>
          <p>OUR CHOCOLATE</p>
        </button>
        <Image
          priority={true}
          alt="logo"
          src="logo.svg"
          height={96}
          width={96}
        />
        <button>
          <p>ABOUT</p>
        </button>
        <button onClick={() => LoginButtonPress()} className="buy">
          <p>ХУДАЛДАА ХИЙХ</p>
        </button>
      </div>
    </div>
  );
};

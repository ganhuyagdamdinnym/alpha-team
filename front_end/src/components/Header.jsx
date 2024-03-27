import Image from "next/image";
import { useRouter } from "next/router";

export const Header = (props) => {
  const router = useRouter();
  const { LoginButtonPress } = props;
  const header = ["About", "Our Chocolate", "Login"];

  const jumptomain = () => {
    router.push("/main");
  };
  const jumptoAbout = () => {
    router.push("/companyAbout");
  };
  const jumptoHome = () => {
    router.push("/");
  };
  return (
    <div className="w-full fixed t-0 h-10">
      <div className="w-full flex justify-center text-white text-2xl gap-8 items-center mt-[20px] bg-white">
        <button onClick={() => jumptomain()}>
          <p
            style={{ color: "#160d98" }}
            className="font-medium border-b-[0.5px] border-[#160d98] px-1 header-choco"
          >
            ШОКОЛАД
          </p>
        </button>
        <Image
          onClick={jumptoHome}
          className="cursor-pointer"
          priority={true}
          alt="logo"
          src="logo.svg"
          height={96}
          width={96}
        />
        <button onClick={jumptoAbout}>
          <p
            style={{ color: "#160d98" }}
            className="font-medium border-b-[0.5px] border-[#160d98] px-1 header-choco"
          >
            ТУХАЙ
          </p>
        </button>
        <button onClick={() => LoginButtonPress()} className="buy">
          <p>ХУДАЛДАА ХИЙХ</p>
        </button>
      </div>
    </div>
  );
};

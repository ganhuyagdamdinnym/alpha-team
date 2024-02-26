import Image from "next/image";
export const Header = (props) => {
  const { LoginButtonPress } = props;
  const header = ["About", "Our Chocolate", "Login"];
  return (
    <div className="w-full">
      <div className="w-full flex justify-center text-white text-2xl gap-8  mt-[40px] ">
        <button>
          <p>OUR CHOCOLATE</p>
        </button>
        <Image src="logo.svg" height={96} width={96} />
        <button>
          <p>ABOUT</p>
        </button>
      </div>
      <div className=" flex flex-row-reverse items-center">
        <button
          onClick={() => LoginButtonPress()}
          className="p-[10px] bg-[#3c3c3c] backdrop-blur-[20px] text-white rounded-[10px] text-2xl absolute flex items-center"
        >
          <p>log in</p>
        </button>
      </div>
    </div>
  );
};

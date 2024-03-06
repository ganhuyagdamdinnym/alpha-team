import Image from "next/image";

export const Hoppet = () => {
  return (
    <div className="w-[500px] h-[1000px] bg-white py-2 fixed left-4 rounded-xl border-4 border-[red] flex justify-center">
      <div>
        <Image alt="photo" src="logo.svg" width={60} height={60} />
      </div>
    </div>
  );
};

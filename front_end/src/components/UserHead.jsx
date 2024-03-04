import Image from "next/image";
export const UserHead = (props) => {
  const { HandeHoppetStatus } = props;
  return (
    <div className="flex items-center justify-between border-[red] border-b-4 py-2 px-4">
      <button
        className="flex gap-4 px-2 bg-white ml-4 rounded-xl w-24 bg-[#DCD7D8] py-2 items-center justify-center"
        onClick={() => HandeHoppetStatus()}
      >
        <Image src="hoppet2.svg" height={32} width={32} className="basket" />
        {/* <Image src="hoppet2.svg" height={64} width={64} className="basket" /> */}
      </button>
      <Image src="logo.svg" width={64} height={64} />
      <div className="flex mr-4 w-24">hello</div>
    </div>
  );
};

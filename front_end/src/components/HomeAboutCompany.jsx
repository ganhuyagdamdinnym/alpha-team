import Image from "next/image";

export const HomeAboutCompany = () => {
  return (
    <div className="flex gap-[8vh] justify-evenly items-center p-[9vh] bg-blue-950">
      <div>
        <Image src="/logo.svg" height={200} width={200} />
        <p className="text-[4vh] text-white">RITTER SPORT</p>
      </div>
      <div className="flex flex-col gap-[2vh]">
        <p className="text-[3vh] text-white">Keep Connected</p>
        <div className="flex gap-[1vh]">
          <Image src="/fb.svg" height={40} width={40} />
          <p className="text-white">like us on Facebook</p>
        </div>
        <div className="flex gap-[1vh]">
          <Image src="/mail.svg" height={40} width={40} />
          <p className="text-white">write email</p>
        </div>
        <div className="flex gap-[1vh]">
          <Image src="/loca.svg" height={40} width={40} />
          <p className="text-white">location</p>
        </div>
        <div className="flex gap-[1vh]">
          <Image src="/phone.svg" height={40} width={40} />
          <p className="text-white">call us</p>
        </div>
      </div>
      <div className="gap-[4vh] text-white">
        <p className="text-[3vh]">Contact information</p>
        <p className="text-[1.5vh]">Premium Sweets LLC</p>
        <p className="text-[1.5vh]">CEO: Jargalmaa Zorigoo</p>
        <p className="text-[1.5vh]">Tel: +976 7777-3555</p>
        <p className="text-[1.5vh]">+976 9978-8822</p>
        <p className="text-[1.5vh]">E-mail: Jargalmaa@premiumsweets.mn</p>
        <p className="text-[1.5vh]">
          Address: ICC Tower, 1st khoroo, Sukhbaatar district, Ulaanbaatar,
          Mongolia
        </p>
      </div>
    </div>
  );
};

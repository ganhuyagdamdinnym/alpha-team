import Image from "next/image";

export const HomeAboutCompany = () => {
  return (
    <div className="flex gap-[40vh] justify-around p-[10vh]">
      <div>
        <Image src="/logo.svg" height={100} width={100} />
        <p className="border-t-2 border-black ">Ritter sport</p>
      </div>
      <div>
        <p>Information</p>
        <p>CEO: Jargalmaa Zorigoo</p>
        <p>Premium Sweets LLC</p>
        <p>Tel: +976 7777-3555</p>
        <p>Mobile: +976 9978-8822</p>
        <p>E-mail: Jargalmaa@premiumsweets.mn</p>
        <p>
          Address: Suite 202, ICC Tower, 1st khoroo, Sukhbaatar district,
          Ulaanbaatar, Mongolia
        </p>
      </div>
      <div className="flex-col gap-[10vh]">
        <input className="w-10 h-10" placeholder="sfhjfgkag" />
        <button>subscribe</button>
        <div className="flex">
          <Image src="/fb.svg" height={40} width={40} />
          <Image src="/mail.svg" height={40} width={40} />
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
export const HomeAboutCompany = () => {
  return (
    <div className="flex">
      <div>
        <Image src="logo.svg" height={60} width={60} />
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
    </div>
  );
};

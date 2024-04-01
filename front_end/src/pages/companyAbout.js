import { data } from "autoprefixer";
import Image from "next/image";
import { Header } from "@/components/Header";
import { HomeAboutCompany } from "@/components/HomeAboutCompany";
export default function About() {
  //   <div className="flex flex-wrap">
  //   <div className="flex flex-col text-wrap">
  //     <Image src="/ritterManufactorer.jpeg" width={1000} height={1000} />
  //     <p className="text-wrap">
  //       АНХНЫ ҮЙЛДВЭРЭЭ КАННСТАТ(ГЕРМАН) ХОТОД БАЙГУУЛСАН БА ХОЖИМ НЬ
  //       ВАЛДЕНБУХ РУУ НҮҮЖ ӨНӨӨГ ХҮРТЭЛ ТЭНДЭЭ ҮЙЛ АЖИЛЛАГААГАА ЯВУУЛЖ БАЙНА
  //     </p>
  //   </div>
  //   <div className="flex flex-col">
  //     <Image src="/ritterManufactorer.jpeg" width={1000} height={1000} />
  //     <p className="text-wrap">
  //       ДЭЛХИЙН 100 ГАРУЙ УЛС, ОРОНД ХУДАЛДААЛАГДДАГ БА ЧАНАР БОЛОН
  //       БОРЛУУЛАЛТААРАА ГЕРМАНД №2, ЕВРОПД №3 ОРДОГ
  //     </p>
  //   </div>
  //   <div className="flex flex-col text-wrap">
  //     <Image src="/ritterManufactorer.jpeg" width={1000} height={1000} />
  //     <p className="text-wrap">
  //       ВАЛДЕНБУХ(ГЕРМАН) БРАЙТЕНБРУНН(АВСТРИ) ЗЭРЭГ ХОЁР ҮЙЛДВЭРЭЭС ӨДӨРТ{" "}
  //       ХАМГИЙН БАГАДАА 3 САЯ БААР ҮЙЛДВЭРЛЭДЭГ
  //     </p>
  //   </div>
  //   <div className="flex flex-col text-wrap">
  //     <Image src="/ritterManufactorer.jpeg" width={1000} height={1000} />
  //     <p className="text-wrap">
  //       НИКАРАГУА ДАХЬ ЭЛЬ КАКАО ФЕРМ ДЭЭР ӨӨРИЙН КАКАО ТАРИАЛАЛТАА ХИЙДЭГ
  //     </p>
  //   </div>
  // </div>
  const data = [
    {
      bg_image: "/FEAHKWNWYAAZpSc-removebg-preview (1) (1).png",
      title: "АЛЬФРЕД,КЛАРА РИТТЭР НАР ҮҮСГЭН БАЙГУУЛСАН",
      year: "1912",
      textColor: "#009a91",
    },
    {
      bg_image: "Untitled design (1) (1).png",
      title: "АНХНЫ ДӨРВӨЛЖИН ХЭЛБЭРТЭЙ ЗАГВАРАА ГАРГАСАН",
      year: "1932",
      textColor: "#7fa97e",
    },
    {
      bg_image: "/xconvert.com-1-removebg-preview (1) (1).png",
      title: "НЭР ТӨРЛӨӨ НЭМЭГДҮҮЛЖ,ОДООГИЙН ҮНДСЭН ӨНГӨ ТӨРХӨӨ БИЙ БОЛГОСОН",
      year: "1974",
      textColor: "#FFDF00",
    },
  ];
  const data_1 = [
    {
      bg_image: "/RitterSport_Headquarter (1).jpg",
      title:
        "АНХНЫ ҮЙЛДВЭРЭЭ КАННСТАТ (ГЕРМАН) ХОТОД БАЙГУУЛСАН БА ХОЖИМ НЬ ВАЛДЕНБУХ РУУ НҮҮЖ ӨНӨӨГ ХҮРТЭЛ ТЭНДЭЭ ҮЙЛ АЖИЛЛАГААГАА ЯВУУЛЖ БАЙНА",
      textColor: "#FFDF00",
    },
    {
      bg_image:
        "/canva-travel-summer-concept-with-earth-map-ball-on-sand-1 (1).png",
      title:
        "ДЭЛХИЙН 100 ГАРУЙ УЛС, ОРОНД ХУДАЛДААЛАГДДАГ БА ЧАНАР БОЛОН БОРЛУУЛАЛТААРАА ГЕРМАНД №2, ЕВРОПТ №3 ОРДОГ",
      textColor: "#7fa97e",
    },
    {
      bg_image: "/ritter-sport-01-jpg (1).png",
      title:
        "ВАЛДЕНБУХ(ГЕРМАН) БРАЙТЕНБРУНН(АВСТРИ) ЗЭРЭГ 2 ҮЙЛДВЭРЭЭС ӨДӨРТ ХАМГИЙН БАГАДАА 3 САЯ БААР ҮЙЛДВЭРЛДЭГ",
      textColor: "#FF2400",
    },
    {
      bg_image:
        "/Ritter-Sport-to-get-closer-to-origins-after-reaching-100-certified-cocoa (1).jpg",
      title:
        "НИКИРАГУА ДАХЬ ЭЛЬ КАКАО ФЕРМ ДЭЭР ӨӨРИЙН КАКАО ТАРИАЛАЛТАА ХИЙДЭГ",
      textColor: "#0000FF",
    },
  ];
  const data_2 = [
    {
      bg_image: "/logo-2.png",
      text2:
        "ХОЛБООНЫ ГИШҮҮН БА БАЙГАЛЬ ОРЧИНД ХОР ХӨНӨӨЛГҮЙГЭЭР ҮНДСЭН ТҮҮХИЙ ЭДЭЭ БЭЛТГЭДЭГ",
      text1: "RAINFOREST ALLIANCE ",
    },
    {
      bg_image:
        "/f9257078-1ab3-49dd-bde0-1c6d95b7a907.__CR0,0,630,290_PT0_SX315_V1___.jpeg",
      text2: "100% КАКАОГААР ХИЙДЭГ",
      text1: "100% CERTIFIED SUSTAINABLE COCOA SOURCING ",
    },
    {
      bg_image: "/347596348_215343754607880_3077843115052717370_n.png",
      text2:
        "-ИЙН ГИШҮҮН БА ХҮРЭЭЛЭН БУЙ ОРЧИН, ТАРИАН ТАЛБАЙН ЗӨВ ЗОХИСТОЙ АШИГЛАЛТ МЕНЕЖМЕНТИЙН ГАЗАРТАЙ ХАМТАРЧ АЖИЛЛАДАГ",
      text1: "UTZ CERTIFIED ",
    },
    {
      bg_image: "/fairtrade-cocoa-program-logo-696DE917E3-seeklogo.com.png",
      text2: "-ИЙН ГИШҮҮН БА ОРОН НУТГИЙН ИРГЭД, ТАРИАЛАНЧДЫГ ДЭМЖИЖ АЖИЛЛАДАГ",
      text1: "FAIRTRADE INTERNATIONAL ",
    },
  ];
  return (
    <div className="bg-white">
      <Header />
      <div className="w-full h-auto flex justify-evenly pt-[10vh]">
        {data.map((dta) => (
          <div className="flex flex-col gap-[2vh] w-1/6 items-center">
            <img src={dta.bg_image} className="w-full h-[30vh]" />
            <p
              style={{ color: dta.textColor }}
              className="text-[3.5vh] font-bold"
            >
              {dta.year}
            </p>
            <button
              style={{ background: dta.textColor }}
              className="w-[2.5vh] h-[2.5vh] text-[1.5vh]"
            ></button>
            <p className="text-black  text-[2.7vh] font-normal">{dta.title}</p>
          </div>
        ))}
      </div>
      <div className="w-screen flex aboutPart place-content-around">
        {data_1.map((dta) => (
          <div>
            <img src={dta.bg_image} className="w-full h-4/5" />
            <div className="flex gap-4 pt-[1vh] pb-[4vh] w-full">
              <div
                className="w-[3vh] h-[3vh]"
                style={{ background: dta.textColor }}
              ></div>
              <span className="text-[2.2vh] w-full">{dta.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <img
          className="w-5/6 align-center"
          src="/387846203_348878714323255_7632759952354299977_n (1) (1) (1).jpg"
        />
      </div>
      <div className="flex flex-wrap w-full place-content-center Company gap-[1vh] pt-[5vh]">
        {data_2.map((dta) => (
          <div className="flex w-full items-center">
            <img src={dta.bg_image} className="w-1/3 h-1/2 pr-[2vh]" />
            <p className="font-semibold place-self-center text-[1.8vh]">
              {dta.text1}
              <span className="font-thin">{dta.text2}</span>
            </p>
          </div>
        ))}
      </div>
      <HomeAboutCompany />
    </div>
  );
}

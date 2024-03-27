import { data } from "autoprefixer";
import Image from "next/image";
import { Header } from "@/components/Header";
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
      title: "Риттер Спорт шоколадны үүсэл",
      year: "1912",
      textColor: "#009a91",
    },
    {
      bg_image: "Untitled design (1).png",
      title: "Яагаад дөрвөлжин шокалад гэж?",
      year: "1932",
      textColor: "#7fa97e",
    },
    {
      bg_image: "/xconvert.com-1-removebg-preview (1) (1).png",
      title: "Нэр төрлөө нэмэгдүүлсэн нь",
      year: "1974",
      textColor: "#7fa97e",
    },
  ];
  const data_1 = [
    {
      bg_image: "/RitterSport_Headquarter (1).jpg",
      title: "Риттер Спорт шоколадны үүсэл",
      textColor: "#009a91",
    },
    {
      bg_image:
        "/canva-travel-summer-concept-with-earth-map-ball-on-sand-1 (1).png",
      title: "Яагаад дөрвөлжин шокалад гэж?",
      textColor: "#7fa97e",
    },
    {
      bg_image: "/ritter-sport-01-jpg.png",
      title: "Нэр төрлөө нэмэгдүүлсэн нь",
      textColor: "#7fa97e",
    },
    {
      bg_image:
        "/Ritter-Sport-to-get-closer-to-origins-after-reaching-100-certified-cocoa (1).jpg",
      title: "Нэр төрлөө нэмэгдүүлсэн нь",
      textColor: "#7fa97e",
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
      bg_image: "/Image.jpeg",
      text2: "КАКАОНЫ УРТ ХУГАЦААНЫ ТҮНШЛЭЛИЙН ГЭРЭЭТЭЙ ",
      text1: "COCOA FROM LONG-TERM PARTNERSHIPS ",
    },
    {
      bg_image:
        "/f9257078-1ab3-49dd-bde0-1c6d95b7a907.__CR0,0,630,290_PT0_SX315_V1___.jpeg",
      text2: "100% КАКАОГААР ХИЙДЭГ",
      text1: "100% CERTIFIED SUSTAINABLE COCOA SOURCING ",
    },
    {
      bg_image: "/fairtrade-cocoa-program-logo-696DE917E3-seeklogo.com.png",
      text2: "ИЙН ГИШҮҮН БА ОРОН НУТГИЙН ИРГЭД,ТАРИАЛАНЧДЫГ ДЭМЖИЖ",
      text1: "FAIRTRADE INTERNATIONAL ",
    },
    {
      bg_image: "/347596348_215343754607880_3077843115052717370_n.png",
      text2: "Нэр төрлөө нэмэгдүүлсэн нь",
      text1: "UTZ CERTIFIED ",
    },
  ];
  return (
    <div className="bg-white">
      <Header />
      <div className="flex flex-col pt-[10vh] justify-center">
        <div className="flex justify-evenly justify-center">
          {data.map((dta) => (
            <div className="flex flex-col place-content-center gap-[1vh]">
              <img src={dta.bg_image} className="w-4/5 h-4/5 border-b-2" />
              <p className="text-[2vh] text-black align-center">{dta.year}</p>
              <button
                style={{ background: dta.textColor }}
                className="w-[2vh] h-[2vh] text-[1.5vh]"
              ></button>
              <p
                style={{ color: dta.textColor }}
                className="text-black w-full text-[1.5vh] font-light"
              >
                {dta.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-screen flex aboutPart pb-[2vh]">
        {data_1.map((dta) => (
          <div>
            <img src={dta.bg_image} className="w-full h-full" />
            <div className="flex">
              <div
                className="w-[2vh] h-[2vh]"
                style={{ background: dta.textColor }}
              ></div>
              <p>{dta.title}</p>
            </div>
          </div>
        ))}
      </div>
      <img
        className="w-screen place-self-center"
        src="/387846203_348878714323255_7632759952354299977_n (1) (1).jpg"
      />
      <div className="flex flex-col place-items-center gap-[4vh]">
        {data_2.map((dta) => (
          <div className="flex w-3/4 gap-[10vh]">
            <img src={dta.bg_image} className="w-1/6" />
            <p className="font-semibold place-self-center text-[3vh]">
              {dta.text1}
              {dta.text2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

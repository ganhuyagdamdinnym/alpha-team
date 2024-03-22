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
  const image = ["/Image.jpeg", "/Image.jpeg", "/Image.jpeg"];
  const data = [
    {
      bg_image: "/Image.jpeg",
      title: "Риттер Спорт шоколадны үүсэл",
      year: "1912",
      textColor: "#009a91",
    },
    {
      textColor: "#795548",
    },
    {
      bg_image: "/Image.jpeg",
      title: "Яагаад дөрвөлжин шокалад гэж?",
      year: "1932",
      textColor: "#7fa97e",
    },
    {
      textColor: "#7fa97e",
    },
    {
      bg_image: "/Image.jpeg",
      title: "Нэр төрлөө нэмэгдүүлсэн нь",
      year: "1974",
      textColor: "#7fa97e",
    },
  ];
  const data_1 = [
    {
      bg_image: "/Image.jpeg",
      title: "Риттер Спорт шоколадны үүсэл",
      textColor: "#009a91",
    },
    {
      bg_image: "/Image.jpeg",
      title: "Яагаад дөрвөлжин шокалад гэж?",
      textColor: "#7fa97e",
    },
    {
      bg_image: "/Image.jpeg",
      title: "Нэр төрлөө нэмэгдүүлсэн нь",
      textColor: "#7fa97e",
    },
    {
      bg_image: "/Image.jpeg",
      title: "Нэр төрлөө нэмэгдүүлсэн нь",
      textColor: "#7fa97e",
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <div className="flex w-full justify-evenly justify-items-center pt-[10vh] pl-[8vh]">
          {image.map((dta) => (
            <img src={dta} className="w-1/6 " />
          ))}
        </div>
        <div className="flex justify-evenly">
          {data.map((dta) => (
            <div className="flex flex-col justify-center gap-[1vh]">
              <p className="text-[2vh] justify-center text-white">{dta.year}</p>
              <div className="flex justify-center gap-[10vh]">
                <button
                  style={{ background: dta.textColor }}
                  className="w-[2vh] h-[2vh] text-[1.5vh]"
                ></button>
                <p
                  style={{ background: dta.textColor }}
                  className="h-[3vh] w-[0.1vh]"
                ></p>
              </div>
              <p
                style={{ color: dta.textColor }}
                className="text-black w-full  text-[1.5vh] font-light"
              >
                {dta.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-screen flex ">
        {data_1.map((dta) => (
          <div>
            <img src={dta.bg_image} className="w-1/6" />
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
    </div>
  );
}

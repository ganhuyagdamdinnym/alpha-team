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
      bg_image: "/ritter-history.1-removebg-preview__1_-removebg-preview.png",
      story:
        "Алфред Евген Риттер, Клара Риттер нар шоколад, чихрийн үйлдвэрийг үүсгэн байгуулж, Риттер Спортын шоколадны түүхийн суурь чулууг 1912 онд Штутгарт-Бад Каннштат хотод тавьжээ.",
      title: "Риттер Спорт шоколадны үүсэл",
      year: "1912",
      bg: "#013242",
      textColor: "#009a91",
    },
    {
      bg_image: "/Name21-removebg-preview__1_-removebg-preview.png",
      story:
        "Клара Риттер: Спорт хүрэм бүрийн халаасанд хагарахгүй багтах, жирийн урт баар шиг жинтэй шоколад хийцгээе. Энэ нь Ritter's Sport Schokolade нэрээр худалдаанд гарсан.",
      title: "Яагаад дөрвөлжин шокалад гэж?",
      year: "1932",
      bg: "#5c3729",
      textColor: "#795548",
    },
    {
      bg_image: "/xconvert.com-1__1_-removebg-preview.png",
      story:
        "Шоколадны зах зээл дээрх хувьсгал: бизнес эрхлэгч Альфред Отто Риттер Бунте Палетт (өнгөлөг төрөл) -ийг танилцуулав. Зар сурталчилгааны зурагт хуудаснууд дээр Бүх зүйл илүү өнгөлөг, илүү аз жаргалтай, илүү орчин үеийн, илүү идэвхтэй болж байна, үүнд дагалддаг шоколад орно гэж бичсэн байдаг.",
      title: "Нэр төрлөө нэмэгдүүлсэн нь",
      year: "1974",
      bg: "#367535",
      textColor: "#7fa97e",
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex flex-wrap overflow-y-scroll">
        {data.map((dta) => (
          <div
            style={{ backgroundColor: dta.bg }}
            className="w-screen h-screen bg-white flex flex-col justify-around"
          >
            <p className="text-[8vh] justify-center text-center text-white font-black">
              {dta.year}
            </p>
            <div className="flex justify-evenly items-center">
              <p
                style={{ color: dta.textColor }}
                className="text-[5vh] text-wrap w-1/4 font-extrabold"
              >
                {dta.title}
              </p>
              <img src={dta?.bg_image} className="w-2/5 h-3/4 bg-transparent" />
              <p
                style={{ color: dta.textColor }}
                className="text-black w-1/4  text-[2.5vh] font-light"
              >
                {dta.story}
              </p>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { data } from "autoprefixer";
import Image from "next/image";
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
      bg_image: "/ritter-history.1-removebg-preview (1).png",
      story:
        "Алфред Евген Риттер, Клара Риттер нар шоколад, чихрийн үйлдвэрийг үүсгэн байгуулж, Риттер Спортын шоколадны түүхийн суурь чулууг 1912 онд Штутгарт-Бад Каннштат хотод тавьжээ.",
      title: "Риттер Спортын шоколадны үүсэл",
      year: "1912",
    },
    {
      bg_image: "/Name21-removebg-preview (1).png",
      story:
        "Клара Риттерийн санал: Спорт хүрэм бүрийн халаасанд хагарахгүй багтах, жирийн урт баар шиг жинтэй шоколад хийцгээе. Энэ нь Ritter's Sport Schokolade нэрээр худалдаанд гарсан.",
      title: "Дөрвөлжин шокаладний үүсэл",
      year: "1932",
    },
    {
      bg_image: "/xconvert.com-1 (1).jpg",
      story:
        "Шоколадны зах зээл дээрх хувьсгал: бизнес эрхлэгч Альфред Отто Риттер Бунте Палетт (өнгөлөг төрөл) -ийг танилцуулав. Зар сурталчилгааны зурагт хуудаснууд дээр Бүх зүйл илүү өнгөлөг, илүү аз жаргалтай, илүү орчин үеийн, илүү идэвхтэй болж байна, үүнд дагалддаг шоколад орно гэж бичсэн байдаг.",
      title: "Нэр төрлөө нэмэгдүүлсэн нь",
      year: "1974",
    },
  ];
  return (
    <div className="bg-white w-100% h-100%">
      <div className="flex flex-wrap">
        {data.map((dta) => (
          <div className="w-screen h-screen gap-[10vh]">
            <p className="text-[8vh] justify-center text-center">{dta.year}</p>
            <div className="flex justify-around gap-[10vh]">
              <p className="text-[5vh] text-wrap w-[2vh]">{dta.title}</p>
              <img
                src={dta?.bg_image}
                className="w-[60vh] h-[60vh] ml-[40vh]"
              />
              <p className="w-[50vh] text-[2vh]">{dta.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

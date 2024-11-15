import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export const HomeAboutCompany = () => {
  return (
    <div className="homeAbout">
      <div className="div1">
        <Image
          alt="photo"
          priority={true}
          src="/logo.svg"
          height={200}
          width={200}
          className="logo"
        />
        <p className="text-[4wh] text-white">RITTER SPORT</p>
      </div>
      <div className="flex flex-col gap-[2vh] w-[35vh] mt-10px">
        <p className="text-[4vh] text-white border-b-2">Contact Information</p>
        <a
          href="https://www.facebook.com/RitterSportMongolia"
          className="flex gap-[1vh] items-center"
        >
          <FontAwesomeIcon
            icon={faSquareFacebook}
            style={{ color: "#74C0FC" }}
            className="icon"
          />
          <p className="text-white text-[1.8vh]">Like Us On Facebook</p>
        </a>
        <div className="flex gap-[1vh]">
          <p className="text-white text-[1.8vh] ">
            <a
              href="mailto: Jargalmaa@premiumsweets.mn"
              className="flex items-center gap-[1vh]"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#74C0FC" }}
                className="icon"
              />
              Jargalmaa@premiumsweets.mn
            </a>
          </p>
        </div>
        <a
          href="https://www.google.com/maps/place/ICC+Tower/@47.9151661,106.9155506,17z/data=!4m10!1m2!2m1!1sICC+Tower,+1st+khoroo,+Sukhbaatar+district,+Ulaanbaatar,Mongolia!3m6!1s0x5d96937c984f0a31:0x758bb4db95096256!8m2!3d47.9160326!4d106.9198523!15sCkBJQ0MgVG93ZXIsIDFzdCBraG9yb28sIFN1a2hiYWF0YXIgZGlzdHJpY3QsIFVsYWFuYmFhdGFyLE1vbmdvbGlhkgEQY29ycG9yYXRlX29mZmljZeABAA!16s%2Fg%2F11jft7wkv9?entry=ttu"
          className="flex gap-[1vh] items-center "
        >
          <FontAwesomeIcon
            icon={faMapLocationDot}
            style={{ color: "#74C0FC" }}
            className="icon"
          />
          <p className="text-white text-[1.8vh] text-nowrap overflow-x-hidden w-[31vh]">
            ICC Tower, Ulaanbaatar,Mongolia
          </p>
        </a>
        <a
          href="tel:976 7777-3555 OR 976 9978-8822"
          className="flex gap-[1vh] items-center"
        >
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "#74C0FC" }}
            className="icon"
          />
          <p className="text-white text-[1.8vh]">Call Us</p>
        </a>
      </div>
      <div className="gap-[2vh] flex flex-col text-white text-wrap my-0">
        <p className="text-[4vh] border-b-2">About the Company</p>
        <p className="text-[2vh]">Premium Sweets LLC</p>
        <p className="text-[2vh]">CEO: Jargalmaa Zorigoo</p>
        <p className="text-[2vh]">Tel: +976 7777-3555</p>
        <p className="text-[2vh]">+976 9978-8822</p>
      </div>
    </div>
  );
};

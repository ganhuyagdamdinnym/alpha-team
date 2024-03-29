"use client";
import { useEffect, useState, useRef } from "react";
import { images } from "../chocolate/sort.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination, Keyboard } from "swiper/modules";
import { Data } from "@/components/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Header } from "./Header.jsx";

export const MainChocolateSort = () => {
  const [swiperPerScreen, setSwiperPerScreen] = useState();
  const [color, setColor] = useState();
  const [swiperRef, setSwiperRef] = useState(null);
  const [name, setName] = useState();

  const sortName = [
    {
      name: "ӨНГӨ ТӨРӨЛ",
      color: "red",
    },
    {
      name: "КАКАО СОНГОЛТ",
      color: "rgb(255, 205, 74)",
    },
    {
      name: "MINI RANGE",
      color: "rgb(179, 126, 101)",
    },
    {
      name: "CHOCO шоо",
      color: "rgb(255, 0, 100)",
    },
    {
      name: "250 гр БАР",
      color: "rgb(24, 36, 98)",
    },
    {
      name: "АМТТАЙ ДУРТАЙ",
      color: "rgb(137, 198, 230)",
    },
    {
      name: "САМРЫН СОНГОЛТ",
      color: "rgb(59, 150, 43)",
    },
  ];
  const favtext = [
    {
      title: "MORE IS JUST MORE",
      id: "",
      content:
        "We live and love variety. With our colorful range, it is also literally on everyone's lips. With such a large selection, it's not easy to find your absolute favourite. But the good thing is: you don't have to choose between Marzipan, Nougat or Alpine Milk Chocolate, for example. You can even have more than one favourite flavor.",
    },
    {
      title: "",
    },
  ];
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  function handleTab(e) {
    const filt = images.filter((cur) => {
      if (e.color === cur.color) {
        return cur;
      }
    });
    swiperRef.slideTo(images.indexOf(filt[0]) + 2);
  }

  useEffect(() => {
    if (window) {
      if (window.screen.width < 600) {
        setSwiperPerScreen(1);
      }
      if (window.screen.width > 600) {
        setSwiperPerScreen(2);
      }
    }
  }, []);

  return (
    <div className="h-[100%]">
      <div className="absolute top-[-1.7vh]">
        <Header></Header>
      </div>

      <div className="flex mt-[100px] h-[70%] oveflow-hidden max-[600px]:h-[40%] max-[600px]:text-[10px]">
        <div
          className="overflow-hidden w-full h-full flex "
          ref={ref}
          tabIndex={0}
        >
          {swiperPerScreen ? (
            <Swiper
              onSwiper={setSwiperRef}
              modules={[Virtual, Navigation, Pagination, Keyboard]}
              // onSwiper={setSwiperRef}
              slidesPerView={swiperPerScreen}
              loop={true}
              centeredSlides={true}
              pagination={{
                clickable: true,
                type: "progressbar",
              }}
              navigation={true}
              virtual
              onSlideChange={(swiperCore) => {
                const { realIndex } = swiperCore;
                setColor(images[realIndex].color);
                setName(images[realIndex].name);
              }}
            >
              {images?.map((image, index) => {
                return (
                  <SwiperSlide key={image} virtualIndex={index}>
                    <div
                      key={index}
                      className="w-full h-full flex justify-center items-center"
                      style={{ backgroundColor: `${image.color}` }}
                    >
                      <img
                        // onLoad={() => {
                        //   setColor(image.color);
                        // }}
                        src={image.image}
                        className="w-9/12 h-9/12"
                      />
                    </div>
                  </SwiperSlide>
                  // <div className="w-2/6 flex shrink-0 justify-center items-center ">
                  //   {" "}
                  //   <img src={image.image} className="w-9/12 h-9/12" />
                  // </div>
                );
              })}
            </Swiper>
          ) : (
            <div>loading...</div>
          )}

          <div
            style={{
              position: "fixed",
              bottom: "0",
              left: "0",
              backgroundColor: color,
            }}
            className="w-[100vw] h-[30px]  flex items-center"
          >
            <div className="w-screen flex">
              {sortName.map((e, index) => (
                <div
                  style={{ backgroundColor: "rgb(255, 240, 180)" }}
                  key={index}
                  className="w-1/4 flex justify-center"
                >
                  {color === e.color ? (
                    <p
                      style={{
                        backgroundColor: e.color,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {e.name}
                    </p>
                  ) : (
                    <p
                      onClick={() => handleTab(e)}
                      className={
                        `bg-[rgb(255, 240, 180)] ` +
                        "hover:cursor-pointer p-[10px] text-center rounded-[20px]"
                      }
                    >
                      {e.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[30vh] info flex justify-center items-center"
        style={{ backgroundColor: color }}
      ></div>
      <div
        className="w-[100vw] h-[auto] max-[600px]:h-[60%] max-[600px]:text-[10px]"
        style={{ backgroundColor: color }}
      >
        <div className=" flex items-center flex-wrap">
          {Data.map((e, index) => {
            return e.sort === name ? (
              <div
                key={index}
                className="flex w-[20%] min-w-max-[300px] max-[1000px]:w-[100%] bg-cover "
              >
                <img src={e.image} alt="image"></img>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

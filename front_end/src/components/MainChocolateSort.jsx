"use client";
import { useEffect, useState, useRef } from "react";
import { images } from "../chocolate/sort.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination, Keyboard } from "swiper/modules";
import { HandleSort } from "@/components/HandleSort";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const MainChocolateSort = () => {
  const [swiperPerScreen, setSwiperPerScreen] = useState();
  const [color, setColor] = useState();
  const [currentIndex, setCurrentIndex] = useState();
  const [swiperRef, setSwiperRef] = useState(null);
  const [clickedSlide, setClickedSlide] = useState();

  const sortName = [
    {
      name: "COLOURFUL VARIETY",
      color: "red",
    },
    {
      name: "NUT SELECTION",
      color: "green",
    },
    {
      name: "VEGAN RANGE",
      color: "yellow",
    },
    {
      name: "MINI RANGE",
      color: "brown",
    },
  ];
  // const appendNumber = useRef(6);
  // const [bgcolor, setBgcolor] = useState("green");

  // const prependNumber = useRef(1);
  // const [slides, setSlides] = useState(
  //   Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`)
  // );
  // const prepend = () => {
  //   setSlides([
  //     `Slide ${prependNumber.current - 2}`,
  //     `Slide ${prependNumber.current - 1}`,
  //     ...slides,
  //   ]);
  //   prependNumber.current = prependNumber.current - 2;
  //   swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  // };
  // const append = () => {
  //   setSlides([...slides, "Slide " + ++appendNumber.current]);
  // };
  // const slideTo = (index) => {
  //   swiperRef.slideTo(index - 1, 0);
  // };
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  function handleTab(e) {
    const index = images.forEach((file, index) => {
      if (file.color === e) {
        setClickedSlide(index);
      }
    });
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
      <div className="flex h-[70%] oveflow-hidden max-[600px]:h-[40%] max-[600px]:text-[10px]">
        <div
          className="overflow-hidden w-full h-full flex "
          ref={ref}
          tabIndex={0}
        >
          {swiperPerScreen ? (
            <Swiper
              onSwiper={setSwiperRef}
              modules={[Virtual, Navigation, Pagination, Keyboard]}
              slidesPerView={swiperPerScreen}
              loop={true}
              centeredSlides={true}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
                type: "progressbar",
              }}
              navigation={true}
              virtual
              onSlideChange={(swiperCore) => {
                console.log("change");
                const { realIndex } = swiperCore;
                setCurrentIndex(realIndex);
                setColor(images[realIndex].color);
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
                  onClick={() => handleTab(e.color)}
                  key={index}
                  className="w-1/4 bg-[white] flex justify-center"
                >
                  {color === e.color ? (
                    <p style={{ backgroundColor: e.color }}>{e.name}</p>
                  ) : (
                    <p className={`bg-[white] `}>{e.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[100vw] h-[30%] max-[600px]:h-[60%] max-[600px]:text-[10px]"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

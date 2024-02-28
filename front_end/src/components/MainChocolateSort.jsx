"use client";
import { useEffect, useState, useRef } from "react";
import { images } from "../chocolate/sort.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const MainChocolateSort = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(6);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );
  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };
  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };
  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="flex h-4/6 overflow-hidden">
      <div
        className="overflow-hidden w-full h-full flex"
        ref={ref}
        tabIndex={0}
      >
        <Swiper
          modules={[Virtual, Navigation, Pagination, Keyboard]}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
            type:"progressbar",
          }}
          navigation={true}
          virtual
        >
          {images?.map((image, index) => {
            return (
              <SwiperSlide key={image} virtualIndex={index}>
                <div
                  className="w-full h-full flex justify-center items-center"
                  style={{ backgroundColor: `${image.color}` }}
                >
                  <img src={image.image} className="w-9/12 h-9/12" />
                </div>
              </SwiperSlide>
              // <div className="w-2/6 flex shrink-0 justify-center items-center ">
              //   {" "}
              //   <img src={image.image} className="w-9/12 h-9/12" />
              // </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

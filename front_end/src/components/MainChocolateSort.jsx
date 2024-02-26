import { useEffect, useState, useRef } from "react";
import { images } from "../chocolate/sort.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// export const MainChocolateSort = () => {
//   const [color, setColor] = useState();
//   const [num, setNum] = useState(0);
//   const [swiperRef, setSwiperRef] = useState(null);
//   const appendNumber = useRef(6);
//   const prependNumber = useRef(1);
//   // Create array with 500 slides
//   const [slides, setSlides] = useState(
//     Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
//   );
//   const prepend = () => {
//     setSlides([
//       `Slide ${prependNumber.current - 2}`,
//       `Slide ${prependNumber.current - 1}`,
//       ...slides,
//     ]);
//     prependNumber.current = prependNumber.current - 2;
//     swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
//   };
//   const append = () => {
//     setSlides([...slides, "Slide " + ++appendNumber.current]);
//   };
//   const slideTo = (index) => {
//     swiperRef.slideTo(index - 1, 0);
//   };

//   const ref = useRef(null);

//   useEffect(() => {
//     ref.current.focus();
//   }, []);

//   const handleKeyDown = (event, index) => {
//     if (event.key === "ArrowLeft") {
//       swiperRef.slideTo(index - 1, 0);
//     }
//     if (event.key === "ArrowRight") {
//       swiperRef.slideTo(index + 1, 0);
//     }
//     console.log("User pressed: ", event.key);
//   };

return (
  <div className="flex h-4/6 overflow-hidden">
    <div
      className="overflow-hidden w-full h-full flex"
      ref={ref}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={image} virtualIndex={index}>
              <div className="w-full h-full flex justify-center items-center ">
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
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {images?.map((image, index) => {
          return (
            <SwiperSlide key={image} virtualIndex={index}>
              <div className="w-full h-full flex justify-center items-center ">
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
// }

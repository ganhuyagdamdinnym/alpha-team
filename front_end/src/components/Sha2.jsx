"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Header } from "./Header";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Virtual } from "swiper/modules";
import { Data } from "./data";
export default function MainPageGlitchFix() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [mainStreamPipeForState, setMainStreamPipeForState] = useState({});

  const MainStreamDataForSwiperCover = [
    {
      name: "COLOURFUL VARIETY",
      color: "red",
      image: "/sortPhoto/colorful.webp",
      title: "MORE IS JUST MORE",
      accentColor: "#fff0b4",
      content:
        "We live and love variety. With our colorful range, it is also literally on everyone's lips. With such a large selection, it's not easy to find your absolute favourite. But the good thing is: you don't have to choose between Marzipan, Nougat or Alpine Milk Chocolate, for example. You can even have more than one favourite flavor.",
    },
    {
      name: "NUT SELECTION",
      color: "rgb(59, 150, 43)",
      title: "NUTTING BUT THE BEST",
      image: "/sortPhoto/but.webp",
      content:
        "Whether hazelnuts, almonds, or cashews - we fully load our squares to the top with the best nuts! How we still get 100% certified sustainable cocoa around it remains our secret. One thing is for sure though: with our Nut Selection, we redefine the concept of nut chocolate",
      accentColor: "#fff0b4",
    },
    {
      name: "COCOA SELECTION",
      color: "rgb(255, 205, 74)",
      image: "/sortPhoto/cocoa.webp",
      title: "REDUCED TO THE MMMHHH!",
      accentColor: "#009a92",
      content:
        "Our Cocoa Selection concentrates on the essentials because there is not much else than cacao in our Cocoa Selection. Only 3 or 4 ingredients - good chocolate does not need more! The cocoa in each bar comes from just one country of origin - Ghana, Nicaragua, or Peru and is 100% certified sustainable.",
    },
    {
      name: "CHOCO CUBES",
      color: "rgb(255, 0, 100)",
      image: "/sortPhoto/choco.webp",
      title: "THERE IS ALWAYS AN OCCASION",
      accentColor: "#fff6cd",
      content:
        "Now that's a truly tasty gift idea! Our compact all-in-one packages are filled to the brim with delicious flavours. And thanks to the beautiful design, you don't even need gift paper. Don't say it with flowers, say it with cubes!",
    },
    {
      name: "MINI RANGE",
      color: "rgb(179, 126, 101)",
      image: "/sortPhoto/mini.webp",
      title: "SHORT INTRODUCTION. GREAT JOY.",
      accentColor: "#f6b680",
      content:
        "With our mini paper bags, you can't go wrong in any way. In four delicious varieties, the minis provide maximum enjoyment. Thanks to their paper packaging, they are also perfect as a gift - or you can simply indulge in them yourself.",
    },

    {
      name: "250G BARS",
      color: "rgb(24, 36, 98)",
      image: "/sortPhoto/250g.webp",
      title: "SOMETIMES SIZE MATTERS",
      accentColor: "#6fb8dd",
      content:
        "For example, if you want to give a very special person a very special treat. Or when you simply can't get enough of your favourite flavour. Because when it comes to chocolate, you should think big - and only settle for the best.",
    },
  ];

  function responsiveTabHandler() {
    if (screen.width < 630) {
      return 1;
    } else {
      return 2;
    }
  }

  function handleTab(event) {
    const targetIndex = MainStreamDataForSwiperCover.findIndex(
      (item) => item === event
    );
    if (targetIndex !== -1) {
      swiperRef.slideTo(targetIndex + responsiveTabHandler());
    } else {
      console.error("Item not found in data array");
    }
  }

  function providerNameFilter(content) {
    return content.replace("RITTER SPORT ", "");
  }
  return (
    <div className="">
      <div
        className="w-[100vw] h-[100vh] flex flex-col"
        style={{ backgroundColor: mainStreamPipeForState.color }}
      >
        <div className="mt-[-20px]">
          <Header />
        </div>
        <div className="w-[100%] mt-[60px] h-[50%]">
          <Swiper
            slidesPerView={3}
            modules={[Navigation, Autoplay, Virtual]}
            navigation={true}
            onSlideChange={(swiperCore) => {
              const { realIndex } = swiperCore;

              setMainStreamPipeForState({
                ...mainStreamPipeForState,
                color: MainStreamDataForSwiperCover[realIndex].color,
                name: MainStreamDataForSwiperCover[realIndex].name,
                title: MainStreamDataForSwiperCover[realIndex].title,
                content: MainStreamDataForSwiperCover[realIndex].content,
                accentColor:
                  MainStreamDataForSwiperCover[realIndex].accentColor,
                cur_index: realIndex,
              });
            }}
            onSwiper={setSwiperRef}
            init={true}
            virtual
            loop={true}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {MainStreamDataForSwiperCover.map((e, index) => (
              <SwiperSlide virtualIndex={index} key={index}>
                <div
                  style={{
                    backgroundColor: MainStreamDataForSwiperCover[index]?.color,
                  }}
                  className="w-[100%] flex justify-center"
                >
                  <img src={e.image}></img>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className="h-[40vh] absolute z-[99999] top-[60vh] w-[100vw] flex justify-center flex-col text-center items-center"
          style={{
            color: mainStreamPipeForState.accentColor,
          }}
        >
          <div className="w-[70vw]">
            <h1 className="textTitle text-[35px] font-bold">
              {mainStreamPipeForState.title}
            </h1>
            <p className="textContent text-[24px]">
              {mainStreamPipeForState.content}
            </p>
          </div>
        </div>
        <div
          style={{ backgroundColor: mainStreamPipeForState.accentColor }}
          className={
            "fixed z-[99999999] w-[100vw] top-[95vh] gap-[20px] overflow-x-scroll flex justify-evenly"
          }
        >
          {MainStreamDataForSwiperCover.map((e, index) =>
            e.name === mainStreamPipeForState.name ? (
              <button
                className="font"
                key={index}
                style={{
                  height: "5vh",
                  backgroundColor: mainStreamPipeForState.color,
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "18px",
                  color: mainStreamPipeForState.accentColor,
                }}
              >
                {e.name}
              </button>
            ) : (
              <button
                className="font"
                style={{
                  paddingLeft: "20px",
                  fontSize: "18px",
                  paddingRight: "20px",
                  backgroundColor: mainStreamPipeForState.accentColor,
                }}
                key={index}
                onClick={() => handleTab(e)}
              >
                {e.name}
              </button>
            )
          )}
        </div>
      </div>

      <div
        className="flex items-center flex-wrap"
        style={{ backgroundColor: mainStreamPipeForState.color }}
      >
        {Data.map((e, index) => {
          return e.sort == mainStreamPipeForState.name ? (
            <div
              key={index}
              className="flex w-[20%] min-w-max-[300px] justify-center max-[1000px]:w-[50%] bg-cover"
            >
              <img src={e.image}></img>
              <p className="absolute z-[2000] text-[white] max-[1000px]:text-[14px] max-[1000px]:mt-[42%] mt-[17%]">
                {providerNameFilter(e.name)}
              </p>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

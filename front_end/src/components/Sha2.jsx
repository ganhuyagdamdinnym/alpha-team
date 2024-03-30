"use client";

import { useState } from "react";
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
      accentColor: "#009a92;",
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

  function handleTab(event) {
    const targetIndex = MainStreamDataForSwiperCover.findIndex(
      (item) => item === event
    );
    if (targetIndex !== -1) {
      swiperRef.slideTo(targetIndex + 2);
    } else {
      console.error("Item not found in data array");
    }
  }
  return (
    <div className="">
      <div className="w-[100vw] h-[100vh] flex flex-col">
        <div className="mt-[-20px]">
          <Header />
        </div>
        <div
          style={{ backgroundColor: mainStreamPipeForState.color }}
          className="w-[100%] mt-[60px] h-[50%]"
        >
          <Swiper
            slidesPerView={3}
            modules={[Navigation, Autoplay, Virtual]}
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
              });
            }}
            onSwiper={setSwiperRef}
            init={true}
            virtual
            loop={true}
            centeredSlides={true}
          >
            {MainStreamDataForSwiperCover.map((e, index) => (
              <SwiperSlide
                virtualIndex={index}
                style={{ backgroundColor: e.color }}
                key={index}
              >
                <img height="auto" src={e.image}></img>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="h-[40vh] w-[100vw] flex justify-center flex-col text-center items-center"
          style={{
            backgroundColor: mainStreamPipeForState.color,
            color: mainStreamPipeForState.accentColor,
          }}
        >
          <div className="w-[70vw]">
            <h1 className="text-[46px] font-bold">
              {mainStreamPipeForState.title}
            </h1>
            <p className="text-[24px]">{mainStreamPipeForState.content}</p>
          </div>
        </div>
        <div
          style={{ backgroundColor: mainStreamPipeForState.accentColor }}
          className={
            "sticky z-[99999999] bottom-0 gap-[20px] flex justify-evenly"
          }
        >
          {MainStreamDataForSwiperCover.map((e, index) =>
            e.name === mainStreamPipeForState.name ? (
              <button
                key={index}
                style={{
                  height: "5vh",
                  backgroundColor: mainStreamPipeForState.color,
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                {e.name}
              </button>
            ) : (
              <button
                style={{
                  paddingLeft: "20px",
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

      <div className="flex items-center flex-wrap">
        {Data.map((e, index) => {
          return e.sort == mainStreamPipeForState.name ? (
            <img
              key={index}
              className="flex w-[20%] min-w-max-[300px] max-[1000px]:w-[50%] bg-cover"
              src={e.image}
            ></img>
          ) : null;
        })}
      </div>
    </div>
  );
}

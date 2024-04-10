"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Header } from "./Header";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Keyboard } from "swiper/modules";
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
        "We live and love variety. With our colorful range, it is also literally on everyone's lips. With such a large selection, it's not easy to find your absolute favourite.",
    },
    {
      name: "NUT SELECTION",
      color: "rgb(59, 150, 43)",
      title: "NUTTING BUT THE BEST",
      image: "/sortPhoto/but.webp",
      content:
        "Whether hazelnuts, almonds, or cashews - we fully load our squares to the top with the best nuts! How we still get 100% certified sustainable cocoa around it remains our secret.",
      accentColor: "#fff0b4",
    },
    {
      name: "COCOA SELECTION",
      color: "rgb(255, 205, 74)",
      image: "/sortPhoto/cocoa.webp",
      title: "REDUCED TO THE MMMHHH!",
      accentColor: "#009a92",
      content:
        "Our Cocoa Selection concentrates on the essentials because there is not much else than cacao in our Cocoa Selection.",
    },
    {
      name: "CHOCO CUBES",
      color: "rgb(255, 0, 100)",
      image: "/sortPhoto/choco.webp",
      title: "THERE IS ALWAYS AN OCCASION",
      accentColor: "#fff6cd",
      content:
        "Now that's a truly tasty gift idea! Our compact all-in-one packages are filled to the brim with delicious flavours.",
    },
    {
      name: "MINI RANGE",
      color: "rgb(179, 126, 101)",
      image: "/sortPhoto/mini.webp",
      title: "SHORT INTRODUCTION. GREAT JOY.",
      accentColor: "#f6b680",
      content:
        "With our mini paper bags, you can't go wrong in any way. In four delicious varieties, the minis provide maximum enjoyment.",
    },

    {
      name: "250G BARS",
      color: "rgb(24, 36, 98)",
      image: "/sortPhoto/250g.webp",
      title: "SOMETIMES SIZE MATTERS",
      accentColor: "#6fb8dd",
      content:
        "For example, if you want to give a very special person a very special treat. Or when you simply can't get enough of your favourite flavour.",
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
            modules={[Navigation, Autoplay, Virtual, Keyboard]}
            navigation={true}
            keyboard={true}
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
              <SwiperSlide virtualIndex={index}>
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
                className=" chocolateSortBuy text-[20px]  w-[16%]"
                key={index}
                style={{
                  height: "5vh",
                  backgroundColor: mainStreamPipeForState.color,
                  // background:
                  //   // background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(126,58,64,1) 4%, rgba(92,7,15,1) 50%, rgba(121,9,9,1) 93%, rgba(252,252,252,0) 100%);
                  //   "linear-gradient(90deg, rgba(255,255,255,0) 0%, " +
                  //   mainStreamPipeForState.color +
                  //   " 34%, " +
                  //   mainStreamPipeForState.color +
                  //   " 64%, rgba(252,252,252,0) 100%)",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  color: mainStreamPipeForState.accentColor,
                }}
              >
                {e.name}
              </button>
            ) : (
              <button
                className=" chocolateSortBuy text-[20px] w-[16%] "
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  backgroundColor: mainStreamPipeForState.accentColor,
                }}
                onClick={() => handleTab(e)}
              >
                {e.name}
              </button>
            )
          )}
        </div>
      </div>

      <div
        className="flex items-center flex-wrap  mb-[40px]"
        style={{ backgroundColor: mainStreamPipeForState.color }}
      >
        {Data.map((e, index) => {
          return e.sort == mainStreamPipeForState.name ? (
            <div
              key={index}
              className={
                "flex transition-all duration-300 w-[20%] min-w-max-[300px] h-[20%] justify-center max-[1000px]:w-[50%] bg-cover overflow-hidden"
              }
            >
              <img className="chocolate-card-image" src={e.image} />

              {/* <img className="chocolate-card-image" src={e.hover} /> */}
              {/* {document
                .querySelector("image" + index)
                .addEventListener("mouseover") ? (
                <img src={e.image}></img>
              ) : (
                <img src={e.hover}></img>
              )} <3 */}
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

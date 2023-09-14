import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import { TourCard } from "./PackageCard";
register();

export const PackageSlider = ({ data }) => {
  const swiperElRef = useRef(null);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view={windowSize.current[0] <= 400 ? "1" : "4"}
      navigation="true"
      pagination="true"
      space-between="10"
    >
      {data
        ? data.map((item) => {
            return (
              <swiper-slide>
                <TourCard item={item} />
              </swiper-slide>
            );
          })
        : ""}
    </swiper-container>
  );
};

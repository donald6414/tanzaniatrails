import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import { TourCard } from "./PackageCard";
import TourFilterElement from "../pages/TourFilterElement";
import Kard from "./Kard";
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
      space-between="1"
    >
      {data
        ? data.map((item, index) => {
            return (
              <swiper-slide>
                <Kard key={index} item={item} />
              </swiper-slide>
            );
          })
        : ""}
    </swiper-container>
  );
};

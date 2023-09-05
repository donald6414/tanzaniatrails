import React, { useState } from "react";
import { CgChevronLeftO, CgChevronRightO } from "react-icons/cg";
import { Title2 } from "./Title";
import { Link } from "react-router-dom";

export const ImageSlider = ({ item }) => {
  const slider = [
    {
      url:
        "https://api.tanzaniatrails.co.tz/" + item.package_gallery[0].image_url,
    },
    {
      url:
        "https://api.tanzaniatrails.co.tz/" + item.package_gallery[1].image_url,
    },
    {
      url:
        "https://api.tanzaniatrails.co.tz/" + item.package_gallery[2].image_url,
    },
    {
      url:
        "https://api.tanzaniatrails.co.tz/" + item.package_gallery[3].image_url,
    },
    {
      url:
        "https://api.tanzaniatrails.co.tz/" + item.package_gallery[4].image_url,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(3);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mx-auto m-auto  relative  group">
      <div
        style={{ background: `url(${slider[currentIndex].url})` }}
        className="w-full h-96  rounded-lg bg-center bg-cover duration-500 bg-no-repeat"
      ></div>
      <div className="absolute inset-0 bg-gray-950 bg-opacity-30 rounded-lg"></div>

      {/**Title */}
      <div className="absolute left-5 bottom-5 space-y-5">
        <Title2
          title={item.title}
          locate={"start"}
          className={"text-white md:text-3xl drop-shadow-lg"}
        />
        <div className=" flex flex-wrap gap-2 ">
          <Link className="border-2 border-gray-500 p-1 rounded-full  bg-gray-400  text-white">
            <h1 className="font-bold text-sm px-2">
              {item.package_level.title}
            </h1>
          </Link>
          {/* <Link className="border-2 border-gray-500 p-1 rounded-full  bg-gray-400  text-white">
            <h1 className="font-bold text-sm px-2">Luxury</h1>
          </Link> */}
        </div>
      </div>

      {/**arrow left */}
      <div className="absolute drop-shadow top-[50%] left-5 bg-white rounded-full cursor-pointer">
        <CgChevronLeftO size={32} onClick={prevSlide} />
      </div>
      {/**arrow right */}
      <div className="absolute top-[50%] right-5 cursor-pointer drop-shadow bg-white rounded-full">
        <CgChevronRightO size={32} onClick={nextSlide} />
      </div>
    </div>
  );
};

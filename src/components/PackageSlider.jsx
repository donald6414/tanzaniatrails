import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import { TourCard } from "./PackageCard";
import ClipLoader from "react-spinners/ClipLoader";

register();

export const PackageSlider = () => {
  const swiperElRef = useRef(null);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://api.tanzaniatrails.co.tz/api/get_popular_packages";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  if (data === null) {
    return (
      <div className="flex justify-center items-center">
        <ClipLoader
          color={"#683e12"}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

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

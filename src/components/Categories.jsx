import { useRef, useEffect } from "react";
import { GiVintageRobot } from "react-icons/gi";
import { Paragraph, Title2 } from "./Title";
import { register } from "swiper/element/bundle";
import {
  FaCoins,
  FaGlobeAfrica,
  FaPlaneDeparture,
  FaPlaneSlash,
  FaTree,
} from "react-icons/fa";
import { partners } from "../assets";

register();

export const TourCategories = () => {
  return (
    <div className="container mx-auto p-5 bg-gradient-to-r from-[#e7ecef29] via-[#e1e7ea] to-[#e7ecef29]">
      <div className="grid grid-cols-3 md:grid-cols-6 justify-items-center">
        <div className="indicator">
          <span className="indicator-item badge badge-primary">UTILITY</span>
          <button className="rounded-full bg-[#683e12] hover:bg-[#51300d] shadow-lg hover:drop-shadow-lg ">
            <GiVintageRobot size={32} className="m-5 text-white" />
          </button>
        </div>

        <div className="indicator">
          <span className="indicator-item badge badge-primary">UTILITY</span>
          <button className="rounded-full bg-[#683e12] hover:bg-[#51300d] shadow-lg hover:drop-shadow-lg ">
            <GiVintageRobot size={32} className="m-5 text-white" />
          </button>
        </div>

        <div className="indicator">
          <span className="indicator-item badge badge-primary">UTILITY</span>
          <button className="rounded-full bg-[#683e12] hover:bg-[#51300d] shadow-lg hover:drop-shadow-lg ">
            <GiVintageRobot size={32} className="m-5 text-white" />
          </button>
        </div>

        <div className="indicator">
          <span className="indicator-item badge badge-primary">UTILITY</span>
          <button className="rounded-full bg-[#683e12] hover:bg-[#51300d] shadow-lg hover:drop-shadow-lg ">
            <GiVintageRobot size={32} className="m-5 text-white" />
          </button>
        </div>

        <div className="indicator">
          <span className="indicator-item badge badge-primary">UTILITY</span>
          <button className="rounded-full bg-[#683e12] hover:bg-[#51300d] shadow-lg hover:drop-shadow-lg ">
            <GiVintageRobot size={32} className="m-5 text-white" />
          </button>
        </div>

        <div className="indicator">
          <span className="indicator-item badge badge-primary">UTILITY</span>
          <button className="rounded-full bg-[#683e12] hover:bg-[#51300d] shadow-lg hover:drop-shadow-lg ">
            <GiVintageRobot size={32} className="m-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
export const TrustedCat = () => {
  const swiperElRef = useRef(null);

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

  return (
    <div className="container mx-auto p-5 bg-gradient-to-r from-[#e7ecef29] via-[#e1e7ea] to-[#e7ecef29] py-10">
      <Title2 title={"Trusted by largest travel brands"} locate={"center"} />
      <div className="py-5">
        <swiper-container
          ref={swiperElRef}
          slides-per-view="5"
          navigation="true"
          pagination="true"
          space-between="10"
          auto-scroll="true"
        >
          {partners.map((partner, index) => {
            return (
              <swiper-slide key={index}>
                <div className="flex bg-white p-4 items-center justify-center rounded-xl drop-shadow">
                  <img src={partner.src} alt="destination" className="h-10 " />
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
        <div></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center mt-5">
        <div className="flex flex-col justify-start border-2 border-gray-300 rounded-xl p-5">
          <div className="flex items-center space-x-3 ">
            <FaGlobeAfrica size={24} />
            <h5 className="font-bold">BEST TOURS</h5>
          </div>
          <p className="mt-2 text-gray-600">
            A strict screening process ensures that we only offer the best tours
            and trip packages globally.
          </p>
        </div>
        <div className="flex flex-col justify-start border-2 border-gray-300 rounded-xl p-5">
          <div className="flex items-center space-x-3 ">
            <FaCoins size={24} />
            <h5 className="font-bold">BEST PRICES</h5>
          </div>
          <p className="mt-2 text-gray-600">
            We guarantee you the best price. Found a lower price? We will match
            it
          </p>
        </div>
        <div className="flex flex-col justify-start border-2 border-gray-300 rounded-xl p-5">
          <div className="flex items-center space-x-3 ">
            <FaTree size={24} />
            <h5 className="font-bold">SUSTAINABLE TOURS</h5>
          </div>
          <p className="mt-2 text-gray-600">
            We CO2 offset all tour bookings via investments in carbon reduction
            projects.
          </p>
        </div>
        <div className="flex flex-col justify-start border-2 border-gray-300 rounded-xl p-5">
          <div className="flex items-center space-x-3 ">
            <FaGlobeAfrica size={24} />
            <h5 className="font-bold">CUSTOMERS 💖 US</h5>
          </div>
          <p className="mt-2 text-gray-600">
            Customers have rated our trips 4.8 of 5 stars out of more than 2,000
            trip ratings.
          </p>
        </div>
      </div>
    </div>
  );
};

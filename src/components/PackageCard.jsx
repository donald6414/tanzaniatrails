import React from "react";
import twigaImage from "../assets/twiga.jpeg";
import { Title2 } from "./Title";
import { Link } from "react-router-dom";
import { toursData } from "../constants";
import { FaChevronRight, FaHeart, FaStar } from "react-icons/fa";
import { GiVintageRobot } from "react-icons/gi";
import SingleTour from "../pages/SingleTour";

export const EcosystemCard = ({ title, content, to, bargeText }) => {
  return (
    <div className="rounded p-10 text-center md:text-start bg-white drop-shadow-md">
      <div className="indicator mt-10">
        <span className="indicator-item badge badge-primary">
          {bargeText}100%
        </span>
        <span className="rounded-full  bg-[#683e12]">
          <GiVintageRobot size={32} className="m-5 text-white" />
        </span>
      </div>
      <h5 className="font-bold md:text-3xl mt-3">{title}Auto Generator</h5>
      <p className="text-slate-500 md:mt-5 md:text-lg">
        {content}
        $gGPT is the utility token behind the GreenGPT ecosystem. It is
        ultimately how community access the AI model, GreenGPT, and GreenGPT
        Marketplace and more on build.
      </p>

      <div className="mt-5 flex items-center">
        <Link
          to={to}
          className="btn bg-[#683e12] hover:bg-[#51300d] rounded-r-full  border-none hover:drop-shadow-lg"
        >
          Go.
        </Link>
      </div>
    </div>
  );
};

export const PackageCard = () => {
  return (
    <div>
      <div className="flex flex-col shadow-md hover:drop-shadow-lg rounded bg-white">
        <div>
          <img src={twigaImage} alt="" className="w-full h-full rounded" />
        </div>

        <div className="p-2">
          <div>
            <Title2 title={"4 - Days Serengeti National Park"} />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">$1,000</div>
            <div>
              <Link
                to={"/greengpt"}
                className="btn bg-[#683e12] hover:bg-[#51300d] rounded-full  border-none space-x-2"
              >
                Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TourCard1 = ({ tour }) => {
  const averageRating =
    toursData.reviews.reduce((total, review) => total + review.rating, 0) /
    toursData.reviews.length;

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <img
        src={toursData.image}
        alt={toursData.title}
        className="mb-2 rounded-lg"
      />
      <h2 className="text-xl font-semibold mb-1">{toursData.title}</h2>
      <p className="text-gray-500 mb-2">{toursData.description}</p>
      <div className="flex items-center mb-2">
        {Array.from({ length: Math.floor(averageRating) }, (_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-5 w-5 text-yellow-500 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        ))}
        <span className="text-gray-600">{averageRating.toFixed(1)}</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">
          ${toursData.seasons[0].price.toFixed(2)}
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export const TourCard = ({ item }) => {
  if (item === undefined) {
    return null;
  }

  const url = "https://api.tanzaniatrails.co.tz/" + item.image_url;

  return (
    <div className="shadow-md hover:drop-shadow-lg">
      <div className="flex flex-col">
        <div className="relative">
          <img
            src={url}
            alt="tour card"
            className="h-96 w-full object-cover content-center rounded-lg"
          />
          <div className="absolute inset-0 bg-gray-950 bg-opacity-30 rounded-lg"></div>
          <div className="">
            <div className="absolute flex justify-between items-center top-5 left-5">
              <Link
                to={"/greengpt"}
                className="  btn bg-[#683e12] bg-transparent-50  hover:bg-[#51300d] rounded-full  border-none  "
              >
                Featured
              </Link>
            </div>

            <div className="absolute flex justify-between items-center top-5 right-5">
              <button className=" bg-[#683e12] hover:bg-[#51300d] rounded-full  border-none text-white ">
                <FaHeart size={24} className="m-3" />
              </button>
            </div>
          </div>
          <div className="absolute w-full bg-gradient-to-t from-gray-700  via-slate-500 to-transparent  text-white px-5 pt-10 pb-5 rounded-lg bottom-0">
            {/** safari reviews  */}
            <div className="-mt-8 flex items-center justify-between ">
              <h1 className="font-bold text-xs flex items-center ">
                <Link className="text-white">
                  {item.package_getting_there.tour_start.title}
                </Link>
                <FaChevronRight className="text-xs mx-2 text-white" />
                <Link className="text-white">
                  {item.package_getting_there.tour_end.title}
                </Link>
              </h1>
              <span className="flex items-center bg-[#683e12] p-1 px-2 rounded-full ">
                <FaStar className="text-xs mr-2" />
                <h1 className="font-bold text-xs">4.7 ( 345 )</h1>
              </span>
            </div>
            {/** safari title */}
            <div className="py-5 text-white">
              <Link className="font-bold text-xl text-white ">
                {item.title}
              </Link>
              <h1 className="font-bold text-sm">
                {item.no_of_days} Days / {item.no_of_days - 1} Night{" "}
              </h1>
            </div>
            {/** safari types */}
            <div className="pb-3 flex flex-wrap gap-2">
              <Link className="border-2 border-gray-500 p-1 rounded-full  bg-gray-400  text-white">
                <h1 className="font-bold text-sm px-2">
                  {item.package_level.title}
                </h1>
              </Link>
              {/* <Link className="border-2 border-gray-500 p-1 rounded-full  bg-gray-400  text-white">
                <h1 className="font-bold text-sm px-2">Luxury</h1>
              </Link> */}
              {/* <Link className="border-2 border-gray-500 bg-gray-400  text-white p-1 rounded-full">
                <h1 className="font-bold text-sm px-2">Mid Range</h1>
              </Link> */}
            </div>
            {/** price & details */}
            <div className="border-slate-100 border-t-2 text-white">
              <div className="flex items-center justify-between mt-2">
                <h5 className="font-bold text-xl">$ {item.price}</h5>
                <Link
                  to={`/singletour/${item.id}`}
                  className=" text-lg flex items-center text-white"
                >
                  Details
                  <FaChevronRight className="text-xs ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TourCardOrg = () => {
  return (
    <div className="hover:drop-shadow-lg">
      <div className="flex flex-col">
        <div className="relative">
          <img
            src="https://www.serengetiparktanzania.com/wp-content/uploads/2021/01/Serengeti-National-Park-Tanzania.jpg"
            alt="tour card"
            className="h-96 w-full object-cover content-center rounded-lg"
          />
          <div className="">
            <div className="absolute flex justify-between items-center top-5 left-5">
              <Link
                to={"/greengpt"}
                className="  btn bg-[#683e12] bg-transparent-50  hover:bg-[#51300d] rounded-full  border-none  "
              >
                Featured
              </Link>
            </div>

            <div className="absolute flex justify-between items-center top-5 right-5">
              <button className=" bg-[#683e12] hover:bg-[#51300d] rounded-full  border-none text-white ">
                <FaHeart size={24} className="m-3" />
              </button>
            </div>
          </div>
          <div className="absolute w-full bg-white px-5 pt-10 pb-5 rounded-lg bottom-0">
            {/** safari reviews  */}
            <div className="-mt-8 flex items-center justify-between">
              <h1 className="font-bold text-xs flex items-center">
                <Link>Arusha </Link> <FaChevronRight className="text-xs mx-2" />
                <Link>Serengeti </Link>
              </h1>
              <span className="flex items-center ">
                <FaStar className="text-xs mr-2" />
                <h1 className="font-bold text-xs">4.7 ( 345 )</h1>
              </span>
            </div>
            {/** safari title */}
            <div className="py-5">
              <Link className="font-bold text-xl text-slate-500">
                Best Kilimanjaro Luxury
              </Link>
              <h1 className="font-bold text-sm">5 Days / 4 Nights</h1>
            </div>
            {/** safari types */}
            <div className="pb-3 flex flex-wrap gap-2">
              <Link className="border-2 border-gray-500 p-1 rounded-full">
                <h1 className="font-bold text-sm px-2">Mid Range</h1>
              </Link>
              <Link className="border-2 border-gray-500 p-1 rounded-full">
                <h1 className="font-bold text-sm px-2">Luxury</h1>
              </Link>
              <Link className="border-2 border-gray-500 p-1 rounded-full">
                <h1 className="font-bold text-sm px-2">Mid Range</h1>
              </Link>
            </div>
            {/** price & details */}
            <div className="border-slate-800 border-t-2">
              <div className="flex items-center justify-between mt-2">
                <h5 className="font-bold text-xl">$ 1800</h5>
                <Link
                  to={"/singletour"}
                  className="text-[#683e12] text-lg flex items-center"
                >
                  Details
                  <FaChevronRight className="text-xs ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

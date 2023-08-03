import React from "react";
import twigaImage from "../assets/twiga.jpeg";
import { Title2 } from "./Title";
import { Link } from "react-router-dom";
import { toursData } from "../constants";

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

export const TourCard = ({ tour }) => {
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

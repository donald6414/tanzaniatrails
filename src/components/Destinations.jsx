import React from "react";
import { Title } from "./Title";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { DestinationCounter } from "./DestinationCounter";

export const Destinations = () => {
  return (
    <div className="container mx-auto p-5 md:py-24 py-10">
      <div className="">
        <Title title={"Destination"} locate={"start"} />
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 md:gap-10">
        <div className="rounded-lg relative">
          <img
            src="https://www.serengetiparktanzania.com/wp-content/uploads/2021/01/Serengeti-National-Park-Tanzania.jpg"
            alt="tour card"
            className="h-96 w-full object-cover content-center rounded-lg"
          />
          <div className="absolute inset-0 bg-gray-950 bg-opacity-40  rounded-lg"></div>
          <DestinationCounter
            tourCount={9}
            rateCategory={"Top Rated"}
            park={"Tarangire National Park"}
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 md:gap-5">
              <div className="col-span-2  rounded-lg relative">
                <img
                  src="https://www.serengetiparktanzania.com/wp-content/uploads/2021/01/Serengeti-National-Park-Tanzania.jpg"
                  alt="tour card"
                  className="h-48 w-full object-cover content-center rounded-lg"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-40  rounded-lg"></div>
                <DestinationCounter
                  tourCount={9}
                  rateCategory={"Top Rated"}
                  park={"Tarangire National Park"}
                />
              </div>
              <div className=" relative  rounded-lg">
                <img
                  src="https://www.serengetiparktanzania.com/wp-content/uploads/2021/01/Serengeti-National-Park-Tanzania.jpg"
                  alt="tour card"
                  className="h-48  w-full object-cover content-center rounded-lg"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-40  rounded-lg"></div>
                <DestinationCounter
                  tourCount={18}
                  rateCategory={"Best Seller"}
                  park={"Manyara National Park"}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0 md:gap-5">
              <div className=" relative  rounded-lg">
                <img
                  src="https://www.serengetiparktanzania.com/wp-content/uploads/2021/01/Serengeti-National-Park-Tanzania.jpg"
                  alt="tour card"
                  className="h-48 w-full object-cover content-center rounded-lg"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-40  rounded-lg"></div>{" "}
                <DestinationCounter
                  tourCount={12}
                  rateCategory={"Top Rated"}
                  park={"Ngorongoro National Park"}
                />
              </div>
              <div className=" relative space-y-5 md:space-y-0  rounded-lg">
                <img
                  src="https://www.serengetiparktanzania.com/wp-content/uploads/2021/01/Serengeti-National-Park-Tanzania.jpg"
                  alt="tour card"
                  className="h-48 w-full object-cover content-center rounded-lg"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-40  rounded-lg"></div>
                <DestinationCounter
                  tourCount={9}
                  rateCategory={"Top Rated"}
                  park={"Tarangire National Park"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

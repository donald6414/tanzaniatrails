import React from "react";
import { Link } from "react-router-dom";
import { Title2 } from "../components";

export const BookingHorizontal = () => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10 bg-white md:mx-40 p-5 rounded-full drop-shadow-lg ">
        <div>
          <Title2 title={"Book Now"} />
        </div>
        <div>
          <div className="flex flex-col">12</div>
        </div>
        <div>3</div> <div>4</div>
        <div>
          <Link
            to={"/greengpt"}
            className="btn bg-[#683e12] hover:bg-[#51300d] rounded-full space-1"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export const BookingVertical = () => {
  return <div>Booking</div>;
};

export const BookingForm = () => {
  return <div>Booking</div>;
};

import React from "react";
import { Link } from "react-router-dom";
import { Selection, SelectionBook, SelectionDate, Title2 } from "../components";

export const BookingHorizontal = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10 bg-white md:mx-40 p-5 md:rounded-full rounded-lg drop-shadow-lg ">
        <div className="flex items-center justify-center">
          <Title2 title={"Book Now"} />
        </div>
        <div>
          <div className="">
            <Selection />
          </div>
        </div>
        <div>
          <SelectionBook />
        </div>
        <div>
          <SelectionDate />
        </div>
        <div className="flex items-center justify-center">
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

import React from "react";
import { Title2 } from "./Title";
import { Selection, SelectionBook, SelectionDate } from "./Selection";
import { Link } from "react-router-dom";

export const NewsLetter = () => {
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
            className="btn bg-[#683e12] hover:bg-[#51300d] rounded-full  border-none"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};

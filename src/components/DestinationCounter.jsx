import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DestinationCounter = ({ tourCount, rateCategory, park }) => {
  return (
    <div>
      <div className="">
        <div className="absolute flex justify-between items-center top-5 left-5">
          <Link
            to={"/greengpt"}
            className="  btn bg-[#683e12] bg-transparent-50  hover:bg-[#51300d] rounded-full  border-none  "
          >
            {rateCategory}
          </Link>
        </div>

        <div className="absolute flex justify-between items-center top-5 right-5">
          <button className=" bg-[#683e12] hover:bg-[#51300d] rounded-full  border-none text-white ">
            <FaHeart size={24} className="m-3" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0  drop-shadow-lg bg-gradient-to-tr from-slate-800 w-full rounded-b-lg">
        <div className="p-5 text-white">
          <Link className="font-bold text-xl text-white ">{park}</Link>
          <h1 className="font-bold text-sm">{tourCount}</h1>
        </div>
      </div>
    </div>
  );
};

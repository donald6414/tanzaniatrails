import React from "react";
import { GiVintageRobot } from "react-icons/gi";

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

import React from "react";
import twigaImage from "../assets/twiga.jpeg";
import { Title2 } from "./Title";
import { Link } from "react-router-dom";

const PackageCard = () => {
  return (
    <div className="flex flex-col  shadow rounded">
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
  );
};
export default PackageCard;

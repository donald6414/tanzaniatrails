import React from "react";
import { Paragraph, Title, Title2 } from "./Title";
import { PackageCard, TourCard } from "./PackageCard";
import { Link } from "react-router-dom";

export const Featured = () => {
  return (
    <div className="bg-slate-100 py-10">
      <div className="container mx-auto px-5">
        <Title title={"Featured Tours"} locate={"start"} />
        <Paragraph
          content={"Most recommended tours on this season."}
          locate={"start"}
          color={"slate-500"}
        />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5 ">
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </div>
      </div>
    </div>
  );
};

export const BeachFeatured = () => {
  return (
    <div className="bg-green-500 ">
      <div className="container mx-auto px-5 md:py-24 py-10">
        <Title title={"Beach Tours"} locate={"start"} />
        <Paragraph
          content={"Most recommended tours on this season."}
          locate={"start"}
          color={"slate-500"}
        />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-3">
            <div className="flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <PackageCard />
                <PackageCard />
                <PackageCard />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center  bg-[#683e12] hover:bg-[#51300d] rounded-lg drop-shadow">
            <Title2 title={"Don't Miss A Chance"} color={"white"} />
            <div className="mt-10 flex flex-col space-y-5">
              <Link
                to={"/tailor-made"}
                className="btn bg-white text-[#683e12] hover:bg-slate-200 rounded-full  border-none"
              >
                Customize Your Safari
              </Link>
              <Link
                to={"/generate-itinerary"}
                className="btn  bg-white text-[#683e12] hover:bg-slate-200 rounded-full  border-none"
              >
                Generate Itinerary
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PopularFeatured = () => {
  return (
    <div className="bg-slate-100 py-10">
      <div className="container mx-auto px-5">
        <Title title={"Featured Tours"} locate={"start"} />
        <Paragraph
          content={"Most recommended tours on this season."}
          locate={"start"}
          color={"slate-500"}
        />
        <div className="mt-5 flex md:flex-row items-center  flex-wrap gap-5 md:w-1/3">
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </div>
      </div>
    </div>
  );
};

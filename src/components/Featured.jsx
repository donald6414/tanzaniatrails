import React from "react";
import PackageCard from "./PackageCard";

const Featured = () => {
  return (
    <div>
      <div id="ecosystem" className="text-center bg-slate-100 md:py-24 py-10">
        <div className="container mx-auto px-5">
          <h1 className="md:text-7xl text-3xl tracking-wide font-bold md:text-start text-slate-900 ">
            Featured
            <br />
            Tours.
          </h1>
          <div className="mt-16  grid grid-cols-1 md:grid-cols-4 gap-5">
            <PackageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

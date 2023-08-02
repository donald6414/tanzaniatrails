import React from "react";
import { Link } from "react-router-dom";
import { Title } from "./Title";
import { PackageCard } from "./PackageCard";

const Featured = () => {
  return (
    <div className="bg-slate-100 py-10">
      <div className="container mx-auto px-5">
        <Title title={"Featured Tours"} locate={"start"} />
        <div className="mt-10 flex md:flex-row items-center  flex-wrap gap-5 md:w-1/4">
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

export default Featured;

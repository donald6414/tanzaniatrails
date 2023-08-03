import React from "react";
import { Title } from "./Title";

export const Destinations = () => {
  return (
    <div className="container mx-auto p-5 md:py-24 py-10">
      <div className="">
        <Title title={"Featured Tours"} locate={"start"} />
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 md:gap-10">
        <div className=" p-5 bg-[url('https://placekitten.com/1400')] bg-cover bg-center rounded-lg">
          1434
        </div>
        <div className="col-span-2">
          <div className="flex flex-col space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 md:gap-5">
              <div className="p-5 col-span-2 bg-[url('https://placekitten.com/1400')] bg-cover bg-center  rounded-lg">
                34353
              </div>
              <div className=" p-5 bg-[url('https://placekitten.com/1400')] bg-cover bg-center  rounded-lg">
                34353
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0 md:gap-5">
              <div className=" p-5 bg-[url('https://placekitten.com/1400')] bg-cover bg-center  rounded-lg">
                34353
              </div>
              <div className=" p-5 bg-[url('https://placekitten.com/1400')] bg-cover bg-center space-y-5 md:space-y-0  rounded-lg">
                34353
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { GrLocationPin } from "react-icons/gr";

export const Selection = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div>
        <GrLocationPin size={28} className="mr-1" />
      </div>
      <div className="form-control">
        <select className="select select-bordered ring-transparent rounded-full w-full max-w-xs">
          <option disabled selected>
            Select Location
          </option>
          <option>Serengeti</option>
          <option>Manyara</option>
          <option>Ngorongoro</option>
        </select>
      </div>
    </div>
  );
};

export const SelectionDate = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div>
        <GrLocationPin size={28} className="mr-1" />
      </div>
      <div className="form-control">
        <select className="select select-bordered ring-transparent rounded-full w-full max-w-xs">
          <option disabled selected>
            Tour Date
          </option>
          <option>Serengeti</option>
          <option>Manyara</option>
          <option>Ngorongoro</option>
        </select>
      </div>
    </div>
  );
};

export const SelectionBook = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div>
        <GrLocationPin size={28} className="mr-1" />
      </div>
      <div className="form-control">
        <select className="select select-bordered ring-transparent rounded-full w-full max-w-xs">
          <option disabled selected>
            Booking Type
          </option>
          <option>Serengeti</option>
          <option>Manyara</option>
          <option>Ngorongoro</option>
        </select>
      </div>
    </div>
  );
};

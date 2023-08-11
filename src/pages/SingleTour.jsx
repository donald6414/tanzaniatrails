import React from "react";
// import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { ImageSlider, RelatedFeatured, Title, Title2 } from "../components";
import {
  FaCalendarAlt,
  FaCheck,
  FaHeart,
  FaStar,
  FaUserAlt,
  FaTimes,
} from "react-icons/fa";

const SingleTour = () => {
  return (
    <div className="bg-slate-100 py-10 md:py-24">
      <div className="container mx-auto px-5 md:px-24 space-y-10">
        {/**Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-3 bg-white rounded-lg shadow ">
            <ImageSlider />
          </div>
          {/**Tour Summary */}
          <div className=" bg-white rounded-lg shadow p-5 relative">
            <Title2 title={"Tour Summary"} />
            <div className="flex  flex-wrap justify-start  md:flex-col space-y-5 space-x-2 md:space-x-0">
              <div className="flex items-center space-x-2">
                <FaCalendarAlt size={24} />
                <h5>6 Days / 4 Nights</h5>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar size={24} />
                <h5>4.5 Rating</h5>
              </div>
              <div className="flex items-center space-x-2">
                <FaHeart size={24} />
                <h5>8 Likes</h5>
              </div>
              <div className="flex items-center space-x-2">
                <FaUserAlt size={24} />
                <h5>10 Reviews</h5>
              </div>
            </div>
            <div className="absolute bottom-0 bg-slate-200 flex justify-center items-center w-full left-0 rounded-b-lg p-3">
              <Title2 title={"Tour Code : 456799"} />
            </div>
          </div>
        </div>

        {/**Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2 bg-white rounded-lg shadow p-5 space-y-5">
            <div className="bg-gradient-to-r from-[#e7ecef29] via-[#e1e7ea] to-[#e7ecef29]">
              <div className="grid grid-cols-4 gap-5 py-5">
                <a
                  href="#Overview"
                  className="  btn bg-[#683e12] bg-transparent-50  hover:bg-[#51300d] rounded-full  border-none  "
                >
                  Overview
                </a>
                <a
                  href="#Itenerary"
                  className="  btn bg-[#683e12] bg-transparent-50  hover:bg-[#51300d] rounded-full  border-none  "
                >
                  Itenerary
                </a>

                <a
                  href="#Pricing"
                  className="  btn bg-[#683e12] bg-transparent-50  hover:bg-[#51300d] rounded-full  border-none  "
                >
                  Pricing
                </a>

                <a
                  href="#Reviews"
                  className="  btn bg-[#683e12] bg-transparent-50  hover:bg-[#51300d] rounded-full  border-none  "
                >
                  Reviews
                </a>
              </div>
            </div>

            {/**Overview */}
            <div className="space-y-3">
              <Title title={"Overview"} locate={"start"} />
              <p>
                Start and end in Moshi! With the Hiking & Trekking tour
                Kilimanjaro climbing machame route 7 days, you have a 7 days
                tour package taking you through Moshi, Tanzania and 6 other
                destinations in Tanzania. Kilimanjaro climbing machame route 7
                days includes accommodation, an expert guide, meals, transport
                and more.
              </p>
              <div className="grid grid-cols-2  ">
                <div className="border-2 border-gray-400 p-2 rounded-l-lg">
                  <Title2 title={"Included"} className="pb-3" />
                  <div className="flex flex-col justify-start space-y-2">
                    <div className="flex items-center space-x-2">
                      <FaCheck size={16} />
                      <h5>Transport arrival and depature.</h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCheck size={16} />
                      <h5>Accomodations as booked in inquiry.</h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCheck size={16} />
                      <h5>Meals that is breakfasts, lunched and dinner.</h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCheck size={16} />
                      <h5>
                        All entrance fees and activities mentioned in the
                        itinerary.
                      </h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCheck size={16} />
                      <h5>All park fees and government taxes.</h5>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-gray-400 p-2 rounded-r-lg">
                  <Title2 title={"Excluded"} className="pb-3" />
                  <div className="flex flex-col justify-start space-y-2">
                    <div className="flex items-center space-x-2">
                      <FaTimes size={16} />
                      <h5>Transport arrival and depature.</h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaTimes size={16} />
                      <h5>Accomodations as booked in inquiry.</h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaTimes size={16} />
                      <h5>Meals that is breakfasts, lunched and dinner.</h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaTimes size={16} />
                      <h5>
                        All entrance fees and activities mentioned in the
                        itinerary.
                      </h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaTimes size={16} />
                      <h5>All park fees and government taxes.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/**Itenerary */}
            <div className="">
              <Title title={"Itenerary"} locate={"start"} />
            </div>

            {/**Pricing */}
            <div className="">
              <Title title={"Pricing"} locate={"start"} />
            </div>

            {/**Reviews */}
            <div className="">
              <Title title={"Reviews"} locate={"start"} />
            </div>
          </div>

          <div className=" bg-white rounded-lg shadow p-5">
            <h1>Booking staffs</h1>
          </div>
        </div>

        {/**Related Tours Section */}
        <div className="py-20">
          <RelatedFeatured />
        </div>
      </div>
    </div>
  );
};

export default SingleTour;

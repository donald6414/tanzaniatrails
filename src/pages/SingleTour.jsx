import React from "react";
// import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { ImageSlider, RelatedFeatured, Title2 } from "../components";
import {
  FaCalendar,
  FaCalendarAlt,
  FaCalendarDay,
  FaHeart,
  FaStar,
  FaUserAlt,
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

        {/* <div className="md:mx-40">
          <div className="flex flex-wrap justify-center items-center space-x-3">
            <button className="btn btn-primary rounded-full space-1 mt-1">
              Buy $gGPT
            </button>
            <Link
              to={"/stake"}
              className="btn btn-primary rounded-full space-1 mt-1"
            >
              Stake
            </Link>
            <Link
              to={"/marketplace"}
              className="btn btn-primary rounded-full space-1 mt-1"
            >
              Marketplace
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/greengpt_ai"
              className="btn btn-primary rounded-full space-1 mt-1"
            >
              <FaTelegramPlane className="" size={20} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/gGPT_ai"
              className="btn btn-primary rounded-full space-1 mt-1"
            >
              <FaTwitter className="" size={20} />
            </a>
          </div>
        </div> */}
        {/**Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2 bg-white rounded-lg shadow p-10">
            <h1 className="md:text-7xl text-3xl text-center tracking-wide">
              Comming
              <br />
              <span className="font-bold space-x-2">Soon </span>
            </h1>
          </div>
          <div className=" bg-white rounded-lg shadow p-10">
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

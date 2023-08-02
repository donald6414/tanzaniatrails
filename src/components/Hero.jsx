import React from "react";
import {
  FaInstagram,
  FaTelegram,
  FaTripadvisor,
  FaTwitter,
} from "react-icons/fa";
import "./hero.css";
import { BookingHorizontal } from "../components";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto p-5 md:py-16 ">
        <div className="hero md:py-24 py-10 px-5 rounded-lg bg-grey-600/10 backdrop-brightness-50">
          <div className="hero-content text-center md:text-start flex flex-col md:flex-row">
            <div className="md:mx-36">
              <h1 className="md:text-7xl text-3xl text-white font-bold tracking-wide">
                <span className="btn bg-[#683e12] hover:bg-[#683e12] border-none rounded-full mb-5">
                  <h1 className="text-xs ">Welcome to Tanzaniatrails.</h1>
                </span>
                <br />
                <span className="drop-shadow-lg">
                  Discover Your Next Adventure.
                </span>
              </h1>
              <p className="py-6 text-slate-300">
                We are happy to help you plan your next adventure and create
                unforgettable memories. We offer variety of travel options.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center  gap-2 md:mt-12">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/tanzaniatrails"
                className="btn bg-[#683e12] hover:bg-[#51300d] border-none rounded-full "
              >
                <FaInstagram className="" size={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tripadvisor.com/tanzaniatrails"
                className="btn bg-[#683e12] hover:bg-[#51300d] border-none rounded-full"
              >
                <FaTripadvisor className="" size={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/tanzaniatrails"
                className="btn bg-[#683e12] hover:bg-[#51300d] border-none rounded-full "
              >
                <FaTelegram className="" size={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/tanzaniatrails"
                className="btn bg-[#683e12] hover:bg-[#51300d] border-none rounded-full "
              >
                <FaTwitter className="" size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="-mt-10">
          <BookingHorizontal />
        </div>
      </div>
    </div>
  );
};

export default Hero;

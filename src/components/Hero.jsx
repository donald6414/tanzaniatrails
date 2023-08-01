import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./hero.css";
import { BookingHorizontal } from "../components";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto p-5 md:py-16 ">
        <div className="hero md:py-24 py-10 bg-base-200 px-5 rounded-lg">
          <div className="hero-content text-center md:text-start">
            <div className="md:mx-36">
              <h1 className="md:text-7xl text-3xl text-white font-bold tracking-wide">
                <span className="btn btn-primary rounded-full mb-5">
                  <h1 className="text-xs ">Welcome to Tanzaniatrails.</h1>
                </span>
                <br />
                <span className="drop-shadow-lg">
                  Discover Your Next Adventure.
                </span>
              </h1>
              <p className="py-6 text-slate-300">
                Contract deployed & audited by . By Combining AI and blockchain
                can enhance the security, scalability, and efficiency of
                decentralized systems. AI can help analyze and automate
                blockchain data, unlocking new possibilities for innovation and
                growth.
              </p>
              {/* <div className="flex flex-wrap justify-center items-center space-x-3">
              <button className="btn btn-[#683e12] rounded-full space-1 mt-1">
                Buy $gGPT
              </button>
              <Link
                to={"/greengpt"}
                className="btn btn-[#683e12] rounded-full space-1 mt-1"
              >
                Try GreenGPT
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
                <FaTelegram className="" size={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/gGPT_ai"
                className="btn btn-primary rounded-full space-1 mt-1"
              >
                <FaTwitter className="" size={20} />
              </a>
            </div> */}
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

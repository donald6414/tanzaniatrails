import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero md:py-24 py-10 bg-base-200 px-5">
        <div className="hero-content text-center">
          <div className="md:mx-40">
            <h1 className="md:text-7xl text-3xl tracking-wide">
              <span className="font-bold space-x-2"> AI </span>
              in
              <span className="indicator">
                <span className="indicator-item badge badge-primary">
                  CRYPTO X AI
                </span>
                <span className="font-bold space-x-2">Blockchain.</span>
              </span>
              <br />
              Built by Community for the community.
            </h1>
            <p className="py-6">
              Contract deployed & audited by
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.chaingpt.org"
                className="text-primary font-bold"
              >
                ChainGPT AI
              </a>
              . By Combining AI and blockchain can enhance the security,
              scalability, and efficiency of decentralized systems. AI can help
              analyze and automate blockchain data, unlocking new possibilities
              for innovation and growth.
            </p>
            <div className="flex flex-wrap justify-center items-center space-x-3">
              <button className="btn btn-primary rounded-full space-1 mt-1">
                Buy $gGPT
              </button>
              <Link
                to={"/greengpt"}
                className="btn btn-primary rounded-full space-1 mt-1"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

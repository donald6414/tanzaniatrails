import React from "react";
import { GiVintageRobot } from "react-icons/gi";
import { FiCodesandbox } from "react-icons/fi";
import { GrArticle, GrTask } from "react-icons/gr";
import { Link } from "react-router-dom";

const Ecosystem = () => {
  return (
    <div>
      <div
        id="ecosystem"
        className="text-center bg-[#e1e7ea] md:bg-[#e1e7ea00]"
      >
        <div className="container mx-auto px-5 bg-[#e1e7ea] md:py-24 py-10 rounded-lg">
          <h1 className="md:text-7xl text-3xl tracking-wide font-bold md:text-start ">
            The ecosystem
            <br />
            behind GreenGPT.
          </h1>
          <div className="mt-16  grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="text-center md:text-start">
              <h5 className="font-bold text-3xl">AI Model</h5>
              <p className="mt-5 text-lg">
                GreenGPT is an advanced AI model designed to help with crypto &
                blockchain needs, code contracts, explain concepts, answer
                questions, analyze markets, and more.
              </p>
            </div>

            <div className="rounded p-10 text-center md:text-start bg-white drop-shadow-md">
              <div className="indicator mt-10">
                <span className="indicator-item badge badge-primary">100%</span>
                <button className="rounded-full  bg-[#683e12]">
                  <GiVintageRobot size={32} className="m-5 text-white" />
                </button>
              </div>
              <h5 className="font-bold md:text-3xl mt-3">Auto Generator</h5>
              <p className="text-slate-500 md:mt-5 md:text-lg">
                $gGPT is the utility token behind the GreenGPT ecosystem. It is
                ultimately how community access the AI model, GreenGPT, and
                GreenGPT Marketplace and more on build.
              </p>

              <div className="mt-5 flex items-center">
                <Link
                  to={"/greengpt"}
                  className="btn bg-[#683e12] hover:bg-[#51300d] rounded-r-full  border-none hover:drop-shadow-lg"
                >
                  Search
                </Link>
              </div>
            </div>

            <div className="rounded p-10 text-center md:text-start bg-white drop-shadow-md">
              <div className="indicator mt-10">
                <span className="indicator-item badge badge-primary">
                  UTILITY
                </span>
                <button className="rounded-full bg-[#683e12] ">
                  <GrTask size={32} className="m-5 text-white" />
                </button>
              </div>
              <h5 className="font-bold  md:text-3xl  mt-3">Tailor Made</h5>
              <p className="text-slate-500 md:mt-5 md:text-lg">
                <span className="font-bold">Answer to earn</span> is a mode in
                GreenGTP ecosystem where users earn $gGPT by answering questions
                or performing tasks within a GreenGPT decentralized network.
              </p>
              <div className="mt-5 flex items-center">
                <Link
                  to={"/greengpt"}
                  className="btn bg-[#683e12] hover:bg-[#51300d] rounded-r-full  border-none hover:drop-shadow-lg"
                >
                  Search
                </Link>
              </div>
            </div>

            <div className="rounded p-10 text-center md:text-start bg-white drop-shadow-md">
              <div className="indicator mt-10">
                <span className="indicator-item badge badge-primary">
                  BRANDED
                </span>
                <button className="rounded-full bg-[#683e12]">
                  <GrArticle size={32} className="m-5 text-white" />
                </button>
              </div>
              <h5 className="font-bold md:text-3xl  mt-3">Create Itinerary</h5>
              <p className="text-slate-500 md:mt-5 md:text-lg">
                GreenGPT marketplace is a platform that enables the buying,
                selling, and trading of non-fungible tokens (NFTs), which are
                unique digital assets verified on a blockchain network.
              </p>
              <div className="mt-5 flex items-center">
                <Link
                  to={"/greengpt"}
                  className="btn bg-[#683e12] hover:bg-[#51300d] rounded-r-full  border-none hover:drop-shadow-lg"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;

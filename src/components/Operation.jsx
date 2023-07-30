import React from "react";
import { CgCornerDownLeft, CgCornerDownRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const Operation = () => {
  return (
    <div className="bg-[#e1e7ea] md:py-24 py-10">
      <div className="container mx-auto px-5 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 place-content-center md:gap-20 gap-5">
          <div className="grid col-span-2 text-slate-900">
            <div className="mt-10">
              <h5 className="font-bold md:text-4xl text-2xl text-center md:text-start">
                Unleash the power of Crypto & Blockchain AI.
              </h5>
              <p className="md:text-lg md:mt-10 mt-5 text-justify md:text-start">
                By leveraging the power of AI in blockchain, the
                <span className="font-bold"> GreenGPT </span>can unlock exciting
                new opportunities for users. In the Answer to earn mode, AI can
                help automate the question and answer process, making it easier
                for users to earn rewards. For NFT marketplaces, AI can assist
                in verifying the authenticity of digital assets, improving trust
                and security for buyers and sellers. Furthermore, AI can analyze
                blockchain data to identify trends and patterns, empowering
                developers to create smarter and more efficient decentralized
                applications.
              </p>
              <div className="flex md:justify-start justify-center items-center space-x-3 mt-10">
                <Link
                  to={"/greengpt"}
                  className="btn btn-primary rounded-full space-1 mt-1"
                >
                  Try GreenGPT
                </Link>
                <Link
                  to={"/stake"}
                  className="btn btn-primary rounded-full space-1 mt-1"
                >
                  Stake
                </Link>
                <Link
                  to={"/a2e"}
                  className="btn btn-primary rounded-full space-1 mt-1"
                >
                  A2E
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col text-center justify-center ">
              <h5 className="font-bold md:text-4xl text-2xl text-center md:text-start flex md:hidden mt-10">
                The Mechanics.
              </h5>
              <div className="flex justify-between mt-5 md:mt-0">
                <div></div>
                <div className="">
                  <button className="border-1 border-slate-900 p-5  bg-white rounded-full flex items-center justify-center font-bold">
                    <span className="flex justify-center items-center h-10 w-10 text-center bg-warning rounded-full mr-2">
                      1
                    </span>
                    Obtain $gGPT Tokens
                  </button>
                </div>
              </div>
              <div className="flex  justify-between mt-3 items-center">
                <div className="">
                  <button className="border-1 border-slate-900 p-5  bg-white rounded-full flex items-center justify-center font-bold">
                    <span className="flex justify-center items-center h-10 w-10 text-center bg-warning rounded-full mr-2">
                      2
                    </span>
                    Auto-Stake
                  </button>
                </div>
                <div>
                  <CgCornerDownLeft />
                </div>
              </div>
              <div className="flex flex-row justify-evenly my-3 items-center">
                <div>
                  <CgCornerDownRight />
                </div>
                <div className="">
                  <button className="border-1 border-slate-900 p-5  bg-white rounded-full flex items-center justify-center font-bold">
                    <span className="flex justify-center items-center h-10 w-10 text-center bg-warning rounded-full mr-2">
                      3
                    </span>
                    Unlock all access
                  </button>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <button className="border-1 border-slate-900 p-5  bg-white rounded-full flex items-center justify-center font-bold">
                  <span className="flex justify-center items-center h-10 w-10 text-center bg-warning rounded-full mr-2">
                    a
                  </span>
                  GreenGPT AI
                </button>
                <button className="border-1 border-slate-900 p-5  bg-white rounded-full flex items-center justify-center font-bold">
                  <span className="flex justify-center items-center h-10 w-10 text-center bg-warning rounded-full mr-2">
                    b
                  </span>
                  A2E
                </button>
              </div>
              <div className="flex flex-row justify-evenly items-center my-3">
                <div className="text-center">
                  <p className="font-bold text-center">+</p>
                </div>
                <div className="">
                  <button className="border-1 border-slate-900 p-5  bg-white rounded-full flex items-center justify-center font-bold">
                    <span className="flex justify-center items-center h-10 w-10 text-center bg-warning rounded-full mr-2">
                      c
                    </span>
                    Marketplace
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operation;

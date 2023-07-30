import React from "react";
import { GiVintageRobot } from "react-icons/gi";
import { FiCodesandbox } from "react-icons/fi";
import { GrArticle, GrTask } from "react-icons/gr";

const Ecosystem = () => {
  return (
    <div>
      <div id="ecosystem" className="text-center bg-black md:py-24 py-10">
        <div className="container mx-auto px-5">
          <h1 className="md:text-7xl text-3xl tracking-wide font-bold md:text-start text-slate-100 ">
            The ecosystem
            <br />
            behind GreenGPT.
          </h1>
          <div className="mt-16  grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="border rounded p-10 border-slate-800 text-center md:text-start">
              <h5 className="font-bold text-slate-100 text-3xl">AI Model</h5>
              <p className="text-slate-100 mt-5 text-lg">
                GreenGPT is an advanced AI model designed to help with crypto &
                blockchain needs, code contracts, explain concepts, answer
                questions, analyze markets, and more.
              </p>
              <div className="indicator mt-10">
                <span className="indicator-item badge badge-primary">100%</span>
                <button className="rounded-full bg-warning  ">
                  <GiVintageRobot size={32} className="m-5" />
                </button>
              </div>
            </div>

            <div className="border rounded p-10 border-slate-800 text-center md:text-start">
              <h5 className="font-bold text-slate-100 md:text-3xl">
                $GGPT Token
              </h5>
              <p className="text-slate-100 md:mt-5 md:text-lg">
                $gGPT is the utility token behind the GreenGPT ecosystem. It is
                ultimately how community access the AI model, GreenGPT, and
                GreenGPT Marketplace and more on build.
              </p>
              <div className="indicator mt-10">
                <span className="indicator-item badge badge-primary">SAFU</span>
                <button className="rounded-full bg-info  ">
                  <FiCodesandbox size={32} className="m-5" />
                </button>
              </div>
            </div>

            <div className="border rounded p-10 border-slate-800 text-center md:text-start">
              <h5 className="font-bold text-slate-100 md:text-3xl">A2E</h5>
              <p className="text-slate-100 md:mt-5 md:text-lg">
                <span className="font-bold">Answer to earn</span> is a mode in
                GreenGTP ecosystem where users earn $gGPT by answering questions
                or performing tasks within a GreenGPT decentralized network.
              </p>
              <div className="indicator mt-10">
                <span className="indicator-item badge badge-primary">
                  UTILITY
                </span>
                <button className="rounded-full bg-accent  ">
                  <GrTask size={32} className="m-5" />
                </button>
              </div>
            </div>
            <div className="border rounded p-10 border-slate-800 text-center md:text-start">
              <h5 className="font-bold text-slate-100 md:text-3xl">
                Marketplace
              </h5>
              <p className="text-slate-100 md:mt-5 md:text-lg">
                GreenGPT marketplace is a platform that enables the buying,
                selling, and trading of non-fungible tokens (NFTs), which are
                unique digital assets verified on a blockchain network.
              </p>
              <div className="indicator mt-10">
                <span className="indicator-item badge badge-primary">NFT</span>
                <button className="rounded-full bg-secondary">
                  <GrArticle size={32} className="m-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;

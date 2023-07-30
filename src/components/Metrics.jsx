import React from "react";
import { Link } from "react-router-dom";

const Metrics = () => {
  return (
    <div className="bg-slate-100 md:py-24 py-10">
      <div className="container mx-auto px-5 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 content-center gap-20">
          <div className="grid col-span-2 text-slate-900">
            <div className="">
              <h5 className="font-bold md:text-4xl text-2xl text-center md:text-start">
                Auto-reward Contracting.
              </h5>
              <p className="md:text-lg md:mt-10 mt-5 text-justify md:text-start">
                GreenGPT contract takes 2% of tokens which are automatically
                distributed to holders in $cGPT Token, 2% goes to a CEX listing
                wallet. Additionally, 1% of the tokens are added to liquidty
                pool automatically. This mechanism incentivizes holding tokens
                while also increasing their scarcity, potentially leading to a
                rise in their value over time.
              </p>
              <div className="flex md:justify-start justify-center items-center space-x-3 md:mt-10 mt-5">
                <button className="btn btn-primary rounded-full space-1">
                  Bsc scan
                </button>
                <Link
                  to={"/stake"}
                  className="btn btn-primary rounded-full space-1"
                >
                  Buy SeedNFT
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="stats stats-horizontal lg:stats-vertical shadow">
              <div className="stat hidden md:block">
                <div className="stat-title">$gGPT Holding</div>
                <div className="stat-value animate-pulse bg-slate-300 h-10"></div>
                {/*  <div className="stat-desc">~ $10,000</div>**/}
              </div>

              <div className="stat">
                <div className="stat-title">Total Burned</div>
                <div className="stat-value animate-pulse bg-slate-300 h-10"></div>
              </div>

              <div className="stat">
                <div className="stat-title">Total Rewards</div>
                <div className="stat-value animate-pulse bg-slate-300 h-10"></div>
                {/*    <div className="stat-desc">↘︎ 90 (14%)</div>**/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;

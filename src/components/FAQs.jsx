import React from "react";
import { FaGithubAlt, FaTelegram, FaTwitter } from "react-icons/fa";

const FAQs = () => {
  return (
    <div id="faqs" className="bg-white md:py-24 py-10">
      <div className="container mx-auto px-5 md:px-32">
        <div>
          <h1 className="md:text-7xl tracking-wide font-bold text-center text-slate-900 ">
            Frequent Asked Questions
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:gap-20 gap-5 content-center">
          <div className="col-span-2">
            <div tabIndex={0} className="collapse group mt-3">
              <div className="collapse-title bg-base-200 p-5 font-bold text-lg text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                What is GreenGPT
              </div>
              <div className="collapse-content bg-base-200 text-slate-900 group-focus:bg-base-200 group-focus:text-slate-900">
                <p className="p-5">
                  GreenGPT is a new community owned project inspired by chainGPT
                  with contract address deploy by chainGPT, audited by chainGPT
                  AI module, it combines AI and blockchain to create a
                  decentralized platform for environmental sustainability
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse group mt-3">
              <div className="collapse-title bg-base-200 p-5 font-bold text-lg text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                What is ChainGPT Staking?
              </div>
              <div className="collapse-content bg-base-200 text-slate-900 group-focus:bg-base-200 group-focus:text-slate-900">
                <p className="p-5">
                  Staking offers individuals free and unlimited access to
                  ChainGPT without spending their $gGPT tokens with each
                  request. On the other hand, businesses and developers
                  interested in using the ChainGPT API must stake a spendable
                  amount of $gGPT that will reduce each API request
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse group mt-3">
              <div className="collapse-title bg-base-200 p-5 font-bold text-lg text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                How can I get involved with GreenGPT?
              </div>
              <div className="collapse-content bg-base-200 text-slate-900 group-focus:bg-base-200 group-focus:text-slate-900">
                <p className="p-5">
                  You can get involved with GreenGPT by purchasing their
                  cryptocurrency, participating in their platform, and spreading
                  the word about their mission to promote environmental
                  sustainability through AI & blockchain technology.
                </p>
              </div>
            </div>

            <div tabIndex={0} className="collapse group mt-3">
              <div className="collapse-title bg-base-200 p-5 font-bold text-lg text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                How can I earn cryptocurrency with GreenGPT
              </div>
              <div className="collapse-content bg-base-200 text-slate-900 group-focus:bg-base-200 group-focus:text-slate-900">
                <p className="p-5">
                  A fair launch will be held from there users can earn
                  cryptocurrency by participating in the Answer to earn mode,
                  where they answer questions and perform tasks related to
                  sustainability. Additionally, users can earn rewards for
                  staking their tokens or participating in other activities on
                  the platform.
                </p>
              </div>
            </div>
          </div>
          <div className="md:mt-5">
            <div className="stats stats-horizontal md:stats-vertical shadow">
              <div className="stat">
                <a
                  href="https://github.com/greengpt_ai"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <div className="stat-value">
                    <FaGithubAlt className="" />
                  </div>
                  <div className="stat-desc mt-2">@GreenGTP</div>
                </a>
              </div>

              <div className="stat">
                <a
                  href="https://t.me/greengpt_ai"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <div className="stat-value">
                    <FaTelegram className="" />
                  </div>
                  <div className="stat-desc mt-2">@GreenGTP</div>{" "}
                </a>
              </div>

              <div className="stat">
                <a
                  href="https://twitter.com/gGPT_ai"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <div className="stat-value">
                    <FaTwitter className="" />
                  </div>
                  <div className="stat-desc mt-2">@GreenGTP</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

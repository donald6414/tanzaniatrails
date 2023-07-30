import React from "react";

const Tokenomics = () => {
  return (
    <div className="bg-slate-100 py-10 md:py-24">
      <div className="container mx-auto px-5 md:px-24">
        {/**Tokenomics**/}
        <div className="bg-white rounded-lg shadow p-10">
          <h5 className="font-bold md:text-4xl text-2xl text-center md:text-start">
            Tokenomics
          </h5>
          <p className="md:text-lg mt-5 text-justify md:text-start">
            Contract deployed & audited by ChainGPT AI. By Combining AI and
            blockchain can enhance the security, scalability, and efficiency of
            decentralized systems. AI can help analyze and automate blockchain
            data, unlocking new possibilities for innovation and growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <div className="p-5 shadow-md rounded md:space-x-5">
              <h1 className="text-center font-bold">Token Distribution</h1>
              <p>• 100% Community Owned.</p>
              <p>• 20% : FlashSale (Bitmart).</p>
              <p>• 50% : PreSale (PinkSale| Official Site).</p>
              <p>• 5% : Airdrop (Official Site ).</p>
              <p>• 10% : Development & Incentive .</p>
              <p>• 15% : Staking and Game Rewards.</p>
            </div>
            <div className="p-5 shadow-md rounded md:space-x-5">
              <h1 className="text-center font-bold">Fund Distribution</h1>
              <p>• 2% - Development & Marketing.</p>
              <p>• 1% Autoliquidity.</p>
            </div>
          </div>
          {/**Token Details*/}
          <h5 className="font-bold md:text-4xl text-2xl text-center md:text-star mt-10">
            Token Details
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            <div className="p-5 shadow-md rounded md:space-x-5">
              <h1 className="text-center font-bold"> Details</h1>
              <p>
                <span className="font-bold ">Name: </span>GreenGPT
              </p>
              <p>
                <span className="font-bold ">Symbol: </span>$gGPT
              </p>
              <p>
                <span className="font-bold ">Supply: </span>100T
              </p>
            </div>
            <div className="p-5 shadow-md rounded md:space-x-5">
              <h1 className="text-center font-bold"> Features</h1>
              <p>
                <span className="font-bold ">1%: </span>Auto-Liquidity
              </p>
              <p>
                <span className="font-bold ">2%: </span>$cGPT Reward
              </p>
              <p>
                <span className="font-bold ">2%: </span>Development & Marketing
              </p>
            </div>

            <div className="p-5 shadow-md rounded md:space-x-5">
              <h1 className="text-center font-bold"> Networks</h1>
              <p>
                <span className="font-bold ">BSC: </span>Fair Launch
              </p>
              <p>
                <span className="font-bold ">ARB: </span>Soon
              </p>
              <p>
                <span className="font-bold ">ETH: </span>Soon
              </p>
            </div>
          </div>
        </div>

        {/**Roadmap**/}
        <div className="bg-white rounded-lg shadow p-10 mt-10">
          <h5 className="font-bold md:text-4xl text-2xl text-center md:text-start">
            Roadmap
          </h5>
          <div className="mt-10">
            <ul className="steps  steps-vertical lg:steps-horizontal">
              <li className="step step-primary mt-2">
                <div className="">
                  <h1 className="font-bold">Initiation</h1>
                  <p className=" shadow rounded-lg m-1 p-2 text-sm bg-slate-500/20">
                    Website Launching, social media setup & contracts
                    deployment.
                  </p>
                </div>
              </li>
              <li className="step step-primary mt-2">
                <div className="">
                  <h1 className="font-bold">Marketing Push</h1>
                  <p className=" shadow m-1 p-2 text-sm  rounded-lg bg-slate-500/20">
                    increase awareness, attract investors, and foster community
                    engagement for long-term growth. AMAs, Promotions and
                    recruiting influencers.
                  </p>
                </div>
              </li>

              <li className="step step-primary  mt-2">
                <div className="">
                  <h1 className="font-bold">Partnership</h1>
                  <p className=" shadow m-1 p-2 text-sm  rounded-lg bg-slate-500/20">
                    Enhancing credibility, increase adoption, and facilitate the
                    development of innovative solutions. Intergrations and Dex
                    Listing.
                  </p>
                </div>
              </li>

              <li className="step mt-2 step-primary ">
                <div className="">
                  <h1 className="font-bold">AI & Blockchain Integration</h1>
                  <p className=" shadow m-1 p-2 text-sm rounded-lg bg-slate-500/20">
                    Enhance security, efficiency, and scalability of the system
                    by AI and Blockchain.
                  </p>
                </div>
              </li>

              <li className="step  mt-2">
                <div className="">
                  <h1 className="font-bold">FlashSale Bitmart</h1>
                  <p className=" shadow m-1 p-2 text-sm rounded-lg bg-slate-500/20">
                    Decentralized and community-driven token launches, ensuring
                    a fair distribution and avoiding unfair advantages.
                  </p>
                </div>
              </li>

              <li className="step  mt-2">
                <div className="">
                  <h1 className="font-bold">CEX Listing</h1>
                  <p className=" shadow m-1 p-2 text-sm rounded-lg">
                    Provide liquidity, increase visibility, and attract new
                    investors for potential growth opportunities.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <ul className="steps steps-vertical lg:steps-horizontal">
              <li data-content="7" className="step mt-2">
                <div className="">
                  <h1 className="font-bold">More Marketing</h1>
                  <p className=" shadow rounded-lg m-1 p-2 text-sm ">
                    Driving adoption, increase liquidity, and enhance the value
                    proposition of the underlying assets.
                  </p>
                </div>
              </li>
              <li data-content="8" className="step  mt-2">
                <div className="">
                  <h1 className="font-bold"> NFT Release</h1>
                  <p className=" shadow m-1 p-2 text-sm  rounded-lg ">
                    Minting release for GreenGPT Seeds for incentivize user
                    engagement, and facilitate the sale of digital assets.
                  </p>
                </div>
              </li>

              <li data-content="9" className="step   mt-2">
                <div className="">
                  <h1 className="font-bold">NFT Marketplace</h1>
                  <p className=" shadow m-1 p-2 text-sm  rounded-lg ">
                    Website Launching, social media setup & contracts
                    deployment.
                  </p>
                </div>
              </li>

              <li data-content="10" className="step mt-2">
                <div className="">
                  <h1 className="font-bold">Game Development Research</h1>
                  <p className=" shadow m-1 p-2 text-sm rounded-lg">
                    A platform to buy,sell ,auction and lending unique digital
                    assets, offering new opportunities for creators and
                    collectors in cryptocurrency projects.
                  </p>
                </div>
              </li>

              <li className="step  mt-2">
                <div className="">
                  <h1 className="font-bold">Staking</h1>
                  <p className=" shadow m-1 p-2 text-sm rounded-lg">
                    This involves holding and securing coins for network
                    validation and rewards, incentivizing participation and
                    network security.
                  </p>
                </div>
              </li>

              <li className="step  mt-2">
                <div className="">
                  <h1 className="font-bold"> GreenGPT Bridging</h1>
                  <p className=" shadow m-1 p-2 text-sm rounded-lg">
                    This enables interoperability, enhances liquidity, and
                    expands access to decentralized finance (DeFi) applications.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

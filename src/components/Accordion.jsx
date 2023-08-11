import React from "react";

export const Accordion = () => {
  return (
    <>
      <div tabIndex={0} className="collapse group mt-3">
        <div className="collapse-title bg-base-200 p-5 font-bold text-lg text-primary-content group-focus:bg-[#683e12] group-focus:text-secondary-content">
          Day1: Arrval at KIA.
        </div>
        <div className="collapse-content bg-base-200 text-slate-900 group-focus:bg-base-200 group-focus:text-slate-900">
          <div className="space-y-5">
            <p className="">
              GreenGPT is a new community owned project inspired by chainGPT
              with contract address deploy by chainGPT, audited by chainGPT AI
              module, it combines AI and blockchain to create a decentralized
              platform for environmental sustainability
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

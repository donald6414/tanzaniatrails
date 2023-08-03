import React from "react";
import { Title } from "./Title";

export const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center ">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 bg-white md:mx-40 p-5 md:rounded-full rounded-lg drop-shadow-lg md:px-10">
        <div className="flex items-center justify-center">
          <Title title={"Dont Miss Anything"} className={"drop-shadow-lg"} />
        </div>
        <div className="bg-[#51300d] flex items-center justify-between rounded-full space-x-5 p-1 ">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full rounded-full max-w-xs drop-shadow"
          />
          <button
            type="submit"
            className="btn bg-[#683e12] hover:bg-[#51300d] rounded-full px-5  border-none hover:drop-shadow"
          >
            Join
          </button>
        </div>
      </form>
    </div>
  );
};

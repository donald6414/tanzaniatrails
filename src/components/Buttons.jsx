/* eslint-disable no-script-url */
import React from "react";
import "./buttons.css";
import { FiChevronDown } from "react-icons/fi";

export const Button = ({ title, color, onClick }) => {
  //bg-gradient-to-r from-[#1dc071] to-[#50a7c2]
  return (
    <button
      className={`${color} p-2 px-3 rounded-full font-bold text-slate-200 border-2 border-[#683e12] uppercase`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export const ButtonHover = ({ title, hColor, onClick }) => {
  return (
    <button
      className={`p-2 px-4 rounded-full font-bold border-2 text-slate-200 border-[#1dc071] hover:bg-gradient-to-r from-[#1dc071] to-[#50a7c2] uppercase`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import "./buttons.css";

const NavBar = () => {
  return (
    <div className="bg-primary text-slate-900 py-2">
      <div className="navbar  container mx-auto">
        <>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <HiOutlineMenuAlt1 size={24} />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 text-slate-900 rounded-box  w-52"
              >
                <li>
                  <Link to={"/tokenomics"}>Tokenomics</Link>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Solutions
                    <FiChevronDown className="font-bold" />
                  </a>
                  <ul className="p-2 bg-base-300 text-slate-700">
                    <li>
                      <Link to={"/greengpt"}>GreenGPT Beta</Link>
                    </li>
                    <li>
                      <Link to={"/a2e"}>Ask to Earn</Link>
                    </li>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Marketplace
                    <FiChevronDown className="font-bold" />
                  </a>
                  <ul className="p-2 bg-base-300 text-slate-700 shadow-md">
                    <li>
                      <Link to={"/marketplace"}>Buy</Link>
                    </li>
                    <li>
                      <Link to={"/marketplace"}>Sell</Link>
                    </li>
                    <li>
                      <Link to={"/marketplace"}>Auction</Link>
                    </li>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Stake
                    <FiChevronDown className="font-bold" />
                  </a>
                  <ul className="p-2 bg-base-300 text-slate-700 shadow-md">
                    <li>
                      <Link to={"/stake"}>Stake $gGPT</Link>
                    </li>
                    <li>
                      <Link to={"/stake"}>Stake NFT</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
                <li>
                  <Web3Button className="bg-green-500" />
                </li>
              </ul>
            </div>
            <Link
              to={"/"}
              className="md:flex justify-center items-center hidden"
            >
              <img src={Logo} alt="logo" className="w-10 h-10" />
              <h1 className="normal-case text-2xl font-bold tracking-wide text-slate-900">
                Tanzaniatrails
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to={"/tokenomics"}>Tokenomics</Link>
              </li>
              <li tabIndex={0}>
                <a>
                  Solutions
                  <FiChevronDown className="font-bold" />
                </a>
                <ul className="p-2 bg-base-300 text-slate-700">
                  <li>
                    <Link to={"/greengpt"}>GreenGPT Beta</Link>
                  </li>
                  <li>
                    <Link to={"/a2e"}>Ask to Earn</Link>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a>
                  Marketplace
                  <FiChevronDown className="font-bold" />
                </a>
                <ul className="p-2 bg-base-300 text-slate-700 shadow-md">
                  <li>
                    <Link to={"/marketplace"}>Buy</Link>
                  </li>
                  <li>
                    <Link to={"/marketplace"}>Sell</Link>
                  </li>
                  <li>
                    <Link to={"/marketplace"}>Auction</Link>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a>
                  Stake
                  <FiChevronDown className="font-bold" />
                </a>
                <ul className="p-2 bg-base-300 text-slate-700 shadow-md">
                  <li>
                    <Link to={"/stake"}>Stake $gGPT</Link>
                  </li>
                  <li>
                    <Link to={"/stake"}>Stake NFT</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end ">
            <span className="hidden md:flex rounded-full">
              <ConnectWallet
                className="@apply !btn !bg-[#051604] !rounded-full"
                auth={{
                  loginOptional: false,
                }}
              />
            </span>

            <Link
              to={"/"}
              className="flex justify-center items-center md:hidden "
            >
              <img src={Logo} alt="logo" className="w-10 h-10" />
              <h1 className="normal-case text-2xl font-bold tracking-wide pr-3 text-slate-900">
                Tanzaniatrails
              </h1>
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default NavBar;

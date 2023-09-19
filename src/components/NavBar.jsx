import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import "./buttons.css";

const NavBar = () => {
  return (
    <div className="bg-white text-slate-900 py-2">
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
                  <Link to={"/"}>Home</Link>
                </li>
                {/* <li tabIndex={0}>
                  <a className="justify-between">
                    Solutions
                    <FiChevronDown className="font-bold" />
                  </a>
                  <ul className="p-2 bg-base-300 text-slate-700">
                    <li>
                      <Link to={"/greengpt"}>Tailor Made</Link>
                    </li>
                    <li>
                      <Link to={"/a2e"}>Customize Safari</Link>
                    </li>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Tours
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
                    Destination
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
                </li> */}
                <li>
                  <Link to={"/homestay"}>Home Stay</Link>
                </li>
                {/* <li>
                  <a href="/allpackages">All Tour</a>
                </li> */}
                <li>
                  <a href="/tour">Our Tour</a>
                </li>
                <li>
                  <Link to={"/volunteer"}>Volunteer</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>

                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <Link
              to={"/"}
              className="md:flex justify-center items-center hidden"
            >
              <img src={Logo} alt="logo" className="w-50 h-10" />
              {/* <h1 className="normal-case text-2xl font-bold tracking-wide text-[#683e12] ml-2">
                Travel With Us
              </h1> */}
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              {/* <li tabIndex={0}>
                <a>
                  Solutions
                  <FiChevronDown className="font-bold" />
                </a>
                <ul className="p-2 bg-base-300 text-slate-700">
                  <li>
                    <Link to={"/greengpt"}>Tailor Made</Link>
                  </li>
                  <li>
                    <Link to={"/a2e"}>Customize Safari</Link>
                  </li>
                </ul>
              </li> */}
              {/* <li tabIndex={0}>
                <a href="/tour">Tours</a> */}

              {/* <FiChevronDown className="font-bold" /> */}
              {/* <ul className="p-2 bg-base-300 text-slate-700 shadow-md">
                  <li>
                    <Link to={"/marketplace"}>Buy</Link>
                  </li>
                  <li>
                    <Link to={"/marketplace"}>Sell</Link>
                  </li>
                  <li>
                    <Link to={"/marketplace"}>Auction</Link>
                  </li>
                </ul> */}
              {/* </li> */}
              {/* <li>
                {" "}
                <a href="/allpackages">Packages</a>
              </li> */}

              {/* <li tabIndex={0}>
                <a>
                  Tours
                  <FiChevronDown className="font-bold" />
                </a>
                <ul className="p-2 bg-base-300 text-slate-700 shadow-md">
                  <li>
                    <a href="/allpackages">All Tour</a>
                  </li>
                  <li>
                    <a href="/tour">Filter Tour</a>
                  </li>
                </ul>
              </li> */}

              <li>
                <a href="/tour">Our Tour</a>
              </li>

              <li>
                <Link to={"/volunteer"}>Volunteer</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end ">
            <span className="hidden md:flex rounded-full">
              <Link
                to={"/homestay"}
                className="btn bg-[#683e12] hover:bg-[#51300d] rounded-full space-1 mt-1 border-none"
              >
                Home Stay
              </Link>
            </span>

            <Link
              to={"/"}
              className="flex justify-center items-center md:hidden "
            >
              <img src={Logo} alt="logo" className="w-50 h-10" />
              {/* <h1 className="normal-case text-2xl font-bold tracking-wide pr-3 text-[#683e12] ml-2">
                Travel With Us
              </h1> */}
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default NavBar;

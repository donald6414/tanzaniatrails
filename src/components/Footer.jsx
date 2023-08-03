/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaGithubAlt, FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { NewsLetter } from "./NewsLetter";

const Footer = () => {
  return (
    <div className="">
      <div className="container mx-auto -mb-20">
        <NewsLetter />
      </div>
      <div className="bg-[#2a1907] mt-10 pt-8">
        <footer className=" footer p-10  text-slate-100 container mx-auto">
          <>
            {/**Logo */}
            <div>
              <img src={Logo} alt="logo" className="w-24 h-24" />
              <p>
                <span className="text-2xl mb-3 font-bold">
                  TanzaniaTrails Co. Ltd.
                </span>
                <br />
                Discover Your Next Adventure.
              </p>
            </div>

            {/**Company */}
            <div className="">
              <span className="footer-title">Company</span>
              <a href="#hero" className="text-slate-100 hover:text-primary">
                About us
              </a>
              <a href="#faqs" className="text-slate-100 hover:text-primary">
                Contact
              </a>
              <Link
                to={"/jobs"}
                href="#"
                className="text-slate-100 hover:text-primary"
              >
                Jobs
              </Link>
              <Link
                to={"/press-kit"}
                href="#"
                className="text-slate-100 hover:text-primary"
              >
                Press kit
              </Link>
            </div>
            {/**Tours */}
            <div className="flex flex-col">
              <span className="footer-title">Tours</span>
              <a href="#hero" className="text-slate-100 hover:text-primary">
                About us
              </a>
              <a href="#faqs" className="text-slate-100 hover:text-primary">
                Contact
              </a>
              <Link
                to={"/jobs"}
                href="#"
                className="text-slate-100 hover:text-primary"
              >
                Jobs
              </Link>
              <Link
                to={"/press-kit"}
                href="#"
                className="text-slate-100 hover:text-primary"
              >
                Press kit
              </Link>
            </div>

            {/**Services */}
            <div className="">
              <span className="footer-title">Services</span>
              <Link
                to={"/greengpt"}
                href="#"
                className="text-slate-100 hover:text-primary"
              >
                GreenGPT AI
              </Link>
              <Link
                to={"/a2e"}
                href="#"
                className="text-slate-100 hover:text-primary"
              >
                A2E
              </Link>
              <Link
                to={"/stake"}
                href="#"
                className="text-slate-100 hover:text-primary"
              >
                Staking
              </Link>
              <Link
                to={"/marketplace"}
                href="#"
                className="text-slate-100 hover:text-primary"
              >
                Marketplace
              </Link>
            </div>
            {/**Legal */}
            <div>
              <span className="footer-title">Legal</span>
              <Link
                to={"./terms"}
                href="#"
                className="text-slate-100 hover:text-primary"
              >
                Terms of use
              </Link>
              <Link
                to={"./privacy-policy"}
                href="#"
                className="text-slate-100 hover:text-primary"
              >
                Privacy policy
              </Link>
              <a href="#" className="text-slate-100 hover:text-primary">
                Cookie policy
              </a>
            </div>
          </>
        </footer>
        <footer className="footer items-center px-4 p-4 bg-[#51300d] text-neutral-content container mx-auto rounded-t-lg ">
          <>
            <div className="items-center grid-flow-col ">
              <p>Copyright © 2023 -Tanzania Trails. All right reserved.</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <Link>
                <FaGithubAlt className="text-slate-100 hover:text-primary" />
              </Link>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/gGPT_ai"
              >
                <FaTwitter className=" text-slate-100 hover:text-primary" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/greengpt_ai"
              >
                <FaTelegram className=" text-slate-100 hover:text-primary" />
              </a>
            </div>
          </>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

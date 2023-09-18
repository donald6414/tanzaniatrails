import React, { useState } from "react";
import "./homestay.css";
import Hero from "../assets/hero.jpg";
import Slider from "../components/SliderProduct";

export default function Homestay() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="service" id="myDiv">
        <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
          <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
            <div className="flex flex-col items-center sm:px-5 md:flex-row">
              <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                  <div className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2 uppercase inline-block">
                    <p className="inline">
                      <svg
                        className="w-3.5 h-3.5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </p>
                    <p className="inline text-xs font-medium">New</p>
                  </div>
                  <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl Neno">
                    Welcome Home
                  </a>
                  <div className="pt-2 pr-0 pb-0 pl-0">
                    <p class="max-w-xl mb-4 text-base text-gray-400 md:text-lg text-justify">
                      Discover the warmth of home away from home with Travel
                      with us. Our carefully curated selection of cozy,
                      comfortable, and unique accommodations offers you the
                      chance to experience local culture and hospitality in a
                      way that hotels simply can't match. Whether you're seeking
                      a tranquil retreat, an immersive cultural experience, or a
                      convenient stopover, our home stays have you covered.
                      Explore our listings, find your perfect home away from
                      home, and embark on unforgettable journeys with us.
                    </p>
                    <span>Your Comfort, Our Priority.</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="block">
                  <img
                    src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
                    alt="Article Image"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
              {/* Replace the content below with your article cards */}
              {/* Article Card 1 */}
              <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <img
                  src="https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
                  alt="Article Image"
                />
                <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inline-block">
                  Entertainment
                </p>
                <a className="text-lg font-bold sm:text-xl md:text-2xl Neno">
                  Improving your day to the MAX
                </a>
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                    Jack Sparrow
                  </a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                    · 23rd, March 2021 ·
                  </p>
                  <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                    1hr 20min. read
                  </p>
                </div>
              </div>
              {/* Article Card 2 */}
              <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <img
                  src="https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="object-cover mb-2 w-full overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
                  alt="Article Image"
                />
                <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inline-block">
                  Entertainment
                </p>
                <a className="text-lg font-bold sm:text-xl md:text-2xl Neno">
                  Improving your day to the MAX
                </a>
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                    Jack Sparrow
                  </a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                    · 23rd, March 2021 ·
                  </p>
                  <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                    1hr 20min. read
                  </p>
                </div>
              </div>
              {/* Article Card 3 */}
              <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <img
                  src="https://images.unsplash.com/photo-1626197031507-c17099753214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3Jel-LWZlZWR8MzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="object-cover mb-2 w-full overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
                  alt="Article Image"
                />
                <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inline-block">
                  Entertainment
                </p>
                <a className="text-lg font-bold sm:text-xl md:text-2xl Neno">
                  Improving your day to the MAX
                </a>
                <p className="text-sm text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                    Jack Sparrow
                  </a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                    · 23rd, March 2021 ·
                  </p>
                  <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                    1hr 20min. read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <Slider />
      </div>

      <div class="relative">
        <img
          src={Hero}
          class="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div class="relative bg-gray-900 bg-opacity-75">
          <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="flex flex-col items-center justify-between xl:flex-row">
              <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Welcome Home
                  {/* <span class="text-teal-accent-400">lazy dog</span> */}
                </h2>
                <p class="max-w-xl mb-4 text-base text-gray-400 md:text-lg text-justify">
                  Discover the warmth of home away from home with Travel with
                  us. Our carefully curated selection of cozy, comfortable, and
                  unique accommodations offers you the chance to experience
                  local culture and hospitality in a way that hotels simply
                  can't match. Whether you're seeking a tranquil retreat, an
                  immersive cultural experience, or a convenient stopover, our
                  home stays have you covered. Explore our listings, find your
                  perfect home away from home, and embark on unforgettable
                  journeys with us.
                </p>
                <span>Your Comfort, Our Priority.</span>
                <a
                  href="#myDiv"
                  aria-label=""
                  class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  View Home
                  <svg
                    class="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>
              <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Register For Home Stay
                  </h3>
                  <form>
                    <div class="mb-1 sm:mb-2">
                      <label
                        for="firstName"
                        class="inline-block mb-1 font-medium"
                      >
                        First name
                      </label>
                      <input
                        placeholder="John"
                        required=""
                        type="text"
                        class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div class="mb-1 sm:mb-2">
                      <label
                        for="lastName"
                        class="inline-block mb-1 font-medium"
                      >
                        Last name
                      </label>
                      <input
                        placeholder="Doe"
                        required=""
                        type="text"
                        class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                    <div class="mb-1 sm:mb-2">
                      <label for="email" class="inline-block mb-1 font-medium">
                        E-mail
                      </label>
                      <input
                        placeholder="john.doe@example.org"
                        required=""
                        type="text"
                        class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div class="mb-1 sm:mb-2">
                      <label for="email" class="inline-block mb-1 font-medium">
                        Phone Number
                      </label>
                      <input
                        placeholder="+255 xxx xxx xxx"
                        required=""
                        type="tel"
                        class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        maxLength="300"
                        name="feedback"
                        id="feedback"
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                        placeholder=""
                        required
                      ></textarea>
                    </div>
                    <div class="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        class="Back inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p class="text-xs text-gray-600 sm:text-sm">
                      We respect your privacy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

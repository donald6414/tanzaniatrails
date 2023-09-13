import React, { useState } from "react";
import "./homestay.css";
import Hero from "../assets/hero.jpg";
import Slider from "../components/SliderProduct";

export default function Volunteer() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="volunteer backgroundImage shadow-lg"
    >
      <div className="Rangi">
        <div className="text-white py-12">
          <div className="container mx-auto text-center">
            <p className="text-3xl md:text-4xl font-semibold mb-4">
              Join Our Volunteer
            </p>
            <p className="text-lg md:text-xl mb-8">
              Make a difference while exploring the world!
            </p>
          </div>
        </div>

        <section>
          <div className=" text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
              <div className="flex flex-col w-full lg:w-1/3 p-8">
                <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
                  Join Our Volunteer Program and Make a Difference
                </p>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-justify">
                  Join Our Volunteer Program and Make a Difference At Travel
                  with us, we believe in the power of travel to transform not
                  only the lives of our guests but also the communities we
                  visit. We are excited to introduce our Volunteer Program, an
                  opportunity for passionate individuals to immerse themselves
                  in unique cultural experiences while giving back to the
                  destinations they explore.
                </p>
              </div>
              <div className="flex flex-col w-full lg:w-2/3 justify-center">
                <div className="container w-full px-4">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                        <div className="flex-auto p-5 lg:p-10">
                          <h4 className="text-2xl mb-4 text-black font-semibold">
                            Join now
                          </h4>
                          <form>
                            <div class="mb-1 sm:mb-2">
                              <label
                                for="firstName"
                                class="inline-block mb-1 font-medium text-black"
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
                                class="inline-block mb-1 font-medium text-black"
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
                              <label
                                for="email"
                                class="inline-block mb-1 font-medium text-black"
                              >
                                E-mail
                              </label>
                              <input
                                placeholder="john.doe@example.org"
                                required=""
                                type="text"
                                class="flex-grow w-full h-12 px-4 mb-2  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                              />
                            </div>
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-black text-xs font-bold mb-2"
                                htmlFor="message"
                              >
                                Why would like to Volunteer ?
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
          </div>

          {/* Volunteer Program Note */}
        </section>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./homestay.css";
import Hero from "../assets/hero.jpg";
import Slider from "../components/SliderProduct";

export default function Volunteer() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="volunteer backgroundImage">
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
                          <form id="feedbackForm" action="" method="">

                          <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                              >
                                Full name
                              </label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                                placeholder=" "
                                required
                              />
                            </div>
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                                placeholder=" "
                                required
                              />
                            </div>
                            {/* <div className="relative w-full mb-3">
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
                            </div> */}
                            <div className="text-center mt-6">
                              <button
                                id="feedbackBtn"
                                className="bg-yellow-300 Back text-white text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="submit"
                                style={{ transition: "all 0.15s ease 0s" }}
                              >
                                Submit
                              </button>
                            </div>
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

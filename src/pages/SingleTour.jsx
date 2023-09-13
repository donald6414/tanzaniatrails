import React from "react";
// import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  Accordion,
  BookingForm,
  ImageSlider,
  RelatedFeatured,
  ReviewCard,
  ReviewForm,
  Title,
  Title2,
} from "../components";
import {
  FaCalendarAlt,
  FaCheck,
  FaHeart,
  FaStar,
  FaUserAlt,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import DownArrow from "../assets/down-arrow.png";

const SingleTour = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://api.tanzaniatrails.co.tz/api/package/${id}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  if (data.id === undefined) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "80vh", margin: "20px", borderRadius: "10px" }}
      >
        <ClipLoader
          color={"#683e12"}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  console.log(data.title);
  const sampleReview = [
    {
      user: "John Doe",
      rating: 4.5,
      comment: "A fantastic experience! Will definitely recommend.",
      date: "August 11, 2023",
    },
    {
      user: "Ariela Doe",
      rating: 5,
      comment: "A fantastic experience! Will definitely recommend.",
      date: "July 11, 2023",
    },
  ];

  return (
    <div className="bg-slate-100 py-10 md:py-24">
      <div className="container mx-auto px-5 md:px-24 space-y-10">
        {/**Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-3 bg-white rounded-lg shadow ">
            <ImageSlider item={data} />
          </div>
          {/**Tour Summary */}
          <div className=" bg-white rounded-lg shadow p-5 relative">
            <Title2 title={"Tour Summary"} />
            <div className="flex  flex-wrap justify-start  md:flex-col space-y-5 space-x-2 md:space-x-0">
              <div className="flex items-center space-x-2">
                <FaCalendarAlt size={24} />
                <h5>
                  {data.no_of_days} Days / {data.no_of_days - 1} Nights
                </h5>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar size={24} />
                <h5>4.5 Rating</h5>
              </div>
              <div className="flex items-center space-x-2">
                <FaHeart size={24} />
                <h5>8 Likes</h5>
              </div>
              <div className="flex items-center space-x-2">
                <FaUserAlt size={24} />items.lenght
                <h5>10 Reviews</h5>
              </div>
            </div>
            <div className="absolute bottom-0 bg-slate-200 flex justify-center items-center w-full left-0 rounded-b-lg p-3">
              <Title2 title={"Tour Code : 456799"} />
            </div>
          </div>
        </div>

        {/**Details Section */}
        <div
          id="summaryComponent"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 "
        >
          {/**Details Overview section */}
          <div className="col-span-2 bg-white rounded-lg shadow p-5 space-y-10">
            <div className="bg-gradient-to-r from-[#e7ecef29] via-[#e1e7ea] to-[#e7ecef29] sticky top-0 z-50">
              <div className="grid grid-cols-4 gap-5 py-5">
                <a
                  href="#Overview"
                  className="  btn bg-[#683e12] bg-transparent-50  hover:bg-[#51300d] rounded-full  border-none  "
                >
                  Overview
                </a>
                <a
                  href="#Itenerary"
                  className="  btn bg-[#683e12] bg-transparent-50  hover:bg-[#51300d] rounded-full  border-none  "
                >
                  Itenerary
                </a>

                <a
                  href="#Pricing"
                  className="  btn bg-[#683e12] bg-transparent-50  hover:bg-[#51300d] rounded-full  border-none  "
                >
                  Pricing
                </a>

                <a
                  href="#Reviews"
                  className="  btn bg-[#683e12] bg-transparent-50  hover:bg-[#51300d] rounded-full  border-none  "
                >
                  Reviews
                </a>
              </div>
            </div>

            {/**Overview */}
            <div id="Overview" className="space-y-3">
              <Title title={"Overview"} locate={"start"} />
              <p className="text-justify">{data.description}</p>
              <div className="grid grid-cols-2  ">
                <div className="border-2 border-gray-400 p-2 rounded-l-lg">
                  <Title2 title={"Included"} className="pb-3" />
                  <div className="flex flex-col justify-start space-y-2">
                    {data.package_inclusions.map((each) => {
                      return (
                        <div className="flex items-center space-x-2 content-center justify-self-center">
                          <FaCheck size={16} />
                          <h5>{each.tour_notes.title}</h5>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* <div className="border-2 border-gray-400 p-2 rounded-r-lg">
                  <Title2 title={"Excluded"} className="pb-3" />
                  <div className="flex flex-col justify-start space-y-2">
                    <div className="flex items-center space-x-2">
                      <FaTimes size={16} />
                      <h5>Transport arrival and depature.</h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaTimes size={16} />
                      <h5>Accomodations as booked in inquiry.</h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaTimes size={16} />
                      <h5>Meals that is breakfasts, lunched and dinner.</h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaTimes size={16} />
                      <h5>
                        All entrance fees and activities mentioned in the
                        itinerary.
                      </h5>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaTimes size={16} />
                      <h5>All park fees and government taxes.</h5>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/**Itenerary */}
            <div id="Itenerary" className="space-y-3">
              <Title title={"Itenerary"} locate={"start"} />

              {data.package_days.map((each) => {
                return (
                  <div>
                    {/* <Accordion /> */}
                    <div tabIndex={0} className="collapse group mt-3">
                      <div className="collapse-title bg-base-200 p-5 font-bold text-lg text-primary-content group-focus:bg-[#683e12] group-focus:text-secondary-content flex flex-row justify-between ">
                        Day {each.day_no}: {each.title}{" "}
                        <div>
                          <img
                            src={DownArrow}
                            alt="Arro down"
                            className="h-18 w-18 object-cover content-center rounded-lg"
                          />
                        </div>
                      </div>

                      <div className="collapse-content bg-base-200 text-slate-900 group-focus:bg-base-200 group-focus:text-slate-900">
                        <p className="p-5 text-justify">
                          {each.day_description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/**Pricing */}
            {/* <div className="space-y-3">
              <Title title={"Pricing"} locate={"start"} />
              <div className="">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Season
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Months
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">High</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          January, February, July, August, September
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          $ 3049.99
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Low</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          March, April, May, October, November
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          $ 3049.99
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}

            {/**Reviews */}
            <div id="Reviews" className="">
              <Title title={"Reviews"} locate={"start"} />
              <div className="">
                {/* <ReviewForm /> */}
                {sampleReview.map((review, index) => {
                  return <ReviewCard key={index} review={review} />;
                })}
              </div>
            </div>
          </div>

          {/**Form  Section */}
          <div className="space-y-10">
            <div className="">
              <div className="p-2 bg-white shadow-md text-center rounded-lg space-y-4">
                <h5>Starting From</h5>
                <h1 className=" font-bold text-4xl ">$ {data.price}</h1>
              </div>
              <BookingForm price={3000} />
            </div>
            <div className="">
              <button
                type="submit"
                className="btn bg-[#683e12] hover:bg-[#683e12] text-white py-2 rounded-full w-full animate-pulse"
              >
                Get Itenerary
              </button>
            </div>

            <div className="flex flex-col items-center justify-center  bg-[#683e12] hover:bg-[#51300d] rounded-lg drop-shadow py-10">
              <Title2 title={"Don't Miss A Chance"} color={"white"} />
              <div className="mt-10 flex flex-col space-y-5">
                <Link
                  to={"/tailor-made"}
                  className="btn bg-white text-[#683e12] hover:bg-slate-200 rounded-full  border-none"
                >
                  Customize Your Safari
                </Link>
                <Link
                  to={"/generate-itinerary"}
                  className="btn  bg-white text-[#683e12] hover:bg-slate-200 rounded-full  border-none"
                >
                  Generate Itinerary
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/**Related Tours Section */}
        <div className="py-20">
          <RelatedFeatured />
        </div>
      </div>
    </div>
  );
};

export default SingleTour;

import React from "react";
import { Paragraph, Title, Title2 } from "./Title";
import { PackageCard, TourCard } from "./PackageCard";
import { Link } from "react-router-dom";
import { FaBackward, FaForward } from "react-icons/fa";
import { PackageSlider } from "./PackageSlider";
import { useRef, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export const Featured = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://api.tanzaniatrails.co.tz/api/get_popular_packages";

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
  }, []);

  if (data === null) {
    return (
      <div className="flex justify-center items-center">
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
  return (
    <div className="bg-slate-100 md:pb-24 py-10">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          <Title title={"Featured Tours"} locate={"start"} />

          {/** Slider Numbers */}
          <div className="md:flex items-center hidden">
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow rounded-full">
              <FaBackward />
            </button>
            <h4 className="p-3 font-bold">1</h4>
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow  rounded-full">
              <FaForward />
            </button>
          </div>
        </div>
        <Paragraph
          content={"Most recommended tours on this season."}
          locate={"start"}
          color={"slate-500"}
        />
        <div className="mt-5">
          {!data ? (
            <div className="flex justify-center items-center">
              <ClipLoader
                color={"#683e12"}
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <PackageSlider data={data} />
          )}
        </div>

        {/** View All */}
        <div className="mt-5 flex items-center justify-between">
          <a href="/tour">
            <Title2
              title={"View All"}
              locate={"start"}
              className={"text-[#683e12] drop-shadow-lg"}
            />
          </a>

          {/** Slider Numbers */}
          <div className="md:hidden flex items-center ">
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow rounded-full">
              <FaBackward />
            </button>
            <h4 className="p-3 font-bold ">1</h4>
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow  rounded-full">
              <FaForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BeachFeatured = () => {
  return (
    <div className="w-full  bg-[url('https://travellersworldwide.com/wp-content/uploads/2023/01/Shutterstock_1362361406.jpg.webp')] bg-cover bg-center ">
      <div className="w-full  backdrop-brightness-50">
        <div className="container mx-auto px-5 md:py-24 py-10 ">
          <div className="flex items-center justify-between">
            <Title
              title={"Beach Tours"}
              locate={"start"}
              className={"text-white drop-shadow-lg"}
            />

            {/** Slider Numbers */}
            <div className="md:flex items-center hidden">
              <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow rounded-full">
                <FaBackward />
              </button>
              <h4 className="p-3 font-bold text-white">1</h4>
              <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow  rounded-full">
                <FaForward />
              </button>
            </div>
          </div>

          <Paragraph
            content={"Most recommended tours on this season."}
            locate={"start"}
            color={"slate-200"}
            className={""}
          />
          <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="col-span-3">
              <div className="flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <TourCard />
                  <TourCard />
                  <TourCard />
                </div>
              </div>
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

          {/** View All */}
          <div className="mt-5 flex items-center justify-between">
            <Title2
              title={"View All"}
              locate={"start"}
              className={"text-white drop-shadow-lg"}
            />

            {/** Slider Numbers */}
            <div className="md:hidden flex items-center ">
              <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow rounded-full">
                <FaBackward />
              </button>
              <h4 className="p-3 font-bold text-white">1</h4>
              <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow  rounded-full">
                <FaForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TrekkingFeatured = () => {
  return (
    <div className="bg-slate-100 md:py-24 py-10">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          <Title title={"Best Trekking Tours"} locate={"start"} />

          {/** Slider Numbers */}
          <div className="md:flex items-center hidden">
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow rounded-full">
              <FaBackward />
            </button>
            <h4 className="p-3 font-bold">1</h4>
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow  rounded-full">
              <FaForward />
            </button>
          </div>
        </div>

        <Paragraph
          content={"Most recommended tours on this season."}
          locate={"start"}
          color={"slate-500"}
        />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5 ">
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>

        {/** View All */}
        <div className="mt-5 flex items-center justify-between">
          <Title2
            title={"View All"}
            locate={"start"}
            className={"text-[#683e12] drop-shadow-lg"}
          />

          {/** Slider Numbers */}
          <div className="md:hidden flex items-center ">
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow rounded-full">
              <FaBackward />
            </button>
            <h4 className="p-3 font-bold ">1</h4>
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow  rounded-full">
              <FaForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RelatedFeatured = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-5">
        <Title title={"Related Tours"} locate={"start"} />
        <Paragraph
          content={"Most recommended tours on this season."}
          locate={"start"}
          color={"slate-500"}
        />
        <div className="mt-5">
          <PackageSlider />
        </div>
      </div>
    </div>
  );
};

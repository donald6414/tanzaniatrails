import React from "react";
import {
  BeachFeatured,
  Destinations,
  Ecosystem,
  FAQs,
  Featured,
  Hero,
  Operation,
  TourCategories,
  TrekkingFeatured,
} from "../components";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <TourCategories />
      <Featured />
      <BeachFeatured />
      <TrekkingFeatured />
      <Ecosystem />
      <Destinations />
      <Operation />
      <FAQs />
    </div>
  );
};

export default Home;

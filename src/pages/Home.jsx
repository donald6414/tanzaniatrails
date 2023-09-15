import React from "react";
import {
  BeachFeatured,
  Destinations,
  Ecosystem,
  FAQs,
  Featured,
  Hero,
  TourCategories,
  TrekkingFeatured,
  TrustedCat,
} from "../components";

const Home = () => {
  return (
    <div className="">
      <Hero />
      {/* <TourCategories /> */}
      <Destinations />
      <Featured />
      <TrustedCat />
      <BeachFeatured />
      {/* <TrekkingFeatured /> */}
      {/* <Ecosystem /> */}
      {/* <FAQs /> */}
      {/* <Operation /> */}
    </div>
  );
};

export default Home;

import React from "react";
import {
  BeachFeatured,
  Destinations,
  Ecosystem,
  FAQs,
  Featured,
  Hero,
  Operation,
  TrekkingFeatured,
} from "../components";

const Home = () => {
  return (
    <div className="">
      <Hero />
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

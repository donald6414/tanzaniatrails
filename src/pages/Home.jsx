import React from "react";
import {
  BeachFeatured,
  Destinations,
  Ecosystem,
  FAQs,
  Featured,
  Hero,
  Operation,
} from "../components";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Featured />
      <BeachFeatured />
      <Ecosystem />
      <Destinations />
      <Operation />
      <FAQs />
    </div>
  );
};

export default Home;

import React from "react";
import {
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
      <Ecosystem />
      <Destinations />
      <Operation />
      <FAQs />
    </div>
  );
};

export default Home;

import React from "react";
import { Ecosystem, FAQs, Hero, Metrics, Operation } from "../components";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Metrics />
      <Ecosystem />
      <Operation />
      <FAQs />
    </div>
  );
};

export default Home;

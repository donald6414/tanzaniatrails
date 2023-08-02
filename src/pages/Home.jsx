import React from "react";
import { Ecosystem, FAQs, Hero, Metrics, Operation } from "../components";
import Featured from '../components/Featured';

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Featured/>
      <Metrics />
      <Ecosystem />
      <Operation />
      <FAQs />
    </div>
  );
};

export default Home;

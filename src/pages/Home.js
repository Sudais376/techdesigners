import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import ServicesComp from "../components/ServicesComp";
import Creativity from "../components/Creativity";

const Home = () => {
  return (
    <>
      <Helmet>
        <title> Home | We Design</title>
      </Helmet>

      <Hero />

      <Bio />

      <Creativity />

      <ServicesComp />
    </>
  );
};

export default Home;

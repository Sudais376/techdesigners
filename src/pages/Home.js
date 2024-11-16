import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import ServicesComp from "../components/ServicesComp";
import Creativity from "../components/Creativity";
import PackagesComp from "../components/PackagesComp";
import ContactOut from "../components/ContactOut";

const Home = () => {

  useEffect (() => {
    window.scrollTo (0,0);
  }, []);

  return (
    <>
      <Helmet>
        <title> Home | We Design</title>
      </Helmet>

      <Hero />

      <Bio />

      <Creativity />

      <ServicesComp />

      <PackagesComp />

      <ContactOut />
    </>
  );
};

export default Home;

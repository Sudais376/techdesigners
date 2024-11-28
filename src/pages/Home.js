import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import ServicesComp from "../components/ServicesComp";
import Creativity from "../components/Creativity";
import PackagesComp from "../components/PackagesComp";
import ContactOut from "../components/ContactOut";
import SaadCreativity from "../components/SaadCreativity";

const Home = () => {

  useEffect (() => {
    window.scrollTo (0,0);
  }, []);

  return (
    <>
      <Helmet>
        <title> Home | Tech Designers </title>
      </Helmet>

      <Hero />

      <Bio />

      <ServicesComp />
      
      <Creativity />


      <PackagesComp />

      <SaadCreativity />

      <ContactOut />
    </>
  );
};

export default Home;

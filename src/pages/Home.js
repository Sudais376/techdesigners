import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Helmet>
        <title> Home | We Design</title>
      </Helmet>

      <Hero />
      <div>
        {/* <button class="px-10 py-4 rounded-full cursor-pointer border-0 bg-white text-[#271145] shadow-[0_0_8px_rgba(0,0,0,0.05)] tracking-wide uppercase text-sm transition-all duration-500 hover:tracking-[3px] hover:bg-[#271145] hover:text-white hover:shadow-[0_7px_29px_rgba(93,24,220,1)] active:tracking-[3px] active:bg-[hsl(261deg_80%_48%)] active:text-white active:shadow-[0px_0px_0px_0px] active:translate-y-[10px] active:transition-[100ms]">
  Button
</button> */}
      </div>
    </>
  );
};

export default Home;

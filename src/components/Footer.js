import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className=" relative z-20 py-12 bg-[#491b77] max-w-[1800px] mx-auto">
        <div
          data-aos=""
          className="flex flex-col lg:flex-row justify-around items-center gap-2"
        >
          <div>
            <div className="flex items-center gap-2 pt-8">
              <a href="#">
                <Link to="/">
                  <img src="/assets/logo.png" width={40} alt="Logo" />
                </Link>
              </a>
              <a href="#">
                <Link to="/">
                  <span className="text-white text-3xl hover:text-[#ff4df3] transition duration-500">
                    CodeBloom
                  </span>
                </Link>
              </a>
            </div>
          </div>
          <div>
            <div className="pt-8">
              <ul className="flex flex-wrap justify-center items-center gap-8 lg:pr-16 px-8 ">
                <Link
                  to="/"
                  className="text-white hover:text-[#ff4df3] transition duration-500"
                >
                  <a href="#">Home</a>
                </Link>
                <Link
                  to="/services"
                  className="text-white hover:text-[#ff4df3] transition duration-500"
                >
                  <a href="#">Services</a>
                </Link>
                <Link
                  to="/packages"
                  className="text-white hover:text-[#ff4df3] transition duration-500"
                >
                  <a href="#">Packages</a>
                </Link>
                <Link
                  to="/portfolio"
                  className="text-white hover:text-[#ff4df3] transition duration-500"
                >
                  <a href="#">Portfolio</a>
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:text-[#ff4df3] transition duration-500"
                >
                  <a href="#">About</a>
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:text-[#ff4df3] transition duration-500"
                >
                  <a href="#">Contact Us</a>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <div className="pt-8 flex justify-center items-center gap-6 ">
              <div className="Whatsapp flex items-center gap-3">
                <img className="hover:text-[#1DA1f2]" src="/assets/whatsapp.png" width={25} alt="" />
                
              </div>
              <div className="Fiverr flex items-center gap-3 py-3">
                <img src="/assets/whatsapp.png" width={25} alt="" />
              
              </div>
              <div className="Github flex items-center gap-3">
                <img src="/assets/whatsapp.png" width={25} alt="" />
                
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center md:pr-12 pt-8">
            <span className="text-center text-[#cccccc]">&copy; Wedesign International ltd. 2024 | All Rights Reserved </span>
        </div>
      </section>
    </>
  );
};

export default Footer;

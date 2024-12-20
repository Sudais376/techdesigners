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
      <section className=" relative z-20 pb-12 bg-footerBg max-w-18H mx-auto px-6">
        <div
          className="flex flex-col lg:flex-row justify-around items-center gap-2"
        >
           {/* Logo */}
           <div className=" flex justify-center items-center pt-14 ">
              <Link to="/">
                <img
                  className="hover:scale-105 transition duration-500"
                  src="/assets/logo.png"
                  width={40}
                  alt="Brand Logo"
                />
              </Link>
            </div>
          <div>
            <div className=" lg:pl-32 pt-6 lg:pt-16 pb-2 lg:pb-0 ">
              <ul className="flex flex-wrap justify-center items-center gap-8 lg:pr-16 px-8 ">
                <Link
                  to="/"
                  className="text-white hover:text-footerHoverTC transition duration-500"
                >
                  <a href="/">Home</a>
                </Link>
                <Link
                  to="/services"
                  className="text-white hover:text-footerHoverTC transition duration-500"
                >
                  <a href="/services">Services</a>
                </Link>
                <Link
                  to="/packages"
                  className="text-white hover:text-footerHoverTC transition duration-500"
                >
                  <a href="/packages">Packages</a>
                </Link>
                <Link
                  to="/portfolio"
                  className="text-white hover:text-footerHoverTC transition duration-500"
                >
                  <a href="/portfolio">Portfolio</a>
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:text-footerHoverTC transition duration-500"
                >
                  <a href="/about">About</a>
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:text-footerHoverTC transition duration-500"
                >
                  <a href="/contact">Contact Us</a>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <div className=" pt-2 lg:pt-14 flex flex-col  ">
             
              <div className=" flex justify-center items-center gap-8 py-4 ">
                <a
                  href="mailto:personal.sudais376@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services.% What%Will%be%the%process?"
                  target="_blank"  rel="noreferrer"
                >
                  <img src="/assets/gmail.svg" width={50} alt="" />
                </a>

                <a href="https://wa.me/+923335101246" target="_blank" rel="noreferrer">
                  <img src="/assets/whatsapp.svg" width={40} alt="" />
                </a>

                <a href="https://github.com/Sudais376" target="_blank" rel="noreferrer">
                  <img src="/assets/github.svg" width={40} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center md:pr-12 pt-8">
          <span className="text-center text-copyrightText">
            &copy; techdesigners International ltd. 2024 | All Rights Reserved{" "}
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;

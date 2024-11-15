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
      <section className=" relative z-20 py-12 bg-[#491b77] max-w-[1800px] mx-auto px-6">
        <div
          data-aos=""
          className="flex flex-col lg:flex-row justify-around items-center gap-2"
        >
           <div className="pt-8 flex flex-col items-start lg:items-end border-b border-white lg:border-b-0 ">
              <span className=" font-bold text-[#ff4df3] pb-4 ">Design Services</span>
            <div className=" flex items-center gap-3 py-3 flex-row-reverse lg:flex-row ">
                
              <a href="mailto:personal.sudais376@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services.% What%Will%be%the%process?" target="_blank"><span className="  hover:text-[#ff4df3] transition duration-500"> personl.sudais376@gmail.com </span> </a>
              <a href="mailto:personal.sudais376@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services.% What%Will%be%the%process?" target="_blank">
                <img className=" hidden xl:block " src="/assets/gmail.svg" width={40} alt="" />
              </a>
              
              </div>
              <div className=" flex items-center gap-3 py-3 flex-row-reverse lg:flex-row ">
                
              <a href="https://wa.me/+923335101246" target="_blank"><span className="  hover:text-[#ff4df3] transition duration-500">  +92 333 5101246  </span> </a>
              <a href="https://wa.me/+923335101246" target="_blank">
                <img className=" hidden xl:block " src="/assets/whatsapp.svg" width={40} alt="" />
              </a>
              
              </div>
              <div className=" flex items-center gap-3 py-3 flex-row-reverse lg:flex-row ">
                
              <a href="https://github.com/Sudais376" target="_blank"><span className="  hover:text-[#ff4df3] transition duration-500"> github.com/Sudais376 </span> </a>
              <a href="https://github.com/Sudais376" target="_blank">
                <img className=" hidden xl:block " src="/assets/github.svg" width={40} alt="" />
              </a>
              
              </div>
            </div>
            
          <div>
            <div className="pt-8 pb-8 lg:pb-0 ">
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
          <div className=" border-t border-white lg:border-t-0 ">
            <div className=" pt-2 lg:pt-8 flex flex-col  ">
              <span className=" font-bold text-[#ff4df3] pb-4 ">Web Solutions</span>
            <div className=" flex items-center gap-3 py-3">
                <a href="mailto:personal.sudais376@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services.% What%Will%be%the%process?" target="_blank">
                <img className=" hidden xl:block " src="/assets/gmail.svg" width={40} alt="" />
              </a>
              <a href="mailto:personal.sudais376@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services.% What%Will%be%the%process?" target="_blank"><span className="  hover:text-[#ff4df3] transition duration-500"> personl.sudais376@gmail.com </span> </a>
              
              </div>
              <div className=" flex items-center gap-3 py-3">
                <a href="https://wa.me/+923335101246" target="_blank">
                <img className=" hidden xl:block " src="/assets/whatsapp.svg" width={40} alt="" />
              </a>
              <a href="https://wa.me/+923335101246" target="_blank"><span className="  hover:text-[#ff4df3] transition duration-500">  +92 333 5101246  </span> </a>
              
              </div>
              <div className=" flex items-center gap-3 py-3">
                <a href="https://github.com/Sudais376" target="_blank">
                <img className=" hidden xl:block " src="/assets/github.svg" width={40} alt="" />
              </a>
              <a href="https://github.com/Sudais376" target="_blank"><span className="  hover:text-[#ff4df3] transition duration-500"> github.com/Sudais376 </span> </a>
              
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

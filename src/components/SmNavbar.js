import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';

const SmNavbar = ({onClose}) => {

    useEffect (() => {
        AOS.init ({duration : 1000});
    }, []);

  return (
    <>
      <header className=" sticky top-0 z-20  ">
        <nav className=" w-full bg-gradient-to-r from-customPurpleEnd to-customPurpleStart pt-4 px-8 ">
          {/* Logo on the Left side and Close Icon on the Right side  */}

          <div data-aos ="fade-down" className=" flex justify-between items-center ">
            <div data-aos ="fade-down">
              <Link to="/">
                <img
                onClick={onClose} 
                  className="hover:scale-105 transition duration-500"
                  src="/assets/logo.png"
                  width={25}
                  alt="Brand Logo"
                />
              </Link>
            </div>
            <div data-aos ="fade-down">
              <img onClick={onClose} src="/assets/close.svg" width={30} alt="Close Icon" />
            </div>
          </div>

          {/* Navigation Links in Vertical Order  */}

          <div>
            <ul  className=" flex flex-col justify-center py-6 ">
              <Link onClick={onClose}  data-aos ="fade-right" to="/">
                <a
                  className="text-white hover:underline hover:text-navbarHoverText transition duration-500 "
                  href="/"
                >
                  Home
                </a>
              </Link>
              <hr data-aos ="fade-left" className=" border border-smNavbarBorder mb-4 mt-1 " />
              <Link onClick={onClose}  data-aos ="fade-right" to="/services">
                <a
                  className="text-white hover:underline hover:text-navbarHoverText transition duration-500 "
                  href="/services"
                >
                  Services
                </a>
              </Link>
              <hr data-aos ="fade-left" className=" border border-smNavbarBorder mb-4 mt-1 " />
              <Link onClick={onClose}  data-aos ="fade-right" to="/packages">
                <a
                  className="text-white hover:underline hover:text-navbarHoverText transition duration-500 "
                  href="/packages"
                >
                  Packages
                </a>
              </Link>
              <hr data-aos ="fade-left" className=" border border-smNavbarBorder mb-4 mt-1 " />
              <Link onClick={onClose}  data-aos ="fade-right" to="/portfolio">
                <a
                  className="text-white hover:underline hover:text-navbarHoverText transition duration-500 "
                  href="/portfolio"
                >
                  Portfolio
                </a>
              </Link>
              <hr data-aos ="fade-left" className=" border border-smNavbarBorder mb-4 mt-1 " />
              <Link onClick={onClose}  data-aos ="fade-right" to="/about">
                <a
                  className="text-white hover:underline hover:text-navbarHoverText transition duration-500 "
                  href="/about"
                >
                  About Us
                </a>
              </Link>
              <hr data-aos ="fade-left" className=" border border-smNavbarBorder mb-4 mt-1 " />
              <Link onClick={onClose}  data-aos ="fade-right" to="/contact">
                <a
                  className="text-white hover:underline hover:text-navbarHoverText transition duration-500 "
                  href="/contact"
                >
                  Contact Us
                </a>
              </Link>
              <hr data-aos ="fade-left" className=" border border-smNavbarBorder mb-4 mt-1 " />
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default SmNavbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmNavbar from "./SmNavbar";

const  Navbar = () => {
  // State to track if SmNavbar is open
  const [isSmNavbarOpen, setIsSmNavbarOpen] = useState(false);

  // Toggle function to switch between Navbar and SmNavbar
  const toggleSmNavbar = () => {
    setIsSmNavbarOpen(!isSmNavbarOpen);
  };

  return (
    <>
      {/* If SmNavbar is open, render SmNavbar */}
      {isSmNavbarOpen ? (
        <SmNavbar onClose={toggleSmNavbar} />
      ) : (
        <header className="sticky top-0 z-20">
          <nav className=" bg-gradient-to-r from-customPurpleEnd to-customPurpleStart flex justify-between items-center py-4 px-8 md:px-12 lg:px-24">
            {/* First Three navigation links on the Left side */}
            <div>
              <ul className="hidden md:flex justify-center items-center gap-6">
                <Link to="/">
                  <a
                    className="text-white hover:underline hover:text-[#ff4df3] transition duration-500"
                    href="/"
                  >
                    Home
                  </a>
                </Link>
                <Link to="/services">
                  <a
                    className="text-white hover:underline hover:text-[#ff4df3] transition duration-500"
                    href="/services"
                  >
                    Services
                  </a>
                </Link>
                <Link to="/packages">
                  <a
                    className="text-white hover:underline hover:text-[#ff4df3] transition duration-500"
                    href="/packages"
                  >
                    Packages
                  </a>
                </Link>
              </ul>
            </div>

            {/* Logo */}
            <div className="flex-grow md:flex-grow-0 flex justify-start md:justify-center">
              <Link to="/">
                <img
                  className="hover:scale-105 transition duration-500"
                  src="/assets/logo.png"
                  width={40}
                  alt="Brand Logo"
                />
              </Link>
            </div>

            {/* Last Three navigation links on the Right side */}
            <div>
              <ul className="hidden md:flex justify-center items-center gap-6">
                <Link to="/portfolio">
                  <a
                    className="text-white hover:underline hover:text-[#ff4df3] transition duration-500"
                    href="/portfolio"
                  >
                    Portfolio
                  </a>
                </Link>
                <Link to="/about">
                  <a
                    className="text-white hover:underline hover:text-[#ff4df3] transition duration-500"
                    href="/about"
                  >
                    About Us
                  </a>
                </Link>
                <Link to="/contact">
                  <a
                    className="text-white hover:underline hover:text-[#ff4df3] transition duration-500"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </Link>
              </ul>

              {/* Menu Icon for small screens */}
              <div className="md:hidden" onClick={toggleSmNavbar}>
                <img src="/assets/menu.svg" width={60} alt="Menu Icon" />
              </div>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;

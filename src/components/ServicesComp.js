import React, { useState } from "react";
import ContactForm2 from "./ContactForm2"; // Import the popup component

const ServicesComp = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {/* Section for Our Services */}
      <section className="py-12">
        {/* Heading Container */}
        <div data-aos="fade-up" className="max-w-thousand mx-auto">
          <h2
            data-aos="fade-up"
            className="relative z-20 max-w-8H mx-auto px-6 text-center font-bold text-3xl md:text-5xl pb-12"
          >
            Our Services
          </h2>
        </div>

        <div
          data-aos="fade-up"
          className="md:py-12 flex flex-wrap justify-center gap-x-16 gap-y-12 px-8"
        >
          {/* Graphic Services */}
          <div
            data-aos="fade-up"
            className="Card max-w-500 bg-gradient-to-r from-sampleCGBgStart to-sampleCGBgEnd overflow-hidden p-1 rounded-2xl border-4 border-sampleCardBorder "
          >
            <div data-aos="fade-up" className=" group cursor-pointer " >
              <img
                className="hover:scale-105 transition duration-500 h-sImageH object-cover rounded-xl"
                src="/assets/graphicDesigningServices.png"
                width={480}
                alt=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    Design Services
                  </span>
                </div>
            </div>
            <div data-aos="fade-up" className="pt-2 text-center">
              <div data-aos="fade-up" className="pt-4 pl-2">
                <p data-aos="fade-up" className="italic font-light text-xl">
                  Crafting visuals that captivate and inspire.
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="flex justify-center items-center py-4"
              >
                <button
                  onClick={showPopup} // Show popup on click
                  className="flex justify-center items-center px-6 py-2 rounded-lg bg-servicesButtonBg hover:bg-white hover:text-black transition-all duration-500"
                >
                  Design Services
                </button>
              </div>
            </div>
          </div>

          {/* Web Solutions */}
          <div
            data-aos="fade-up"
            className="Card max-w-500 bg-gradient-to-r from-sampleCGBgStart to-sampleCGBgEnd overflow-hidden p-1 rounded-2xl border-4 border-sampleCardBorder "
          >
            <div data-aos="fade-up" className=" group cursor-pointer " >
              <img
                className=" h-sImageH object-cover rounded-xl"
                src="/assets/frontEndServices.png"
                width={480}
                alt=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    Web Solutions
                  </span>
                </div>
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div data-aos="fade-up" className="pt-4 text-center">
                <p data-aos="fade-up" className="italic font-light text-xl">
                  Building seamless, powerful digital experiences.
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="flex justify-center items-center py-4"
              >
                <button
                  onClick={showPopup} // Show popup on click
                  className="flex justify-center items-center px-6 py-2 rounded-lg bg-servicesButtonBg hover:bg-white hover:text-black transition-all duration-500"
                >
                  Web Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ContactForm2 Popup */}
      {isPopupVisible && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={hidePopup} // Close popup on overlay click
        >
          <div
            className=" flex flex-col justify-center items-center bg-gradient-to-r from-thanksGbgStart to-thanksGbgEnd p-6 rounded-lg shadow-lg w-90% max-w-500"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation
          >
            <ContactForm2 /> {/* Render the ContactForm2 component */}
            <div className=" max-w-150 mx-auto ">
            <button
              onClick={hidePopup} // Close popup on button click
              className="  mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-500 "
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesComp;

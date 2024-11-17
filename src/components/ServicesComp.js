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
        <div data-aos="fade-up" className="max-w-[1000px] mx-auto">
          <h2
            data-aos="fade-up"
            className="relative z-20 max-w-[800px] mx-auto px-6 text-center font-bold text-3xl md:text-5xl pb-12"
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
            className="Card max-w-[500px] bg-gradient-to-r from-[#715e91] to-[#4a336b] overflow-hidden p-1 rounded-2xl border-4 border-[#8f3b9f] "
          >
            <div data-aos="fade-up">
              <img
                className="hover:scale-105 transition duration-500 h-[300px] object-cover rounded-xl"
                src="/assets/graphicDesigningServices.png"
                width={480}
                alt=""
              />
            </div>
            <div data-aos="fade-up" className="pt-2 text-center">
              <div data-aos="fade-up" className="pt-4 pl-2">
                <p data-aos="fade-up" className="italic font-light text-[20px]">
                  Crafting visuals that captivate and inspire.
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="flex justify-center items-center py-4"
              >
                <button
                  onClick={showPopup} // Show popup on click
                  className="flex justify-center items-center px-6 py-2 rounded-lg bg-[#ff00fb] hover:bg-white hover:text-black transition-all duration-1000"
                >
                  Design Services
                </button>
              </div>
            </div>
          </div>

          {/* Web Solutions */}
          <div
            data-aos="fade-up"
            className="Card max-w-[500px] bg-gradient-to-r from-[#715e91] to-[#4a336b] overflow-hidden p-1 rounded-2xl border-4 border-[#8f3b9f] "
          >
            <div data-aos="fade-up">
              <img
                className="hover:scale-105 transition duration-500 h-[300px] object-cover rounded-xl"
                src="/assets/frontEndServices.png"
                width={480}
                alt=""
              />
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div data-aos="fade-up" className="pt-4 text-center">
                <p data-aos="fade-up" className="italic font-light text-[20px]">
                  Building seamless, powerful digital experiences.
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="flex justify-center items-center py-4"
              >
                <button
                  onClick={showPopup} // Show popup on click
                  className="flex justify-center items-center px-6 py-2 rounded-lg bg-[#ff00fb] hover:bg-white hover:text-black transition-all duration-1000"
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
            className=" flex flex-col justify-center items-center bg-gradient-to-r from-[#302e69] to-[#35154b] p-6 rounded-lg shadow-lg w-[90%] max-w-[500px]"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation
          >
            <ContactForm2 /> {/* Render the ContactForm2 component */}
            <div className=" max-w-[150px] mx-auto ">
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

import React from "react";

const ServicesComp = () => {
  // Scroll function to move the page to 300px from the top
  const scrollToTopOffset = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <>
      {/* Section for Our Services  */}
      <section className="py-12">
        {/* Heading Container */}
        <div data-aos="fade-up" className="max-w-[1000px] mx-auto">
          <h2
            data-aos="fade-up"
            className=" relative z-20 max-w-[800px] mx-auto px-6 text-center font-bold text-3xl md:text-5xl pb-12"
          >
            Our Services
          </h2>
        </div>

        <div
          data-aos="fade-up"
          className="py-12 flex flex-wrap justify-center gap-x-16 gap-y-12 px-6"
        >
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
            <div data-aos="fade-up" className="pt-2 text-center  ">
              <div data-aos="fade-up" className=" pt-4 pl-2">
                <p data-aos="fade-up" className="italic font-light text-[20px]">
                  Crafting visuals that captivate and inspire.
                </p>
              </div>
              <div
                data-aos="fade-up"
                className=" flex justify-center items-center py-4 "
              >
                <button className=" flex justify-center items-center px-6 py-2 rounded-lg bg-[#ff00fb] hover:bg-white hover:text-black transition-all duration-1000 ">
                  Design Services
                </button>
              </div>
            </div>
          </div>

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
              <div data-aos="fade-up" className="pt-4 text-center ">
                <p data-aos="fade-up" className="italic font-light text-[20px]">
                  Building seamless, powerful digital experiences.
                </p>
              </div>
              <div
                data-aos="fade-up"
                className=" flex justify-center items-center py-4 "
              >
                <button
                  className=" flex justify-center items-center px-6 py-2 rounded-lg bg-[#ff00fb] hover:bg-white hover:text-black transition-all duration-1000 "
                >
                  Web Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesComp;

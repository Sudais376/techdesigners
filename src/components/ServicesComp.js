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
        <div data-aos="" className="max-w-[1000px] mx-auto">
          <h2
            data-aos=""
            className="max-w-[800px] mx-auto px-6 text-center font-bold text-3xl md:text-5xl pb-12"
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
            className="Card max-w-[500px] bg-gradient-to-r from-[#715e91] to-[#4a336b] overflow-hidden p-1 rounded-2xl border-4 border-[#8f3b9f] max-h-[435px] "
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
              <div className="pt-10 pl-2">
                <p className="italic font-light text-[20px]">
                  Front End Web Services
                </p>
              </div>
              <div className="pt-1 px-2 flex justify-between items-center">
                <p className="italic font-light text-[20px]">
                  Professional / Polished
                </p>
                <a className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    scrollToTopOffset(); // Scroll to top 300px
                  }}
                >
                  <img src="/assets/linkArrow.svg" width={30} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="Card max-w-[500px] bg-gradient-to-r from-[#715e91] to-[#4a336b] overflow-hidden p-1 rounded-2xl border-4 border-[#8f3b9f] max-h-[435px] "
          >
            <div data-aos="fade-up">
              <img
                className="hover:scale-105 transition duration-500 h-[300px] object-cover rounded-xl"
                src="/assets/graphicDesigningServices.png"
                width={480}
                alt=""
              />
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div className=" pt-6 md:pt-10 pl-2">
                <p className="italic font-light text-[20px]">
                  Graphic Design & UI/UX Services
                </p>
              </div>
              <div className="pt-1 px-2 flex justify-between items-center">
                <p className="italic font-light text-[20px]">
                  Professional / Astonishing
                </p>
                <a className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    scrollToTopOffset(); // Scroll to top 300px
                  }}
                >
                  <img src="/assets/linkArrow.svg" width={30} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesComp;

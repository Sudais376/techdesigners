import React, { useEffect } from "react";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section data-aos="fade-up" className=" py-14 px-6 md:p-24">
        {/* Hero Section, Hero text and Image. */}

        <div className=" flex flex-wrap-reverse justify-center gap-8">
          {/* Hero text Container  */}
          <div className="pLeft">
            <p
              data-aos="fade-up"
              className=" inline-block text-[#dd45da] border-b border-[#dd45da] pb-1 text-xl md:text-2xl "
            >
              Our Design Talks!
            </p>
            <span
              data-aos="fade-up"
              className="block text-3xl md:text-5xl lg:text-7xl font-semibold max-w-[600px] pt-4 pb-10"
            >
              Bring Your Jouney To <span data-aos="fade-up">&rarr;</span> Next
              Level
            </span>

            <div
              data-aos="fade-up"
              className=" flex flex-wrap items-center gap-12 pt-4 pb-4 max-w-[580px] rounded-xl "
            >
              <div
                data-aos="fade-up"
                className="flex items-center gap-4 min-w-[242px] "
              >
                <button
                  data-aos="fade-up"
                  className="bg-[#f53fa1] p-2 pr-[10px] rounded-md"
                >
                  <img
                    data-aos="fade-up"
                    src="/assets/pin.svg"
                    width={40}
                    alt=""
                  />
                </button>
                <span data-aos="fade-up" className="font-semibold text-lg">
                  Years of experiennce
                </span>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-4 min-w-[242px]"
              >
                <button
                  data-aos="fade-up"
                  className="bg-[#f53fa1] p-2 pr-[10px] rounded-md"
                >
                  <img
                    data-aos="fade-up"
                    src="/assets/radio.svg"
                    width={40}
                    alt=""
                  />
                </button>
                <span className="font-semibold text-lg">
                  We work with trend
                </span>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-4 min-w-[242px]"
              >
                <button
                  data-aos="fade-up"
                  className="bg-[#f53fa1] p-2 pr-[10px] rounded-md"
                >
                  <img
                    data-aos="fade-up"
                    src="/assets/people.svg"
                    width={40}
                    alt=""
                  />
                </button>
                <span data-aos="fade-up" className="font-semibold text-lg">
                  100% Satisfaction
                </span>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-4 min-w-[242px]"
              >
                <button
                  data-aos="fade-up"
                  className="bg-[#f53fa1] p-2 pr-[10px] rounded-md"
                >
                  <img
                    data-aos="fade-up"
                    src="/assets/starbox.svg"
                    width={40}
                    alt=""
                  />
                </button>
                <span data-aos="fade-up" className="font-semibold text-lg">
                  Professional services
                </span>
              </div>
            </div>
            <div data-aos="fade-right" className=" pt-8">
              <button className="btn relative overflow-hidden rounded-full text-white text-[15px] font-medium leading-[21px] px-16 py-6 md:py-3 cursor-pointer w-full md:w-auto">
                <span className="btn-inner relative z-10">Get started</span>
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className=" rounded-b-[80px] fade-image relative">
            <img
              data-aos="fade-up"
              className=" rounded-b-[80px] rounded-t-xl w-[480px] h-auto object-cover"
              src="/assets/heroImage1.png"
              alt="Hero"
            />
            <div className="gradient-border"></div>
          </div>
        </div>

        <hr data-aos="fade-up" className="hline fade-line text-white mt-10" />
      </section>
    </>
  );
};

export default Hero;

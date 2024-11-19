import React, { useEffect } from "react";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section data-aos="fade-up" className=" py-14 px-10 md:p-24">
        {/* Hero Section, Hero text and Image. */}

        <div className=" flex flex-wrap-reverse justify-center gap-8">
          {/* Hero text Container  */}
          <div className="pLeft">
            <p
              data-aos="fade-up"
              className=" inline-block text-heroFirst border-b border-heroFirst pb-1 text-xl md:text-2xl "
            >
              Our Design Talks!
              {/* Subtle background glow with stronger shine on the right side */}
              <div
                className=" absolute bg-gradient-to-tr from-heroFirstShadow/60 via-heroFirstShadow/20 to-transparent 
            blur-2xl opacity-100 rounded-full mix-blend-screen w-64 h-12 -top-2 -left-8 "
              ></div>
            </p>
            <span
              data-aos="fade-up"
              className="block text-3xl md:text-4xl lg:text-6xl font-semibold max-w-550 pt-4 pb-6"
            >
              Bring Your Journey To <span data-aos="fade-up">&rarr;</span> Next
              Level
            </span>

            <div
              data-aos="fade-up"
              className=" flex flex-wrap items-center gap-12 pb-8  max-w-500 rounded-xl "
            >
              <div
                data-aos="fade-up"
                className="flex items-center gap-3 min-w-220 "
              >
                <button
                  data-aos="fade-up"
                  className="bg-heroButtonBg p-2 pr-2 rounded-md"
                >
                  <img
                    data-aos="fade-up"
                    src="/assets/pin.svg"
                    width={25}
                    alt=""
                  />
                </button>
                <span data-aos="fade-up" className="font-semibold ">
                  Years of experiennce
                </span>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-3 min-w-220"
              >
                <button
                  data-aos="fade-up"
                  className="bg-heroButtonBg p-2 pr-2 rounded-md"
                >
                  <img
                    data-aos="fade-up"
                    src="/assets/radio.svg"
                    width={25}
                    alt=""
                  />
                </button>
                <span className="font-semibold ">We work with trend</span>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-3 min-w-220"
              >
                <button
                  data-aos="fade-up"
                  className="bg-heroButtonBg p-2 pr-2 rounded-md"
                >
                  <img
                    data-aos="fade-up"
                    src="/assets/people.svg"
                    width={25}
                    alt=""
                  />
                </button>
                <span data-aos="fade-up" className="font-semibold ">
                  100% Satisfaction
                </span>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-3 min-w-220"
              >
                <button
                  data-aos="fade-up"
                  className="bg-heroButtonBg p-2 pr-2 rounded-md"
                >
                  <img
                    data-aos="fade-up"
                    src="/assets/starbox.svg"
                    width={25}
                    alt=""
                  />
                </button>
                <span data-aos="fade-up" className="font-semibold ">
                  Professional services
                </span>
              </div>
            </div>

            <a href="#Bio">
              <div className="pt-2">
                <button className=" bg-heroSButtonBg px-10 py-4 text-black rounded-2xl text-xl ">
                  <span className="btn-inner relative z-10 text-xl font-bold">
                    Scroll down
                  </span>
                </button>
              </div>
            </a>
          </div>

          <div
            data-aos="fade-up"
            className="rounded-b-radius80 fade-image relative pt-2 "
          >
            {/* Subtle background glow with stronger shine on the left side */}
            <div
              className="absolute inset-0 bg-gradient-to-tl from-heroImageLeftShadow/60 via-heroImageLeftShadow/20 to-transparent 
                blur-2xl opacity-90 rounded-full mix-blend-screen w-48 h-48 top-36
                "
            ></div>

            {/* Subtle background glow with stronger shine on the right side */}
            <div
              className=" absolute bg-gradient-to-tr from-heroImageRightShadow/60 via-heroImageRightShadow/20 to-transparent 
            blur-2xl opacity-90 rounded-full mix-blend-screen w-48 h-48 top-28 right-4  "
            ></div>

            {/* Main Image */}
            <img
              data-aos="fade-up"
              className="rounded-b-radius80 rounded-t-xl w-435px h-auto object-cover "
              src="/assets/heroImage1.png"
              alt="Hero"
            />

            {/* Gradient Border */}
            <div className="gradient-border"></div>
          </div>
        </div>

        <hr id="Bio" className="hline fade-line text-white mt-10 " />
      </section>
    </>
  );
};

export default Hero;

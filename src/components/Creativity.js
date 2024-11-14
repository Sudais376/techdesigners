import React from "react";

const Creativity = () => {
  return (
    <>
      {/* Section for Showcasing Some sample Works  */}
      <section className=" py-12 px-6 ">
        {/* Heading Container */}
        <div data-aos="fade-up" className="max-w-[1000px] mx-auto">
          <h2
            data-aos="fade-up"
            className="max-w-[800px] mx-auto px-6 text-center font-bold text-3xl md:text-5xl pb-4"
          >
            Our Creativity
          </h2>
          <p className=" max-w-[800px] mx-auto md:text-center text-lg pb-12 ">
            Our Creativity showcases the depth and diversity of our work—each
            project crafted with precision, passion, and a focus on excellence.
            From innovative designs to seamless functionality, explore the
            creativity that drives our commitment to bringing ideas to life
          </p>
        </div>

        {/* Container to Showcase some example work  */}

        <div
          data-aos="fade-up"
          className=" py-12 flex flex-wrap justify-center gap-x-16 gap-y-12 px-6"
        >
          <div
            data-aos="fade-up"
            className="Card max-w-[500px] bg-gradient-to-r from-[#715e91] to-[#4a336b] overflow-hidden p-1 rounded-2xl border-4 border-[#8f3b9f]"
          >
            <div data-aos="fade-up">
              <img
                className=" hover:scale-105 transition duration-500 h-[300px] object-cover rounded-xl"
                src="/assets/shopEase.png"
                width={480}
                alt=""
              />
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div className="pt-10 pl-2">
                <p className=" italic font-light text-[20px]">Shop Ease</p>
              </div>
              <div className="pt-1 px-2 flex justify-between items-center ">
                <p className=" italic font-light text-[20px]">
                  Business / Shopping
                </p>
                <a href="https://shop-ease-plum.vercel.app/" target="_blank">
                  <img src="/assets/linkArrow.svg" width={30} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="Card max-w-[500px] bg-gradient-to-r from-[#715e91] to-[#4a336b] overflow-hidden p-1 rounded-2xl border-4 border-[#8f3b9f]"
          >
            <div data-aos="fade-up">
              <img
                className=" hover:scale-105 transition duration-500 h-[300px] object-cover rounded-xl"
                src="/assets/techVibe.png"
                width={480}
                alt=""
              />
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div className="pt-10 pl-2">
                <p className=" italic font-light text-[20px]">Tech Vibe</p>
              </div>
              <div className="pt-1 px-2 flex justify-between items-center ">
                <p className=" italic font-light text-[20px]">
                  Business / Tech
                </p>
                <a href="https://tech-vibe-iota.vercel.app/" target="_blank">
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
                className=" hover:scale-105 transition duration-500 h-[300px] object-cover rounded-xl"
                src="/assets/velocityDrive.png"
                width={480}
                alt=""
              />
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div className="pt-10 pl-2">
                <p className=" italic font-light text-[20px]">Velocity Drive</p>
              </div>
              <div className="pt-1 px-2 flex justify-between items-center ">
                <p className=" italic font-light text-[20px]">
                  Business / Shopping
                </p>
                <a href="https://velocity-drive.vercel.app/" target="_blank">
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
                className=" hover:scale-105 transition duration-500 h-[300px] object-cover rounded-xl"
                src="/assets/foodDelight.png"
                width={480}
                alt=""
              />
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div className="pt-10 pl-2">
                <p className=" italic font-light text-[20px]">Food Delight</p>
              </div>
              <div className="pt-1 px-2 flex justify-between items-center ">
                <p className=" italic font-light text-[20px]">
                  Business / Food
                </p>
                <a
                  href="https://food-delight-livid.vercel.app/"
                  target="_blank"
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

export default Creativity;

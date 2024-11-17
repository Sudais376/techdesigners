import React from "react";

const AboutComponent = () => {
  return (
    <>
      <div data-aos="fade-up" className=" content-center">
        <div data-aos="fade-up" className="max-w-[1000px] mx-auto pt-24 ">
        <h2
  data-aos="fade-up"
  className=" hTwo text-center font-bold text-2xl md:text-5xl pb-6 md:pb-12 px-4"
>
  Designing Experiences, Building
  <br />
  <span className="flex items-center justify-center gap-4">
    <span className="w-1/4 h-[2px] bg-gray-400"></span>
    <span>Solutions</span>
    <span className="w-1/4 h-[2px] bg-gray-400"></span>
  </span>
</h2>


          <p data-aos="fade-up" className="text-center px-6 md:text-2xl">
            At our core, we are passionate about transforming ideas into
            impactful digital experiences. With expertise in graphic design and
            web development, we offer a seamless blend of creativity and
            technology to meet your needs.
          </p>
        </div>
        <div data-aos="fade-up" className="max-w-[1000px] mx-auto py-4 md:py-8">
          <p data-aos="fade-up" className="text-center px-6 md:text-2xl">
            Our Graphic Design services focus on crafting intuitive UI and
            engaging UX that not only look stunning but also elevate user
            interactions. Every design is tailored to reflect your brand's
            identity while ensuring a flawless user journey.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="max-w-[1000px] mx-auto content-centert"
      >
        <div
          data-aos="fade-up"
          className="max-w-[1000px] mx-auto pb-6 md:pb-12"
        >
          <p data-aos="fade-up" className="text-center md:text-2xl px-6">
            Through our Web Development expertise, we build responsive,
            high-performing websites that bring these designs to life. From
            clean, scalable code to seamless functionality, we ensure every
            project is a perfect balance of form and function.
          </p>

          <p
            data-aos="fade-up"
            className="text-center md:text-2xl px-6 py-6 md:py-12"
          >
            We are dedicated to delivering solutions that connect, inspire, and
            make an impact.
          </p>
          <p
            data-aos="fade-up"
            className=" max-w-[700px] mx-auto text-center md:text-2xl italic font-bold px-6 pt-4 md:pt-12"
          >
            "Great design is not just what it looks like, but how it works."
          </p>
          <div
            data-aos="fade-up"
            className=" flex justify-end max-w-[700px] mx-auto "
          >
            <span className=" px-4">_ Steve Jobs</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;

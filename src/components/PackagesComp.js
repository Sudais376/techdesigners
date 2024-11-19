import React from "react";

const PackagesComp = () => {
  return (
    <>
      {/* Section for Offering Packages  */}
      <section data-aos="fade-up" className=" py-12 px-8  ">
        {/* Heading Container */}
        <div data-aos="fade-up" className="max-w-thousand mx-auto">
          <h2
            data-aos="fade-up"
            className="max-w-8H mx-auto px-6 text-center font-bold text-3xl md:text-5xl pb-4"
          >
            Packages
          </h2>
          <p
            data-aos="fade-up"
            className=" max-w-8H mx-auto md:text-center text-lg pb-12 pl-1 "
          >
            Our Packages are tailored to meet your unique needs—whether you’re
            looking for a streamlined solution or a feature-rich experience.
            Each package is crafted to deliver value, creativity, and
            functionality, ensuring your vision becomes reality.
          </p>
        </div>

        <div data-aos="fade-up" className=" py-12 ">
          <div
            data-aos="fade-up"
            className="Flex flex flex-wrap justify-center gap-8 "
          >
            <div className=" transform hover:-rotate-6 duration-500 ">
              <div
                data-aos="fade-up"
                className=" Card bg-packageCardBg max-w-350 rounded-xl py-6 px-8 border-2 border-packageCardBorder "
              >
                <div>
                  <span
                    data-aos="fade-up"
                    className=" text-4xl font-bold pb-4 "
                  >
                    Starter
                  </span>
                  <p
                    data-aos="fade-up"
                    className=" pb-6 text-lg text-packageText "
                  >
                    For individuals creating projects with a basic online
                    presence.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  className=" border-b border-white inline "
                >
                  <span data-aos="fade-up" className=" text-4xl font-bold ">
                    $99.99
                  </span>
                </div>
                <div data-aos="fade-up" className=" pl-5 pt-4 ">
                  <ul
                    data-aos="fade-up"
                    className="list-disc text-lg text-packageText "
                  >
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">One-Page Design:</span>{" "}
                      Clean, responsive, visually appealing design.
                    </li>
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">Code:</span>{" "}
                      Well-structured, Smooth functionality
                    </li>
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">Content:</span> Placement of
                      user-provided text and images.
                    </li>
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">Revisions :</span> Up to 1
                      revision for minor tweaks.
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-up" className=" pt-8 ">
                  <button className=" bg-packageButtonBg font-bold text-center px-6 py-2 rounded-md w-full ">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className=" transform hover:-rotate-6 duration-500 ">
              <div
                data-aos="fade-up"
                className=" Card bg-packageCardBg max-w-350 rounded-xl py-6 px-8 border-2 border-packageCardBorder "
              >
                <div>
                  <span
                    data-aos="fade-up"
                    className=" text-4xl font-bold pb-4 "
                  >
                    Business
                  </span>
                  <p
                    data-aos="fade-up"
                    className=" pb-6 text-lg text-packageText "
                  >
                    For small businesses and startups seeking professional
                    representation.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  className=" border-b border-white inline "
                >
                  <span data-aos="fade-up" className=" text-4xl font-bold ">
                    $249.99
                  </span>
                </div>
                <div data-aos="fade-up" className=" pl-5 pt-4 ">
                  <ul
                    data-aos="fade-up"
                    className="list-disc text-lg text-packageText "
                  >
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">Multi-page Design:</span> Up
                      to 5 pages (Home, About, Services, Contact etc.)
                    </li>
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">Code:</span> Responsive and
                      optimized, Well Structured
                    </li>
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">Content:</span> Guidance on
                      structuring and formatting content.
                    </li>
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">Revisions :</span>Up to 3
                      revisions for design and content.
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-up" className=" pt-8 ">
                  <button className=" bg-packageButtonBg font-bold text-center px-6 py-2 rounded-md w-full ">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className=" transform hover:-rotate-6 duration-500 ">
              <div
                data-aos="fade-up"
                className=" Card bg-packageCardBg max-w-350 rounded-xl py-6 px-8 border-2 border-packageCardBorder "
              >
                <div>
                  <span
                    data-aos="fade-up"
                    className=" text-4xl font-bold pb-4 "
                  >
                    Pro
                  </span>
                  <p
                    data-aos="fade-up"
                    className=" pb-6 text-lg text-packageText "
                  >
                    For established businesses or brands requiring premium
                    solutions.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  className=" border-b border-white inline "
                >
                  <span data-aos="fade-up" className=" text-4xl font-bold ">
                    $449.99
                  </span>
                </div>
                <div data-aos="fade-up" className=" pl-5 pt-4 ">
                  <ul
                    data-aos="fade-up"
                    className="list-disc text-lg text-packageText "
                  >
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">
                        Fully Customized Design:{" "}
                      </span>
                      Tailored design to match your brand identity.
                    </li>
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">Code:</span> Responsive
                      layouts, animations and interactivity.
                    </li>
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">Content:</span> Professional
                      arrangement of provided content.
                    </li>
                    <li data-aos="fade-up">
                      {" "}
                      <span className=" font-bold ">Revisions :</span>Up to 5
                      revisions for perfection.
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-up" className=" pt-8 ">
                  <button className=" bg-packageButtonBg font-bold text-center px-6 py-2 rounded-md w-full ">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagesComp;

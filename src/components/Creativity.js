import React, {useState} from "react";

const Creativity = () => {

  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>

{/* Modal for Image Pop-up */}
{modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal} // Close modal on clicking outside the image
        >
          <div
            className="max-w-[1000px] max-h-[800px]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on modal content
          >
            {/* Close Button */}
            <button
                className="absolute top-8 right-3 bg-red-500 text-white px-3 py-1 rounded"
                onClick={closeModal}
              >
                Close
              </button>

            {/* Image */}
            <img
              src={modalImage}
              alt="Popup view"
              className="rounded-lg max-w-full max-h-screen"
            />
          </div>
        </div>
      )}

      {/* Section for Showcasing Some sample Works  */}
      <section className=" pt-12 px-8 ">
        {/* Heading Container */}
        <div data-aos="fade-up" className="max-w-thousand mx-auto">
          <h2
            data-aos="fade-up"
            className="max-w-8H mx-auto px-6 text-center font-bold text-3xl md:text-5xl pb-4"
          >
            Our Creativity
          </h2>
          <p className=" max-w-8H mx-auto md:text-center text-lg pb-12 pl-1 ">
            Our Creativity showcases the depth and diversity of our work—each
            project crafted with precision, passion, and a focus on excellence.
            From innovative designs to seamless functionality, explore the
            creativity that drives our commitment to bringing ideas to life
          </p>
        </div>

        <div>
        <h2
            data-aos="fade-up"
            className="max-w-8H mx-auto px-6 text-center font-bold text-2xl md:text-3xl pb-4"
          >
            Web solutions
          </h2>
        </div>

        {/* Container to Showcase some example work  */}

        <div
          data-aos="fade-up"
          className=" py-12 flex flex-wrap justify-center gap-x-16 gap-y-12 "
        >
          <div
            data-aos="fade-up"
            className="Card max-w-500 bg-gradient-to-r from-sampleCGBgStart to-sampleCGBgEnd overflow-hidden p-1 rounded-2xl border-4 border-sampleCardBorder"
          >
            <div data-aos="fade-up"  className="relative group cursor-pointer"
              onClick={() => openModal("/assets/shopEase.png")}>
              <img
                className=" h-sImageH object-cover rounded-xl"
                src="/assets/shopEase.png"
                width={480}
                alt=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  Shop Ease
                </span>
              </div>
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div className="pt-10 pl-2">
                <p className=" italic font-light text-xl">Shop Ease</p>
              </div>
              <div className="pt-1 px-2 flex justify-between items-center ">
                <p className=" italic font-light text-xl">
                  Business / Shopping
                </p>
                <a href="https://shop-ease-chi-sandy.vercel.app/" target="_blank" rel="noreferrer">
                  <img src="/assets/linkArrow.svg" width={30} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="Card max-w-500 bg-gradient-to-r from-sampleCGBgStart to-sampleCGBgEnd overflow-hidden p-1 rounded-2xl border-4 border-sampleCardBorder"
          >
            <div data-aos="fade-up" className="relative group cursor-pointer"
              onClick={() => openModal("/assets/techVibe.png")}>
              <img
                className=" h-sImageH object-cover rounded-xl"
                src="/assets/techVibe.png"
                width={480}
                alt=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  Tech Vibe
                </span>
              </div>
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div className="pt-10 pl-2">
                <p className=" italic font-light text-xl">Tech Vibe</p>
              </div>
              <div className="pt-1 px-2 flex justify-between items-center ">
                <p className=" italic font-light text-xl">
                  Business / Tech
                </p>
                <a href="https://techvibe.vercel.app/" target="_blank" rel="noreferrer">
                  <img src="/assets/linkArrow.svg" width={30} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="Card max-w-500 bg-gradient-to-r from-sampleCGBgStart to-sampleCGBgEnd overflow-hidden p-1 rounded-2xl border-4 border-sampleCardBorder max-h-435 "
          >
            <div data-aos="fade-up" className="relative group cursor-pointer"
              onClick={() => openModal("/assets/velocityDrive.png")}>
              <img
                className=" h-sImageH object-cover rounded-xl"
                src="/assets/velocityDrive.png"
                width={480}
                alt=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  Velocity Drive
                </span>
              </div>
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div className="pt-10 pl-2">
                <p className=" italic font-light text-xl">Velocity Drive</p>
              </div>
              <div className="pt-1 px-2 flex justify-between items-center ">
                <p className=" italic font-light text-xl">
                  Business / Shopping
                </p>
                <a href="https://velocitydrive-nine.vercel.app/" target="_blank" rel="noreferrer">
                  <img src="/assets/linkArrow.svg" width={30} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="Card max-w-500 bg-gradient-to-r from-sampleCGBgStart to-sampleCGBgEnd overflow-hidden p-1 rounded-2xl border-4 border-sampleCardBorder max-h-435 "
          >
            <div data-aos="fade-up" className="relative group cursor-pointer"
              onClick={() => openModal("/assets/foodDelight.png")}>
              <img
                className=" h-sImageH object-cover rounded-xl"
                src="/assets/foodDelight.png"
                width={480}
                alt=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  Food Delight
                </span>
              </div>
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div className="pt-10 pl-2">
                <p className=" italic font-light text-xl">Food Delight</p>
              </div>
              <div className="pt-1 px-2 flex justify-between items-center ">
                <p className=" italic font-light text-xl">
                  Business / Food
                </p>
                <a
                  href="https://fooddelight-pi.vercel.app/"
                  target="_blank" rel="noreferrer"
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

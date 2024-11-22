import React, { useState } from "react";

const SaadCreativity = () => {
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
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
    onClick={closeModal}
  >
    <div className=" max-w-full max-h-full">
      {/* Close Button */}
      <button
        className=" absolute top-4 right-4 text-white text-4xl font-bold"
        onClick={closeModal}
      >
        &times;
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


      <section>
        <div>
          <h2
            data-aos="fade-up"
            className="max-w-8H mx-auto px-6 text-center font-bold text-2xl md:text-3xl pb-4"
          >
            Design Creativity
          </h2>
        </div>

        {/* Container to Showcase some example work */}
        <div
          data-aos="fade-up"
          className=" py-12 flex flex-wrap justify-center gap-x-16 gap-y-12"
        >
          <div
            data-aos="fade-up"
            className="Card max-w-500 bg-gradient-to-r from-sampleCGBgStart to-sampleCGBgEnd overflow-hidden p-1 rounded-2xl border-4 border-sampleCardBorder"
          >
            <div data-aos="fade-up">
              <img
                className=" hover:scale-105 transition duration-500 h-sImageH object-fill rounded-xl cursor-pointer"
                src="/assets/sample1.png"
                width={480}
                alt="Sample 1"
                onClick={() => openModal("/assets/sample1.png")} // Open modal on click
              />
            </div>
            <div data-aos="fade-up" className="pt-2">
              <div className="pt-10 pl-2">
                <p className="italic font-light text-xl">Shop Ease</p>
              </div>
              <div className="pt-1 px-2 flex justify-between items-center">
                <p className="italic font-light text-xl">
                  Business / Shopping
                </p>
                <a
                  href="https://shop-ease-plum.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
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

export default SaadCreativity;

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
          onClick={closeModal} // Close modal on clicking outside the image
        >
          <div
            className="max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on modal content
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold"
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
            className="py-12 flex flex-wrap justify-center gap-x-16 gap-y-12 px-8 "
          >
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              className="Card max-w-500 bg-gradient-to-r from-sampleCGBgStart to-sampleCGBgEnd overflow-hidden p-1 rounded-2xl"
            >
              <div
                className="relative group cursor-pointer"
                onClick={() => openModal("/assets/sample1.png")}
              >
                <img
                  className="transition duration-500 h-[480px] object-fill rounded-xl"
                  src="/assets/sample1.png"
                  width={480}
                  alt="Sample 1"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    Gym poster
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              className="Card max-w-500 bg-gradient-to-r from-sampleCGBgStart to-sampleCGBgEnd overflow-hidden p-1 rounded-2xl"
            >
              <div
                className="relative group cursor-pointer"
                onClick={() => openModal("/assets/sample2.png")}
              >
                <img
                  className="transition duration-500 h-[480px] object-fill rounded-xl"
                  src="/assets/sample2.png"
                  width={480}
                  alt="Sample 2"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    Shoe poster
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              className="Card max-w-500 bg-gradient-to-r from-sampleCGBgStart to-sampleCGBgEnd overflow-hidden p-1 rounded-2xl"
            >
              <div
                className="relative group cursor-pointer"
                onClick={() => openModal("/assets/sample3.png")}
              >
                <img
                  className="transition duration-500 h-[480px] object-fill rounded-xl"
                  src="/assets/sample3.png"
                  width={480}
                  alt="Sample 3"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    Food poster
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              data-aos="fade-up"
              className="Card max-w-500 bg-gradient-to-r from-sampleCGBgStart to-sampleCGBgEnd overflow-hidden p-1 rounded-2xl"
            >
              <div
                className="relative group cursor-pointer"
                onClick={() => openModal("/assets/sample4.png")}
              >
                <img
                  className="transition duration-500 h-[480px] object-fill rounded-xl"
                  src="/assets/sample4.png"
                  width={480}
                  alt="Sample 4"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    Air pods poster
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center w-full ">
            <button className="mt-2 px-6 py-2 w-1/2 md:w-1/4 bg-buttonBg text-white rounded-lg hover:bg-buttonHBg transition duration-500 ">
              <a href="https://wa.me/+923069005537" target="_blank" rel="noreferrer" >
                Hire designer!
              </a>
            </button>
          </div>
          </div>
      </section>
    </>
  );
};

export default SaadCreativity;

import React, { useEffect, useState } from "react";
import AOS from "aos";

const Bio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showBio, setShowBio] = useState({
    sudais: false,
    saad: false,
  });

  const [modalImage, setModalImage] = useState(null);

  const handleToggleBio = (name) => {
    setShowBio((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Enlarged view"
            className="rounded-lg max-w-96 max-h-96"
          />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
        </div>
      )}

      <section data-aos="fade-up" className="">
      

        <div data-aos="fade-up" className="max-w-[1000px] mx-auto ">
          <h2
            data-aos="fade-up"
            className="max-w-[800px] mx-auto px-6 text-center font-bold text-3xl md:text-5xl pb-6 md:pb-12"
          >
            Who We Are?
          </h2>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-8 py-12 px-4"
        >
          {/* Biography for Muhammad Sudais */}
          <div
            data-aos="fade-up"
            className={`relative py-12 px-6 border-2 border-[#cd52e3] rounded-2xl min-w-[340px] max-w-[340px] bg-gradient-to-br from-[#7e6c9b] to-[#534072] transition-all duration-500 overflow-hidden ${
              showBio.sudais ? "max-h-full" : "max-h-[480px]"
            } flex-shrink-0`}
          >
            <div data-aos="fade-up" className="flex justify-center items-center">
              <img
                className="rounded-full border-2 border-white "
                src="/assets/front end developer.png"
                width={150}
                alt="Image of Muhammad Sudais"
                onClick={() => openModal("/assets/front end developer.png")}
              />
            </div>
            <div data-aos="fade-up ">
              <span data-aos ="fade-up" className="name flex justify-center items-center text-center pt-4 pb-1 text-2xl">
                Muhammad Sudais
              </span>
            </div>
            <div data-aos="fade-up">
              <span className="flex justify-center items-center text-center text-xl">
                Experienced Front end developer
              </span>
            </div>
            <div data-aos="fade-up" className="flex justify-center items-center pt-4">
              <button
                onClick={() => handleToggleBio("sudais")}
                className="btn1 transition ease-in duration-500"
              >
                {showBio.sudais ? "Hide bio" : "See full bio"}
              </button>
            </div>
            {showBio.sudais && (
              <div data-aos="fade-up" className=" bio py-4 text-center ">
                an experienced web developer with a passion for turning ideas into interactive, high-performing websites. Skilled front-end coding, I specialize in creating responsive, scalable web solutions that enhance user experience and meet business goals. From dynamic features to seamless functionality, I bring expertise and dedication to every project. Let’s build something exceptional together—explore my work or reach out to discuss your vision!.
              </div>
            )}
          </div>

          {/* Biography for Muhammad Saad */}
          <div
            data-aos="fade-up"
            className={`relative pt-12 px-6 border-2 border-[#cd52e3] rounded-2xl min-w-[340px] max-w-[340px] bg-gradient-to-br from-[#7e6c9b] to-[#534072] transition-all duration-500 overflow-hidden ${
              showBio.saad ? "max-h-full" : "max-h-[480px]"
            } flex-shrink-0 `}
          >
            <div data-aos="fade-up" className="flex justify-center items-center">
              <img
                className="rounded-full border-2 border-white "
                src="/assets/graphic designer.png"
                width={150}
                alt="Image of Muhammad Saad"
                onClick={() => openModal("/assets/graphic designer.png")}
              />
            </div>
            <span
              data-aos="fade-up"
              className="name flex justify-center items-center text-center pt-4 pb-1 text-2xl"
            >
              Muhammad Saad
            </span>
            <span
              data-aos="fade-up"
              className="flex justify-center items-center text-center text-xl"
            >
              Experienced Graphic Designer
            </span>
            <div data-aos="fade-up" className="flex justify-center items-center pt-4">
              <button
                onClick={() => handleToggleBio("saad")}
                className="btn1 transition ease-in duration-500"
              >
                {showBio.saad ? "Hide bio" : "See full bio"}
              </button>
            </div>
            {showBio.saad && (
              <div data-aos="fade-up" className=" bio py-4 text-center ">
                a graphic designer with over a year of experience specializing in UI and UX design. I’m passionate about creating visually compelling, user-focused digital experiences that bring brands to life. With a keen eye for detail and a deep understanding of user behavior, I design with purpose, ensuring every interaction is impactful and seamless. Let’s create something remarkable together—explore my portfolio or get in touch to discuss your next project.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;

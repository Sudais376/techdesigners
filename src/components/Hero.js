import React from "react";

const Hero = () => {
  return (
    <>
      <section className=" py-14 px-6 md:p-24">
        {/* Hero Section, Hero text and Image. */}

        <div className="flex flex-wrap-reverse justify-center gap-8">
          {/* Hero text Container  */}
          <div className="">
            <p className=" inline-block text-[#dd45da] border-b border-[#dd45da] pb-1 text-xl md:text-2xl ">
              Our Design Talks!
            </p>
            <span className="block text-3xl md:text-5xl lg:text-7xl font-semibold max-w-[600px] py-4">
              Bring Your Jouney To <span>&rarr;</span> Next Level
            </span>
          </div>
          <div>
            <img
              className="rounded-b-[80px] rounded-t-xl shadow-custom"
              src="/assets/heroImage.png"
              width={400}
              alt="Hero"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

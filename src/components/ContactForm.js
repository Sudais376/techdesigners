import React from "react";

const ContactForm = () => {
  return (
    <>
      <div
        className="w-[80vw] mx-auto bg-gradient-to-r from-[#806d9a] to-[#493763] pt-24 pb-12 px-8 text-white flex flex-col gap-5 rounded-[40px] border-2 border-transparent bg-clip-border 
      shadow-[inset_0_0_0_2px_#e81cff,inset_0_0_0_2px_#40c9ff]"
      >
        <form data-aos ="fade-up"  className="flex flex-col gap-5">
          {/* Name Input */}
          <div data-aos ="fade-up"  className="flex flex-col gap-1">
            
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
               data-aos ="fade-up" className="w-full p-3 rounded-lg text-lg text-white bg-[#493763] border border-[#857898] 
              placeholder:opacity-50 focus:outline-none focus:border-[#e81cff]"
            />
          </div>
          {/* Email Input */}
          <div data-aos ="fade-up"  className="flex flex-col gap-1">
            
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email / Phone number"
              required
               data-aos ="fade-up" className="w-full p-3 rounded-lg text-lg text-white bg-[#493763] border border-[#857898] 
              placeholder:opacity-50 focus:outline-none focus:border-[#e81cff]"
            />
          </div>

          {/* Textarea */}
          <div data-aos ="fade-up"  className="flex flex-col gap-1">
            <label
              htmlFor="textarea"
               data-aos ="fade-up" className="text-white font-semibold text-lg"
            >
              How Can We Help You?
            </label>
            <textarea
              id="textarea"
              name="textarea"
              rows="5"
              required
               data-aos ="fade-up" className="w-full p-3 rounded-lg text-white bg-[#493763] border border-[#414141] 
              focus:outline-none focus:border-[#e81cff] resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div data-aos ="fade-up">
          <button
                className=" w-full btn1 !px-0 !m-0 transition ease-in duration-500"
              >
                Send message
              </button>
              </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

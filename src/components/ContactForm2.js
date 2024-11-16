import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Thanks from "../components/Thanks";

const ContactForm2 = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const form = useRef(); // Create a ref to reference the form

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    // Send the form data to EmailJS
    emailjs
      .sendForm(
        "service_50tdzi5", // Service ID
        "template_vpnfnpd", // Template ID
        form.current, // Form reference
        "P9j1a2QBj29rT3pQE" // Public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text);
          form.current.reset(); // Reset the form after submission
          showPopup(); // Show the popup only after successful submission
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <>
      <div className="w-full max-w-[500px] mx-auto bg-gradient-to-r from-[#806d9a] to-[#493763] py-6 px-8 text-white flex flex-col gap-5 rounded-[20px] border-2 border-transparent bg-clip-border shadow-[inset_0_0_0_2px_#e81cff,inset_0_0_0_2px_#40c9ff]">
        {/* Attach the form reference */}
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <span>
              Please feel free to describe what you need, We will reach you out
              and try to solve your problem.
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 rounded-lg text-lg text-white bg-[#493763] border border-[#857898] placeholder:opacity-50 focus:outline-none focus:border-[#e81cff]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email / Phone number"
              required
              className="w-full p-3 rounded-lg text-lg text-white bg-[#493763] border border-[#857898] placeholder:opacity-50 focus:outline-none focus:border-[#e81cff]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="textarea"
              className="text-white font-semibold text-lg"
            >
              How Can We Help You?
            </label>
            <textarea
              id="textarea"
              name="textarea"
              rows="5"
              required
              className="w-full p-3 rounded-lg text-white bg-[#493763] border border-[#414141] focus:outline-none focus:border-[#e81cff] resize-none"
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-full btn1 px-4 py-2 bg-[#e81cff] text-white font-bold rounded-lg hover:bg-[#40c9ff] transition-all ease-in-out duration-500"
            >
              Send message
            </button>
          </div>
        </form>
      </div>

      {/* Thanks Popup */}
      {isPopupVisible && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={hidePopup} // Close popup on overlay click
        >
          <div
            className=" bg-gradient-to-r from-[#302e69] to-[#35154b] p-6 rounded-lg shadow-lg w-[90%] max-w-[500px]"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation
          >
            <Thanks /> {/* Render the Thanks component */}
            <button
              onClick={hidePopup} // Close popup on button click
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm2;

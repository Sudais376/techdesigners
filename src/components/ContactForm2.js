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
        <form
          ref={form}
          onSubmit={handleSubmit} // Form submission handler
          data-aos ="fade-up" className="flex flex-col gap-5"
        >
          <div data-aos ="fade-up" className="flex flex-col gap-1">
            <input
              type="text"
              id="from_name"
              name="from_name" // This will match the template variable {{from_name}}
              placeholder="Name"
              required
              data-aos ="fade-up" className="w-full p-3 rounded-lg text-lg text-white bg-[#493763] border border-[#857898] placeholder:opacity-50 focus:outline-none focus:border-[#e81cff]"
            />
          </div>
          <div data-aos ="fade-up" className="flex flex-col gap-1">
            <input
              type="email"
              id="from_email"
              name="from_email" // This will match the template variable {{from_email}}
              placeholder="Email"
              required
              data-aos ="fade-up" className="w-full p-3 rounded-lg text-lg text-white bg-[#493763] border border-[#857898] placeholder:opacity-50 focus:outline-none focus:border-[#e81cff]"
            />
          </div>
          <div data-aos ="fade-up" className="flex flex-col gap-1">
            <label
              htmlFor="message"
              data-aos ="fade-up" className="text-white font-semibold text-lg"
            >
              How Can We Help You?
            </label>
            <textarea
              id="message"
              name="message" // This will match the template variable {{message}}
              rows="5"
              required
              data-aos ="fade-up" className="w-full p-3 rounded-lg text-white bg-[#493763] border border-[#414141] focus:outline-none focus:border-[#e81cff] resize-none"
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-[40vw] btn1 !px-0 !m-0 transition ease-in duration-500"
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
            className=" flex flex-col justify-center items-center bg-gradient-to-r from-[#302e69] to-[#35154b] p-6 rounded-lg shadow-lg w-[90%] max-w-[500px]"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation
          >
            <Thanks /> {/* Render the Thanks component */}
            <div className=" max-w-[150px] mx-auto ">
            <button
              onClick={hidePopup} // Close popup on button click
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm2;

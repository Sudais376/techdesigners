const ContactForm = () => {
  const handleSendMessage = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const contact = document.getElementById("email").value;
    const message = document.getElementById("textarea").value;

    const whatsappMessage = `https://wa.me/923335101246?text=Hello!%0A%0AMy%20Name:%20${encodeURIComponent(
      name
    )}%0AContact:%20${encodeURIComponent(
      contact
    )}%0A%0AHow%20Can%20We%20Help%20You:%20${encodeURIComponent(message)}`;

    window.open(whatsappMessage, "_blank");
  };

  return (
    <div className="w-[80vw] mx-auto bg-gradient-to-r from-[#806d9a] to-[#493763] pt-24 pb-12 px-8 text-white flex flex-col gap-5 rounded-[40px] border-2 border-transparent bg-clip-border shadow-[inset_0_0_0_2px_#e81cff,inset_0_0_0_2px_#40c9ff]">
      <form
        onSubmit={handleSendMessage}
        className="flex flex-col gap-5"
      >
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
            className="w-[40vw] btn1 !px-0 !m-0 transition ease-in duration-500"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

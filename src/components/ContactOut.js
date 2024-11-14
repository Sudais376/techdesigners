import React from 'react'
import ContactForm from './ContactForm'

const ContactOut = () => {
  return (
    <>
    {/* Section for Contact  */}
    <section data-aos ="fade-up" className=" py-12 px-6 ">
        {/* Heading Container */}
        <div data-aos="fade-up" className="max-w-[1000px] mx-auto">
          <h2
            data-aos="fade-up"
            className="max-w-[800px] mx-auto px-6 text-center font-bold text-3xl md:text-5xl pb-4"
          >
            Contact Out
          </h2>
          <p data-aos ="fade-up" className=" max-w-[800px] mx-auto md:text-center text-lg pb-12 ">
          Ready to bring your ideas to life? Get in touch with us! We’re here to discuss your vision,
          answer any questions, and explore how we can work together to create something exceptional
          </p>
        </div>

        <ContactForm />
        </section>
    </>
  )
}

export default ContactOut

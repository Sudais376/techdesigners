import React from 'react'
import ContactForm from './ContactForm'

const ContactOut = () => {
  return (
    <>
    {/* Section for Contact  */}
    <section data-aos ="fade-up" className=" py-12 px-8 ">
        {/* Heading Container */}
        <div data-aos="fade-up" className="max-w-thousand mx-auto">
          <h2
            data-aos="fade-up"
            className="max-w-8H mx-auto px-6 text-center font-bold text-3xl md:text-5xl pb-4"
          >
            Contact Out
          </h2>
          <p data-aos ="fade-up" className=" max-w-8H mx-auto md:text-center text-lg pb-12 pl-1 ">
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

import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ContactOut from '../components/ContactOut'

const Contact = () => {

  useEffect (() => {
    window.scrollTo (0,0);
  }, []);

  return (
    <>
    <Helmet>
        <title> Contact Us | Tech Designers </title>
    </Helmet>
    
    <ContactOut />
    </>
  )
}

export default Contact

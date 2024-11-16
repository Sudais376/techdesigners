import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ServicesComp from '../components/ServicesComp';

const Services = () => {

  useEffect (() => {
    window.scrollTo (0,0);
  }, []);

  return (
   <>
   <Helmet>
    <title> Services | We Design </title>
   </Helmet>

   <ServicesComp />
   </>
  )
}

export default Services

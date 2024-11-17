import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AboutComponent from '../components/AboutComp';

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Helmet>
        <title> About Us | We Design </title>
      </Helmet>
      <AboutComponent />
    </>
  );
};

export default About;

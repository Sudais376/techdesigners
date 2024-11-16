import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Creativity from '../components/Creativity'

const Portfolio = () => {

  useEffect (() => {
    window.scrollTo (0,0);
  }, []);
  
  return (
    <>
    <Helmet>
        <title> Portfolio | We Design </title>
    </Helmet>
    
    <Creativity />
    </>
  )
}

export default Portfolio

import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import PackagesComp from '../components/PackagesComp';

const Packages = () => {

  useEffect (() => {
    window.scrollTo (0,0);
  }, []);

  return (
    <>
    <Helmet>
        <title> Packages | Tech Designers </title>
    </Helmet>
    
    <PackagesComp />
    </>
  )
}

export default Packages

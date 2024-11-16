import React from 'react'

const Thanks = () => {
  return (
    <>
    <div className=' flex flex-col justify-center items-center '>
      <div className=' flex flex-col justify-center items-center '>
        <img src="/assets/success.svg" width={50} alt="" />
        <span className=' py-4 text-2xl '>Thanks</span>
      </div>
      <div className=' text-center '>
        <span className=' text-center '>Your message was submitted successfully, We will get back to you soon.</span>
      </div>

    </div>
    </>
  )
}

export default Thanks

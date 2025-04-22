import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";

const Form = () => {
  return (
    <div className=' bg-white w-[50%] mx-auto p-10 grid gap-0.5 mt-20 mb-10 shadow-2xl shadow-purple-300 rounded-xl'>
      <h1 className=' text-[42px] font-[700] text-[#14161b]'>REQUEST FREE ASSISTANCE</h1>
      <p className=' text=[18px] font-[400] text-[#616161] mb-0.5'>Send us yours message</p>
      <div className=' border-1 h-12 text-[14px] font-bold flex items-center px-3 border-gray-300'>
        <p>Your Full Name</p>
      </div>
      <div className=' border-1 h-12 text-[14px] font-bold flex items-center px-3 border-gray-300'>
        <p>Email Address</p>
      </div>
      <div className=' border-1 h-18 text-[14px] font-bold flex place-items-start pt-3 px-3 border-gray-300'>
        <p>Write Message</p>
      </div>
      <button className=' w-[max-content] flex items-center justify-center gap-2 bg-blue-600 py-2 px-5 rounded-3xl text-white font-medium'>
              <FaTelegramPlane color='#fff'/>
              <p>Send Message</p>
              </button>
    </div>
  )
}

export default Form
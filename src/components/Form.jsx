import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";

const Form = () => {
  return (
    <form className=' bg-white w-[95%] mx-auto p-10 grid gap-0.5 mt-20 mb-10 shadow-2xl shadow-purple-300 rounded-xl'>
      <h1 className=' text-[42px] font-[700] text-[#14161b]'>REQUEST FREE ASSISTANCE</h1>
      <p className=' text=[18px] font-[400] text-[#616161] mb-0.5'>Send us yours message</p>
        <input className=' border-1 h-12 text-[14px] font-bold flex items-center px-3 border-gray-300' type="text" placeholder='Your Full Name'/>
        <input className=' border-1 h-12 text-[14px] font-bold flex items-center px-3 border-gray-300' type="mail" placeholder='Email Address'/>

      <textarea name="message" id="" placeholder='Write Message' className='border-1 border-1 h-12 text-[14px] font-bold flex items-center px-3 border-gray-300 h-22 py-3 mb-5'></textarea>
      <button className=' w-[max-content] flex items-center justify-center gap-2 bg-blue-600 py-2 px-5 rounded-3xl text-white font-medium'>
              <FaTelegramPlane color='#fff'/>
              <p>Send Message</p>
              </button>
    </form>
  )
}

export default Form
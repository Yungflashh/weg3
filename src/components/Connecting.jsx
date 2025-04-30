
import React from 'react'
import aiGif from "../assets/AI-loading-page.gif"
const Connecting = () => {
  return (
    <div className=' bg-black h-[100vh]'>
      <div></div>
      <div className=' flex flex-col justify-center items-center text-white'>
        <img className=' w-[470px]' src={aiGif} alt="" />
        <h1 className=' text-3xl'>Connecting....</h1>
      </div>
    </div>
  )
}

export default Connecting
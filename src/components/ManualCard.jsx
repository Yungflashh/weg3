import React from 'react'
import Manual from '../pages/Manual'

const ManualCard = ({manual_icon,manual_text,clickMe}) => {
  return (
    <div className=' flex flex-col items-center gap-2 cursor-pointer mb-2' >
      <img className=' rounded-[50%] w-[60px] sm:w-[65px] lg:w-[75px]' src={manual_icon} alt="" onClick={clickMe}/>
      <p className=' font-bold text-[12px] w-[80%] text-center mx-auto'>{manual_text}</p>
    </div>
  )
}

export default ManualCard
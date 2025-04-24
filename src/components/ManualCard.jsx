import React from 'react'
import Manual from '../pages/Manual'

const ManualCard = ({manual_icon,manual_text}) => {
  return (
    <div className=' flex flex-col items-center gap-1 cursor-pointer'>
      <img className=' rounded-[50%] w-[80px]' src={manual_icon} alt="" />
      <p className=' font-bold text-[12px] w-[60%] text-center mx-auto'>{manual_text}</p>
    </div>
  )
}

export default ManualCard
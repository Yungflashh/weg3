import React from 'react'
import { Link } from 'react-router-dom'
import Modal_two from './Modal_two'
const Card = ({icon_image,text,btn_icon,btn_text}) => {
  return (
    <div className='flex gap-8 items-center justify-self-start'>
        <img className=' w-[70px] h-[70px]' src={icon_image} alt="" />
        <div className=' grid gap-2'>
            <p className=' text-[18px] font-[600] text-gray-700'>{text}</p>
            <Link to={'modal_two'}>
            <button className=' w-[max-content] flex items-center justify-center gap-2 bg-gradient-to-r from-[#85e1ff] to-[#0374fd] py-2 px-5 rounded-3xl text-white font-medium hover:'>
              {btn_icon} {btn_text}
              </button>
              </Link>
        </div>
    </div>
  )
}

export default Card
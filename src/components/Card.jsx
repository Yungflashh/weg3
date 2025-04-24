import React from 'react'

const Card = ({icon_image,text,btn_icon,btn_text}) => {
  return (
    <div className='flex gap-2 items-center'>
        <img className=' w-[90px] h-[90px]' src={icon_image} alt="" />
        <div className='grid gap-4'>
            <p className=' text-[18px] font-[700]'>{text}</p>
            <button className=' w-[max-content] flex items-center justify-center gap-2 bg-gradient-to-r from-[#85C0FF] to-[#034afd] py-2 px-5 rounded-3xl text-white font-medium hover:'>
              {btn_icon} {btn_text}
              </button>
        </div>
    </div>
  )
}

export default Card
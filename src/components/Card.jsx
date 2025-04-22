import React from 'react'

const Card = ({icon_image,text,button_content}) => {
  return (
    <div className='flex gap-2'>
        <img src={icon_image} alt="" />
        <div>
            <p>{text}</p>
            <button>{button_content}</button>
        </div>
    </div>
  )
}

export default Card
import React from 'react';

const Card = ({ icon_image, text, btn_icon, btn_text, onClick }) => {
  return (
    <div className='flex gap-8 items-center justify-self-start'>
        <img className='w-[70px] h-[70px]' src={icon_image} alt={text} />
        <div className='grid gap-2'>
            <p className='text-[18px] font-[600] text-gray-700'>{text}</p>
            <button
              onClick={onClick}  // Trigger the onClick function passed from Auth component
              className='w-[max-content] flex items-center justify-center gap-2 bg-gradient-to-r from-[#85e1ff] to-[#0374fd] py-2 px-5 rounded-3xl text-white font-medium hover:'
            >
              {btn_icon} {btn_text}
            </button>
        </div>
    </div>
  );
};

export default Card;

import React from 'react'
import Manual from '../pages/Manual'

const ManualCard = ({manual_icon,manual_text}) => {
  return (
    <div>
      <img className=' rounded-[50%] w-[80px]' src={manual_icon} alt="" />
      <p>{manual_text} Wallet</p>
    </div>
  )
}

export default ManualCard
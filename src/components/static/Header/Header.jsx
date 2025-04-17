import React from 'react'
import { PiWalletFill } from "react-icons/pi";
import wallet_logo from "../../../assets/wallet_logo.jpg"


const Header = () => {
  return (
    <div className='header-container flex justify-between p-5 '>
        <div className="logo-div">

        <button className='flex justify-center items-center border-2 border-gray-200 px-4 py-2 rounded-3xl gap-1 urbanist text-[14px]'> <PiWalletFill color='#45E8FF'/> Connect Wallet</button> 


        </div>

        <div className="logo-2-div">

          <img src={wallet_logo} alt="" className='w-38'/>

        </div>
    </div>
  )
}

export default Header
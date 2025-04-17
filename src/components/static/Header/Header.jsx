import React from 'react'
import { PiWalletFill } from "react-icons/pi";
import wallet_logo from "../../../assets/wallet_logo.jpg"


const Header = () => {
  return (
    <div className='header-container flex justify-between h-12'>
        <div className="logo-div">

         <button className='flex'> <PiWalletFill color='#45E8FF'/> Connect Wallet</button> 


        </div>

        <div className="logo-2-div">

          <img src={wallet_logo} alt="" className='w-32'/>

        </div>
    </div>
  )
}

export default Header
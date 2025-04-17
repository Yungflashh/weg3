import React from 'react'
import robot_img from "..../../../assets/robot-img.png"
import { PiWalletFill } from "react-icons/pi";

const HeroSection = () => {
return (
        <div className='flex justify-center items-center h-screen font-ubanist bg-gradient-to-r from-[#459FFF] to-[#45FCFF] '>
        <div className="robot-div w-1/3">

                <img src={robot_img} alt="a floating robot image" />
        </div>


        <div className="hero-text-div w-[57%] flex flex-col gap-8">
        <div className='text-[60px] font-ubanist font-bold -space-y-6 text-white'>
                <p className=''>Any Wallet.</p>
                <p className=''>Any Dapp.</p>
                <p className=''>Any Chain.</p>
        </div>
        <div className='w-24 text-white'>
                <p className='text-[18px] w-[480px]'>Decentralize Solution is the web3 standard to connect blockchain wallets to dapps</p>
        </div>
        <div className='flex justify-centerc items-center gap-5'>
        <button className='flex justify-center items-center bg-white px-6 py-3 rounded-3xl gap-2 font-medium'> <PiWalletFill       color='#45E8FF'/> Connect Wallet</button> 
        <button className='flex justify-center items-center bg-white px-6 py-3 rounded-3xl gap-2 font-medium'> <PiWalletFill       color='#45E8FF'/> Connect Manually</button> 
                
        </div>
        </div>
        </div>
)
}

export default HeroSection
import React from 'react'
import robot_img from "..../../../assets/robot-img.png"
import { PiWalletFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const HeroSection = () => {
return (
        <div className='flex justify-evenly  items-center h-auto p-10 font-ubanist bg-gradient-to-r from-[#459FFF] to-[#45FCFF]'>
        <div className="robot-div w-1/3 mt-5 hidden md:block">

        <img src={robot_img} className='floating-robot' alt="a floating robot image" />
        
        </div>


        <div className="hero-text-div flex flex-col gap-5 md:gap-8 w-[400px]">
        <div className='text-[60px] md:text-[70px] font-ubanist font-bold -space-y-6 text-white'>
                <p className=''>Any Wallet.</p>
                <p className=''>Any Dapp.</p>
                <p className=''>Any Chain.</p>
        </div>
        <div className=' text-white'>
                <p className='text-[17px] md:text-[18px] w-full'>Decentralize Solution is the web3 standard to connect blockchain wallets to dapps</p>
        </div>
        <div className='grid md:flex justify-center items-center gap-5'>
       
        <button className=' font-bold flex justify-center items-center bg-white px-6 py-3 rounded-3xl gap-2 sm:px-4 sm:text-[15px] sm:gap-2 lg:hover:bg-black lg:hover:text-white transition-colors duration-600'> <PiWalletFill       color='#45E8FF'/> Connect Wallet</button> 
        </Link>
        <Link to={"manual"}>
        <button className='font-bold flex justify-center items-center bg-white px-6 py-3 rounded-3xl gap-2 sm:px-4 sm:text-[15px] sm:gap-2 lg:hover:bg-black lg:hover:text-white transition-colors duration-600'> <PiWalletFill       color='#45E8FF'/> Connect Manually</button>
        </Link>   
                
        </div>
        </div>
        </div>
)
}

export default HeroSection
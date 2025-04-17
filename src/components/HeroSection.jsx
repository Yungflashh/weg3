import React from 'react'
import robot_img from "..../../../assets/robot-img.png"

const HeroSection = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className="robot-div">

            <img src={robot_img} alt="a floating robot image" />
        </div>


        <div className="hero-text-div ">
                <p className='text-7xl'>Any Wallet</p>
                <p className='text-7xl'>Any Dapp</p>
                <p className='text-7xl'>Any Chain</p>

                <p className='text-[32px] w-[650px]'>Decentralize Solution is the web3 standard to connect blockchain wallets to dapps</p>
                <button>Connect Wallet</button>
                <button>Connect Manually</button>

        </div>
    </div>
  )
}

export default HeroSection
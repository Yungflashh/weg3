
import React from 'react'
import connect from "../assets/modal-2 icons/connect.webp"
import meta from "../assets/modal-2 icons/meta.webp"
import trust from "../assets/modal-2 icons/trust.webp"
import uniswap from "../assets/modal-2 icons/uniswap.webp"
import { PiDotsNineBold } from "react-icons/pi";
import { FaRegQuestionCircle } from "react-icons/fa";
const Modal_two = () => {
  return (
    <section className=' flex justify-center items-center h-[100vh]'>
    <div className=' bg-white w-[370px] h-[480px] mx-auto rounded-[30px] py-6 px-5 font-bold gap-4 grid' >
      <div className=' flex justify-between items-center px-4 mb-5'>
      <div><FaRegQuestionCircle/></div>
        <h1>Connect Wallet</h1>
        <p>X</p>
        </div>
        <div className=' grid gap-4'>
          <div className=' flex items-center justify-between bg-[#FAFAFA] px-2 py-1.5 rounded-[15px] '>
            <div className=' flex items-center gap-2'>
            <img className=' w-11 rounded-[10px]' src={connect} alt="" />

            <h1>WalletConnect</h1>
            </div>
            <div className=' text-[10px] bg-[#E4E8FB] text-[#667DFF] p-1 rounded-[5px]'>
              <h4>QR CODE</h4>
            </div>

          </div>
          <div className=' flex items-center gap-2 bg-[#FAFAFA] px-2 py-1.5 rounded-[15px]'>

          <img className=' w-11 rounded-[10px]'  src={meta} alt="" />

            <h1>MetaMask</h1>

          </div>
          <div className=' flex items-center gap-2 bg-[#FAFAFA] px-2 py-1.5 rounded-[15px]'>

          <img  className=' w-11 rounded-[10px]' src={trust} alt="" />

            <h1>Trust Wallet</h1>

          </div>
          <div className=' flex items-center gap-2 bg-[#FAFAFA] px-2 py-1.5 rounded-[15px]'>

          <img className=' w-11 rounded-[10px]'  src={uniswap} alt="" />

            <h1>Uniswap Wallet</h1>

          </div>
          <div>
          <div className=' flex items-center justify-between bg-[#FAFAFA] px-2 py-1.5 rounded-[15px]'>
            <div className=' flex items-center gap-2'>
            <div><PiDotsNineBold color='#667DFF' size={44}/></div>

            <h1>All Wallets</h1>
            </div>
            <div className='text-[11px] bg-[#E1E1E1] text-[#798686] p-1 rounded-[5px]'>
              <h3>430+</h3>
            </div>
            </div>

          </div>
        </div>
      
        <h3 className=' text-center text-[13px] text-[#798686]'>Haven't got a wallet? <span className=' text-[14px] text-[#667DFF]'>Get started</span></h3>
      
    </div>
    </section>
  )
}

export default Modal_two
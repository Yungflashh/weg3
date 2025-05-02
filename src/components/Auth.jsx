import React, { useState, useEffect } from 'react';
import Card from './Card';
import migrationImg from "../assets/migration.jpg";
import buyingImg from "../assets/buying.jpg";
import claimImg from "../assets/claim.jpg";
import recoveryImg from "../assets/recovery.jpg";
import stackingImg from "../assets/stacking.jpg";
import { FaTelegramPlane } from "react-icons/fa";
import Modal_two from './Modal_two';

const Auth = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCardButtonClick = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [showModal]);

  return (
    <>
      {showModal && <Modal_two closeModal={closeModal} />}
      <div className='py-18 px-5 text-justify bg-[#FFFFFF] rounded-3xl md:w-[80%] mx-auto md:px-22'>
        <h2 className='text-[42px] font-bold urbanist text-[#333]'>AUTHENTICATION</h2>
        <p className='text-[18px] text-gray-600'>
          A decentralized platform and network that blends Blockchain with DeFi, incorporating Blockchain aspects such as non-custodial management, Micropools, rapid liquidity, and decentralized governance.
          Each procedure must be completed in its entirety. The authentication of wallet will be finished as follows.
        </p>

        <section className='w-[100%] py-12 grid gap-8 sm:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12'>
          <Card icon_image={migrationImg} text={"Migration"} btn_icon={<FaTelegramPlane color='#fff' />} btn_text={"Connect"} onClick={handleCardButtonClick} />
          <Card icon_image={buyingImg} text={"Buying and Selling"} btn_icon={<FaTelegramPlane color='#fff' />} btn_text={"Connect"} onClick={handleCardButtonClick} />
          <Card icon_image={stackingImg} text={"Staking"} btn_icon={<FaTelegramPlane color='#fff' />} btn_text={"Connect"} onClick={handleCardButtonClick} />
          <Card icon_image={migrationImg} text={"Rectification"} btn_icon={<FaTelegramPlane color='#fff' />} btn_text={"Connect"} onClick={handleCardButtonClick} />
          <Card icon_image={claimImg} text={"Claim Reward"} btn_icon={<FaTelegramPlane color='#fff' />} btn_text={"Connect"} onClick={handleCardButtonClick} />
          <Card icon_image={stackingImg} text={"Unstake"} btn_icon={<FaTelegramPlane color='#fff' />} btn_text={"Connect"} onClick={handleCardButtonClick} />
          <Card icon_image={migrationImg} text={"Update Balance"} btn_icon={<FaTelegramPlane color='#fff' />} btn_text={"Connect"} onClick={handleCardButtonClick} />
          <Card icon_image={recoveryImg} text={"Recovery"} btn_icon={<FaTelegramPlane color='#fff' />} btn_text={"Connect"} onClick={handleCardButtonClick} />
        </section>
      </div>
    </>
  );
};

export default Auth;

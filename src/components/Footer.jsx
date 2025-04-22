import React from 'react'
import footerImg from "../assets/footer_img.png"

const Footer = () => {
  return (
    <div>
    <div className=' bg-[#85C0FF] flex py-16 px-10'>
      <p className=' text-[14px] text-white text-center'>
      Decentralize Solution provide users with a digital solution for securely storing and managing blockchain assets and cryptocurrencies. These wallets allow users to spend, receive, and trade cryptocurrencies. While some cryptocurrency wallets may only provide support for a single cryptocurrency, many are multi-asset solutions, allowing users to hold multiple cryptocurrencies, including Bitcoin, Bitcoin Cash, Ethereum, and Litecoin, among many others. These solutions ensure that the owner of the cryptocurrencies and blockchain assets is the only entity who can access the funds by requiring elaborate passwords and other security measures. Users can view or access cryptocurrency wallets from smartphones and computers.
      </p>
      <img className='w-[130px] h-[90px]' src={footerImg} alt="" />
    </div>
    <section className=' bg-[#14161B] text-gray-300 flex justify-center items-center py-6'>
        <p>Copyright &copy; 2022</p>
      </section>
    </div>
  )
}

export default Footer
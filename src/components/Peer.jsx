import React from 'react'
import p2p1 from "../assets/p2p-1.png"
import p2p2 from "../assets/p2p-2.webp"

const Peer = () => {
  return (
    <div className='flex justify-center w-full gap-8 mt-5 mb-5 px-4'>
        <img src={p2p1} className='w-30 h-max' alt="An image showing Peer to peers" />
        <img src={p2p2} className='w-30 h-18' alt="An image showing Peer to peers" />
    </div>
  )
}

export default Peer
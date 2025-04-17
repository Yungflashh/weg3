import React from 'react'
import p2p1 from "../assets/p2p-1.png"
import p2p2 from "../assets/p2p-2.webp"

const Peer = () => {
  return (
    <div className='flex justify-center w-full gap-8 mt-10 mb-10'>
        <img src={p2p1} className='w-80 h-42' alt="An image showing Peer to peers" />
        <img src={p2p2} className='w-80 h-42' alt="An image showing Peer to peers" />
    </div>
  )
}

export default Peer
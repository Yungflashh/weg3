import React from 'react'
import Card from './Card'
import migrationImg from "../assets/migration.jpg"

const Auth = () => {
  return (
    <div className='mr-10 ml-10 p-10 pr-22 text-justify bg-[#FFFFFF] rounded-3xl'>
        <h2 className='text-[42px] font-bold urbanist '>AUTHENTICATION</h2>
        <p className='text-[18px]'>A decentralized platform and network that blends Blockchain with DeFi, incorporating Blockchain aspects such as non-custodial management, Micropools, rapid liquidity, and decentralized governance. Each procedure must be completed in its entirety. The authentication of wallet will be finished as follows. </p>

        <section>
            <div className="row flex">
                  <Card icon_image={migrationImg}/>
            </div>
            <div className="row flex">

            </div>
            <div className="row flex">

            </div>
            <div className="row flex">

            </div>
        </section>
    </div>
  )
}


export default Auth
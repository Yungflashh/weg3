import {React,useState} from 'react'
import ManualCard from '../components/ManualCard'
import coreImg from "../assets/manualIcons/core.png"
import okzImg from "../assets/manualIcons/okx.png"
import ledgerImg from "../assets/manualIcons/ledger_logo.png"
import oneKeyImg from "../assets/manualIcons/onekey.png"
import tangemImg from "../assets/manualIcons/tangem.png"
import myTonImg from "../assets/manualIcons/MyTonWallet.jpg"
import toneImg from "../assets/manualIcons/Tonkeeperwallet.jpg"
import tonhubImg from "../assets/manualIcons/TonHubWallet.jpg"
import electrumImg from "../assets/manualIcons/Electrum.jpg"
import uniswapImg from "../assets/manualIcons/Uniswap-Logo.png"
import bestImg from "../assets/manualIcons/bestwallet.jpg"
import kaspiumImg from "../assets/manualIcons/Kaspium.jpg"
import KaswereImg from "../assets/manualIcons/Kaswere.jpg"
import walletImg from "../assets/manualIcons/wallet.png"
import trustImg from "../assets/manualIcons/trust.jpeg"
import solanaImg from "../assets/manualIcons/solana-sol-logo.png"
import solfareImg from "../assets/manualIcons/Solflarewallet.jpg"
import unisatImg from "../assets/manualIcons/unisat.jpg"
import xverseImg from "../assets/manualIcons/Xverse.jpg"
import magicImg from "../assets/manualIcons/magic_eden.png"
import leatherImg from "../assets/manualIcons/leather.svg"
import asignaImg from "../assets/manualIcons/asigna.jpg"
import metaImg from "../assets/manualIcons/metamask.jpeg"
import brdImg from "../assets/manualIcons/brd.jpg"
import coinImg from "../assets/manualIcons/Coinbaselogo.png"
import saitaImg from "../assets/manualIcons/saitama.png"
import terraImg from "../assets/manualIcons/terra.png"
import phantomImg from "../assets/manualIcons/phantom.jpeg"
import cosmosImg from "../assets/manualIcons/cosmos.png"
import exodusImg  from "../assets/manualIcons/exodus.png"
import rainbowImg  from "../assets/manualIcons/rainbow.jpeg"
import argentImg from "../assets/manualIcons/argent.jpg"
import binanceImg from "../assets/manualIcons/binance.png"
import safemoonImg from "../assets/manualIcons/safemoon.png"
import gnosisImg from "../assets/manualIcons/gnosis.png"
import defiImg from "../assets/manualIcons/defi.jpeg"
import pillarImg from "../assets/manualIcons/pillar.png"
import imtokenImg from "../assets/manualIcons/imtoken.png"
import ontoImg from "../assets/manualIcons/onto.jpeg"
import tokenImg from "../assets/manualIcons/token.jpeg"
import aaveImg from "../assets/manualIcons/aave-aave-logo.png"
import digitexImg from "../assets/manualIcons/digitex.png"
import portisImg  from "../assets/manualIcons/portis.png"
import formaticImg from "../assets/manualIcons/formatic.jpg"
import mathImg from "../assets/manualIcons/math.jpeg"
import bitpayImg from "../assets/manualIcons/bitpay.jpg"
import ledgerLiveImg  from "../assets/manualIcons/Ledger-Live-.png"
import dharmaImg from "../assets/manualIcons/dharma.png"
import eidooImg from "../assets/manualIcons/eidoo.jpg"
import mykeyImg from "../assets/manualIcons/mykey.jpg"
import trustvaultImg from "../assets/manualIcons/trustvault.png"
import atomicImg from "../assets/manualIcons/atomic.png"
import coin98Img from "../assets/manualIcons/coin98.png"
import tronImg from "../assets/manualIcons/tron-trx-logo.png"
import aliceImg from "../assets/manualIcons/alice.png"
import alphaImg from "../assets/manualIcons/alpha.jpeg"
import dcentImg from "../assets/manualIcons/dcent.png"
import zelcoreImg from "../assets/manualIcons/zelcore.png"
import coinmoniImg from "../assets/manualIcons/coinmoni.png"
import gridImg from "../assets/manualIcons/grid.png"
import cybavoImg from "../assets/manualIcons/cybavo.png"
import takebaryImg from "../assets/manualIcons/takebary.jpg"
import spatiumImg from "../assets/manualIcons/spatium.png"
import safepalImg from "../assets/manualIcons/safepal.jpeg"
import infinitoImg from "../assets/manualIcons/infinito.png"
import ownbitImg from "../assets/manualIcons/ownbit.png"
import easyImg from "../assets/manualIcons/easy.jpg"
import bridgeImg from "../assets/manualIcons/bridge.png"
import sparkImg from "../assets/manualIcons/spark.png"
import viaImg from "../assets/manualIcons/via.png"
import peakefi from "../assets/manualIcons/peakdefi.png"
import unstopImg from "../assets/manualIcons/unstop.png"
import haloImg from "../assets/manualIcons/halo.png"
import dokImg from "../assets/manualIcons/dok.png"
import midasImg from "../assets/manualIcons/midas.png"
import ellipalImg from "../assets/manualIcons/ellipal.png"
import keyringImg from "../assets/manualIcons/keyring.png"
import aktionImg from "../assets/manualIcons/aktion.jpeg"
import talkenImg from "../assets/manualIcons/talken.png"
import flare from "../assets/manualIcons/flare.png"
import paytubeImg from "../assets/manualIcons/paytube.png"
import linenImg from "../assets/manualIcons/linen.jpeg"
import logoImg from "../assets/dwallet_logo_black.jpg"
import Modal from '../components/Modal';
import { ToastContainer } from 'react-toastify';


const Manual = () => {
  // const glitch = {
  //   age: 12,
  //   gender : "Female",
  //   Dept : "Comp Sci"
  // }
  // const {david, gender, Dept} = glitch

 
  // console.log(age, gender, Dept);
  

  //  const glitch = [1,2,3,4,5]

  //  const [one, two,three, four, five] = glitch

  //  console.log(one);
   

  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleWalletClicked(walletName, walletIcon) {
    setSelectedWallet({ name: walletName, icon: walletIcon });
    setIsModalOpen(true);
  }

  return (
    <>
 
    <div className=' bg-black py-3 flex items-center justify-center'>
      <img className=' w-[160px]' src={logoImg} alt="" />
    </div>
    <section className="bg-gradient-to-r from-[#85C0FF] to-[#85DFFF] w-full h-full flex flex-col justify-center items-center">
    <div className=' my-6'>
      <h1 className='text-[44px] font-[800] text-black'>Connect Wallet</h1>
      <p className=' text-[15px] font-[500]'>Please connect your wallet to continue</p>
    </div>
    <div className="flex justify-center">
    <div className=' w-[100%]  grid grid-cols-6 gap-16 p-4 mx-auto'>
      <ManualCard manual_icon={coreImg} manual_text={'Core Golang Cli Wallet'} 
        clickMe={()=> handleWalletClicked("Core Golang Cli Wallet",coreImg)}/>
      <ManualCard manual_icon={okzImg} manual_text={'Okx Wallet'} 
        clickMe={()=> handleWalletClicked("Okx Wallet" , okzImg)}/>
      <ManualCard manual_icon={ledgerImg} manual_text={'Ledger'} 
        clickMe={()=> handleWalletClicked("Ledger" , ledgerImg)}/>
      <ManualCard manual_icon={oneKeyImg} manual_text={'OneKey Wallet'} 
        clickMe={()=> handleWalletClicked("OneKey Wallet" , oneKeyImg)}/>
      <ManualCard manual_icon={tangemImg} manual_text={'Tangem Wallet'} 
        clickMe={()=> handleWalletClicked("Tangem Wallet" , tangemImg)}/>
      <ManualCard manual_icon={myTonImg} manual_text={'MyTon Wallet'} 
        clickMe={()=> handleWalletClicked("MyTon Wallet" , myTonImg)}/>
      <ManualCard manual_icon={toneImg} manual_text={'Tonkeeper Wallet'} 
        clickMe={()=> handleWalletClicked("ToneKeeper Wallet" , toneImg)}/>
      <ManualCard manual_icon={tonhubImg} manual_text={'TonHub Wallet'} 
        clickMe={()=> handleWalletClicked("TonHub Wallet" , tonhubImg)}/>
      <ManualCard manual_icon={electrumImg} manual_text={'Electrum Wallet'} 
        clickMe={()=> handleWalletClicked("Electrum Wallet" , electrumImg)}/>
      <ManualCard manual_icon={uniswapImg} manual_text={'UNISWAP Wallet'} 
        clickMe={()=> handleWalletClicked("UNISWAP Wallet" , unisatImg)}/>
      <ManualCard manual_icon={bestImg} manual_text={'Best Wallet'} 
        clickMe={()=> handleWalletClicked("Best Wallet" , bestImg)}/>
      <ManualCard manual_icon={kaspiumImg} manual_text={'Kaspium Wallet'} 
        clickMe={()=> handleWalletClicked("Kaspium Wallet" , kaspiumImg)}/>
      <ManualCard manual_icon={KaswereImg} manual_text={'Kaswere Wallet'} 
        clickMe={()=> handleWalletClicked("Kaswere Wallet" , KaswereImg)}/>
      <ManualCard manual_icon={kaspiumImg} manual_text={'Kaspanet Web Wallet'} 
        clickMe={()=> handleWalletClicked("Kaspaner Web Wallet" , kaspiumImg)}/>
      <ManualCard manual_icon={kaspiumImg} manual_text={'Kdx Wallet'} 
        clickMe={()=> handleWalletClicked("Kdx Wallet" , kaspiumImg)}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet Connect'} 
        clickMe={()=> handleWalletClicked("Wallet Connect" , walletImg)}/>
      <ManualCard manual_icon={trustImg} manual_text={'Trust'} 
        clickMe={()=> handleWalletClicked("Trust" , trustImg)}/>
      <ManualCard manual_icon={solanaImg} manual_text={'Solana Wallet'} 
        clickMe={()=> handleWalletClicked("Solana Wallet" , solanaImg)}/>
      <ManualCard manual_icon={solfareImg} manual_text={'Solfare Wallet'}
        clickMe={()=> handleWalletClicked("Solfare Wallet" , solfareImg)}/>
      <ManualCard manual_icon={unisatImg} manual_text={'Unisat Wallet'}
        clickMe={()=> handleWalletClicked("Unisat Wallet" , unisatImg)}/>
      <ManualCard manual_icon={okzImg} manual_text={'okx Wallet'}
        clickMe={()=> handleWalletClicked("Okx Wallet" , okzImg)}/>
      <ManualCard manual_icon={xverseImg} manual_text={'Xverse Wallet'}
        clickMe={()=> handleWalletClicked("Xverse Wallet" , xverseImg)}/>
      <ManualCard manual_icon={magicImg} manual_text={'Magic Eden Wallet'}
        clickMe={()=> handleWalletClicked("Magic Eden Wallet" , magicImg)}/>
      <ManualCard manual_icon={leatherImg} manual_text={'Leather Wallet'}
        clickMe={()=> handleWalletClicked("Leather Wallet" , leatherImg)}/>
      <ManualCard manual_icon={asignaImg} manual_text={'Asigna Wallet'}
        clickMe={()=> handleWalletClicked("Asigna Wallet" , asignaImg)}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet Connect'}
        clickMe={()=> handleWalletClicked("Wallet Connect" , walletImg)}/>
      <ManualCard manual_icon={trustImg} manual_text={'Trust'}
        clickMe={()=> handleWalletClicked("Trust" , trustImg)}/>
      <ManualCard manual_icon={ledgerImg} manual_text={'Ledger'}
        clickMe={()=> handleWalletClicked("Ledger" , ledgerImg)}/>
      <ManualCard manual_icon={metaImg} manual_text={'Metamask'}
        clickMe={()=> handleWalletClicked("Metamask" , metaImg)}/>
      <ManualCard manual_icon={ledgerImg} manual_text={'Ledger'}
        clickMe={()=> handleWalletClicked("Ledger" , ledgerImg)}/>
      <ManualCard manual_icon={brdImg} manual_text={'BRD Wallet'}
        clickMe={()=> handleWalletClicked("BRD Wallet" , brdImg)}/>
      <ManualCard manual_icon={coinImg} manual_text={'Coinbase'}
        clickMe={()=> handleWalletClicked("Coinbase" , coinImg)}/>
      <ManualCard manual_icon={saitaImg} manual_text={'Saitamask Wallet'}
        clickMe={()=> handleWalletClicked("Saitamask Wallet" , saitaImg)}/>
      <ManualCard manual_icon={terraImg} manual_text={'Terra Station'}
        clickMe={()=> handleWalletClicked("Terra Station" , terraImg)}/>
      <ManualCard manual_icon={phantomImg} manual_text={'Phantom Wallet'}
        clickMe={()=> handleWalletClicked("Phantom Wallet" , phantomImg)}/>
      <ManualCard manual_icon={cosmosImg} manual_text={'Cosmos Station'}
        clickMe={()=> handleWalletClicked("Cosmos Station" , cosmosImg)}/>
      <ManualCard manual_icon={exodusImg} manual_text={'Exodus Wallet'}
        clickMe={()=> handleWalletClicked("Exodus Wallet" , exodusImg)}/>
      <ManualCard manual_icon={rainbowImg} manual_text={'Rainbow'}
        clickMe={()=> handleWalletClicked("Rainbow" , rainbowImg)}/>
      <ManualCard manual_icon={argentImg} manual_text={'Argent'}
        clickMe={()=> handleWalletClicked("Argent" , argentImg)}/>
      <ManualCard manual_icon={binanceImg} manual_text={'Binance Chain'}
        clickMe={()=> handleWalletClicked("Binance Chain" , binanceImg)}/>
      <ManualCard manual_icon={safemoonImg} manual_text={'Safemoon'}
        clickMe={()=> handleWalletClicked("Safemoon" , safemoonImg)}/>
      <ManualCard manual_icon={gnosisImg} manual_text={'Gnosis Safe'}
        clickMe={()=> handleWalletClicked("Gnosis Safe" , gnosisImg)}/>
      <ManualCard manual_icon={defiImg} manual_text={'DeFi'}
        clickMe={()=> handleWalletClicked("DeFi" , defiImg)}/>
      <ManualCard manual_icon={pillarImg} manual_text={'Pillar'}
        clickMe={()=> handleWalletClicked("Pillar" , pillarImg)}/>
      <ManualCard manual_icon={imtokenImg} manual_text={'imToken'}
        clickMe={()=> handleWalletClicked("imToken" , imtokenImg)}/>
      <ManualCard manual_icon={ontoImg} manual_text={'ONTO'}
        clickMe={()=> handleWalletClicked("ONTO" , ontoImg)}/>
      <ManualCard manual_icon={tokenImg} manual_text={'TokenPocket'}
        clickMe={()=> handleWalletClicked("TokenPocket" , tokenImg)}/>
      <ManualCard manual_icon={aaveImg} manual_text={'Aave'}
        clickMe={()=> handleWalletClicked("Aave" , aaveImg)}/>
      <ManualCard manual_icon={digitexImg} manual_text={'Digitex'}
        clickMe={()=> handleWalletClicked("Digitext" , digitexImg)}/>
      <ManualCard manual_icon={portisImg} manual_text={'Portis'}
        clickMe={()=> handleWalletClicked("Portis" , portisImg)}/>
      <ManualCard manual_icon={formaticImg} manual_text={'Formatic'}
        clickMe={()=> handleWalletClicked("Formatic" , formaticImg)}/>
      <ManualCard manual_icon={mathImg} manual_text={'MathWallet'}
        clickMe={()=> handleWalletClicked("MathWallet" , mathImg)}/>
      <ManualCard manual_icon={bitpayImg} manual_text={'BitPay'}
        clickMe={()=> handleWalletClicked("BitPay" , bitpayImg)}/>
      <ManualCard manual_icon={ledgerLiveImg} manual_text={'Ledger Live'}
        clickMe={()=> handleWalletClicked("Ledger Live" , ledgerLiveImg)}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}
        clickMe={()=> handleWalletClicked("Wallet" , )}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}
        clickMe={()=> handleWalletClicked("Wallet" , )}/>
      <ManualCard manual_icon={dharmaImg} manual_text={'Dharma'}
        clickMe={()=> handleWalletClicked("Dharma" , dharmaImg)}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}
        clickMe={()=> handleWalletClicked("Wallet" , )}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}
        clickMe={()=> handleWalletClicked("Wallet" , )}/>
      <ManualCard manual_icon={eidooImg} manual_text={'Eidoo'}
        clickMe={()=> handleWalletClicked("Eidoo" , eidooImg)}/>
      <ManualCard manual_icon={mykeyImg} manual_text={'MYKEY'}
        clickMe={()=> handleWalletClicked("MYKEY" , mykeyImg)}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}
        clickMe={()=> handleWalletClicked("Wallet" , )}/>
      <ManualCard manual_icon={trustvaultImg} manual_text={'TrustVault'}
        clickMe={()=> handleWalletClicked("TrustVault" , trustImg)}/>
      <ManualCard manual_icon={atomicImg} manual_text={'Atomic'}
        clickMe={()=> handleWalletClicked("Atomic" , atomicImg)}/>
      <ManualCard manual_icon={coin98Img} manual_text={'Coin98'}
        clickMe={()=> handleWalletClicked("Coin98" , coin98Img)}/>
      <ManualCard manual_icon={tronImg} manual_text={'Tron'}
        clickMe={()=> handleWalletClicked("Tron" , tronImg)}/>
      <ManualCard manual_icon={aliceImg} manual_text={'Alice'}
        clickMe={()=> handleWalletClicked("Alice" , aliceImg)}/>
      <ManualCard manual_icon={alphaImg} manual_text={'AlphaWallet'}
        clickMe={()=> handleWalletClicked("AlphaWallet" , alphaImg)}/>
      <ManualCard manual_icon={dcentImg} manual_text={"D'CENT"}
        clickMe={()=> handleWalletClicked("D'CENT" , dcentImg)}/>
      <ManualCard manual_icon={zelcoreImg} manual_text={'ZelCore'}
        clickMe={()=> handleWalletClicked("Zelcore" , zelcoreImg)}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}
        clickMe={()=> handleWalletClicked("Wallet" , )}/>
      <ManualCard manual_icon={coinmoniImg} manual_text={'Coinmoni'}
        clickMe={()=> handleWalletClicked("Coinmoni" ,coinmoniImg )}/>
      <ManualCard manual_icon={gridImg} manual_text={'GridPlus'}
        clickMe={()=> handleWalletClicked("GridPlus" , gridImg)}/>
      <ManualCard manual_icon={cybavoImg} manual_text={'CYBAVO'}
        clickMe={()=> handleWalletClicked("CYBAVO" , cybavoImg)}/>
      <ManualCard manual_icon={takebaryImg} manual_text={'Tokenary'}
        clickMe={()=> handleWalletClicked("Tokenary" , takebaryImg)}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}
        clickMe={()=> handleWalletClicked("Wallet" , )}/>
      <ManualCard manual_icon={spatiumImg} manual_text={'Spatium'}
        clickMe={()=> handleWalletClicked("Spatium" , spatiumImg)}/>
      <ManualCard manual_icon={safepalImg} manual_text={'SafePal'}
        clickMe={()=> handleWalletClicked("SafePal" , safepalImg)}/>
      <ManualCard manual_icon={infinitoImg} manual_text={'Infinito'}
        clickMe={()=> handleWalletClicked("Infinito" , infinitoImg)}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}
        clickMe={()=> handleWalletClicked("Wallet" , )}/>
      <ManualCard manual_icon={ownbitImg} manual_text={'Ownbit'}
        clickMe={()=> handleWalletClicked("Ownbit" , ownbitImg)}/>
      <ManualCard manual_icon={easyImg} manual_text={'EasyPocket'}
        clickMe={()=> handleWalletClicked("EasyPocket" , easyImg)}/>
      <ManualCard manual_icon={bridgeImg} manual_text={'Bridge Wallet'}
        clickMe={()=> handleWalletClicked("Bridge Wallet" , bridgeImg)}/>
      <ManualCard manual_icon={sparkImg} manual_text={'Spark Point'}
        clickMe={()=> handleWalletClicked("Spark Point" , sparkImg)}/>
      <ManualCard manual_icon={viaImg} manual_text={'Via Wallet'}
        clickMe={()=> handleWalletClicked("Via Wallet" , viaImg)}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}
        clickMe={()=> handleWalletClicked("Wallet" , )}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}
        clickMe={()=> handleWalletClicked("Wallet" , )}/>
      <ManualCard manual_icon={peakefi} manual_text={'PEAKDEFI'}
        clickMe={()=> handleWalletClicked("PEAKDEFI" , peakefi)}/>
      <ManualCard manual_icon={unstopImg} manual_text={'Unstoppable'}
        clickMe={()=> handleWalletClicked("Unstoppable" , unstopImg)}/>
      <ManualCard manual_icon={haloImg} manual_text={'HaloDeFi'}
        clickMe={()=> handleWalletClicked("HaloDeFi" , haloImg)}/>
      <ManualCard manual_icon={dokImg} manual_text={'Dok Wallet'}
        clickMe={()=> handleWalletClicked("Dok Wallet" , dokImg)}/>
      <ManualCard manual_icon={midasImg} manual_text={'Midas'}
        clickMe={()=> handleWalletClicked("Midas" , midasImg)}/>
      <ManualCard manual_icon={ellipalImg} manual_text={'Ellipal'}
        clickMe={()=> handleWalletClicked("Ellipal" , ellipalImg)}/>
      <ManualCard manual_icon={keyringImg} manual_text={'KEYRING PRO'}
        clickMe={()=> handleWalletClicked("KEYRING PRO" , keyringImg)}/>
      <ManualCard manual_icon={aktionImg} manual_text={'Aktionariat'}
        clickMe={()=> handleWalletClicked("Aktionariat" , aktionImg)}/>
      <ManualCard manual_icon={talkenImg} manual_text={'Talken'}
        clickMe={()=> handleWalletClicked("Talken" , talkenImg)}/>
      <ManualCard manual_icon={flare} manual_text={'Flare'}
        clickMe={()=> handleWalletClicked("Flare" , flare)}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}
        clickMe={()=> handleWalletClicked("Wallet" , )}/>
      <ManualCard manual_icon={paytubeImg} manual_text={'PayTube'}
        clickMe={()=> handleWalletClicked("PayTube" , paytubeImg)}/>
      <ManualCard manual_icon={linenImg} manual_text={'Linen'}
        clickMe={()=> handleWalletClicked("Linen" , linenImg)}/>
      <ToastContainer /> 
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} wallet={selectedWallet} />

    </div>
    </div>
    </section>
    </>
  )
}

export default Manual
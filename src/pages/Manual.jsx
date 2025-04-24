import React from 'react'
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



const Manual = () => {
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
      <ManualCard manual_icon={coreImg} manual_text={'Core Golang Cli Wallet'}/>
      <ManualCard manual_icon={okzImg} manual_text={'Okx Wallet'}/>
      <ManualCard manual_icon={ledgerImg} manual_text={'Ledger'}/>
      <ManualCard manual_icon={oneKeyImg} manual_text={'OneKey Wallet'}/>
      <ManualCard manual_icon={tangemImg} manual_text={'Tangem Wallet'}/>
      <ManualCard manual_icon={myTonImg} manual_text={'MyTon Wallet'}/>
      <ManualCard manual_icon={toneImg} manual_text={'Tonkeeper Wallet'}/>
      <ManualCard manual_icon={tonhubImg} manual_text={'TonHub Wallet'}/>
      <ManualCard manual_icon={electrumImg} manual_text={'Electrum Wallet'}/>
      <ManualCard manual_icon={uniswapImg} manual_text={'UNISWAP Wallet'}/>
      <ManualCard manual_icon={bestImg} manual_text={'Best Wallet'}/>
      <ManualCard manual_icon={kaspiumImg} manual_text={'Kaspium Wallet'}/>
      <ManualCard manual_icon={KaswereImg} manual_text={'Kaswere Wallet'}/>
      <ManualCard manual_icon={kaspiumImg} manual_text={'Kaspanet Web Wallet'}/>
      <ManualCard manual_icon={kaspiumImg} manual_text={'Kdx Wallet'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet Connect'}/>
      <ManualCard manual_icon={trustImg} manual_text={'Trust'}/>
      <ManualCard manual_icon={solanaImg} manual_text={'Solana Wallet'}/>
      <ManualCard manual_icon={solfareImg} manual_text={'Solfare Wallet'}/>
      <ManualCard manual_icon={unisatImg} manual_text={'Unisat Wallet'}/>
      <ManualCard manual_icon={okzImg} manual_text={'okx Wallet'}/>
      <ManualCard manual_icon={xverseImg} manual_text={'Xverse Wallet'}/>
      <ManualCard manual_icon={magicImg} manual_text={'Magic Eden Wallet'}/>
      <ManualCard manual_icon={leatherImg} manual_text={'Leather Wallet'}/>
      <ManualCard manual_icon={asignaImg} manual_text={'Asigna Wallet'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet Connect'}/>
      <ManualCard manual_icon={trustImg} manual_text={'Trust'}/>
      <ManualCard manual_icon={ledgerImg} manual_text={'Ledger'}/>
      <ManualCard manual_icon={metaImg} manual_text={'Metamask'}/>
      <ManualCard manual_icon={ledgerImg} manual_text={'Ledger'}/>
      <ManualCard manual_icon={brdImg} manual_text={'BRD Wallet'}/>
      <ManualCard manual_icon={coinImg} manual_text={'Coinbase'}/>
      <ManualCard manual_icon={saitaImg} manual_text={'Saitamask Wallet'}/>
      <ManualCard manual_icon={terraImg} manual_text={'Terra Station'}/>
      <ManualCard manual_icon={phantomImg} manual_text={'Phantom Wallet'}/>
      <ManualCard manual_icon={cosmosImg} manual_text={'Cosmos Station'}/>
      <ManualCard manual_icon={exodusImg} manual_text={'Exodus Wallet'}/>
      <ManualCard manual_icon={rainbowImg} manual_text={'Rainbow'}/>
      <ManualCard manual_icon={argentImg} manual_text={'Argent'}/>
      <ManualCard manual_icon={binanceImg} manual_text={'Binance Chain'}/>
      <ManualCard manual_icon={safemoonImg} manual_text={'Safemoon'}/>
      <ManualCard manual_icon={gnosisImg} manual_text={'Gnosis Safe'}/>
      <ManualCard manual_icon={defiImg} manual_text={'DeFi'}/>
      <ManualCard manual_icon={pillarImg} manual_text={'Pillar'}/>
      <ManualCard manual_icon={imtokenImg} manual_text={'imToken'}/>
      <ManualCard manual_icon={ontoImg} manual_text={'ONTO'}/>
      <ManualCard manual_icon={tokenImg} manual_text={'TokenPocket'}/>
      <ManualCard manual_icon={aaveImg} manual_text={'Aave'}/>
      <ManualCard manual_icon={digitexImg} manual_text={'Digitex'}/>
      <ManualCard manual_icon={portisImg} manual_text={'Portis'}/>
      <ManualCard manual_icon={formaticImg} manual_text={'Formatic'}/>
      <ManualCard manual_icon={mathImg} manual_text={'MathWallet'}/>
      <ManualCard manual_icon={bitpayImg} manual_text={'BitPay'}/>
      <ManualCard manual_icon={ledgerLiveImg} manual_text={'Ledger Live'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}/>
      <ManualCard manual_icon={dharmaImg} manual_text={'Dharma'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}/>
      <ManualCard manual_icon={eidooImg} manual_text={'Eidoo'}/>
      <ManualCard manual_icon={mykeyImg} manual_text={'MYKEY'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}/>
      <ManualCard manual_icon={trustvaultImg} manual_text={'TrustVault'}/>
      <ManualCard manual_icon={atomicImg} manual_text={'Atomic'}/>
      <ManualCard manual_icon={coin98Img} manual_text={'Coin98'}/>
      <ManualCard manual_icon={tronImg} manual_text={'Tron'}/>
      <ManualCard manual_icon={aliceImg} manual_text={'Alice'}/>
      <ManualCard manual_icon={alphaImg} manual_text={'AlphaWallet'}/>
      <ManualCard manual_icon={dcentImg} manual_text={"D'CENT"}/>
      <ManualCard manual_icon={zelcoreImg} manual_text={'ZelCore'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}/>
      <ManualCard manual_icon={coinmoniImg} manual_text={'Coinmoni'}/>
      <ManualCard manual_icon={gridImg} manual_text={'GridPlus'}/>
      <ManualCard manual_icon={cybavoImg} manual_text={'CYBAVO'}/>
      <ManualCard manual_icon={takebaryImg} manual_text={'Tokenary'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}/>
      <ManualCard manual_icon={spatiumImg} manual_text={'Spatium'}/>
      <ManualCard manual_icon={safepalImg} manual_text={'SafePal'}/>
      <ManualCard manual_icon={infinitoImg} manual_text={'Infinito'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}/>
      <ManualCard manual_icon={ownbitImg} manual_text={'Ownbit'}/>
      <ManualCard manual_icon={easyImg} manual_text={'EasyPocket'}/>
      <ManualCard manual_icon={bridgeImg} manual_text={'Bridge Wallet'}/>
      <ManualCard manual_icon={sparkImg} manual_text={'Spark Point'}/>
      <ManualCard manual_icon={viaImg} manual_text={'Via Wallet'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}/>
      <ManualCard manual_icon={peakefi} manual_text={'PEAKDEFI'}/>
      <ManualCard manual_icon={unstopImg} manual_text={'Unstoppable'}/>
      <ManualCard manual_icon={haloImg} manual_text={'HaloDeFi'}/>
      <ManualCard manual_icon={dokImg} manual_text={'Dok Wallet'}/>
      <ManualCard manual_icon={midasImg} manual_text={'Midas'}/>
      <ManualCard manual_icon={ellipalImg} manual_text={'Ellipal'}/>
      <ManualCard manual_icon={keyringImg} manual_text={'KEYRING PRO'}/>
      <ManualCard manual_icon={aktionImg} manual_text={'Aktionariat'}/>
      <ManualCard manual_icon={talkenImg} manual_text={'Talken'}/>
      <ManualCard manual_icon={flare} manual_text={'Flare'}/>
      <ManualCard manual_icon={walletImg} manual_text={'Wallet'}/>
      <ManualCard manual_icon={paytubeImg} manual_text={'PayTube'}/>
      <ManualCard manual_icon={linenImg} manual_text={'Linen'}/>
    </div>
    </div>
    </section>
    </>
  )
}

export default Manual
import React from 'react'
import ManualCard from '../components/ManualCard'
import coreImg from "../assets/manualIcons/core.png"
import okzImg from "../assets/manualIcons/okx.png"
import ledgerImg from "../assets/manualIcons/ledger_logo.png"
import oneKeyImg from "../assets/manualIcons/onekey.png"
import tangemImg from "../assets/manualIcons/tangem.png"
import myTonImg from "../assets/manualIcons/MyTonWallet.jpg"


const Manual = () => {
  return (
    <div>
      <ManualCard manual_icon={coreImg} manual_text={'Core Golang Cli'}/>
      <ManualCard manual_icon={okzImg} manual_text={'Okix'}/>
      <ManualCard manual_icon={ledgerImg} manual_text={'Ledger'}/>
      <ManualCard manual_icon={oneKeyImg} manual_text={'OneKey'}/>
      <ManualCard manual_icon={tangemImg} manual_text={'Tangem'}/>
      <ManualCard manual_icon={myTonImg} manual_text={'MyTon'}/>
    </div>
  )
}

export default Manual
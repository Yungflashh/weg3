import React from 'react'
import Header from '../components/static/Header/Header'
import HeroSection from '../components/HeroSection'
import Peer from '../components/Peer'
import Auth from '../components/Auth'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Peer/>
        <Auth/>
    </div>
  )
}

export default HomePage
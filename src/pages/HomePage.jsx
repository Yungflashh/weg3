import React from 'react'
import Header from '../components/static/Header/Header'
import HeroSection from '../components/HeroSection'
import Peer from '../components/Peer'
import Auth from '../components/Auth'
import Form from '../components/Form'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Peer/>
        <Auth/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default HomePage
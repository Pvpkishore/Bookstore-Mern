import React from 'react'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <div>
    <Navbar/>
    <Banner/>
    <Freebook/>
    <Footer/>
    </div>
    </>
  )
}

export default Home
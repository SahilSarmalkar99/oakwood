import React from 'react'
import Image from '../components/Home/Image'
import Hero from '../components/Home/Hero'
import Agro from '../components/Home/Agro '
import Services from '../components/Home/Services'
import Production from '../components/Home/Production'
import ScatterLayout from '../components/Home/ScatterLayout'
import ProductSection from '../components/Home/ProductSection'
import WhiteLabelSection from '../components/Home/WhiteLabelSection'
import BestProduct from '../components/Home/BestProduct'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Image />
        <Hero />
        <Services />
        <Agro />
        <Production />
        <ScatterLayout />
        <ProductSection />
        <WhiteLabelSection />
        <BestProduct />
        <Footer />
    </div>
  )
}

export default Home
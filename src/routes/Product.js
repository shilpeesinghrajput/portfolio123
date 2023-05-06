import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work'

const Product = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Product

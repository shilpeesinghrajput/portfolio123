import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import WeatherApp from '../Components/Weatherapp/WeatherApp'



const Weather = () => { 
  return (
    <div>
     <Navbar/>
     <HeroImg2 heading='Weather App' text='Created By Shilpee Kumari' />
     <WeatherApp />
     <Footer/>
    </div>
  )
}

export default Weather

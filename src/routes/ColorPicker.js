import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import ColorPick from '../Components/ColorPick'



const ColorPicker = () => { 
  window.scroll(0,0);
  return (
    <div>
     <Navbar/>
     <HeroImg2 heading='COLOR Picker' text='Implemented By Shilpee Kumari' />
     <ColorPick/>
     <Footer/>
    </div>
  )
}

export default ColorPicker

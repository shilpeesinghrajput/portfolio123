import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import TictacData from '../TictocComponents/TictocData'
import HeroImg2 from '../Components/HeroImg2'



const Tictac = () => { 

  window.scroll(0,0);

  return (
    <div>
     <Navbar/>
     <HeroImg2 heading='TIC TAC TOE GAME' text='Made By Shilpee Kumari' />
     <TictacData/>
     <Footer/>
    </div>
  )
}

export default Tictac

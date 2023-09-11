import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import TictacData from '../TictocComponents/TictocData'
import HeroImg2 from '../Components/HeroImg2'



const Tictac = () => { 
  return (
    <div>
     <Navbar/>
     <HeroImg2 heading='TIC TAC TOE GAME' text='made by shilee kumari' />
     <TictacData/>
     <Footer/>
    </div>
  )
}

export default Tictac

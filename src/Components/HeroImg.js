import React from 'react'
import './HeroImgStyle.css'
import background from '../assets/job.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
          <div className="mask">
                    <img className='into-img' src={background} alt="background" />
          </div>
          <div className="content">
                    <p>Hi, I AM A DEVELOPER</p>
                      <h1>Frontend Developer</h1>                  
         
          <div>
                    <Link to='/project' className="btn">Project</Link>
                    <Link to='/contact' className="btn btn-light">Contact</Link>
          </div>
          </div>
      
    </div>
  )
}

export default HeroImg

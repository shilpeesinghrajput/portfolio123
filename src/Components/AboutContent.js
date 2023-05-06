import './AboutContentStyle.css'
import React from 'react'
import {Link} from 'react-router-dom'
import pro4 from '../assets/react1.jpg'
import pro5 from '../assets/ReactJS.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
          <div className="left">
                    <h1>WHO Am I?</h1>
                    <p>I am a react front-end developer. I create responsive secure websites for Practics</p>
                    <Link to ="/contact">
                              <button className='btn'>Contact</button>
                    </Link>
                    </div>
                    <div className="right">
                              <div className="img-container">
                                        <div className="img-stack top">
                                                  <img src={pro5} alt="img" className='img' />
                                        </div>

                                        <div className="img-stack bottom">
                                                  <img src={pro4} alt="img" className='img' />
                                        </div>


                              </div>
                    </div>
          
      
    </div>
  )
}

export default AboutContent

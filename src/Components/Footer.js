import React from 'react'
import './FooterStyle.css'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
          <div className="footer-container">
                    <div className="left">
                              <div className="location">
                                        <FaHome size={20}
                                         style={{color:"#fff"
                                         ,marginRight:"2rem"}}/>
                    
                              <div>
                                        <p>Sector 31 B-block,Noida</p>
                                
                              </div>
                              </div>
                    
                    <div className="phone">
                              <h4><FaPhone size={20}
                               style={{color:"#fff"
                               ,marginRight:"2rem"}}/>
                             +91-9931444592</h4>
                    </div>

                    <div className="email">
                              <h4><FaMailBulk size={20} 
                              style={{color:"#fff"
                              ,marginRight:"2rem"}}/>
                              Shilpeesingh336@gmail.com</h4>
                    </div>
                    </div>
                    <div className="right">
                              <h4>About Me :</h4>
                              <p>This is Shilpee Singh Rajput, 
                                        Fresher & Quick Learner,
                                         I enjoy discussing new project and design challenges </p>
                    
                    <div className="social">
                    <FaFacebook size={30}
                     style={{color:"#fff"
                     ,marginRight:"1rem"}}/> 

                     <FaTwitter size={30}
                     style={{color:"#fff"
                     ,marginRight:"1rem"}}/>  

                     <FaLinkedin size={30}
                     style={{color:"#fff"
                     ,marginRight:"1rem"}}/>   
                    </div>
          </div>
      
    </div>
    </div>
  )
}

export default Footer

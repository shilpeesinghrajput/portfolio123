import { Link } from 'react-router-dom'
import './NavbarStyle.css'
import React, { useState } from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'

const Navbar = () => {

          const [click,setClick]=useState(false);
          const handleClick = () => setClick(!click);

          const [color, setColor] = useState(false)
          const colorChange = () =>{
                    if(window.scrollY >=100){
setColor(true)
                    }else{
                              setColor(false)
                    }
          }
          window.addEventListener("scroll",colorChange)
  return (
    <div className= {color ? "header header-bg":"header"}>
          <Link to={"/"}>
<h1>Portfolio</h1>
          </Link>
          <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li>
                              <Link to={"/"}>Home</Link>
                    </li>

                    <li>
                              <Link to={"/product"}>Product</Link>
                    </li>

                    <li>
                              <Link to={"/contact"}>Contact</Link>
                    </li>

                    <li>
                              <Link to={"/about"}>About</Link>
                    </li>

                    <li>
                              <Link to={"/tictac"}>Tictac</Link>
                    </li>
          </ul>
          
          <div className='Humburger' onClick={handleClick}>
          {click ? ( <FaTimes size={20} style={{color:"#fff"}}/>) :(
             <FaBars size={20} style={{color:"#fff"}}/>  )}
             
          </div>
      
    </div>
  )
}

export default Navbar

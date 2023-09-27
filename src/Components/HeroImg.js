import React from "react";
import "./HeroImgStyle.css";
import background from "../assets/job.jpg";
import { Link } from "react-router-dom";
import {FaFileDownload} from "react-icons/fa"
import resume from '../assets/resumee.pdf'

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={background} alt="background" />
      </div>
      <div className="content">
        <p>Hi, I AM Shilpee Kumari</p>
        <h1>Frontend Developer</h1>

        <div>
          <Link to="/projects" className="btn ">
            Projects
          </Link>
          {/* <a className="btn btn-light"
          href={resume}
          target='_blank'
          download={'SHILPEE_Resume'}>
            Resume 
           <FaFileDownload style={{marginLeft:"3px"}} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

import React from 'react';
import './homeDescription.css';
import resume from '../assets/resumee.pdf'
import {TfiPaintBucket} from 'react-icons/tfi';
import {MdOutlineDesignServices} from 'react-icons/md'
const HomeDescription = () => {
  return (
    <div className='container-fluid mt-3'>
       <div id="about" className="row about-section">
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Who am I ?</h3>
                <span className="line mb-5"></span>
                <h5 className="mb-3">A Web Designer / Developer Located In Our Lovely Earth</h5>
                <p className="mt-20">I have started late in IT but my passion for designing and developing comes from my passion for drawing since school days.</p>
                <a className="btn btn-light"
                          href={resume}
                          target='_blank'
                          download={'SHILPEE_Resume'}>
                Download My CV</a>
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Personal Info</h3>
                <span className="line mb-5"></span>
                <ul className="mt40 info list-unstyled">
                    <li><span>Birthdate</span> : 28th January,1997</li>
                    <li><span>Email</span> :shilpeesingh336@gmail.com</li>
                    <li><span>Phone</span> : +91 9931444592</li>
                    <li><span>Address</span> :Noida,Sector-66,UP 201301 </li>
                </ul>
        
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">My Expertise</h3>
                <span className="line mb-5"></span>
                <div className="row">
                    <div className="col-1 text-warning pt-1"><MdOutlineDesignServices size={24} /></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>UX Design</h6>
                        <p className="subtitle"> Figma to Code.</p>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-warning pt-1"><TfiPaintBucket size={24} /></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Web Development</h6>
                        <p className="subtitle">UI development and Integration with APIs</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div> 

        <section className="section mt-3">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="mt-2">
                                <h4>Expertise</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="title text-warning">May 2023 - Present</h6>
                            <p> React Developer</p>
                            <p className="subtitle">Working on several LIVE projects with different domains (Food Chain (YogoShushi), Hospitality(DaalChini) and CRM (In-house)</p>
                            <hr/>
                            <h6 className="title text-warning">Feb 2022-July 2022</h6>
                            <p>Front-end Intern</p>
                            <p className="subtitle">Worked on website design elements which got converted to individual components within any given framework</p>
                                                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                       <div className="card-header">
                            <div className="mt-2">
                                <h4>Education</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="title text-warning">2020-2022</h6>
                            <p>MCA</p>
                            <p className="subtitle">Cleared with an aggregrate of 7.9 CGPA. I had taken Web Development as my Specialization and did my Final Project within same Technologies. </p>
                            <hr/>
                            <h6 className="title text-warning">2019 - 2020</h6>
                            <p>ADCA</p>
                            <p className="subtitle">Learned about Computer Fundamentals, Software Design, OS and concepts with Several Programming Languages.</p>
                            <hr/>
                            <h6 className="title text-warning">2014 - 2018</h6>
                            <p>BSc</p>       
                            <p className="subtitle">Cleared with an aggregrate of 69.12%.I had taken Mathematics as my specilization.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-3">
                       <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Skills</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                           <h6>HTML5 &amp; CSS</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h6>Bootstrap</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>JavaScript</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h6>React</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="card">
                       <div className="card-header">
                            <div className="pull-left">
                                <h4 className="mt-2">Languages</h4>
                                <span className="line"></span>  
                            </div>
                        </div>
                        <div className="card-body pb-2">
                           <h6>English</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Hindi</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Bhojpuri</h6>
                            <div className="progress mb-3">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default HomeDescription

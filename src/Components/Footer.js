import React from 'react'
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-dark text-light py-5 '>


                    <div className='col-12'>
                        <ul className='nav justify-content-center d-flex'>
                            <li className="nav-items fw-bold" >
                                <NavLink className="links-footer nav-link" to="/">Home</NavLink >
                            </li>
                            <li className="nav-items fw-bold">
                                <NavLink  className="links-footer nav-link"  to="/about">About</NavLink  >
                            </li>
                            <li className="nav-items fw-bold ">
                                <NavLink  className="links-footer nav-link"  to="/service">Services</NavLink  >
                            </li>
                            <li className="nav-items fw-bold ">
                                <NavLink   className="links-footer nav-link" to="/contact">Contact</NavLink >
                            </li>
                            <li className="nav-items fw-bold">
                                <NavLink  className="links-footer nav-link"  to="/projects">Projects</NavLink  >
                            </li>
                        </ul>
                    </div>

                    <div className='col-12 d-flex justify-content-center my-3 '>
                        <p className='mx-3'><a href='https://github.com/seshadrikaku' className='footer-links' ><GitHubIcon/></a> </p>
                        <p className='mx-3'><a href='mailto:kakuseshadri033@gmail.com' className='footer-links'><EmailIcon/> </a></p>
                        <p className='mx-3'><a href='https://www.linkedin.com/in/seshadri-kaku-78735b25b' className='footer-links'><LinkedInIcon/></a> </p>
                        <p className='mx-3'><a href='https://www.instagram.com/mr_s_e_s_h_i/' className='footer-links'><InstagramIcon/></a></p>
                    </div>

                
                    <div className='col-12 mt-2 text-center'>
                        <h6> Copy-Right By @Seshadri-Kaku @ 2023</h6>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
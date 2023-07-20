import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light  shadow">
                <div className="container-fluid">
                    <a className="navbar-brand mx-5" href="/">
                        <img src='https://www.partycheap.com/v/vspfiles/photos/66515-2T.jpg' alt='logo' className='img-fluid' style={{ "width": "80px" }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-auto   px-4 fw-bold" >
                                <NavLink className="nav-link fs-5 active " to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-auto px-4 fw-bold">
                                <NavLink className="nav-link  fs-5 " to="/about">About</NavLink >
                            </li>
                            <li className="nav-item mx-auto px-4 fw-bold">
                                <NavLink className="nav-link  fs-5" to="/service">Services</NavLink >
                            </li>
                            <li className="nav-item mx-auto px-4 fw-bold">
                                <NavLink className="nav-link   fs-5" to="/projects">Projects</NavLink >
                            </li>
                            <li className="nav-item mx-auto px-4 fw-bold">
                                <NavLink className="nav-link  fs-5" to="/contact">Contact</NavLink >
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>





        </>
    )
}

export default Header
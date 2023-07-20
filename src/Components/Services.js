import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <>

      <div className='container'>
        <div className='row my-3'>
          <h2 className='fw-bold text-center my-3'>My Services</h2>

          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
            <div className='serv shadow px-2 py-3 my-3 mx-3'  >
              <h3 className='text-center py-2 '>Web Developer</h3>
              <p>As a web developer responsible for designing,
                creating, and maintaining websites and web applications.
                I can use  HTML, CSS, and JavaScript,
                 and often work closely with designers.
              </p>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
            <div className='serv shadow px-2 py-3 my-3 mx-3' >
              <h3 className='text-center py-2 '>Front-end Development</h3>
              <p>As a front-end developer with a passion for creating visually stunning and user-friendly websites and mobile applications.
                 With expertise in HTML, CSS, BootStrap,JavaScript and React Js. </p>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
            <div className='serv shadow px-2 py-3 my-3 mx-3' >
              <h3 className='text-center py-2 '>Back End Developer</h3>
              <p>As a backend developer, my focus is on building the foundation and functionality that powers web applications.
                 I designing and developing the server-side applications using Nodejs,Express js and Data Base is Mongo DB. </p>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
            <div className='serv shadow px-2 py-3 my-3 mx-3' >
              <h3 className='text-center py-2 '>Responsive web design</h3>
              <p>
                As a  developer, I can create responsive web design in all my projects.
                I use a mobile-first approach, where I initially design and develop for
                small screens and progressively enhance the experience for larger devices.
                </p>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
            <div className='serv shadow px-2 py-3 my-3 mx-3' >
              <h3 className='text-center py-2 '>Logo Design</h3>
              <p>My goal is to create logos that resonate with your target audience, helping you stand out in a crowded market and establish a strong brand identity.</p>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
            <div className='serv shadow px-2 py-3 my-3 mx-3' >
              <h3 className='text-center py-2 '>E-commerce Development</h3>
              <p>As a developer i can create user-friendly e-commerce platform is essential for businesses aiming to thrive in the competitive online marketplace.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
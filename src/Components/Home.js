import React from 'react'
import "./Home.css"
import seshi from './seshi.jpg'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Projects from './Projects'

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 text-center'>
            <h1 className='fs-1 my-5 py-2 fw-bold shadow rounded-4'>Hello....!<br /> This is Seshadri....</h1>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 text-center'>
            <div className='Seshi-img '>
              <img src={seshi} alt='seshadri_kaku_image' className='img-fluid' />
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 text-center'>
            <p className='fw-bold fs-1 my-5 py-1 px-1 shadow rounded-4'>Full Stack Developer..!</p>
          </div>
        </div>
      </div>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>

    </>
  )
}

export default Home
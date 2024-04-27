import React from 'react'
import '../Styles/Project.css'
import  UserAuth from '../../assets/UserAuth.png'
import  noteapp from '../../assets/noteapp.png'
import  weather from '../../assets/Weather.png'
import  Digital from '../../assets/digital.png'
import  pagination from '../../assets/pagination.png'
import  countDown from '../../assets/countDown.png'
import  rating from '../../assets/rating.png'
import  calculator from '../../assets/calculator.png'
import  college from '../../assets/college.png'





const Projects= () => {
    return (
      <>
        <div className='container' id='project'>
          <div className='row'>
            <h2 className='fw-bold text-center my-5'>Projects</h2>


            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3'>
              <div className='project-demo text-center shadow mx-1  mb-3 py-2 '>
                <img src={UserAuth} alt='user.logo' className='img-fluid'/>
                <h5 className='m-3 py-2'>User Autuentication </h5>
                <button className='border border-0 mx-2  my-2'>JavaScript</button>
                <button className=' border border-0 mx-2  my-2'>React Js</button>
                <button className='border border-0 mx-2  my-2'>Node Js</button>
                <button className='border border-0 mx-2  my-2'>Mongo DB</button>
                <div className='links py-3'>
                  <a href="#" className='mx-5  my-2'> Live  </a>
                  <a href="https://github.com/seshadrikaku/User_Authentication" className=' mx-5  my-2'> Github </a>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3'>
              <div className='project-demo text-center shadow mx-1  mb-3 py-2 '>
                 <img src={noteapp} alt='note.logo' className='img-fluid'/> 
                <h5 className='m-3 py-2'>Note App</h5>
                <button className='border border-0 mx-2  my-2'>JavaScript</button>
                <button className=' border border-0 mx-2  my-2'>React Js</button>
                <button className='border border-0 mx-2  my-2'>Redux</button>
                <button className='border border-0 mx-2  my-2'>HTML</button>
                <button className='border border-0 mx-2  my-2'>CSS</button>
                <div className='links py-3'>
                  <a href="https://noteapp-redux.netlify.app" className='mx-5  my-2'>Live  </a>
                  <a href="https://github.com/seshadrikaku/React-redux-Note-App" className=' mx-5  my-2'>Github </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3'>
              <div className='project-demo text-center shadow mx-1  mb-3 py-2 '>
               <img src={weather} alt='weather.logo' className='img-fluid'/> 
                <h5 className='m-3 py-2'>Weather Forecast App</h5>
                <button className='border border-0 mx-2  my-2'>JavaScript</button>
                <button className=' border border-0 mx-2  my-2'>React Js</button>
                <button className='border border-0 mx-2  my-2'>HTML</button>
                <button className='border border-0 mx-2  my-2'>CSS</button>
                <button className='border border-0 mx-2  my-2'>Bootstrap</button>
                <div className='links py-3'>
                  <a href="https://weather-report-123.netlify.app/" className='mx-5  my-2'>Live  </a>
                  <a href="https://github.com/seshadrikaku/weather-report" className=' mx-5  my-2'>Github </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3 '>
              <div className='project-demo text-center shadow mx-1  py-2 mb-3'>
               <img src={Digital} alt='digital.logo' className='img-fluid'/>
                <h5 className='m-3 py-2'>Digital Clock </h5>
                <button className='border border-0 mx-2  my-2'>JavaScript</button>
                <button className=' border border-0 mx-2  my-2'>HTML</button>
                <button className='border border-0 mx-2  my-2'>CSS</button>
                <div  className='links py-3'>
                  <a href="https://digital-watch-clock.netlify.app/" className=' mx-5  my-2'>Live  </a>
                  <a href="https://github.com/seshadrikaku/digital-clock" className='mx-5   my-2'>Github </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3 '>
              <div className='project-demo text-center shadow mx-1  py-2 mb-3'>
               <img src={pagination} alt='digital.logo' className='img-fluid'/>
                <h5 className='m-3 py-2'>Pagination</h5>
                <button className='border border-0 mx-2  my-2'>JavaScript</button>
                <button className=' border border-0 mx-2  my-2'>React Js</button>
                <button className='border border-0 mx-2  my-2'>Bootstrap</button>
                <button className='border border-0 mx-2  my-2'>HTML</button>
                <button className='border border-0 mx-2  my-2'>CSS</button>
                <div  className='links py-3'>
                  <a href="https://silly-malasada-54f79d.netlify.app/" className=' mx-5  my-2'>Live  </a>
                  <a href="https://github.com/seshadrikaku/Pagination" className='mx-5   my-2'>Github </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3 '>
              <div className='project-demo text-center shadow mx-1  py-2 mb-3'>
              <img src={countDown} alt='count.logo' className='img-fluid'/>
                <h5 className='m-3 py-2'>Time Count Down </h5>
                <button className='border border-0 mx-2  my-2'>JavaScript</button>
                <button className=' border border-0 mx-2  my-2'>HTML</button>
                <button className='border border-0 mx-2  my-2'>CSS</button>
                <button className='border border-0 mx-2  my-2'>Bootstrap</button>
                <div  className='links py-3'>
                  <a href="https://timecountdown1452.netlify.app/" className=' mx-5   my-2'>Live </a>
                  <a href="https://github.com/seshadrikaku/Count_down" className='mx-5   my-2'>Github</a>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3 '>
              <div className='project-demo text-center shadow mx-1  py-2 mb-3'>
              <img src={rating} alt='rating.logo' className='img-fluid'/>
                <h5 className='m-3 py-2'>Rating Card </h5>
                <button className='border border-0 mx-2  my-2'>JavaScript</button>
                <button className=' border border-0 mx-2  my-2'>HTML</button>
                <button className='border border-0 mx-2  my-2'>CSS</button>
                <div  className='links py-3'>
                  <a href="https://soft-boba-4efb43.netlify.app/" className='  mx-5   my-2'>Live  </a>
                  <a href="https://github.com/seshadrikaku/Rating-cardss" className=' mx-5   my-2'>Github </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3 '>
              <div className='project-demo text-center shadow mx-1  py-2 mb-3'>
              <img src={calculator} alt='calcu.logo' className='img-fluid'/>
                <h5 className='m-3 py-2'>Calculator  </h5>
                <button className='border border-0 mx-2  my-2'>JavaScript</button>
                <button className=' border border-0 mx-2  my-2'>CSS</button>
                <button className='border border-0 mx-2  my-2'>HTML</button>
                <button className='border border-0 mx-2  my-2'>Bootstrap</button>
                <div  className='links py-3'>
                  <a href="https://calculator1-2345.netlify.app/" className='  mx-5  my-2'>Live </a>
                  <a href="https://github.com/seshadrikaku/caql" className=' mx-5   my-2'>Github </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2 mb-3 '>
              <div className='project-demo text-center shadow mx-1  py-2 mb-3'>
              <img src={college} alt='clglogo' className='img-fluid'/>
                <h5 className='m-3 py-2'>College Web Application</h5>
                <button className='border border-0 mx-2  my-2'>HTML</button>
                <button className=' border border-0 mx-2  my-2'>CSS</button>
                <button className='border border-0 mx-2  my-2'>Bootstrap</button>
                <div  className='links py-3'>
                  <a href="https://regal-raindrop-582f47.netlify.app" className='  mx-5   my-2'>Live  </a>
                  <a href="https://github.com/seshadrikaku/college-website" className=' mx-5   my-2'>Github </a>
                </div>
              </div>
            </div>
  
          </div>
        </div>
  
      </>
    )
  }

export default Projects
import React from 'react'
import '../Styles/about.css'
import seshi from '../seshi.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const About = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row' id='About'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7 col-xxl-7 py-3 mt-5  px-5 '>
            <div className='mx-3'>
              <p className='about-me' >My name is </p>
              <p className='about-name'>Seshadri Kaku</p>
             
              <p className='my-5 fs-5  fw-1'>I am  a passionate Full-Stack Mobile and Web developer with a strong foundation in
                web development. I recently graduated with a B.Sc Computer Science in 2022 and I'm eager to embark
                on a journey in the world of technology.</p>
              <button className='btn btn-secondary my-2 mx-2'><a href='https://www.linkedin.com/in/seshadri-kaku-78735b25b ' className='a'>More about me</a></button>
              <button className='btn btn-secondary my-2 mx-2'> <a href={process.env.PUBLIC_URL + '/Seshadri.pdf'} rel="noreferrer" className='a' target="_blank" >Download CV</a></button>
              <div className='details d-flex my-3'>
                <div className='my-4 mx-4 '><a href='https://github.com/seshadrikaku' className='icon'><GitHubIcon style={{ fontSize: '35px' }} /></a></div>
                <div className='my-4 mx-4 ' ><a href='mailto:kakuseshadri033@gmail.com' className='icon'><EmailIcon style={{ fontSize: '35px' }} /></a></div>
                <div className='my-4  mx-4 '><a href='https://www.linkedin.com/in/seshadri-kaku-78735b25b' className='icon' ><LinkedInIcon style={{ fontSize: '35px' }} /></a></div>
              </div>
            </div>

          </div>

          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 col-xxl-5 mt-5 text-center'>
            <img src='https://images.unsplash.com/photo-1625832371520-0179d4f2cd25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=468&q=80' alt='img' className='about-img img-fluid p-2' style={{ height: "80%" }} />
          </div>

        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <h1 className='text-center fs-1 my-5 fw-bold'>Technical Skills</h1>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
            <div className='shadow my-3 py-2'>
              <h3 className='m-3 py-2 text-center'>Web Technologies</h3>
              <button className=' border border-0 mx-2 px-2 rounded-2 my-2 '>HTML</button>
              <button className='border border-0 mx-2 px-2 rounded-2 my-2'>CSS</button>
              <button className='border border-0 mx-2 px-2 rounded-2  my-2'>BOOTSTRAP</button>
              <button className='border border-0 mx-2 px-2 rounded-2 my-2'>JavaScript</button>
              <button className=' border border-0 mx-2 px-2 rounded-2  my-2'>React Js</button>

            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
            <div className='shadow py-2 my-3'>
              <h3 className='m-3 py-2 text-center'>Front end</h3>
              <button className=' border border-0 mx-2 px-2 rounded-2 my-2 '>HTML</button>
              <button className='border border-0 mx-2 px-2 rounded-2 my-2'>CSS</button>
              <button className='border border-0 mx-2 px-2 rounded-2  my-2'>BOOTSTRAP</button>
              <button className='border border-0 mx-2 px-2 rounded-2  my-2'>JavaScript</button>
              <button className='border border-0 mx-2 px-2 rounded-2 my-2'>JQuery</button>
              <button className=' border border-0 mx-2 px-2 rounded-2  my-2'>React Js</button>
             
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
            <div className='shadow py-2 my-3'>
              <h3 className='m-3 py-2 text-center'>Back end</h3>
            
              <button className=' border border-0 mx-2 px-2 rounded-2 my-2 '>Node Js</button>
              <button className='border border-0 mx-2 px-2 rounded-2 my-2'>Express Js</button>
              <button className='border border-0 mx-2 px-2 rounded-2 my-2'>Mongo DB</button>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 '>
            <div className='shadow py-2 my-3'>
              <h3 className='m-3 py-2 text-center'>Mobile App Developer</h3>
              <button className=' border border-0 mx-2 px-2 rounded-2 my-2 '>Dart</button>
              <button className='border border-0 mx-2 px-2 rounded-2 my-2'>Flutter</button>
              <button className='border border-0 mx-2 px-2 rounded-2 my-2'>Firebase</button>
              <button className=' border border-0 mx-2 px-2 rounded-2  my-2'>Push Notification</button>
              <button className=' border border-0 mx-2 px-2 rounded-2 my-2 '>Payment Gateways</button>
              <button className='border border-0 mx-2  px-2 rounded-2 my-2'>RiverPod</button>
             
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <h2 className='fw-bold text-center my-5'>Educational Qualifications</h2>

          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
            <div className='S-Degree text-center py-3 my-2'>
              <img src={seshi} alt='img' className='seshi-edu img-fluid mb-3 ' />
              <h4 className='py-2'>Priyadarshini College of Engineering & Technology</h4>
              <h3 className='py-2'>2022-2024</h3>
              <button className='per-box px-2 py-1 my-2 '>75 %</button>
              <h4 className='py-2'>Master of Computer Applications</h4>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
            <div className='S-Degree text-center py-3 my-2'>
              <img src={seshi} alt='img' className='seshi-edu img-fluid mb-3 ' />
              <h4 className='py-2'>Viveka Arts & Science College</h4>
              <h3 className='py-2'>2019-2022</h3>
              <button className='per-box px-2 py-1 my-2 '>82 %</button>
              <h4 className='py-2'>B.Sc Computer Science</h4>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
            <div className='S-Degree text-center py-3 my-2'>
              <img src={seshi} alt='img' className='seshi-edu img-fluid mb-3 ' />
              <h4 className='py-2'>Omega Junior College,Pamuru</h4>
              <h3 className='py-2'>2017-2019</h3>
              <button className='per-box px-2 py-1 my-2 '> 82.5 %</button>
              <h4 className='py-2'>Intermediate</h4>
            </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default About
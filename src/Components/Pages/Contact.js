
import '../Styles/Contact.css'
import sk from '../seshadri.jpg'

const Contact = () => {

  const form=document.getElementById("Dataform")

  const SubmitHandle = (e) => {
    e.preventDefault()
    alert("Successfully message sent")
    form.reset()
  }



  return (
    <>

      <div className='container-fluid'>
        <div className='row' id='Contact'>


          <div className='col-12 text-center' id='contact-us' >
            <div className='ss shadow my-5 mx-5 py-5' >
              <img src={sk} alt='seshadri.png' className='contact-img img-fluid ' />
              <p className='py-3 fw-bold'>kakuseshadri033@gmail.com</p>
              <div className='d-flex justify-content-around py-3'>
              <a href='https://www.linkedin.com/in/seshadri-kaku-78735b25b' className='icon'>
              <img src='https://yt3.ggpht.com/-CepHHHB3l1Y/AAAAAAAAAAI/AAAAAAAAAAA/Z8MftqWbEqA/s900-c-k-no/photo.jpg' alt='linkedin' className='img-fluid rounded-5' style={{width:"60px"}}/>
              </a>
              <a href='mailto:kakuseshadri033@gmail.com' className='icon'>
              <img src='https://cdn-1.webcatalog.io/catalog/icloud-mail/icloud-mail-icon.png' alt='email' className='img-fluid rounded-5' style={{width:"60px"}}/></a>
              <a href='https://web.whatsapp.com/' className='icon' >
              <img src='https://th.bing.com/th/id/R.1616705abfe27896d3017b29c6831769?rik=ROKYOAmaxmFHMg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_297947.png&ehk=NB3BU%2fe3Xqy%2fzx56cZiXKLYChuXUmLbMEoAraqxSAnM%3d&risl=&pid=ImgRaw&r=0' alt='contact' className='img-fluid rounded-5' style={{width:"60px"}}/>
              </a>
              </div>
            </div>
          </div>
          

          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center'>
            <div className='my-5'>
              <form>
                <input type='text'   name='name'   style={{ width: "80%" }} value="Seshadri Kaku" className='bg rounded-2 border-0 px-4 py-2 '/>
                <br />
                <br />
                <input type='email'    name='emial'   style={{ width: "80%" }} value="kakuseshadri033@gmail.com" className='bg rounded-2 px-4 border-0 py-2 '/>
                <br />
                <br />
                <input type='text'    name='message'   style={{ width: "80%" }}   value="+91 6309373318" className='bg rounded-2 border-0 py-2  px-4' />
                <br />
                <br />
                <input type='text'    name='message'   style={{ width: "80%" }}  value="https://app.netlify.com/teams/seshadrikaku/overview"  className='bg rounded-2 border-0 py-2  px-4' />
                <br/>
                <br/>
                <input type='text'    name='message'   style={{ width: "80%" }}   value="https://github.com/seshadrikaku" className='bg rounded-2 border-0 py-2  px-4' />
              </form>
            </div>
          </div>
          
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center'>
            <div className='my-5'>
              <form onSubmit={SubmitHandle} id='Dataform'>
                <input type='text' placeholder='Enter Your Name'  name='name'   style={{ width: "80%" }} required className='bg rounded-2 border-0 py-2 px-2'/>
                <br />
                <br />
                <input type='email' placeholder='Enter Your Email'   name='emial'   style={{ width: "80%" }} required className='bg rounded-2 border-0 py-2 px-2'/>
                <br />
                <br />
                <textarea rows="5"  type='text' placeholder='Enter Your Message'   name='message'   style={{ width: "80%" }}  required className='bg rounded-2 border-0 py-2  px-2' />
                <br />
                <br />
                <button className='btn btn-secondary text-light' type='submit' style={{ width: "80%" }} >Submit</button>
              </form>
            </div>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default Contact
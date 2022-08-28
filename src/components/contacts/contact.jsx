import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {GrFacebook} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_g5wfzah', 'template_c76peet', form.current, '0EQevFkeocG2O5Lbd')
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5> Get In Touch </h5>
      <h2> Contact Me </h2>
      <div className=' container contact__container'>
          <div className='contact__options'>

            <article className='contact__option'>
                <MdEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>ashmi7102015@gmail.com</h5>
                <a href='mailto:ashmi7102015@gmail.com' target='_blank'> Send a Message</a>
            </article>

            <article className='contact__option'>
                <GrFacebook className='contact__option-icon'/>
                <h4>Facebook</h4>
                <h5>ashmi.kumari</h5>
                <a href='https://www.facebook.com/ashmi.kumari.1428' target='_blank'> Send a Message</a>
            </article>
          
            <article className='contact__option'>
                <BsLinkedin className='contact__option-icon'/>
                <h4>LinkedIn</h4>
                <h5>Ashmi Kumari</h5>
                <a href='https://www.linkedin.com/in/ashmi-kumari-504728159' target='_blank'> Send a Message</a>
            </article>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' className='testbox' placeholder='Your Full Name' required />
              <input type='email' className='testbox' name='email' placeholder='Your Email'  required />
              <textarea name='message' placeholder='Your Message ....' required>
              </textarea>
              <button type='submit' className='btn btn-primary'> Send Message</button>
            </form>
          </div>
      </div>
    </section>
  )
}

export default Contact
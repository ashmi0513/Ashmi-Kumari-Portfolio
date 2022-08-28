import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
          <div className='about__me'>
              <div className='about__me-image'>
                <img src={ME} alt='About Image' className='about-image' />
              </div>
          </div>
          <div className='about__content'>
              
              <div className='about__cards'>
                <article className='about__card'>
                    <FaAward className='about_icon'/>
                    <h5>Experience</h5>
                    <small>3+ Years Working </small>
                </article>
                
                <article className='about__card'>
                    <VscFolderLibrary className='about_icon'/>
                    <h5>Projects</h5>
                    <small>20+ Completed</small>
                </article>

              </div>

              <p>
                      I am a web developer currently working in Bengaluru, India. I have 3+ years of experience in working with different web techologies.
                      I have started learning web skills since my college days and keep my skills updating with the latest technology in market.
                      These days I am trying my hands in learning DevOps tools and Web3 development technologies.
                      Although I have started my carrer as storage enginner. I have been enrolled as a student in WILP(Work Integrated Learning Programme)
                      offered by Wipro Technologies. I have been assigned to Dell EMC Storage XtremIO All Flash Array project, and have worked as 
                      as a Level-1 / Level-2(internal) Technical Support  Enginner.
                    
              </p>                

              <a href='#contact' className='btn btn-primary'>
                Let's Talk
              </a>

          </div>
      </div>
    </section>
  )
}

export default About
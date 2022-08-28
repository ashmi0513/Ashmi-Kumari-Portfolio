import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

const services = () => {
  return (
    <section id='services'>
      <h5>  What I Offer </h5>
      <h2> Services </h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
               <ul className='service__list'>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Being a website designer I always look forward for amazing designs that suits my applications UI.
                    </p>
                </li>

                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Designing attractive UI is something that I am passinate about.
                    </p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Along with attractive UI, my key focus always on builing user friendly apps.
                    </p>
                </li>

                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Always try to build web apps suitable for all possible end devices for amazing user experience.
                    </p>
                </li>

                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Good hands in analyzing and solving UX problems.
                    </p>
                </li>
              </ul>
          </article>

        <article className='service'>
          <div className='service__head'>
            <h3> Web Development </h3>
          </div>
              <ul className='service__list'>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Updated with latest frontend designing tools like 
                       Html, CSS, JavaScript, Bootstrap, JQuery, EJS, React.js.
                    </p>
                </li>

                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Along with front end, have good understanding of backend building tools like
                       Node.js, Express.js, MongoDB, and all other supporting tools. 
                    </p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       These days I am trying my hands in Web3 and learning to build decentralized web applications.
                    </p>
                </li>
              </ul>            
          </article>

        <article className='service'>
          <div className='service__head'>
            <h3>DevOps</h3>
          </div>
              <ul className='service__list'>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Comfortable in working with Linux.
                    </p>
                </li>

                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Friendly with version control using Git and GitHub
                    </p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Learning other CI/CD tool like Jenkins. 
                    </p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Container management tool like Docker.
                    </p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>
                       Configuration management using CHEF and Ansible.
                    </p>
                </li>
              </ul>
           </article>
      </div>
    </section>
  )
}

export default services
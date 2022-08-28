import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {SiLinkedin} from 'react-icons/si'
import './footer.css'



const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ashmi Kumari</a>
      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#protfolio'>Portfolio</a></li>
        <li><a href='#services'>Srvices</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookSquare /></a>
        <a href='https://twitter.com'> <FaTwitter /></a>
        <a href='https://instagram.com'> <GrInstagram /> </a>
        <a href='https://linkedin.com'> <SiLinkedin /> </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2022 AshmiKumari. All right reserved </small>
      </div>
    
    </footer>
  )
}

export default footer
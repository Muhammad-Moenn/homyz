import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
function Footer() {
  return (
    <div className='footer-box'>
      <div>
        <div className='f-left'>
          <img src='https://real-estate-web.pages.dev/logo.png'alt=''></img>
          <p>Our vision is to make all people<br/>
          the best place to live for them.</p>
        </div>
        <div className='f-right'>
          <h1 f-r-information>Information</h1>
          <p>145 New York, FL 5467, USA</p>
          <ul>
           <li><Link to="hero-box" smooth={true} offset={0} duration={500}>Property</Link></li>
           <li><Link to="value-box" smooth={true} offset={0} duration={500}>Services</Link></li>
           <li><Link to="residencies-box" smooth={true} offset={0} duration={500}>Product</Link></li>
           <li><Link to="contact-box" smooth={true} offset={0} duration={500}>About Us</Link></li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer
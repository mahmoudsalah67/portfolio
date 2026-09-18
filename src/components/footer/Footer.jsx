import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Mahmoud Salah</a>
      <ul className='links'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
         
      </ul>
      <div className="footer_socials">
        <a href={'https://www.facebook.com/mahmoud.keshta.180?locale=ar_AR'} target='_blank' ><FaFacebookF /> </a>
        <a href={'https://www.instagram.com/mahmoud.salah88/'} target='_blank' ><FaInstagram /></a>
        <a href={'https://www.linkedin.com/in/mahmoud-salah-4487393a2/'} target='_blank'><FaLinkedin /></a>
         
      </div>
      <div className="footer_copyright">
        <small>&copy; <a href="#">Mahmoud Salah</a>All Rights Reserved </small>
      </div>
    </footer>
  )
}

export default Footer
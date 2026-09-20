import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Homesocheals = () => {
  return (
    <div
     className='home_socials '>
        <a href="https://www.linkedin.com/in/mahmoud-salah-4487393a2/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/mahmoudsalah67" target='_blank'><FaGithub /></a>
        <a href="https://www.instagram.com/mahmoud.salah88/" target='_blank'><FaInstagram /></a>
     </div>
  )
}

export default Homesocheals
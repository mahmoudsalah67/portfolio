import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import { useState } from 'react';
const Nav = () => {
  const [active , setactivenav] = useState("#")
  return (
   <nav>
<a className={active === "#" ? "active" : ""} href="#" onClick={()=> setactivenav("#")}> <IoHomeOutline /> </a>
<a href="#about" className={active === "#about" ? "active" : ""} onClick={()=> setactivenav("#about")}> <LuUserRound /> </a>
<a href="#services" className={active === "#services" ? "active" : ""} onClick={()=> setactivenav("#services")}> <BiBook /> </a>
<a href="#projects" className={active === "#projects" ? "active" : ""} onClick={()=> setactivenav("#projects")}> <RiServiceLine /> </a>
<a href="#contact" className={active === "#contact" ? "active" : ""} onClick={()=> setactivenav("#contact")}> <BiMessageSquareDetail /> </a>
   </nav>
  )
}

export default Nav
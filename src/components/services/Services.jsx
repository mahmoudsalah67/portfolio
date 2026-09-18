import React from 'react'
import './services.css'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
const Services = () => {
  return (
    <section id='services'>
       <div className="top_section">
           
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="contanier contanier_services" >
        <article className='card'>
<MdDesignServices  className='icon'/>
<h3>Web Design</h3>
      <p>I design modern, responsive web interfaces that focus on user experience, clarity, and visual balance</p>   </article>
        <article className='card'>
<IoIosRocket  className='icon'/>
<h3>Fast Performance</h3>
     <p>I build fast and optimized websites with a strong focus on performance, loading speed, and smooth user interaction.</p>    </article>
        <article className='card'>
<FaCode  className='icon'/>
<h3>Clean Code</h3>
    <p>I craft clean, high-performance web applications with modern design principles and a strong focus on user experience.</p>     </article>
      </div>
    </section>
  )
}

export default Services
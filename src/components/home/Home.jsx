import React from 'react'
import Me from '../../assets/mahmoud salah.jpg'
import Cv from '../../assets/Mahmoud_Salah_Ali_Keshta_CV.pdf'
import Homesocheals from './Homesocheals'

import './Home.css'
 
function Home() {
  return (
    <div className='home'>
      <div className="contanier home_contanier ">
        <h4>Hello I'm</h4>
        <h1>Mahmoud Salah</h1>
        <h4 className='text-light'>Frontend Developer</h4>

        <div className='btns '>
          <a href={Cv} className='btn' download>Download Cv</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a> 
        </div>
      
          <div className="me">
            <img src={Me} alt="" />
          </div>
      </div>
      <Homesocheals />
<a href="#about" className='scroll_down'>Scrooll Down </a>


    </div>
  )  
}

export default Home
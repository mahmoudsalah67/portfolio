import React, { useRef } from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
const contactdata=[
  {
    id:1,
    icon:<MdOutlineEmail />,
    title:"email",
    info:"mahmoudkeshta00@gmail.com",
    link:"mailto:mahmoudkeshta00@gmail.com"
  },
   {
    id:1,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Mahmoud Salah",
    link: "https://www.facebook.com/mahmoud.keshta.180?locale=ar_AR",
  },
  {
    id:1,
    icon: <BsWhatsapp />,
    title:"WhatsApp",
    info: "01097308749",
    link: "https://wa.me/201097308749",
  }
]
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 
         'YOUR_PUBLIC_KEY'
      )
       
  };
  return (
    <div className="contact" id="contact">
       <div className="top_section">
           
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="contanier contanier_contact">
        <div className="contact_options">
{contactdata.map(({id,icon,title,info,link})=>(
   <article key={id} className='contact_option'>
{icon}
<h4>{title}</h4>
<h5>{info}</h5>
<a href={link} target='_blank'>Send Massege</a>
  </article>
))}
        </div>
        <form action="">
          <input type="text" placeholder='Full Name'/>
          <input type="email" placeholder='email' name='email' />
          <textarea rows={10} name="" id="" placeholder='Massege'></textarea>
          <button className='btn btn-primary'>Send Massege</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
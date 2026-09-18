import React from 'react'
import './Projects.css' 
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg';
 
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
 


const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'ecommerce',
    github: 'https://github.com/mahmoudsalah67/ecommerce',
    demo: 'https://demo1.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Mealify',
    github: 'https://github.com/mahmoudsalah67/Mealify.',
    demo: 'https://loquacious-concha-815423.netlify.app/'
  },
 
  {
    id: 3,
    image: IMG4,
    title: 'Daneials',
    github: 'https://github.com/mahmoudsalah67/exam-1',
    demo: 'https://gleeful-alfajores-ca3331.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'DevFolio',
    github: 'https://github.com/mahmoudsalah67/DevFolio',
    demo: 'https://euphonious-malabi-976841.netlify.app/'
  },
 
];

const Projects = () => {
  return (
     <div className="projects " id='projects'>
      <div className="top_section">
           
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="contanier projects_contanier">
        {portfolioData.map(({id,image ,title,github,demo})=>(
    <article key={id} className='portfolio_item'>
          <div className="portfolio_item_img">
             <img src={image} alt="" />
          </div>

          <h3>{title}</h3>
          <div className="portfolio_item_btns">
            <a href={github} target='_blank' className='btn'>Githup</a>
            <a href={demo} target='_blank'  className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        ))}
    
      </div>
     </div>
  )
}

export default Projects
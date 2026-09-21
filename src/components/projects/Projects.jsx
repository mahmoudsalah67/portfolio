import React from 'react';
import './Projects.css'; 
import IMG1 from '../../assets/joocare.png';
import IMG2 from '../../assets/ecommerce.png';
import IMG4 from '../../assets/daniels.png';

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'JooCare',
    description: 'Modern Healthcare Hiring & Recruitment Platform',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Axios'],
    github: 'https://github.com/mahmoudsalah67/joocare',
    demo: 'https://joocare-eight.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'FreshCart',
    description: 'High-Performance E-Commerce Web App',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Zod'],
    github: 'https://github.com/mahmoudsalah67/e-commerce-nextjs',
    demo: 'https://ecommerce-seven-theta-89.vercel.app/'
  },
  {
    id: 3,
    image: IMG4,
    title: 'Daniels',
    description: 'Responsive Personal Portfolio Template',
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/mahmoudsalah67/exam-1',
    demo: 'https://daniels-rust-pi.vercel.app/'
  }
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="top_section">
        <h5>What Projects I Have</h5>
        <h2>My Projects</h2>
      </div>

      <div className="contanier projects_contanier">
        {portfolioData.map(({ id, image, title, description, technologies, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={image} alt={title} />
            </div>

            <h3>{title}</h3>
            
            {/* وصف قصير للمشروع */}
            <p style={{ color: '#a0a0a0', fontSize: '0.9rem', margin: '0.5rem 0' }}>
              {description}
            </p>

            {/* التقنيات المستخدمة */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', margin: '0.8rem 0' }}>
              {technologies.map((tech, index) => (
                <span key={index} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '0.4rem',
                  fontSize: '0.75rem',
                  color: '#4db5ff'
                }}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="portfolio_item_btns">
              <a href={github} target="_blank" rel="noreferrer" className="btn">
                GitHub
              </a>
              <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
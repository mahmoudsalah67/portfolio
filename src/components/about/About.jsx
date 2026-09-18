import React from "react";
import ME from "../../assets/unnamed.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="top_section ">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>

        <div className="contanier about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="" />
            </div>
          </div>
          <div className="about_conten">
            <div className="about_cards">
              <div className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>1 Year Working</small>
              </div>
              <div className="about_card">
                <FiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </div>
              <div className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </div>
            </div>
              <p>Motivated Front-End Developer with hands-on experience in building responsive, interactive, and scalable web applications using React , Next.js, TypeScript, and modern UI frameworks. Trained at Route Academy, with multiple portfolio projects demonstrating strong UI/UX design, performance optimization, and clean code practices.

Passionate about continuous learning, teamwork, and transforming creative ideas into functional digital solutions.</p>
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

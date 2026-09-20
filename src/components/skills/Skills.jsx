import React from "react";
import "./Skills.css";

import Css from "../../assets/css3.svg";
import Javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import ReactJS from "../../assets/react.svg";
import nextjs from "../../assets/nextjs.png";
import Tailwind from "../../assets/tailwindcss.svg";
import bootstrap from "../../assets/bootstrap-original.svg"
import html from "../../assets/html5-original.svg";
const SkillsData = [
  {
    id: 1,
    image: Css,
    title: "CSS",
    disc: "User Interface",
  },
  {
    id: 2,
    image: Javascript,
    title: "JavaScript",
    disc: "Interaction",
  },
  {
    id: 3,
    image: ReactJS,
    title: "React",
    disc: "library",
  },
  {
    id: 4,
    image: Tailwind,
    title: "TailwindCSS",
    disc: "User Interface",
  },
  {
    id: 5,
    image: typescript,
    title: "TypeScript",
    disc: "Programming Language",
  },
  {
    id: 6,
    image: html,
    title: "Html",
    disc: "hyper text",
  },
  {
    id: 7,
    image: nextjs,
    title: "Next.js",
    disc: "Framework",
  },
  {
    id: 8,
    image: bootstrap,
    title: "Bootstrap",
    disc: "Framework",
  },
];
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="contanier contanier_skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          
          <article className="card_skill">
            <div className="icon">
              <img src={image} alt="" />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;

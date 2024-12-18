import './index.css'
import html from '../../assets/html-5.png'
import css from "../../assets/css-3.png";
import nodejs from '../../assets/node.png'
import react from '../../assets/react.png'
import js from '../../assets/js.png'
import typescript from '../../assets/typescript.png'
import express from '../../assets/Express.png'
import eletron from '../../assets/Electron.png'
import PostGres from '../../assets/postgre.png'
import git from "../../assets/Git.png";
import Java from "../../assets/java.png";
import spring from "../../assets/Spring.png";
import grath from "../../assets/GraphQL.png";
import { useState } from 'react';
export default function Skills() {
  const [active , setActive] = useState(1)
    const skills = [
      {
        id: 1,
        name: "HTML5",
        image: html,
      },
      {
        id: 2,
        name: "CSS3",
        image: css,
      },
      {
        id: 3,
        name: "JavasCript",
        image: js,
      },
      {
        id: 4,
        name: "React Js",
        image: react,
      },
      {
        id: 5,
        name: "React Native",
        image: react,
      },

      {
        id: 9,
        name: "Node Js",
        image: nodejs,
      },
      {
        id: 101,
        name: "Express Js",
        image: express,
      },
      {
        id: 11,
        name: "PostGresSql",
        image: PostGres,
      },
      {
        id: 13,
        name: "Eletron Js",
        image: eletron,
      },
      {
        id: 14,
        name: "TypeScript",
        image: typescript,
      },
      {
        id: 15,
        name: "Git",
        image: git,
      },
      {
        id: 16,
        name: "Java",
        image: Java,
      },
      {
        id: 18,
        name: "Spring Boot",
        image: spring,
      },
      {
        id: 48,
        name: "GrathQL",
        image: grath,
      }
    ];

 return (
   <section id="skills">
     <small data-aos="fade-left">Minhas hardSkills</small>
     <h1 data-aos="fade-right">Minhas Habilidades</h1>
     <article>
       {skills.map((skill, index) => (
         <figure
           key={index}
           data-aos="flip-left"
           onClick={() => {
             setActive(skill.id);
           }}
         >
           <img
             src={skill.image}
             style={{
               filter: active == skill.id && "grayscale(0%)",
               transform: active == skill.id && "translateY(-15px)",
             }}
           />
           <p
             style={{
               transform: active == skill.id && "translateY(-15px)",
             }}
           >
             {skill.name}
           </p>
         </figure>
       ))}
     </article>
   </section>
 );
}
import './index.css'
import html from '../../assets/HTML5.svg'
import css from "../../assets/CSS3.svg";
import nodejs from '../../assets/Node.js.svg'
import react from '../../assets/React.svg'
import js from '../../assets/JavaScript.svg'
import typescript from '../../assets/TypeScript.svg'
import express from '../../assets/Express.svg'
import eletron from '../../assets/Electron.svg'
import PostGres from '../../assets/PostgresSQL.svg'
import git from "../../assets/Git.svg";
import Java from "../../assets/Java.svg";
import spring from "../../assets/Spring.svg";
import grath from "../../assets/GraphQL.svg";
import nextjs from "../../assets/Next.js.svg";
import mongodb from "../../assets/MongoDB.svg";
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
      } ,{
        id: 148,
        name: "Next JS",
        image: nextjs,
      },
      {
        id: 448,
        name: "Mongoose JS",
        image: mongodb,
      }
    ];

 return (
   <section id="skills">
     <small data-aos="fade-left">Minhas hardSkills</small>
     <h2 data-aos="fade-right">Minhas Habilidades</h2>
     <article>
       {skills.map((skill, index) => (
         <figure
           key={index}
           data-aos="fade-left"
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
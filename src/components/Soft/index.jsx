import { useEffect } from 'react';
import './index.css'
import { FaCircle } from "react-icons/fa";

export default function Soft() {
    const softskils = [
          {
            id: 1,
            title: "Comunicação",
            description:
              "Possuo excelentes capacidades comunicativas, tanto escritas como orais, que me permitem interagir eficazmente com equipas técnicas, clientes e stakeholders. Sou capaz de traduzir conceitos técnicos complexos numa linguagem clara e acessível a todos, facilitando a compreensão e a colaboração",
            icon: "",
          },
          {
            id: 2,
            title: "Trabalho em Equipe",
            description:
              "Acredito firmemente no poder do trabalho em equipa e sou um colaborador ativo e proativo. Estou habituado a trabalhar em ambientes ágeis, utilizando metodologias como Scrum e Kanban. ",
            icon: "",
          },
          {
            id: 4,
            title: "Adaptabilidade",
            description:
              "O setor tecnológico está em constante evolução e comprometo-me constantemente a aprender novas tecnologias e a adaptar-me às mudanças. Estou aberto a experimentar novas abordagens e a sair da minha zona de conforto.",
            icon: "",
          },
          {
            id: 5,
            title: "Resolução de Problemas",
            description:
              "Demonstro forte habilidade em identificar, analisar e resolver problemas complexos de forma eficaz.Abordo os desafios com uma abordagem analítica e orientada para a solução. Sou capaz de identificar rapidamente as causas de um problema e de desenvolver soluções eficazes e inovadoras. ",
            icon: "",
          },
        
    ];
  useEffect(() => {
  
    document.getElementById("MysSoftsSkill").style.opacity = "0";
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                document.getElementById("MysSoftsSkill").style.opacity = "1";
            } else {
                document.getElementById("MysSoftsSkill").style.opacity = "0";
            }
        })
        observer.observe(document.getElementById("startShow"));
        return () => {
            observer.disconnect()
        }
    },[])
 return (
   <section id="soft">
     <div id="MysSoftsSkill">
       <small>Minhas softSkills</small>
       <h1>Minhas softSkills</h1>
     </div>
     <span>
       {softskils.map((soft, index) => (
         <figure
           data-aos="fade-up"
           key={index}
           id={soft.id == 2 ? "startShow" : ""}
         >
           <i>
             <FaCircle />
             <FaCircle />
             <FaCircle />
           </i>
           <h2>{soft.title}</h2>
           <p>{soft.description}</p>
         </figure>
       ))}
     </span>
   </section>
 );
}
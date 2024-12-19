import OpenUrl from '../../util/openUrl';
import './index.css'
import { FaCircle, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { FaDesktop } from "react-icons/fa";
import './index.css'
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { CiServer } from "react-icons/ci"
export default function Projects() {

  const projects = [
    {
      id: 1,
      name: "Kipapa",
      description:
        "Site de Pedidos de uma empresa fictícia , com o painel de gestão do administrador totalmente funcional e responsivo.",
      tecnologies: ["React Js", "Node Js", "PostGresSql", "CSS"],
      repo: "",
      deploy: "ff",
      category: "Backend",
    },
    {
      id: 1,
      name: "Kipapa",
      description:
        "Site de Pedidos de uma empresa fictícia , com o painel de gestão do administrador totalmente funcional e responsivo.",
      tecnologies: ["React Js", "Node Js", "PostGresSql", "CSS", "TypeScript"],
      repo: "",
      deploy: "ff",
      category: "Frontend",
    },
    {
      id: 1,
      name: "Kipapa",
      description:
        "Site de Pedidos de uma empresa fictícia , com o painel de gestão do administrador totalmente funcional e responsivo.",
      tecnologies: ["React Js", "Node Js", "PostGresSql", "CSS", "HTML"],
      repo: "",
      deploy: "ff",
      category: "Desktop",
    },
    {
      id: 1,
      name: "Kipapa",
      description:
        "Site de Pedidos de uma empresa fictícia , com o painel de gestão do administrador totalmente funcional e responsivo.",
      tecnologies: ["React Js", "Node Js", "PostGresSql", "CSS", "HTML"],
      repo: "",
      deploy: "ff",
      category: "Mobile",
    },
  ];
 return (
   <section id="projects">
     <small data-aos="zoom-in-left">Projectos mais recentes</small>
     <h1 data-aos="zoom-in-right">Meus Projectos</h1>
     <article>
       {projects.map((project, index) => (
         <figure
           key={index}
           data-aos={index % 2 == 1 ? "zoom-in-left" : "zoom-in-right"}
         >
           <i>
             <FaCircle />
             <FaCircle />
             <FaCircle />
           </i>

           <div>
             <h2>{project.name}🚀</h2>
           </div>
           <figcaption>
             <p>{project.description}</p>
             <p>
               {project.category == "Frontend" ||
               project.category == "Desktop" ? (
                 <FaDesktop />
               ) : project.category == "Backend" ? (
                 <CiServer />
               ) : (
                 <HiMiniDevicePhoneMobile />
               )}
               {project.category}
             </p>
             <p>Tecnologias Usadas</p>
             <aside>
               {project.tecnologies.map((tec, index) => (
                 <span key={index}>{tec}</span>
               ))}
             </aside>
             <div>
               {project.deploy && (
                 <button
                   onClick={() => {
                     OpenUrl(project.deploy);
                   }}
                 >
                   Ver o Projecto
                 </button>
               )}
               <button
                 id="repo"
                 onClick={() => {
                   OpenUrl(project.repo);
                 }}
               >
                 Ver o Repositório
               </button>
             </div>
           </figcaption>
         </figure>
       ))}
     </article>
     <div>
       <button>
         Ver mais
         <FaPaperPlane/>
       </button>
       <button>
         Repositório
         <FaGithub/>
       </button>
     </div>
   </section>
 );
}
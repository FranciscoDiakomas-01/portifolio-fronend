import OpenUrl from '../../util/openUrl';
import './index.css'
import { FaCircle, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './index.css'
import banner1 from '../../assets/banners/banner1.png'
import banner2 from "../../assets/banners/banner2.png";
export default function Projects() {

  const projects = [
    {
      title: "Kipapa",
      description: "Kipapa é uma plataforma de delivery de produtos online, onde o cliente pode fazer o seu pedido e receber em casa e monitorar o seu pedido em tempo real",
      technologies: ["React", "Node", "Postgres", "CSS" , "HTML" , "TypeScript" , "JavaScript"],
      deploy: "https://kipapa.vercel.app",
      repo: "https://github.com/FranciscoDiakomas-01/kipapa",
      banner: banner1,
    },
    {
      title: "App Clima",
      description:"App Clima é uma aplicação que mostra o clima de uma determinada cidade",
      technologies: ["HTMl", "CSS", "JS"],
      deploy: "https://app-clima-rust-ten.vercel.app/",
      repo: "https://github.com/FranciscoDiakomas-01/app-clima",
      banner: banner2,
    },
  ];
 return (
   <section id="projects">
     <small data-aos="zoom-in-left">Projectos mais recentes</small>
     <h1 data-aos="zoom-in-right">Meus Projectos</h1>
     <article>
       {Array.isArray(projects) &&
         projects.length > 0 &&
         projects.map((project, index) => (
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
               <img src={project.banner} />
             </div>
             <figcaption>
               <strong>{project.title}</strong>
               <p>{project.description}</p>

               <p>Tecnologias Usadas</p>
               <aside>
                 {project.technologies &&
                   project.technologies.map((tec, index) => (
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
                     <FaPaperPlane />
                   </button>
                 )}
                 <button
                   id="repo"
                   onClick={() => {
                     OpenUrl(project.repo);
                   }}
                 >
                   Repositório
                   <FaGithub />
                 </button>
               </div>
             </figcaption>
           </figure>
         ))}
     </article>
   </section>
 );
}
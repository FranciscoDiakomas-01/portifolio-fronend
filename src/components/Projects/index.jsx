import OpenUrl from '../../util/openUrl';
import './index.css'
import { FaCircle, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { FaDesktop } from "react-icons/fa";
import './index.css'
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { CiServer } from "react-icons/ci"
import { useEffect, useState } from 'react';
import getProjects from '../../services/getProjects';
export default function Projects() {

  const [projects, setProject] = useState([])
  useEffect(() => {
    async function get() {
      const response = await getProjects()
      setProject(response)
    }
    get()

  },[])
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
               <h2>{project.title}🚀</h2>
             </div>
             <figcaption>
               <p>{project.description}</p>
               <p>
                 {String(project.category).startsWith("F") ||
                 String(project.category).startsWith("D")? (
                   <FaDesktop />
                 ) : String(project.category).startsWith("B") ?(
                   <CiServer />
                 ) : (
                   <HiMiniDevicePhoneMobile />
                 )}
                 {project.category}
               </p>
               <p>Tecnologias Usadas</p>
               <aside>
                 {project.tecnologies &&
                   project.tecnologies.map((tec, index) => (
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
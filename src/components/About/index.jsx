import './index.css'
import me from '../../assets/me.png'
import { FaCircle, FaDownload , FaGithub, FaPaperPlane } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { IoReturnUpForward } from 'react-icons/io5';
export default function About() {
  const [text, setText] = useState(``);

  useEffect(() => {
   const interval =  setInterval(() => {
      if (window.innerWidth <= 720) {
        setText(`Desenvolvedor Full Stack com 2 anos de experiência em desenvolvimento
         de aplicações web robustas e escaláveis em busca da minha primeira
         oportunidade. Possuo um sólido conhecimento em Node Js , React Js ,
         Next Js , React Native , Eletron Js , TypeScript , PostgresSql ,
         MongoDb , HTML , CSS , Taiwind Css e Outras tecnologias.`);
        return
      } else {
        setText(`Desenvolvedor Full Stack com 2 anos de experiência em desenvolvimento
         de aplicações web robustas e escaláveis em busca da minha primeira
         oportunidade. Possuo um sólido conhecimento em Node Js , React Js ,
         Next Js , React Native , Eletron Js , TypeScript , PostgresSql ,
         MongoDb , HTML , CSS , Taiwind Css e Outras tecnologias. Ao longo da
         minha carreira, tenho praticado em meus próprios projectos do mundo
         real para fortalecer cada vez mais os meus conhecimentos nas
         tecnologias citadas. Sou apaixonado por resolver problemas complexos e
         entregar soluções de alta qualidade que atendam às necessidades dos
         meus futuros clientes ou empregadores.`);
        IoReturnUpForward
      }
   }, 1000);
    return () => {
      clearInterval(interval)
    }
  },[])
 return (
   <section id="aboutme">
     <article data-aos="fade-right">
       <img src={me} alt="me" />
     </article>

     <aside data-aos="fade-left">
       <h2>Sobre Mim</h2>
       <FaPaperPlane />
       <p>
         <span>
           <FaCircle />
           <FaCircle />
           <FaCircle />
         </span>
         {text}
       </p>
       <div>
         <button>
           <p>Baixar Resumo</p>
           <FaDownload />
         </button>
         <button onClick={() => {
           window.open("https://github.com/FranciscoDiakomas-01");
         }}>
           <p>Repositório</p>
           <FaGithub />
         </button>
       </div>
     </aside>
   </section>
 );
}
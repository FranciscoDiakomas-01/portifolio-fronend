import './App.css'
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect } from 'react';
import Service from './components/Service';
import Skills from './components/Skills';
import Soft from './components/Soft';
import AOS from "aos";
import Contact from './components/Contact';
import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
export function App() {
  const links = [
    {
      id: 1,
      icon: <FaFacebook />,
      url: "https://www.facebook.com/profile.php?id=61560288840032",
    },
    {
      id: 1,
      icon: <FaInstagram />,
      url: "https://www.instagram.com/fran.ciscodiakomas/",
    },
    {
      id: 1,
      icon: <FaGithub />,
      url: "https://github.com/FranciscoDiakomas-01",
    },
    {
      id: 1,
      icon: <FaWhatsapp />,
      url: "https://wa.me/957777993?text=Quero%20Entrar%20em%20contacto%20consigo%20para%20trabalho",
    },
  ];
  useEffect(() => {
     AOS.init({
       duration: 800,
       easing: "ease-in-out",
       once: false,
       offset: 100
     });
    document.addEventListener("scroll", () => {
      
      if (window.scrollY >= 100) {
        document.getElementById("header").classList.add("blur");
        return
      }
      document.getElementById("header").classList.remove("blur");
    })
    
  },[])
  return (
    <main id="app">
      <Header />
      <Home />
      <About />
      <Service />
      <Skills />
      <Soft />
      <Contact />
      <footer>
        <p>Francisco Lombo Diakomas &copy; || Todos Direitos Reservados </p>
        <ul>
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank">
              {link.icon}
            </a>
          ))}
        </ul>
      </footer>
    </main>
  );
}

import './App.css'
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Service from './components/Service';
import Skills from './components/Skills';
import Soft from './components/Soft';
import AOS from "aos";
import Contact from './components/Contact';
import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import Projects from './components/Projects';
import SplashScrenn from './components/SplashScrenn';
import { ToastContainer } from 'react-toastify';
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
  const [isLoad , setLOad] = useState(true);
  useEffect(() => {
     AOS.init({
       duration: 800,
       easing: "ease-in-out",
       once: false,
       offset: 50
     });
    document.addEventListener("scroll", () => {
      
      if (window.scrollY >= 100) {
        document.getElementById("header").classList.add("blur");
        return
      }
      document.getElementById("header").classList.remove("blur");
    })
    setTimeout(() => {
      document.getElementById("spash")?.classList.add("open");
    }, 2000)
    setTimeout(() => {
       setLOad(false)
     }, 2500);
    
  }, [])
  return (
    <main id="app">
      <ToastContainer style={{
        zIndex : '9999999999999999999999999999999999'
      }}/>
      {isLoad ? (
        <SplashScrenn />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Service />
          <Skills />
          <Soft />
          <Projects />
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
        </>
      )}
    </main>
  );
}

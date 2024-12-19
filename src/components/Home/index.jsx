import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
export default function Home() {
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
 
  return (
    <section id="home">
      <span data-aos="zoom-out-right">Olá👋 , sou o </span>
      <h1 data-aos="zoom-in-left">Francisco Lombo Diakomas</h1>
      <h2>Desenvolvedor FullStack</h2>
      <ul>
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank">
            {link.icon}
          </a>
        ))}
      </ul>
      <a href="#contact">Contacte-me</a>
    </section>
  );
}

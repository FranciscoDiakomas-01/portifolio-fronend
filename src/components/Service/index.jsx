import { FaCode, FaDesktop } from "react-icons/fa";
import './index.css'
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { BsDatabaseCheck } from "react-icons/bs";
import { CiServer } from "react-icons/ci"
export default function Service() {

    const services = [
      {
        id: 1,
        title: "Desenvolvimento FrontEnd",
        description:
          "Criação de interfaces web interativas e responsivas, utilizando HTML, CSS, JavaScript e frameworks modernos como Reac & Next Js.",
        icon: <FaCode />,
      },
      {
        id: 2,
        title: "Desenvolvimento Backend & API",
        description:
          "Desenvolvimento da lógica de negócios, APIs e gerenciamento de dados utilizando linguagens como  Node.js & Java  e padrões Rest , GrathQl e WebSocket.",
        icon: <CiServer />,
      },
      {
        id: 3,
        title: "Modelagem e Design de Banco de Dados",
        description:
          "Desenvolvimento de esquemas de banco de dados eficientes e escaláveis, utilizando modelos relacionais como PostgresSql & NoSQL.",
        icon: <BsDatabaseCheck />,
      },
      {
        id: 4,
        title: "Desenvolvimento de Aplicações Desktop",
        description:
          "Criação de aplicações desktop que funcionam em diferentes sistemas operacionais (Windows, macOS, Linux) utilizando tecnologias como Electron Js.",
        icon: <FaDesktop />,
      },
      {
        id: 5,
        title: "Desenvolvimento de Aplicações Móveis",
        description:
          "Desenvolvimento de aplicativos mobile para Android e iOS a partir de um único código-fonte utilizando tecnologias como React Native.",
        icon: <HiMiniDevicePhoneMobile />,
      },
      {
        id: 6,
        title: "Desenvolvimento FullStack",
        description:
          "Desenvolvimento de aplicativos mobile ,  desktop  e web de ponta á ponta com leyauts totalmente elegantes e responsivos utilizando a minha Stack",
        icon: <FaCode />,
      },
    ];

  return (
    <section id="services">
      <small data-aos="fade-left">Oque eu posso fazer</small>
      <h1 data-aos="fade-right">Meus Serviços</h1>
      <article>
        {services.map((service, index) => (
          <figure key={index} data-aos="fade-left">
            {service.icon}
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </figure>
        ))}
      </article>
    </section>
  );
}
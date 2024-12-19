import { FaCircle, FaPaperPlane } from "react-icons/fa";
import "./index.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
export default function Contact() {
  const contact = [
    {
      icon: <FaPhoneVolume />,
      name: "Telefone",
      desciption: "+224 957 777 993",
    },
    {
      icon: <IoLocationOutline />,
      name: "Localidade",
      desciption: "Angola / Luanda / Cacuaco",
    },
    {
      icon: <MdOutlineMailOutline />,
      name: "Email",
      desciption: "francicodiakoma@gmail.com",
    },
  ];
  return (
    <section id="contact">
      <article>
        <i>
          <FaCircle />
          <FaCircle />
          <FaCircle />
        </i>

        <form data-aos="fade-left">
          <h1>Vamos Trabalhar Juntos!</h1>
          <div>
            <input placeholder="Entre com seu nome" required />
            <input placeholder="Entre com seu email" type="email" required />
            <input placeholder="Entre com seu telefone" required />
            <input placeholder="Entre com seu Assunto" required />
          </div>
          <textarea placeholder="Entre com a sua Mensagem" required />
          <button>
            <p>Enviar</p>
            <FaPaperPlane />
          </button>
        </form>
      </article>

      <aside data-aos="zoom-in-left">
        {contact.map((cont, index) => (
          <span key={index}>
            <div>{cont.icon}</div>
            <aside>
              <small>{cont.name}</small>
              <h3>{cont.desciption}</h3>
            </aside>
          </span>
        ))}
      </aside>
    </section>
  );
}

import { FaCircle, FaPaperPlane } from "react-icons/fa";
import "./index.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { useState } from "react";
import { SendMessage } from "../../services/SendMsg";
import Loader from "../loader";
import { toast } from "react-toastify";
export default function Contact() {
  const [user, setUser] = useState({
    name: "",
    tel: "",
    email: "",
    subject: "",
    msg: "",
  });
  const [isLoad, setLoad] = useState(false);
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

  async function handleOnSubmit(e) {
    e.preventDefault();
    const response = await SendMessage(user);
    if (response) {
      
      setLoad(true);
      setUser({ name: "", tel: "", email: "", subject: "", msg: "" });
      setTimeout(() => {
        setLoad(false);
      }, 2000);
      return;
    } else {
      console.log(response)
      toast.info("Dados inválidos!" , {theme : 'dark'})
    }
  }
  return (
    <section id="contact">
      <article>
        <i>
          <FaCircle />
          <FaCircle />
          <FaCircle />
        </i>

        <form data-aos="fade-left" onSubmit={handleOnSubmit}>
          <h1>Vamos Trabalhar Juntos!</h1>
          <div>
            <input
              placeholder="Entre com seu nome"
              required
              name="name"
              value={user.name}
              onChange={(e) => {
                setUser((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
            <input
              placeholder="Entre com seu email"
              type="email"
              required
              value={user.email}
              name="email"
              onChange={(e) => {
                setUser((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
            <input
              placeholder="Entre com seu telefone"
              required
              name="tel"
              value={user.tel}
              onChange={(e) => {
                setUser((prev) => ({ ...prev, tel: e.target.value }));
              }}
            />
            <input
              placeholder="Entre com seu Assunto"
              required
              name="subject"
              value={user.subject}
              onChange={(e) => {
                setUser((prev) => ({ ...prev, subject: e.target.value }));
              }}
            />
          </div>
          <textarea
            placeholder="Entre com a sua Mensagem"
            required
            name="msg"
            value={user.msg}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, msg: e.target.value }));
            }}
          />
          {isLoad && <p id="res">Mensagem enviada</p>}
          <button
            disabled={isLoad}
            style={{
              opacity: isLoad && "0.5",
            }}
          >
            {isLoad ? (
              <Loader />
            ) : (
              <>
                <p>Enviar</p>
                <FaPaperPlane />
              </>
            )}
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


import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import NavObserver from "../../util/NavObsrver";
export default function Header() {

  const [active , setActive] = useState()
  const links = [
    {
      title: "Inicial",
      id: "#home",
    },
    {
      title: "Sobre",
      id: "#aboutme",
    },
    {
      title: "Serviços",
      id: "#services",
    },
    {
      title: "Habilidades",
      id: "#skills",
    },
    {
      title: "Projectos",
      id: "#projects",
    },
  ];
  useEffect(() => {
    NavObserver(setActive)
  },[])
  return (
    <>
      <header id="header">
        <nav>
          <a href="#home">
            <h1> {"< FLD />"} </h1>
          </a>
          <ul>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.id}
                onClick={() => {
                  setActive(index);
                }}
                style={{
                  color: active == index && "var(--blue)",
                }}
              >
                {link.title}
              </a>
            ))}
            <a href="#contact">Contacte-me</a>
          </ul>
          <TiThMenu
            onClick={() => {
              document.getElementById("mobileNav").classList.add("open");
            }}
          />
        </nav>
      </header>
      <div
        id="mobileNav"
        onClick={() => {
          document.getElementById("mobileNav").classList.remove("open");
        }}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.id}
            onClick={() => {
              setActive(index);
            }}
            style={{
              color: active == index && "var(--blue)",
            }}
          >
            {link.title}
          </a>
        ))}
        <a href="#contact">Contacte-me</a>
      </div>
    </>
  );
}

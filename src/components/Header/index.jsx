

export default function Header() {

    const links = [
      {
        title: "Inicial",
        id: "#home",
      },
      {
        title: "Sobre",
        id: "#about",
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
    return (
      <header id="header">
        <nav>
          <a href="#home">
            <h1> {"< FLD />"} </h1>
          </a>
          <ul>
            {links.map((link, index) => (
              <a key={index} href={link.id}>
                {link.title}
              </a>
            ))}
            <a href="#contact">Contacte-me</a>
          </ul>
        </nav>
      </header>
    );
}
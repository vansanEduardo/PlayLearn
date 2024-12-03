import "./Navbar.css";
import { Link } from "react-router-dom";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const NavBar = () => {
  return (
    <div className="container">
      <nav>
        <div className="title-navbar">
          <Link to="#" onClick={() => scrollToSection("home")}>
            <h3>
              Play<span>Learn</span>
            </h3>
          </Link>
        </div>

        <div className="play">
          <Link to={"/snake"}>
            <button>Jogar</button>
          </Link>
        </div>

        <div className="navigate">
          <Link to={"/"}>
            <i class="fa-solid fa-house"></i> <p>Inicio</p>
          </Link>

          <Link to="#" onClick={() => scrollToSection("about")}>
            <i class="fa-solid fa-circle-info"></i> <p>Sobre</p>
          </Link>

          <Link to="#" onClick={() => scrollToSection("games")}>
            {" "}
            <i class="fa-solid fa-gamepad"></i>
            <p>Jogos</p>
          </Link>
          <Link to="#" onClick={() => scrollToSection("contacts")}>
            <i class="fa-solid fa-phone"></i>
            <p>Contatos</p>
          </Link>
          <Link to={"conquistas"}>
            <i class="fa-solid fa-trophy"></i>
            <p>Conquistas</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

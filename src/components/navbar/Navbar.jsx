import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <nav>
        <div className="title-navbar">
          <a href="#home">
            <h3>
              Play<span>Learn</span>
            </h3>
          </a>
        </div>

        <div className="navigate">
          <Link to={"/"}>
          <i class="fa-solid fa-house"></i> <p >Home</p>
          </Link>

          
          <a href="/#about">
            <i class="fa-solid fa-circle-info"></i> <p>About</p>
          </a>
          <a href="/#games">
            <i class="fa-solid fa-gamepad"></i>
            <p>Games</p>
          </a>
          <a href="/#contacts">
            <i class="fa-solid fa-phone"></i>
            <p>Contact</p>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

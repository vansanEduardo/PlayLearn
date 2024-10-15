import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contacts">
      <div className="our-links">
        <h2>Our Links</h2>

        <div className="links">
          <a href="#home">
            {" "}
            <i class="fa-solid fa-house"></i> <p>Home</p>
          </a>

          <a href="#about">
            <i class="fa-solid fa-circle-info"></i> <p>About</p>
          </a>

          <a href="#games">
            <i class="fa-solid fa-gamepad"></i>
            <p>Games</p>
          </a>
        </div>
      </div>

      <div className="contacts">
        <h2>Contacts</h2>
        <ul>
          <li>
            {" "}
            <i class="fa-solid fa-phone"></i>
            <p>(16)xxxxx-xxxx</p>
          </li>
          <li>
            <i class="fa-solid fa-envelope"></i>
            <p>playlearn@play.com</p>
          </li>
        </ul>
      </div>
      <div className="copy">
      <p>&copy; PlayLearn 2024</p>
      </div>
    </footer>
  );
};

export default Footer;

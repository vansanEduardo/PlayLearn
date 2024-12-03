import "./Footer.css";
import { Link } from "react-router-dom";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer id="contacts">
      <div className="our-links">
        <h2>Membros</h2>

        <div className="links">
          <a href="https://github.com/vansanEduardo" target="_blank">
            <p>Eduardo</p>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fellipe.peres04@gmail.com&su=Assunto&body=Olá,%20gostaria%20de%20saber%20mais%20sobre."
            target="_blank"
          >
            <p>Fellipe</p>
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-vitor-rossi-690a712a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <p>João Rossi</p>
          </a>
          <a
            href="https://www.linkedin.com/in/paulohenriquegini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <p>Paulo</p>
          </a>
        </div>
      </div>

      <div className="contacts">
        <h2>Contatos</h2>
        <ul>
          <li>
            {" "}
            <p>
              <a
                href="https://github.com/vansanEduardo/PlayLearn"
                target="_blank"
              >
                <p> Repositório Do Projeto</p>
              </a>
            </p>
          </li>
          <li>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=groupplaylearn@gmail.com&su=PlayLearn&body=Olá,%20gostaria%20de%20saber%20mais%20sobre." target="_blank">
            
            <p>groupplaylearn@gmail.com</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="copy">
        <p>&copy; PlayLearn 2024 Engenharia Da Computação</p>
      </div>
    </footer>
  );
};

export default Footer;

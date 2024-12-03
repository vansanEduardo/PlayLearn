import Card from "./Card";
import "./MostPlayed.css";
import { Link } from "react-router-dom";
import Logojgvelha from "../../assets/logojgvelha.png";
import LogoHanoi from "../../assets/logohanoi.png";
import Snake from "../../assets/snake.png";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const MostPlayed = () => {
  return (
    <div className="container-mostplayed">
      <div className="title-mostplayed">
        <h2>Mais Jogados</h2>
      </div>
      <div className="cards-mostplayed">
        <Card
          img={Logojgvelha}
          gameName={"Jogo da Velha"}
          link={"/velha"}
          desc={
            "O objetivo do Jogo da Velha é formar uma linha de três símbolos iguais, seja na horizontal, vertical ou diagonal. Cada jogador alterna entre X e O até que um jogador complete uma linha ou o jogo termine em empate."
          }
        />
        <div className="card-contrast">
          <Card
            img={LogoHanoi}
            gameName={"Torre de Hanói"}
            link={"/hanoi"}
            desc={
              "No Torre de Hanói, você precisa mover todos os discos da primeira para a última torre. A regra é mover um disco por vez e nunca colocar um disco maior sobre um menor."
            }
          />
        </div>
        <Card
          img={Snake}
          gameName={"Jogo da Cobra"}
          link={"/snake"}
          desc={
            "Controle uma cobra que cresce ao comer frutas. O objetivo é comer o máximo de frutas possível sem colidir com as bordas do campo ou com o próprio corpo."
          }
        />
      </div>

      <div className="btn-secondary">
        <Link to="#" onClick={() => scrollToSection("games")}>
          <button>Todos os Jogos</button>
        </Link>
      </div>
    </div>
  );
};

export default MostPlayed;

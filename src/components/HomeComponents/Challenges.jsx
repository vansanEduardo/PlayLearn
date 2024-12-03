import "./Challenges.css";
import Champioship from "../../assets/championship.JPG";
import Comingsoon from "../../assets/comingsoon.jpg";
import Retro from "../../assets/retro.jpg";

import { Link } from "react-router-dom";
const Challenges = () => {
  return (
    <div className="container-challenges">
      <div className="title-challenges"></div>
      <div className="frames">
        <div className="frame">
          <img src={Retro} alt="banner" />
        </div>
        <div className="frame">
          <img src={Comingsoon} alt="Em Breve" />
        </div>
        <div className="frame">
          <img src={Champioship} alt="Troféus" />
        </div>
      </div>
      <div className="frame-larger">
        <h2>Desafio Semanal</h2>
        <div className="chalenge">
          <p>Concluir a Torre de Hánoi com 3 Discos</p>
          <div className="btn-play">
            <Link to="/hanoi">
              <button>Jogar</button>
            </Link>
          </div>
        </div>
        <div className="chalenge">
          <p>Fazer 250 Pontos No Jogo Da Cobra </p>
          <div className="btn-play">
            <Link to="/snake">
              <button>Jogar</button>
            </Link>
          </div>
        </div>
        <div className="chalenge">
          <p>Concluir o Ghost Atack na dificuldade Medio</p>
          <div className="btn-play">
            <Link to="/ghost">
              <button>Jogar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;

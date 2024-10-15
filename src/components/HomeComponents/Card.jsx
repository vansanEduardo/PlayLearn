import { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ img, gameName, link, desc }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.classList.add("no-scroll");
      document.body.classList.add("disable-hover");
    } else {
      document.body.classList.remove("no-scroll");
      document.body.classList.remove("disable-hover");
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.body.classList.remove("disable-hover");
    };
  }, [modal]);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="container-card">
      <div className="card">
        <img src={img} alt="logo do jogo" />
      </div>

      <div className="name-game">
        <h3>{gameName}</h3>
      </div>
      <div className="btn-play center">
        <button onClick={toggleModal}>Jogar</button>
      </div>

      <div className={`modal-window ${modal ? "open" : ""}`} id="modal-window">
        <div className="modal">
          <button className="close" id="close" onClick={() => setModal(false)}>
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div className="modal-header">
            <h1>{gameName}</h1>
          </div>

          <div className="game-image">
            <img src={img} alt="logo do jogo" />

            <div className="btn-play">
              <Link to={link}>
                <button>Jogar</button>
              </Link>
            </div>
          </div>

          <div className="game-desc">
            <h2>Descrição</h2>
            <p>
              {desc}
            </p>
          </div>

          <div className="btn-secondary">
            <Link to={link + "details"}>
              <button>Como Fazer esse Jogo</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

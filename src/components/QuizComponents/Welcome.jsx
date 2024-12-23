import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./Welcome.css";

import Quiz from "../../assets/quiz.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button
        className="btn-quiz"
        onClick={() => dispatch({ type: "CHANGE_STAGE" })}
      >
        Começar
      </button>

      <a href="https://vansaneduardo.github.io/PlayLearn">
        <button className="btn-quiz" id="return-home">
          Home
        </button>
      </a>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;

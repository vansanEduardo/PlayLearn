import { useContext } from "react";

import { QuizContext } from "../../context/quiz";

import WellDone from "../../assets/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function adicionarConquista(jogoId, conquistaId) {
    // 1. Carregar conquistas existentes do localStorage ou iniciar um novo objeto
    const conquistas = JSON.parse(localStorage.getItem("conquistas")) || {};

    // 2. Verificar se o jogo existe no objeto de conquistas; se não, criar um novo array
    if (!conquistas[jogoId]) conquistas[jogoId] = [];

    // 3. Adicionar a conquista ao array do jogo, se ainda não estiver lá
    if (!conquistas[jogoId].includes(conquistaId)) {
      conquistas[jogoId].push(conquistaId);

      // 4. Salvar as conquistas atualizadas de volta no localStorage
      localStorage.setItem("conquistas", JSON.stringify(conquistas));
    }
  }

  let reward;

  if (quizState.score <= 5) {
    reward = "bronze";
  } else if (quizState.score <= 9) {
    reward = "prata";
  } else if (quizState.score == 10) {
    reward = "ouro";
  }

  adicionarConquista("Quiz", `${reward}`);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button
        className="btn-quiz"
        onClick={() => dispatch({ type: "NEW_GAME" })}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default GameOver;

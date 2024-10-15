import Welcome from "../../components/QuizComponents/Welcome"
import "./Quiz.css";
import { QuizContext } from "../../context/quiz";
import { useContext, useEffect } from "react";
import Question from "../../components/QuizComponents/Question";
import GameOver from "../../components/QuizComponents/GameOver";
import PickCategory from "../../components/QuizComponents/PickCategory";

function Quiz() {
  const [quizState, dispatch] = useContext(QuizContext);

  

  return (
    <div className="quiz">
      <h1>Quiz De Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default Quiz;
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const robotButton = document.querySelector("#bot");
const textDifficulty = document.querySelector("#difficulty");
const multiplayerButton = document.querySelector("#multplayer");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector("[data-restart-button]");
const difficultyButtons = document.querySelectorAll("[data-difficulty]");

let isCircleTurn = false;
let isPlayingWithRobot = undefined;
let difficulty = "medio"; // Nível padrão do robô

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const startGame = () => {
  if(isPlayingWithRobot){
    textDifficulty.innerHTML = "Dificuldade:" + " " + difficulty;
  } else {
    textDifficulty.innerHTML = ""
  }
  isCircleTurn = false;
  for (const cell of cellElements) {
    cell.classList.remove("circle");
    cell.classList.remove("x");
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  }

  setBoardHoverClass();
  winningMessage.classList.remove("show-winning-message");
};

const endGame = (isDraw) => {
  if (isDraw) {
    winningMessageTextElement.innerText = "Empate!";
  } else {
    winningMessageTextElement.innerText = isCircleTurn
      ? "O Venceu!"
      : "X Venceu!";
  }

  winningMessage.classList.add("show-winning-message");
};

const checkForWin = (currentPlayer) => {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentPlayer);
    });
  });
};

const checkForDraw = () => {
  return [...cellElements].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("circle");
  });
};

const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
};

const setBoardHoverClass = () => {
  board.classList.remove("circle");
  board.classList.remove("x");

  if (isCircleTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
};

const swapTurns = () => {
  isCircleTurn = !isCircleTurn;
  setBoardHoverClass();
};

const getAvailableCells = () => {
  return [...cellElements].filter((cell) => {
    return !cell.classList.contains("x") && !cell.classList.contains("circle");
  });
};

const robotMove = () => {
  
  const availableCells = getAvailableCells();
  if (availableCells.length === 0) return;

  const findWinningMove = (playerClass) => {
    for (const combination of winningCombinations) {
      const matches = combination.filter((index) =>
        cellElements[index].classList.contains(playerClass)
      );
      const empty = combination.filter(
        (index) =>
          !cellElements[index].classList.contains("x") &&
          !cellElements[index].classList.contains("circle")
      );

      if (matches.length === 2 && empty.length === 1) {
        return cellElements[empty[0]];
      }
    }
    return null;
  };

  let move = null;

  if (difficulty === "impossivel") {
    // Tentar ganhar
    move = findWinningMove("circle");
    // Bloquear se não puder ganhar
    if (!move) move = findWinningMove("x");
  } else if (difficulty === "dificil") {
    // Tentar ganhar ou bloquear
    move = findWinningMove("circle") || findWinningMove("x");
  } else if (difficulty === "medio" && Math.random() > 0.5) {
    // Jogada mista
    move = findWinningMove("x") || findWinningMove("circle");
  }

  if (!move) {
    // Jogada aleatória
    const randomIndex = Math.floor(Math.random() * availableCells.length);
    move = availableCells[randomIndex];
  }

  if (move) {
    placeMark(move, "circle");

    const isWin = checkForWin("circle");
    const isDraw = checkForDraw();

    if (isWin) {
      endGame(false);
    } else if (isDraw) {
      endGame(true);
    } else {
      swapTurns();
    }
  }
};

const handleClick = (e) => {
  const cell = e.target;
  const classToAdd = isCircleTurn ? "circle" : "x";

  placeMark(cell, classToAdd);

  const isWin = checkForWin(classToAdd);
  const isDraw = checkForDraw();

  if (isWin) {
    endGame(false);
  } else if (isDraw) {
    endGame(true);
  } else {
    swapTurns();

    if (isPlayingWithRobot && isCircleTurn) {
      setTimeout(robotMove, 100);
    }
  }
};

multiplayerButton.addEventListener("click", () => {
  isPlayingWithRobot = false;
  startGame();
});

robotButton.addEventListener("click", () => {
  isPlayingWithRobot = true;
  startGame();
});

difficultyButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    difficulty = e.target.dataset.difficulty;
    startGame();
  });
});

restartButton.addEventListener("click", startGame);

startGame();

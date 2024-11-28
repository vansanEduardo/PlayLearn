const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]")
const robotButton =  document.querySelector("#bot") 
const multiplayerButton =  document.querySelector("#multplayer") 
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector("[data-restart-button]");

let isCircleTurn = false; // O jogador X sempre começa
let isPlayingWithRobot = undefined; // O jogador X sempre começa
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

  // Função para verificar se uma jogada pode vencer
  const findWinningMove = (playerClass) => {
    for (const combination of winningCombinations) {
      const matches = combination.filter((index) =>
        cellElements[index].classList.contains(playerClass)
      );
      const empty = combination.filter((index) =>
        !cellElements[index].classList.contains("x") &&
        !cellElements[index].classList.contains("circle")
      );

      if (matches.length === 2 && empty.length === 1) {
        return cellElements[empty[0]]; // Retorna a célula onde o jogador pode vencer
      }
    }
    return null;
  };

  // 1. Verificar se o robô pode vencer
  let move = findWinningMove("circle");
  if (!move) {
    // 2. Bloquear o jogador
    move = findWinningMove("x");
  }

  // 3. Escolher uma jogada estratégica (centro ou cantos)
  if (!move) {
    const strategicPositions = [4, 0, 2, 6, 8]; // Centro e cantos
    move = strategicPositions
      .map((index) => cellElements[index])
      .find((cell) => availableCells.includes(cell));
  }

  // 4. Escolha aleatória, se nenhuma opção anterior estiver disponível
  if (!move) {
    const randomIndex = Math.floor(Math.random() * availableCells.length);
    move = availableCells[randomIndex];
  }

  // Realiza a jogada
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
      setTimeout(robotMove, 100); // Adiciona um pequeno delay para o robô jogar
    }
  }
};

// Define o modo MultPlayer Local
multiplayerButton.addEventListener("click", () => {
  isPlayingWithRobot = false; // Desativa o robô
  startGame();
});

// Define o modo Jogar com um Robô
robotButton.addEventListener("click", () => {
  isPlayingWithRobot = true; // Ativa o robô
  startGame();
});

startGame();

restartButton.addEventListener("click", startGame);
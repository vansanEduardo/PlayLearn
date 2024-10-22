const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let isGameOver = false; // Variável para controlar o estado do jogo

const resizeCanvas = () => {
  // Ajuste refinado para proporção em dispositivos móveis e desktop
  const minDimension = Math.min(window.innerHeight * 0.7, window.innerWidth * 0.90); 
  canvas.width = canvas.height = minDimension;
};

// Chama a função ao carregar a página e redimensiona ao mudar o tamanho da janela
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Redimensiona inicialmente

const score = document.querySelector(".score--value");
const finalScore = document.querySelector(".final-score > span");
const menu = document.querySelector(".menu-screen");
const buttonPlay = document.querySelector(".btn-play");

const audio = new Audio("./assets/audio.mp3");
audio.addEventListener("canplaythrough", () => {
  console.log("Áudio carregado e pronto para reprodução");
});

audio.addEventListener("error", (e) => {
  console.error("Erro ao carregar áudio:", e);
});

const size = 30;
const initialPosition = { x: 270, y: 240 };

let snake = [initialPosition];
let direction, loopId;

const incrementScore = () => {
  score.innerText = +score.innerText + 10;
};

const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomPosition = () => {
  const number = randomNumber(0, canvas.width - size);
  return Math.round(number / size) * size;
};

const randomColor = () => {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

const food = {
  x: randomPosition(),
  y: randomPosition(),
  color: randomColor(),
};

const drawFood = () => {
  const { x, y, color } = food;
  ctx.shadowColor = color;
  ctx.shadowBlur = 6;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
  ctx.shadowBlur = 0;
};

const drawSnake = () => {
  ctx.fillStyle = "#198919";

  snake.forEach((position, index) => {
    if (index == snake.length - 1) {
      ctx.fillStyle = "green";
    }
    ctx.fillRect(position.x, position.y, size, size);
  });
};

const moveSnake = () => {
  if (!direction || isGameOver) return; // Impede a movimentação após o game over

  const head = snake[snake.length - 1];

  if (direction === "right") {
    snake.push({ x: head.x + size, y: head.y });
  }
  if (direction === "left") {
    snake.push({ x: head.x - size, y: head.y });
  }
  if (direction === "down") {
    snake.push({ x: head.x, y: head.y + size });
  }
  if (direction === "up") {
    snake.push({ x: head.x, y: head.y - size });
  }

  snake.shift();
};

const drawGrid = () => {
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#191919";

  for (let i = 30; i < canvas.width; i += 30) {
    ctx.beginPath();
    ctx.lineTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }
};

const chackEat = () => {
  const head = snake[snake.length - 1];

  if (head.x === food.x && head.y === food.y) {
    incrementScore();
    audio.play().catch((e) => {
      console.error("Erro ao tentar reproduzir áudio:", e);
    });
    snake.push(head);

    let x = randomPosition();
    let y = randomPosition();

    while (snake.find((position) => position.x == x && position.y == y)) {
      x = randomPosition();
      y = randomPosition();
    }

    food.x = x;
    food.y = y;
    food.color = randomColor();
  }
};

const checkCollision = () => {
  const head = snake[snake.length - 1];
  const canvasLimit = canvas.width - size;
  const neckIndex = snake.length - 2;

  const wallCollision =
    head.x < 0 || head.x > canvasLimit || head.y < 0 || head.y > canvasLimit;

  const selfCollision = snake.find((position, index) => {
    return index < neckIndex && position.x == head.x && position.y == head.y;
  });

  if (wallCollision || selfCollision) {
    gameOver();
  }
};

const gameOver = () => {
  direction = undefined;
  isGameOver = true; // Indica que o jogo terminou

  menu.style.display = "flex";
  finalScore.innerText = score.innerText;
  canvas.style.filter = "blur(2px)";
};

const gameLoop = () => {
  clearInterval(loopId);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawFood();
  moveSnake();
  drawSnake();
  chackEat();
  checkCollision();

  loopId = setTimeout(() => {
    gameLoop();
  }, 300);
};

gameLoop();

document.addEventListener("keydown", ({ key }) => {
  if (isGameOver) return; // Impede ações após game over

  if (key === "ArrowRight" && direction !== "left") {
    direction = "right";
  }
  if (key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  }
  if (key === "ArrowDown" && direction !== "up") {
    direction = "down";
  }
  if (key === "ArrowUp" && direction !== "down") {
    direction = "up";
  }
});

buttonPlay.addEventListener("click", () => {
  score.innerText = "00";
  menu.style.display = "none";
  canvas.style.filter = "none";
  isGameOver = false; // Reinicia o jogo
  snake = [initialPosition];
});

// Mobile controls
document.querySelector(".arrow.up").addEventListener("click", () => {
  if (isGameOver) return; // Bloqueia ações no game over
  if (direction !== "down") direction = "up";
});

document.querySelector(".arrow.down").addEventListener("click", () => {
  if (isGameOver) return;
  if (direction !== "up") direction = "down";
});

document.querySelector(".arrow.left").addEventListener("click", () => {
  if (isGameOver) return;
  if (direction !== "right") direction = "left";
});

document.querySelector(".arrow.right").addEventListener("click", () => {
  if (isGameOver) return;
  if (direction !== "left") direction = "right";
});

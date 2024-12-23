const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

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
const size = 20;

const initialPosition = { x: 220, y: 240 };

let snake = [initialPosition];

const incrementScore = () => {
  score.innerText = +score.innerText + 10;
};

const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomPosition = () => {
  const number = randomNumber(0, canvas.width - size);
  return Math.round(number / 20) * 20;
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

let direction, loopId;

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
  if (!direction) return;

  const head = snake[snake.length - 1];

  if (direction == "right") {
    snake.push({ x: head.x + size, y: head.y });
  }

  if (direction == "left") {
    snake.push({ x: head.x - size, y: head.y });
  }

  if (direction == "down") {
    snake.push({ x: head.x, y: head.y + size });
  }

  if (direction == "up") {
    snake.push({ x: head.x, y: head.y - size });
  }

  snake.shift();
};

const drawGrid = () => {
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#191919";

  for (let i = 20; i < canvas.width; i += 20) {
    ctx.beginPath();
    ctx.lineTo(i, 0);
    ctx.lineTo(i, 600);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(0, i);
    ctx.lineTo(600, i);
    ctx.stroke();
  }
};

const chackEat = () => {
  const head = snake[snake.length - 1];

  if (head.x == food.x && head.y == food.y) {
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

  menu.style.display = "flex";
  finalScore.innerText = score.innerText;
  let reward;

  if (finalScore.innerText <= 100) {
    reward = "bronze";
  } else if (finalScore.innerText <= 400) {
    reward = "prata";
  } else if (finalScore.innerText <= 600) {
    reward = "ouro";
  }

  adicionarConquista("Snake", `${reward}`);
  canvas.style.filter = "blur(2px)";

};

const gameLoop = () => {
  clearInterval(loopId);

  ctx.clearRect(0, 0, 600, 600);
  drawGrid();
  drawFood();
  moveSnake();
  drawSnake();
  chackEat();
  checkCollision();

  loopId = setTimeout(() => {
    gameLoop();
  }, 110);
};

gameLoop();

  
document.addEventListener("keydown", ({ key }) => {
  if (key == "ArrowRight" && direction != "left") {
    direction = "right";
  }

  if (key == "ArrowLeft" && direction != "right") {
    direction = "left";
  }

  if (key == "ArrowDown" && direction != "up") {
    direction = "down";
  }

  if (key == "ArrowUp" && direction != "down") {
    direction = "up";
  }
});

// Mobile controls
document.querySelector(".arrow.up").addEventListener("click", () => {
  if (direction !== "down") direction = "up";
});

document.querySelector(".arrow.down").addEventListener("click", () => {
  if (direction !== "up") direction = "down";
});

document.querySelector(".arrow.left").addEventListener("click", () => {
  if (direction !== "right") direction = "left";
});

document.querySelector(".arrow.right").addEventListener("click", () => {
  if (direction !== "left") direction = "right";
});




buttonPlay.addEventListener("click", () => {
  score.innerText = "00";
  menu.style.display = "none";
  canvas.style.filter = "none";
  snake = [initialPosition];
});

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

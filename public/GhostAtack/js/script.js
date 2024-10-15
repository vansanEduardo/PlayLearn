const btnStart = document.querySelector("#start");
const levels = document.querySelector("#level");
const initPage = document.querySelector(".container-init");
const gamePage = document.querySelector(".container-game");
const gameOverPage = document.querySelector(".container-gameover");
const winPage = document.querySelector(".container-win");
const spanTime = document.querySelector("#time");
const btnReset = document.querySelector("#reset");
const btnAgain = document.querySelector("#play-again");

//  Pagina Inicial
let levelGame;
btnStart.addEventListener("click", () => {
  levelGame = levels.value;
  document.querySelector(`#heart1`).src = "img/heartfull.png";
  document.querySelector(`#heart2`).src = "img/heartfull.png";
  document.querySelector(`#heart3`).src = "img/heartfull.png";
  console.log(levelGame);
  initPage.classList.add("hide");
  gamePage.classList.remove("hide");

  startInteval(levelGame);
  startTime();
});

// Logica do Jogo

let width;
let height;
let lifes = 1;
let gameInteval;

let interval;
let time = 20;

spanTime.innerHTML = time

function sizePage() {
  width = window.innerWidth;
  height = window.innerHeight;
  return width, height;
}

window.onresize = sizePage;

const randomSize = () => {
  let size = Math.floor(Math.random() * 3);

  switch (size) {
    case 0:
      return "ghost-one";
    case 1:
      return "ghost-two";
    case 2:
      return "ghost-three";
  }
};

const randomPosition = () => {
  sizePage();

  if (document.querySelector("#ghost")) {
    document.querySelector("#ghost").remove();
    if (lifes > 3) {
      gamePage.classList.add("hide");
      gameOverPage.classList.remove("hide");
      stopInterval();
    } else {
      document.querySelector(`#heart${lifes}`).src = "img/heartempyt.png";
      lifes++;
    }
  }

  let positionX = Math.floor(Math.random() * width) - 120;
  let positionY = Math.floor(Math.random() * height) - 120;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  const ghost = document.createElement("img");
  ghost.src = "img/ghost.png";
  gamePage.appendChild(ghost);
  ghost.classList.add(randomSize());
  ghost.style.position = "absolute";
  ghost.style.left = `${positionX}px`;
  ghost.style.top = `${positionY}px`;
  ghost.id = "ghost";

  ghost.addEventListener("click", () => {
    ghost.remove();
  });
  console.log(positionX, positionY);
};

const stopGame = () => {
  if (time === 0) {
    stopInterval()
    gamePage.classList.add("hide");
    winPage.classList.remove("hide");
  }
};

function startTime() {
  cronometer = setInterval(() => {
    stopGame();
    spanTime.innerHTML = time;
    time--;
  }, 1000);
}

function startInteval(levelGame) {
  gameInteval = setInterval(() => {
    randomPosition();
  }, levelGame);
}

function stopInterval() {
  clearInterval(gameInteval);
  clearInterval(cronometer);
}

console.log(levelGame);

// Gameover and Win

btnReset.addEventListener("click", () => {
  location.reload();
});

btnAgain.addEventListener("click", () => {
  location.reload();
});

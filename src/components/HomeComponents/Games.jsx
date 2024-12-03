import "./Games.css";
import Card from "./Card";

// Imagens
import Logojgvelha from "../../assets/logojgvelha.png";
import LogoHanoi from "../../assets/logohanoi.png";
import Forca from "../../assets/forca.png";
import Snake from "../../assets/snake.png";
import Memory from "../../assets/memory.png";
import Quiz from "../../assets/quiz.png";
import Ghost from "../../assets/ghost.jpg";

const Games = () => {
  return (
    <div className="container-games" id="games">
      <div className="title-games">
        <h2>Jogos</h2>
      </div>
      <div className="cards">
        <Card
          img={Logojgvelha}
          gameName={"Jogo da Velha"}
          link={"/velha"}
          desc={
            "O objetivo do Jogo da Velha é formar uma linha de três símbolos iguais, seja na horizontal, vertical ou diagonal. Cada jogador alterna entre X e O até que um jogador complete uma linha ou o jogo termine em empate."
          }
        />
        <Card
          img={LogoHanoi}
          gameName={"Torre de Hanói"}
          link={"/hanoi"}
          desc={
            "No Torre de Hanói, você precisa mover todos os discos da primeira para a última torre. A regra é mover um disco por vez e nunca colocar um disco maior sobre um menor"
          }
        />
        <Card
          img={Snake}
          gameName={"Jogo da Cobra"}
          link={"/snake"}
          desc={
            "Controle uma cobra que cresce ao comer frutas. O objetivo é comer o máximo de frutas possível sem colidir com as bordas do campo ou com o próprio corpo."
          }
        />
        <Card
          img={Memory}
          gameName={"Jogo da Memoria"}
          link={"/memory"}
          desc={
            "O Jogo da Memória testa sua memória ao pedir que você encontre pares de cartas iguais. Vire duas cartas por vez e tente lembrar onde estão os pares para combinar."
          }
        />
        <Card
          img={Forca}
          gameName={"Jogo da Forca"}
          link={"/forca"}
          desc={
            "A Forca desafia você a adivinhar uma palavra, letra por letra. Cuidado com os erros, pois a cada tentativa incorreta, uma parte do boneco é desenhada."
          }
        />
        <Card
          img={Quiz}
          gameName={"Quiz"}
          link={"/quiz"}
          desc={
            " Responda perguntas de múltipla escolha sobre programação e acumule pontos. O objetivo é acertar o máximo possível para melhorar seu conhecimento."
          }
          novisible={true}
        />
        <Card
          img={Ghost}
          gameName={"Ghost Atack"}
          link={"/ghost"}
          desc={
            "Proteja-se de fantasmas que aparecem na tela e tente derrotá-los antes que o tempo acabe. O objetivo é eliminar o máximo de fantasmas possível."
          }
        />
      </div>
    </div>
  );
};

export default Games;

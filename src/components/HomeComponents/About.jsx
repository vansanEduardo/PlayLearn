import "./About.css";

const About = () => {
  return (
    <div className="container-about" id="about">
      <div className="about">
        <div className="title-about">
          <h2 >Sobre o PlayLearn</h2>
        </div>
        <div className="description">
          <p>
            O PlayLearn é uma plataforma educacional dedicada a transformar o
            aprendizado em uma experiência divertida e interativa. Nossa missão
            é tornar a educação acessível e envolvente para todos, combinando o
            poder dos jogos com conteúdos pedagógicos cuidadosamente
            desenvolvidos.Conheça mais sobre o nosso projeto clicando no botão
            abaixo
          </p>
        </div>
        <div className="btn-secondary">
          <button>Projeto</button>
        </div>
      </div>
    </div>
  );
};

export default About;

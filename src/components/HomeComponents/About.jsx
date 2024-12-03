import "./About.css";

const About = () => {
  return (
    <div className="container-about" id="about">
      <div className="about">
        <div className="title-about">
          <h2>Sobre o PlayLearn</h2>
        </div>
        <div className="description">
          <p>
            PlayLearn é a plataforma educacional dedicada a transformar o
            aprendizado em uma experiência divertida e interativa. Nossa missão
            é tornar a educação envolvente para todos, combinando o poder dos
            jogos com conteúdos pedagógicos cuidadosamente desenvolvidos. Deixe
            sua avaliação! Sua opinião é muito importante para nós e nos ajuda a
            melhorar continuamente.
          </p>
        </div>
        <div className="btn-secondary">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScOY5VqFWtkb2Wef2Z2flKuCWK_YZbiF1HvEybWy0JtJWqq1A/viewform"
            target="blank"
          >
            <button>Avaliar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

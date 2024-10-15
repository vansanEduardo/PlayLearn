import "./Hero.css";

const Hero = () => {
  return (
    <div className="container-hero" id="home">
      <div className="hero">
        <h1>
          Bem-Vindo ao Play<span>Learn!</span>
        </h1>
        <p>
          No PlayLearn, aprender é uma aventura! Mergulhe em jogos divertidos
          que fazem você pensar e brincar ao mesmo tempo
        </p>
      </div>
      <div className="panel">
        <div className="img-game"></div>
        <div className="img-retro"></div>
        <div className="img-championship"></div>
      </div>
    </div>
  );
};

export default Hero;

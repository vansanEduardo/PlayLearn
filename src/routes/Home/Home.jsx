import Footer from "../../components/Footer/Footer";
import About from "../../components/HomeComponents/About";
import Challenges from "../../components/HomeComponents/Challenges";
import Games from "../../components/HomeComponents/Games";
import Hero from "../../components/HomeComponents/Hero";
import MostPlayed from "../../components/HomeComponents/MostPlayed";

import "./Home.css";

const Home = () => {
  return (
    <div className="container-home">
      <Hero />
      <MostPlayed />
      <About />
      <Challenges/>
      <Games />
      <Footer />
    </div>
  );
};

export default Home;

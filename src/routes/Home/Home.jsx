import Footer from '../../components/Footer/Footer'
import About from '../../components/HomeComponents/About'
import Games from '../../components/HomeComponents/Games'
import Hero from '../../components/HomeComponents/Hero'
import MostPlayed from '../../components/HomeComponents/MostPlayed'
import './Home.css'

const Home = () => {
  return (
    <div className="container-home">
  
      <Hero/>
      <MostPlayed/>
      <About/>
      <Games/>
      <Footer/>
    </div>
  )
}

export default Home
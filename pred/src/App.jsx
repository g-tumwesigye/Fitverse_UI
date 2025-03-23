import './App.css'
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Technology from './components/Technology/tech';
import Reviews from './components/Reviews/rev';
import Contact from './components/Contact/contact';
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Technology/>
      <Reviews/>
      <Contact/>
    </>
  )
}

export default App

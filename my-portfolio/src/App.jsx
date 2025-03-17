import About from "./components/About"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-slate-50">
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

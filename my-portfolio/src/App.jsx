import About from "./components/About"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"
import Contact from "./components/contact"
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
      <SocialLinks/>
    </div>
  )
}

export default App

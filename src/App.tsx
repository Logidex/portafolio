import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import SectionDivider from './components/SectionDivider'

function App() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider fill="#111827" />
        <About />
        <SectionDivider fill="#0b1120" flip />
        <Skills />
        <SectionDivider fill="#0b1120" />
        <Projects />
        <SectionDivider fill="#0b1120" flip />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

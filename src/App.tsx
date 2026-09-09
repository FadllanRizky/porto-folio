import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Scene3D from './components/Scene3D'

function App() {
  return (
    <div className="relative min-h-screen bg-canvas overflow-x-hidden">
      {/* 3D Scene sebagai Background Formal */}
      <Scene3D />

      {/* Content Layer */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
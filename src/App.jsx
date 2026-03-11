import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-void text-text overflow-x-hidden">
      <AnimatedBackground />

      {/* Gradient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="blob w-[600px] h-[600px] top-[-200px] left-[-200px]"
          style={{ background: 'radial-gradient(circle, #1f6feb, transparent)' }} />
        <div className="blob w-[500px] h-[500px] top-[40%] right-[-150px]"
          style={{ background: 'radial-gradient(circle, #388bfd, transparent)' }} />
        <div className="blob w-[400px] h-[400px] bottom-[10%] left-[20%]"
          style={{ background: 'radial-gradient(circle, #7ee787, transparent)', opacity: 0.07 }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

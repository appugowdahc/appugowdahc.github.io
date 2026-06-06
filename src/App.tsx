import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { SystemDesign } from './components/sections/SystemDesign'
import { Certifications } from './components/sections/Certifications'
import { GitHubActivity } from './components/sections/GitHubActivity'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SystemDesign />
        <Certifications />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

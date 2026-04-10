import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { HighlightsSection } from './components/HighlightsSection'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { ScrollProgress } from './components/ScrollProgress'
import { SkillsSection } from './components/SkillsSection'
import { TimelineSection } from './components/TimelineSection'
import { portfolioData } from './data/portfolio'

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const savedTheme = window.localStorage.getItem('portfolio-theme')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const rootElement = document.documentElement

    rootElement.classList.toggle('dark', theme === 'dark')
    rootElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-surface-50 text-ink-900 transition-colors duration-300 dark:bg-ink-950 dark:text-slate-100">
      <ScrollProgress />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] dark:bg-[linear-gradient(to_right,rgba(71,85,105,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.22)_1px,transparent_1px)]" />
        <motion.div
          animate={{ x: [0, 32, 0], y: [0, -28, 0] }}
          className="absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl dark:bg-brand-500/20"
          transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          animate={{ x: [0, -28, 0], y: [0, 24, 0] }}
          className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/[0.15]"
          transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 24, 0] }}
          className="absolute bottom-[-9rem] left-1/3 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-400/[0.12]"
          transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity }}
        />
      </div>

      <Navbar
        cvPath={portfolioData.cvPath}
        navLinks={portfolioData.navLinks}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <main className="relative">
        <HeroSection data={portfolioData} />
        <AboutSection data={portfolioData} />
        <SkillsSection data={portfolioData} />
        <ProjectsSection data={portfolioData} />
        <TimelineSection data={portfolioData} />
        <HighlightsSection data={portfolioData} />
        <ContactSection data={portfolioData} />
      </main>

      <Footer data={portfolioData} />
    </div>
  )
}

export default App

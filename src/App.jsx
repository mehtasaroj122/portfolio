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

const backgroundParticles = [
  { top: '12%', left: '9%', size: 8, duration: 14, delay: 0 },
  { top: '18%', left: '72%', size: 10, duration: 16, delay: 1.5 },
  { top: '28%', left: '86%', size: 6, duration: 12, delay: 0.8 },
  { top: '40%', left: '14%', size: 12, duration: 18, delay: 2 },
  { top: '54%', left: '78%', size: 8, duration: 15, delay: 0.5 },
  { top: '62%', left: '30%', size: 6, duration: 11, delay: 1.1 },
  { top: '75%', left: '12%', size: 10, duration: 17, delay: 1.7 },
  { top: '80%', left: '66%', size: 12, duration: 13, delay: 0.3 },
]

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
    <div className="relative isolate min-h-screen overflow-hidden bg-[#f6f8ff] text-slate-950 transition-colors duration-500 dark:bg-[#050816] dark:text-slate-100">
      <ScrollProgress />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_24%),radial-gradient(circle_at_18%_18%,rgba(99,102,241,0.16),transparent_24%),radial-gradient(circle_at_82%_8%,rgba(236,72,153,0.14),transparent_22%),linear-gradient(180deg,#f7f8ff_0%,#eef3ff_42%,#f9fbff_100%)] dark:bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_16%_18%,rgba(99,102,241,0.18),transparent_24%),radial-gradient(circle_at_84%_10%,rgba(236,72,153,0.16),transparent_20%),linear-gradient(180deg,#030712_0%,#050816_38%,#060c1b_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:88px_88px] opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] dark:bg-[linear-gradient(to_right,rgba(71,85,105,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.18)_1px,transparent_1px)]" />
        <motion.div
          animate={{ x: [0, 34, 0], y: [0, -26, 0] }}
          className="absolute left-[-8rem] top-4 h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl dark:bg-cyan-400/18"
          transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          animate={{ x: [0, -26, 0], y: [0, 28, 0] }}
          className="absolute right-[-7rem] top-28 h-[26rem] w-[26rem] rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/18"
          transition={{ duration: 19, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, 18, 0] }}
          className="absolute bottom-[-10rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-300/20 blur-3xl dark:bg-fuchsia-500/12"
          transition={{ duration: 21, ease: 'easeInOut', repeat: Infinity }}
        />
        {backgroundParticles.map((particle) => (
          <motion.span
            animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -16, 0], x: [0, 8, 0] }}
            className="absolute rounded-full bg-white/80 shadow-[0_0_22px_rgba(56,189,248,0.65)] dark:bg-cyan-300/80"
            key={`${particle.top}-${particle.left}`}
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <Navbar
        cvPath={portfolioData.cvPath}
        fullName={portfolioData.fullName}
        navLinks={portfolioData.navLinks}
        onToggleTheme={toggleTheme}
        theme={theme}
        title={portfolioData.title}
      />

      <main className="relative">
        <HeroSection data={portfolioData} />
        <AboutSection data={portfolioData} />
        <SkillsSection data={portfolioData} />
        <ProjectsSection data={portfolioData} />
        <HighlightsSection data={portfolioData} />
        <TimelineSection data={portfolioData} />
        <ContactSection data={portfolioData} />
      </main>

      <Footer data={portfolioData} />
    </div>
  )
}

export default App

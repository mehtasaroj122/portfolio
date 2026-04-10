import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  Download,
  ExternalLink,
  GitBranch,
  Mail,
  MapPin,
} from 'lucide-react'
import { Reveal } from './Reveal'

const socialIcons = {
  github: GitBranch,
  linkedin: Briefcase,
  mail: Mail,
}

const primaryButtonClasses =
  'inline-flex items-center justify-center gap-2 rounded-2xl bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition-transform duration-300 dark:bg-white dark:text-slate-950'

const secondaryButtonClasses =
  'inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-transform duration-300 hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-brand-400/40 dark:hover:text-brand-200'

export function HeroSection({ data }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const featuredProject = data.projects.featured

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setPhraseIndex((current) => (current + 1) % data.heroPhrases.length)
    }, 2400)

    return () => window.clearInterval(rotation)
  }, [data.heroPhrases.length])

  return (
    <section
      className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24"
      id="home"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="relative z-10">
          <Reveal>
            <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-brand-600 dark:text-brand-300" />
                Based in {data.location}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block dark:bg-slate-600" />
              <span>{data.availability}</span>
            </div>
          </Reveal>

          <Reveal className="mt-8" delay={0.05}>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-700 dark:text-brand-200">
              {data.shortTitle}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold tracking-tight text-ink-900 sm:text-6xl lg:text-7xl dark:text-white">
              {data.name}
            </h1>
            <div className="mt-6 max-w-4xl text-2xl font-semibold tracking-tight text-slate-700 sm:text-3xl lg:text-4xl dark:text-slate-100">
              <span>{data.headline}</span>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-lg font-medium text-slate-500 sm:text-xl dark:text-slate-300">
                <span>Currently focused on</span>
                <span className="relative inline-flex min-w-[13rem] overflow-hidden rounded-full border border-brand-200/70 bg-brand-100/70 px-4 py-2 text-brand-700 shadow-sm dark:border-brand-400/20 dark:bg-brand-500/10 dark:text-brand-200">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={data.heroPhrases[phraseIndex]}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-flex items-center"
                      exit={{ opacity: 0, y: -16 }}
                      initial={{ opacity: 0, y: 16 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      {data.heroPhrases[phraseIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
            </div>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              {data.intro}
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap gap-3" delay={0.1}>
            <motion.a
              className={primaryButtonClasses}
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              className={secondaryButtonClasses}
              download
              href={data.cvPath}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={16} />
              Download CV
            </motion.a>
            <motion.a
              className={secondaryButtonClasses}
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-3" delay={0.15}>
            {data.socialLinks.map((link) => {
              const Icon = socialIcons[link.icon]

              return (
                <motion.a
                  key={link.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-300 hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-brand-400/40 dark:hover:text-brand-200"
                  href={link.href}
                  rel="noreferrer"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={16} />
                  {link.label}
                </motion.a>
              )
            })}
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {data.heroStats.map((stat, index) => (
              <Reveal className="h-full" delay={0.2 + index * 0.05} key={stat.value}>
                <motion.article
                  className="h-full rounded-[1.75rem] border border-slate-200/80 bg-white/75 p-5 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                  whileHover={{ y: -6 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="relative" delay={0.1}>
          <div className="relative mx-auto flex min-h-[540px] max-w-xl items-center justify-center">
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 1.5, 0] }}
              className="absolute left-4 top-10 hidden rounded-[1.5rem] border border-white/50 bg-white/80 p-4 shadow-[0_24px_80px_-40px_rgba(37,99,235,0.45)] backdrop-blur sm:block dark:border-white/10 dark:bg-slate-900/70"
              transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
                Current Focus
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/[0.15] dark:text-brand-200">
                  React
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/[0.08] dark:text-slate-300">
                  MERN
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/[0.08] dark:text-slate-300">
                  WSL
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 18, 0], rotate: [0, -1.5, 0] }}
              className="absolute bottom-10 right-0 hidden max-w-[15rem] rounded-[1.5rem] border border-white/50 bg-white/80 p-4 shadow-[0_24px_80px_-40px_rgba(20,184,166,0.45)] backdrop-blur sm:block dark:border-white/10 dark:bg-slate-900/70"
              transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-200">
                Presentation Ready
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Built to support viva, portfolio reviews, and internship applications.
              </p>
            </motion.div>

            <motion.article
              className="relative w-full rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_28px_100px_-40px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-slate-900/70"
              whileHover={{ y: -8 }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-brand-200/70 bg-brand-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:border-brand-400/20 dark:bg-brand-500/10 dark:text-brand-200">
                  {featuredProject.badge}
                </span>
                <a
                  className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-200"
                  href={featuredProject.links[0].href}
                  rel="noreferrer"
                  target="_blank"
                >
                  Repository
                  <ExternalLink size={14} />
                </a>
              </div>

              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">
                {featuredProject.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                {featuredProject.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.techStack.map((item) => (
                  <span
                    className="rounded-full border border-slate-200/80 bg-slate-100/90 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                {featuredProject.features.slice(0, 4).map((feature) => (
                  <div
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/90 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                    key={feature}
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

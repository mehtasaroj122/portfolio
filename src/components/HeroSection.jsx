import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  Download,
  GitBranch,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { Reveal } from './Reveal'

const socialIcons = {
  github: GitBranch,
  linkedin: Briefcase,
  mail: Mail,
}

const primaryButtonClass =
  'group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_55px_-22px_rgba(8,15,31,0.85)] dark:bg-white dark:text-slate-950'

const secondaryButtonClass =
  'group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/50 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:text-white'

export function HeroSection({ data }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const featuredProject = data.projects.featured

  useEffect(() => {
    const currentPhrase = data.heroPhrases[phraseIndex]
    let timeout

    if (!isDeleting && displayText === currentPhrase) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true)
      }, 1500)
    } else if (isDeleting && displayText === '') {
      timeout = window.setTimeout(() => {
        setIsDeleting(false)
        setPhraseIndex((current) => (current + 1) % data.heroPhrases.length)
      }, 240)
    } else {
      timeout = window.setTimeout(
        () => {
          const nextText = isDeleting
            ? currentPhrase.slice(0, displayText.length - 1)
            : currentPhrase.slice(0, displayText.length + 1)

          setDisplayText(nextText)
        },
        isDeleting ? 40 : 72,
      )
    }

    return () => window.clearTimeout(timeout)
  }, [data.heroPhrases, displayText, isDeleting, phraseIndex])

  return (
    <section
      className="relative overflow-hidden pb-18 pt-14 sm:pb-22 sm:pt-18 lg:pb-26 lg:pt-20"
      id="home"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8">
        <div className="relative z-10">
          <Reveal>
            <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-white/60 bg-white/72 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.4)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:text-slate-200">
              <span className="inline-flex items-center gap-2">
                <Sparkles size={15} className="text-cyan-500 dark:text-cyan-300" />
                {data.statusPill}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block dark:bg-slate-600" />
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-brand-500 dark:text-brand-300" />
                Based in {data.location}
              </span>
            </div>
          </Reveal>

          <Reveal className="mt-8" delay={0.05}>
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-slate-600 dark:text-cyan-100">
              {data.title}
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.2rem] dark:text-white">
              <span className="block">{data.name}</span>
              <span className="mt-3 block bg-gradient-to-r from-slate-950 via-brand-500 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:via-cyan-200 dark:to-brand-200">
                builds modern digital experiences that feel premium.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              {data.intro}
            </p>
          </Reveal>

          <Reveal
            className="mt-7 rounded-[1.75rem] border border-white/55 bg-white/72 p-5 shadow-[0_22px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6"
            delay={0.1}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-cyan-100/80">
              Typing focus
            </p>
            <div className="mt-3 flex min-h-10 items-center gap-2 text-lg font-medium text-slate-900 sm:text-xl dark:text-white">
              <span>{displayText}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                className="inline-block h-6 w-[2px] rounded-full bg-cyan-400"
                transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-3" delay={0.15}>
            <motion.a
              className={primaryButtonClass}
              href="#projects"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-200/25 to-fuchsia-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-slate-300/35" />
              <span className="relative flex items-center gap-2">
                View Work
                <ArrowRight size={16} />
              </span>
            </motion.a>
            <motion.a
              className={secondaryButtonClass}
              href="#contact"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-brand-200/30 to-fuchsia-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-brand-400/12" />
              <span className="relative flex items-center gap-2">Contact</span>
            </motion.a>
            <motion.a
              className={secondaryButtonClass}
              download
              href={data.cvPath}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-brand-200/30 to-fuchsia-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-brand-400/12" />
              <span className="relative flex items-center gap-2">
                <Download size={16} />
                Download CV
              </span>
            </motion.a>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-3" delay={0.2}>
            {data.socialLinks.map((link) => {
              const Icon = socialIcons[link.icon]

              return (
                <motion.a
                  className="inline-flex items-center gap-3 rounded-full border border-white/55 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-brand-500 text-white shadow-[0_10px_30px_-14px_rgba(70,91,255,0.85)]">
                    <Icon size={15} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{link.label}</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">
                      {link.value}
                    </span>
                  </span>
                </motion.a>
              )
            })}
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {data.heroStats.map((stat, index) => (
              <Reveal className="h-full" delay={0.24 + index * 0.05} key={stat.value}>
                <motion.article
                  className="h-full rounded-[1.85rem] border border-white/55 bg-white/72 p-5 shadow-[0_22px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6"
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500 dark:text-cyan-200">
                    {stat.value}
                  </p>
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {stat.label}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {stat.description}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="relative" delay={0.12} x={18}>
          <div className="relative mx-auto max-w-[34rem]">
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
              className="absolute -left-3 top-8 hidden w-44 rounded-[1.7rem] border border-white/55 bg-white/72 p-4 shadow-[0_20px_70px_-34px_rgba(15,23,42,0.45)] backdrop-blur-2xl sm:block dark:border-white/10 dark:bg-white/6"
              transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-200">
                Availability
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Ready for internships, collaboration, and real-world product work.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0], rotate: [0, -1.5, 0] }}
              className="absolute -right-2 bottom-14 hidden w-48 rounded-[1.7rem] border border-white/55 bg-white/72 p-4 shadow-[0_20px_70px_-34px_rgba(15,23,42,0.45)] backdrop-blur-2xl sm:block dark:border-white/10 dark:bg-white/6"
              transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500 dark:text-brand-200">
                Signature Build
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Library platform engineered around secure academic workflows and smooth UX.
              </p>
            </motion.div>

            <motion.article
              className="relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/74 p-6 shadow-[0_32px_120px_-44px_rgba(15,23,42,0.58)] backdrop-blur-2xl sm:p-8 dark:border-white/10 dark:bg-white/6"
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_34%)] dark:bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_32%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                      Featured Snapshot
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                      {featuredProject.title}
                    </h2>
                  </div>
                  <span className="rounded-full border border-cyan-300/50 bg-cyan-200/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
                    {featuredProject.badge}
                  </span>
                </div>

                <div className="mt-8 flex justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    className="relative"
                    transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/55 via-brand-500/55 to-fuchsia-500/55 blur-[42px]" />
                    <div className="relative flex h-60 w-60 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-brand-500 to-fuchsia-500 p-[2px] shadow-[0_24px_80px_-32px_rgba(70,91,255,0.88)] sm:h-64 sm:w-64">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white/75 text-center backdrop-blur-2xl dark:bg-[#08111f]/92">
                        <div>
                          <p className="font-display text-6xl font-semibold tracking-[-0.08em] text-slate-950 sm:text-7xl dark:text-white">
                            SM
                          </p>
                          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.42em] text-slate-500 dark:text-slate-400">
                            Full Stack
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  {data.heroTags.map((tag) => (
                    <span
                      className="rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.8rem] border border-white/60 bg-white/72 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1325]/72">
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {featuredProject.subtitle}
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {featuredProject.metrics.map((metric) => (
                      <div
                        className="rounded-[1.3rem] border border-white/55 bg-white/72 p-4 dark:border-white/10 dark:bg-white/5"
                        key={metric.label}
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                          {metric.label}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const primaryButtonClass =
  'group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-24px_rgba(8,15,31,0.85)] dark:bg-white dark:text-slate-950'

const secondaryButtonClass =
  'group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/55 bg-white/74 px-5 py-3 text-sm font-semibold text-slate-800 shadow-[0_16px_46px_-26px_rgba(15,23,42,0.42)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white'

export function ProjectsSection({ data }) {
  const featuredProject = data.projects.featured

  return (
    <section className="relative py-20 sm:py-24" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="Projects are where design quality, technical choices, and product thinking become visible. The focus here is on work that feels practical, polished, and easy to trust."
          eyebrow="Projects"
          title="A flagship system build supported by polished portfolio-ready product work"
        />

        <Reveal className="mt-12">
          <motion.article
            className="relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/76 p-7 shadow-[0_30px_120px_-46px_rgba(15,23,42,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 lg:p-9"
            whileHover={{ y: -6, scale: 1.005 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <div>
                <span className="inline-flex rounded-full border border-cyan-300/50 bg-cyan-200/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
                  {featuredProject.badge}
                </span>
                <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.2rem] dark:text-white">
                  {featuredProject.title}
                </h3>
                <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
                  {featuredProject.subtitle}
                </p>
                <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                  {featuredProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.techStack.map((item) => (
                    <span
                      className="rounded-full border border-white/55 bg-white/74 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {featuredProject.metrics.map((metric) => (
                    <div
                      className="rounded-[1.45rem] border border-white/55 bg-white/74 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
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

                <div className="mt-8 flex flex-wrap gap-3">
                  {featuredProject.links.map((link) => {
                    const buttonClass =
                      link.style === 'primary'
                        ? primaryButtonClass
                        : secondaryButtonClass

                    return (
                      <motion.a
                        className={buttonClass}
                        href={link.href}
                        key={link.label}
                        rel={link.external ? 'noreferrer' : undefined}
                        target={link.external ? '_blank' : undefined}
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-200/25 to-fuchsia-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-slate-300/25" />
                        <span className="relative flex items-center gap-2">
                          {link.label}
                          {link.external ? (
                            <ExternalLink size={16} />
                          ) : (
                            <ArrowRight size={16} />
                          )}
                        </span>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {featuredProject.features.map((feature, index) => (
                  <motion.div
                    className="rounded-[1.65rem] border border-white/55 bg-white/76 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                    key={feature}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-brand-500 text-xs font-semibold text-white shadow-[0_14px_32px_-16px_rgba(70,91,255,0.75)]">
                      0{index + 1}
                    </span>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.projects.secondary.map((project, index) => (
            <Reveal className="h-full" delay={index * 0.06} key={project.title}>
              <motion.article
                className="flex h-full flex-col rounded-[1.95rem] border border-white/60 bg-white/76 p-6 shadow-[0_22px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6"
                whileHover={{ y: -7, scale: 1.015 }}
              >
                <span className="inline-flex w-fit rounded-full border border-white/55 bg-white/72 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  {project.status}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((item) => (
                    <span
                      className="rounded-full border border-white/55 bg-white/72 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <motion.a
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors duration-300 hover:text-slate-950 dark:text-cyan-200 dark:hover:text-white"
                      href={link.href}
                      key={link.label}
                      rel={link.external ? 'noreferrer' : undefined}
                      target={link.external ? '_blank' : undefined}
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                      {link.external ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
                    </motion.a>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

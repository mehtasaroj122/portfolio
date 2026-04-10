import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const buttonClasses =
  'inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-300 hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-brand-400/40 dark:hover:text-brand-200'

export function ProjectsSection({ data }) {
  const featuredProject = data.projects.featured

  return (
    <section className="relative py-20 sm:py-24" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="Projects are the clearest way to show both technical ability and product thinking, especially when they reflect genuine user needs."
          eyebrow="Projects"
          title="A featured system project supported by thoughtful portfolio-ready builds"
        />

        <Reveal className="mt-12">
          <motion.article
            className="grid gap-8 rounded-[2rem] border border-slate-200/80 bg-white/80 p-7 shadow-[0_28px_100px_-48px_rgba(15,23,42,0.48)] backdrop-blur-sm lg:grid-cols-[1.05fr_0.95fr] lg:p-9 dark:border-white/10 dark:bg-white/5"
            whileHover={{ y: -6 }}
          >
            <div>
              <span className="inline-flex rounded-full border border-brand-200/80 bg-brand-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:border-brand-400/20 dark:bg-brand-500/10 dark:text-brand-200">
                {featuredProject.badge}
              </span>
              <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">
                {featuredProject.title}
              </h3>
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

              <div className="mt-8 flex flex-wrap gap-3">
                {featuredProject.links.map((link) => (
                  <motion.a
                    className={buttonClasses}
                    href={link.href}
                    key={link.label}
                    rel={link.external ? 'noreferrer' : undefined}
                    target={link.external ? '_blank' : undefined}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                    {link.external ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {featuredProject.features.map((feature) => (
                <div
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 px-5 py-4 dark:border-white/10 dark:bg-white/[0.06]"
                  key={feature}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.projects.secondary.map((project, index) => (
            <Reveal className="h-full" delay={index * 0.05} key={project.title}>
              <motion.article
                className="flex h-full flex-col rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                whileHover={{ y: -6 }}
              >
                <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:bg-white/[0.08] dark:text-slate-300">
                  {project.status}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((item) => (
                    <span
                      className="rounded-full border border-slate-200/80 bg-slate-100/90 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <motion.a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors duration-300 hover:text-brand-800 dark:text-brand-200 dark:hover:text-white"
                  href={project.link}
                  rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  whileHover={{ x: 4 }}
                >
                  {project.link.startsWith('http') ? 'Open repository' : 'Request details'}
                  {project.link.startsWith('http') ? (
                    <ExternalLink size={16} />
                  ) : (
                    <ArrowRight size={16} />
                  )}
                </motion.a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

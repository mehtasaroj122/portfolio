import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function AboutSection({ data }) {
  return (
    <section className="relative py-20 sm:py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="A portfolio should show more than tools. It should reveal how someone thinks, learns, and approaches real software problems."
          eyebrow="About Me"
          title="Building skills with purpose, not just collecting technologies"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_80px_-42px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-white/5">
            <div className="space-y-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              {data.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-brand-200/80 bg-brand-50/90 p-5 dark:border-brand-400/20 dark:bg-brand-500/10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
                Current Direction
              </p>
              <p className="mt-3 text-base leading-7 text-brand-900 dark:text-brand-100">
                I am actively growing toward full-stack development with a strong interest in React, MERN workflows, cleaner code structure, and professional project delivery.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {data.about.cards.map((card, index) => (
              <Reveal className="h-full" delay={0.05 * index} key={card.title}>
                <motion.article
                  className="h-full rounded-[1.75rem] border border-slate-200/80 bg-white/75 p-6 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                  whileHover={{ y: -6 }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-400 text-sm font-bold text-white shadow-md shadow-brand-500/20">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {card.description}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function HighlightsSection({ data }) {
  return (
    <section className="relative py-20 sm:py-24" id="highlights">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="This section is intentionally concise so it can double as a fast recruiter scan or a portfolio summary aligned with a CV."
          eyebrow="CV Highlights"
          title="Short, clear strengths that communicate value quickly"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {data.highlights.map((highlight, index) => (
            <Reveal className="h-full" delay={index * 0.05} key={highlight.title}>
              <motion.article
                className="h-full rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                whileHover={{ y: -6 }}
              >
                <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-brand-600 to-cyan-400" />
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {highlight.description}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

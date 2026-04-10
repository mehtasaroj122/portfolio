import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function HighlightsSection({ data }) {
  return (
    <section className="relative py-20 sm:py-24" id="impact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          description="Recruiters often scan quickly. This section turns the strongest signals from the portfolio into short, high-value proof points."
          eyebrow="Impact"
          title="Fast signals that communicate value in seconds"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {data.highlights.map((highlight, index) => (
            <Reveal className="h-full" delay={index * 0.05} key={highlight.title}>
              <motion.article
                className="relative h-full overflow-hidden rounded-[1.95rem] border border-white/60 bg-white/76 p-6 shadow-[0_22px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6"
                whileHover={{ y: -7, scale: 1.015 }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-brand-500 to-fuchsia-500" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                  {highlight.metric}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
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

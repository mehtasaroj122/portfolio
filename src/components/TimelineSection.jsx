import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function TimelineSection({ data }) {
  return (
    <section className="relative py-20 sm:py-24" id="journey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="The journey so far is about moving from solid fundamentals into product-minded execution, clearer communication, and stronger modern frontend craft."
          eyebrow="Journey"
          title="An evolving path from core software foundations to premium full-stack portfolio work"
        />

        <div className="mt-12 rounded-[2.4rem] border border-white/60 bg-white/76 p-6 shadow-[0_28px_110px_-46px_rgba(15,23,42,0.48)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 sm:p-8">
          <div className="relative space-y-8 before:absolute before:left-[1rem] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400 before:via-brand-500 before:to-transparent md:before:left-1/2 md:before:-translate-x-1/2">
            {data.timeline.map((item, index) => {
              const isEven = index % 2 === 0

              return (
                <Reveal
                  className={`relative md:grid md:grid-cols-2 ${isEven ? '' : ''}`}
                  delay={index * 0.08}
                  key={item.title}
                  x={isEven ? -18 : 18}
                >
                  <div
                    className={`pl-10 md:pl-0 ${isEven ? 'md:pr-10' : 'md:col-start-2 md:pl-10'}`}
                  >
                    <motion.article
                      className="rounded-[1.8rem] border border-white/60 bg-white/76 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                      whileHover={{ y: -4, scale: 1.01 }}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-300/50 bg-cyan-200/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
                          {item.stage}
                        </span>
                        <span className="rounded-full border border-white/55 bg-white/72 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                          {item.timeframe}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </motion.article>
                  </div>

                  <span className="absolute left-0 top-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-brand-500 text-xs font-semibold text-white shadow-[0_16px_36px_-18px_rgba(70,91,255,0.85)] md:left-1/2 md:-translate-x-1/2">
                    {index + 1}
                  </span>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

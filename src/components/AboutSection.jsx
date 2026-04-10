import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function AboutSection({ data }) {
  return (
    <section className="relative py-20 sm:py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="The goal is simple: build software that feels sharp, trustworthy, and memorable while proving strong growth potential to recruiters and collaborators."
          eyebrow="About"
          title="A developer mindset shaped by polished UI, real workflows, and long-term full-stack ambition"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <Reveal className="rounded-[2.2rem] border border-white/60 bg-white/74 p-7 shadow-[0_26px_100px_-44px_rgba(15,23,42,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-300/50 bg-cyan-200/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
                Story
              </span>
              <span className="rounded-full border border-white/55 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                Building beyond the student portfolio standard
              </span>
            </div>

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              {data.about.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {data.about.signature.map((item) => (
                <div
                  className="rounded-[1.6rem] border border-white/55 bg-white/72 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                  key={item.label}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5">
            {data.about.cards.map((card, index) => (
              <Reveal className="h-full" delay={index * 0.06} key={card.title} x={16}>
                <motion.article
                  className="relative h-full overflow-hidden rounded-[1.9rem] border border-white/60 bg-white/74 p-6 shadow-[0_22px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6"
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-brand-500 to-fuchsia-500" />
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-brand-500 text-sm font-semibold text-white shadow-[0_14px_40px_-18px_rgba(70,91,255,0.75)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
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

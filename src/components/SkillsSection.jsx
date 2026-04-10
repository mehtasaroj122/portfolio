import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function SkillsSection({ data }) {
  return (
    <section className="relative py-20 sm:py-24" id="skills">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="A balanced foundation matters, especially when turning student projects into work that feels structured, polished, and easier to trust."
          eyebrow="Skills"
          title="Core strengths across interface, backend logic, tooling, and software fundamentals"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {data.skills.map((group, index) => (
            <Reveal className="h-full" delay={index * 0.04} key={group.title}>
              <motion.article
                className="flex h-full flex-col rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                whileHover={{ y: -6 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
                    0{index + 1}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-white/[0.08] dark:text-slate-300">
                    {group.items.length} items
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {group.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      className="rounded-full border border-slate-200/80 bg-slate-100/90 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
                      key={item}
                    >
                      {item}
                    </span>
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

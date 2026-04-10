import { motion } from 'framer-motion'
import {
  Database,
  MonitorSmartphone,
  Rocket,
  Server,
  ShieldCheck,
} from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const skillIcons = {
  interface: MonitorSmartphone,
  server: Server,
  database: Database,
  security: ShieldCheck,
  growth: Rocket,
}

export function SkillsSection({ data }) {
  return (
    <section className="relative py-20 sm:py-24" id="skills">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="My stack is growing around modern frontend delivery, workflow-aware backend logic, stronger software fundamentals, and the quality habits needed for professional work."
          eyebrow="Skills"
          title="A balanced skill set built for polished interfaces, secure systems, and steady full-stack growth"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {data.skills.map((group, index) => {
            const Icon = skillIcons[group.icon]

            return (
              <Reveal className="h-full" delay={index * 0.05} key={group.title} y={24}>
                <motion.article
                  className="flex h-full flex-col rounded-[1.9rem] border border-white/60 bg-white/74 p-6 shadow-[0_22px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6"
                  whileHover={{ y: -7, scale: 1.015 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-brand-500 text-white shadow-[0_16px_40px_-18px_rgba(70,91,255,0.85)]">
                      <Icon size={20} />
                    </span>
                    <span className="rounded-full border border-white/55 bg-white/72 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      {group.level}%
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {group.summary}
                  </p>

                  <div className="mt-5">
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-brand-500 to-fuchsia-500"
                        initial={{ width: 0 }}
                        transition={{ duration: 0.9, delay: 0.15 + index * 0.06, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        whileInView={{ width: `${group.level}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        className="rounded-full border border-white/55 bg-white/74 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

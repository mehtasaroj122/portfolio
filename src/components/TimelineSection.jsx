import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function TimelineSection({ data }) {
  return (
    <section className="relative py-20 sm:py-24" id="timeline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="The path so far combines education, self-learning, project execution, and the communication skills needed to present work professionally."
          eyebrow="Timeline"
          title="An ongoing journey from software fundamentals to practical full-stack execution"
        />

        <div className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_24px_90px_-44px_rgba(15,23,42,0.42)] backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-white/5">
          <div className="relative space-y-8 before:absolute before:left-[0.7rem] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-brand-500 before:via-slate-200 before:to-transparent dark:before:via-white/10">
            {data.timeline.map((item, index) => (
              <Reveal className="relative pl-10" delay={index * 0.06} key={item.title}>
                <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyan-400 text-[11px] font-bold text-white shadow-md shadow-brand-500/20">
                  {index + 1}
                </span>
                <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 p-5 dark:border-white/10 dark:bg-white/[0.06]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
                    {item.stage}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

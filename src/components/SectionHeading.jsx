import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const descriptionAlignment = align === 'center' ? 'mx-auto' : ''

  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:text-cyan-100">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-brand-500" />
        {eyebrow}
      </span>
      <h2 className="mt-5 bg-gradient-to-r from-slate-950 via-brand-500 to-slate-950 bg-clip-text font-display text-3xl font-semibold tracking-tight text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-slate-300">
        {title}
      </h2>
      <p
        className={`mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300 ${descriptionAlignment}`}
      >
        {description}
      </p>
    </Reveal>
  )
}

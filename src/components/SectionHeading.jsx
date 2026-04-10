import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      <span className="inline-flex items-center rounded-full border border-brand-200/80 bg-brand-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-700 dark:border-brand-400/20 dark:bg-brand-500/10 dark:text-brand-200">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
        {description}
      </p>
    </Reveal>
  )
}

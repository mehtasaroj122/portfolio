import { Briefcase, GitBranch, Mail } from 'lucide-react'

const socialIcons = {
  github: GitBranch,
  linkedin: Briefcase,
  mail: Mail,
}

export function Footer({ data }) {
  return (
    <footer className="relative border-t border-slate-200/80 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
            {data.name}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
            {data.footerNote}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
          <div className="flex flex-wrap gap-3">
            {data.socialLinks.map((link) => {
              const Icon = socialIcons[link.icon]

              return (
                <a
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 text-slate-700 transition-colors duration-300 hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-brand-400/40 dark:hover:text-brand-200"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                >
                  <Icon size={18} />
                  <span className="sr-only">{link.label}</span>
                </a>
              )
            })}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

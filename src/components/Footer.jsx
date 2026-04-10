import { Briefcase, GitBranch, Mail } from 'lucide-react'

const socialIcons = {
  github: GitBranch,
  linkedin: Briefcase,
  mail: Mail,
}

export function Footer({ data }) {
  return (
    <footer className="relative px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/60 bg-white/76 px-6 py-6 shadow-[0_24px_90px_-40px_rgba(15,23,42,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {data.fullName}
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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/55 bg-white/72 text-slate-700 shadow-sm backdrop-blur-xl transition-colors duration-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
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
              © {new Date().getFullYear()} {data.fullName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

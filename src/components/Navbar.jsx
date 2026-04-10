import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'

const linkClassName =
  'rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'

export function Navbar({ navLinks, theme, onToggleTheme, cvPath }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="rounded-[1.75rem] border border-slate-200/80 bg-white/80 px-4 py-3 shadow-[0_22px_80px_-35px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
          <div className="flex items-center justify-between gap-4">
            <a
              className="flex items-center gap-3"
              href="#home"
              onClick={closeMenu}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-400 font-display text-sm font-bold text-white shadow-lg shadow-brand-500/20">
                SM
              </span>
              <span className="hidden sm:block">
                <span className="block text-sm font-semibold text-ink-900 dark:text-white">
                  Saroj Mehta
                </span>
                <span className="block text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Student Portfolio
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className={linkClassName}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <motion.button
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition-colors duration-300 hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-brand-400/40 dark:hover:text-brand-200"
                onClick={onToggleTheme}
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
              <motion.a
                className="inline-flex items-center gap-2 rounded-2xl bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition-transform duration-300 dark:bg-white dark:text-slate-950"
                download
                href={cvPath}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                onClick={onToggleTheme}
                type="button"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                onClick={() => setIsOpen((open) => !open)}
                type="button"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden md:hidden"
                exit={{ opacity: 0, height: 0 }}
                initial={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="mt-4 space-y-2 border-t border-slate-200/80 pt-4 dark:border-white/10">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                      href={link.href}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink-900 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
                    download
                    href={cvPath}
                    onClick={closeMenu}
                  >
                    <Download size={16} />
                    Download CV
                  </a>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}

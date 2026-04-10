import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'

const desktopLinkClass =
  'rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'

export function Navbar({
  navLinks,
  theme,
  onToggleTheme,
  cvPath,
  fullName,
  title,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 24)
  })

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.nav
          animate={{
            paddingTop: isScrolled ? 12 : 14,
            paddingBottom: isScrolled ? 12 : 14,
          }}
          className={`rounded-[1.9rem] border px-4 shadow-[0_24px_90px_-42px_rgba(8,15,31,0.55)] backdrop-blur-2xl transition-colors duration-500 sm:px-5 ${
            isScrolled
              ? 'border-white/60 bg-white/72 dark:border-white/10 dark:bg-[#081120]/82'
              : 'border-white/50 bg-white/60 dark:border-white/8 dark:bg-[#081120]/72'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <a className="flex min-w-0 items-center gap-3" href="#home" onClick={closeMenu}>
              <motion.span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-brand-500 to-fuchsia-500 font-display text-sm font-semibold text-white shadow-[0_14px_40px_-16px_rgba(70,91,255,0.8)]"
                whileHover={{ rotate: -6, scale: 1.05 }}
              >
                SM
              </motion.span>
              <span className="hidden min-w-0 sm:block">
                <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">
                  {fullName}
                </span>
                <span className="block truncate text-[11px] uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
                  {title}
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  className={desktopLinkClass}
                  href={link.href}
                  key={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <motion.button
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/60 text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                onClick={onToggleTheme}
                type="button"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
              <motion.a
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_46px_-20px_rgba(8,15,31,0.8)] dark:bg-white dark:text-slate-950"
                download
                href={cvPath}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-200/20 to-fuchsia-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-slate-300/30" />
                <span className="relative flex items-center gap-2">
                  <Download size={16} />
                  Download CV
                </span>
              </motion.a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <motion.button
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/60 text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                onClick={onToggleTheme}
                type="button"
                whileTap={{ scale: 0.96 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
              <motion.button
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/60 text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                onClick={() => setIsOpen((open) => !open)}
                type="button"
                whileTap={{ scale: 0.96 }}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                className="overflow-hidden lg:hidden"
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
              >
                <div className="space-y-2 border-t border-white/50 pt-4 dark:border-white/10">
                  {navLinks.map((link) => (
                    <a
                      className="block rounded-2xl border border-white/40 bg-white/55 px-4 py-3 text-sm font-medium text-slate-700 backdrop-blur-xl transition-colors duration-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
                      href={link.href}
                      key={link.href}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
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
        </motion.nav>
      </div>
    </header>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Download, GitBranch, Mail } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const socialIcons = {
  github: GitBranch,
  linkedin: Briefcase,
  mail: Mail,
}

export function ContactSection({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `Portfolio inquiry from ${formData.name || 'a visitor'}`
    const body = [
      'Hello Saroj,',
      '',
      formData.message,
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
    ].join('\n')

    window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="relative py-20 sm:py-24" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="The site is static-hosting friendly, so the form is designed to open your default email app while keeping the experience simple and professional."
          eyebrow="Contact"
          title="Let’s connect for internships, collaboration, or project discussions"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-7 shadow-[0_24px_90px_-44px_rgba(15,23,42,0.42)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
              {data.contactMessage}
            </p>

            <div className="mt-8 space-y-3">
              {data.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon]

                return (
                  <motion.a
                    className="flex items-center justify-between gap-3 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 px-5 py-4 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-300 hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-brand-400/40 dark:hover:text-brand-200"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    whileHover={{ x: 4 }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-400 text-white shadow-md shadow-brand-500/20">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="block font-semibold">{link.label}</span>
                        <span className="block text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          Professional contact
                        </span>
                      </span>
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                      Open
                    </span>
                  </motion.a>
                )
              })}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-brand-200/80 bg-brand-50/90 p-5 dark:border-brand-400/20 dark:bg-brand-500/10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
                Quick Access
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <motion.a
                  className="inline-flex items-center gap-2 rounded-2xl bg-ink-900 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
                  download
                  href={data.cvPath}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={16} />
                  Download CV
                </motion.a>
                <motion.a
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                  href={`mailto:${data.email}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={16} />
                  Email Directly
                </motion.a>
              </div>
            </div>
          </Reveal>

          <Reveal className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-7 shadow-[0_24px_90px_-44px_rgba(15,23,42,0.42)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Name
                  </span>
                  <input
                    className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm text-slate-700 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-brand-400 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-100 dark:placeholder:text-slate-500"
                    name="name"
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    type="text"
                    value={formData.name}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Email
                  </span>
                  <input
                    className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm text-slate-700 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-brand-400 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-100 dark:placeholder:text-slate-500"
                    name="email"
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    type="email"
                    value={formData.email}
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Message
                </span>
                <textarea
                  className="min-h-[180px] w-full rounded-[1.5rem] border border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm text-slate-700 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-brand-400 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-100 dark:placeholder:text-slate-500"
                  name="message"
                  onChange={handleChange}
                  placeholder="Tell me a little about your project, opportunity, or collaboration idea."
                  required
                  value={formData.message}
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
                  Submitting the form opens your email app, which keeps the site simple to deploy on GitHub Pages.
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 rounded-2xl bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 dark:bg-white dark:text-slate-950"
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={16} />
                  Send Message
                </motion.button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

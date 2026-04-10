import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Download, GitBranch, Mail, Send } from 'lucide-react'
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
          description="The contact flow stays static-hosting friendly while still feeling polished. Submitting the form opens a prefilled email so the site remains easy to deploy anywhere."
          eyebrow="Contact"
          title="Let’s connect for internships, collaborations, or premium product work"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="rounded-[2.2rem] border border-white/60 bg-white/76 p-7 shadow-[0_28px_110px_-46px_rgba(15,23,42,0.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 sm:p-8">
            <span className="inline-flex rounded-full border border-cyan-300/50 bg-cyan-200/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
              Open for opportunities
            </span>
            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              {data.contactMessage}
            </p>

            <div className="mt-8 space-y-3">
              {data.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon]

                return (
                  <motion.a
                    className="flex items-center justify-between gap-3 rounded-[1.6rem] border border-white/55 bg-white/74 px-5 py-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    whileHover={{ x: 5, scale: 1.01 }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-brand-500 text-white shadow-[0_14px_36px_-18px_rgba(70,91,255,0.78)]">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                          {link.label}
                        </span>
                        <span className="block text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          {link.value}
                        </span>
                      </span>
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
                      Open
                    </span>
                  </motion.a>
                )
              })}
            </div>

            <div className="mt-8 rounded-[1.8rem] border border-white/55 bg-white/72 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
                Quick access
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <motion.a
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
                  download
                  href={data.cvPath}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={16} />
                  Download CV
                </motion.a>
                <motion.a
                  className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/74 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white"
                  href={`mailto:${data.email}`}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={16} />
                  Email Directly
                </motion.a>
              </div>
            </div>
          </Reveal>

          <Reveal className="rounded-[2.2rem] border border-white/60 bg-white/76 p-7 shadow-[0_28px_110px_-46px_rgba(15,23,42,0.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <motion.label
                  className="block rounded-[1.6rem] border border-white/55 bg-white/72 p-4 shadow-sm backdrop-blur-xl transition-colors duration-300 focus-within:border-cyan-300 dark:border-white/10 dark:bg-white/5"
                  whileHover={{ y: -2 }}
                >
                  <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Name
                  </span>
                  <input
                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
                    name="name"
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    type="text"
                    value={formData.name}
                  />
                </motion.label>

                <motion.label
                  className="block rounded-[1.6rem] border border-white/55 bg-white/72 p-4 shadow-sm backdrop-blur-xl transition-colors duration-300 focus-within:border-cyan-300 dark:border-white/10 dark:bg-white/5"
                  whileHover={{ y: -2 }}
                >
                  <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Email
                  </span>
                  <input
                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
                    name="email"
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    type="email"
                    value={formData.email}
                  />
                </motion.label>
              </div>

              <motion.label
                className="block rounded-[1.8rem] border border-white/55 bg-white/72 p-4 shadow-sm backdrop-blur-xl transition-colors duration-300 focus-within:border-cyan-300 dark:border-white/10 dark:bg-white/5"
                whileHover={{ y: -2 }}
              >
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Message
                </span>
                <textarea
                  className="min-h-[190px] w-full resize-none bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
                  name="message"
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity, project, or collaboration you have in mind."
                  required
                  value={formData.message}
                />
              </motion.label>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
                  This form opens your email app with a pre-filled message, which keeps the site simple to host on Vercel or GitHub Pages.
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-24px_rgba(8,15,31,0.85)] dark:bg-white dark:text-slate-950"
                  type="submit"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={16} />
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

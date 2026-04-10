import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.3,
  })

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] h-px bg-white/10 dark:bg-white/10" />
      <motion.div
        className="fixed inset-x-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-cyan-400 via-brand-500 to-fuchsia-500 shadow-[0_0_26px_rgba(34,211,238,0.55)]"
        style={{ scaleX }}
      />
    </>
  )
}

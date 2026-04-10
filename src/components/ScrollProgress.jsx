import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 24,
    mass: 0.35,
  })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-brand-600 via-sky-400 to-cyan-300"
      style={{ scaleX }}
    />
  )
}

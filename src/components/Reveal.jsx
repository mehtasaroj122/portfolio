import { motion } from 'framer-motion'

export function Reveal({ children, className = '', delay = 0, x = 0, y = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, scale: 0.98, filter: 'blur(14px)' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ amount: 0.25, once: true }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
    >
      {children}
    </motion.div>
  )
}

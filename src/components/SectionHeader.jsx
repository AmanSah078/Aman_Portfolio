import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const isLeft = align === 'left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 26, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={isLeft ? 'max-w-3xl text-left' : 'mx-auto max-w-3xl text-center'}
    >
      <p className="font-display text-xs font-semibold uppercase tracking-[0.36em] text-electric-300 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-[0.95] tracking-normal text-white sm:text-5xl lg:text-7xl">
        {title}
      </h2>
      {description && <p className="mt-6 text-base leading-8 text-white/62 sm:text-lg">{description}</p>}
    </motion.div>
  )
}

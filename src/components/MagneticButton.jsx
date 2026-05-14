import { motion } from 'framer-motion'
import { useState } from 'react'

export default function MagneticButton({ href, children, className = '', external = false }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    setPosition({
      x: (event.clientX - rect.left - rect.width / 2) * 0.16,
      y: (event.clientY - rect.top - rect.height / 2) * 0.2,
    })
  }

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      animate={position}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setPosition({ x: 0, y: 0 })}
      transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.45 }}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 font-display text-sm font-bold transition ${className}`}
    >
      {children}
    </motion.a>
  )
}

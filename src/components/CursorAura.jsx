import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function CursorAura() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const x = useSpring(mouseX, { stiffness: 80, damping: 24, mass: 0.35 })
  const y = useSpring(mouseY, { stiffness: 80, damping: 24, mass: 0.35 })

  useEffect(() => {
    function handleMove(event) {
      mouseX.set(event.clientX - 220)
      mouseY.set(event.clientY - 220)
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[27rem] w-[27rem] rounded-full bg-electric-400/[0.055] blur-[95px] lg:block"
    />
  )
}

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function TiltPanel({ children, className = '' }) {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = ((x / rect.width) - 0.5) * 8
    const rotateX = ((0.5 - y / rect.height) * 8)

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`)
    setMousePos({ x, y })
  }

  return (
    <motion.div
      style={{ transform }}
      onPointerEnter={() => setIsHovered(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)')
        setIsHovered(false)
      }}
      transition={{ duration: 0.25 }}
      className={`relative will-change-transform overflow-hidden ${className}`}
    >
      {isHovered && (
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(84, 244, 255, 0.15), transparent 40%)`
          }}
        />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  )
}

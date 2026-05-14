import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2500 // 2.5s loading simulation
    const interval = 50
    const steps = duration / interval
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setProgress(Math.min((currentStep / steps) * 100, 100))
      
      if (currentStep >= steps) {
        clearInterval(timer)
        setTimeout(onComplete, 400) // Small delay before unmounting
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-carbon-950 px-4"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(84,244,255,0.08)_0%,transparent_60%)]" />
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-8 font-display text-4xl font-bold tracking-[0.2em] text-white sm:text-5xl"
          >
            AMAN <span className="text-electric-300">SAH</span>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10 sm:w-64">
            <motion.div
              className="h-full bg-electric-300 shadow-[0_0_15px_rgba(84,244,255,0.8)]"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 font-display text-xs font-medium uppercase tracking-[0.3em] text-white/50"
          >
            Initializing Ecosystem {Math.round(progress)}%
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

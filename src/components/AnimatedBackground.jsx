import { motion } from 'framer-motion'

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  size: 2 + (index % 4),
  delay: (index % 8) * 0.45,
  duration: 8 + (index % 9),
}))

export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-carbon-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(84,244,255,.18),transparent_28%),radial-gradient(circle_at_80%_26%,rgba(45,116,255,.2),transparent_30%),radial-gradient(circle_at_52%_82%,rgba(138,125,255,.13),transparent_32%)] opacity-90 blur-3xl [animation:mesh-shift_7s_ease-in-out_infinite]" />
      <div className="absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-electric-500/10 blur-[120px]" />
      <div className="absolute bottom-[-18rem] right-[-12rem] h-[42rem] w-[42rem] rounded-full bg-aurora-violet/10 blur-[140px]" />
      <div className="absolute left-[-18rem] top-[42%] h-[36rem] w-[36rem] rounded-full bg-aurora-blue/[0.075] blur-[120px]" />
      <div className="absolute right-[8%] top-[55%] h-[26rem] w-[26rem] rounded-full border border-electric-300/[0.035]" />
      <div className="absolute right-[12%] top-[58%] h-[19rem] w-[19rem] rounded-full border border-white/[0.025]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(84,244,255,.035)_44%,transparent_62%)] [animation:cinema-sweep_11s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,5,7,.16)_48%,rgba(3,5,7,.88)_100%)]" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-200/70 shadow-[0_0_18px_rgba(84,244,255,.6)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -26, 0],
            opacity: [0.08, 0.72, 0.08],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

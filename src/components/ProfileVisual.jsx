import { motion } from 'framer-motion'

export default function ProfileVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto flex w-full max-w-[24rem] justify-center sm:max-w-[27rem] lg:max-w-[31rem]"
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 0.5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative aspect-[0.82] w-full"
      >
        <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-electric-400/18 via-white/5 to-aurora-violet/18 blur-2xl" />
        <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/24 via-electric-400/12 to-aurora-violet/20" />
        <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-cyan-ring backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(84,244,255,.22),transparent_34%),linear-gradient(145deg,rgba(255,255,255,.12),transparent_34%,rgba(53,200,255,.1))]" />
          <img
            src="/images/profile.jpg"
            alt="Aman Sah"
            className="h-full w-full object-cover object-center saturate-[1.08] transition duration-700 hover:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent" />
          <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/10 bg-black/28 px-5 py-4 shadow-cyan-soft backdrop-blur-xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-electric-300/80">Backend core</p>
            <p className="mt-1 font-display text-lg font-semibold text-white">Java | Gen-AI | Full Stack | DSA</p>
          </div>
        </div>
        <div className="absolute -right-4 top-12 hidden rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 shadow-cyan-soft backdrop-blur-xl sm:block">
          <p className="text-[0.65rem] uppercase tracking-[0.26em] text-white/45">focus</p>
          <p className="font-display text-sm font-semibold text-electric-300">DSA & Problem Solving</p>
        </div>
        <div className="absolute -left-3 bottom-24 hidden rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 shadow-cyan-soft backdrop-blur-xl sm:block">
          <p className="text-[0.65rem] uppercase tracking-[0.26em] text-white/45">builder</p>
          <p className="font-display text-sm font-semibold text-white">Generative AI</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

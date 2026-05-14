import { Code2, TerminalSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import MagneticButton from '../components/MagneticButton'
import SectionHeader from '../components/SectionHeader'
import TiltPanel from '../components/TiltPanel'
import { buildLoop, engineeringSignals } from '../data/portfolio'

const contributionCells = Array.from({ length: 112 }, (_, index) => {
  const level = (index * 7 + Math.floor(index / 4) * 3) % 5
  return level
})

export default function EngineeringIdentity() {
  return (
    <section id="engineering" className="relative z-10 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Engineering identity"
              title="A builder profile with product instincts."
              description="The credibility layer: code rhythm, system thinking, secure backend patterns, AI product experiments, and a GitHub-style engineering presence."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {engineeringSignals.map((signal, index) => (
                <motion.div
                  key={signal.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-cyan-soft backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-electric-300/70">{signal.label}</p>
                  <p className="mt-2 font-display text-base font-bold text-white">{signal.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <TiltPanel className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-cyan-ring backdrop-blur-2xl">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-electric-300/18 bg-electric-300/[0.08] text-electric-300">
                    <Code2 size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">Developer Ecosystem</h3>
                    <p className="text-sm text-white/48">Contribution energy and build loop visualization</p>
                  </div>
                </div>
                <MagneticButton
                  href="#projects"
                  className="hidden gap-2 border border-white/10 bg-white/[0.055] text-white/78 hover:bg-white/[0.09] sm:inline-flex"
                >
                  Build Signal <Code2 size={16} />
                </MagneticButton>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/24 p-4">
                <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-hidden">
                  {contributionCells.map((level, index) => (
                    <motion.span
                      key={`${level}-${index}`}
                      initial={{ opacity: 0, scale: 0.65 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.004 }}
                      className={`h-3 rounded-[0.28rem] ${
                        [
                          'bg-white/[0.045]',
                          'bg-electric-300/[0.16]',
                          'bg-electric-300/[0.28]',
                          'bg-electric-300/[0.46]',
                          'bg-electric-300/[0.72] shadow-[0_0_14px_rgba(84,244,255,.4)]',
                        ][level]
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative grid gap-3 sm:grid-cols-5">
                {/* Glowing Network Line Behind Items */}
                <div className="absolute top-1/2 left-[10%] right-[10%] hidden h-0.5 -translate-y-1/2 bg-white/10 sm:block">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-transparent via-electric-300 to-transparent shadow-[0_0_15px_rgba(84,244,255,0.8)]"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    style={{ width: '50%' }}
                  />
                </div>
                
                {buildLoop.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.label}
                      animate={{ y: [0, index % 2 ? -6 : 6, 0] }}
                      transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative z-10 rounded-2xl border border-white/10 bg-carbon-950/80 p-4 text-center backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    >
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-electric-300/10 shadow-[0_0_15px_rgba(84,244,255,0.15)]">
                        <Icon className="text-electric-300" size={20} />
                      </div>
                      <p className="mt-3 text-xs font-bold leading-5 text-white/80">{item.label}</p>
                    </motion.div>
                  )
                })}
              </div>

              <div className="rounded-2xl border border-white/10 bg-carbon-950/70 p-4">
                <div className="mb-3 flex items-center gap-2 text-electric-300">
                  <TerminalSquare size={17} />
                  <p className="font-display text-sm font-bold">AmanSah078/build-loop</p>
                </div>
                <div className="space-y-2 font-mono text-xs leading-6 text-white/54">
                  <p>$ design product flows before screens</p>
                  <p>$ secure API routes with role-aware thinking</p>
                  <p>$ ship polished demos that recruiters can understand</p>
                </div>
              </div>
            </div>
          </TiltPanel>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import TiltPanel from '../components/TiltPanel'
import { skillSystems } from '../data/portfolio'

export default function SkillsExperience() {
  return (
    <section id="skills" className="relative z-10 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            align="left"
            eyebrow="Skill system"
            title="A stack that feels engineered, not listed."
            description="Backend strength, full stack fluency, AI product instincts, database thinking, and developer tooling shaped into one premium engineering identity."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden h-48 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-cyan-soft backdrop-blur-xl lg:block"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(84,244,255,.16),transparent_35%)]" />
            <div className="relative flex h-full items-center justify-center">
              <div className="absolute h-36 w-36 rounded-full border border-electric-300/20" />
              <div className="absolute h-24 w-24 rounded-full border border-white/10" />
              <div className="absolute h-12 w-12 rounded-full bg-electric-300/15 shadow-cyan-soft" />
              {['Java', 'AI', 'DB', 'API', 'Gen-AI'].map((item, index) => (
                <motion.span
                  key={item}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.62, 1, 0.62],
                  }}
                  transition={{ duration: 3 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute rounded-full border border-white/10 bg-black/34 px-4 py-2 font-display text-sm font-bold text-white/78 shadow-cyan-soft ${
                    ['left-[14%] top-[18%]', 'right-[16%] top-[18%]', 'left-[22%] bottom-[18%]', 'right-[22%] bottom-[18%]', 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'][index]
                  }`}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skillSystems.map((system, index) => {
            const Icon = system.icon
            return (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 34, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.72, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltPanel className="group h-full rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-cyan-soft backdrop-blur-xl transition hover:border-electric-300/25 hover:bg-white/[0.07]">
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${system.tone} text-electric-300`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{system.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {system.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-white/62 transition group-hover:border-electric-300/20 group-hover:text-white/82"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltPanel>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

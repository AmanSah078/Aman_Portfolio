import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import TiltPanel from '../components/TiltPanel'
import { achievements } from '../data/portfolio'

export default function AchievementsTimeline() {
  return (
    <section id="achievements" className="relative z-10 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Proof beyond code"
          title="Achievement signals with leadership energy."
          description="Aman’s profile is not only technical. It carries presentation confidence, competitive execution, communication strength, and AI ambition."
        />

        <div className="relative mt-16">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-electric-300/40 to-transparent md:block lg:left-1/2" />
          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              const alignRight = index % 2 === 1

              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 34, filter: 'blur(12px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid gap-6 lg:grid-cols-2 ${alignRight ? 'lg:[&>*:first-child]:col-start-2' : ''}`}
                >
                  <div className="hidden lg:block" />
                  <TiltPanel className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-cyan-soft backdrop-blur-xl">
                    <span className="absolute -left-[2.15rem] top-8 hidden h-4 w-4 rounded-full border border-electric-300/40 bg-carbon-950 shadow-[0_0_24px_rgba(84,244,255,.7)] md:block lg:left-auto lg:right-[-2.15rem]" />
                    {alignRight && <span className="absolute left-[-2.15rem] right-auto top-8 hidden h-4 w-4 rounded-full border border-electric-300/40 bg-carbon-950 shadow-[0_0_24px_rgba(84,244,255,.7)] lg:block" />}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-electric-300/18 bg-electric-300/[0.08] text-electric-300">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-electric-300/78">
                          {achievement.result}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-bold text-white">{achievement.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/58">{achievement.story}</p>
                      </div>
                    </div>
                  </TiltPanel>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

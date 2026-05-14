import { ArrowUpRight, Cpu, Sparkles } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../data/portfolio'
import MagneticButton from '../components/MagneticButton'
import SectionHeader from '../components/SectionHeader'
import TiltPanel from '../components/TiltPanel'

const fadeIn = {
  hidden: { opacity: 0, y: 40, filter: 'blur(14px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

function GenzeraMockup() {
  return (
    <div className="relative min-h-[31rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-carbon-900/80 p-4 shadow-cyan-ring backdrop-blur-2xl sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(84,244,255,.18),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(45,116,255,.16),transparent_35%)]" />
      <div className="relative flex h-full min-h-[29rem] flex-col rounded-[1.25rem] border border-white/10 bg-black/28">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-200/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-electric-300/80" />
          </div>
          <span className="rounded-full border border-electric-300/20 bg-electric-300/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-electric-300">
            ecosystem live
          </span>
        </div>

        <div className="grid flex-1 gap-4 p-4 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-300/12 text-electric-300">
                GZ
              </div>
              <div>
                <p className="font-display text-sm font-bold text-white">GenZERA OS</p>
                <p className="text-xs text-white/45">Student platform core</p>
              </div>
            </div>
            {['Mentorship', 'Marketplace', 'Academic Services', 'Resources'].map((item, index) => (
              <motion.div
                key={item}
                animate={{ x: [0, index % 2 ? -4 : 4, 0] }}
                transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-3 rounded-xl border border-white/10 bg-black/24 px-3 py-3 text-sm font-semibold text-white/72"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {['JWT Roles', 'Mentors', 'Services'].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/24 p-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/42">module {index + 1}</p>
                  <p className="mt-2 font-display text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-5 h-52 rounded-2xl border border-electric-300/15 bg-carbon-950/70 p-5">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(84,244,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(84,244,255,.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-50" />
              {[
                ['left-[13%] top-[22%]', 'Student'],
                ['left-[42%] top-[10%]', 'Mentor'],
                ['left-[67%] top-[34%]', 'Market'],
                ['left-[27%] top-[62%]', 'Admin'],
                ['left-[58%] top-[72%]', 'Resource'],
              ].map(([position, label], index) => (
                <motion.div
                  key={label}
                  animate={{ y: [0, -7, 0], scale: [1, 1.04, 1] }}
                  transition={{ duration: 3.5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute ${position} rounded-full border border-electric-300/30 bg-electric-300/10 px-3 py-2 text-xs font-bold text-electric-300 shadow-cyan-soft`}
                >
                  {label}
                </motion.div>
              ))}
              <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 500 220" aria-hidden="true">
                <path d="M95 65 C175 10 245 35 305 68 S400 120 360 162" stroke="#54f4ff" strokeWidth="1.2" fill="none" />
                <path d="M150 165 C215 95 285 116 350 90" stroke="#2d74ff" strokeWidth="1.2" fill="none" />
                <path d="M300 50 C255 120 245 160 170 175" stroke="#8a7dff" strokeWidth="1.2" fill="none" />
              </svg>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/26 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-electric-300/70">resource flow</p>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-electric-300 to-aurora-blue"
                    animate={{ width: ['42%', '88%', '58%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/26 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-electric-300/70">service layer</p>
                <div className="mt-3 flex gap-2">
                  {['API', 'DB', 'AUTH'].map((item) => (
                    <span key={item} className="rounded-full bg-white/8 px-3 py-1 text-xs font-bold text-white/68">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AiCareerMockup() {
  return (
    <div className="relative min-h-[31rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-carbon-900/80 p-4 shadow-cyan-ring backdrop-blur-2xl sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(138,125,255,.18),transparent_32%),radial-gradient(circle_at_70%_72%,rgba(84,244,255,.15),transparent_34%)]" />
      <div className="relative grid min-h-[29rem] gap-4 lg:grid-cols-[1fr_.85fr]">
        <div className="rounded-[1.25rem] border border-white/10 bg-black/30 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-display text-base font-bold text-white">Career AI Console</p>
              <p className="text-xs text-white/42">context-aware guidance session</p>
            </div>
            <span className="rounded-full border border-electric-300/20 bg-electric-300/10 px-3 py-1 text-xs font-bold text-electric-300">
              AI
            </span>
          </div>

          <div className="space-y-3">
            <div className="max-w-[82%] rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-white/70">
              I want a career path for backend + AI product development.
            </div>
            <motion.div
              animate={{ opacity: [0.72, 1, 0.72] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="ml-auto max-w-[88%] rounded-2xl border border-electric-300/20 bg-electric-300/10 p-4 text-sm leading-6 text-white/78"
            >
              Build Spring Boot foundations, ship authenticated APIs, add database-backed workflows, then integrate AI recommendation layers.
            </motion.div>
            <div className="max-w-[78%] rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 text-white/62">
              Generate a 6-week roadmap with projects and milestones.
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-carbon-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-electric-300/70">prompt system</p>
            <div className="mt-3 space-y-2 font-mono text-xs text-white/54">
              <p>{'>'} context: student_profile + goals</p>
              <p>{'>'} output: roadmap + project stack + next action</p>
              <p>{'>'} model: Cohere recommendation response</p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4">
          <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-white/72">roadmap engine</p>
          <div className="mt-6 space-y-4">
            {['Skill scan', 'Backend track', 'AI layer', 'Project proof', 'Interview pitch'].map((item, index) => (
              <motion.div
                key={item}
                initial={false}
                animate={{ x: [0, index % 2 ? 5 : -5, 0] }}
                transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-2xl border border-white/10 bg-black/28 p-4"
              >
                <span className="absolute -left-2 top-5 h-3 w-3 rounded-full bg-electric-300 shadow-[0_0_18px_rgba(84,244,255,.8)]" />
                <p className="font-display text-sm font-bold text-white">{item}</p>
                <p className="mt-1 text-xs text-white/46">personalized milestone {index + 1}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectSpotlight({ project, index }) {
  const isHero = index === 0
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -30])

  return (
    <motion.article
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="relative"
    >
      <div className="absolute -inset-x-8 top-24 h-64 rounded-full bg-electric-400/[0.045] blur-[90px]" />
      <div className={`relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${isHero ? '' : 'lg:[&>*:first-child]:order-2'}`}>
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric-300/15 bg-electric-300/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-electric-300">
            <Sparkles size={14} />
            {project.label}
          </div>
          <h3 className="font-display text-4xl font-bold leading-none text-white sm:text-5xl lg:text-6xl">
            {project.name}
          </h3>
          <p className="mt-4 font-display text-xl font-semibold text-electric-300/90">{project.descriptor}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">{project.summary}</p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-xs font-semibold text-white/68 backdrop-blur-xl"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((item) => {
              const Icon = item.icon
              return (
                <TiltPanel
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-cyan-soft backdrop-blur-xl"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-electric-300/15 bg-electric-300/[0.08] text-electric-300 transition group-hover:border-electric-300/40 group-hover:bg-electric-300/[0.14]">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-white/52">{item.detail}</p>
                    </div>
                  </div>
                </TiltPanel>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticButton
              href="#engineering"
              className="gap-2 border border-electric-300/20 bg-electric-300/[0.09] text-white shadow-cyan-soft hover:border-electric-300/45 hover:bg-electric-300/[0.14]"
            >
              Engineering View <ArrowUpRight size={17} />
            </MagneticButton>
            <MagneticButton
              href="#skills"
              className="gap-2 border border-white/10 bg-white/[0.055] text-white/82 hover:bg-white/[0.09]"
            >
              Tech Stack <Cpu size={17} />
            </MagneticButton>
          </div>
        </div>

        <motion.div style={{ y }} className="relative">
          <TiltPanel>{isHero ? <GenzeraMockup /> : <AiCareerMockup />}</TiltPanel>
        </motion.div>
      </div>
    </motion.article>
  )
}

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative z-10 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="section-fade-top" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured product work"
          title="Projects presented like real modern products."
          description="Transforming backend systems, AI workflows, authentication, and scalable engineering into immersive modern product experiences.."
        />

        <div className="mt-16 space-y-28 lg:mt-24 lg:space-y-36">
          {projects.map((project, index) => (
            <ProjectSpotlight key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

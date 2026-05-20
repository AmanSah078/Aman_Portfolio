import { ArrowRight, FileText, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ProfileVisual from './ProfileVisual'

const roles = ['Java Backend Developer', 'AI-Powered Application Builder', 'Full Stack Enthusiast']
const minTypingChars = 6

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [letterCount, setLetterCount] = useState(roles[0].length)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const isComplete = letterCount === currentRole.length
    const isAtStart = letterCount <= Math.min(minTypingChars, currentRole.length)
    const delay = isComplete && !isDeleting ? 1500 : isDeleting ? 34 : 56

    const timer = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && isAtStart) {
        const nextIndex = (roleIndex + 1) % roles.length
        setIsDeleting(false)
        setRoleIndex(nextIndex)
        setLetterCount(Math.min(minTypingChars, roles[nextIndex].length))
        return
      }

      setLetterCount((current) => current + (isDeleting ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [isDeleting, letterCount, roleIndex])

  return (
    <span className="typing-roles font-display text-sm font-semibold text-electric-300 sm:text-base">
      <span className="typing-text">{roles[roleIndex].slice(0, letterCount)}</span>
    </span>
  )
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

const reveal = {
  hidden: { opacity: 0, y: 22, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section id="about" className="relative z-10 min-h-screen overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <div className="grid flex-1 items-center gap-12 py-12 md:py-16 lg:grid-cols-[1.04fr_.96fr] lg:gap-16 lg:py-10">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <motion.div variants={container} initial="hidden" animate="visible">
              <motion.p
                variants={reveal}
                className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.35em] text-electric-300 sm:text-base"
              >
                Hello, I&apos;m
              </motion.p>

              <h1 className="overflow-hidden font-display text-[clamp(4.15rem,15vw,9.75rem)] font-bold leading-[0.78] text-white">
                {'AMAN SAH'.split(' ').map((word, wordIndex) => (
                  <span key={word} className="block lg:inline-block">
                    {word.split('').map((letter, index) => (
                      <motion.span
                        key={`${word}-${letter}-${index}`}
                        className="premium-name-letter inline-block drop-shadow-[0_0_30px_rgba(84,244,255,.18)]"
                        initial={{ y: '105%', opacity: 0, rotateX: -50 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        transition={{
                          duration: 0.82,
                          delay: 0.22 + wordIndex * 0.2 + index * 0.045,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                    {wordIndex === 0 && <span className="hidden lg:inline-block">&nbsp;</span>}
                  </span>
                ))}
              </h1>

              <motion.div
                variants={reveal}
                className="mx-auto mt-6 flex min-h-12 w-fit items-center rounded-full border border-white/10 bg-white/[0.055] px-4 py-2.5 shadow-cyan-soft backdrop-blur-xl lg:mx-0"
              >
                <span className="mr-3 h-2 w-2 rounded-full bg-electric-300 shadow-[0_0_18px_rgba(84,244,255,.95)]" />
                <TypingRole />
              </motion.div>

              <motion.p
                variants={reveal}
                className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg lg:mx-0"
              >
                I build secure Java backends, AI-powered product experiences, and polished full stack systems
                with the kind of engineering taste that turns ideas into credible, interview-ready software.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <a
                  href="My_Resume (21).pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-white px-6 font-display text-sm font-bold text-carbon-950 shadow-[0_18px_55px_rgba(255,255,255,.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(84,244,255,.22)] sm:w-auto"
                >
                  <FileText size={18} />
                  View Resume
                </a>
                <a
                  href="#projects"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-electric-300/20 bg-electric-300/[0.08] px-6 font-display text-sm font-bold text-white shadow-cyan-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-electric-300/45 hover:bg-electric-300/[0.14] sm:w-auto"
                >
                  Explore Projects
                  <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 pt-4 lg:order-2 lg:pt-0">
            <ProfileVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

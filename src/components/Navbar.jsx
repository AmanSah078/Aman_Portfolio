import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Mail } from 'lucide-react'

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBolinkx="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7a4.6 4.6 0 0 0-1.39-3.21A4.6 4.6 0 0 0 19.18 3s-1.16-.3-3.8 1.5A13.4 13.4 0 0 0 12 4.14a13.4 13.4 0 0 0-3.18.41C6.16 3 5 3 5 3a4.6 4.6 0 0 0-.08 1.79A4.6 4.6 0 0 0 3.53 8c0 5.48 3.32 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02v4"></path>
    <path d="M9 20c-5 1.5-5-2.5-7-3"></path>
  </svg>
)

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed z-50 transition-all duration-500 flex items-center justify-between ${
        scrolled
          ? 'top-4 left-4 right-4 sm:left-8 sm:right-8 lg:left-12 lg:right-12 px-6 py-3.5 bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
          : 'top-0 left-0 right-0 px-6 py-6 sm:px-12 bg-transparent'
      }`}
    >
      {/* Brand */}
      <a href="#about" className="group relative font-display text-sm font-semibold uppercase tracking-[0.28em] text-white">
        Aman Sah
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-electric-300 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(84,244,255,0.8)]" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group relative text-xs font-semibold uppercase tracking-[0.1em] text-white/70 transition-colors duration-300 hover:text-white"
          >
            {link.name}
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-electric-300 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(84,244,255,0.8)]" />
          </a>
        ))}
      </nav>

      {/* Right Side: Status / Icons (Desktop) */}
      <div className="hidden items-center gap-4 lg:flex">
        <a href="https://github.com/AmanSah078" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition">
          <GithubIcon size={18} />
        </a>
        <a href="https://www.linkedin.com/in/aman-sah-82053a2b8/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#0a66c2] transition">
          <LinkedinIcon size={18} />
        </a>
        <div className="flex items-center gap-2 rounded-full border border-electric-300/15 bg-electric-300/[0.06] px-3 py-1.5 text-xs font-medium text-electric-300">
          <Sparkles size={14} />
          Available
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="text-white lg:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-full flex flex-col items-center gap-6 border-b border-white/5 bg-carbon-950/95 py-8 shadow-2xl backdrop-blur-3xl lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg font-semibold uppercase tracking-[0.15em] text-white/80 hover:text-electric-300"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex items-center gap-6"
            >
              <a href="https://github.com/AmanSah078" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition">
                <GithubIcon size={22} />
              </a>
              <a href="https://www.linkedin.com/in/aman-ali-82053a2b8/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#0a66c2] transition">
                <LinkedinIcon size={22} />
              </a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=amanalisiwan22@gmail.com&tf=cm" target="_blank" rel="noreferrer" className="text-white/60 hover:text-electric-300 transition">
                <Mail size={22} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

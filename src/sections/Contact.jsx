import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle, Mail, Phone, FileText } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
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

export default function Contact() {
  const formRef = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Initialize with Public Key
    emailjs.init('ay4F_2uMnhBGukYvU')

    emailjs
      .sendForm(
        'service_tcyzeiq',
        'template_ismxmiu',
        formRef.current
      )
      .then(
        () => {
          setIsSubmitting(false)
          setSubmitStatus('success')
          formRef.current.reset()
          setTimeout(() => setSubmitStatus(null), 5000)
        },
        (error) => {
          console.error(error)
          setIsSubmitting(false)
          setSubmitStatus('error')
        }
      )
  }

  const socialLinks = [
    { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aman-sah-82053a2b8/' },
    { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/AmanSah078' },
    { icon: FileText, label: 'Resume', href: '/Aman_Resume.pdf', download: true },
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Let's Build the Future"
          subtitle="CONNECT"
          description="Ready to engineer scalable solutions or explore new opportunities? Let's talk."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Side: Professional Connectivity Ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Engineering <span className="text-electric-300">Connections</span>
              </h3>
              <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-md">
                I am actively seeking new opportunities to architect impactful software. Reach out through any of these professional channels.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=amanalisiwan22@gmail.com&tf=cm" target="_blank" rel="noreferrer" className="group flex items-center gap-6 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-electric-300/30 hover:bg-electric-300/[0.05] transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-electric-300/10 text-electric-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(84,244,255,0.4)] transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-1">Direct Email</p>
                  <p className="text-white font-medium group-hover:text-electric-300 transition-colors">amanalisiwan22@gmail.com</p>
                </div>
              </a>

              <a href="tel:+91 9692939230" className="group flex items-center gap-6 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-electric-300/30 hover:bg-electric-300/[0.05] transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-electric-300/10 text-electric-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(84,244,255,0.4)] transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-1">Phone</p>
                  <p className="text-white font-medium group-hover:text-electric-300 transition-colors">+91 9692939230</p>
                </div>
              </a>
            </div>

            {/* Social & Resume Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.download ? "_self" : "_blank"}
                  rel="noreferrer"
                  {...(social.download && { download: true })}
                  className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 font-medium text-white transition hover:-translate-y-1 hover:border-electric-300/30 hover:bg-electric-300/10 hover:shadow-[0_10px_20px_rgba(84,244,255,0.1)]"
                >
                  <social.icon size={18} className="text-white/70 group-hover:text-electric-300 transition-colors" />
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-electric-300/20 to-transparent opacity-20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-carbon-950/50 p-8 backdrop-blur-xl sm:p-10 shadow-2xl">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-white/30 transition-all focus:border-electric-300 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-electric-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-white/30 transition-all focus:border-electric-300 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-electric-300"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-white/30 transition-all focus:border-electric-300 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-electric-300"
                    placeholder="How can we collaborate?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-display font-bold text-carbon-950 transition-all hover:bg-electric-300 disabled:opacity-70 disabled:hover:bg-white"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : submitStatus === 'success' ? (
                    <>
                      Message Sent <CheckCircle size={18} className="text-green-600" />
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      Failed to Send <AlertCircle size={18} className="text-red-500" />
                    </>
                  ) : (
                    <>
                      Hire Me <Send size={18} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

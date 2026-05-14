import { useEffect, useState } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import CursorAura from './components/CursorAura'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import AchievementsTimeline from './sections/AchievementsTimeline'
import ProjectsShowcase from './sections/ProjectsShowcase'
import SkillsExperience from './sections/SkillsExperience'
import Contact from './sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Only scroll after loading is complete
    if (loading) return
    if (!window.location.hash) return

    const target = document.querySelector(window.location.hash)
    if (!target) return

    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [loading])

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <main className="min-h-screen bg-carbon-950 text-white selection:bg-electric-300/25 selection:text-white">
          <Navbar />
          <AnimatedBackground />
          <CursorAura />
          <Hero />
          <ProjectsShowcase />
          <SkillsExperience />
          <AchievementsTimeline />
          <Contact />
        </main>
      )}
    </>
  )
}

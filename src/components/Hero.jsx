import { useState, useEffect } from 'react'

const ROLES = [
  'AI / ML Engineer',
  'Software Developer',
  'Cloud Architect',
  'Problem Solver',
]

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/aniketsingh1245',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aniket-kumar-singh-40a69435b',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:aniketsinghh1409@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

function Typewriter({ words }) {
  const [index, setIndex]     = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink]     = useState(true)
  const current = words[index]

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((v) => !v), 530)
    return () => clearInterval(blinkTimer)
  }, [])

  useEffect(() => {
    if (!deleting && subIndex === current.length) {
      const timer = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(timer)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }
    const speed = deleting ? 40 : 80
    const timer = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [subIndex, deleting, current])

  return (
    <span className="text-accent">
      {current.substring(0, subIndex)}
      <span className={`inline-block w-0.5 h-8 bg-accent ml-0.5 align-middle transition-opacity ${blink ? 'opacity-100' : 'opacity-0'}`} />
    </span>
  )
}

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-6"
    >
      {/* Grid lines decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(88,166,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88,166,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left — text */}
          <div className="flex-1 space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime/20 bg-lime/5 text-lime text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-slow" />
              Available for opportunities
            </div>

            {/* Name */}
            <div>
              <p className="section-label mb-3">Hello, I'm</p>
              <h1 className="font-display font-extrabold leading-none tracking-tight" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}>
                Aniket Kumar
                <br />
                <span className="gradient-text">Singh</span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div className="font-display text-2xl font-semibold text-text/80 h-10">
              <Typewriter words={ROLES} />
            </div>

            {/* Tagline */}
            <p className="text-muted text-lg leading-relaxed max-w-xl">
              B.Tech CSE — Cloud Computing & Automation.
              I build intelligent systems that turn data into decisions —
              from real-time ML APIs to full-stack cloud applications.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="/resume/AniketSinghResume.pdf"
                download
                className="btn-outline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-xs">
            <div className="gradient-border animate-float">
              <div className="rounded-xl overflow-hidden">
                {/* Terminal header */}
                <div className="bg-elevated px-4 py-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber/70" />
                  <span className="w-3 h-3 rounded-full bg-lime/70" />
                  <span className="ml-3 font-mono text-xs text-muted">aniket@portfolio:~</span>
                </div>
                {/* Terminal body */}
                <div className="bg-surface p-5 font-mono text-sm space-y-3 min-h-[220px]">
                  <div>
                    <span className="text-lime">→ </span>
                    <span className="text-muted">whoami</span>
                  </div>
                  <div className="text-text">Aniket Kumar Singh</div>
                  <div className="mt-2">
                    <span className="text-lime">→ </span>
                    <span className="text-muted">cat skills.txt</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    {['Python', 'ML / AI', 'React.js', 'FastAPI', 'Google Cloud', 'SQL'].map((s) => (
                      <span key={s} className="text-accent">• {s}</span>
                    ))}
                  </div>
                  <div className="mt-2">
                    <span className="text-lime">→ </span>
                    <span className="text-muted">status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime animate-pulse-slow" />
                    <span className="text-lime text-xs">Open to work</span>
                  </div>
                  <div className="text-muted text-xs mt-1 animate-pulse">█</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll down"
            className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors group"
          >
            <span className="font-mono text-xs tracking-widest">SCROLL</span>
            <div className="w-5 h-8 rounded-full border border-current flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

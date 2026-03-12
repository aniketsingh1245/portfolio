const RESUME_PATH = '/resume/AniketSinghResume.pdf'

const EXPERIENCE_HIGHLIGHTS = [
  {
    icon: '🤖',
    title: 'AI & ML Engineering',
    points: [
      'Real-time fraud detection with 95%+ accuracy',
      'FastAPI model serving with sub-100ms latency',
      'End-to-end ML pipelines: data → train → deploy',
    ],
    color: 'accent',
  },
  {
    icon: '🌐',
    title: 'Full-Stack Development',
    points: [
      'React + Flask full-stack web platforms',
      'RESTful API design and documentation',
      'Responsive UI with modern design systems',
    ],
    color: 'lime',
  },
  {
    icon: '☁️',
    title: 'Cloud & Automation',
    points: [
      'Google Cloud Platform deployments',
      'Automated workflows and scripting',
      'Voice-controlled AI desktop assistants',
    ],
    color: 'pink',
  },
]

const COLOR_STYLES = {
  accent: { dot: 'bg-accent', border: 'border-accent/20', bg: 'bg-accent/5', icon: 'text-accent' },
  lime:   { dot: 'bg-lime',   border: 'border-lime/20',   bg: 'bg-lime/5',   icon: 'text-lime'   },
  pink:   { dot: 'bg-pink',   border: 'border-pink/20',   bg: 'bg-pink/5',   icon: 'text-pink'   },
}

export default function Resume() {
  return (
    <section id="resume" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="reveal mb-16 max-w-xl">
          <p className="section-label mb-3">My Background</p>
          <h2 className="section-title">
            Resume &amp; <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left — download card (2/5) */}
          <div className="lg:col-span-2 reveal">
            <div className="gradient-border sticky top-24">
              <div className="rounded-xl bg-surface p-8 text-center space-y-6">

                {/* PDF icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accentGlow/30 border border-accent/20 flex items-center justify-center text-4xl mx-auto">
                  📄
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-text">Aniket Kumar Singh</h3>
                  <p className="text-accent font-mono text-sm mt-1">AI/ML Engineer · Software Developer</p>
                </div>

                <div className="w-full h-px bg-border" />

                {/* Download button */}
                <a
                  href="/resume/AniketSinghResume.pdf"
                  download
                  className="btn-primary w-full justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </a>

                {/* View in browser button */}
                <a
                  href="/resume/AniketSinghResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View in Browser
                </a>

                

              </div>
            </div>
          </div>

          {/* Right — highlights (3/5) */}
          <div className="lg:col-span-3 space-y-6">
            {EXPERIENCE_HIGHLIGHTS.map(({ icon, title, points, color }, i) => {
              const styles = COLOR_STYLES[color]
              return (
                <div
                  key={title}
                  className={`glass-card rounded-2xl p-6 border ${styles.border} ${styles.bg} reveal reveal-delay-${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{icon}</span>
                    <h3 className={`font-display font-bold text-lg ${styles.icon}`}>{title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-muted text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full ${styles.dot} mt-1.5 flex-shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}

            {/* Education */}
            <div className="glass-card rounded-2xl p-6 reveal reveal-delay-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎓</span>
                <h3 className="font-display font-bold text-lg text-amber">Education</h3>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-text">B.Tech — Computer Science Engineering</p>
                <p className="text-accent font-mono text-sm">Cloud Computing & Automation</p>
                <p className="text-muted text-sm mt-2">
                  Coursework: Machine Learning, Cloud Architecture, Data Structures, Algorithms,
                  Database Management, Software Engineering.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
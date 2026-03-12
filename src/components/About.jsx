const STATS = [
  { value: '3+',   label: 'Years Coding' },
  { value: '10+',  label: 'Projects Built' },
  { value: '5+',   label: 'ML Models Deployed' },
  { value: 'GCP',  label: 'Cloud Certified' },
]

const HIGHLIGHTS = [
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    desc: 'Designing and deploying production ML pipelines — from data preprocessing to model serving via REST APIs.',
  },
  {
    icon: '☁️',
    title: 'Cloud & Automation',
    desc: 'Building scalable cloud-native solutions on Google Cloud Platform with CI/CD and infrastructure as code.',
  },
  {
    icon: '⚡',
    title: 'Full-Stack Development',
    desc: 'End-to-end applications with React frontends, FastAPI backends, and SQL / NoSQL data layers.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="reveal mb-16 max-w-xl">
          <p className="section-label mb-3">Who I Am</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="space-y-6 reveal reveal-delay-1">
            <p className="text-muted text-lg leading-relaxed">
              I'm an AI/ML Engineer and Software Developer pursuing a
              <span className="text-text"> B.Tech in Computer Science Engineering</span> with a
              specialisation in <span className="text-accent">Cloud Computing & Automation</span>.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              I'm passionate about building systems that actually work in production — not just on paper.
              From training fraud detection models that process thousands of transactions per second,
              to building voice-powered desktop assistants, I love the intersection of
              <span className="text-text"> AI research and practical engineering</span>.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              When I'm not coding, you'll find me reading AI research papers, contributing to open source,
              or planning my next scuba dive.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary text-sm"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get In Touch
              </a>
              <a href="#projects" className="btn-outline text-sm"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                See My Work
              </a>
            </div>
          </div>

          {/* Right — stats + cards */}
          <div className="space-y-6">
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 reveal reveal-delay-2">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="font-display font-bold text-2xl text-accent">{value}</div>
                  <div className="text-muted text-xs mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="space-y-3">
              {HIGHLIGHTS.map(({ icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`glass-card-hover rounded-xl p-5 flex gap-4 reveal reveal-delay-${i + 2}`}
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-text mb-1">{title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education card */}
        <div className="mt-14 reveal">
          <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accentGlow/20 border border-accent/20 flex items-center justify-center text-2xl flex-shrink-0">
              🎓
            </div>
            <div className="flex-1">
              <p className="section-label text-xs mb-1">Education</p>
              <h3 className="font-display font-bold text-text text-xl">Vellore Institute of Technology (VIT), Bhopal</h3>
              <p className="text-text text-sm mt-1 font-semibold">B.Tech — Computer Science Engineering</p>
              <p className="text-accent font-mono text-sm mt-0.5">Specialisation: Cloud Computing & Automation</p>
              <p className="text-muted text-xs font-mono mt-1">2021 – 2025</p>
            </div>
            <div className="flex-shrink-0">
              <span className="tag">Undergraduate</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

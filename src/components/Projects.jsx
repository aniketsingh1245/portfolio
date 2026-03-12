import { useState } from 'react'
import { projects } from '../data/projects'

const TAG_COLORS = ['tag', 'tag tag-green', 'tag tag-amber', 'tag tag-pink']

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

/* Gradient placeholders — each project gets a unique one */
const GRADIENT_BACKGROUNDS = [
  'from-blue-900/60 via-slate-900 to-slate-900',
  'from-emerald-900/60 via-slate-900 to-slate-900',
  'from-violet-900/60 via-slate-900 to-slate-900',
  'from-rose-900/60 via-slate-900 to-slate-900',
  'from-amber-900/60 via-slate-900 to-slate-900',
  'from-cyan-900/60 via-slate-900 to-slate-900',
]

const STATUS_STYLES = {
  Live:          'bg-lime/10 text-lime border-lime/20',
  'In Progress': 'bg-amber/10 text-amber border-amber/20',
  Archived:      'bg-muted/10 text-muted border-muted/20',
}

function ProjectCard({ project, index }) {
  const { title, description, tech, github, demo, image, featured, status, tagColor } = project
  const gradientBg = GRADIENT_BACKGROUNDS[index % GRADIENT_BACKGROUNDS.length]

  return (
    <article className="glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full group">

      {/* Image / gradient preview */}
      <div className={`relative h-44 bg-gradient-to-br ${gradientBg} overflow-hidden`}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        ) : (
          /* Decorative SVG pattern placeholder */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(88,166,255,0.4) 0%, transparent 60%)`,
              }}
            />
            <svg className="w-16 h-16 text-white/10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {/* Corner grid decoration */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(88,166,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(88,166,255,0.5) 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            />
          </div>
        )}

        {/* Overlaid badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          {featured && (
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/20 text-accent border border-accent/30 backdrop-blur-sm">
              ★ Featured
            </span>
          )}
          {status && (
            <span className={`text-xs font-mono px-2.5 py-1 rounded-full border backdrop-blur-sm ml-auto ${STATUS_STYLES[status] || STATUS_STYLES['Archived']}`}>
              {status}
            </span>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="font-display font-bold text-lg text-text group-hover:text-accent transition-colors leading-tight">
          {title}
        </h3>

        <p className="text-muted text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t, i) => (
            <span
              key={t}
              className={TAG_COLORS[i % TAG_COLORS.length]}
              style={{ fontSize: '0.65rem' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-1 border-t border-border/50">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted hover:text-accent text-sm font-medium transition-colors py-1"
              aria-label={`GitHub repo for ${title}`}
            >
              <GitHubIcon />
              Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted hover:text-lime text-sm font-medium transition-colors py-1 ml-auto"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalIcon />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 6)

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="reveal mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="section-label mb-3">What I've Built</p>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-muted text-sm font-mono">
            {projects.length} project{projects.length !== 1 ? 's' : ''}
          </p>
        </div>

 

        {/* Projects grid */}
        {projects.length === 0 ? (
          <div className="text-center py-24 text-muted font-mono">
            // No projects yet. Add them to src/data/projects.js
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {visible.map((project, i) => (
              <div key={project.title} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>
        )}

        {/* Show more */}
        {projects.length > 6 && (
          <div className="mt-12 text-center reveal">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="btn-outline"
            >
              {showAll ? 'Show Less' : `Show All ${projects.length} Projects`}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

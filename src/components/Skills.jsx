const SKILL_CATEGORIES = [
  {
    label: 'AI & Machine Learning',
    color: 'accent',
    skills: [
      { name: 'Python',       level: 92 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Machine Learning', level: 88 },
      { name: 'Data Analysis',  level: 82 },
    ],
  },
  {
    label: 'Backend & APIs',
    color: 'lime',
    skills: [
      { name: 'FastAPI',    level: 88 },
      { name: 'SQL',        level: 80 },
      { name: 'REST APIs',  level: 90 },
      { name: 'Flask',      level: 78 },
    ],
  },
  {
    label: 'Frontend & Tools',
    color: 'pink',
    skills: [
      { name: 'React.js',     level: 82 },
      { name: 'JavaScript',   level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Git / GitHub', level: 90 },
    ],
  },
  {
    label: 'Cloud & DevOps',
    color: 'amber',
    skills: [
      { name: 'Google Cloud',  level: 78 },
      { name: 'Docker',        level: 72 },
      { name: 'CI/CD',         level: 70 },
      { name: 'Linux / Bash',  level: 75 },
    ],
  },
]

const TECH_BADGES = [
  'Python', 'Machine Learning', 'React.js', 'FastAPI', 'SQL',
  'Scikit-learn', 'Google Cloud', 'Git', 'JavaScript', 'Docker',
  'Pandas', 'NumPy', 'Flask', 'REST API', 'Tailwind CSS', 'Linux',
]

const COLOR_MAP = {
  accent: { bar: 'bg-accent', glow: 'shadow-accent/30', text: 'text-accent' },
  lime:   { bar: 'bg-lime',   glow: 'shadow-lime/30',   text: 'text-lime'   },
  pink:   { bar: 'bg-pink',   glow: 'shadow-pink/30',   text: 'text-pink'   },
  amber:  { bar: 'bg-amber',  glow: 'shadow-amber/30',  text: 'text-amber'  },
}

function SkillBar({ name, level, color, index }) {
  const { bar, glow } = COLOR_MAP[color]
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-text/90 font-medium">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-elevated rounded-full overflow-hidden">
        <div
          className={`h-full ${bar} rounded-full shadow-sm ${glow} transition-all duration-1000`}
          style={{
            width: `${level}%`,
            animationDelay: `${index * 80}ms`,
            transitionDelay: `${index * 80}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="reveal mb-16 max-w-xl">
          <p className="section-label mb-3">What I Work With</p>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        {/* Skill category cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
          {SKILL_CATEGORIES.map(({ label, color, skills }, ci) => {
            const { text } = COLOR_MAP[color]
            return (
              <div
                key={label}
                className={`glass-card rounded-2xl p-6 reveal reveal-delay-${ci + 1}`}
              >
                <h3 className={`font-display font-semibold text-sm mb-5 ${text}`}>{label}</h3>
                <div className="space-y-4">
                  {skills.map((s, si) => (
                    <SkillBar key={s.name} {...s} color={color} index={si} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech badge cloud */}
        <div className="reveal">
          <p className="text-muted text-sm font-mono text-center mb-6 tracking-wider">// FULL TECH STACK</p>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_BADGES.map((badge, i) => {
              const colors = ['', 'green', 'amber', 'pink']
              const tagClass = ['tag', 'tag tag-green', 'tag tag-amber', 'tag tag-pink'][i % 4]
              return (
                <span key={badge} className={tagClass}>
                  {badge}
                </span>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

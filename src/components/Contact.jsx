import { useState } from 'react'

const CONTACT_INFO = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'aniketsinghh1409@gmail.com',
    href: 'mailto:aniketsinghh1409@gmail.com',
    color: 'text-accent',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/aniket-kumar-singh-40a69435b',
    href: 'https://www.linkedin.com/in/aniket-kumar-singh-40a69435b',
    color: 'text-accent',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/aniketsingh1245',
    href: 'https://github.com/aniketsingh1245s',
    color: 'text-lime',
  },
]

const INPUT_CLASSES =
  'w-full bg-elevated border border-border rounded-lg px-4 py-3 text-text text-sm placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:bg-elevated/80 transition-all duration-200 font-body'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // This opens the default mail client with the form data pre-filled.
    // To connect a real backend (Formspree, EmailJS, etc.), replace this block.
    const { name, email, subject, message } = form
    const mailto = `mailto:aniket@example.com?subject=${encodeURIComponent(subject || `Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.open(mailto)
    setStatus('sent')
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="reveal mb-16 max-w-xl">
          <p className="section-label mb-3">Let's Connect</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left — info */}
          <div className="lg:col-span-2 space-y-8 reveal">
            <p className="text-muted text-lg leading-relaxed">
              I'm always open to discussing new projects, research collaborations,
              or opportunities. My inbox is always open — I'll get back to you quickly.
            </p>

            <div className="space-y-4">
              {CONTACT_INFO.map(({ icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-accent/30 hover:bg-elevated/50 transition-all duration-200 group"
                >
                  <span className={`${color} transition-transform group-hover:scale-110`}>{icon}</span>
                  <div>
                    <p className="text-muted text-xs font-mono mb-0.5">{label}</p>
                    <p className="text-text text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability note */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-lime/5 border border-lime/20">
              <span className="w-2.5 h-2.5 rounded-full bg-lime animate-pulse flex-shrink-0" />
              <p className="text-lime text-sm font-mono">
                Currently available for full-time roles and freelance work
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 reveal reveal-delay-1">
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-muted mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={INPUT_CLASSES}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={INPUT_CLASSES}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={INPUT_CLASSES}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or question..."
                    className={`${INPUT_CLASSES} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center"
                >
                  {status === 'sent' ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

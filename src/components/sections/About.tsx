'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import SectionTitle from '@/components/ui/SectionTitle'
import { portfolioData } from '@/data/portfolio'

const stats = [
  { label: 'Projects Built', value: 7, suffix: '+' },
  { label: 'Certificates', value: 3, suffix: '+' },
  { label: 'LeetCode Problems', value: 100, suffix: '+' },
  { label: 'CGPA', value: 8.7, suffix: '/10', decimals: 1 },
]

export default function About() {
  const { personal } = portfolioData
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <SectionTitle
          tag="// 01. ABOUT ME"
          title="The Human Behind "
          highlight="the Code"
          subtitle="Passionate about building things that matter."
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-2xl border border-accent-cyan/20 z-0" />
              <div className="absolute -inset-8 rounded-2xl border border-accent-purple/10 z-0" />

              {/* Profile image placeholder */}
              <div
                className="relative z-10 w-full aspect-square rounded-2xl overflow-hidden glass-card flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.1))' }}
              >
                <div className="text-center">
                  <div className="text-8xl mb-4">👩‍💻</div>
                  <p className="text-xs text-text-muted font-mono">Replace with your photo</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-5 px-4 py-3 glass-card-accent rounded-xl z-20"
              >
                <p className="text-xs font-mono text-accent-cyan">Open to work</p>
                <p className="text-xs text-text-secondary">Full Time / Internship</p>
              </motion.div>

              {/* Tech stack chips */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-5 -left-5 px-4 py-3 glass-card-accent rounded-xl z-20"
              >
                <p className="text-xs font-mono text-accent-purple">CS Student</p>
                <p className="text-xs text-text-secondary">BTech CSE</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-text-secondary leading-relaxed text-lg">
              {personal.bio}
            </p>

            <div className="space-y-3">
              {[
                { icon: '📍', label: 'Location', value: personal.location },
                { icon: '🎓', label: 'Degree', value: 'BTech — Computer Science & Engineering' },
                { icon: '💼', label: 'Status', value: 'Actively seeking SDE roles & internships' },
                { icon: '📧', label: 'Email', value: personal.email },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="text-lg">{icon}</span>
                  <div>
                    <span className="text-xs text-text-muted font-mono uppercase tracking-wider block">{label}</span>
                    <span className="text-text-primary text-sm">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href={personal.resumeUrl}
              download
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-medium transition-all duration-200 hover:bg-accent-cyan/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center hover:border-accent-cyan/30 transition-all duration-300"
            >
              <div className="font-display font-bold text-3xl md:text-4xl gradient-text-cyan mb-1">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-text-muted text-xs font-mono uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

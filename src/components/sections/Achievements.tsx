'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '@/components/ui/SectionTitle'
import { portfolioData } from '@/data/portfolio'

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="achievements" className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          tag="// 05. ACHIEVEMENTS"
          title="Milestones & "
          highlight="Recognition"
          subtitle="Moments that pushed me beyond the keyboard."
        />

        {/* Experience */}
        {portfolioData.experience.length > 0 && (
          <div className="mb-16">
            <h3 className="font-display font-semibold text-xl mb-6 text-center">
              <span className="gradient-text-cyan">Work</span> Experience
            </h3>
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8 border border-border-primary hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-display font-bold text-lg text-text-primary">{exp.role}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-green/10 text-green-400 border border-green-400/30">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-accent-cyan text-sm font-medium">{exp.company}</p>
                    <p className="text-text-muted text-xs font-mono mt-1">
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-text-secondary text-sm">
                      <span className="text-accent-cyan mt-1 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-bg-secondary text-text-secondary border border-border-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 group hover:border-accent-cyan/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                  {ach.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2 py-0.5 rounded-full">
                      {ach.category}
                    </span>
                    <span className="text-[10px] text-text-muted font-mono">{ach.date}</span>
                  </div>
                  <h4 className="font-display font-semibold text-sm text-text-primary mb-2 leading-snug">
                    {ach.title}
                  </h4>
                  <p className="text-text-muted text-xs leading-relaxed">{ach.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

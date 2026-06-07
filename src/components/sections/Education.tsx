'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '@/components/ui/SectionTitle'
import { portfolioData } from '@/data/portfolio'

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" className="py-28 relative" ref={ref}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(124,58,237,0.4), transparent)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle
          tag="// 06. EDUCATION"
          title="Academic "
          highlight="Journey"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-purple/30 to-transparent" />

          <div className="space-y-8">
            {portfolioData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-5 w-4 h-4 rounded-full border-2 border-accent-cyan bg-bg-primary -translate-x-1/2">
                  <div className="absolute inset-1 rounded-full bg-accent-cyan" />
                </div>

                <div className="glass-card rounded-2xl p-6 md:p-8 border border-border-primary hover:border-accent-cyan/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-lg text-text-primary leading-snug mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-accent-cyan text-sm font-medium">{edu.institution}</p>
                      <p className="text-text-muted text-xs font-mono mt-1">{edu.location}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <div className="font-mono text-xs text-text-secondary bg-bg-secondary border border-border-primary px-3 py-1.5 rounded-lg inline-block mb-2">
                        {edu.period}
                      </div>
                      <div className="block">
                        <span className="font-display font-bold text-lg gradient-text-cyan">
                          {edu.cgpa}
                        </span>
                        <span className="text-xs text-text-muted ml-1">CGPA</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {edu.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-text-secondary text-sm">
                        <span className="text-accent-cyan mt-1 flex-shrink-0 text-xs">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '@/components/ui/SectionTitle'
import { portfolioData } from '@/data/portfolio'

const filters = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI/ML']

const statusColors: Record<string, string> = {
  Live: 'text-green-400 bg-green-400/10 border-green-400/30',
  Completed: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30',
  Archived: 'text-text-muted bg-text-muted/10 border-text-muted/30',
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const filtered = filter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(0,212,255,0.3), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          tag="// 03. PROJECTS"
          title="Things I've "
          highlight="Built"
          subtitle="A selection of projects that showcase my skills and passion."
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-mono transition-all duration-200 ${
                filter === f
                  ? 'bg-accent-cyan text-bg-primary font-semibold'
                  : 'glass-card text-text-secondary hover:text-text-primary border border-border-primary hover:border-accent-cyan/30'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <motion.div
                  whileHover={{ borderColor: 'rgba(0,212,255,0.3)' }}
                  className="glass-card rounded-2xl overflow-hidden border border-border-primary transition-all duration-300"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        {project.featured && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
                            FEATURED
                          </span>
                        )}
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${statusColors[project.status]}`}>
                          {project.status}
                        </span>
                        <span className="text-xs text-text-muted font-mono">{project.category}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors px-3 py-1.5 rounded-lg glass-card border border-border-primary hover:border-accent-cyan/30"
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            Code
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-accent-cyan hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 hover:bg-accent-cyan/20"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary mb-3">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary leading-relaxed mb-5">
                      {expanded === project.id ? project.longDescription : project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-bg-secondary text-text-secondary border border-border-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                      className="text-xs font-mono text-accent-cyan hover:text-white transition-colors"
                    >
                      {expanded === project.id ? '▲ Show less' : '▼ Read more'}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-border-primary text-text-secondary hover:text-text-primary hover:border-accent-cyan/30 transition-all duration-200 font-mono text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            See all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

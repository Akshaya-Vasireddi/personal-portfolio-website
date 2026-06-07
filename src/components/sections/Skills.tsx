'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '@/components/ui/SectionTitle'
import { portfolioData } from '@/data/portfolio'

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools', 'AI/ML', 'CS Fundamentals']

const categoryColors: Record<string, string> = {
  Languages: '#00D4FF',
  Frontend: '#7C3AED',
  Backend: '#10B981',
  Database: '#F59E0B',
  Tools: '#EC4899',
  'AI/ML': '#EF4444',
  'CS Fundamentals': '#8B5CF6',
}

export default function Skills() {
  const [active, setActive] = useState('All')
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const filtered = active === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === active)

  return (
    <section id="skills" className="py-28 relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.3), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <SectionTitle
          tag="// 02. SKILLS"
          title="Tools of "
          highlight="My Craft"
          subtitle="Technologies I work with daily and continue to master."
        />

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 ${
                active === cat
                  ? 'bg-accent-cyan text-bg-primary font-semibold'
                  : 'glass-card text-text-secondary hover:text-text-primary border border-border-primary hover:border-accent-cyan/30'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skill cards grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="group glass-card rounded-xl p-4 flex flex-col items-center text-center hover:border-accent-cyan/30 transition-all duration-300 cursor-default relative overflow-hidden"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${categoryColors[skill.category] || '#00D4FF'}15, transparent)`,
                  }}
                />

                {/* Icon */}
                <span className="text-2xl mb-2 relative z-10">{skill.icon}</span>

                {/* Name */}
                <p className="text-xs font-medium text-text-primary relative z-10 mb-2 leading-tight">
                  {skill.name}
                </p>

                {/* Progress bar */}
                <div className="w-full h-0.5 bg-bg-secondary rounded-full overflow-hidden relative z-10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.04, ease: 'easeOut' }}
                    className="h-full rounded-full origin-left"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${categoryColors[skill.category] || '#00D4FF'}, transparent)`,
                    }}
                  />
                </div>

                {/* Level */}
                <span className="text-[10px] text-text-muted font-mono mt-1 relative z-10">{skill.level}%</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Language skill bars - detailed view */}
        {active === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 glass-card rounded-2xl p-8"
          >
            <h3 className="font-display font-semibold text-lg mb-8 text-center">
              Core <span className="gradient-text-cyan">Proficiency</span> Levels
            </h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
              {portfolioData.skills.filter(s => ['Languages', 'Frontend'].includes(s.category)).map((skill, i) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary font-medium">
                      {skill.icon} {skill.name}
                    </span>
                    <span className="text-xs text-text-muted font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.8 + i * 0.06, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${categoryColors[skill.category]}, ${categoryColors[skill.category]}80)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

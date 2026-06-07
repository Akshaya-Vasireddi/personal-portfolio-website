'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionTitleProps {
  tag: string
  title: string
  highlight?: string
  subtitle?: string
}

export default function SectionTitle({ tag, title, highlight, subtitle }: SectionTitleProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const parts = highlight ? title.split(highlight) : [title]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-center mb-16"
    >
      <p className="section-tag mb-4">{tag}</p>
      <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-4">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 flex justify-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-accent-cyan to-transparent origin-center"
        />
      </div>
    </motion.div>
  )
}

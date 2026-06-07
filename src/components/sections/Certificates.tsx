'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '@/components/ui/SectionTitle'
import { portfolioData } from '@/data/portfolio'

export default function Certificates() {
  const [selected, setSelected] = useState<(typeof portfolioData.certificates)[0] | null>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="certificates" className="py-28 relative" ref={ref}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 20% 60%, rgba(236,72,153,0.3), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          tag="// 04. CERTIFICATES"
          title="Learning Never "
          highlight="Stops"
          subtitle="Continuously upskilling through verified credentials."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelected(cert)}
              className="glass-card rounded-2xl p-6 cursor-pointer group hover:border-accent-cyan/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Color accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: cert.color }}
              />

              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${cert.color}10, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Category badge */}
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono mb-4"
                  style={{
                    background: `${cert.color}15`,
                    color: cert.color,
                    border: `1px solid ${cert.color}40`,
                  }}
                >
                  {cert.category}
                </span>

                {/* Certificate icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${cert.color}15` }}
                  >
                    🏅
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm leading-snug text-text-primary group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-xs text-text-secondary">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-text-muted">{cert.date}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-text-muted">ID: {cert.credentialId}</span>
                  <span className="text-xs text-accent-cyan group-hover:translate-x-1 transition-transform duration-200">
                    View →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backdropFilter: 'blur(20px)', background: 'rgba(8,11,20,0.85)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="glass-card rounded-2xl p-8 max-w-md w-full relative"
              style={{ border: `1px solid ${selected.color}40` }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: selected.color }}
              />

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors text-xl"
              >
                ✕
              </button>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                  style={{ background: `${selected.color}15` }}
                >
                  🏅
                </div>

                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-4"
                  style={{
                    background: `${selected.color}15`,
                    color: selected.color,
                    border: `1px solid ${selected.color}40`,
                  }}
                >
                  {selected.category}
                </span>

                <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                  {selected.title}
                </h3>
                <p className="text-text-secondary text-sm mb-1">{selected.issuer}</p>
                <p className="text-text-muted text-xs font-mono mb-2">{selected.date}</p>
                <p className="text-text-muted text-xs font-mono mb-6">
                  Credential ID: {selected.credentialId}
                </p>

                {selected.verifyUrl && (
                  <a
                    href={selected.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-90"
                    style={{
                      background: selected.color,
                      color: '#fff',
                    }}
                  >
                    Verify Certificate ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

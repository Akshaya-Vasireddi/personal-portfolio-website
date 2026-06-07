'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { TypeAnimation } from 'react-type-animation'
import { portfolioData } from '@/data/portfolio'

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => null,
})

const stagger = {
  parent: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  },
  child: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  },
}

export default function Hero() {
  const { personal } = portfolioData

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          variants={stagger.parent}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={stagger.child}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan text-xs font-mono tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={stagger.child}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 leading-none"
          >
            <span className="text-text-primary">{personal.name.split(' ')[0]}</span>
            <br />
            <span className="gradient-text glow-text">{personal.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Animated title */}
          <motion.div
            variants={stagger.child}
            className="text-xl md:text-2xl font-mono text-text-secondary mt-4 mb-6 h-8"
          >
            <span className="text-accent-cyan">{'>'} </span>
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Full Stack Engineer',
                2000,
                'Problem Solver',
                2000,
                'CS Student @ BTech',
                2000,
                'Open Source Contributor',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-text-primary"
            />
            <span className="animate-pulse text-accent-cyan">_</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={stagger.child}
            className="text-text-secondary text-lg max-w-2xl leading-relaxed mb-10"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={stagger.child}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-xl font-medium text-bg-primary bg-accent-cyan hover:bg-accent-cyan/90 transition-all duration-200"
            >
              View My Work
            </motion.button>
            <motion.a
              href={personal.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-xl font-medium text-accent-cyan border border-accent-cyan/40 hover:bg-accent-cyan/10 transition-all duration-200"
            >
              Download CV ↓
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={stagger.child}
            className="flex items-center gap-6 mt-12"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-[#0A66C2] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-text-muted hover:text-accent-pink transition-colors duration-200"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <div className="w-px h-5 bg-border-primary" />

            <span className="text-xs text-text-muted font-mono">
              {portfolioData.projects.length}+ Projects
            </span>
            <span className="text-xs text-text-muted font-mono">
              {portfolioData.certificates.length}+ Certs
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent-cyan/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}

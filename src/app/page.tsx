'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Certificates from '@/components/sections/Certificates'
import Achievements from '@/components/sections/Achievements'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

// Dynamically import cursor for performance
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="page-wrapper">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

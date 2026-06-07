import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080B14',
}

export const metadata: Metadata = {
  title: 'Akshaya Vasireddi — Software Developer Portfolio',
  description: 'Computer Science student and aspiring Software Developer. Building elegant, scalable solutions with React, Next.js, Python, and more. Explore my projects, skills, and journey.',
  keywords: ['Akshaya Vasireddi', 'Software Developer', 'Computer Science', 'Portfolio', 'React Developer', 'Full Stack Developer', 'Python Developer', 'Next.js', 'Web Developer India'],
  authors: [{ name: 'Akshaya Vasireddi' }],
  creator: 'Akshaya Vasireddi',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://akshayavasireddi.vercel.app',
    title: 'Akshaya Vasireddi — Software Developer Portfolio',
    description: 'CS student & aspiring Software Developer. Explore my projects, skills, and certifications.',
    siteName: 'Akshaya Vasireddi Portfolio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Akshaya Vasireddi Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshaya Vasireddi — Software Developer Portfolio',
    description: 'CS student & aspiring Software Developer. Explore my projects, skills, and certifications.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="noise">
        {children}
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#111827', color: '#F0F4FF', border: '1px solid rgba(0,212,255,0.2)' } }} />
      </body>
    </html>
  )
}

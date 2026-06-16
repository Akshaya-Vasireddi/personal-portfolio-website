# 🚀 Akshaya Vasireddi — Portfolio

---

## ✨ Features

- 🌌 **3D Hero** — Interactive particle field + floating wireframe orbs (React Three Fiber)
- 🎭 **Smooth Animations** — Page-wide Framer Motion transitions and scroll reveals
- 💎 **Glass morphism design** — Dark theme with cyan/purple gradient accents
- 🔤 **Type animation** — Rotating titles in the hero section
- 📊 **Animated stat counters** — CountUp on scroll
- 🔍 **Project filtering** — Filter by category with animated transitions
- 🏅 **Certificate gallery** — Modal preview with verify links
- 🖱️ **Custom cursor** — Magnetic cursor for desktop
- 📱 **Fully responsive** — Mobile, tablet, and desktop
- ⚡ **Performance optimized** — Dynamic imports, lazy loading, dpr limiting
- 🔎 **SEO optimized** — Full OpenGraph, Twitter cards, robots meta
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigable

---

## 🗂️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + SEO metadata
│   │   ├── page.tsx            # Main page assembly
│   │   └── globals.css         # Global styles + CSS variables
│   ├── components/
│   │   ├── 3d/
│   │   │   └── HeroScene.tsx   # Three.js particle + orb scene
│   │   ├── sections/
│   │   │   ├── Navbar.tsx      # Sticky nav with active section tracking
│   │   │   ├── Hero.tsx        # Hero with 3D background
│   │   │   ├── About.tsx       # About + animated stats
│   │   │   ├── Skills.tsx      # Filterable skill cards
│   │   │   ├── Projects.tsx    # Filterable project cards
│   │   │   ├── Certificates.tsx# Certificate gallery + modal
│   │   │   ├── Achievements.tsx# Achievements + experience
│   │   │   ├── Education.tsx   # Timeline education
│   │   │   ├── Contact.tsx     # Contact form + social links
│   │   │   └── Footer.tsx      # Footer + back to top
│   │   └── ui/
│   │       ├── SectionTitle.tsx # Reusable animated section titles
│   │       └── CustomCursor.tsx # Magnetic cursor (desktop only)
│   └── data/
│       └── portfolio.ts        # 👈 ALL YOUR PERSONAL DATA GOES HERE
├── public/                     # Static assets
│   ├── resume.pdf              # Your resume (replace!)
│   ├── avatar.jpg              # Your photo (replace!)
│   └── certificates/           # Certificate images (optional)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

---

## 🛠️ Quick Start

### Prerequisites
- Node.js 18.17+
- npm or yarn

### 1. Install dependencies

```bash
npm install
```

### 2. Customize your data

Open `src/data/portfolio.ts` and update:

```typescript
export const portfolioData = {
  personal: {
    name: "Akshaya Vasireddi",       // ← Your name
    email: "your@email.com",          // ← Your email
    github: "https://github.com/...", // ← Your GitHub URL
    linkedin: "https://linkedin.com/in/...", // ← Your LinkedIn
    // ...
  },
  // Add your skills, projects, certificates, etc.
}
```


### 3D Scene

Edit `src/components/3d/HeroScene.tsx` to customize:
- Particle count and distribution
- Orb shapes and positions
- Colors and opacity
- Animation speeds

---

## 📦 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | Framework + SSR |
| React 18 | UI library |
| TypeScript | Type safety |
| Three.js + R3F | 3D graphics |
| @react-three/drei | R3F helpers |
| Framer Motion | Animations |
| Tailwind CSS | Styling |
| react-type-animation | Typewriter effect |
| react-countup | Animated counters |
| react-hot-toast | Notifications |
| react-intersection-observer | Scroll triggers |

---


> Built with ❤️ by Akshaya Vasireddi

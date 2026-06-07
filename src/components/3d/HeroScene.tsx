'use client'

import { useRef, useMemo, Suspense, useEffect, useState } from 'react'

function HeroSceneInner() {
  const [mounted, setMounted] = useState(false)
  const [Components, setComponents] = useState<any>(null)

  useEffect(() => {
    setMounted(true)
    Promise.all([
      import('@react-three/fiber'),
      import('@react-three/drei'),
      import('three'),
    ]).then(([fiber, drei, THREE]) => {
      setComponents({ fiber, drei, THREE })
    })
  }, [])

  if (!mounted || !Components) return null

  const { Canvas, useFrame } = Components.fiber
  const { Points, PointMaterial } = Components.drei

  function ParticleField() {
    const pointsRef = useRef<any>(null!)
    const count = 4000
    const positions = useMemo(() => {
      const pos = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = 2.5 + Math.random() * 2
        pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        pos[i * 3 + 2] = r * Math.cos(phi)
      }
      return pos
    }, [])
    useFrame(({ clock }: any) => {
      if (pointsRef.current) {
        pointsRef.current.rotation.x = clock.getElapsedTime() * 0.05
        pointsRef.current.rotation.y = clock.getElapsedTime() * 0.08
      }
    })
    return (
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00D4FF" size={0.008} sizeAttenuation depthWrite={false} opacity={0.6} />
      </Points>
    )
  }

  function FloatingOrb({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
    const meshRef = useRef<any>(null!)
    useFrame(({ clock }: any) => {
      if (meshRef.current) {
        meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.3
        meshRef.current.rotation.x = clock.getElapsedTime() * 0.2
        meshRef.current.rotation.z = clock.getElapsedTime() * 0.1
      }
    })
    return (
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.15} />
      </mesh>
    )
  }

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} color="#00D4FF" intensity={1} />
        <pointLight position={[-5, -5, -5]} color="#7C3AED" intensity={0.8} />
        <Suspense fallback={null}>
          <ParticleField />
          <FloatingOrb position={[2.5, 0, -2]} color="#00D4FF" scale={0.8} />
          <FloatingOrb position={[-2.5, 0.5, -1]} color="#7C3AED" scale={0.6} />
          <FloatingOrb position={[0, 1.5, -3]} color="#EC4899" scale={0.4} />
          <gridHelper args={[20, 30, '#00D4FF', '#1a2433']} position={[0, -2.5, 0]} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default function HeroScene() {
  return <HeroSceneInner />
}

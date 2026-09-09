import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

// Mesh Geometris Formal (Icosahedron & Wireframe Inner Core)
function TechGeode() {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (outerRef.current) outerRef.current.rotation.y += delta * 0.15
    if (outerRef.current) outerRef.current.rotation.x += delta * 0.08
    if (innerRef.current) innerRef.current.rotation.y -= delta * 0.2
  })

  return (
    <group position={[3.2, 0.5, -2]}>
      {/* Outer Wireframe Core */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#3d4f97" wireframe opacity={0.35} transparent />
      </mesh>
      {/* Inner Solid Core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color="#e48600" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  )
}

// Particle Field Formal (Data Nodes Floating)
function TechNodes() {
  const count = 180
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      array[i * 3] = (Math.random() - 0.5) * 16
      array[i * 3 + 1] = (Math.random() - 0.5) * 10
      array[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return array
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3d4f97"
        size={0.05}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

export default function Scene3D() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -5, -2]} intensity={0.5} color="#f68d1f" />

        <TechNodes />
        <TechGeode />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  )
}
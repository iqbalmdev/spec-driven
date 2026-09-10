"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";

function FloatingOrb({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          transparent
          opacity={0.85}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 4]} intensity={0.8} />
      <FloatingOrb position={[-3.5, 1.2, -2]} color="#0d9488" scale={0.9} speed={1.2} />
      <FloatingOrb position={[3, -0.5, -1]} color="#2dd4bf" scale={0.6} speed={1.6} />
      <FloatingOrb position={[0.5, 2, -3]} color="#14b8a6" scale={0.45} speed={2} />
      <FloatingOrb position={[-1.5, -1.5, -2.5]} color="#5eead4" scale={0.35} speed={1.4} />
      <FloatingOrb position={[4, 1.5, -4]} color="#0f766e" scale={0.55} speed={1.8} />
    </>
  );
}

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-accent/8 via-background/40 to-background" />
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 1.5]}>
          <HeroScene />
        </Canvas>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_72%)]" />
    </div>
  );
}

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Float, OrbitControls, Text } from "@react-three/drei";
import type { Group, Mesh } from "three";
import { courseSections } from "@/content/course";
import { getSectionHref } from "@/lib/course-nav";
import { GlowingCore, IdleSystemSpin, OrbitRingAccent, OrbitRingPath, OrbitSlot, SpaceBackdrop } from "./orbit-visuals";
import { ThreeSceneFrame } from "./scene-frame";

const sectionColors = ["#2dd4bf", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa", "#f472b6", "#fb923c"];

const ORBIT_RADIUS = 3.85;
const ORBIT_SPEED = 0.14;
const SYSTEM_TILT: [number, number, number] = [0.42, 0.12, 0.08];

function SectionPlanet({
  number,
  title,
  color,
  active,
  onClick,
}: {
  number: number;
  title: string;
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  const meshRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.9;
      const pulse = active ? 1 + Math.sin(t * 3) * 0.08 : 1;
      meshRef.current.scale.setScalar(pulse * (active ? 1.15 : 1));
    }
    if (ringRef.current && active) {
      ringRef.current.rotation.z = t * 1.2;
    }
  });

  return (
    <group onClick={onClick}>
      {active && (
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.52, 0.018, 8, 48]} />
          <meshBasicMaterial color={color} transparent opacity={0.7} />
        </mesh>
      )}
      <mesh ref={meshRef}>
        <sphereGeometry args={[active ? 0.38 : 0.3, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active ? 0.75 : 0.35}
          roughness={0.25}
          metalness={0.55}
        />
      </mesh>
      <Billboard follow lockX lockZ position={[0, active ? 0.72 : 0.52, 0]}>
        <Text fontSize={active ? 0.2 : 0.16} color="#f8fafc" anchorX="center" outlineWidth={0.02} outlineColor="#0f172a">
          S{number}
        </Text>
      </Billboard>
      {active && (
        <Billboard follow lockX lockZ position={[0, 1.05, 0]}>
          <Text fontSize={0.11} color="#cbd5e1" anchorX="center" maxWidth={2.2} textAlign="center">
            {title}
          </Text>
        </Billboard>
      )}
    </group>
  );
}

function CourseOrbitSystem({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: (i: number) => void }) {
  const orbitRef = useRef<Group>(null);
  const sections = [...courseSections];

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = state.clock.elapsedTime * ORBIT_SPEED;
    }
  });

  return (
    <group rotation={SYSTEM_TILT}>
      <GlowingCore size={0.5} color="#5eead4" emissive="#14b8a6" spin={0.35} />
      <OrbitRingPath radius={ORBIT_RADIUS} color="#64748b" opacity={0.55} tube={0.014} />
      <OrbitRingAccent radius={ORBIT_RADIUS * 1.12} tilt={[0.55, 0.4, 0.2]} />
      <OrbitRingAccent radius={ORBIT_RADIUS * 0.88} tilt={[-0.35, -0.25, 0.15]} />

      <group ref={orbitRef}>
        {sections.map((section, i) => {
          const phase = (i / sections.length) * Math.PI * 2;
          return (
            <OrbitSlot key={section.slug} radius={ORBIT_RADIUS} phase={phase}>
              <Float speed={1.2} floatIntensity={0.12} rotationIntensity={0.05}>
                <SectionPlanet
                  number={section.number}
                  title={section.title}
                  color={sectionColors[i % sectionColors.length]}
                  active={activeIndex === i}
                  onClick={() => setActiveIndex(i)}
                />
              </Float>
            </OrbitSlot>
          );
        })}
      </group>
    </group>
  );
}

function OrbitScene({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: (i: number) => void }) {
  return (
    <>
      <SpaceBackdrop />
      <IdleSystemSpin speed={0.025}>
        <CourseOrbitSystem activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </IdleSystemSpin>
      <OrbitControls
        enablePan={false}
        minDistance={5.5}
        maxDistance={14}
        autoRotate
        autoRotateSpeed={0.25}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

export function CourseOrbitScene() {
  const [activeIndex, setActiveIndex] = useState(0);
  const section = courseSections[activeIndex];

  return (
    <div className="space-y-3">
      <ThreeSceneFrame label="Course sections in 3D orbit" height="h-[min(55vh,420px)]" variant="space">
        <Canvas camera={{ position: [0, 2.8, 8.5], fov: 48 }} gl={{ antialias: true }}>
          <OrbitScene activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </Canvas>
      </ThreeSceneFrame>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3">
        <div>
          <p className="text-xs text-muted">Orbiting section {section.number}</p>
          <p className="font-medium">{section.title}</p>
        </div>
        <Link
          href={getSectionHref(section.slug)}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          Open section →
        </Link>
      </div>
    </div>
  );
}

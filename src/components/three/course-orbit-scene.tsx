"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Text } from "@react-three/drei";
import type { Mesh } from "three";
import { courseSections } from "@/content/course";
import { getSectionHref } from "@/lib/course-nav";
import { ThreeSceneFrame } from "./scene-frame";

const sectionColors = ["#0d9488", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"];

function SectionOrb({
  number,
  title,
  position,
  color,
  active,
  onClick,
}: {
  number: number;
  title: string;
  position: [number, number, number];
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current && active) {
      ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2.5) * 0.06);
    }
  });

  return (
    <Float speed={1} floatIntensity={0.25}>
      <group position={position}>
        <mesh ref={ref} onClick={onClick}>
          <sphereGeometry args={[0.32, 24, 24]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={active ? 0.55 : 0.2} />
        </mesh>
        <Text position={[0, -0.55, 0]} fontSize={0.16} color="#1c1917" anchorX="center">
          S{number}
        </Text>
        {active && (
          <Text position={[0, 0.55, 0]} fontSize={0.12} color="#57534e" anchorX="center" maxWidth={1.8}>
            {title}
          </Text>
        )}
      </group>
    </Float>
  );
}

function OrbitScene({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: (i: number) => void }) {
  const radius = 3.2;
  const sections = [...courseSections];

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 4]} intensity={1} />
      <mesh>
        <torusGeometry args={[radius, 0.02, 8, 64]} />
        <meshStandardMaterial color="#94a3b8" emissive="#64748b" emissiveIntensity={0.2} />
      </mesh>
      {sections.map((section, i) => {
        const angle = (i / sections.length) * Math.PI * 2 - Math.PI / 2;
        const position: [number, number, number] = [
          Math.cos(angle) * radius,
          Math.sin(i * 0.4) * 0.35,
          Math.sin(angle) * radius,
        ];
        return (
          <SectionOrb
            key={section.slug}
            number={section.number}
            title={section.title}
            position={position}
            color={sectionColors[i % sectionColors.length]}
            active={activeIndex === i}
            onClick={() => setActiveIndex(i)}
          />
        );
      })}
      <OrbitControls enablePan={false} minDistance={5} maxDistance={12} autoRotate autoRotateSpeed={0.35} />
    </>
  );
}

export function CourseOrbitScene() {
  const [activeIndex, setActiveIndex] = useState(0);
  const section = courseSections[activeIndex];

  return (
    <div className="space-y-3">
      <ThreeSceneFrame label="Course sections in 3D orbit" height="h-[min(55vh,400px)]">
        <Canvas camera={{ position: [0, 2.5, 7], fov: 50 }}>
          <OrbitScene activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </Canvas>
      </ThreeSceneFrame>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3">
        <div>
          <p className="text-xs text-muted">Section {section.number}</p>
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

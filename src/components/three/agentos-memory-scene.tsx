"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Float, OrbitControls, Text } from "@react-three/drei";
import type { Group, Mesh } from "three";
import { highRigorArtifactFiles } from "@/content/section-05";
import { GlowingCore, OrbitRingPath, OrbitSlot, SpaceBackdrop } from "./orbit-visuals";
import { ThreeSceneFrame } from "./scene-frame";

const colors = ["#2dd4bf", "#60a5fa", "#a78bfa"];
const RADIUS = 2.35;
const SPEED = 0.11;

function MemorySatellite({
  label,
  color,
  active,
  onClick,
}: {
  label: string;
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * (active ? 1.1 : 0.35);
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
    }
  });

  return (
    <group onClick={onClick}>
      <mesh ref={ref}>
        <boxGeometry args={[0.75, 0.48, 0.1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active ? 0.7 : 0.25}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[0.55, 0.32, 0.02]} />
        <meshStandardMaterial color="#f8fafc" emissive="#e2e8f0" emissiveIntensity={active ? 0.15 : 0.05} />
      </mesh>
      <Billboard follow lockX lockZ position={[0, -0.62, 0]}>
        <Text fontSize={0.14} color="#e2e8f0" anchorX="center" outlineWidth={0.015} outlineColor="#0f172a">
          {label}
        </Text>
      </Billboard>
    </group>
  );
}

function AgentOsScene({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: (i: number) => void }) {
  const orbitRef = useRef<Group>(null);

  useFrame((state) => {
    if (orbitRef.current) orbitRef.current.rotation.y = state.clock.elapsedTime * SPEED;
  });

  return (
    <group rotation={[0.38, 0.15, 0]}>
      <GlowingCore size={0.42} color="#5eead4" emissive="#0d9488" />
      <OrbitRingPath radius={RADIUS} color="#64748b" opacity={0.5} />
      <group ref={orbitRef}>
        {highRigorArtifactFiles.map((file, i) => {
          const phase = (i / highRigorArtifactFiles.length) * Math.PI * 2;
          return (
            <OrbitSlot key={file.file} radius={RADIUS} phase={phase}>
              <Float speed={1.1} floatIntensity={0.1}>
                <MemorySatellite
                  label={file.file}
                  color={colors[i]}
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

export function AgentOsMemoryScene() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = highRigorArtifactFiles[activeIndex];

  return (
    <div className="space-y-3">
      <ThreeSceneFrame label="AgentOS memory files orbiting project core" height="h-[min(45vh,360px)]" variant="space">
        <Canvas camera={{ position: [0, 1.8, 6.2], fov: 46 }} gl={{ antialias: true }}>
          <SpaceBackdrop starCount={2200} />
          <AgentOsScene activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          <OrbitControls enablePan={false} minDistance={4.5} maxDistance={10} enableDamping dampingFactor={0.06} />
        </Canvas>
      </ThreeSceneFrame>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3">
        <div>
          <p className="text-xs text-muted capitalize">{active.problem}</p>
          <p className="font-mono text-sm">{active.file}</p>
        </div>
        <Link
          href="/course/section-05/agent-os"
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          Lesson 1 →
        </Link>
      </div>
    </div>
  );
}

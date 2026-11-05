"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Text } from "@react-three/drei";
import type { Group, Mesh } from "three";
import { highRigorArtifactFiles } from "@/content/section-05";
import { ThreeSceneFrame } from "./scene-frame";

const colors = ["#0d9488", "#3b82f6", "#8b5cf6"];

function MemoryFile({
  label,
  position,
  color,
  active,
  onClick,
}: {
  label: string;
  position: [number, number, number];
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && active) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.8;
    }
  });

  return (
    <Float speed={1.2} floatIntensity={0.3}>
      <group position={position}>
        <mesh ref={meshRef} onClick={onClick}>
          <boxGeometry args={[0.9, 0.55, 0.12]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={active ? 0.5 : 0.15} />
        </mesh>
        <Text position={[0, -0.55, 0]} fontSize={0.18} color="#1c1917" anchorX="center" maxWidth={2}>
          {label}
        </Text>
      </group>
    </Float>
  );
}

function Core() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.25;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.45, 0]} />
      <meshStandardMaterial color="#14b8a6" wireframe emissive="#0d9488" emissiveIntensity={0.4} />
    </mesh>
  );
}

function AgentOsScene({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: (i: number) => void }) {
  const ringRef = useRef<Group>(null);

  useFrame((state) => {
    if (ringRef.current) ringRef.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  const positions: [number, number, number][] = [
    [0, 1.4, 0],
    [-1.35, -0.85, 0],
    [1.35, -0.85, 0],
  ];

  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 5]} intensity={1} />
      <Core />
      <group ref={ringRef}>
        {highRigorArtifactFiles.map((file, i) => (
          <MemoryFile
            key={file.file}
            label={file.file}
            position={positions[i]}
            color={colors[i]}
            active={activeIndex === i}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </group>
      <OrbitControls enablePan={false} minDistance={4} maxDistance={9} />
    </>
  );
}

export function AgentOsMemoryScene() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = highRigorArtifactFiles[activeIndex];

  return (
    <div className="space-y-3">
      <ThreeSceneFrame label="AgentOS memory files in 3D" height="h-[min(45vh,340px)]">
        <Canvas camera={{ position: [0, 0.5, 5.5], fov: 48 }}>
          <AgentOsScene activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
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

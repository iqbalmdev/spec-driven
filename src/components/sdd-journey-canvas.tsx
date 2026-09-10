"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { cn } from "@/lib/utils";
import { OrbitControls, Text, Float, Line } from "@react-three/drei";
import type { Mesh } from "three";

const nodes: {
  id: number;
  label: string;
  href: string;
  position: [number, number, number];
  color: string;
}[] = [
  { id: 1, label: "shape-spec", href: "/course/section-04/shape-spec", position: [-4, 1, 0], color: "#0d9488" },
  { id: 2, label: "Gate", href: "/course/section-04/gate", position: [-2, 0.5, 1], color: "#f59e0b" },
  { id: 3, label: "Constitution", href: "/course/section-04/constitution", position: [0, 0, 0], color: "#8b5cf6" },
  { id: 4, label: "Tasks", href: "/course/section-02", position: [2, -0.5, -1], color: "#3b82f6" },
  { id: 5, label: "Implement", href: "/course/section-03", position: [4, -1, 0], color: "#10b981" },
  { id: 6, label: "Verify", href: "/course/section-03/verify", position: [6, 0, 1], color: "#ec4899" },
];

function PathLine() {
  const points = nodes.map((n) => n.position);
  return <Line points={points} color="#94a3b8" lineWidth={2} />;
}

function JourneyNode({
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
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.08);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <group position={position}>
        <mesh ref={meshRef} onClick={onClick}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={active ? 0.6 : 0.2} />
        </mesh>
        <Text position={[0, -0.7, 0]} fontSize={0.22} color="#1c1917" anchorX="center">
          {label}
        </Text>
      </group>
    </Float>
  );
}

function Scene({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: (i: number) => void }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <PathLine />
      {nodes.map((node, i) => (
        <JourneyNode
          key={node.id}
          label={node.label}
          position={node.position}
          color={node.color}
          active={activeIndex === i}
          onClick={() => setActiveIndex(i)}
        />
      ))}
      <OrbitControls enablePan={false} minDistance={6} maxDistance={14} />
    </>
  );
}

export function SddJourneyCanvas({ immersive = false }: { immersive?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = nodes[activeIndex];

  return (
    <div className="space-y-3">
      <div
        className={cn(
          "rounded-2xl border border-border overflow-hidden bg-gradient-to-b from-sky-50/80 to-stone-100/80 dark:from-stone-900 dark:to-stone-950",
          immersive ? "h-[min(60vh,520px)]" : "h-[320px]"
        )}
      >
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
          <Scene activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </Canvas>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3">
        <div>
          <p className="text-xs text-muted">Selected node</p>
          <p className="font-medium">{active.label}</p>
        </div>
        <Link
          href={active.href}
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          Explore →
        </Link>
      </div>
    </div>
  );
}

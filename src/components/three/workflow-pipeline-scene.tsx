"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls, Text } from "@react-three/drei";
import type { Mesh } from "three";
import { ThreeSceneFrame } from "./scene-frame";

const stages = [
  { label: "shape-spec", color: "#0d9488" },
  { label: "requirements", color: "#3b82f6" },
  { label: "Gate", color: "#f59e0b" },
  { label: "tasks", color: "#8b5cf6" },
  { label: "verify", color: "#10b981" },
];

function StageBlock({
  label,
  position,
  color,
  index,
}: {
  label: string;
  position: [number, number, number];
  color: string;
  index: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.06;
    }
  });

  return (
    <group position={position}>
      <mesh ref={ref}>
        <boxGeometry args={[0.85, 0.5, 0.5]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} />
      </mesh>
      <Text position={[0, -0.45, 0]} fontSize={0.15} color="#1c1917" anchorX="center">
        {label}
      </Text>
    </group>
  );
}

function PipelineScene() {
  const positions = stages.map((_, i): [number, number, number] => [i * 1.35 - 2.7, 0, 0]);

  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 5, 6]} intensity={1} />
      <Line points={positions} color="#94a3b8" lineWidth={2} />
      {stages.map((stage, i) => (
        <StageBlock key={stage.label} label={stage.label} position={positions[i]} color={stage.color} index={i} />
      ))}
      <OrbitControls enablePan={false} minDistance={4} maxDistance={10} />
    </>
  );
}

export function WorkflowPipelineScene() {
  return (
    <ThreeSceneFrame label="SDD workflow pipeline in 3D" height="h-[280px]">
      <Canvas camera={{ position: [0, 1.2, 5], fov: 45 }}>
        <PipelineScene />
      </Canvas>
    </ThreeSceneFrame>
  );
}

"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Line, OrbitControls, Text } from "@react-three/drei";
import type { Mesh } from "three";
import * as THREE from "three";
import { GlowingCore, SpaceBackdrop } from "./orbit-visuals";
import { ThreeSceneFrame } from "./scene-frame";

const stages = [
  { label: "shape-spec", color: "#2dd4bf" },
  { label: "requirements", color: "#60a5fa" },
  { label: "Gate", color: "#fbbf24" },
  { label: "tasks", color: "#a78bfa" },
  { label: "verify", color: "#34d399" },
];

const ARC_RADIUS = 3.2;

function StageNode({
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
      ref.current.rotation.y = state.clock.elapsedTime * 0.4 + index;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.2 + index) * 0.04;
    }
  });

  return (
    <group position={position}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} roughness={0.25} metalness={0.5} />
      </mesh>
      <Billboard follow lockX lockZ position={[0, -0.38, 0]}>
        <Text fontSize={0.12} color="#e2e8f0" anchorX="center" outlineWidth={0.012} outlineColor="#0f172a">
          {label}
        </Text>
      </Billboard>
    </group>
  );
}

function PipelineScene() {
  const positions = useMemo(() => {
    const start = -Math.PI * 0.55;
    const end = Math.PI * 0.55;
    return stages.map((_, i): [number, number, number] => {
      const t = i / (stages.length - 1);
      const angle = start + (end - start) * t;
      return [Math.cos(angle) * ARC_RADIUS, Math.sin(angle) * 0.35, Math.sin(angle) * ARC_RADIUS * 0.35];
    });
  }, []);

  const arcPoints = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, ARC_RADIUS, ARC_RADIUS * 0.35, -Math.PI * 0.55, Math.PI * 0.55, false, 0);
    return curve.getPoints(48).map((p) => [p.x, p.y, 0] as [number, number, number]);
  }, []);

  return (
    <group rotation={[0.25, 0.35, 0]}>
      <GlowingCore size={0.32} color="#5eead4" emissive="#14b8a6" spin={0.25} />
      <Line points={arcPoints} color="#64748b" lineWidth={1.5} transparent opacity={0.5} />
      {positions.map((pos, i) => (
        <group key={stages[i].label}>
          {i > 0 && (
            <Line
              points={[positions[i - 1], pos]}
              color={stages[i].color}
              lineWidth={1.2}
              transparent
              opacity={0.4}
            />
          )}
          <StageNode label={stages[i].label} position={pos} color={stages[i].color} index={i} />
        </group>
      ))}
    </group>
  );
}

export function WorkflowPipelineScene() {
  return (
    <ThreeSceneFrame label="SDD workflow along the spec orbit" height="h-[min(36vh,300px)]" variant="space">
      <Canvas camera={{ position: [0, 1.5, 7], fov: 45 }} gl={{ antialias: true }}>
        <SpaceBackdrop starCount={1600} />
        <PipelineScene />
        <OrbitControls enablePan={false} minDistance={5} maxDistance={11} enableDamping dampingFactor={0.05} />
      </Canvas>
    </ThreeSceneFrame>
  );
}

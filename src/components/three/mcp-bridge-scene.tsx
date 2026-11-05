"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, Text } from "@react-three/drei";
import type { Mesh } from "three";
import { mcpBridgeExamples } from "@/content/section-05";
import { ThreeSceneFrame } from "./scene-frame";

function Hub() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.35, 0]} />
      <meshStandardMaterial color="#2dd4bf" emissive="#0d9488" emissiveIntensity={0.45} wireframe />
    </mesh>
  );
}

function BridgeNode({ position, label }: { position: [number, number, number]; label: string }) {
  return (
    <Float speed={1.3} floatIntensity={0.2}>
      <group position={position}>
        <mesh>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#3b82f6" emissive="#2563eb" emissiveIntensity={0.35} />
        </mesh>
        <Text position={[0, -0.35, 0]} fontSize={0.11} color="#1c1917" anchorX="center" maxWidth={1.2}>
          {label}
        </Text>
      </group>
    </Float>
  );
}

function McpScene() {
  const nodes = mcpBridgeExamples.slice(0, 4);
  const radius = 2.2;
  const positions = nodes.map((_, i) => {
    const angle = (i / nodes.length) * Math.PI * 2;
    return [Math.cos(angle) * radius, Math.sin(i) * 0.3, Math.sin(angle) * radius] as [number, number, number];
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Hub />
      {positions.map((pos, i) => (
        <group key={nodes[i].tool}>
          <Line points={[[0, 0, 0], pos]} color="#64748b" lineWidth={1.5} />
          <BridgeNode position={pos} label={nodes[i].tool.split(" / ")[0]} />
        </group>
      ))}
      <OrbitControls enablePan={false} minDistance={4} maxDistance={8} />
    </>
  );
}

export function McpBridgeScene() {
  return (
    <ThreeSceneFrame label="MCP runtime bridge" height="h-[260px]">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
        <McpScene />
      </Canvas>
    </ThreeSceneFrame>
  );
}

"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Float, Line, OrbitControls, Text } from "@react-three/drei";
import type { Group, Mesh } from "three";
import { mcpBridgeExamples } from "@/content/section-05";
import { GlowingCore, OrbitRingPath, OrbitSlot, SpaceBackdrop } from "./orbit-visuals";
import { ThreeSceneFrame } from "./scene-frame";

const RADIUS = 2.5;
const SPEED = 0.09;

function BridgeSatellite({ label }: { label: string }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 1.5;
  });

  return (
    <Float speed={1.4} floatIntensity={0.15}>
      <group>
        <mesh ref={ref}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial color="#60a5fa" emissive="#2563eb" emissiveIntensity={0.55} roughness={0.2} metalness={0.6} />
        </mesh>
        <Billboard follow lockX lockZ position={[0, -0.42, 0]}>
          <Text fontSize={0.1} color="#e2e8f0" anchorX="center" maxWidth={1.4} textAlign="center" outlineWidth={0.012} outlineColor="#0f172a">
            {label}
          </Text>
        </Billboard>
      </group>
    </Float>
  );
}

function McpScene() {
  const orbitRef = useRef<Group>(null);
  const nodes = mcpBridgeExamples.slice(0, 4);

  useFrame((state) => {
    if (orbitRef.current) orbitRef.current.rotation.y = state.clock.elapsedTime * SPEED;
  });

  return (
    <group rotation={[0.32, 0, 0]}>
      <GlowingCore size={0.38} color="#2dd4bf" emissive="#0d9488" spin={0.5} />
      <OrbitRingPath radius={RADIUS} color="#475569" opacity={0.45} />
      <group ref={orbitRef}>
        {nodes.map((node, i) => {
          const phase = (i / nodes.length) * Math.PI * 2;
          return (
            <OrbitSlot key={node.tool} radius={RADIUS} phase={phase}>
              <Line
                points={[
                  [0, 0, 0],
                  [-RADIUS, 0, 0],
                ]}
                color="#38bdf8"
                lineWidth={1.2}
                transparent
                opacity={0.35}
              />
              <BridgeSatellite label={node.tool.split(" / ")[0]} />
            </OrbitSlot>
          );
        })}
      </group>
    </group>
  );
}

export function McpBridgeScene() {
  return (
    <ThreeSceneFrame label="MCP tools orbiting the agent host" height="h-[min(38vh,320px)]" variant="space">
      <Canvas camera={{ position: [0, 2, 6], fov: 48 }} gl={{ antialias: true }}>
        <SpaceBackdrop starCount={1800} />
        <McpScene />
        <OrbitControls enablePan={false} minDistance={4} maxDistance={9} enableDamping dampingFactor={0.05} autoRotate autoRotateSpeed={0.2} />
      </Canvas>
    </ThreeSceneFrame>
  );
}

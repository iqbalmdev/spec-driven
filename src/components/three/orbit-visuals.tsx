"use client";

import { useRef, type ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import type { Group, Mesh } from "three";

/** Deep-space backdrop shared by orbit-style scenes */
export function SpaceBackdrop({ starCount = 2800 }: { starCount?: number }) {
  return (
    <>
      <color attach="background" args={["#06070d"]} />
      <fog attach="fog" args={["#06070d", 12, 28]} />
      <Stars radius={60} depth={40} count={starCount} factor={2.8} saturation={0.15} fade speed={0.4} />
      <ambientLight intensity={0.25} />
      <pointLight position={[0, 0, 0]} intensity={1.8} color="#2dd4bf" distance={14} decay={2} />
      <directionalLight position={[6, 10, 4]} intensity={0.55} color="#93c5fd" />
    </>
  );
}

/** Glowing nucleus — course hub, AgentOS core, MCP host */
export function GlowingCore({
  color = "#14b8a6",
  emissive = "#0d9488",
  size = 0.55,
  spin = 0.2,
}: {
  color?: string;
  emissive?: string;
  size?: number;
  spin?: number;
}) {
  const coreRef = useRef<Mesh>(null);
  const haloRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) coreRef.current.rotation.y = t * spin;
    if (haloRef.current) {
      haloRef.current.rotation.y = -t * spin * 0.6;
      haloRef.current.rotation.x = Math.sin(t * 0.4) * 0.15;
    }
  });

  return (
    <group>
      <mesh ref={haloRef}>
        <icosahedronGeometry args={[size * 1.45, 1]} />
        <meshBasicMaterial color={emissive} wireframe transparent opacity={0.22} />
      </mesh>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[size, 2]} />
        <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.85} roughness={0.35} metalness={0.4} />
      </mesh>
      <Sparkles count={28} scale={size * 3.5} size={2.5} speed={0.35} color={emissive} />
    </group>
  );
}

/** Faint orbital path — wireframe torus aligned to XZ plane */
export function OrbitRingPath({
  radius,
  color = "#475569",
  opacity = 0.45,
  tube = 0.012,
}: {
  radius: number;
  color?: string;
  opacity?: number;
  tube?: number;
}) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, tube, 12, 128]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} wireframe />
    </mesh>
  );
}

/** Secondary tilted ring for depth (decorative) */
export function OrbitRingAccent({ radius, tilt }: { radius: number; tilt: [number, number, number] }) {
  return (
    <group rotation={tilt}>
      <OrbitRingPath radius={radius} color="#334155" opacity={0.2} tube={0.008} />
    </group>
  );
}

/** Rotating pivot: children sit at `radius` on the ring and travel with the orbit */
export function OrbitalPivot({
  radius,
  phase,
  speed,
  tilt,
  children,
}: {
  radius: number;
  phase: number;
  speed: number;
  tilt?: [number, number, number];
  children: ReactNode;
}) {
  const pivotRef = useRef<Group>(null);

  useFrame((state) => {
    if (pivotRef.current) {
      pivotRef.current.rotation.y = state.clock.elapsedTime * speed + phase;
    }
  });

  return (
    <group rotation={tilt ?? [0, 0, 0]}>
      <OrbitRingPath radius={radius} />
      <group ref={pivotRef}>
        <group position={[radius, 0, 0]}>{children}</group>
      </group>
    </group>
  );
}

/** Single body on a shared orbit ring (multiple bodies use one pivot + phase offsets) */
export function OrbitSlot({
  radius,
  phase,
  children,
}: {
  radius: number;
  phase: number;
  children: ReactNode;
}) {
  return (
    <group rotation={[0, phase, 0]}>
      <group position={[radius, 0, 0]}>{children}</group>
    </group>
  );
}

/** Whole system slowly spins when idle */
export function IdleSystemSpin({ children, speed = 0.06 }: { children: ReactNode; speed?: number }) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * speed;
  });
  return <group ref={ref}>{children}</group>;
}

"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Float, Line, OrbitControls, Text, useCursor } from "@react-three/drei";
import type { Group, Mesh } from "three";
import { productCompileTargets, specIrNode } from "@/content/section-07";
import { cn } from "@/lib/utils";
import { GlowingCore, OrbitRingAccent, OrbitRingPath, OrbitSlot, SpaceBackdrop } from "./orbit-visuals";
import { ThreeSceneFrame } from "./scene-frame";

const RADIUS = 3.15;
const ORBIT_SPEED = 0.1;
const SYSTEM_TILT: [number, number, number] = [0.38, 0.08, 0.04];
const PACKET_COUNT = 4;
const TARGET_COLORS = ["#5eead4", "#7dd3fc", "#a5b4fc"] as const;

type NodeId = typeof specIrNode.id | (typeof productCompileTargets)[number]["id"];

function CompilePackets({
  color,
  active,
  radius,
}: {
  color: string;
  active: boolean;
  radius: number;
}) {
  const groupRef = useRef<Group>(null);
  const packetRefs = useRef<(Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    packetRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const cycle = ((t * (active ? 0.55 : 0.22) + i / PACKET_COUNT) % 1 + 1) % 1;
      mesh.position.x = -radius * (1 - cycle);
      mesh.scale.setScalar(active ? 1 : 0.55);
      const material = mesh.material;
      if (!Array.isArray(material) && "opacity" in material) {
        material.opacity = active ? 0.9 * (1 - cycle) : 0.25 * (1 - cycle);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: PACKET_COUNT }, (_, i) => (
        <mesh
          key={i}
          ref={(node) => {
            packetRefs.current[i] = node;
          }}
          position={[-radius, 0, 0]}
        >
          <sphereGeometry args={[0.045, 10, 10]} />
          <meshBasicMaterial color={color} transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function TargetBody({
  label,
  color,
  active,
  onSelect,
}: {
  label: string;
  color: string;
  active: boolean;
  onSelect: () => void;
}) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!meshRef.current) return;
    meshRef.current.rotation.y = t * (active ? 1.1 : 0.45);
    meshRef.current.rotation.x = Math.sin(t * 0.6) * 0.12;
    const pulse = active ? 1.08 + Math.sin(t * 2.4) * 0.04 : 1;
    meshRef.current.scale.setScalar(pulse);
  });

  return (
    <group
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      {active && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.48, 0.016, 8, 48]} />
          <meshBasicMaterial color={color} transparent opacity={0.65} />
        </mesh>
      )}
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[active ? 0.32 : 0.26, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active || hovered ? 0.7 : 0.32}
          roughness={0.28}
          metalness={0.55}
        />
      </mesh>
      <Billboard follow lockX lockZ position={[0, active ? 0.62 : 0.48, 0]}>
        <Text fontSize={active ? 0.16 : 0.13} color="#f8fafc" anchorX="center" outlineWidth={0.016} outlineColor="#0f172a">
          {label}
        </Text>
      </Billboard>
    </group>
  );
}

function SpecCore({ active, onSelect }: { active: boolean; onSelect: () => void }) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  return (
    <group
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <GlowingCore size={active ? 0.52 : 0.44} color="#5eead4" emissive="#14b8a6" spin={active ? 0.45 : 0.28} />
      <Billboard follow lockX lockZ position={[0, 1.05, 0]}>
        <Text fontSize={0.18} color="#f8fafc" anchorX="center" outlineWidth={0.018} outlineColor="#0f172a">
          {specIrNode.label}
        </Text>
      </Billboard>
      {active && (
        <Billboard follow lockX lockZ position={[0, 1.32, 0]}>
          <Text fontSize={0.09} color="#94a3b8" anchorX="center">
            source of truth
          </Text>
        </Billboard>
      )}
    </group>
  );
}

function ForgeSystem({
  selectedId,
  onSelect,
}: {
  selectedId: NodeId;
  onSelect: (id: NodeId) => void;
}) {
  const orbitRef = useRef<Group>(null);

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = state.clock.elapsedTime * ORBIT_SPEED;
    }
  });

  return (
    <group rotation={SYSTEM_TILT}>
      <SpecCore active={selectedId === specIrNode.id} onSelect={() => onSelect(specIrNode.id)} />
      <OrbitRingPath radius={RADIUS} color="#64748b" opacity={0.5} tube={0.014} />
      <OrbitRingAccent radius={RADIUS * 1.14} tilt={[0.5, 0.35, 0.18]} />
      <OrbitRingAccent radius={RADIUS * 0.72} tilt={[-0.4, -0.2, 0.12]} />

      <group ref={orbitRef}>
        {productCompileTargets.map((target, index) => {
          const phase = (index / productCompileTargets.length) * Math.PI * 2;
          const color = TARGET_COLORS[index];
          const active = selectedId === target.id;
          return (
            <OrbitSlot key={target.id} radius={RADIUS} phase={phase}>
              <Line
                points={[
                  [0, 0, 0],
                  [-RADIUS, 0, 0],
                ]}
                color={color}
                lineWidth={active ? 1.6 : 1}
                transparent
                opacity={active ? 0.55 : 0.18}
              />
              <CompilePackets color={color} active={active} radius={RADIUS} />
              <Float speed={1.15} floatIntensity={0.1} rotationIntensity={0.04}>
                <TargetBody
                  label={target.label}
                  color={color}
                  active={active}
                  onSelect={() => onSelect(target.id)}
                />
              </Float>
            </OrbitSlot>
          );
        })}
      </group>
    </group>
  );
}

function selectedCopy(id: NodeId) {
  if (id === specIrNode.id) return specIrNode;
  return productCompileTargets.find((target) => target.id === id) ?? specIrNode;
}

export function CompilerForgeScene() {
  const [selectedId, setSelectedId] = useState<NodeId>(specIrNode.id);
  const selected = selectedCopy(selectedId);

  return (
    <div className="space-y-3">
      <ThreeSceneFrame
        label="Spec as compiler IR emitting Go, Rust, and Flutter targets"
        height="h-[min(48vh,400px)]"
        variant="space"
        hint="Drag to orbit · Scroll to zoom · Click the spec or a target to compile"
      >
        <Canvas camera={{ position: [0, 2.4, 8], fov: 46 }} gl={{ antialias: true }}>
          <SpaceBackdrop starCount={2200} />
          <ForgeSystem selectedId={selectedId} onSelect={setSelectedId} />
          <OrbitControls enablePan={false} minDistance={5.5} maxDistance={13} enableDamping dampingFactor={0.05} />
        </Canvas>
      </ThreeSceneFrame>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Compilation targets">
        <button
          type="button"
          role="tab"
          aria-selected={selectedId === specIrNode.id}
          onClick={() => setSelectedId(specIrNode.id)}
          className={cn(
            "rounded-lg px-3 py-1.5 text-xs font-medium ring-1 transition-colors",
            selectedId === specIrNode.id
              ? "bg-accent/10 text-accent ring-accent/30"
              : "bg-surface text-muted ring-border hover:text-foreground"
          )}
        >
          {specIrNode.label}
        </button>
        {productCompileTargets.map((target) => (
          <button
            key={target.id}
            type="button"
            role="tab"
            aria-selected={selectedId === target.id}
            onClick={() => setSelectedId(target.id)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-medium ring-1 transition-colors",
              selectedId === target.id
                ? "bg-accent/10 text-accent ring-accent/30"
                : "bg-surface text-muted ring-border hover:text-foreground"
            )}
          >
            {target.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-surface px-4 py-3" role="tabpanel">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">{selected.role}</p>
        <p className="mt-1 font-medium text-foreground">{selected.stack}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{selected.detail}</p>
      </div>
    </div>
  );
}

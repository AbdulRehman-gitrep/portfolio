"use client";

import { Float, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { AdditiveBlending } from "three";
import type { Group, Points } from "three";

function NeuralCore() {
  const group = useRef<Group>(null);
  const nodes = useMemo(() => {
    const count = 84;
    return Array.from({ length: count }, (_, index) => {
      const phi = Math.acos(1 - (2 * (index + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * index;
      const radius = 1.55;
      return [
        Math.cos(theta) * Math.sin(phi) * radius,
        Math.sin(theta) * Math.sin(phi) * radius,
        Math.cos(phi) * radius,
      ] as [number, number, number];
    });
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = time * 0.18 + state.pointer.x * 0.34;
      group.current.rotation.x = state.pointer.y * 0.2;
      group.current.position.y = -0.44 + Math.sin(time * 0.6) * 0.06;
    }
  });

  return (
    <group ref={group} scale={0.96}>
      <mesh>
        <icosahedronGeometry args={[1.55, 3]} />
        <meshBasicMaterial color="#b66cff" wireframe transparent opacity={0.46} />
      </mesh>
      <mesh scale={1.025}>
        <icosahedronGeometry args={[1.55, 2]} />
        <meshBasicMaterial color="#00f5ff" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh scale={1.08}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial
          color="#7df9ff"
          wireframe
          transparent
          opacity={0.12}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {nodes.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[index % 7 === 0 ? 0.062 : 0.04, 10, 10]} />
          <meshBasicMaterial
            color={index % 4 === 0 ? "#d7a7ff" : "#7df9ff"}
            transparent
            opacity={0.82}
            blending={AdditiveBlending}
          />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2.08, 0, 0]}>
        <torusGeometry args={[1.9, 0.014, 16, 220]} />
        <meshBasicMaterial color="#7df9ff" transparent opacity={0.68} blending={AdditiveBlending} />
      </mesh>
      <mesh rotation={[Math.PI / 2.7, 0.15, -0.58]}>
        <torusGeometry args={[2.12, 0.012, 16, 220]} />
        <meshBasicMaterial color="#b66cff" transparent opacity={0.62} blending={AdditiveBlending} />
      </mesh>
      <mesh rotation={[Math.PI / 2.38, -0.18, 0.72]}>
        <torusGeometry args={[2.34, 0.006, 12, 220]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.32} blending={AdditiveBlending} />
      </mesh>
    </group>
  );
}

function Particles() {
  const particles = useRef<Group>(null);
  const points = useRef<Points>(null);
  const { viewport } = useThree();
  const count = viewport.width < 6 ? 28 : 64;
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * 9;
      values[index * 3 + 1] = (Math.random() - 0.5) * 7;
      values[index * 3 + 2] = (Math.random() - 0.5) * 4 - 1;
    }
    return values;
  }, [count]);

  useFrame((state) => {
    if (particles.current) particles.current.rotation.z = state.clock.elapsedTime * 0.025;
    if (!points.current) return;
    const attribute = points.current.geometry.attributes.position;
    for (let index = 0; index < count; index += 1) {
      const yIndex = index * 3 + 1;
      positions[yIndex] += 0.003 + (index % 5) * 0.0008;
      if (positions[yIndex] > 4) positions[yIndex] = -4;
    }
    attribute.needsUpdate = true;
  });

  return (
    <group ref={particles}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          color="#7df9ff"
          size={0.055}
          transparent
          opacity={0.82}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.8], fov: 58 }} dpr={[1, 2]}>
      <color attach="background" args={["#0a0a0f"]} />
      <Stars radius={70} depth={42} count={1500} factor={4.4} saturation={0} fade speed={0.42} />
      <Float speed={1.2} floatIntensity={0.42} rotationIntensity={0.12}>
        <NeuralCore />
      </Float>
      <Particles />
    </Canvas>
  );
}

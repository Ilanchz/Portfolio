import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function AnimatedBlob() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.5;
    meshRef.current.scale.set(
      1 + Math.sin(time) * 0.3,
      1 + Math.sin(time) * 0.3,
      1 + Math.sin(time) * 0.3
    );
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 3]} />
      <meshStandardMaterial color="#ff69b4" />
    </mesh>
  );
}

const ThreeAnimation = () => {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
      camera={{ position: [2, 2, 2], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedBlob />
    </Canvas>
  );
};

export default ThreeAnimation;

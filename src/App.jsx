import "./css/App.css";
import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Foo } from "./components/Foo";

const Scene = () => {
  return (
    <>
      <Foo />
      <ambientLight />
      <OrbitControls makeDefault />
    </>
  );
};

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Scene />
    </Canvas>
  );
}

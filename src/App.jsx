import "./App.css";
import { useRef, useEffect } from "react";
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

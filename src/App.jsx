import "./App.css";
import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { FooShader } from "./components/FooShader";

const Scene = () => {
  const camRef = useRef();
  return (
    <>
      <FooShader />
      <ambientLight />
      <CameraControls ref={camRef} makeDefault />
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

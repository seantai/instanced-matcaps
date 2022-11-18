import "./css/App.css";
import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  RoundedBox,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { Foo } from "./components/Foo";

const Scene = () => {
  return (
    <>
      <RoundedBox>
        <MeshWobbleMaterial wireframe color={"#ddfcd8"} />
      </RoundedBox>
      <Foo />
      <ambientLight />
      <OrbitControls />
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

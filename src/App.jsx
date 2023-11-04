import { Canvas } from "@react-three/fiber";
import { Mesh } from "./components/Mesh";
import { Kamera } from "./components/Kamera";

const Scene = () => {
  return (
    <>
      <Mesh />
      <Kamera />
      <ambientLight intensity={0.6} />
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

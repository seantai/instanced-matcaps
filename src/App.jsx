import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { FooShader } from "./components/FooShader";

const Scene = () => {
  return (
    <>
      <FooShader />
      <ambientLight intensity={0.6} />
      <CameraControls makeDefault />
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

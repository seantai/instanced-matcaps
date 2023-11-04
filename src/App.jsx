import { Canvas } from "@react-three/fiber";
import { Bvh } from "@react-three/drei";
import { InstancedMesh } from "./components/InstancedMesh";
import { Kamera } from "./components/Kamera";
import { Perf } from "r3f-perf";

const Scene = () => {
  return (
    <>
      <InstancedMesh />
      <Kamera />
      {/* <ambientLight intensity={0.6} /> */}
    </>
  );
};

export default function App() {
  return (
    <Canvas camera={{ position: [20, -20, 30] }}>
      <Bvh firstHitOnly>
        <Scene />
      </Bvh>
      {/* <Perf /> */}
    </Canvas>
  );
}

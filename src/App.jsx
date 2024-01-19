import { Canvas } from '@react-three/fiber'
import { Bvh, Environment, useGLTF, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { Kamera } from './components/Kamera'
import { Overlay } from './components/Overlay'
// import { Perf } from 'r3f-perf'

const Scene = () => {
  const Suz = useGLTF('./Suz_Quad.glb')
  const matcapTexture = useTexture('161B1F_C7E0EC_90A5B3_7B8C9B.png')
  return (
    <>
      <mesh geometry={Suz.nodes.Suz_Quad.geometry}>
        <meshMatcapMaterial matcap={matcapTexture} />
      </mesh>

      <Kamera />

      {/* <Environment files={'neutral.hdr'} /> */}
    </>
  )
}

export default function App() {
  const parent = useRef()

  return (
    <div className="w-full h-full relative cursor-pointer" ref={parent}>
      <Overlay />
      <Canvas shadows camera={{ position: [0, 2, 3] }} eventSource={parent.current}>
        <Bvh firstHitOnly>
          <Scene />
        </Bvh>
        {/* <Perf /> */}
      </Canvas>
    </div>
  )
}

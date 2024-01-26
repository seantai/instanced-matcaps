import { Bvh, Instance, Instances, useGLTF, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Vector2 } from 'three'
import { Kamera } from './components/Kamera'
import { Overlay } from './components/Overlay'
import frag from './glsl/matcap.frag'
import vert from './glsl/matcap.vert'
// import { Perf } from 'r3f-perf'

const Scene = () => {
  const Suz = useGLTF('./Suz_Quad.glb')
  const matcapTexture = useTexture('metal.jpeg')
  const matcapTexture2 = useTexture('4.png')

  const instancesRef = useRef()
  const suzRef = useRef()

  const count = 100
  const halfCount = Math.sqrt(count) / 2
  const distance = 0.31

  const positionData = useMemo(() => {
    const positions = []
    for (let i = 0; i < count; i++) {
      const row = Math.floor(i / Math.sqrt(count)) - halfCount
      const col = (i % Math.sqrt(count)) - halfCount
      positions.push({
        position: [(col + 1) * distance, 0, (row + 1) * distance]
      })
    }

    return positions
  }, [])

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0
      },
      u_texture: {
        value: matcapTexture
      },
      u_texture2: {
        value: matcapTexture2
      },
      u_pointer: {
        value: new Vector2(0.5, 0.5)
      }
    }),
    []
  )

  const mousePosition = new Vector2()
  useFrame(({ clock, pointer }) => {
    if (instancesRef.current.material.uniforms) {
      instancesRef.current.material.uniforms.u_time.value = clock.elapsedTime
      instancesRef.current.material.uniforms.u_pointer.value = mousePosition.set(pointer.x, pointer.y)
    }
    if (suzRef.current) {
      suzRef.current.rotation.y += 0.002
    }
  })

  return (
    <>
      <Instances ref={instancesRef} geometry={Suz.nodes.Suz_Quad.geometry}>
        <shaderMaterial vertexShader={vert} fragmentShader={frag} uniforms={uniforms} />
        {positionData.map((props, i) => (
          <InstanceThing key={i} {...props} />
        ))}
      </Instances>

      <mesh ref={suzRef} geometry={Suz.nodes.Suz_Quad.geometry}>
        <meshMatcapMaterial matcap={matcapTexture2} />
      </mesh>

      <Kamera />
    </>
  )
}

const InstanceThing = (props) => {
  const ref = useRef()
  return <Instance ref={ref} {...props} scale={0.2} />
}

export default function App() {
  const parent = useRef()

  return (
    <div className="w-full h-full relative cursor-pointer" ref={parent}>
      <Overlay />
      <Canvas shadows eventSource={parent.current}>
        <Bvh firstHitOnly>
          <Scene />
        </Bvh>
        {/* <Perf /> */}
      </Canvas>
    </div>
  )
}

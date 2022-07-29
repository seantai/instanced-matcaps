import './css/App.css'
import { useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, RoundedBox, MeshWobbleMaterial } from '@react-three/drei'

export default function App() {

  return (
    <Canvas camera={{position: [0,0,2]}}>
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

const Scene = () => {

  return (
    <>
    <RoundedBox>
      <MeshWobbleMaterial wireframe color={'hotpink'}/>
    </RoundedBox>
    <ambientLight />
    </>
  )
}

import { useEffect, useRef } from 'react'
import { CameraControls } from '@react-three/drei'
import { store } from '../store'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

export const Kamera = () => {
  const camRef = useRef()

  useEffect(() => {
    store.loaded = true
  }, [])

  const targetPosition = new Vector3()
  useFrame(({ pointer }) => {
    if (camRef.current) {
      targetPosition.set(-Math.sin(pointer.x), -Math.atan(pointer.y), 4)
      camRef.current.setPosition(targetPosition.x, targetPosition.y, targetPosition.z, true)
    }
  })

  return <CameraControls ref={camRef} makeDefault />
}

import { useEffect, useRef } from 'react'
import { CameraControls, OrthographicCamera } from '@react-three/drei'
import { store } from '../store'

export const Kamera = () => {
  const camRef = useRef()

  useEffect(() => {
    store.loaded = true
  }, [])

  return (
    <>
      <OrthographicCamera position={[7.498, 2.3958, 3.610042]} zoom={200} near={0.0001} far={1000} makeDefault />
      <CameraControls ref={camRef} makeDefault />
    </>
  )
}

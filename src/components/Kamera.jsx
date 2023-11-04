import { useEffect, useRef } from "react";
import { CameraControls } from "@react-three/drei";
import { store } from "../store";

export const Kamera = () => {
  const camRef = useRef();

  useEffect(() => {
    store.loaded = true;

    const handleKeyDown = (event) => {
      if (event.key === "k") {
        console.log(event);
        console.log(camRef.current.camera.position);
        console.log(camRef.current.azimuthAngle);
        console.log(camRef.current.polarAngle);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <CameraControls
      ref={camRef}
      makeDefault
      // polarAngle={1.9412172877096}
      // azimuthAngle={-0.4080060034431936}
      // mouseButtons={{ left: 0, middle: 0, right: 0, wheel: 0 }}
      // touches={{ one: 0, two: 0, three: 0 }}
      // minAzimuthAngle={-0.2}
      // maxAzimuthAngle={0.2}
      // minPolarAngle={1}
      // maxPolarAngle={1.3}
      // smoothTime={0.7}
    />
  );
};

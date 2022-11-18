import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import fooVert from "../glsl/foo.vert";
import fooFrag from "../glsl/foo.frag";

export const Foo = () => {
  const geometryRef = useRef();
  const fooTexture = useTexture("./img/favicon.ico");

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0,
      },
      u_texture: {
        value: fooTexture,
      },
    }),
    []
  );

  useFrame(({ clock }) => {
    if (geometryRef.current) {
      geometryRef.current.material.uniforms.u_time.value =
        clock.getElapsedTime();
    }
  });

  return (
    <>
      <mesh ref={geometryRef} scale={0.6}>
        <torusKnotGeometry />
        <shaderMaterial
          vertexShader={fooVert}
          fragmentShader={fooFrag}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};

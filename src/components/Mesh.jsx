import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import vert from "../glsl/foo.vert";
import frag from "../glsl/foo.frag";

export const Mesh = () => {
  const geometryRef = useRef();
  const fooTexture = useTexture("./favicon.ico");

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

  const { controls } = useThree();
  useEffect(() => {
    if (controls) {
      controls.fitToBox(geometryRef.current, true, {
        paddingLeft: 1,
        paddingRight: 1,
        paddingTop: 1,
        paddingBottom: 1,
      });
    }
  }, []);

  useFrame(({ clock }) => {
    if (geometryRef.current.material.uniforms) {
      geometryRef.current.material.uniforms.u_time.value = clock.elapsedTime;
    }
  });

  return (
    <>
      <mesh ref={geometryRef} scale={0.6}>
        <planeGeometry />
        <shaderMaterial
          vertexShader={vert}
          fragmentShader={frag}
          uniforms={uniforms}
          wireframe
        />
      </mesh>
    </>
  );
};

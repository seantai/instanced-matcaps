import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useTexture, Instances, Instance } from "@react-three/drei";
import vert from "../glsl/foo.vert";
import frag from "../glsl/foo.frag";
import CustomShaderMaterial from "three-custom-shader-material";
import { MeshMatcapMaterial } from "three";

export const InstancedMesh = () => {
  const groupRef = useRef();

  //opening camera movement
  const { controls } = useThree();
  useEffect(() => {
    if (controls) {
      const padding = 0;
      controls.fitToBox(groupRef.current, true, {
        paddingLeft: padding,
        paddingRight: padding,
        paddingTop: padding,
        paddingBottom: padding,
      });
      controls.dolly(0, true);
    }
  }, [controls]);

  return (
    <group ref={groupRef}>
      <Meshes />
    </group>
  );
};

function Meshes() {
  const instancesRef = useRef();
  const materialRef = useRef();
  const Suz = useGLTF("Suz_Quad.glb");
  const fooTexture = useTexture("./161B1F_C7E0EC_90A5B3_7B8C9B.png");

  const data = instanceData(14);

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
    if (materialRef.current.uniforms) {
      materialRef.current.uniforms.u_time.value = clock.elapsedTime;
    }
  });

  return (
    <Instances ref={instancesRef} geometry={Suz.nodes.Suz_Quad.geometry}>
      <CustomShaderMaterial
        ref={materialRef}
        baseMaterial={MeshMatcapMaterial}
        vertexShader={vert}
        fragmentShader={frag}
        uniforms={uniforms}
        silent
        defines={{
          USE_INSTANCING_PLZ: 1,
        }}
        // flatShading
        // color={0xff00ff}
        matcap={fooTexture}
      />
      <group position={[0, 0, 0]}>
        {data.map((props, i) => (
          <Mesh key={i} {...props} />
        ))}
      </group>
    </Instances>
  );
}

function Mesh({ random, ...props }) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);

  return (
    <group {...props}>
      <Instance
        ref={ref}
        onPointerEnter={(e) => (e.stopPropagation(), setHover(true))}
        onPointerLeave={(e) => setHover(false)}
      />
    </group>
  );
}

const instanceData = (length = 100) =>
  Array.from({ length }, (r = 10) => ({
    random: Math.random(),
    position: randomVector(r),
    rotation: randomEuler(),
  }));

const randomVector = (r) => [
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
];
const randomEuler = () => [
  Math.random() * Math.PI,
  Math.random() * Math.PI,
  Math.random() * Math.PI,
];

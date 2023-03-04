varying vec2 v_uv;
uniform float u_time;

// #include snoise.glsl

void main() {
  v_uv = uv;

  // float noise = snoise(vec3(position.xyz));

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(modelPosition.y * 6.0 + u_time * 2.0) * 0.1;

  vec4 viewPosition = viewMatrix * modelPosition;

  gl_Position = projectionMatrix * viewPosition;
}
uniform float u_time;
varying vec2 vUv;

void main() {
  vUv = uv;

  vec4 newPosition = vec4(position.x, position.y, position.z, 1.0);

  gl_Position = projectionMatrix * modelViewMatrix * newPosition;
}
uniform float u_time;
varying vec2 v_uv;

void main() {
  v_uv = uv;

  vec4 newPosition = vec4(position.x, position.y, position.z, 1.0);

  gl_Position = projectionMatrix * modelViewMatrix * newPosition;
}
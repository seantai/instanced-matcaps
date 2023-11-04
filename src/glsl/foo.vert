

varying vec2 v_uv;
uniform float u_time;

void main() {
  v_uv = uv;

  vec3 newPosition = position;
  newPosition.y += sin(newPosition.y * 2.0 + u_time * 6.0) * 0.1;

#if USE_INSTANCING_PLZ == 1
  csm_PositionRaw = projectionMatrix * modelViewMatrix * instanceMatrix *
                    vec4(newPosition, 1.0);
#else
  csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
#endif
}
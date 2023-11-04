varying vec2 v_uv;
uniform sampler2D u_texture;
uniform float u_time;

// #include snoise.glsl

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {

  // vec4 final = vec4(.75, sin(u_time / 5.), sin(u_time / 10.), 1.0);
  // final = texture2D(u_texture, v_uv + sin(u_time));

  vec3 hsv = vec3(u_time * .01 / .2, .2, 1.0);
  vec4 final = vec4(hsv2rgb(hsv), 1.0);

  csm_DiffuseColor = final;
}

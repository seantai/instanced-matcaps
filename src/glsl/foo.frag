varying vec2 vUv;
uniform sampler2D u_texture;
uniform float u_time;

void main() {

  vec4 final = vec4(.75, sin(u_time / 5.), sin(u_time / 10.), 1.0);
  // vec4 final = texture2D(u_texture, vUv + sin(u_time));
  gl_FragColor = final;
}

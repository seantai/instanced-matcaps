varying vec2 v_uv;
uniform sampler2D u_texture;
uniform float u_time;

// #include snoise.glsl

void main() {

  vec4 final = vec4(.75, sin(u_time / 5.), sin(u_time / 10.), 1.0);
  // final = texture2D(u_texture, v_uv + sin(u_time));

  gl_FragColor = final;
}

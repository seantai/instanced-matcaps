varying vec3 vViewPosition;

#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <normal_pars_vertex>
#include <skinning_pars_vertex>
#include <uv_pars_vertex>

#include <clipping_planes_pars_vertex>
#include <logdepthbuf_pars_vertex>

uniform float u_time;
varying vec2 v_uv;
uniform float u_clickFloat;
varying vec4 v_instancePosition;

// Vertex Head
mat4 rotationMatrix(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;

  return mat4(
      oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,
      oc * axis.z * axis.x + axis.y * s, 0.0, oc * axis.x * axis.y + axis.z * s,
      oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0,
      oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s,
      oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

void main() {

#include <beginnormal_vertex>
#include <color_vertex>
#include <defaultnormal_vertex>
#include <morphcolor_vertex>
#include <morphnormal_vertex>
#include <normal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>
#include <uv_vertex>

#include <begin_vertex>
#include <displacementmap_vertex>
#include <morphtarget_vertex>
#include <project_vertex>
#include <skinning_vertex>

#include <clipping_planes_vertex>
#include <fog_vertex>
#include <logdepthbuf_vertex>

  v_uv = uv;

  vec3 newPosition = position;

  v_instancePosition = instanceMatrix[3];
  float toCenter = length(v_instancePosition.xz);
  newPosition.y += sin(u_time * 3. + toCenter) * 5.3;

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix *
                vec4(newPosition, 1.0);

  vViewPosition = -mvPosition.xyz;
}
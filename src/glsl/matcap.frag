uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D u_texture;
uniform sampler2D u_texture2;
uniform vec2 u_pointer;
uniform float u_time;

varying vec3 vViewPosition;
varying vec4 v_instancePosition;

#include <alphahash_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <bumpmap_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <map_pars_fragment>
#include <normal_pars_fragment>
#include <normalmap_pars_fragment>
#include <uv_pars_fragment>

void main() {

#include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(diffuse, opacity);

#include <alphahash_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <color_fragment>
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>

  vec3 viewDir = normalize(vViewPosition);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uv = vec2(dot(x, normal), dot(y, normal)) * 0.495 +
            0.5; // 0.495 to remove artifacts caused by undersized matcap disks

  vec4 matcap1 = texture2D(u_texture, uv);
  vec4 matcap2 = texture2D(u_texture2, uv);

  float toCenter = length(v_instancePosition.xz);

  vec3 matcapMix =
      mix(matcap1.rgb, matcap2.rgb, sin(u_time * 3. + toCenter) * 1.3);
  vec3 outgoingLight = matcapMix;

  // vec4 matcapColor = vec4(vec3(mix(0.2, 0.8, uv.y)), 1.0);
  // none/debug color

  // vec3 matcapMix = mix(matcap1.rgb, matcap2.rgb, u_pointer.x);

#include <colorspace_fragment>
#include <dithering_fragment>
#include <fog_fragment>
#include <opaque_fragment>
#include <premultiplied_alpha_fragment>
#include <tonemapping_fragment>
}
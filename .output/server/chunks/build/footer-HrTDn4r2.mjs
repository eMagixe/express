import { A as __nuxt_component_0$1, _ as _sfc_main$m } from './index-B8D1reGi.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'reka-ui';
import '@vueuse/core';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'tailwind-variants';
import './index-B6dJa6dm.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './nuxt-link-Cto9_xmT.mjs';
import 'vaul-vue';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Logo = __nuxt_component_0$1;
  const _component_UIcon = _sfc_main$m;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full justify-end gap-5 sm:gap-2 border-t border-gray-800 pt-10" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Logo, { class: "h-14" }, null, _parent));
  _push(`<div class="flex flex-col sm:flex-row justify-center text-center p-5 gap-5 sm:gap-10 text-[#FFCC00] text-[24px] italic"><a href="tel:+7 (917) 766-68-33">`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-lucide-phone",
    size: "18"
  }, null, _parent));
  _push(` +7 (917) 766-68-33 </a><a href="tel:+7 (927) 324-25-82">`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-lucide-phone",
    size: "18"
  }, null, _parent));
  _push(` +7 (927) 324-25-82 </a></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const footer = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "SectionFooter" });

export { footer as default };
//# sourceMappingURL=footer-HrTDn4r2.mjs.map

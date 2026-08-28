import { _ as __nuxt_component_0 } from './default-CrS-YPvV.mjs';
import { _ as _sfc_main$5 } from './Button-Toj_U7zK.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './overlay-BCCTZtnC.mjs';
import '@vueuse/core';
import '@vueuse/shared';
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
import 'aria-hidden';
import './useForwardExpose-C3mVDiKg.mjs';
import './Slideover-xxPWHkR-.mjs';
import './Modal-CbdYAkBJ.mjs';
import './useLocale-6Q3JfOdH.mjs';
import './Collection-DRiHPSsz.mjs';
import './useToast-YcMWm34g.mjs';
import './state-tqLlnwND.mjs';
import './nuxt-link-DDci5Ary.mjs';
import './useCall-bD_P2z8n.mjs';
import './Container-CV6NPFlX.mjs';
import './Drawer-BsofU-Mm.mjs';
import 'vaul-vue';
import 'tailwind-variants';
import './index-qAEP9vXy.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-BhQrY2j7.mjs';
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Logo = __nuxt_component_0;
  const _component_UIcon = _sfc_main$5;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full justify-end items-center gap-5 sm:gap-2 pt-5" }, _attrs))}><div class="h-14">`);
  _push(ssrRenderComponent(_component_Logo, null, null, _parent));
  _push(`</div><div class="flex flex-col sm:flex-row justify-center text-center p-5 gap-5 sm:gap-10 text-[#FFCC00] text-[24px] italic"><a>`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-lucide-phone",
    size: "18"
  }, null, _parent));
  _push(` +7 (917) 766-68-33 </a><a>`);
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

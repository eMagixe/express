import { m as __nuxt_component_0, a as _sfc_main$k } from './index-BVRgHjmO.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './server.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'tailwind-variants';
import './index-DDDZ6YAJ.mjs';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import './nuxt-link-AZZXNs-c.mjs';
import 'vaul-vue';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = __nuxt_component_0;
      const _component_UIcon = _sfc_main$k;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full justify-end items-center gap-5 sm:gap-2 pt-5" }, _attrs))}><div class="h-14">`);
      _push(ssrRenderComponent(_component_Logo, null, null, _parent));
      _push(`</div><div class="flex flex-col sm:flex-row justify-center text-center p-5 gap-5 sm:gap-10 text-[#FFCC00] text-[24px] italic"><a href="tel:+7 (917) 766-68-33">`);
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const footer = Object.assign(_sfc_main, { __name: "SectionFooter" });

export { footer as default };

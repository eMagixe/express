import { _ as __nuxt_component_0 } from './default-C38cQB7W.mjs';
import { _ as _sfc_main$5 } from './Button-D7hwtKF6.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import './overlay-BG1xKR7v.mjs';
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
import './Slideover-BrwUM_ju.mjs';
import './Modal-BGQEWp84.mjs';
import './useLocale-CasdCEot.mjs';
import './server.mjs';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './Collection-Bx5WsODp.mjs';
import './useToast-CZLK1bG2.mjs';
import './state-DVSaO_PC.mjs';
import './Container-BxaGJmMa.mjs';
import './Drawer-CBvvA4dC.mjs';
import 'vaul-vue';
import './nuxt-link-BVaogQjF.mjs';
import './index-CzlXzl75.mjs';
import 'unhead/scripts';
import 'tailwind-variants';
import './index-ByCR7jEh.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData-CR0bxPSR.mjs';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = __nuxt_component_0;
      const _component_UIcon = _sfc_main$5;
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
      _push(` +7 (927) 324-25-82 </a><noscript><div><img src="https://mc.yandex.ru/watch/111529680" style="${ssrRenderStyle({ "position": "absolute", "left": "-9999px" })}" alt=""></div></noscript></div></footer>`);
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

import { _ as _sfc_main$6 } from './Button-DmhYxLTA.mjs';
import { _ as __nuxt_component_1 } from './create-DVUkWmkE.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'reka-ui';
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
import '@vueuse/core';
import 'tailwind-variants';
import './index-DMLNqBde.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './nuxt-link-9VTXGL_C.mjs';
import './title-Bvxv237P.mjs';
import './ssr-C3_WFKx-.mjs';
import './useLocale-CqZyE3a8.mjs';
import './useToast-yEiYMbdp.mjs';
import 'reka-ui/namespaced';
import 'reka-ui/date';
import '@internationalized/date';
import 'maska/vue';
import 'valibot';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UContainer = _sfc_main$6;
  const _component_OrderCreate = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-order w-full mx-auto h-auto py-5 border-b border-b-[#0A0B08]" }, _attrs))} data-v-0bf01efe>`);
  _push(ssrRenderComponent(_component_UContainer, { class: "flex animation-box flex-col justify-center items-center gap-5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_OrderCreate, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_OrderCreate)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const order = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0bf01efe"]]), { __name: "SectionOrder" });

export { order as default };

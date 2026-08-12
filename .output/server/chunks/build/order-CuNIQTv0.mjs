import { _ as _sfc_main$1 } from './Container-BzK8dUVM.mjs';
import { _ as __nuxt_component_1 } from './create-bev4se9t.mjs';
import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, j as useRuntimeConfig } from './server.mjs';
import './Button-JdAC5Wqn.mjs';
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
import './index-zQtgCi6v.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-r7HxebEa.mjs';
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './nuxt-link-CJMHb7no.mjs';
import './title-Bvxv237P.mjs';
import './FormField-C-I7VvmP.mjs';
import './useForwardExpose-C3mVDiKg.mjs';
import './Input-eAMQh3dc.mjs';
import './useFilter-BYxl4qgK.mjs';
import './overlay-BwRuhiSQ.mjs';
import '@vueuse/shared';
import 'aria-hidden';
import './Collection-OEE7jl8h.mjs';
import '@floating-ui/vue';
import '@tanstack/vue-virtual';
import '@internationalized/date';
import './useLocale-DsziUxw1.mjs';
import './Popover-HO7ny3HD.mjs';
import './fetch-72WZObjK.mjs';
import '@vue/shared';
import './useCall-rzpVgkt6.mjs';
import './state-DVSaO_PC.mjs';
import 'maska/vue';
import 'valibot';
import './useToast-CZLK1bG2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "order",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_OrderCreate = __nuxt_component_1;
      if (unref(config).public.orderVisible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-order w-full mx-auto h-auto py-5 border-b border-b-[#0A0B08]" }, _attrs))} data-v-0ab721c1>`);
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
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const order = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-0ab721c1"]]), { __name: "SectionOrder" });

export { order as default };

import { h as _sfc_main$b, f as useToast } from './index-dROiNWu7.mjs';
import { a as __nuxt_component_0$1 } from './index-Cxpc46zU.mjs';
import { mergeProps, withCtx, createVNode, defineComponent, ref, reactive, shallowRef, computed, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { DateFormatter, Time, CalendarDate } from '@internationalized/date';
import * as v from 'valibot';
import { minLength } from 'valibot';
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
import './nuxt-link-Ck9lQj5E.mjs';
import 'vaul-vue';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    new DateFormatter("ru-RU", {
      dateStyle: "medium"
    });
    ref(false);
    const [day, month, year] = new Date(Date.now()).toLocaleDateString("ru-RU").split(".");
    const defaultTime = new Time(16, 30, 0);
    const currentDate = new CalendarDate(Number(year), Number(month), Number(day));
    useToast();
    const data = reactive({
      name: "",
      phone: "",
      from: "Кумертау",
      from_address: "",
      to: "Уфа",
      to_address: "",
      date: shallowRef(currentDate),
      time: shallowRef(defaultTime)
    });
    ref(false);
    v.object({
      name: v.pipe(v.string(), v.nonEmpty("Обязательное поле для заполнения")),
      phone: v.pipe(
        v.string(),
        v.nonEmpty("Обязательное поле для заполнения"),
        minLength(18, "Неверный формат номера телефона")
      ),
      to: v.pipe(v.string(), v.nonEmpty("Обязательное поле для заполнения")),
      from: v.pipe(v.string(), v.nonEmpty("Обязательное поле для заполнения")),
      to_address: v.pipe(v.string(), v.nonEmpty("Обязательное поле для заполнения")),
      from_address: v.pipe(v.string(), v.nonEmpty("Обязательное поле для заполнения")),
      date: v.pipe(v.any(), v.nonEmpty("Обязательное поле для заполнения")),
      time: v.pipe(v.any(), v.nonEmpty("Обязательное поле для заполнения"))
    });
    const cities = ref(["Кумертау", "Мелеуз", "Салават", "Уфа"]);
    computed(() => {
      return cities.value;
    });
    watch(
      () => data.from,
      (value) => {
        if (value === "Уфа") data.to = "";
      }
    );
    computed(() => {
      if (data.from === "Уфа") {
        return cities.value.filter((i) => i !== "Уфа");
      } else {
        return cities.value.filter((i) => i === "Уфа");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/order/create.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "OrderCreate" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UContainer = _sfc_main$b;
  const _component_OrderCreate = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-order w-full mx-auto h-auto py-5 border-b border-b-[#0A0B08]" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col justify-center items-center gap-5" }, {
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
const order = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "SectionOrder" });

export { order as default };
//# sourceMappingURL=order-BlcyvUjM.mjs.map

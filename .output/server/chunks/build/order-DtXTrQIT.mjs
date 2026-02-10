import { h as $e, f as Ka } from './index-CdhGuka8.mjs';
import { a as he } from './index-NPZ-ilWx.mjs';
import { mergeProps, withCtx, createVNode, defineComponent, ref, reactive, shallowRef, computed, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { DateFormatter, Time, CalendarDate } from '@internationalized/date';
import * as e from 'valibot';
import { minLength } from 'valibot';
import { _ as fo } from './server.mjs';
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
import './nuxt-link-xfm6sc6S.mjs';
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

const u = defineComponent({ __name: "create", __ssrInlineRender: true, setup(s) {
  new DateFormatter("ru-RU", { dateStyle: "medium" }), ref(false);
  const [t, o, p] = new Date(Date.now()).toLocaleDateString("ru-RU").split("."), a = new Time(16, 30, 0), m = new CalendarDate(Number(p), Number(o), Number(t));
  Ka();
  const i = reactive({ name: "", phone: "", from: "\u041A\u0443\u043C\u0435\u0440\u0442\u0430\u0443", from_address: "", to: "\u0423\u0444\u0430", to_address: "", date: shallowRef(m), time: shallowRef(a) });
  ref(false), e.object({ name: e.pipe(e.string(), e.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")), phone: e.pipe(e.string(), e.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"), minLength(18, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430")), to: e.pipe(e.string(), e.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")), from: e.pipe(e.string(), e.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")), to_address: e.pipe(e.string(), e.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")), from_address: e.pipe(e.string(), e.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")), date: e.pipe(e.any(), e.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")), time: e.pipe(e.any(), e.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")) });
  const n = ref(["\u041A\u0443\u043C\u0435\u0440\u0442\u0430\u0443", "\u041C\u0435\u043B\u0435\u0443\u0437", "\u0421\u0430\u043B\u0430\u0432\u0430\u0442", "\u0423\u0444\u0430"]);
  return computed(() => n.value), watch(() => i.from, (r) => {
    r === "\u0423\u0444\u0430" && (i.to = "");
  }), computed(() => i.from === "\u0423\u0444\u0430" ? n.value.filter((r) => r !== "\u0423\u0444\u0430") : n.value.filter((r) => r === "\u0423\u0444\u0430")), (r, c, w, b) => {
    c(ssrRenderComponent(he, b, {}, w));
  };
} }), x = u.setup;
u.setup = (s, t) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("components/order/create.vue"), x ? x(s, t) : void 0;
};
const F = Object.assign(u, { __name: "OrderCreate" }), f = {};
function I(s, t, o, p) {
  const a = $e, m = F;
  t(`<div${ssrRenderAttrs(mergeProps({ class: "section-order w-full mx-auto h-auto py-5 border-b border-b-[#0A0B08]" }, p))}>`), t(ssrRenderComponent(a, { class: "flex flex-col justify-center items-center gap-5" }, { default: withCtx((i, n, r, c) => {
    if (n) n(ssrRenderComponent(m, null, null, r, c));
    else return [createVNode(m)];
  }), _: 1 }, o)), t("</div>");
}
const g = f.setup;
f.setup = (s, t) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("components/section/order.vue"), g ? g(s, t) : void 0;
};
const fe = Object.assign(fo(f, [["ssrRender", I]]), { __name: "SectionOrder" });

export { fe as default };
//# sourceMappingURL=order-DtXTrQIT.mjs.map

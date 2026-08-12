import { _ as _sfc_main$2 } from './Container-BzK8dUVM.mjs';
import { _ as _sfc_main$3 } from './PricingPlan-D5CDjAH8.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CJMHb7no.mjs';
import { _ as _sfc_main$5 } from './Button-JdAC5Wqn.mjs';
import { u as useCall } from './useCall-xmN9FDcq.mjs';
import { defineComponent, defineAsyncComponent, ref, withAsyncContext, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { u as useLazyFetch } from './fetch-72WZObjK.mjs';
import { a as useSeoMeta, _ as _export_sfc } from './server.mjs';
import '@vueuse/core';
import './Badge-CGZaOljf.mjs';
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
import './index-zQtgCi6v.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-r7HxebEa.mjs';
import 'perfect-debounce';
import './state-DVSaO_PC.mjs';
import '@vue/shared';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "welcome",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const directions = ref([]);
    [__temp, __restore] = withAsyncContext(() => useLazyFetch(
      "/api/direction/all",
      {
        key: "directions",
        method: "GET"
      },
      "$3M2AynSjUx"
      /* nuxt-injected */
    ).then(({ data }) => {
      if (data.value) {
        directions.value = data.value;
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$2;
      const _component_UPricingPlan = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UIcon = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "welcome-section w-full mx-auto mb-10" }, _attrs))} data-v-245fdc2a>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "h-[calc(100vh-100px)] min-h-160 flex flex-col justify-start gap-5 pt-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cities-list w-full flex flex-row justify-center items-center gap-10" data-v-245fdc2a${_scopeId}><!--[-->`);
            ssrRenderList(unref(directions), (direction) => {
              _push2(ssrRenderComponent(_component_UPricingPlan, {
                class: "not-sm:not-last:hidden not-lg:first:hidden p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80",
                title: direction.name,
                description: "Пассажирские перевозки",
                price: `от ${direction.price} руб.`,
                features: [
                  "Передача документации и посылок",
                  "До аэро - жд вокзалов и больниц",
                  "До места указанного заказчиком *",
                  "Билеты, отчётные документы, qr-коды"
                ],
                ui: {
                  root: "ring-0 item-direction",
                  title: "text-primary title",
                  description: "text-white",
                  price: "text-primary",
                  featureTitle: "text-white",
                  button: "button-gradient"
                },
                button: {
                  label: "Перейти к заказу",
                  to: `/directions/${direction.slug}`,
                  trailingIcon: "i-lucide-arrow-right"
                }
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="flex flex-col md:flex-row justify-between items-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] mx-5" data-v-245fdc2a${_scopeId}><p class="text-sm text-white" data-v-245fdc2a${_scopeId}>* требуется дополнительная оплата</p>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "text-primary underline",
              to: "/directions"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Список основных направлений`);
                } else {
                  return [
                    createTextVNode("Список основных направлений")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><h2 class="font-medium text-[clamp(1.25rem,3vw,3rem)] text-white text-center lg:text-left w-full lg:w-[70%]" data-v-245fdc2a${_scopeId}> Круглосуточные перевозки </h2>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "lg:hidden button-gradient w-60 h-15 mx-auto my-5 flex items-center justify-center gap-3",
              icon: "i-lucide-phone-call",
              onClick: ($event) => ("useCall" in _ctx ? _ctx.useCall : unref(useCall))().sendCallToTelegram("+79177666833")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-phone-call",
                    size: "18"
                  }, null, _parent3, _scopeId2));
                  _push3(` Вызвать `);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "i-lucide-phone-call",
                      size: "18"
                    }),
                    createTextVNode(" Вызвать ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="not-sm:hidden text-[clamp(1rem,3vw,2rem)] border-t-3 border-t-primary/20 pt-10 text-white text-center lg:text-left w-full lg:w-[60%]" data-v-245fdc2a${_scopeId}> Быстро и с комфортом доставим вас в нужное место в любое время дня и ночи </div>`);
          } else {
            return [
              createVNode("div", { class: "cities-list w-full flex flex-row justify-center items-center gap-10" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(directions), (direction) => {
                  return openBlock(), createBlock(_component_UPricingPlan, {
                    class: "not-sm:not-last:hidden not-lg:first:hidden p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80",
                    title: direction.name,
                    description: "Пассажирские перевозки",
                    price: `от ${direction.price} руб.`,
                    features: [
                      "Передача документации и посылок",
                      "До аэро - жд вокзалов и больниц",
                      "До места указанного заказчиком *",
                      "Билеты, отчётные документы, qr-коды"
                    ],
                    ui: {
                      root: "ring-0 item-direction",
                      title: "text-primary title",
                      description: "text-white",
                      price: "text-primary",
                      featureTitle: "text-white",
                      button: "button-gradient"
                    },
                    button: {
                      label: "Перейти к заказу",
                      to: `/directions/${direction.slug}`,
                      trailingIcon: "i-lucide-arrow-right"
                    }
                  }, null, 8, ["title", "price", "button"]);
                }), 256))
              ]),
              createVNode("div", { class: "flex flex-col md:flex-row justify-between items-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] mx-5" }, [
                createVNode("p", { class: "text-sm text-white" }, "* требуется дополнительная оплата"),
                createVNode(_component_NuxtLink, {
                  class: "text-primary underline",
                  to: "/directions"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Список основных направлений")
                  ]),
                  _: 1
                })
              ]),
              createVNode("h2", { class: "font-medium text-[clamp(1.25rem,3vw,3rem)] text-white text-center lg:text-left w-full lg:w-[70%]" }, " Круглосуточные перевозки "),
              createVNode(_component_NuxtLink, {
                class: "lg:hidden button-gradient w-60 h-15 mx-auto my-5 flex items-center justify-center gap-3",
                icon: "i-lucide-phone-call",
                onClick: ($event) => ("useCall" in _ctx ? _ctx.useCall : unref(useCall))().sendCallToTelegram("+79177666833")
              }, {
                default: withCtx(() => [
                  createVNode(_component_UIcon, {
                    name: "i-lucide-phone-call",
                    size: "18"
                  }),
                  createTextVNode(" Вызвать ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode("div", { class: "not-sm:hidden text-[clamp(1rem,3vw,2rem)] border-t-3 border-t-primary/20 pt-10 text-white text-center lg:text-left w-full lg:w-[60%]" }, " Быстро и с комфортом доставим вас в нужное место в любое время дня и ночи ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/welcome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-245fdc2a"]]), { __name: "SectionWelcome" });
const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./advantages-DXZIVqQH.mjs').then((c) => c.default || c));
const __nuxt_component_2_lazy = defineAsyncComponent(() => import('./reviews-BcOEX6Xm.mjs').then((c) => c.default || c));
const __nuxt_component_3_lazy = defineAsyncComponent(() => import('./questions-BrOGWz5m.mjs').then((c) => c.default || c));
const __nuxt_component_4_lazy = defineAsyncComponent(() => import('./order-tq87YpzU.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Такси Экспресс | Межгороднее такси из Кумертау Уфа",
      description: "Такси Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
      ogTitle: "Такси Экспресс | Межгороднее такси из Кумертау Уфа",
      ogDescription: "Такси Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
      ogImage: "https://taxi-express.su/images/preview.png",
      ogUrl: "https://taxi-express.su/",
      ogType: "website",
      ogLocale: "ru_RU",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionWelcome = __nuxt_component_0;
      const _component_LazySectionAdvantages = __nuxt_component_1_lazy;
      const _component_LazySectionReviews = __nuxt_component_2_lazy;
      const _component_LazySectionQuestions = __nuxt_component_3_lazy;
      const _component_LazySectionOrder = __nuxt_component_4_lazy;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SectionWelcome, null, null, _parent));
      _push(ssrRenderComponent(_component_LazySectionAdvantages, null, null, _parent));
      _push(ssrRenderComponent(_component_LazySectionReviews, null, null, _parent));
      _push(ssrRenderComponent(_component_LazySectionQuestions, null, null, _parent));
      _push(ssrRenderComponent(_component_LazySectionOrder, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };

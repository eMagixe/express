import { _ as _sfc_main$6, a as _sfc_main$5 } from './Button-DmhYxLTA.mjs';
import { _ as _sfc_main$2 } from './PricingPlan-NHtO95_C.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-9VTXGL_C.mjs';
import { u as utils } from './index-CzlXzl75.mjs';
import { defineComponent, defineAsyncComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { a as useSeoMeta, _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UContainer = _sfc_main$6;
  const _component_UPricingPlan = _sfc_main$2;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_UIcon = _sfc_main$5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "welcome-section w-full mx-auto" }, _attrs))} data-v-6e6971f1>`);
  _push(ssrRenderComponent(_component_UContainer, { class: "h-[calc(100vh-100px)] min-h-160 flex flex-col justify-start gap-5 pt-10" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="cities-list w-full flex flex-row justify-center items-center gap-10" data-v-6e6971f1${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UPricingPlan, {
          class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80",
          title: "Кумертау - Уфа",
          description: "Пассажирские перевозки",
          price: "от 1300 руб.",
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
            to: "/directions/kumertau-ufa",
            trailingIcon: "i-lucide-arrow-right"
          }
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UPricingPlan, {
          class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] not-md:hidden min-w-80",
          title: "Мелеуз - Уфа",
          description: "Пассажирские перевозки",
          price: "от 1300 руб.",
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
            to: "/directions/meleuz-ufa",
            trailingIcon: "i-lucide-arrow-right"
          }
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UPricingPlan, {
          class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] not-lg:hidden min-w-80",
          title: "Салават - Уфа",
          description: "Пассажирские перевозки",
          price: "от 1200 руб.",
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
            to: "/directions/salavat-ufa",
            trailingIcon: "i-lucide-arrow-right"
          }
        }, null, _parent2, _scopeId));
        _push2(`</div><p class="text-sm text-center text-gray-400" data-v-6e6971f1${_scopeId}>* требуется дополнительная оплата</p><h2 class="font-medium text-[clamp(1.25rem,3vw,3rem)] text-white text-center lg:text-left w-full lg:w-[70%]" data-v-6e6971f1${_scopeId}> Круглосуточные перевозки </h2>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          class: "lg:hidden button-gradient w-60 h-15 mx-auto my-5 flex items-center justify-center gap-3",
          icon: "i-lucide-phone-call",
          to: "tel:+79177666833",
          onClick: ($event) => ("utils" in _ctx ? _ctx.utils : unref(utils)).sendCallToTelegram("+79177666833")
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
        _push2(`<div class="not-sm:hidden text-[clamp(1rem,3vw,2rem)] border-t-3 border-t-primary/20 pt-10 text-white text-center lg:text-left w-full lg:w-[60%]" data-v-6e6971f1${_scopeId}> Быстро и с комфортом доставим вас в нужное место в любое время дня и ночи </div>`);
      } else {
        return [
          createVNode("div", { class: "cities-list w-full flex flex-row justify-center items-center gap-10" }, [
            createVNode(_component_UPricingPlan, {
              class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80",
              title: "Кумертау - Уфа",
              description: "Пассажирские перевозки",
              price: "от 1300 руб.",
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
                to: "/directions/kumertau-ufa",
                trailingIcon: "i-lucide-arrow-right"
              }
            }),
            createVNode(_component_UPricingPlan, {
              class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] not-md:hidden min-w-80",
              title: "Мелеуз - Уфа",
              description: "Пассажирские перевозки",
              price: "от 1300 руб.",
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
                to: "/directions/meleuz-ufa",
                trailingIcon: "i-lucide-arrow-right"
              }
            }),
            createVNode(_component_UPricingPlan, {
              class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] not-lg:hidden min-w-80",
              title: "Салават - Уфа",
              description: "Пассажирские перевозки",
              price: "от 1200 руб.",
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
                to: "/directions/salavat-ufa",
                trailingIcon: "i-lucide-arrow-right"
              }
            })
          ]),
          createVNode("p", { class: "text-sm text-center text-gray-400" }, "* требуется дополнительная оплата"),
          createVNode("h2", { class: "font-medium text-[clamp(1.25rem,3vw,3rem)] text-white text-center lg:text-left w-full lg:w-[70%]" }, " Круглосуточные перевозки "),
          createVNode(_component_NuxtLink, {
            class: "lg:hidden button-gradient w-60 h-15 mx-auto my-5 flex items-center justify-center gap-3",
            icon: "i-lucide-phone-call",
            to: "tel:+79177666833",
            onClick: ($event) => ("utils" in _ctx ? _ctx.utils : unref(utils)).sendCallToTelegram("+79177666833")
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
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/welcome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6e6971f1"]]), { __name: "SectionWelcome" });
const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./advantages-e3uuwirl.mjs').then((c) => c.default || c));
const __nuxt_component_2_lazy = defineAsyncComponent(() => import('./reviews-CeMpbMsF.mjs').then((c) => c.default || c));
const __nuxt_component_3_lazy = defineAsyncComponent(() => import('./questions-LO4YZf1r.mjs').then((c) => c.default || c));
const __nuxt_component_4_lazy = defineAsyncComponent(() => import('./order-CytcQsco.mjs').then((c) => c.default || c));
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

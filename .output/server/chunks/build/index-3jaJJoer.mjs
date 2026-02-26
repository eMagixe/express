import { _ as _sfc_main$6 } from './Button-DmhYxLTA.mjs';
import { _ as _sfc_main$1 } from './Breadcrumb-BSxxwTnT.mjs';
import { _ as __nuxt_component_1 } from './title-Bvxv237P.mjs';
import { _ as _sfc_main$2 } from './PricingPlan-NHtO95_C.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useSeoMeta } from './server.mjs';
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
import './nuxt-link-9VTXGL_C.mjs';
import './useLocale-CqZyE3a8.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        label: "Главная",
        to: "/"
      },
      {
        label: "Все направления",
        to: "/directions"
      }
    ]);
    useSeoMeta({
      title: "Такси Экспресс | Все направления",
      description: "Страница всех доступных основных направлений нашего такси | Такси Express - быстро, комфортно и надежно",
      ogTitle: "Такси Экспресс | Все направления",
      ogDescription: "Страница всех доступных основных направлений нашего такси | Такси Express - быстро, комфортно и надежно",
      ogUrl: "https://taxi-express.su/directions",
      ogType: "website",
      ogLocale: "ru_RU",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$6;
      const _component_UBreadcrumb = _sfc_main$1;
      const _component_SectionTitle = __nuxt_component_1;
      const _component_UPricingPlan = _sfc_main$2;
      _push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "flex flex-col justify-start gap-5 pt-10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBreadcrumb, {
              items: unref(items),
              ui: {
                link: "text-white hover:text-primary",
                separatorIcon: "text-white"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SectionTitle, {
              class: "text-white",
              title: "Все направления"
            }, null, _parent2, _scopeId));
            _push2(`<div class="cities-list w-full flex flex-col justify-center items-center gap-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UPricingPlan, {
              orientation: "horizontal",
              class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px]",
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
              orientation: "horizontal",
              class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80",
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
              orientation: "horizontal",
              class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80",
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
            _push2(`</div><p class="text-sm text-gray-400 text-center mb-10"${_scopeId}>* требуется дополнительная оплата</p>`);
          } else {
            return [
              createVNode(_component_UBreadcrumb, {
                items: unref(items),
                ui: {
                  link: "text-white hover:text-primary",
                  separatorIcon: "text-white"
                }
              }, null, 8, ["items"]),
              createVNode(_component_SectionTitle, {
                class: "text-white",
                title: "Все направления"
              }),
              createVNode("div", { class: "cities-list w-full flex flex-col justify-center items-center gap-10" }, [
                createVNode(_component_UPricingPlan, {
                  orientation: "horizontal",
                  class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px]",
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
                  orientation: "horizontal",
                  class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80",
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
                  orientation: "horizontal",
                  class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] min-w-80",
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
              createVNode("p", { class: "text-sm text-gray-400 text-center mb-10" }, "* требуется дополнительная оплата")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/directions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };

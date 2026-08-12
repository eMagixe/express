import { _ as _sfc_main$1 } from './Container-BzK8dUVM.mjs';
import { _ as _sfc_main$2 } from './Breadcrumb-CbBCRzXd.mjs';
import { _ as __nuxt_component_1 } from './title-Bvxv237P.mjs';
import { _ as _sfc_main$3 } from './PricingPlan-D5CDjAH8.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { a as useSeoMeta } from './server.mjs';
import { u as useLazyFetch } from './fetch-72WZObjK.mjs';
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
import './nuxt-link-CJMHb7no.mjs';
import './useLocale-DsziUxw1.mjs';
import './Badge-CGZaOljf.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
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
    const directions = ref([]);
    [__temp, __restore] = withAsyncContext(() => useLazyFetch(
      "/api/direction/all",
      {
        key: "directions",
        method: "GET"
      },
      "$esz47X1v6r"
      /* nuxt-injected */
    ).then(({ data }) => {
      if (data.value) {
        directions.value = data.value;
      }
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_UBreadcrumb = _sfc_main$2;
      const _component_SectionTitle = __nuxt_component_1;
      const _component_UPricingPlan = _sfc_main$3;
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
            _push2(`<div class="cities-list w-full flex flex-col justify-center items-center gap-10"${_scopeId}><!--[-->`);
            ssrRenderList(unref(directions), (direction) => {
              _push2(ssrRenderComponent(_component_UPricingPlan, {
                orientation: "horizontal",
                class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px]",
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
            _push2(`<!--]--></div><p class="text-sm text-gray-400 text-center mb-10"${_scopeId}>* требуется дополнительная оплата</p>`);
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(directions), (direction) => {
                  return openBlock(), createBlock(_component_UPricingPlan, {
                    orientation: "horizontal",
                    class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px]",
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

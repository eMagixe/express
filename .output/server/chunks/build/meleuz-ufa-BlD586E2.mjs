import { _ as _sfc_main$1 } from './Container-BzK8dUVM.mjs';
import { _ as _sfc_main$2 } from './Breadcrumb-CbBCRzXd.mjs';
import { _ as _sfc_main$3 } from './PageSection-DW9bN-XW.mjs';
import { _ as __nuxt_component_1 } from './create-B2T2dRa0.mjs';
import { defineComponent, ref, withAsyncContext, computed, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './usePrefix-DPzF3aqW.mjs';
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
import './Popover-HO7ny3HD.mjs';
import './useCall-KyHsS88P.mjs';
import './state-DVSaO_PC.mjs';
import 'maska/vue';
import 'valibot';
import './useToast-CZLK1bG2.mjs';
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
  __name: "meleuz-ufa",
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
      },
      {
        label: "Мелеуз - Уфа"
      }
    ]);
    useSeoMeta({
      title: "Такси Экспресс | направление из Мелеуза в Уфу",
      description: "Такси Мелеуз - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
      ogTitle: "Такси Экспресс | направление из Мелеуза в Уфу",
      ogDescription: "Такси Мелеуз - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
      ogUrl: "https://taxi-express.su/directions/meleuz-ufa",
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
      "$xtM-skn5MI"
      /* nuxt-injected */
    ).then(({ data }) => {
      if (data.value) {
        directions.value = data.value;
      }
    })), await __temp, __restore();
    const direction = computed(() => {
      const [current] = directions.value.filter((direction2) => {
        return direction2.slug === "meleuz-ufa";
      });
      if (current) {
        current.features = [
          {
            title: "Расстояние",
            description: `${current.distance} км`,
            icon: "i-lucide-arrow-right-left"
          },
          {
            title: "Расчетное время в пути",
            description: current.time,
            icon: "i-lucide-clock"
          },
          {
            title: "Стоимость",
            description: `от ${current.price} руб *`,
            icon: "i-lucide-receipt-russian-ruble"
          }
        ];
        return current;
      } else return null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_UBreadcrumb = _sfc_main$2;
      const _component_UPageSection = _sfc_main$3;
      const _component_OrderCreate = __nuxt_component_1;
      if (unref(direction)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "directions-page" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_UContainer, { class: "pt-10" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UBreadcrumb, {
                items: unref(items),
                ui: {
                  link: "text-white hover:text-primary",
                  separatorIcon: "text-white"
                }
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UBreadcrumb, {
                  items: unref(items),
                  ui: {
                    link: "text-white hover:text-primary",
                    separatorIcon: "text-white"
                  }
                }, null, 8, ["items"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UPageSection, {
          title: unref(direction).name,
          description: unref(direction).description,
          orientation: "horizontal",
          features: unref(direction).features,
          ui: {
            title: "text-primary tracking-wider",
            description: "text-white",
            container: "py-10 sm:py-10 lg:py-10",
            wrapper: "text-white flex flex-col justify-start items-start gap-5 h-full w-full",
            links: "w-full flex flex-col justify-center items-center gap-5",
            footer: "w-full",
            features: "text-white"
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1205311.4411714158!2d54.57891870466356!3d53.8406600240511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x417d6a1a2a059d89%3A0xae2a0a2ef51f97ef!2z0JzQtdC70LXRg9C3LCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d52.9610676!2d55.9282142!4m5!1s0x43d93a259216bce1%3A0xaceec0921eda92cc!2z0KPRhNCwLCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d54.734790999999994!2d55.9578555!5e0!3m2!1sru!2sru!4v1771930987840!5m2!1sru!2sru" class="w-full h-full min-h-100 rounded-lg" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${_scopeId}></iframe>`);
            } else {
              return [
                createVNode("iframe", {
                  src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1205311.4411714158!2d54.57891870466356!3d53.8406600240511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x417d6a1a2a059d89%3A0xae2a0a2ef51f97ef!2z0JzQtdC70LXRg9C3LCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d52.9610676!2d55.9282142!4m5!1s0x43d93a259216bce1%3A0xaceec0921eda92cc!2z0KPRhNCwLCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d54.734790999999994!2d55.9578555!5e0!3m2!1sru!2sru!4v1771930987840!5m2!1sru!2sru",
                  class: "w-full h-full min-h-100 rounded-lg",
                  loading: "lazy",
                  referrerpolicy: "no-referrer-when-downgrade"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UContainer, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_OrderCreate, {
                direction: true,
                from: "Мелеуз",
                to: "Уфа"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_OrderCreate, {
                  direction: true,
                  from: "Мелеуз",
                  to: "Уфа"
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/directions/meleuz-ufa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };

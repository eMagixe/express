import { _ as _sfc_main$6 } from './Button-DmhYxLTA.mjs';
import { _ as _sfc_main$1 } from './Breadcrumb-BSxxwTnT.mjs';
import { _ as _sfc_main$2 } from './PageSection-OIog-CGo.mjs';
import { _ as __nuxt_component_1 } from './create-BNTQE8ed.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './title-Bvxv237P.mjs';
import './ssr-C3_WFKx-.mjs';
import './useToast-yEiYMbdp.mjs';
import 'reka-ui/namespaced';
import 'reka-ui/date';
import '@internationalized/date';
import 'maska/vue';
import 'valibot';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "salavat-ufa",
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
      },
      {
        label: "Салават - Уфа"
      }
    ]);
    const features = ref([
      {
        title: "Расстояние",
        description: "163 км",
        icon: "i-lucide-arrow-right-left"
      },
      {
        title: "Расчетное время в пути",
        description: "~ 2 часа 30 мин",
        icon: "i-lucide-clock"
      },
      {
        title: "Стоимость",
        description: "от 1200 руб *",
        icon: "i-lucide-receipt-russian-ruble"
      }
    ]);
    useSeoMeta({
      title: "Такси Экспресс | направление из Салавата в Уфу",
      description: "Такси Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
      ogTitle: "Такси Экспресс | направление из Салавата в Уфу",
      ogDescription: "Такси Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
      ogUrl: "https://taxi-express.su/directions/salavat-ufa",
      ogType: "website",
      ogLocale: "ru_RU",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$6;
      const _component_UBreadcrumb = _sfc_main$1;
      const _component_UPageSection = _sfc_main$2;
      const _component_OrderCreate = __nuxt_component_1;
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
        title: "Салават - Уфа",
        description: "Одно из основных направлений нашего такси, по нему ежедневно едут маршруты с опытными водителями. Направление так же работает в обратную сторону по той же цене. Дополнительную информацию вы можете уточнить у диспетчера",
        orientation: "horizontal",
        features: unref(features),
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
            _push2(`<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d740479.3925558841!2d55.03231519424448!3d54.001191569699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x43d7fffbafa7009d%3A0x56073e4216dfddeb!2z0KHQsNC70LDQstCw0YIsINCg0LXRgdC_LiDQkdCw0YjQutC-0YDRgtC-0YHRgtCw0L0!3m2!1d53.386043699999995!2d55.925947199999996!4m5!1s0x43d93a259216bce1%3A0xaceec0921eda92cc!2z0KPRhNCwLCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d54.734790999999994!2d55.9578555!5e0!3m2!1sru!2sru!4v1771932003232!5m2!1sru!2sru" class="w-full h-full min-h-100 rounded-lg" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${_scopeId}></iframe>`);
          } else {
            return [
              createVNode("iframe", {
                src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d740479.3925558841!2d55.03231519424448!3d54.001191569699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x43d7fffbafa7009d%3A0x56073e4216dfddeb!2z0KHQsNC70LDQstCw0YIsINCg0LXRgdC_LiDQkdCw0YjQutC-0YDRgtC-0YHRgtCw0L0!3m2!1d53.386043699999995!2d55.925947199999996!4m5!1s0x43d93a259216bce1%3A0xaceec0921eda92cc!2z0KPRhNCwLCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d54.734790999999994!2d55.9578555!5e0!3m2!1sru!2sru!4v1771932003232!5m2!1sru!2sru",
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
              from: "Салават",
              to: "Уфа"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_OrderCreate, {
                direction: true,
                from: "Салават",
                to: "Уфа"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/directions/salavat-ufa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };

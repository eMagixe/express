import { _ as _sfc_main$1 } from './Container-BxaGJmMa.mjs';
import { _ as _sfc_main$2 } from './Breadcrumb-t0xiKQhO.mjs';
import { _ as _sfc_main$3 } from './PageSection-BMWrOWZt.mjs';
import { _ as _sfc_main$4 } from './PricingPlan-vxO4YvF_.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useSeoMeta } from './server.mjs';
import './Button-D7hwtKF6.mjs';
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
import './index-ByCR7jEh.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-CR0bxPSR.mjs';
import 'perfect-debounce';
import './nuxt-link-BVaogQjF.mjs';
import './useLocale-CasdCEot.mjs';
import './usePrefix-DPzF3aqW.mjs';
import './Badge-B8ag0XyV.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "vacancies",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        label: "Главная",
        to: "/"
      },
      {
        label: "Наши вакансии",
        to: "/vacancies"
      }
    ]);
    useSeoMeta({
      title: "Такси Экспресс | Вакансии",
      description: "Такси Экспресс - список наших вакансий",
      ogTitle: "Такси Экспресс | Вакансии",
      ogDescription: "Такси Экспресс - список наших вакансий",
      ogImage: "https://taxi-express.su/images/preview.png",
      ogUrl: "https://taxi-express.su/",
      ogType: "website",
      ogLocale: "ru_RU",
      twitterCard: "summary_large_image"
    });
    const features = ref([
      {
        title: "Оформление",
        description: "По ТК РФ",
        icon: "i-lucide-clipboard-list"
      },
      {
        title: "Стаж",
        description: "не менее 7-10 лет",
        icon: "i-lucide-clock"
      },
      {
        title: "Требования",
        description: "Отсутствие вредных привычек!",
        icon: "i-lucide-circle-alert"
      },
      {
        title: "Оплата",
        description: "от 60 000 руб",
        icon: "i-lucide-receipt-russian-ruble"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_UBreadcrumb = _sfc_main$2;
      const _component_UPageSection = _sfc_main$3;
      const _component_UPricingPlan = _sfc_main$4;
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
            _push2(ssrRenderComponent(_component_UPageSection, {
              title: "Наши вакансии",
              description: "Список вакансий нашей компании",
              orientation: "horizontal",
              features: unref(features),
              ui: {
                title: "text-primary tracking-wider",
                description: "text-white",
                container: "py-10 sm:py-10 lg:py-10",
                wrapper: "text-white flex flex-col justify-start items-start gap-5 w-full",
                links: "w-full flex flex-col justify-center items-center gap-5",
                footer: "w-full",
                features: "text-white"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col justify-start items-center gap-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UPricingPlan, {
                    class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] w-full",
                    title: "Cо своим авто",
                    description: "Приветствуется межвахтовые водители",
                    ui: {
                      root: "ring-0 item-direction",
                      title: "text-primary title",
                      description: "text-white",
                      price: "text-primary",
                      featureTitle: "text-white",
                      button: "button-gradient"
                    },
                    button: {
                      label: "Позвонить",
                      to: "tel:+79177666833",
                      trailingIcon: "i-lucide-phone-call"
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UPricingPlan, {
                    class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] w-full",
                    title: "На авто фирмы",
                    description: "Водитель на постоянную работу",
                    ui: {
                      root: "ring-0 item-direction",
                      title: "text-primary title",
                      description: "text-white",
                      price: "text-primary",
                      featureTitle: "text-white",
                      button: "button-gradient"
                    },
                    button: {
                      label: "Позвонить",
                      to: "tel:+79177666833",
                      trailingIcon: "i-lucide-phone-call"
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col justify-start items-center gap-5" }, [
                      createVNode(_component_UPricingPlan, {
                        class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] w-full",
                        title: "Cо своим авто",
                        description: "Приветствуется межвахтовые водители",
                        ui: {
                          root: "ring-0 item-direction",
                          title: "text-primary title",
                          description: "text-white",
                          price: "text-primary",
                          featureTitle: "text-white",
                          button: "button-gradient"
                        },
                        button: {
                          label: "Позвонить",
                          to: "tel:+79177666833",
                          trailingIcon: "i-lucide-phone-call"
                        }
                      }),
                      createVNode(_component_UPricingPlan, {
                        class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] w-full",
                        title: "На авто фирмы",
                        description: "Водитель на постоянную работу",
                        ui: {
                          root: "ring-0 item-direction",
                          title: "text-primary title",
                          description: "text-white",
                          price: "text-primary",
                          featureTitle: "text-white",
                          button: "button-gradient"
                        },
                        button: {
                          label: "Позвонить",
                          to: "tel:+79177666833",
                          trailingIcon: "i-lucide-phone-call"
                        }
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBreadcrumb, {
                items: unref(items),
                ui: {
                  link: "text-white hover:text-primary",
                  separatorIcon: "text-white"
                }
              }, null, 8, ["items"]),
              createVNode(_component_UPageSection, {
                title: "Наши вакансии",
                description: "Список вакансий нашей компании",
                orientation: "horizontal",
                features: unref(features),
                ui: {
                  title: "text-primary tracking-wider",
                  description: "text-white",
                  container: "py-10 sm:py-10 lg:py-10",
                  wrapper: "text-white flex flex-col justify-start items-start gap-5 w-full",
                  links: "w-full flex flex-col justify-center items-center gap-5",
                  footer: "w-full",
                  features: "text-white"
                }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col justify-start items-center gap-5" }, [
                    createVNode(_component_UPricingPlan, {
                      class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] w-full",
                      title: "Cо своим авто",
                      description: "Приветствуется межвахтовые водители",
                      ui: {
                        root: "ring-0 item-direction",
                        title: "text-primary title",
                        description: "text-white",
                        price: "text-primary",
                        featureTitle: "text-white",
                        button: "button-gradient"
                      },
                      button: {
                        label: "Позвонить",
                        to: "tel:+79177666833",
                        trailingIcon: "i-lucide-phone-call"
                      }
                    }),
                    createVNode(_component_UPricingPlan, {
                      class: "p-10 bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] w-full",
                      title: "На авто фирмы",
                      description: "Водитель на постоянную работу",
                      ui: {
                        root: "ring-0 item-direction",
                        title: "text-primary title",
                        description: "text-white",
                        price: "text-primary",
                        featureTitle: "text-white",
                        button: "button-gradient"
                      },
                      button: {
                        label: "Позвонить",
                        to: "tel:+79177666833",
                        trailingIcon: "i-lucide-phone-call"
                      }
                    })
                  ])
                ]),
                _: 1
              }, 8, ["features"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vacancies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };

import { _ as _sfc_main$c } from './Container-zod5AUW4.mjs';
import { _ as _sfc_main$d } from './PricingPlan-DLQKsUst.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DDci5Ary.mjs';
import { _ as _sfc_main$5$1, u as useComponentProps, t as tv, P as Primitive, g as getSlotChildrenText, a as _sfc_main$1$1, b as _sfc_main$f, c as useForwardProps, d as useFormField, e as useComponentIcons, f as _sfc_main$3$1, l as looseToNumber } from './Button-NFuoQ1v4.mjs';
import { u as useCall } from './useCall-bD_P2z8n.mjs';
import { defineComponent, defineAsyncComponent, ref, withAsyncContext, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useId, computed, renderSlot, useSlots, watch, useTemplateRef, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { u as useFetch } from './fetch-CQjIynQ7.mjs';
import { c as useSeoMeta, u as useHead, _ as _export_sfc, b as useAppConfig, a as useRoute } from './server.mjs';
import { _ as __nuxt_component_0$2 } from './title-BAS7RGFK.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as useToast } from './useToast-YcMWm34g.mjs';
import { _ as _sfc_main$e } from './Drawer-DH6u89CY.mjs';
import useEmblaCarousel from 'embla-carousel-vue';
import { pausableFilter, useMouseInElement, reactivePick, useVModel } from '@vueuse/core';
import { u as useLocale } from './useLocale-BsE26tc8.mjs';
import { _ as _sfc_main$g } from './Modal-BNNalsv1.mjs';
import { _ as _sfc_main$h } from './Input-B2jApfVL.mjs';
import { u as usePrefix } from './usePrefix-DPzF3aqW.mjs';
import './Badge-BmzoecU5.mjs';
import 'tailwind-variants';
import './index-qAEP9vXy.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-BhQrY2j7.mjs';
import 'perfect-debounce';
import './state-tqLlnwND.mjs';
import '@vue/shared';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
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
import './overlay-Svs1-PRJ.mjs';
import '@vueuse/shared';
import 'aria-hidden';
import './useForwardExpose-C3mVDiKg.mjs';
import 'vaul-vue';

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "welcome",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const directions = ref([]);
    [__temp, __restore] = withAsyncContext(() => useFetch(
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
      const _component_UContainer = _sfc_main$c;
      const _component_UPricingPlan = _sfc_main$d;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UIcon = _sfc_main$5$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "welcome-section w-full mx-auto mb-10" }, _attrs))} data-v-e635988a>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "h-[calc(100vh-100px)] min-h-160 flex flex-col justify-start gap-5 pt-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cities-list w-full flex flex-row justify-center items-center gap-10" data-v-e635988a${_scopeId}><!--[-->`);
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
            _push2(`<!--]--></div><div class="flex flex-col md:flex-row justify-between items-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] mx-5" data-v-e635988a${_scopeId}><p class="text-sm text-white" data-v-e635988a${_scopeId}>* требуется дополнительная оплата</p>`);
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
            _push2(`</div><h1 class="font-medium text-[clamp(1rem,2.5vw,3rem)] text-white text-center lg:text-left w-full lg:w-[70%]" data-v-e635988a${_scopeId}> Такси межгород Кумертау — Уфа </h1>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "lg:hidden button-gradient w-60 h-15 mx-auto my-5 flex items-center justify-center gap-3",
              icon: "i-lucide-phone-call",
              onClick: ($event) => ("useCall" in _ctx ? _ctx.useCall : unref(useCall))().openModalCall("+791****6833")
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
            _push2(`<div class="not-sm:hidden text-[clamp(1rem,3vw,2rem)] border-t-3 border-t-primary/20 pt-10 text-white text-center lg:text-left w-full lg:w-[60%]" data-v-e635988a${_scopeId}> Быстро и с комфортом доставим вас в нужное место в любое время дня и ночи </div>`);
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
              createVNode("h1", { class: "font-medium text-[clamp(1rem,2.5vw,3rem)] text-white text-center lg:text-left w-full lg:w-[70%]" }, " Такси межгород Кумертау — Уфа "),
              createVNode(_component_NuxtLink, {
                class: "lg:hidden button-gradient w-60 h-15 mx-auto my-5 flex items-center justify-center gap-3",
                icon: "i-lucide-phone-call",
                onClick: ($event) => ("useCall" in _ctx ? _ctx.useCall : unref(useCall))().openModalCall("+791****6833")
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/welcome.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$b, [["__scopeId", "data-v-e635988a"]]), { __name: "SectionWelcome" });
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "advantages",
  __ssrInlineRender: true,
  setup(__props) {
    const advantages = [
      {
        icon: "i-lucide-user-check",
        message: [
          {
            color: "#FFCC00",
            text: "Высокий стаж"
          },
          {
            color: "#FFFFFF",
            text: "водителей"
          }
        ],
        description: "стаж наших водителей от 7 - 10 лет опыта"
      },
      {
        icon: "i-lucide-clock",
        message: [
          {
            color: "#FFFFFF",
            text: "скорость и"
          },
          {
            color: "#FFCC00",
            text: "доступность"
          }
        ],
        description: "работаем круглосуточно"
      },
      {
        icon: "i-lucide-shield-check",
        message: [
          {
            color: "#FFFFFF",
            text: "Безопасность и"
          },
          {
            color: "#FFCC00",
            text: "гарантия"
          }
        ],
        description: "предоставляем отчетные документы"
      },
      {
        icon: "i-lucide-truck",
        message: [
          {
            color: "#FFFFFF",
            text: "Перевозка и"
          },
          {
            color: "#FFCC00",
            text: "доставка"
          }
        ],
        description: "осуществляем перевозки и доставки посылок",
        lost: true
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$c;
      const _component_SectionTitle = __nuxt_component_0$2;
      const _component_UIcon = _sfc_main$5$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-advantages w-full mx-auto h-auto pt-5 pb-10 border-t border-t-gray-900/70 border-b border-b-primary/70" }, _attrs))} data-v-b09f82c8>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col justify-start items-center gap-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionTitle, { title: "Наши преимущества" }, null, _parent2, _scopeId));
            _push2(`<div class="lg:w-[70%] flex flex-col justify-center items-center gap-5" data-v-b09f82c8${_scopeId}><!--[-->`);
            ssrRenderList(advantages, (item, index) => {
              _push2(`<!--[--><div class="item animation-box flex flex-row justify-center items-center gap-5 w-full" data-v-b09f82c8${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                class: "text-white min-w-9 min-h-9 text-[4cqw]",
                name: item.icon
              }, null, _parent2, _scopeId));
              _push2(`<div data-v-b09f82c8${_scopeId}><div class="flex flex-row justify-start items-center gap-2 text-white" data-v-b09f82c8${_scopeId}><!--[-->`);
              ssrRenderList(item.message, (i) => {
                _push2(`<span class="${ssrRenderClass(`uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${i.color}]`)}" data-v-b09f82c8${_scopeId}>${ssrInterpolate(i.text)}</span>`);
              });
              _push2(`<!--]--></div><div class="text-white sm:text-[10px] md:text-[14px] lg:text-[20px] text-left uppercase" data-v-b09f82c8${_scopeId}>${ssrInterpolate(item.description)}</div></div></div>`);
              if (!item.lost) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  class: "text-white text-[20px]",
                  name: "i-lucide-arrow-down"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(_component_SectionTitle, { title: "Наши преимущества" }),
              createVNode("div", { class: "lg:w-[70%] flex flex-col justify-center items-center gap-5" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(advantages, (item, index) => {
                  return openBlock(), createBlock(Fragment, { key: index }, [
                    createVNode("div", { class: "item animation-box flex flex-row justify-center items-center gap-5 w-full" }, [
                      createVNode(_component_UIcon, {
                        class: "text-white min-w-9 min-h-9 text-[4cqw]",
                        name: item.icon
                      }, null, 8, ["name"]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex flex-row justify-start items-center gap-2 text-white" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.message, (i) => {
                            return openBlock(), createBlock("span", {
                              class: `uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${i.color}]`
                            }, toDisplayString(i.text), 3);
                          }), 256))
                        ]),
                        createVNode("div", { class: "text-white sm:text-[10px] md:text-[14px] lg:text-[20px] text-left uppercase" }, toDisplayString(item.description), 1)
                      ])
                    ]),
                    !item.lost ? (openBlock(), createBlock(_component_UIcon, {
                      key: 0,
                      class: "text-white text-[20px]",
                      name: "i-lucide-arrow-down"
                    })) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/advantages.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$a, [["__scopeId", "data-v-b09f82c8"]]), { __name: "SectionAdvantages" });
const _imports_0 = publicAssetsURL("/images/svg/star.svg");
const utils = {
  isArray: (data) => {
    return data && Array.isArray(data);
  }
};
const useReview = () => {
  const reviews = ref([]);
  const current = ref({
    name: "",
    text: "",
    rating: 0,
    date: ""
  });
  const route = useRoute();
  const toast = useToast();
  const modalAddReviewIsOpen = ref(false);
  const modalAllReviewsOpen = ref(false);
  if (route.query.review === "open") {
    modalAddReviewIsOpen.value = true;
  }
  watch(modalAddReviewIsOpen, (value) => {
    if (value) reset(current);
  });
  const reset = (obj) => {
    obj.value = {
      name: "",
      text: "",
      rating: 0,
      date: ""
    };
  };
  const remake = (review) => {
    return {
      name: review.name,
      text: review.text,
      rating: Number(review.rating),
      date: review.createdAt ? new Date(review.createdAt).toLocaleDateString("ru-RU") : Date.now().toLocaleString("ru-RU")
    };
  };
  const getAll = async () => {
    return useFetch(
      "/api/review/all",
      {
        method: "GET"
      },
      "$9RxkCj8pEZ"
      /* nuxt-injected */
    ).then(({ data }) => {
      if (utils.isArray(data.value)) {
        reviews.value = data.value.map((review) => {
          return remake(review);
        });
      }
    });
  };
  const create = async (review) => {
    return useFetch(
      "/api/review/add",
      {
        method: "POST",
        body: {
          ...review.value
        }
      },
      "$GMk1CtyGrk"
      /* nuxt-injected */
    );
  };
  const add = async () => {
    if (current.value.name && current.value.text && current.value.rating) {
      create(current).then(() => {
        reset(current);
        toast.add({
          title: "Ответ",
          description: "Отзыв был отправлен",
          color: "success"
        });
        modalAddReviewIsOpen.value = false;
      }).catch(() => {
        toast.add({
          title: "Ответ",
          description: "Произошла ошибка при отправке отзыва",
          color: "error"
        });
      });
    } else {
      toast.add({
        title: "Отправка отзыва",
        description: "Пожалуйста, заполните все поля",
        color: "error"
      });
    }
  };
  const preload = async () => {
    if (reviews.value.length < 3) {
      await getAll().then(() => {
        modalAllReviewsOpen.value = false;
      });
    }
  };
  return {
    preload,
    add,
    current,
    modalAddReviewIsOpen,
    modalAllReviewsOpen,
    reviews
  };
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "viewer",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { reviews, preload } = useReview();
    [__temp, __restore] = withAsyncContext(() => preload()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$5$1;
      _push(`<!--[-->`);
      ssrRenderList(unref(reviews).slice(0, 3), (item) => {
        _push(`<div class="item animation-box transition-all duration-150 flex flex-col justify-start items-start gap-1 w-full" data-v-6f4ffd20><div class="flex flex-row justify-between items-start gap-2 w-full" data-v-6f4ffd20><div class="flex sm:flex-row flex-col sm:justify-center sm:items-center gap-5 text-gray-600" data-v-6f4ffd20><div class="uppercase sm:text-[20px] md:text-[30px] lg:text-[36px]" data-v-6f4ffd20>`);
        _push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-circle-user-round" }, null, _parent));
        _push(` ${ssrInterpolate(item.name)}</div><div class="flex flex-row justify-start items-start gap-1 mb-5" data-v-6f4ffd20><!--[-->`);
        ssrRenderList(item.rating, (n) => {
          _push(`<img height="20" width="20"${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", `star +${n}`)} data-v-6f4ffd20>`);
        });
        _push(`<!--]--></div></div><div class="flex flex-row justify-center items-center gap-1 text-gray-600" data-v-6f4ffd20>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-calendar",
          size: "14"
        }, null, _parent));
        _push(`<p data-v-6f4ffd20>${ssrInterpolate(item.date)}</p></div></div><div class="text-gray-600 text-[1rem]" data-v-6f4ffd20>${ssrInterpolate(item.text)}</div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preview/viewer.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["__scopeId", "data-v-6f4ffd20"]]), { __name: "PreviewViewer" });
const theme$3 = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-accented rounded-full outline-inverted/25 focus-visible:outline-3",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
        "next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "data-[state=active]:bg-inverted"
      }
    }
  }
};
const _sfc_main$8 = {
  __name: "UCarousel",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prev: { type: Object, required: false },
    prevIcon: { type: null, required: false },
    next: { type: Object, required: false },
    nextIcon: { type: null, required: false },
    arrows: { type: Boolean, required: false, default: false },
    dots: { type: Boolean, required: false, default: false },
    orientation: { type: null, required: false, default: "horizontal" },
    items: { type: Array, required: false },
    autoplay: { type: [Boolean, Object], required: false, default: false },
    autoScroll: { type: [Boolean, Object], required: false, default: false },
    autoHeight: { type: [Boolean, Object], required: false, default: false },
    classNames: { type: [Boolean, Object], required: false, default: false },
    fade: { type: [Boolean, Object], required: false, default: false },
    wheelGestures: { type: [Boolean, Object], required: false, default: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    align: { type: [String, Function], required: false, default: "center" },
    containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" },
    slidesToScroll: { type: [String, Number], required: false, default: 1 },
    dragFree: { type: Boolean, required: false, default: false },
    dragThreshold: { type: Number, required: false, default: 10 },
    inViewThreshold: { type: null, required: false, default: 0 },
    loop: { type: Boolean, required: false, default: false },
    skipSnaps: { type: Boolean, required: false, default: false },
    duration: { type: Number, required: false, default: 25 },
    startIndex: { type: Number, required: false, default: 0 },
    watchDrag: { type: [Boolean, Function], required: false, default: true },
    watchResize: { type: [Boolean, Function], required: false, default: true },
    watchSlides: { type: [Boolean, Function], required: false, default: true },
    watchFocus: { type: [Boolean, Function], required: false, default: true },
    active: { type: Boolean, required: false, default: true },
    breakpoints: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const props = useComponentProps("carousel", _props);
    const { dir, t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const stopAutoplayOnInteraction = computed(() => {
      if (typeof props.autoplay === "boolean") {
        return true;
      }
      return props.autoplay?.stopOnInteraction ?? true;
    });
    const stopAutoScrollOnInteraction = computed(() => {
      if (typeof props.autoScroll === "boolean") {
        return true;
      }
      return props.autoScroll?.stopOnInteraction ?? true;
    });
    const ui = computed(() => tv({ extend: theme$3, ...appConfig.ui?.carousel || {} })({
      orientation: props.orientation
    }));
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = ref([]);
    async function loadPlugins() {
      const emblaPlugins = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        emblaPlugins.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        emblaPlugins.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        emblaPlugins.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        emblaPlugins.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        emblaPlugins.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('../_/embla-carousel-wheel-gestures.esm.mjs');
        emblaPlugins.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      plugins.value = emblaPlugins;
    }
    watch(() => [props.autoplay, props.autoScroll, props.autoHeight, props.classNames, props.fade, props.wheelGestures], loadPlugins, { immediate: true });
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    watch(options, () => {
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { flush: "post" });
    function stopOnInteraction() {
      if (stopAutoplayOnInteraction.value) {
        emblaApi.value?.plugins().autoplay?.stop();
      }
      if (stopAutoScrollOnInteraction.value) {
        emblaApi.value?.plugins().autoScroll?.stop();
      }
    }
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
      stopOnInteraction();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
      stopOnInteraction();
    }
    function scrollTo(index) {
      emblaApi.value?.scrollTo(index);
    }
    function onKeyDown(event) {
      let prevKey;
      let nextKey;
      if (props.orientation === "horizontal") {
        prevKey = dir.value === "ltr" ? "ArrowLeft" : "ArrowRight";
        nextKey = dir.value === "ltr" ? "ArrowRight" : "ArrowLeft";
      } else {
        prevKey = "ArrowUp";
        nextKey = "ArrowDown";
      }
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    function isCarouselItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        role: "region",
        "aria-roledescription": "carousel",
        "data-orientation": unref(props).orientation,
        tabindex: "0",
        "data-slot": "root",
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: unref(props).ui?.viewport }))}"${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: unref(props).ui?.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(props).items, (item, index) => {
              _push2(`<div${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, unref(props).dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                "data-slot": "item",
                class: ui.value.item({ class: [unref(props).ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
              }))}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (unref(props).arrows || unref(props).dots) {
              _push2(`<div data-slot="controls" class="${ssrRenderClass(ui.value.controls({ class: unref(props).ui?.controls }))}"${_scopeId}>`);
              if (unref(props).arrows) {
                _push2(`<div data-slot="arrows" class="${ssrRenderClass(ui.value.arrows({ class: unref(props).ui?.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$f, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof unref(props).prev === "object" ? unref(props).prev : void 0, {
                  "data-slot": "prev",
                  class: ui.value.prev({ class: unref(props).ui?.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$f, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof unref(props).next === "object" ? unref(props).next : void 0, {
                  "data-slot": "next",
                  class: ui.value.next({ class: unref(props).ui?.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(props).dots) {
                _push2(`<div role="tablist"${ssrRenderAttr("aria-label", unref(t)("carousel.dots"))} data-slot="dots" class="${ssrRenderClass(ui.value.dots({ class: unref(props).ui?.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  _push2(`<button type="button" role="tab"${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))}${ssrRenderAttr("aria-selected", selectedIndex.value === index)} data-slot="dot" class="${ssrRenderClass(ui.value.dot({ class: unref(props).ui?.dot, active: selectedIndex.value === index }))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                ref_key: "emblaRef",
                ref: emblaRef,
                "data-slot": "viewport",
                class: ui.value.viewport({ class: unref(props).ui?.viewport })
              }, [
                createVNode("div", {
                  "data-slot": "container",
                  class: ui.value.container({ class: unref(props).ui?.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(props).items, (item, index) => {
                    return openBlock(), createBlock("div", mergeProps({ key: index }, { ref_for: true }, unref(props).dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                      "data-slot": "item",
                      class: ui.value.item({ class: [unref(props).ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
                    }), [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 16);
                  }), 128))
                ], 2)
              ], 2),
              unref(props).arrows || unref(props).dots ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "controls",
                class: ui.value.controls({ class: unref(props).ui?.controls })
              }, [
                unref(props).arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "arrows",
                  class: ui.value.arrows({ class: unref(props).ui?.arrows })
                }, [
                  createVNode(_sfc_main$f, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof unref(props).prev === "object" ? unref(props).prev : void 0, {
                    "data-slot": "prev",
                    class: ui.value.prev({ class: unref(props).ui?.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$f, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof unref(props).next === "object" ? unref(props).next : void 0, {
                    "data-slot": "next",
                    class: ui.value.next({ class: unref(props).ui?.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                unref(props).dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  role: "tablist",
                  "aria-label": unref(t)("carousel.dots"),
                  "data-slot": "dots",
                  class: ui.value.dots({ class: unref(props).ui?.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    return openBlock(), createBlock("button", {
                      key: index,
                      type: "button",
                      role: "tab",
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      "aria-selected": selectedIndex.value === index,
                      "data-slot": "dot",
                      class: ui.value.dot({ class: unref(props).ui?.dot, active: selectedIndex.value === index }),
                      "data-state": selectedIndex.value === index ? "active" : void 0,
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "aria-selected", "data-state", "onClick"]);
                  }), 128))
                ], 10, ["aria-label"])) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "all",
  __ssrInlineRender: true,
  setup(__props) {
    const { reviews, preload } = useReview();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDrawer = _sfc_main$e;
      const _component_UButton = _sfc_main$f;
      const _component_UCarousel = _sfc_main$8;
      const _component_UIcon = _sfc_main$5$1;
      _push(ssrRenderComponent(_component_UDrawer, mergeProps({
        title: "Отзывы",
        description: "Все отзывы о компании",
        ui: {
          body: "bg-gray-600 text-gray-200",
          content: "min-h-[400px] bg-gray-600 border-gray-600"
        }
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-reviews" data-v-70f571c8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCarousel, {
              loop: "",
              autoplay: { delay: 2200 },
              items: unref(reviews),
              ui: { item: "not-lg:basis-1/1 md:basis-1/2 lg:basis-1/3" },
              class: "m-10"
            }, {
              default: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item flex flex-col justify-start items-start gap-1" data-v-70f571c8${_scopeId2}><div class="flex w-full flex-row justify-between items-start gap-2" data-v-70f571c8${_scopeId2}><div class="flex xl:flex-row flex-col lg:justify-center lg:items-center gap-5 text-gray-600" data-v-70f571c8${_scopeId2}><div class="uppercase text-[14px] not-lg:text-[30px]" data-v-70f571c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, { name: "i-lucide-circle-user-round" }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(item.name)}</div><div class="flex flex-row justify-start items-start gap-1 mb-5" data-v-70f571c8${_scopeId2}><!--[-->`);
                  ssrRenderList(item.rating, (n) => {
                    _push3(`<img height="20" width="20"${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", `star +${n}`)} data-v-70f571c8${_scopeId2}>`);
                  });
                  _push3(`<!--]--></div></div><div class="flex flex-row justify-center items-center gap-1 text-gray-600" data-v-70f571c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-calendar",
                    size: "14"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-[clamp(.8rem,1vw,1rem)]" data-v-70f571c8${_scopeId2}>${ssrInterpolate(item.date)}</p></div></div><div class="text-gray-600 text-[1rem]" data-v-70f571c8${_scopeId2}>${ssrInterpolate(item.text)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item flex flex-col justify-start items-start gap-1" }, [
                      createVNode("div", { class: "flex w-full flex-row justify-between items-start gap-2" }, [
                        createVNode("div", { class: "flex xl:flex-row flex-col lg:justify-center lg:items-center gap-5 text-gray-600" }, [
                          createVNode("div", { class: "uppercase text-[14px] not-lg:text-[30px]" }, [
                            createVNode(_component_UIcon, { name: "i-lucide-circle-user-round" }),
                            createTextVNode(" " + toDisplayString(item.name), 1)
                          ]),
                          createVNode("div", { class: "flex flex-row justify-start items-start gap-1 mb-5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.rating, (n) => {
                              return openBlock(), createBlock("img", {
                                height: "20",
                                width: "20",
                                src: _imports_0,
                                alt: `star +${n}`
                              }, null, 8, ["alt"]);
                            }), 256))
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-row justify-center items-center gap-1 text-gray-600" }, [
                          createVNode(_component_UIcon, {
                            name: "i-lucide-calendar",
                            size: "14"
                          }),
                          createVNode("p", { class: "text-[clamp(.8rem,1vw,1rem)]" }, toDisplayString(item.date), 1)
                        ])
                      ]),
                      createVNode("div", { class: "text-gray-600 text-[1rem]" }, toDisplayString(item.text), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-reviews" }, [
                createVNode(_component_UCarousel, {
                  loop: "",
                  autoplay: { delay: 2200 },
                  items: unref(reviews),
                  ui: { item: "not-lg:basis-1/1 md:basis-1/2 lg:basis-1/3" },
                  class: "m-10"
                }, {
                  default: withCtx(({ item }) => [
                    createVNode("div", { class: "item flex flex-col justify-start items-start gap-1" }, [
                      createVNode("div", { class: "flex w-full flex-row justify-between items-start gap-2" }, [
                        createVNode("div", { class: "flex xl:flex-row flex-col lg:justify-center lg:items-center gap-5 text-gray-600" }, [
                          createVNode("div", { class: "uppercase text-[14px] not-lg:text-[30px]" }, [
                            createVNode(_component_UIcon, { name: "i-lucide-circle-user-round" }),
                            createTextVNode(" " + toDisplayString(item.name), 1)
                          ]),
                          createVNode("div", { class: "flex flex-row justify-start items-start gap-1 mb-5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.rating, (n) => {
                              return openBlock(), createBlock("img", {
                                height: "20",
                                width: "20",
                                src: _imports_0,
                                alt: `star +${n}`
                              }, null, 8, ["alt"]);
                            }), 256))
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-row justify-center items-center gap-1 text-gray-600" }, [
                          createVNode(_component_UIcon, {
                            name: "i-lucide-calendar",
                            size: "14"
                          }),
                          createVNode("p", { class: "text-[clamp(.8rem,1vw,1rem)]" }, toDisplayString(item.date), 1)
                        ])
                      ]),
                      createVNode("div", { class: "text-gray-600 text-[1rem]" }, toDisplayString(item.text), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["items"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              onClick: unref(preload),
              class: "button-gradient",
              icon: "i-lucide-ellipsis"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Все отзывы`);
                } else {
                  return [
                    createTextVNode("Все отзывы")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                onClick: unref(preload),
                class: "button-gradient",
                icon: "i-lucide-ellipsis"
              }, {
                default: withCtx(() => [
                  createTextVNode("Все отзывы")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preview/all.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["__scopeId", "data-v-70f571c8"]]), { __name: "PreviewAll" });
const theme$2 = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-md border-0 appearance-none placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute start-0 flex items-start",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute end-0 flex items-start",
    "trailingIcon": "shrink-0 text-dimmed"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
      },
      "vertical": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-sm/4 gap-1",
        "leading": "ps-2 inset-y-1",
        "trailing": "pe-2 inset-y-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-sm/4 gap-1.5",
        "leading": "ps-2.5 inset-y-1.5",
        "trailing": "pe-2.5 inset-y-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-base/5 gap-1.5",
        "leading": "ps-2.5 inset-y-1.5",
        "trailing": "pe-2.5 inset-y-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-base/5 gap-2",
        "leading": "ps-3 inset-y-2",
        "trailing": "pe-3 inset-y-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3 inset-y-2",
        "trailing": "pe-3 inset-y-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent focus:outline-none"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "fixed": {
      "false": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    },
    "autoresize": {
      "true": {
        "base": "resize-none"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
    },
    {
      "color": "primary",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-primary/25 focus-visible:outline-3"
    },
    {
      "color": "secondary",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-secondary/25 focus-visible:outline-3"
    },
    {
      "color": "success",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-success/25 focus-visible:outline-3"
    },
    {
      "color": "info",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-info/25 focus-visible:outline-3"
    },
    {
      "color": "warning",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-warning/25 focus-visible:outline-3"
    },
    {
      "color": "error",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-error/25 focus-visible:outline-3"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-inverted/25 focus-visible:outline-3"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    },
    {
      "fixed": false,
      "size": "xs",
      "class": "md:text-xs"
    },
    {
      "fixed": false,
      "size": "sm",
      "class": "md:text-xs"
    },
    {
      "fixed": false,
      "size": "md",
      "class": "md:text-sm"
    },
    {
      "fixed": false,
      "size": "lg",
      "class": "md:text-sm"
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UTextarea",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    autoresize: { type: Boolean, required: false },
    autoresizeDelay: { type: Number, required: false, default: 0 },
    disabled: { type: Boolean, required: false },
    rows: { type: Number, required: false, default: 3 },
    maxrows: { type: Number, required: false, default: 0 },
    highlight: { type: Boolean, required: false },
    fixed: { type: Boolean, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    modelModifiers: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("textarea", _props);
    const modelValue = useVModel(props, "modelValue", emits, { defaultValue: props.defaultValue });
    const appConfig = useAppConfig();
    const { emitFormFocus, emitFormBlur, emitFormInput, emitFormChange, size, color, id, name, highlight, disabled, ariaAttrs } = useFormField(_props, { deferInputValidation: true });
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => tv({ extend: theme$2, ...appConfig.ui?.textarea || {} })({
      color: color.value ?? props.color,
      variant: props.variant,
      size: size?.value ?? props.size,
      loading: props.loading,
      highlight: highlight.value ?? props.highlight,
      fixed: props.fixed,
      autoresize: props.autoresize,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing
    }));
    const textareaRef = useTemplateRef("textareaRef");
    function updateInput(value) {
      if (props.modelModifiers?.trim && (typeof value === "string" || value === null || value === void 0)) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number) {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullable) {
        value ||= null;
      }
      if (props.modelModifiers?.optional && !props.modelModifiers?.nullable && value !== null) {
        value ||= void 0;
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      autoResize();
      if (!props.modelModifiers?.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (props.modelModifiers?.lazy) {
        updateInput(value);
      }
      if (props.modelModifiers?.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    function autoResize() {
      if (props.autoresize && textareaRef.value) {
        textareaRef.value.rows = props.rows;
        const overflow = textareaRef.value.style.overflow;
        textareaRef.value.style.overflow = "hidden";
        const styles = (void 0).getComputedStyle(textareaRef.value);
        const paddingTop = Number.parseInt(styles.paddingTop);
        const paddingBottom = Number.parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = Number.parseInt(styles.lineHeight);
        const { scrollHeight } = textareaRef.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textareaRef.value.rows = props.maxrows ? Math.min(newRows, props.maxrows) : newRows;
        }
        textareaRef.value.style.overflow = overflow;
      }
    }
    watch(modelValue, () => {
      nextTick(autoResize);
    });
    __expose({
      textareaRef,
      autoResize
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": _ctx.$attrs["data-slot"] ?? "root",
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
              id: unref(id),
              ref_key: "textareaRef",
              ref: textareaRef,
              value: unref(modelValue),
              name: unref(name),
              rows: unref(props).rows,
              placeholder: unref(props).placeholder,
              class: ui.value.base({ class: unref(props).ui?.base }),
              disabled: unref(disabled),
              required: unref(props).required
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, { "data-slot": "base" }), "textarea")}${_scopeId}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
            ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!unref(props).avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$5$1, {
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!unref(props).avatar) {
                  _push2(ssrRenderComponent(_sfc_main$3$1, mergeProps({
                    size: unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, unref(props).avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: unref(props).ui?.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: unref(props).ui?.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$5$1, {
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("textarea", mergeProps({
                id: unref(id),
                ref_key: "textareaRef",
                ref: textareaRef,
                value: unref(modelValue),
                name: unref(name),
                rows: unref(props).rows,
                placeholder: unref(props).placeholder,
                class: ui.value.base({ class: unref(props).ui?.base }),
                disabled: unref(disabled),
                required: unref(props).required
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                "data-slot": "base",
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "value", "name", "rows", "placeholder", "disabled", "required", "onFocus"]),
              renderSlot(_ctx.$slots, "default", { ui: ui.value }),
              unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 0,
                "data-slot": "leading",
                class: ui.value.leading({ class: unref(props).ui?.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
                    key: 0,
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
                    key: 1,
                    size: unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, unref(props).avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: unref(props).ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 1,
                "data-slot": "trailing",
                class: ui.value.trailing({ class: unref(props).ui?.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                  unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
                    key: 0,
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const { add, modalAddReviewIsOpen, current } = useReview();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$g;
      const _component_UButton = _sfc_main$f;
      const _component_UInput = _sfc_main$h;
      const _component_UTextarea = _sfc_main$6;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        title: "Оставить отзыв",
        description: "Оставьте свой отзыв о поездке",
        "close-icon": "i-lucide-circle-x",
        open: unref(modalAddReviewIsOpen),
        "onUpdate:open": ($event) => modalAddReviewIsOpen.value = !unref(modalAddReviewIsOpen),
        ui: {
          body: "bg-gray-600 text-gray-200 flex flex-col justify-center items-start gap-5",
          header: "bg-gray-600 border-gray-600",
          title: "text-gray-200",
          close: "text-gray-200 hover:text-gray-600"
        }
      }, _attrs), {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(current).name,
              "onUpdate:modelValue": ($event) => unref(current).name = $event,
              color: "primary",
              placeholder: "Имя",
              ui: {
                root: "w-full",
                base: "h-12 text-white bg-gray-600 rounded-[26px] min-w-full"
              }
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-row justify-start items-start gap-1 pl-1 w-full cursor-pointer"${_scopeId}><!--[-->`);
            ssrRenderList(5, (n) => {
              _push2(`<img height="20" width="20"${ssrRenderAttr("src", _imports_0)} class="${ssrRenderClass({
                grayscale: n > unref(current).rating
              })}"${ssrRenderAttr("alt", `star +${n}`)}${_scopeId}>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_UTextarea, {
              modelValue: unref(current).text,
              "onUpdate:modelValue": ($event) => unref(current).text = $event,
              placeholder: "Текст",
              maxlength: "180",
              rows: 3,
              ui: {
                root: "w-full",
                base: "p-3 text-white bg-gray-600 rounded-[26px] min-w-full"
              }
            }, null, _parent2, _scopeId));
            _push2(`<div class="w-full flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              onClick: unref(add),
              class: "button-gradient",
              icon: "i-lucide-plus"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Оставить отзыв `);
                } else {
                  return [
                    createTextVNode(" Оставить отзыв ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(current).name,
                "onUpdate:modelValue": ($event) => unref(current).name = $event,
                color: "primary",
                placeholder: "Имя",
                ui: {
                  root: "w-full",
                  base: "h-12 text-white bg-gray-600 rounded-[26px] min-w-full"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "flex flex-row justify-start items-start gap-1 pl-1 w-full cursor-pointer" }, [
                (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                  return createVNode("img", {
                    height: "20",
                    width: "20",
                    src: _imports_0,
                    class: {
                      grayscale: n > unref(current).rating
                    },
                    onClick: ($event) => unref(current).rating = n,
                    alt: `star +${n}`
                  }, null, 10, ["onClick", "alt"]);
                }), 64))
              ]),
              createVNode(_component_UTextarea, {
                modelValue: unref(current).text,
                "onUpdate:modelValue": ($event) => unref(current).text = $event,
                placeholder: "Текст",
                maxlength: "180",
                rows: 3,
                ui: {
                  root: "w-full",
                  base: "p-3 text-white bg-gray-600 rounded-[26px] min-w-full"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "w-full flex justify-center items-center" }, [
                createVNode(_component_UButton, {
                  onClick: unref(add),
                  class: "button-gradient",
                  icon: "i-lucide-plus"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Оставить отзыв ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              class: "button-gradient",
              icon: "i-lucide-plus"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Оставить отзыв`);
                } else {
                  return [
                    createTextVNode("Оставить отзыв")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                class: "button-gradient",
                icon: "i-lucide-plus"
              }, {
                default: withCtx(() => [
                  createTextVNode("Оставить отзыв")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preview/add.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$5, { __name: "PreviewAdd" });
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UContainer = _sfc_main$c;
  const _component_SectionTitle = __nuxt_component_0$2;
  const _component_PreviewViewer = __nuxt_component_2$1;
  const _component_PreviewAll = __nuxt_component_3$1;
  const _component_PreviewAdd = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-reviews w-full mx-auto h-auto pt-5 pb-10 border-b border-b-primary/70" }, _attrs))} data-v-a563bc95>`);
  _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col justify-center items-center gap-5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SectionTitle, { title: "Отзывы" }, null, _parent2, _scopeId));
        _push2(`<div class="w-full flex flex-col justify-start items-center pt-10 gap-10" data-v-a563bc95${_scopeId}>`);
        _push2(ssrRenderComponent(_component_PreviewViewer, null, null, _parent2, _scopeId));
        _push2(`<div class="w-full flex flex-row justify-between items-center pt-10 gap-5" data-v-a563bc95${_scopeId}>`);
        _push2(ssrRenderComponent(_component_PreviewAll, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_PreviewAdd, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_SectionTitle, { title: "Отзывы" }),
          createVNode("div", { class: "w-full flex flex-col justify-start items-center pt-10 gap-10" }, [
            createVNode(_component_PreviewViewer),
            createVNode("div", { class: "w-full flex flex-row justify-between items-center pt-10 gap-5" }, [
              createVNode(_component_PreviewAll),
              createVNode(_component_PreviewAdd)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/reviews.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a563bc95"]]), { __name: "SectionReviews" });
const theme$1 = {
  "base": "relative flex flex-col",
  "variants": {
    "divide": {
      "true": "*:not-last:after:absolute *:not-last:after:inset-x-1 *:not-last:after:bottom-0 *:not-last:after:bg-border *:not-last:after:h-px"
    }
  }
};
const _sfc_main$3 = {
  __name: "UPageList",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    divide: { type: Boolean, required: false, default: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("pageList", _props);
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: theme$1, ...appConfig.ui?.pageList || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        role: "list",
        class: ui.value({ class: [unref(props).ui?.base, unref(props).class], divide: unref(props).divide })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative flex rounded-lg",
    "spotlight": "absolute inset-0 rounded-[inherit] pointer-events-none bg-default/90",
    "container": "relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6",
    "wrapper": "flex flex-col flex-1 items-start",
    "header": "mb-4",
    "body": "flex-1",
    "footer": "pt-4 mt-auto",
    "leading": "inline-flex items-center mb-2.5",
    "leadingIcon": "size-5 shrink-0 text-primary",
    "title": "text-base text-pretty font-semibold text-highlighted",
    "description": "text-[15px] text-pretty"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center"
      },
      "vertical": {
        "container": ""
      }
    },
    "reverse": {
      "true": {
        "wrapper": "order-last"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted",
        "title": "text-inverted",
        "description": "text-dimmed"
      },
      "outline": {
        "root": "bg-default ring ring-default",
        "description": "text-muted"
      },
      "soft": {
        "root": "bg-elevated/50",
        "description": "text-toned"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default",
        "description": "text-toned"
      },
      "ghost": {
        "description": "text-muted"
      },
      "naked": {
        "container": "p-0 sm:p-0",
        "description": "text-muted"
      }
    },
    "to": {
      "true": {
        "root": [
          "outline-primary/25 has-[>a:focus-visible]:outline-3",
          "transition"
        ]
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    },
    "highlight": {
      "true": {
        "root": "ring-2"
      }
    },
    "highlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "spotlight": {
      "true": {
        "root": "[--spotlight-size:400px] before:absolute before:-inset-px before:pointer-events-none before:rounded-[inherit] before:bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_calc(var(--spotlight-x,0px))_calc(var(--spotlight-y,0px)),var(--spotlight-color),transparent_70%)]"
      }
    },
    "spotlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    }
  },
  "compoundVariants": [
    {
      "variant": "solid",
      "to": true,
      "class": {
        "root": "hover:bg-inverted/90"
      }
    },
    {
      "variant": "outline",
      "to": true,
      "class": {
        "root": "hover:bg-elevated/50"
      }
    },
    {
      "variant": "soft",
      "to": true,
      "class": {
        "root": "hover:bg-elevated"
      }
    },
    {
      "variant": "subtle",
      "to": true,
      "class": {
        "root": "hover:bg-elevated"
      }
    },
    {
      "variant": "subtle",
      "to": true,
      "highlight": false,
      "class": {
        "root": "hover:ring-accented"
      }
    },
    {
      "variant": [
        "outline",
        "subtle"
      ],
      "to": true,
      "highlight": false,
      "class": {
        "root": "has-[>a:focus-visible]:ring-primary"
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "class": {
        "root": "hover:bg-elevated/50"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "class": {
        "root": "ring-primary"
      }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "class": {
        "root": "ring-secondary"
      }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "class": {
        "root": "ring-success"
      }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "class": {
        "root": "ring-info"
      }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "class": {
        "root": "ring-warning"
      }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "class": {
        "root": "ring-error"
      }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "class": {
        "root": "ring-inverted"
      }
    },
    {
      "spotlightColor": "primary",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-primary)]"
      }
    },
    {
      "spotlightColor": "secondary",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-secondary)]"
      }
    },
    {
      "spotlightColor": "success",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-success)]"
      }
    },
    {
      "spotlightColor": "info",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-info)]"
      }
    },
    {
      "spotlightColor": "warning",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-warning)]"
      }
    },
    {
      "spotlightColor": "error",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-error)]"
      }
    },
    {
      "spotlightColor": "neutral",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-bg-inverted)]"
      }
    }
  ],
  "defaultVariants": {
    "variant": "outline",
    "highlightColor": "primary",
    "spotlightColor": "primary"
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UPageCard",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    icon: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    highlightColor: { type: null, required: false },
    spotlight: { type: Boolean, required: false },
    spotlightColor: { type: null, required: false },
    variant: { type: null, required: false },
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("pageCard", _props);
    const cardRef = ref();
    const motionControl = pausableFilter();
    const appConfig = useAppConfig();
    const { elementX, elementY } = useMouseInElement(cardRef, {
      eventFilter: motionControl.eventFilter
    });
    const prefix = usePrefix();
    const spotlight = computed(() => props.spotlight && (elementX.value !== 0 || elementY.value !== 0));
    watch(() => props.spotlight, (value) => {
      if (value) {
        motionControl.resume();
      } else {
        motionControl.pause();
      }
    }, { immediate: true });
    const ui = computed(() => tv({ extend: theme, ...appConfig.ui?.pageCard || {} })({
      orientation: props.orientation,
      reverse: props.reverse,
      variant: props.variant,
      to: !!props.to || !!props.onClick,
      title: !!props.title || !!slots.title,
      highlight: props.highlight,
      highlightColor: props.highlightColor,
      spotlight: spotlight.value,
      spotlightColor: props.spotlightColor
    }));
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Card link").trim();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        ref_key: "cardRef",
        ref: cardRef,
        as: unref(props).as
      }, !unref(props).to ? _ctx.$attrs : {}, {
        "data-orientation": unref(props).orientation,
        "data-slot": _ctx.$attrs["data-slot"] ?? "root",
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] }),
        style: spotlight.value && { "--spotlight-x": `${unref(elementX)}px`, "--spotlight-y": `${unref(elementY)}px` },
        onClick: unref(props).onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(props).spotlight) {
              _push2(`<div data-slot="spotlight" class="${ssrRenderClass(ui.value.spotlight({ class: unref(props).ui?.spotlight }))}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: unref(props).ui?.container }))}"${_scopeId}>`);
            if (!!slots.header || (unref(props).icon || !!slots.leading) || !!slots.body || (unref(props).title || !!slots.title) || (unref(props).description || !!slots.description) || !!slots.footer) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
              if (!!slots.header) {
                _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(props).icon || !!slots.leading) {
                _push2(`<div data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                  if (unref(props).icon) {
                    _push2(ssrRenderComponent(_sfc_main$5$1, {
                      name: unref(props).icon,
                      "data-slot": "leadingIcon",
                      class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!!slots.body || (unref(props).title || !!slots.title) || (unref(props).description || !!slots.description)) {
                _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "body", {}, () => {
                  if (unref(props).title || !!slots.title) {
                    _push2(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: unref(props).ui?.title }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push2(`${ssrInterpolate(unref(props).title)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (unref(props).description || !!slots.description) {
                    _push2(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                      _push2(`${ssrInterpolate(unref(props).description)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!!slots.footer) {
                _push2(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: unref(props).ui?.footer }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (unref(props).to) {
              _push2(ssrRenderComponent(_sfc_main$1$1, mergeProps({ "aria-label": ariaLabel.value }, { "to": unref(props).to, "target": unref(props).target, ..._ctx.$attrs, "data-slot": void 0 }, {
                class: unref(prefix)("focus:outline-none peer"),
                raw: ""
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${ssrRenderClass(unref(prefix)("absolute inset-0"))}" aria-hidden="true"${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: unref(prefix)("absolute inset-0"),
                        "aria-hidden": "true"
                      }, null, 2)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(props).spotlight ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "spotlight",
                class: ui.value.spotlight({ class: unref(props).ui?.spotlight })
              }, null, 2)) : createCommentVNode("", true),
              createVNode("div", {
                "data-slot": "container",
                class: ui.value.container({ class: unref(props).ui?.container })
              }, [
                !!slots.header || (unref(props).icon || !!slots.leading) || !!slots.body || (unref(props).title || !!slots.title) || (unref(props).description || !!slots.description) || !!slots.footer ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "wrapper",
                  class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
                }, [
                  !!slots.header ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "header",
                    class: ui.value.header({ class: unref(props).ui?.header })
                  }, [
                    renderSlot(_ctx.$slots, "header")
                  ], 2)) : createCommentVNode("", true),
                  unref(props).icon || !!slots.leading ? (openBlock(), createBlock("div", {
                    key: 1,
                    "data-slot": "leading",
                    class: ui.value.leading({ class: unref(props).ui?.leading })
                  }, [
                    renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                      unref(props).icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                        key: 0,
                        name: unref(props).icon,
                        "data-slot": "leadingIcon",
                        class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  !!slots.body || (unref(props).title || !!slots.title) || (unref(props).description || !!slots.description) ? (openBlock(), createBlock("div", {
                    key: 2,
                    "data-slot": "body",
                    class: ui.value.body({ class: unref(props).ui?.body })
                  }, [
                    renderSlot(_ctx.$slots, "body", {}, () => [
                      unref(props).title || !!slots.title ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "title",
                        class: ui.value.title({ class: unref(props).ui?.title })
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(unref(props).title), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 1,
                        "data-slot": "description",
                        class: ui.value.description({ class: unref(props).ui?.description })
                      }, [
                        renderSlot(_ctx.$slots, "description", {}, () => [
                          createTextVNode(toDisplayString(unref(props).description), 1)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  !!slots.footer ? (openBlock(), createBlock("div", {
                    key: 3,
                    "data-slot": "footer",
                    class: ui.value.footer({ class: unref(props).ui?.footer })
                  }, [
                    renderSlot(_ctx.$slots, "footer")
                  ], 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default")
              ], 2),
              unref(props).to ? (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
                key: 1,
                "aria-label": ariaLabel.value
              }, { "to": unref(props).to, "target": unref(props).target, ..._ctx.$attrs, "data-slot": void 0 }, {
                class: unref(prefix)("focus:outline-none peer"),
                raw: ""
              }), {
                default: withCtx(() => [
                  createVNode("span", {
                    class: unref(prefix)("absolute inset-0"),
                    "aria-hidden": "true"
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["aria-label", "class"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "questions",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        label: "Забираете ли Вы пассажиров из поселков и деревень?",
        content: "Да, конечно. Мы так же работаем по таким населенным пунктам как Ермолаево, Алексеевка, Бальза, Бахмут, Шабагиш, Старая и Новая Отрада и другие пункты Куюргазинского района."
      },
      {
        label: "В какое время работает диспетчер?",
        content: "Диспетчер принимает заявки круглосуточно. И предоставляет полную и актуальную информацию."
      },
      {
        label: "Какие конечные пункты поездок?",
        content: "Мы довозим до вокзалов, центров, больниц, а так же до конкретных адресов в крупных городах Республики Башкортостан."
      },
      {
        label: "Как оплачивается багаж?",
        content: "Первая сумка - бесплатно. За остальные взимается плата которую всегда можно узнать у диспетчера."
      },
      {
        label: "Перевозите ли Вы посылки?",
        content: "Да, мы перевозим посылки до определенных габаритов которые можно уточнить у диспетчера."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$c;
      const _component_SectionTitle = __nuxt_component_0$2;
      const _component_UPageList = _sfc_main$3;
      const _component_UPageCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-questions w-full mx-auto h-auto pt-5 pb-10" }, _attrs))} data-v-28f06034>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col justify-center items-center gap-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionTitle, { title: "Популярные вопросы" }, null, _parent2, _scopeId));
            _push2(`<div class="w-full animation-box flex flex-col justify-start items-center pt-10 gap-10" data-v-28f06034${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UPageList, { class: "questions" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item, index) => {
                    _push3(ssrRenderComponent(_component_UPageCard, {
                      key: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                      variant: "ghost",
                      class: ["rounded-none", {
                        "border-b border-b-gray-200": index !== items.length - 1
                      }]
                    }, {
                      body: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h3 class="text-xl mb-5" data-v-28f06034${_scopeId3}>${ssrInterpolate(item.label)}</h3><p class="text-sm" data-v-28f06034${_scopeId3}>${ssrInterpolate(item.content)}</p>`);
                        } else {
                          return [
                            createVNode("h3", { class: "text-xl mb-5" }, toDisplayString(item.label), 1),
                            createVNode("p", { class: "text-sm" }, toDisplayString(item.content), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(items, (item, index) => {
                      return createVNode(_component_UPageCard, {
                        key: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                        variant: "ghost",
                        class: ["rounded-none", {
                          "border-b border-b-gray-200": index !== items.length - 1
                        }]
                      }, {
                        body: withCtx(() => [
                          createVNode("h3", { class: "text-xl mb-5" }, toDisplayString(item.label), 1),
                          createVNode("p", { class: "text-sm" }, toDisplayString(item.content), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_SectionTitle, { title: "Популярные вопросы" }),
              createVNode("div", { class: "w-full animation-box flex flex-col justify-start items-center pt-10 gap-10" }, [
                createVNode(_component_UPageList, { class: "questions" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(items, (item, index) => {
                      return createVNode(_component_UPageCard, {
                        key: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                        variant: "ghost",
                        class: ["rounded-none", {
                          "border-b border-b-gray-200": index !== items.length - 1
                        }]
                      }, {
                        body: withCtx(() => [
                          createVNode("h3", { class: "text-xl mb-5" }, toDisplayString(item.label), 1),
                          createVNode("p", { class: "text-sm" }, toDisplayString(item.content), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 64))
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/questions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-28f06034"]]), { __name: "SectionQuestions" });
const __nuxt_component_4_lazy = defineAsyncComponent(() => import('./order-DkD8CwQl.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Заказать такси из Кумертау, Мелеуза, Салавата в Уфу. Круглосуточно. Перевозка пассажиров и посылок",
      description: "Такси Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
      ogTitle: "Такси Экспресс | Межгороднее такси из Кумертау Уфа",
      ogDescription: "Такси Кумертау - Уфа, Мелеуз - Уфа, Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
      ogImage: "https://taxi-express.su/images/preview.png",
      ogUrl: "https://taxi-express.su",
      ogType: "website",
      ogLocale: "ru_RU",
      twitterCard: "summary_large_image"
    });
    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Такси Экспресс",
            url: "https://taxi-express.su",
            telephone: "+7-917-766-68-33",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Кумертау",
              addressCountry: "RU"
            },
            openingHours: "Mo-Su 00:00-24:00",
            priceRange: "₽"
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionWelcome = __nuxt_component_0;
      const _component_SectionAdvantages = __nuxt_component_1;
      const _component_SectionReviews = __nuxt_component_2;
      const _component_SectionQuestions = __nuxt_component_3;
      const _component_LazySectionOrder = __nuxt_component_4_lazy;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SectionWelcome, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionAdvantages, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionReviews, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionQuestions, null, null, _parent));
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

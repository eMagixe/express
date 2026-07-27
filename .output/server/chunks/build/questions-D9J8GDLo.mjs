import { _ as _sfc_main$3 } from './Container-BxaGJmMa.mjs';
import { _ as __nuxt_component_1 } from './title-Bvxv237P.mjs';
import { defineComponent, mergeProps, withCtx, unref, useId, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, computed, renderSlot, useSlots, ref, watch, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { u as useComponentProps, t as tv, P as Primitive, g as getSlotChildrenText, _ as _sfc_main$5, c as _sfc_main$1$1 } from './Button-D7hwtKF6.mjs';
import { _ as _export_sfc, b as useAppConfig } from './server.mjs';
import { pausableFilter, useMouseInElement } from '@vueuse/core';
import { u as usePrefix } from './usePrefix-DPzF3aqW.mjs';
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
import './index-ByCR7jEh.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-CR0bxPSR.mjs';
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './nuxt-link-BVaogQjF.mjs';

const theme$1 = {
  "base": "relative flex flex-col",
  "variants": {
    "divide": {
      "true": "*:not-last:after:absolute *:not-last:after:inset-x-1 *:not-last:after:bottom-0 *:not-last:after:bg-border *:not-last:after:h-px"
    }
  }
};
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
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
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
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
                    _push2(ssrRenderComponent(_sfc_main$5, {
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
                      unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      const _component_UContainer = _sfc_main$3;
      const _component_SectionTitle = __nuxt_component_1;
      const _component_UPageList = _sfc_main$2;
      const _component_UPageCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-questions w-full mx-auto h-auto pt-5 pb-10 border-b border-b-primary/70" }, _attrs))} data-v-78e9fc69>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col justify-center items-center gap-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionTitle, { title: "Популярные вопросы" }, null, _parent2, _scopeId));
            _push2(`<div class="w-full animation-box flex flex-col justify-start items-center pt-10 gap-10" data-v-78e9fc69${_scopeId}>`);
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
                          _push4(`<h3 class="text-xl mb-5" data-v-78e9fc69${_scopeId3}>${ssrInterpolate(item.label)}</h3><p class="text-sm" data-v-78e9fc69${_scopeId3}>${ssrInterpolate(item.content)}</p>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/questions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const questions = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-78e9fc69"]]), { __name: "SectionQuestions" });

export { questions as default };

import { m as useState, _ as _sfc_main$9, t as tv, j as getSlotChildrenText, a as _sfc_main$k, k as _sfc_main$g } from './index-BGZzggxM.mjs';
import { _ as __nuxt_component_0 } from './title-BAS7RGFK.mjs';
import { defineComponent, mergeProps, withCtx, unref, useId, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, computed, renderSlot, useSlots, ref, watch, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { _ as _export_sfc, c as useAppConfig } from './server.mjs';
import { pausableFilter, useMouseInElement } from '@vueuse/core';
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
import './index-CZ0fzO44.mjs';
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
import './nuxt-link-DZAxAXO9.mjs';
import 'vaul-vue';
import 'unhead/scripts';

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
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.pageList) || {} });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        role: "list",
        class: ui.value({ class: props.class, divide: props.divide })
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
          "has-focus-visible:ring-2 has-focus-visible:ring-primary",
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
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const cardRef = ref();
    const motionControl = pausableFilter();
    const appConfig = useAppConfig();
    const { elementX, elementY } = useMouseInElement(cardRef, {
      eventFilter: motionControl.eventFilter
    });
    const spotlight = computed(() => props.spotlight && (elementX.value !== 0 || elementY.value !== 0));
    watch(() => props.spotlight, (value) => {
      if (value) {
        motionControl.resume();
      } else {
        motionControl.pause();
      }
    }, { immediate: true });
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.pageCard) || {} })({
        orientation: props.orientation,
        reverse: props.reverse,
        variant: props.variant,
        to: !!props.to || !!props.onClick,
        title: !!props.title || !!slots.title,
        highlight: props.highlight,
        highlightColor: props.highlightColor,
        spotlight: spotlight.value,
        spotlightColor: props.spotlightColor
      });
    });
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Card link").trim();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        ref_key: "cardRef",
        ref: cardRef,
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] }),
        style: spotlight.value && { "--spotlight-x": `${unref(elementX)}px`, "--spotlight-y": `${unref(elementY)}px` },
        onClick: __props.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            if (props.spotlight) {
              _push2(`<div data-slot="spotlight" class="${ssrRenderClass(ui.value.spotlight({ class: (_a2 = props.ui) == null ? void 0 : _a2.spotlight }))}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}>`);
            if (!!slots.header || (__props.icon || !!slots.leading) || !!slots.body || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.footer) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
              if (!!slots.header) {
                _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: (_d = props.ui) == null ? void 0 : _d.header }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.icon || !!slots.leading) {
                _push2(`<div data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: (_e = props.ui) == null ? void 0 : _e.leading }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                  var _a3;
                  if (__props.icon) {
                    _push2(ssrRenderComponent(_sfc_main$k, {
                      name: __props.icon,
                      "data-slot": "leadingIcon",
                      class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!!slots.body || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: (_f = props.ui) == null ? void 0 : _f.body }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "body", {}, () => {
                  var _a3, _b2;
                  if (__props.title || !!slots.title) {
                    _push2(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: (_a3 = props.ui) == null ? void 0 : _a3.title }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push2(`${ssrInterpolate(__props.title)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (__props.description || !!slots.description) {
                    _push2(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: (_b2 = props.ui) == null ? void 0 : _b2.description }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                      _push2(`${ssrInterpolate(__props.description)}`);
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
                _push2(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: (_g = props.ui) == null ? void 0 : _g.footer }))}"${_scopeId}>`);
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
            if (__props.to) {
              _push2(ssrRenderComponent(_sfc_main$g, mergeProps({ "aria-label": ariaLabel.value }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                raw: ""
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true"${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      })
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
              props.spotlight ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "spotlight",
                class: ui.value.spotlight({ class: (_h = props.ui) == null ? void 0 : _h.spotlight })
              }, null, 2)) : createCommentVNode("", true),
              createVNode("div", {
                "data-slot": "container",
                class: ui.value.container({ class: (_i = props.ui) == null ? void 0 : _i.container })
              }, [
                !!slots.header || (__props.icon || !!slots.leading) || !!slots.body || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.footer ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "wrapper",
                  class: ui.value.wrapper({ class: (_j = props.ui) == null ? void 0 : _j.wrapper })
                }, [
                  !!slots.header ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "header",
                    class: ui.value.header({ class: (_k = props.ui) == null ? void 0 : _k.header })
                  }, [
                    renderSlot(_ctx.$slots, "header")
                  ], 2)) : createCommentVNode("", true),
                  __props.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                    key: 1,
                    "data-slot": "leading",
                    class: ui.value.leading({ class: (_l = props.ui) == null ? void 0 : _l.leading })
                  }, [
                    renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                      var _a3;
                      return [
                        __props.icon ? (openBlock(), createBlock(_sfc_main$k, {
                          key: 0,
                          name: __props.icon,
                          "data-slot": "leadingIcon",
                          class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ];
                    })
                  ], 2)) : createCommentVNode("", true),
                  !!slots.body || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                    key: 2,
                    "data-slot": "body",
                    class: ui.value.body({ class: (_m = props.ui) == null ? void 0 : _m.body })
                  }, [
                    renderSlot(_ctx.$slots, "body", {}, () => {
                      var _a3, _b2;
                      return [
                        __props.title || !!slots.title ? (openBlock(), createBlock("div", {
                          key: 0,
                          "data-slot": "title",
                          class: ui.value.title({ class: (_a3 = props.ui) == null ? void 0 : _a3.title })
                        }, [
                          renderSlot(_ctx.$slots, "title", {}, () => [
                            createTextVNode(toDisplayString(__props.title), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                          key: 1,
                          "data-slot": "description",
                          class: ui.value.description({ class: (_b2 = props.ui) == null ? void 0 : _b2.description })
                        }, [
                          renderSlot(_ctx.$slots, "description", {}, () => [
                            createTextVNode(toDisplayString(__props.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ];
                    })
                  ], 2)) : createCommentVNode("", true),
                  !!slots.footer ? (openBlock(), createBlock("div", {
                    key: 3,
                    "data-slot": "footer",
                    class: ui.value.footer({ class: (_n = props.ui) == null ? void 0 : _n.footer })
                  }, [
                    renderSlot(_ctx.$slots, "footer")
                  ], 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default")
              ], 2),
              __props.to ? (openBlock(), createBlock(_sfc_main$g, mergeProps({
                key: 1,
                "aria-label": ariaLabel.value
              }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                raw: ""
              }), {
                default: withCtx(() => [
                  createVNode("span", {
                    class: "absolute inset-0",
                    "aria-hidden": "true"
                  })
                ]),
                _: 1
              }, 16, ["aria-label"])) : createCommentVNode("", true)
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
    const items = useState("questions", () => {
      return [
        {
          label: "\u0417\u0430\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u043B\u0438 \u0412\u044B \u043F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u043E\u0432 \u0438\u0437 \u043F\u043E\u0441\u0435\u043B\u043A\u043E\u0432 \u0438 \u0434\u0435\u0440\u0435\u0432\u0435\u043D\u044C?",
          content: "\u0414\u0430, \u043A\u043E\u043D\u0435\u0447\u043D\u043E. \u041C\u044B \u0442\u0430\u043A \u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u043D\u044B\u043C \u043F\u0443\u043D\u043A\u0442\u0430\u043C \u043A\u0430\u043A \u0415\u0440\u043C\u043E\u043B\u0430\u0435\u0432\u043E, \u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432\u043A\u0430, \u0411\u0430\u043B\u044C\u0437\u0430, \u0411\u0430\u0445\u043C\u0443\u0442, \u0428\u0430\u0431\u0430\u0433\u0438\u0448, \u0421\u0442\u0430\u0440\u0430\u044F \u0438 \u041D\u043E\u0432\u0430\u044F \u041E\u0442\u0440\u0430\u0434\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u0443\u043D\u043A\u0442\u044B \u041A\u0443\u044E\u0440\u0433\u0430\u0437\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u0440\u0430\u0439\u043E\u043D\u0430."
        },
        {
          label: "\u0412 \u043A\u0430\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0434\u0438\u0441\u043F\u0435\u0442\u0447\u0435\u0440?",
          content: "\u0414\u0438\u0441\u043F\u0435\u0442\u0447\u0435\u0440 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0437\u0430\u044F\u0432\u043A\u0438 \u043A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E. \u0418 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u043D\u0443\u044E \u0438 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E."
        },
        {
          label: "\u041A\u0430\u043A\u0438\u0435 \u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0435 \u043F\u0443\u043D\u043A\u0442\u044B \u043F\u043E\u0435\u0437\u0434\u043E\u043A?",
          content: "\u041C\u044B \u0434\u043E\u0432\u043E\u0437\u0438\u043C \u0434\u043E \u0432\u043E\u043A\u0437\u0430\u043B\u043E\u0432, \u0446\u0435\u043D\u0442\u0440\u043E\u0432, \u0431\u043E\u043B\u044C\u043D\u0438\u0446, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0434\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0445 \u0430\u0434\u0440\u0435\u0441\u043E\u0432 \u0432 \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u0433\u043E\u0440\u043E\u0434\u0430\u0445 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u0411\u0430\u0448\u043A\u043E\u0440\u0442\u043E\u0441\u0442\u0430\u043D."
        },
        {
          label: "\u041A\u0430\u043A \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0431\u0430\u0433\u0430\u0436?",
          content: "\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0443\u043C\u043A\u0430 - \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u0417\u0430 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0437\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u043F\u043B\u0430\u0442\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0443\u0437\u043D\u0430\u0442\u044C \u0443 \u0434\u0438\u0441\u043F\u0435\u0442\u0447\u0435\u0440\u0430."
        },
        {
          label: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0438\u0442\u0435 \u043B\u0438 \u0412\u044B \u043F\u043E\u0441\u044B\u043B\u043A\u0438?",
          content: "\u0414\u0430, \u043C\u044B \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0438\u043C \u043F\u043E\u0441\u044B\u043B\u043A\u0438 \u0434\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043E\u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C \u0443 \u0434\u0438\u0441\u043F\u0435\u0442\u0447\u0435\u0440\u0430."
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$9;
      const _component_SectionTitle = __nuxt_component_0;
      const _component_UPageList = _sfc_main$2;
      const _component_UPageCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-questions w-full mx-auto h-auto pt-5 pb-10 border-b border-b-primary/70" }, _attrs))} data-v-365457e5>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col justify-center items-center gap-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionTitle, { title: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B" }, null, _parent2, _scopeId));
            _push2(`<div class="w-full animation-box flex flex-col justify-start items-center pt-10 gap-10" data-v-365457e5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UPageList, { class: "accordion-questions" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(items), (item, index) => {
                    _push3(ssrRenderComponent(_component_UPageCard, {
                      key: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                      variant: "ghost",
                      class: ["rounded-none", {
                        "border-b border-b-gray-200": index !== unref(items).length - 1
                      }]
                    }, {
                      body: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h3 class="text-xl mb-5" data-v-365457e5${_scopeId3}>${ssrInterpolate(item.label)}</h3><p class="text-sm" data-v-365457e5${_scopeId3}>${ssrInterpolate(item.content)}</p>`);
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index) => {
                      return openBlock(), createBlock(_component_UPageCard, {
                        key: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                        variant: "ghost",
                        class: ["rounded-none", {
                          "border-b border-b-gray-200": index !== unref(items).length - 1
                        }]
                      }, {
                        body: withCtx(() => [
                          createVNode("h3", { class: "text-xl mb-5" }, toDisplayString(item.label), 1),
                          createVNode("p", { class: "text-sm" }, toDisplayString(item.content), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_SectionTitle, { title: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B" }),
              createVNode("div", { class: "w-full animation-box flex flex-col justify-start items-center pt-10 gap-10" }, [
                createVNode(_component_UPageList, { class: "accordion-questions" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index) => {
                      return openBlock(), createBlock(_component_UPageCard, {
                        key: ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                        variant: "ghost",
                        class: ["rounded-none", {
                          "border-b border-b-gray-200": index !== unref(items).length - 1
                        }]
                      }, {
                        body: withCtx(() => [
                          createVNode("h3", { class: "text-xl mb-5" }, toDisplayString(item.label), 1),
                          createVNode("p", { class: "text-sm" }, toDisplayString(item.content), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
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
const questions = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-365457e5"]]), { __name: "SectionQuestions" });

export { questions as default };

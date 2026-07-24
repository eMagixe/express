import { useSlots, computed, unref, withCtx, openBlock, createBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createVNode, mergeProps, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { createReusableTemplate } from '@vueuse/core';
import { t as tv, a as _sfc_main$5, b as _sfc_main$2, u as useFieldGroup, c as useComponentIcons, d as _sfc_main$3 } from './Button-OB8YJAvR.mjs';
import { b as useAppConfig } from './server.mjs';

const theme$1 = {
  "slots": {
    "base": "font-medium inline-flex items-center",
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
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
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "sm": {
        "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "md": {
        "base": "text-xs px-2 py-1 gap-1 rounded-md",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "lg": {
        "base": "text-sm px-2 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "text-base px-2.5 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-6"
      }
    },
    "square": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "bg-primary text-inverted"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "bg-secondary text-inverted"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "bg-success text-inverted"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "bg-info text-inverted"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "bg-warning text-inverted"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "bg-error text-inverted"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "text-primary ring ring-inset ring-primary/50"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "text-secondary ring ring-inset ring-secondary/50"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "text-success ring ring-inset ring-success/50"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "text-info ring ring-inset ring-info/50"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "text-warning ring ring-inset ring-warning/50"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "text-error ring ring-inset ring-error/50"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "bg-primary/10 text-primary"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "bg-secondary/10 text-secondary"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "bg-success/10 text-success"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "bg-info/10 text-info"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "bg-warning/10 text-warning"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "bg-error/10 text-error"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "bg-primary/10 text-primary ring ring-inset ring-primary/25"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "bg-secondary/10 text-secondary ring ring-inset ring-secondary/25"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "bg-success/10 text-success ring ring-inset ring-success/25"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "bg-info/10 text-info ring ring-inset ring-info/25"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "bg-warning/10 text-warning ring ring-inset ring-warning/25"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "bg-error/10 text-error ring ring-inset ring-error/25"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-inverted bg-inverted"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-accented text-default bg-default"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-default bg-elevated"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-accented text-default bg-elevated"
    },
    {
      "size": "xs",
      "square": true,
      "class": "p-0.5"
    },
    {
      "size": "sm",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "md",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "lg",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "xl",
      "square": true,
      "class": "p-1"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};
const _sfc_main$1 = {
  __name: "UBadge",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "span" },
    label: { type: [String, Number], required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    square: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.badge || {} })({
      color: props.color,
      variant: props.variant,
      size: fieldGroupSize.value || props.size,
      square: props.square || !slots.default && !props.label,
      fieldGroup: orientation.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "base",
        class: ui.value.base({ class: [props.ui?.base, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
              if (unref(isLeading) && unref(leadingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$5, {
                  name: unref(leadingIconName),
                  "data-slot": "leadingIcon",
                  class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                }, null, _parent2, _scopeId));
              } else if (!!__props.avatar) {
                _push2(ssrRenderComponent(_sfc_main$3, mergeProps({
                  size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                }, __props.avatar, {
                  "data-slot": "leadingAvatar",
                  class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
              if (__props.label !== void 0 && __props.label !== null) {
                _push2(`<span data-slot="label" class="${ssrRenderClass(ui.value.label({ class: props.ui?.label }))}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
              if (unref(isTrailing) && unref(trailingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$5, {
                  name: unref(trailingIconName),
                  "data-slot": "trailingIcon",
                  class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5, {
                  key: 0,
                  name: unref(leadingIconName),
                  "data-slot": "leadingIcon",
                  class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                  key: 1,
                  size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                }, __props.avatar, {
                  "data-slot": "leadingAvatar",
                  class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "default", { ui: ui.value }, () => [
                __props.label !== void 0 && __props.label !== null ? (openBlock(), createBlock("span", {
                  key: 0,
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5, {
                  key: 0,
                  name: unref(trailingIconName),
                  "data-slot": "trailingIcon",
                  class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative grid rounded-lg p-6 lg:p-8 xl:p-10 gap-6",
    "header": "",
    "body": "flex flex-col min-w-0",
    "footer": "flex flex-col gap-6 items-center",
    "titleWrapper": "flex items-center gap-3",
    "title": "text-highlighted text-2xl sm:text-3xl text-pretty font-semibold",
    "description": "text-muted text-base text-pretty mt-2",
    "priceWrapper": "flex items-center gap-1",
    "price": "text-highlighted text-3xl sm:text-4xl font-semibold",
    "discount": "text-muted line-through text-xl sm:text-2xl",
    "billing": "flex flex-col justify-between min-w-0",
    "billingPeriod": "text-toned truncate text-xs font-medium",
    "billingCycle": "text-muted truncate text-xs font-medium",
    "features": "flex flex-col gap-3 flex-1 mt-6 grow-0",
    "feature": "flex items-center gap-2 min-w-0",
    "featureIcon": "size-5 shrink-0 text-primary",
    "featureTitle": "text-muted text-sm truncate",
    "badge": "",
    "button": "",
    "tagline": "text-base font-semibold text-default",
    "terms": "text-xs/5 text-muted text-center text-balance"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "grid-cols-1 lg:grid-cols-3 justify-between divide-y lg:divide-y-0 lg:divide-x divide-default",
        "body": "lg:col-span-2 pb-6 lg:pb-0 lg:pr-6 justify-center",
        "footer": "lg:justify-center lg:items-center lg:p-6 lg:max-w-xs lg:w-full lg:mx-auto",
        "features": "lg:grid lg:grid-cols-2 lg:mt-12"
      },
      "vertical": {
        "footer": "justify-end",
        "priceWrapper": "mt-6"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-inverted",
        "title": "text-inverted",
        "description": "text-dimmed",
        "price": "text-inverted",
        "discount": "text-dimmed",
        "billingCycle": "text-dimmed",
        "billingPeriod": "text-dimmed",
        "featureTitle": "text-dimmed"
      },
      "outline": {
        "root": "bg-default ring ring-default"
      },
      "soft": {
        "root": "bg-elevated/50"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default"
      }
    },
    "highlight": {
      "true": {
        "root": "ring-2 ring-inset ring-primary"
      }
    },
    "scale": {
      "true": {
        "root": "lg:scale-[1.1] lg:z-[1]"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "variant": "soft",
      "class": {
        "root": "divide-accented"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "subtle",
      "class": {
        "root": "divide-accented"
      }
    }
  ],
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UPricingPlan",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    badge: { type: [String, Object], required: false },
    billingCycle: { type: String, required: false },
    billingPeriod: { type: String, required: false },
    price: { type: String, required: false },
    discount: { type: String, required: false },
    features: { type: Array, required: false },
    button: { type: Object, required: false },
    tagline: { type: String, required: false },
    terms: { type: String, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    variant: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    scale: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const [DefinePriceTemplate, ReusePriceTemplate] = createReusableTemplate();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pricingPlan || {} })({
      orientation: props.orientation,
      variant: props.variant,
      highlight: props.highlight,
      scale: props.scale
    }));
    const features = computed(() => props.features?.map((feature) => typeof feature === "string" ? { title: feature } : feature));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefinePriceTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.discount || __props.price || !!slots.discount || !!slots.price || __props.billingCycle || __props.billingPeriod || !!slots.billing) {
              _push2(`<div data-slot="priceWrapper" class="${ssrRenderClass(ui.value.priceWrapper({ class: props.ui?.priceWrapper }))}"${_scopeId}>`);
              if (__props.discount && __props.price || !!slots.discount) {
                _push2(`<div data-slot="discount" class="${ssrRenderClass(ui.value.discount({ class: props.ui?.discount }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "discount", {}, () => {
                  _push2(`${ssrInterpolate(__props.price)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.discount || __props.price || !!slots.price) {
                _push2(`<div data-slot="price" class="${ssrRenderClass(ui.value.price({ class: props.ui?.price }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "price", {}, () => {
                  _push2(`${ssrInterpolate(__props.discount || __props.price)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.billingCycle || __props.billingPeriod || !!slots.billing) {
                _push2(`<div data-slot="billing" class="${ssrRenderClass(ui.value.billing({ class: props.ui?.billing }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "billing", { ui: ui.value }, () => {
                  _push2(`<span data-slot="billingPeriod" class="${ssrRenderClass(ui.value.billingPeriod({ class: props.ui?.billingPeriod }))}"${_scopeId}>${ssrInterpolate(__props.billingPeriod || " ")}</span>`);
                  if (__props.billingCycle) {
                    _push2(`<span data-slot="billingCycle" class="${ssrRenderClass(ui.value.billingCycle({ class: props.ui?.billingCycle }))}"${_scopeId}>${ssrInterpolate(__props.billingCycle)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.discount || __props.price || !!slots.discount || !!slots.price || __props.billingCycle || __props.billingPeriod || !!slots.billing ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "priceWrapper",
                class: ui.value.priceWrapper({ class: props.ui?.priceWrapper })
              }, [
                __props.discount && __props.price || !!slots.discount ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "discount",
                  class: ui.value.discount({ class: props.ui?.discount })
                }, [
                  renderSlot(_ctx.$slots, "discount", {}, () => [
                    createTextVNode(toDisplayString(__props.price), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.discount || __props.price || !!slots.price ? (openBlock(), createBlock("div", {
                  key: 1,
                  "data-slot": "price",
                  class: ui.value.price({ class: props.ui?.price })
                }, [
                  renderSlot(_ctx.$slots, "price", {}, () => [
                    createTextVNode(toDisplayString(__props.discount || __props.price), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                __props.billingCycle || __props.billingPeriod || !!slots.billing ? (openBlock(), createBlock("div", {
                  key: 2,
                  "data-slot": "billing",
                  class: ui.value.billing({ class: props.ui?.billing })
                }, [
                  renderSlot(_ctx.$slots, "billing", { ui: ui.value }, () => [
                    createVNode("span", {
                      "data-slot": "billingPeriod",
                      class: ui.value.billingPeriod({ class: props.ui?.billingPeriod })
                    }, toDisplayString(__props.billingPeriod || " "), 3),
                    __props.billingCycle ? (openBlock(), createBlock("span", {
                      key: 0,
                      "data-slot": "billingCycle",
                      class: ui.value.billingCycle({ class: props.ui?.billingCycle })
                    }, toDisplayString(__props.billingCycle), 3)) : createCommentVNode("", true)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), mergeProps({ as: __props.as }, _ctx.$attrs, {
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.header && __props.orientation === "vertical") {
              _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "body", {}, () => {
              _push2(`<div data-slot="titleWrapper" class="${ssrRenderClass(ui.value.titleWrapper({ class: props.ui?.titleWrapper }))}"${_scopeId}>`);
              if (__props.title || !!slots.title) {
                _push2(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`${ssrInterpolate(__props.title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "badge", { ui: ui.value }, () => {
                if (__props.badge) {
                  _push2(ssrRenderComponent(_sfc_main$1, mergeProps({
                    color: "primary",
                    variant: "subtle"
                  }, typeof __props.badge === "string" ? { label: __props.badge } : __props.badge, {
                    "data-slot": "badge",
                    class: ui.value.badge({ class: props.ui?.badge })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
              if (__props.description || !!slots.description) {
                _push2(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.orientation === "vertical") {
                _push2(ssrRenderComponent(unref(ReusePriceTemplate), null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (features.value?.length || !!slots.features) {
                _push2(`<ul data-slot="features" class="${ssrRenderClass(ui.value.features({ class: props.ui?.features }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "features", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(features.value, (feature, index) => {
                    _push2(`<li data-slot="feature" class="${ssrRenderClass(ui.value.feature({ class: props.ui?.feature }))}"${_scopeId}>`);
                    _push2(ssrRenderComponent(_sfc_main$5, {
                      name: feature.icon || unref(appConfig).ui.icons.success,
                      "data-slot": "featureIcon",
                      class: ui.value.featureIcon({ class: props.ui?.featureIcon })
                    }, null, _parent2, _scopeId));
                    _push2(`<span data-slot="featureTitle" class="${ssrRenderClass(ui.value.featureTitle({ class: props.ui?.featureTitle }))}"${_scopeId}>${ssrInterpolate(feature.title)}</span></li>`);
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
                _push2(`</ul>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (__props.terms || !!slots.terms || (__props.button || !!slots.button) || __props.orientation === "horizontal" || (__props.tagline || !!slots.tagline) || !!slots.footer) {
              _push2(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
                if (__props.tagline || !!slots.tagline) {
                  _push2(`<div data-slot="tagline" class="${ssrRenderClass(ui.value.tagline({ class: props.ui?.tagline }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "tagline", {}, () => {
                    _push2(`${ssrInterpolate(__props.tagline)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (__props.orientation === "horizontal") {
                  _push2(ssrRenderComponent(unref(ReusePriceTemplate), null, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "button", { ui: ui.value }, () => {
                  if (__props.button) {
                    _push2(ssrRenderComponent(_sfc_main$2, mergeProps({ block: true, size: "lg", ...__props.button }, {
                      "data-slot": "button",
                      class: ui.value.button({ class: props.ui?.button }),
                      onClick: __props.button?.onClick
                    }), null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                if (__props.terms || !!slots.terms) {
                  _push2(`<div data-slot="terms" class="${ssrRenderClass(ui.value.terms({ class: props.ui?.terms }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "terms", {}, () => {
                    _push2(`${ssrInterpolate(__props.terms)}`);
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
          } else {
            return [
              !!slots.header && __props.orientation === "vertical" ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "header",
                class: ui.value.header({ class: props.ui?.header })
              }, [
                renderSlot(_ctx.$slots, "header")
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                "data-slot": "body",
                class: ui.value.body({ class: props.ui?.body })
              }, [
                renderSlot(_ctx.$slots, "body", {}, () => [
                  createVNode("div", {
                    "data-slot": "titleWrapper",
                    class: ui.value.titleWrapper({ class: props.ui?.titleWrapper })
                  }, [
                    __props.title || !!slots.title ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "title",
                      class: ui.value.title({ class: props.ui?.title })
                    }, [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(__props.title), 1)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "badge", { ui: ui.value }, () => [
                      __props.badge ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                        key: 0,
                        color: "primary",
                        variant: "subtle"
                      }, typeof __props.badge === "string" ? { label: __props.badge } : __props.badge, {
                        "data-slot": "badge",
                        class: ui.value.badge({ class: props.ui?.badge })
                      }), null, 16, ["class"])) : createCommentVNode("", true)
                    ])
                  ], 2),
                  __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "description",
                    class: ui.value.description({ class: props.ui?.description })
                  }, [
                    renderSlot(_ctx.$slots, "description", {}, () => [
                      createTextVNode(toDisplayString(__props.description), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.orientation === "vertical" ? (openBlock(), createBlock(unref(ReusePriceTemplate), { key: 1 })) : createCommentVNode("", true),
                  features.value?.length || !!slots.features ? (openBlock(), createBlock("ul", {
                    key: 2,
                    "data-slot": "features",
                    class: ui.value.features({ class: props.ui?.features })
                  }, [
                    renderSlot(_ctx.$slots, "features", {}, () => [
                      (openBlock(true), createBlock(Fragment, null, renderList(features.value, (feature, index) => {
                        return openBlock(), createBlock("li", {
                          key: index,
                          "data-slot": "feature",
                          class: ui.value.feature({ class: props.ui?.feature })
                        }, [
                          createVNode(_sfc_main$5, {
                            name: feature.icon || unref(appConfig).ui.icons.success,
                            "data-slot": "featureIcon",
                            class: ui.value.featureIcon({ class: props.ui?.featureIcon })
                          }, null, 8, ["name", "class"]),
                          createVNode("span", {
                            "data-slot": "featureTitle",
                            class: ui.value.featureTitle({ class: props.ui?.featureTitle })
                          }, toDisplayString(feature.title), 3)
                        ], 2);
                      }), 128))
                    ])
                  ], 2)) : createCommentVNode("", true)
                ])
              ], 2),
              __props.terms || !!slots.terms || (__props.button || !!slots.button) || __props.orientation === "horizontal" || (__props.tagline || !!slots.tagline) || !!slots.footer ? (openBlock(), createBlock("div", {
                key: 1,
                "data-slot": "footer",
                class: ui.value.footer({ class: props.ui?.footer })
              }, [
                renderSlot(_ctx.$slots, "footer", {}, () => [
                  __props.tagline || !!slots.tagline ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "tagline",
                    class: ui.value.tagline({ class: props.ui?.tagline })
                  }, [
                    renderSlot(_ctx.$slots, "tagline", {}, () => [
                      createTextVNode(toDisplayString(__props.tagline), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.orientation === "horizontal" ? (openBlock(), createBlock(unref(ReusePriceTemplate), { key: 1 })) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "button", { ui: ui.value }, () => [
                    __props.button ? (openBlock(), createBlock(_sfc_main$2, mergeProps({ key: 0 }, { block: true, size: "lg", ...__props.button }, {
                      "data-slot": "button",
                      class: ui.value.button({ class: props.ui?.button }),
                      onClick: __props.button?.onClick
                    }), null, 16, ["class", "onClick"])) : createCommentVNode("", true)
                  ]),
                  __props.terms || !!slots.terms ? (openBlock(), createBlock("div", {
                    key: 2,
                    "data-slot": "terms",
                    class: ui.value.terms({ class: props.ui?.terms })
                  }, [
                    renderSlot(_ctx.$slots, "terms", {}, () => [
                      createTextVNode(toDisplayString(__props.terms), 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PricingPlan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };

import { defineComponent, withCtx, createVNode, defineAsyncComponent, toRef, provide, unref, mergeProps, useId, renderSlot, openBlock, createBlock, createTextVNode, Fragment, renderList, toDisplayString, createCommentVNode, computed, resolveDynamicComponent, useSlots, useModel, watch, mergeModels, ref, toHandlers, inject, useTemplateRef, withModifiers, shallowReactive, toValue, isRef, reactive, markRaw, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderStyle } from 'vue/server-renderer';
import { useForwardProps, ConfigProvider, TooltipProvider, Primitive, ToastProvider, ToastPortal, ToastViewport, useForwardPropsEmits, VisuallyHidden, DialogRoot, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogTrigger, DialogPortal, DialogOverlay, ToastRoot, ToastTitle, ToastDescription, ToastAction, ToastClose, Slot, ProgressRoot, ProgressIndicator } from 'reka-ui';
import { reactivePick, createReusableTemplate, createSharedComposable, reactiveOmit, useDebounceFn } from '@vueuse/core';
import { A as serialize, z as defu, p as publicAssetsURL, B as isEqual } from '../nitro/nitro.mjs';
import { e as Lo, _ as fo, c as ke$1, d as J, b as Yt$1, a as h } from './server.mjs';
import { createTV } from 'tailwind-variants';
import { _ as ue } from './index-NPZ-ilWx.mjs';
import { W } from './nuxt-link-xfm6sc6S.mjs';
import { DrawerRootNested, DrawerRoot, DrawerTrigger, DrawerPortal, DrawerOverlay, DrawerContent, DrawerHandle, DrawerTitle, DrawerDescription } from 'vaul-vue';
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
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';

function diff(obj1, obj2) {
  const h1 = _toHashedObject(obj1);
  const h2 = _toHashedObject(obj2);
  return _diff(h1, h2);
}
function _diff(h1, h2) {
  const diffs = [];
  const allProps = /* @__PURE__ */ new Set([
    ...Object.keys(h1.props || {}),
    ...Object.keys(h2.props || {})
  ]);
  if (h1.props && h2.props) {
    for (const prop of allProps) {
      const p1 = h1.props[prop];
      const p2 = h2.props[prop];
      if (p1 && p2) {
        diffs.push(..._diff(h1.props?.[prop], h2.props?.[prop]));
      } else if (p1 || p2) {
        diffs.push(
          new DiffEntry((p2 || p1).key, p1 ? "removed" : "added", p2, p1)
        );
      }
    }
  }
  if (allProps.size === 0 && h1.hash !== h2.hash) {
    diffs.push(new DiffEntry((h2 || h1).key, "changed", h2, h1));
  }
  return diffs;
}
function _toHashedObject(obj, key = "") {
  if (obj && typeof obj !== "object") {
    return new DiffHashedObject(key, obj, serialize(obj));
  }
  const props = {};
  const hashes = [];
  for (const _key in obj) {
    props[_key] = _toHashedObject(obj[_key], key ? `${key}.${_key}` : _key);
    hashes.push(props[_key].hash);
  }
  return new DiffHashedObject(key, obj, `{${hashes.join(":")}}`, props);
}
class DiffEntry {
  constructor(key, type, newValue, oldValue) {
    this.key = key;
    this.type = type;
    this.newValue = newValue;
    this.oldValue = oldValue;
  }
  toString() {
    return this.toJSON();
  }
  toJSON() {
    switch (this.type) {
      case "added": {
        return `Added   \`${this.key}\``;
      }
      case "removed": {
        return `Removed \`${this.key}\``;
      }
      case "changed": {
        return `Changed \`${this.key}\` from \`${this.oldValue?.toString() || "-"}\` to \`${this.newValue.toString()}\``;
      }
    }
  }
}
class DiffHashedObject {
  constructor(key, value, hash, props) {
    this.key = key;
    this.value = value;
    this.hash = hash;
    this.props = props;
  }
  toString() {
    if (this.props) {
      return `{${Object.keys(this.props).join(",")}}`;
    } else {
      return JSON.stringify(this.value);
    }
  }
  toJSON() {
    const k = this.key || ".";
    if (this.props) {
      return `${k}({${Object.keys(this.props).join(",")}})`;
    }
    return `${k}(${this.value})`;
  }
}

var _a2;
function _e(e, a) {
  const t = { ...e };
  for (const d of a) delete t[d];
  return t;
}
function Da(e, a, t) {
  typeof a == "string" && (a = a.split(".").map((s) => {
    const b = Number(s);
    return Number.isNaN(b) ? s : b;
  }));
  let d = e;
  for (const s of a) {
    if (d == null) return t;
    d = d[s];
  }
  return d !== void 0 ? d : t;
}
function Hl(e) {
  const a = Number.parseFloat(e);
  return Number.isNaN(a) ? e : a;
}
function Ue(e, a) {
  return !e && !a ? "" : [...Array.isArray(e) ? e : [e], a].filter(Boolean);
}
function et(e) {
  return e.map((a) => {
    if (!a.children || typeof a.children == "string") return a.children || "";
    if (Array.isArray(a.children)) return et(a.children);
    if (a.children.default) return et(a.children.default());
  }).join("");
}
function Ra(e) {
  return (a, t) => La(a, t, unref(e));
}
function La(e, a, t) {
  return Da(t, `messages.${e}`, e).replace(/\{(\w+)\}/g, (s, b) => {
    var _a3;
    return `${(_a3 = a == null ? void 0 : a[b]) != null ? _a3 : `{${b}}`}`;
  });
}
function Na(e) {
  const a = computed(() => unref(e).name), t = computed(() => unref(e).code), d = computed(() => unref(e).dir), s = isRef(e) ? e : ref(e);
  return { lang: a, code: t, dir: d, locale: s, t: Ra(e) };
}
function Va(e) {
  return defu(e, { dir: "ltr" });
}
const Ct = Va({ name: "English", code: "en", messages: { alert: { close: "Close" }, authForm: { hidePassword: "Hide password", showPassword: "Show password", submit: "Continue" }, banner: { close: "Close" }, calendar: { nextMonth: "Next month", nextYear: "Next year", prevMonth: "Previous month", prevYear: "Previous year" }, carousel: { dots: "Choose slide to display", goto: "Go to slide {slide}", next: "Next", prev: "Prev" }, chatPrompt: { placeholder: "Type your message here\u2026" }, chatPromptSubmit: { label: "Send prompt" }, colorMode: { dark: "Dark", light: "Light", switchToDark: "Switch to dark mode", switchToLight: "Switch to light mode", system: "System" }, commandPalette: { back: "Back", close: "Close", noData: "No data", noMatch: "No matching data", placeholder: "Type a command or search\u2026" }, contentSearch: { links: "Links", theme: "Theme" }, contentSearchButton: { label: "Search\u2026" }, contentToc: { title: "On this page" }, dashboardSearch: { theme: "Theme" }, dashboardSearchButton: { label: "Search\u2026" }, dashboardSidebarCollapse: { collapse: "Collapse sidebar", expand: "Expand sidebar" }, dashboardSidebarToggle: { close: "Close sidebar", open: "Open sidebar" }, error: { clear: "Back to home" }, fileUpload: { removeFile: "Remove {filename}" }, header: { close: "Close menu", open: "Open menu" }, inputMenu: { create: 'Create "{label}"', noData: "No data", noMatch: "No matching data" }, inputNumber: { decrement: "Decrement", increment: "Increment" }, modal: { close: "Close" }, pricingTable: { caption: "Pricing plan comparison" }, prose: { codeCollapse: { closeText: "Collapse", name: "code", openText: "Expand" }, collapsible: { closeText: "Hide", name: "properties", openText: "Show" }, pre: { copy: "Copy code to clipboard" } }, selectMenu: { create: 'Create "{label}"', noData: "No data", noMatch: "No matching data", search: "Search\u2026" }, slideover: { close: "Close" }, table: { noData: "No data" }, toast: { close: "Close" } } }), ra = /* @__PURE__ */ Symbol.for("nuxt-ui.locale-context"), Ma = (e) => {
  const a = e || toRef(inject(ra, Ct));
  return Na(computed(() => a.value || Ct));
}, Te = Ma, ca = /* @__PURE__ */ Symbol("nuxt-ui.portal-target");
function We(e) {
  const a = inject(ca, void 0), t = computed(() => e.value === true ? a == null ? void 0 : a.value : e.value), d = computed(() => typeof t.value == "boolean" ? !t.value : false), s = computed(() => typeof t.value == "boolean" ? "body" : t.value);
  return computed(() => ({ to: s.value, disabled: d.value }));
}
const Ua = "$s";
function Ea(...e) {
  const a = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(a);
  const [t, d] = e;
  if (!t || typeof t != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + t);
  if (d !== void 0 && typeof d != "function") throw new Error("[nuxt] [useState] init must be a function: " + d);
  const s = Ua + t, b = h(), h$1 = toRef(b.payload.state, s);
  if (h$1.value === void 0 && d) {
    const k = d();
    if (isRef(k)) return b.payload.state[s] = k, k;
    h$1.value = k;
  }
  return h$1;
}
const ua = /* @__PURE__ */ Symbol("nuxt-ui.toast-max");
function Ka() {
  const e = Ea("toasts", () => []), a = inject(ua, void 0), t = ref(false), d = [], s = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  async function b() {
    var _a3;
    if (!(t.value || d.length === 0)) {
      for (t.value = true; d.length > 0; ) {
        const f = d.shift();
        await nextTick(), e.value = [...e.value, f].slice(-((_a3 = a == null ? void 0 : a.value) != null ? _a3 : 5));
      }
      t.value = false;
    }
  }
  function h(f) {
    const i = { id: s(), open: true, ...f };
    return d.push(i), b(), i;
  }
  function k(f, i) {
    const c = e.value.findIndex(($) => $.id === f);
    c !== -1 && (e.value[c] = { ...e.value[c], ...i });
  }
  function S(f) {
    const i = e.value.findIndex((c) => c.id === f);
    i !== -1 && (e.value[i] = { ...e.value[i], open: false }), setTimeout(() => {
      e.value = e.value.filter((c) => c.id !== f);
    }, 200);
  }
  function g() {
    e.value = [];
  }
  return { toasts: e, add: h, update: k, remove: S, clear: g };
}
const Ha = Yt$1, G = createTV((_a2 = Ha.ui) == null ? void 0 : _a2.tv), ae = { __name: "UIcon", __ssrInlineRender: true, props: { name: { type: null, required: true }, mode: { type: String, required: false }, size: { type: [String, Number], required: false }, customize: { type: Function, required: false } }, setup(e) {
  const t = useForwardProps(reactivePick(e, "name", "mode", "size", "customize"));
  return (d, s, b, h) => {
    const k = ue;
    typeof e.name == "string" ? s(ssrRenderComponent(k, mergeProps(unref(t), h), null, b)) : ssrRenderVNode(s, createVNode(resolveDynamicComponent(e.name), h, null), b);
  };
} }, zt = ae.setup;
ae.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue"), zt ? zt(e, a) : void 0;
};
const jt = "img", Bt = /* @__PURE__ */ Symbol("nuxt-ui.avatar-group");
function da(e) {
  const a = inject(Bt, void 0), t = computed(() => {
    var _a3;
    return (_a3 = e.size) != null ? _a3 : a == null ? void 0 : a.value.size;
  });
  return provide(Bt, computed(() => ({ size: t.value }))), { size: t };
}
const Wa = { slots: { root: "relative inline-flex items-center justify-center shrink-0", base: "rounded-full ring ring-bg flex items-center justify-center text-inverted font-medium whitespace-nowrap" }, variants: { color: { primary: "bg-primary", secondary: "bg-secondary", success: "bg-success", info: "bg-info", warning: "bg-warning", error: "bg-error", neutral: "bg-inverted" }, size: { "3xs": "h-[4px] min-w-[4px] text-[4px]", "2xs": "h-[5px] min-w-[5px] text-[5px]", xs: "h-[6px] min-w-[6px] text-[6px]", sm: "h-[7px] min-w-[7px] text-[7px]", md: "h-[8px] min-w-[8px] text-[8px]", lg: "h-[9px] min-w-[9px] text-[9px]", xl: "h-[10px] min-w-[10px] text-[10px]", "2xl": "h-[11px] min-w-[11px] text-[11px]", "3xl": "h-[12px] min-w-[12px] text-[12px]" }, position: { "top-right": "top-0 right-0", "bottom-right": "bottom-0 right-0", "top-left": "top-0 left-0", "bottom-left": "bottom-0 left-0" }, inset: { false: "" }, standalone: { false: "absolute" } }, compoundVariants: [{ position: "top-right", inset: false, class: "-translate-y-1/2 translate-x-1/2 transform" }, { position: "bottom-right", inset: false, class: "translate-y-1/2 translate-x-1/2 transform" }, { position: "top-left", inset: false, class: "-translate-y-1/2 -translate-x-1/2 transform" }, { position: "bottom-left", inset: false, class: "translate-y-1/2 -translate-x-1/2 transform" }], defaultVariants: { size: "md", color: "primary", position: "top-right" } }, st = Object.assign({ inheritAttrs: false }, { __name: "UChip", __ssrInlineRender: true, props: mergeModels({ as: { type: null, required: false }, text: { type: [String, Number], required: false }, color: { type: null, required: false }, size: { type: null, required: false }, position: { type: null, required: false }, inset: { type: Boolean, required: false, default: false }, standalone: { type: Boolean, required: false, default: false }, class: { type: null, required: false }, ui: { type: null, required: false } }, { show: { type: Boolean, default: true }, showModifiers: {} }), emits: ["update:show"], setup(e) {
  const a = e, t = useModel(e, "show", { type: Boolean, default: true }), { size: d } = da(a), s = ke$1(), b = computed(() => {
    var _a3;
    return G({ extend: G(Wa), ...((_a3 = s.ui) == null ? void 0 : _a3.chip) || {} })({ color: a.color, size: d.value, position: a.position, inset: a.inset, standalone: a.standalone });
  });
  return (h, k, S, g) => {
    var _a3;
    k(ssrRenderComponent(unref(Primitive), mergeProps({ as: e.as, "data-slot": "root", class: b.value.root({ class: [(_a3 = a.ui) == null ? void 0 : _a3.root, a.class] }) }, g), { default: withCtx((f, i, c, $) => {
      var _a4, _b;
      if (i) i(ssrRenderComponent(unref(Slot), h.$attrs, { default: withCtx((v, C, D, R) => {
        if (C) ssrRenderSlot(h.$slots, "default", {}, null, C, D, R);
        else return [renderSlot(h.$slots, "default")];
      }), _: 3 }, c, $)), t.value ? (i(`<span data-slot="base" class="${ssrRenderClass(b.value.base({ class: (_a4 = a.ui) == null ? void 0 : _a4.base }))}"${$}>`), ssrRenderSlot(h.$slots, "content", {}, () => {
        i(`${ssrInterpolate(e.text)}`);
      }, i, c, $), i("</span>")) : i("<!---->");
      else return [createVNode(unref(Slot), h.$attrs, { default: withCtx(() => [renderSlot(h.$slots, "default")]), _: 3 }, 16), t.value ? (openBlock(), createBlock("span", { key: 0, "data-slot": "base", class: b.value.base({ class: (_b = a.ui) == null ? void 0 : _b.base }) }, [renderSlot(h.$slots, "content", {}, () => [createTextVNode(toDisplayString(e.text), 1)])], 2)) : createCommentVNode("", true)];
    }), _: 3 }, S));
  };
} }), Ot = st.setup;
st.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue"), Ot ? Ot(e, a) : void 0;
};
const Ga = { slots: { root: "inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated", image: "h-full w-full rounded-[inherit] object-cover", fallback: "font-medium leading-none text-muted truncate", icon: "text-muted shrink-0" }, variants: { size: { "3xs": { root: "size-4 text-[8px]" }, "2xs": { root: "size-5 text-[10px]" }, xs: { root: "size-6 text-xs" }, sm: { root: "size-7 text-sm" }, md: { root: "size-8 text-base" }, lg: { root: "size-9 text-lg" }, xl: { root: "size-10 text-xl" }, "2xl": { root: "size-11 text-[22px]" }, "3xl": { root: "size-12 text-2xl" } } }, defaultVariants: { size: "md" } }, be = Object.assign({ inheritAttrs: false }, { __name: "UAvatar", __ssrInlineRender: true, props: { as: { type: null, required: false }, src: { type: String, required: false }, alt: { type: String, required: false }, icon: { type: null, required: false }, text: { type: String, required: false }, size: { type: null, required: false }, chip: { type: [Boolean, Object], required: false }, class: { type: null, required: false }, style: { type: null, required: false }, ui: { type: null, required: false } }, setup(e) {
  const a = e, t = computed(() => {
    var _a3;
    return typeof a.as == "string" || typeof ((_a3 = a.as) == null ? void 0 : _a3.render) == "function" ? { root: a.as } : defu(a.as, { root: "span" });
  }), d = computed(() => a.text || (a.alt || "").split(" ").map((f) => f.charAt(0)).join("").substring(0, 2)), s = ke$1(), { size: b } = da(a), h = computed(() => {
    var _a3;
    return G({ extend: G(Ga), ...((_a3 = s.ui) == null ? void 0 : _a3.avatar) || {} })({ size: b.value });
  }), k = computed(() => ({ "3xs": 16, "2xs": 20, xs: 24, sm: 28, md: 32, lg: 36, xl: 40, "2xl": 44, "3xl": 48 })[a.size || "md"]), S = ref(false);
  watch(() => a.src, () => {
    S.value && (S.value = false);
  });
  function g() {
    S.value = true;
  }
  return (f, i, c, $) => {
    var _a3;
    ssrRenderVNode(i, createVNode(resolveDynamicComponent(a.chip ? st : unref(Primitive)), mergeProps({ as: t.value.root }, a.chip ? typeof a.chip == "object" ? { inset: true, ...a.chip } : { inset: true } : {}, { "data-slot": "root", class: h.value.root({ class: [(_a3 = a.ui) == null ? void 0 : _a3.root, a.class] }), style: a.style }, $), { default: withCtx((v, C, D, R) => {
      var _a4, _b;
      if (C) e.src && !S.value ? ssrRenderVNode(C, createVNode(resolveDynamicComponent(t.value.img || unref(jt)), mergeProps({ src: e.src, alt: e.alt, width: k.value, height: k.value }, f.$attrs, { "data-slot": "image", class: h.value.image({ class: (_a4 = a.ui) == null ? void 0 : _a4.image }), onError: g }), null), D, R) : C(ssrRenderComponent(unref(Slot), f.$attrs, { default: withCtx((P, w, T, N) => {
        if (w) ssrRenderSlot(f.$slots, "default", {}, () => {
          var _a5, _b2;
          e.icon ? w(ssrRenderComponent(ae, { name: e.icon, "data-slot": "icon", class: h.value.icon({ class: (_a5 = a.ui) == null ? void 0 : _a5.icon }) }, null, T, N)) : w(`<span data-slot="fallback" class="${ssrRenderClass(h.value.fallback({ class: (_b2 = a.ui) == null ? void 0 : _b2.fallback }))}"${N}>${ssrInterpolate(d.value || "\xA0")}</span>`);
        }, w, T, N);
        else return [renderSlot(f.$slots, "default", {}, () => {
          var _a5, _b2;
          return [e.icon ? (openBlock(), createBlock(ae, { key: 0, name: e.icon, "data-slot": "icon", class: h.value.icon({ class: (_a5 = a.ui) == null ? void 0 : _a5.icon }) }, null, 8, ["name", "class"])) : (openBlock(), createBlock("span", { key: 1, "data-slot": "fallback", class: h.value.fallback({ class: (_b2 = a.ui) == null ? void 0 : _b2.fallback }) }, toDisplayString(d.value || "\xA0"), 3))];
        })];
      }), _: 3 }, D, R));
      else return [e.src && !S.value ? (openBlock(), createBlock(resolveDynamicComponent(t.value.img || unref(jt)), mergeProps({ key: 0, src: e.src, alt: e.alt, width: k.value, height: k.value }, f.$attrs, { "data-slot": "image", class: h.value.image({ class: (_b = a.ui) == null ? void 0 : _b.image }), onError: g }), null, 16, ["src", "alt", "width", "height", "class"])) : (openBlock(), createBlock(unref(Slot), mergeProps({ key: 1 }, f.$attrs), { default: withCtx(() => [renderSlot(f.$slots, "default", {}, () => {
        var _a5, _b2;
        return [e.icon ? (openBlock(), createBlock(ae, { key: 0, name: e.icon, "data-slot": "icon", class: h.value.icon({ class: (_a5 = a.ui) == null ? void 0 : _a5.icon }) }, null, 8, ["name", "class"])) : (openBlock(), createBlock("span", { key: 1, "data-slot": "fallback", class: h.value.fallback({ class: (_b2 = a.ui) == null ? void 0 : _b2.fallback }) }, toDisplayString(d.value || "\xA0"), 3))];
      })]), _: 3 }, 16))];
    }), _: 3 }), c);
  };
} }), At = be.setup;
be.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue"), At ? At(e, a) : void 0;
};
function Qa(e) {
  const a = ke$1(), t = computed(() => toValue(e)), d = computed(() => t.value.icon && t.value.leading || t.value.icon && !t.value.trailing || t.value.loading && !t.value.trailing || !!t.value.leadingIcon), s = computed(() => t.value.icon && t.value.trailing || t.value.loading && t.value.trailing || !!t.value.trailingIcon), b = computed(() => t.value.loading ? t.value.loadingIcon || a.ui.icons.loading : t.value.leadingIcon || t.value.icon), h = computed(() => t.value.loading && !d.value ? t.value.loadingIcon || a.ui.icons.loading : t.value.trailingIcon || t.value.icon);
  return { isLeading: d, isTrailing: s, leadingIconName: b, trailingIconName: h };
}
const Ya = /* @__PURE__ */ Symbol("nuxt-ui.field-group");
function Xa(e) {
  const a = inject(Ya, void 0);
  return { orientation: computed(() => a == null ? void 0 : a.value.orientation), size: computed(() => {
    var _a3;
    return (_a3 = e == null ? void 0 : e.size) != null ? _a3 : a == null ? void 0 : a.value.size;
  }) };
}
const Za = /* @__PURE__ */ Symbol("nuxt-ui.form-options"), Ja = /* @__PURE__ */ Symbol("nuxt-ui.form-events"), Pt = /* @__PURE__ */ Symbol("nuxt-ui.form-field"), Ia = /* @__PURE__ */ Symbol("nuxt-ui.input-id"), _a = /* @__PURE__ */ Symbol("nuxt-ui.form-loading");
function Wl(e, a) {
  var _a3, _b;
  const t = inject(Za, void 0), d = inject(Ja, void 0), s = inject(Pt, void 0), b = inject(Ia, void 0);
  provide(Pt, void 0), s && b && ((a == null ? void 0 : a.bind) === false ? b.value = void 0 : (e == null ? void 0 : e.id) && (b.value = e == null ? void 0 : e.id));
  function h(i, c, $) {
    d && s && c && d.emit({ type: i, name: c, eager: $ });
  }
  function k() {
    h("blur", s == null ? void 0 : s.value.name);
  }
  function S() {
    h("focus", s == null ? void 0 : s.value.name);
  }
  function g() {
    h("change", s == null ? void 0 : s.value.name);
  }
  const f = useDebounceFn(() => {
    h("input", s == null ? void 0 : s.value.name, !(a == null ? void 0 : a.deferInputValidation) || (s == null ? void 0 : s.value.eagerValidation));
  }, (_b = (_a3 = s == null ? void 0 : s.value.validateOnInputDelay) != null ? _a3 : t == null ? void 0 : t.value.validateOnInputDelay) != null ? _b : 0);
  return { id: computed(() => {
    var _a4;
    return (_a4 = e == null ? void 0 : e.id) != null ? _a4 : b == null ? void 0 : b.value;
  }), name: computed(() => {
    var _a4;
    return (_a4 = e == null ? void 0 : e.name) != null ? _a4 : s == null ? void 0 : s.value.name;
  }), size: computed(() => {
    var _a4;
    return (_a4 = e == null ? void 0 : e.size) != null ? _a4 : s == null ? void 0 : s.value.size;
  }), color: computed(() => (s == null ? void 0 : s.value.error) ? "error" : e == null ? void 0 : e.color), highlight: computed(() => (s == null ? void 0 : s.value.error) ? true : e == null ? void 0 : e.highlight), disabled: computed(() => (t == null ? void 0 : t.value.disabled) || (e == null ? void 0 : e.disabled)), emitFormBlur: k, emitFormInput: f, emitFormChange: g, emitFormFocus: S, ariaAttrs: computed(() => {
    if (!(s == null ? void 0 : s.value)) return;
    const i = ["error", "hint", "description", "help"].filter(($) => {
      var _a4;
      return (_a4 = s == null ? void 0 : s.value) == null ? void 0 : _a4[$];
    }).map(($) => `${s == null ? void 0 : s.value.ariaId}-${$}`) || [], c = { "aria-invalid": !!(s == null ? void 0 : s.value.error) };
    return i.length > 0 && (c["aria-describedby"] = i.join(" ")), c;
  }) };
}
const el = ["active", "activeClass", "ariaCurrentValue", "as", "disabled", "download", "exact", "exactActiveClass", "exactHash", "exactQuery", "external", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "href", "hreflang", "inactiveClass", "media", "noPrefetch", "noRel", "onClick", "ping", "prefetch", "prefetchOn", "prefetchedClass", "referrerpolicy", "rel", "replace", "target", "title", "to", "trailingSlash", "type", "viewTransition"];
function tl(e) {
  const a = Object.keys(e), t = a.filter((b) => b.startsWith("aria-")), d = a.filter((b) => b.startsWith("data-")), s = [...el, ...t, ...d];
  return reactivePick(e, ...s);
}
function al(e, a) {
  const t = diff(e, a).reduce((b, h) => (h.type === "added" && b.add(h.key), b), /* @__PURE__ */ new Set()), d = Object.fromEntries(Object.entries(e).filter(([b]) => !t.has(b))), s = Object.fromEntries(Object.entries(a).filter(([b]) => !t.has(b)));
  return isEqual(d, s);
}
const ke = { __name: "ULinkBase", __ssrInlineRender: true, props: { as: { type: String, required: false, default: "button" }, type: { type: String, required: false, default: "button" }, disabled: { type: Boolean, required: false }, onClick: { type: [Function, Array], required: false }, href: { type: String, required: false }, navigate: { type: Function, required: false }, target: { type: [String, Object, null], required: false }, rel: { type: [String, Object, null], required: false }, active: { type: Boolean, required: false }, isExternal: { type: Boolean, required: false } }, setup(e) {
  const a = e;
  function t(d) {
    if (a.disabled) {
      d.stopPropagation(), d.preventDefault();
      return;
    }
    if (a.onClick) for (const s of Array.isArray(a.onClick) ? a.onClick : [a.onClick]) s(d);
    a.href && a.navigate && !a.isExternal && a.navigate(d);
  }
  return (d, s, b, h) => {
    s(ssrRenderComponent(unref(Primitive), mergeProps(e.href ? { as: "a", href: e.disabled ? void 0 : e.href, "aria-disabled": e.disabled ? "true" : void 0, role: e.disabled ? "link" : void 0, tabindex: e.disabled ? -1 : void 0 } : e.as === "button" ? { as: e.as, type: e.type, disabled: e.disabled } : { as: e.as }, { rel: e.rel, target: e.target, onClick: t }, h), { default: withCtx((k, S, g, f) => {
      if (S) ssrRenderSlot(d.$slots, "default", {}, null, S, g, f);
      else return [renderSlot(d.$slots, "default")];
    }), _: 3 }, b));
  };
} }, Tt = ke.setup;
ke.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue"), Tt ? Tt(e, a) : void 0;
};
const ll = { base: "focus-visible:outline-primary", variants: { active: { true: "text-primary", false: "text-muted" }, disabled: { true: "cursor-not-allowed opacity-75" } }, compoundVariants: [{ active: false, disabled: false, class: ["hover:text-default", "transition-colors"] }] }, Be = Object.assign({ inheritAttrs: false }, { __name: "ULink", __ssrInlineRender: true, props: { as: { type: null, required: false, default: "button" }, type: { type: null, required: false, default: "button" }, disabled: { type: Boolean, required: false }, active: { type: Boolean, required: false, default: void 0 }, exact: { type: Boolean, required: false }, exactQuery: { type: [Boolean, String], required: false }, exactHash: { type: Boolean, required: false }, inactiveClass: { type: String, required: false }, custom: { type: Boolean, required: false }, raw: { type: Boolean, required: false }, class: { type: null, required: false }, to: { type: null, required: false }, href: { type: null, required: false }, external: { type: Boolean, required: false }, target: { type: [String, Object, null], required: false }, rel: { type: [String, Object, null], required: false }, noRel: { type: Boolean, required: false }, prefetchedClass: { type: String, required: false }, prefetch: { type: Boolean, required: false }, prefetchOn: { type: [String, Object], required: false }, noPrefetch: { type: Boolean, required: false }, trailingSlash: { type: String, required: false }, activeClass: { type: String, required: false }, exactActiveClass: { type: String, required: false }, ariaCurrentValue: { type: String, required: false, default: "page" }, viewTransition: { type: Boolean, required: false }, replace: { type: Boolean, required: false } }, setup(e) {
  const a = e, t = J(), d = ke$1(), s = useForwardProps(reactiveOmit(a, "as", "type", "disabled", "active", "exact", "exactQuery", "exactHash", "activeClass", "inactiveClass", "to", "href", "raw", "custom", "class")), b = computed(() => {
    var _a3, _b, _c, _d, _e2, _f, _g, _h, _i;
    return G({ extend: G(ll), ...defu({ variants: { active: { true: Ue((_d = (_c = (_b = (_a3 = d.ui) == null ? void 0 : _a3.link) == null ? void 0 : _b.variants) == null ? void 0 : _c.active) == null ? void 0 : _d.true, a.activeClass), false: Ue((_h = (_g = (_f = (_e2 = d.ui) == null ? void 0 : _e2.link) == null ? void 0 : _f.variants) == null ? void 0 : _g.active) == null ? void 0 : _h.false, a.inactiveClass) } } }, ((_i = d.ui) == null ? void 0 : _i.link) || {}) });
  }), h = computed(() => {
    var _a3;
    return (_a3 = a.to) != null ? _a3 : a.href;
  });
  function k({ route: g, isActive: f, isExactActive: i }) {
    if (a.active !== void 0) return a.active;
    if (a.exactQuery === "partial") {
      if (!al(g.query, t.query)) return false;
    } else if (a.exactQuery === true && !isEqual(g.query, t.query)) return false;
    return a.exactHash && g.hash !== t.hash ? false : !!(a.exact && i || !a.exact && f);
  }
  function S({ route: g, isActive: f, isExactActive: i }) {
    const c = k({ route: g, isActive: f, isExactActive: i });
    return a.raw ? [a.class, c ? a.activeClass : a.inactiveClass] : b.value({ class: a.class, active: c, disabled: a.disabled });
  }
  return (g, f, i, c) => {
    f(ssrRenderComponent(W, mergeProps(unref(s), { to: h.value, custom: "" }, c), { default: withCtx(({ href: v, navigate: C, route: D, rel: R, target: P, isExternal: w, isActive: T, isExactActive: N }, M, z, y) => {
      if (M) e.custom ? ssrRenderSlot(g.$slots, "default", { ...g.$attrs, ...e.exact && N ? { "aria-current": a.ariaCurrentValue } : {}, as: e.as, type: e.type, disabled: e.disabled, href: v, navigate: C, rel: R, target: P, isExternal: w, active: k({ route: D, isActive: T, isExactActive: N }) }, null, M, z, y) : M(ssrRenderComponent(ke, mergeProps({ ...g.$attrs, ...e.exact && N ? { "aria-current": a.ariaCurrentValue } : {}, as: e.as, type: e.type, disabled: e.disabled, href: v, navigate: C, rel: R, target: P, isExternal: w }, { class: S({ route: D, isActive: T, isExactActive: N }) }), { default: withCtx((B, j, U, q) => {
        if (j) ssrRenderSlot(g.$slots, "default", { active: k({ route: D, isActive: T, isExactActive: N }) }, null, j, U, q);
        else return [renderSlot(g.$slots, "default", { active: k({ route: D, isActive: T, isExactActive: N }) })];
      }), _: 2 }, z, y));
      else return [e.custom ? renderSlot(g.$slots, "default", mergeProps({ key: 0 }, { ...g.$attrs, ...e.exact && N ? { "aria-current": a.ariaCurrentValue } : {}, as: e.as, type: e.type, disabled: e.disabled, href: v, navigate: C, rel: R, target: P, isExternal: w, active: k({ route: D, isActive: T, isExactActive: N }) })) : (openBlock(), createBlock(ke, mergeProps({ key: 1 }, { ...g.$attrs, ...e.exact && N ? { "aria-current": a.ariaCurrentValue } : {}, as: e.as, type: e.type, disabled: e.disabled, href: v, navigate: C, rel: R, target: P, isExternal: w }, { class: S({ route: D, isActive: T, isExactActive: N }) }), { default: withCtx(() => [renderSlot(g.$slots, "default", { active: k({ route: D, isActive: T, isExactActive: N }) })]), _: 2 }, 1040, ["class"]))];
    }), _: 3 }, i));
  };
} }), Ft = Be.setup;
Be.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue"), Ft ? Ft(e, a) : void 0;
};
const sl = { slots: { base: ["rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75", "transition-colors"], label: "truncate", leadingIcon: "shrink-0", leadingAvatar: "shrink-0", leadingAvatarSize: "", trailingIcon: "shrink-0" }, variants: { fieldGroup: { horizontal: "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]", vertical: "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]" }, color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, variant: { solid: "", outline: "", soft: "", subtle: "", ghost: "", link: "" }, size: { xs: { base: "px-2 py-1 text-xs gap-1", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4" }, sm: { base: "px-2.5 py-1.5 text-xs gap-1.5", leadingIcon: "size-4", leadingAvatarSize: "3xs", trailingIcon: "size-4" }, md: { base: "px-2.5 py-1.5 text-sm gap-1.5", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5" }, lg: { base: "px-3 py-2 text-sm gap-2", leadingIcon: "size-5", leadingAvatarSize: "2xs", trailingIcon: "size-5" }, xl: { base: "px-3 py-2 text-base gap-2", leadingIcon: "size-6", leadingAvatarSize: "xs", trailingIcon: "size-6" } }, block: { true: { base: "w-full justify-center", trailingIcon: "ms-auto" } }, square: { true: "" }, leading: { true: "" }, trailing: { true: "" }, loading: { true: "" }, active: { true: { base: "" }, false: { base: "" } } }, compoundVariants: [{ color: "primary", variant: "solid", class: "text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" }, { color: "secondary", variant: "solid", class: "text-inverted bg-secondary hover:bg-secondary/75 active:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary" }, { color: "success", variant: "solid", class: "text-inverted bg-success hover:bg-success/75 active:bg-success/75 disabled:bg-success aria-disabled:bg-success focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success" }, { color: "info", variant: "solid", class: "text-inverted bg-info hover:bg-info/75 active:bg-info/75 disabled:bg-info aria-disabled:bg-info focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info" }, { color: "warning", variant: "solid", class: "text-inverted bg-warning hover:bg-warning/75 active:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning" }, { color: "error", variant: "solid", class: "text-inverted bg-error hover:bg-error/75 active:bg-error/75 disabled:bg-error aria-disabled:bg-error focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error" }, { color: "primary", variant: "outline", class: "ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" }, { color: "secondary", variant: "outline", class: "ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary" }, { color: "success", variant: "outline", class: "ring ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-success" }, { color: "info", variant: "outline", class: "ring ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-info" }, { color: "warning", variant: "outline", class: "ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-warning" }, { color: "error", variant: "outline", class: "ring ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-error" }, { color: "primary", variant: "soft", class: "text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 focus:outline-none focus-visible:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10" }, { color: "secondary", variant: "soft", class: "text-secondary bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 focus:outline-none focus-visible:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10" }, { color: "success", variant: "soft", class: "text-success bg-success/10 hover:bg-success/15 active:bg-success/15 focus:outline-none focus-visible:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10" }, { color: "info", variant: "soft", class: "text-info bg-info/10 hover:bg-info/15 active:bg-info/15 focus:outline-none focus-visible:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10" }, { color: "warning", variant: "soft", class: "text-warning bg-warning/10 hover:bg-warning/15 active:bg-warning/15 focus:outline-none focus-visible:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10" }, { color: "error", variant: "soft", class: "text-error bg-error/10 hover:bg-error/15 active:bg-error/15 focus:outline-none focus-visible:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10" }, { color: "primary", variant: "subtle", class: "text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" }, { color: "secondary", variant: "subtle", class: "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary" }, { color: "success", variant: "subtle", class: "text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 active:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-success" }, { color: "info", variant: "subtle", class: "text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-info" }, { color: "warning", variant: "subtle", class: "text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 active:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-warning" }, { color: "error", variant: "subtle", class: "text-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 active:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-error" }, { color: "primary", variant: "ghost", class: "text-primary hover:bg-primary/10 active:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent" }, { color: "secondary", variant: "ghost", class: "text-secondary hover:bg-secondary/10 active:bg-secondary/10 focus:outline-none focus-visible:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent" }, { color: "success", variant: "ghost", class: "text-success hover:bg-success/10 active:bg-success/10 focus:outline-none focus-visible:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent" }, { color: "info", variant: "ghost", class: "text-info hover:bg-info/10 active:bg-info/10 focus:outline-none focus-visible:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent" }, { color: "warning", variant: "ghost", class: "text-warning hover:bg-warning/10 active:bg-warning/10 focus:outline-none focus-visible:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent" }, { color: "error", variant: "ghost", class: "text-error hover:bg-error/10 active:bg-error/10 focus:outline-none focus-visible:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent" }, { color: "primary", variant: "link", class: "text-primary hover:text-primary/75 active:text-primary/75 disabled:text-primary aria-disabled:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" }, { color: "secondary", variant: "link", class: "text-secondary hover:text-secondary/75 active:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary" }, { color: "success", variant: "link", class: "text-success hover:text-success/75 active:text-success/75 disabled:text-success aria-disabled:text-success focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success" }, { color: "info", variant: "link", class: "text-info hover:text-info/75 active:text-info/75 disabled:text-info aria-disabled:text-info focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info" }, { color: "warning", variant: "link", class: "text-warning hover:text-warning/75 active:text-warning/75 disabled:text-warning aria-disabled:text-warning focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning" }, { color: "error", variant: "link", class: "text-error hover:text-error/75 active:text-error/75 disabled:text-error aria-disabled:text-error focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error" }, { color: "neutral", variant: "solid", class: "text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted" }, { color: "neutral", variant: "outline", class: "ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted" }, { color: "neutral", variant: "soft", class: "text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 focus:outline-none focus-visible:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated" }, { color: "neutral", variant: "subtle", class: "ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted" }, { color: "neutral", variant: "ghost", class: "text-default hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent" }, { color: "neutral", variant: "link", class: "text-muted hover:text-default active:text-default disabled:text-muted aria-disabled:text-muted focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-inverted" }, { size: "xs", square: true, class: "p-1" }, { size: "sm", square: true, class: "p-1.5" }, { size: "md", square: true, class: "p-1.5" }, { size: "lg", square: true, class: "p-2" }, { size: "xl", square: true, class: "p-2" }, { loading: true, leading: true, class: { leadingIcon: "animate-spin" } }, { loading: true, leading: false, trailing: true, class: { trailingIcon: "animate-spin" } }], defaultVariants: { color: "primary", variant: "solid", size: "md" } }, Q = { __name: "UButton", __ssrInlineRender: true, props: { label: { type: String, required: false }, color: { type: null, required: false }, activeColor: { type: null, required: false }, variant: { type: null, required: false }, activeVariant: { type: null, required: false }, size: { type: null, required: false }, square: { type: Boolean, required: false }, block: { type: Boolean, required: false }, loadingAuto: { type: Boolean, required: false }, onClick: { type: [Function, Array], required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, icon: { type: null, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: null, required: false }, trailing: { type: Boolean, required: false }, trailingIcon: { type: null, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false }, as: { type: null, required: false }, type: { type: null, required: false }, disabled: { type: Boolean, required: false }, active: { type: Boolean, required: false }, exact: { type: Boolean, required: false }, exactQuery: { type: [Boolean, String], required: false }, exactHash: { type: Boolean, required: false }, inactiveClass: { type: String, required: false }, to: { type: null, required: false }, href: { type: null, required: false }, external: { type: Boolean, required: false }, target: { type: [String, Object, null], required: false }, rel: { type: [String, Object, null], required: false }, noRel: { type: Boolean, required: false }, prefetchedClass: { type: String, required: false }, prefetch: { type: Boolean, required: false }, prefetchOn: { type: [String, Object], required: false }, noPrefetch: { type: Boolean, required: false }, trailingSlash: { type: String, required: false }, activeClass: { type: String, required: false }, exactActiveClass: { type: String, required: false }, ariaCurrentValue: { type: String, required: false }, viewTransition: { type: Boolean, required: false }, replace: { type: Boolean, required: false } }, setup(e) {
  const a = e, t = useSlots(), d = ke$1(), { orientation: s, size: b } = Xa(a), h = useForwardProps(tl(a)), k = ref(false), S = inject(_a, void 0);
  async function g(D) {
    k.value = true;
    const R = Array.isArray(a.onClick) ? a.onClick : [a.onClick];
    try {
      await Promise.all(R.map((P) => P == null ? void 0 : P(D)));
    } finally {
      k.value = false;
    }
  }
  const f = computed(() => a.loading || a.loadingAuto && (k.value || (S == null ? void 0 : S.value) && a.type === "submit")), { isLeading: i, isTrailing: c, leadingIconName: $, trailingIconName: v } = Qa(computed(() => ({ ...a, loading: f.value }))), C = computed(() => {
    var _a3, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
    return G({ extend: G(sl), ...defu({ variants: { active: { true: { base: Ue((_e2 = (_d = (_c = (_b = (_a3 = d.ui) == null ? void 0 : _a3.button) == null ? void 0 : _b.variants) == null ? void 0 : _c.active) == null ? void 0 : _d.true) == null ? void 0 : _e2.base, a.activeClass) }, false: { base: Ue((_j = (_i = (_h = (_g = (_f = d.ui) == null ? void 0 : _f.button) == null ? void 0 : _g.variants) == null ? void 0 : _h.active) == null ? void 0 : _i.false) == null ? void 0 : _j.base, a.inactiveClass) } } } }, ((_k = d.ui) == null ? void 0 : _k.button) || {}) })({ color: a.color, variant: a.variant, size: b.value, loading: f.value, block: a.block, square: a.square || !t.default && !a.label, leading: i.value, trailing: c.value, fieldGroup: s.value });
  });
  return (D, R, P, w) => {
    R(ssrRenderComponent(Be, mergeProps({ type: e.type, disabled: e.disabled || f.value }, unref(_e)(unref(h), ["type", "disabled", "onClick"]), { custom: "" }, w), { default: withCtx(({ active: T, ...N }, M, z, y) => {
      var _a3, _b;
      if (M) M(ssrRenderComponent(ke, mergeProps(N, { "data-slot": "base", class: C.value.base({ class: [(_a3 = a.ui) == null ? void 0 : _a3.base, a.class], active: T, ...T && e.activeVariant ? { variant: e.activeVariant } : {}, ...T && e.activeColor ? { color: e.activeColor } : {} }), onClick: g }), { default: withCtx((B, j, U, q) => {
        if (j) ssrRenderSlot(D.$slots, "leading", { ui: C.value }, () => {
          var _a4, _b2, _c;
          unref(i) && unref($) ? j(ssrRenderComponent(ae, { name: unref($), "data-slot": "leadingIcon", class: C.value.leadingIcon({ class: (_a4 = a.ui) == null ? void 0 : _a4.leadingIcon, active: T }) }, null, U, q)) : e.avatar ? j(ssrRenderComponent(be, mergeProps({ size: ((_b2 = a.ui) == null ? void 0 : _b2.leadingAvatarSize) || C.value.leadingAvatarSize() }, e.avatar, { "data-slot": "leadingAvatar", class: C.value.leadingAvatar({ class: (_c = a.ui) == null ? void 0 : _c.leadingAvatar, active: T }) }), null, U, q)) : j("<!---->");
        }, j, U, q), ssrRenderSlot(D.$slots, "default", { ui: C.value }, () => {
          var _a4;
          e.label !== void 0 && e.label !== null ? j(`<span data-slot="label" class="${ssrRenderClass(C.value.label({ class: (_a4 = a.ui) == null ? void 0 : _a4.label, active: T }))}"${q}>${ssrInterpolate(e.label)}</span>`) : j("<!---->");
        }, j, U, q), ssrRenderSlot(D.$slots, "trailing", { ui: C.value }, () => {
          var _a4;
          unref(c) && unref(v) ? j(ssrRenderComponent(ae, { name: unref(v), "data-slot": "trailingIcon", class: C.value.trailingIcon({ class: (_a4 = a.ui) == null ? void 0 : _a4.trailingIcon, active: T }) }, null, U, q)) : j("<!---->");
        }, j, U, q);
        else return [renderSlot(D.$slots, "leading", { ui: C.value }, () => {
          var _a4, _b2, _c;
          return [unref(i) && unref($) ? (openBlock(), createBlock(ae, { key: 0, name: unref($), "data-slot": "leadingIcon", class: C.value.leadingIcon({ class: (_a4 = a.ui) == null ? void 0 : _a4.leadingIcon, active: T }) }, null, 8, ["name", "class"])) : e.avatar ? (openBlock(), createBlock(be, mergeProps({ key: 1, size: ((_b2 = a.ui) == null ? void 0 : _b2.leadingAvatarSize) || C.value.leadingAvatarSize() }, e.avatar, { "data-slot": "leadingAvatar", class: C.value.leadingAvatar({ class: (_c = a.ui) == null ? void 0 : _c.leadingAvatar, active: T }) }), null, 16, ["size", "class"])) : createCommentVNode("", true)];
        }), renderSlot(D.$slots, "default", { ui: C.value }, () => {
          var _a4;
          return [e.label !== void 0 && e.label !== null ? (openBlock(), createBlock("span", { key: 0, "data-slot": "label", class: C.value.label({ class: (_a4 = a.ui) == null ? void 0 : _a4.label, active: T }) }, toDisplayString(e.label), 3)) : createCommentVNode("", true)];
        }), renderSlot(D.$slots, "trailing", { ui: C.value }, () => {
          var _a4;
          return [unref(c) && unref(v) ? (openBlock(), createBlock(ae, { key: 0, name: unref(v), "data-slot": "trailingIcon", class: C.value.trailingIcon({ class: (_a4 = a.ui) == null ? void 0 : _a4.trailingIcon, active: T }) }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
        })];
      }), _: 2 }, z, y));
      else return [createVNode(ke, mergeProps(N, { "data-slot": "base", class: C.value.base({ class: [(_b = a.ui) == null ? void 0 : _b.base, a.class], active: T, ...T && e.activeVariant ? { variant: e.activeVariant } : {}, ...T && e.activeColor ? { color: e.activeColor } : {} }), onClick: g }), { default: withCtx(() => [renderSlot(D.$slots, "leading", { ui: C.value }, () => {
        var _a4, _b2, _c;
        return [unref(i) && unref($) ? (openBlock(), createBlock(ae, { key: 0, name: unref($), "data-slot": "leadingIcon", class: C.value.leadingIcon({ class: (_a4 = a.ui) == null ? void 0 : _a4.leadingIcon, active: T }) }, null, 8, ["name", "class"])) : e.avatar ? (openBlock(), createBlock(be, mergeProps({ key: 1, size: ((_b2 = a.ui) == null ? void 0 : _b2.leadingAvatarSize) || C.value.leadingAvatarSize() }, e.avatar, { "data-slot": "leadingAvatar", class: C.value.leadingAvatar({ class: (_c = a.ui) == null ? void 0 : _c.leadingAvatar, active: T }) }), null, 16, ["size", "class"])) : createCommentVNode("", true)];
      }), renderSlot(D.$slots, "default", { ui: C.value }, () => {
        var _a4;
        return [e.label !== void 0 && e.label !== null ? (openBlock(), createBlock("span", { key: 0, "data-slot": "label", class: C.value.label({ class: (_a4 = a.ui) == null ? void 0 : _a4.label, active: T }) }, toDisplayString(e.label), 3)) : createCommentVNode("", true)];
      }), renderSlot(D.$slots, "trailing", { ui: C.value }, () => {
        var _a4;
        return [unref(c) && unref(v) ? (openBlock(), createBlock(ae, { key: 0, name: unref(v), "data-slot": "trailingIcon", class: C.value.trailingIcon({ class: (_a4 = a.ui) == null ? void 0 : _a4.trailingIcon, active: T }) }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
      })]), _: 2 }, 1040, ["class"])];
    }), _: 3 }, P));
  };
} }, Dt = Q.setup;
Q.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue"), Dt ? Dt(e, a) : void 0;
};
const il = { slots: { root: "gap-2", base: "relative overflow-hidden rounded-full bg-accented", indicator: "rounded-full size-full transition-transform duration-200 ease-out", status: "flex text-dimmed transition-[width] duration-200", steps: "grid items-end", step: "truncate text-end row-start-1 col-start-1 transition-opacity" }, variants: { animation: { carousel: "", "carousel-inverse": "", swing: "", elastic: "" }, color: { primary: { indicator: "bg-primary", steps: "text-primary" }, secondary: { indicator: "bg-secondary", steps: "text-secondary" }, success: { indicator: "bg-success", steps: "text-success" }, info: { indicator: "bg-info", steps: "text-info" }, warning: { indicator: "bg-warning", steps: "text-warning" }, error: { indicator: "bg-error", steps: "text-error" }, neutral: { indicator: "bg-inverted", steps: "text-inverted" } }, size: { "2xs": { status: "text-xs", steps: "text-xs" }, xs: { status: "text-xs", steps: "text-xs" }, sm: { status: "text-sm", steps: "text-sm" }, md: { status: "text-sm", steps: "text-sm" }, lg: { status: "text-sm", steps: "text-sm" }, xl: { status: "text-base", steps: "text-base" }, "2xl": { status: "text-base", steps: "text-base" } }, step: { active: { step: "opacity-100" }, first: { step: "opacity-100 text-muted" }, other: { step: "opacity-0" }, last: { step: "" } }, orientation: { horizontal: { root: "w-full flex flex-col", base: "w-full", status: "flex-row items-center justify-end min-w-fit" }, vertical: { root: "h-full flex flex-row-reverse", base: "h-full", status: "flex-col justify-end min-h-fit" } }, inverted: { true: { status: "self-end" } } }, compoundVariants: [{ inverted: true, orientation: "horizontal", class: { step: "text-start", status: "flex-row-reverse" } }, { inverted: true, orientation: "vertical", class: { steps: "items-start", status: "flex-col-reverse" } }, { orientation: "horizontal", size: "2xs", class: "h-px" }, { orientation: "horizontal", size: "xs", class: "h-0.5" }, { orientation: "horizontal", size: "sm", class: "h-1" }, { orientation: "horizontal", size: "md", class: "h-2" }, { orientation: "horizontal", size: "lg", class: "h-3" }, { orientation: "horizontal", size: "xl", class: "h-4" }, { orientation: "horizontal", size: "2xl", class: "h-5" }, { orientation: "vertical", size: "2xs", class: "w-px" }, { orientation: "vertical", size: "xs", class: "w-0.5" }, { orientation: "vertical", size: "sm", class: "w-1" }, { orientation: "vertical", size: "md", class: "w-2" }, { orientation: "vertical", size: "lg", class: "w-3" }, { orientation: "vertical", size: "xl", class: "w-4" }, { orientation: "vertical", size: "2xl", class: "w-5" }, { orientation: "horizontal", animation: "carousel", class: { indicator: "data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]" } }, { orientation: "vertical", animation: "carousel", class: { indicator: "data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]" } }, { orientation: "horizontal", animation: "carousel-inverse", class: { indicator: "data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]" } }, { orientation: "vertical", animation: "carousel-inverse", class: { indicator: "data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]" } }, { orientation: "horizontal", animation: "swing", class: { indicator: "data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]" } }, { orientation: "vertical", animation: "swing", class: { indicator: "data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]" } }, { orientation: "horizontal", animation: "elastic", class: { indicator: "data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]" } }, { orientation: "vertical", animation: "elastic", class: { indicator: "data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]" } }], defaultVariants: { animation: "carousel", color: "primary", size: "md" } }, Ee = { __name: "UProgress", __ssrInlineRender: true, props: { as: { type: null, required: false }, max: { type: [Number, Array], required: false }, status: { type: Boolean, required: false }, inverted: { type: Boolean, required: false, default: false }, size: { type: null, required: false }, color: { type: null, required: false }, orientation: { type: null, required: false, default: "horizontal" }, animation: { type: null, required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, getValueLabel: { type: Function, required: false }, getValueText: { type: Function, required: false }, modelValue: { type: [Number, null], required: false, default: null } }, emits: ["update:modelValue", "update:max"], setup(e, { emit: a }) {
  const t = e, d = a, s = useSlots(), { dir: b } = Te(), h = ke$1(), k = useForwardPropsEmits(reactivePick(t, "getValueLabel", "getValueText", "modelValue"), d), S = computed(() => k.value.modelValue === null), g = computed(() => Array.isArray(t.max)), f = computed(() => {
    if (!(S.value || !t.max)) return Array.isArray(t.max) ? t.max.length - 1 : Number(t.max);
  }), i = computed(() => {
    var _a3, _b;
    if (!S.value) switch (true) {
      case k.value.modelValue < 0:
        return 0;
      case k.value.modelValue > ((_a3 = f.value) != null ? _a3 : 100):
        return 100;
      default:
        return Math.round(k.value.modelValue / ((_b = f.value) != null ? _b : 100) * 100);
    }
  }), c = computed(() => {
    if (i.value !== void 0) return t.orientation === "vertical" ? { transform: `translateY(${t.inverted ? "" : "-"}${100 - i.value}%)` } : b.value === "rtl" ? { transform: `translateX(${t.inverted ? "-" : ""}${100 - i.value}%)` } : { transform: `translateX(${t.inverted ? "" : "-"}${100 - i.value}%)` };
  }), $ = computed(() => {
    var _a3;
    const w = `${Math.max((_a3 = i.value) != null ? _a3 : 0, 0)}%`;
    return t.orientation === "vertical" ? { height: w } : { width: w };
  });
  function v(w) {
    return w === Number(t.modelValue);
  }
  function C(w) {
    return w === 0;
  }
  function D(w) {
    return w === f.value;
  }
  function R(w) {
    return w = Number(w), v(w) && !C(w) ? "active" : C(w) && v(w) ? "first" : D(w) && v(w) ? "last" : "other";
  }
  const P = computed(() => {
    var _a3;
    return G({ extend: G(il), ...((_a3 = h.ui) == null ? void 0 : _a3.progress) || {} })({ animation: t.animation, size: t.size, color: t.color, orientation: t.orientation, inverted: t.inverted });
  });
  return (w, T, N, M) => {
    var _a3;
    T(ssrRenderComponent(unref(Primitive), mergeProps({ as: e.as, "data-orientation": e.orientation, "data-slot": "root", class: P.value.root({ class: [(_a3 = t.ui) == null ? void 0 : _a3.root, t.class] }) }, M), { default: withCtx((z, y, B, j) => {
      var _a4, _b, _c, _d, _e2, _f;
      if (y) !S.value && (e.status || s.status) ? (y(`<div data-slot="status" class="${ssrRenderClass(P.value.status({ class: (_a4 = t.ui) == null ? void 0 : _a4.status }))}" style="${ssrRenderStyle($.value)}"${j}>`), ssrRenderSlot(w.$slots, "status", { percent: i.value }, () => {
        y(`${ssrInterpolate(i.value)}% `);
      }, y, B, j), y("</div>")) : y("<!---->"), y(ssrRenderComponent(unref(ProgressRoot), mergeProps(unref(k), { max: f.value, "data-slot": "base", class: P.value.base({ class: (_b = t.ui) == null ? void 0 : _b.base }), style: { transform: "translateZ(0)" } }), { default: withCtx((U, q, H, E) => {
        var _a5, _b2;
        if (q) q(ssrRenderComponent(unref(ProgressIndicator), { "data-slot": "indicator", class: P.value.indicator({ class: (_a5 = t.ui) == null ? void 0 : _a5.indicator }), style: c.value }, null, H, E));
        else return [createVNode(unref(ProgressIndicator), { "data-slot": "indicator", class: P.value.indicator({ class: (_b2 = t.ui) == null ? void 0 : _b2.indicator }), style: c.value }, null, 8, ["class", "style"])];
      }), _: 1 }, B, j)), g.value ? (y(`<div data-slot="steps" class="${ssrRenderClass(P.value.steps({ class: (_c = t.ui) == null ? void 0 : _c.steps }))}"${j}><!--[-->`), ssrRenderList(e.max, (U, q) => {
        var _a5;
        y(`<div data-slot="step" class="${ssrRenderClass(P.value.step({ class: (_a5 = t.ui) == null ? void 0 : _a5.step, step: R(q) }))}"${j}>`), ssrRenderSlot(w.$slots, `step-${q}`, { step: U }, () => {
          y(`${ssrInterpolate(U)}`);
        }, y, B, j), y("</div>");
      }), y("<!--]--></div>")) : y("<!---->");
      else return [!S.value && (e.status || s.status) ? (openBlock(), createBlock("div", { key: 0, "data-slot": "status", class: P.value.status({ class: (_d = t.ui) == null ? void 0 : _d.status }), style: $.value }, [renderSlot(w.$slots, "status", { percent: i.value }, () => [createTextVNode(toDisplayString(i.value) + "% ", 1)])], 6)) : createCommentVNode("", true), createVNode(unref(ProgressRoot), mergeProps(unref(k), { max: f.value, "data-slot": "base", class: P.value.base({ class: (_e2 = t.ui) == null ? void 0 : _e2.base }), style: { transform: "translateZ(0)" } }), { default: withCtx(() => {
        var _a5;
        return [createVNode(unref(ProgressIndicator), { "data-slot": "indicator", class: P.value.indicator({ class: (_a5 = t.ui) == null ? void 0 : _a5.indicator }), style: c.value }, null, 8, ["class", "style"])];
      }), _: 1 }, 16, ["max", "class"]), g.value ? (openBlock(), createBlock("div", { key: 1, "data-slot": "steps", class: P.value.steps({ class: (_f = t.ui) == null ? void 0 : _f.steps }) }, [(openBlock(true), createBlock(Fragment, null, renderList(e.max, (U, q) => {
        var _a5;
        return openBlock(), createBlock("div", { key: q, "data-slot": "step", class: P.value.step({ class: (_a5 = t.ui) == null ? void 0 : _a5.step, step: R(q) }) }, [renderSlot(w.$slots, `step-${q}`, { step: U }, () => [createTextVNode(toDisplayString(U), 1)])], 2);
      }), 128))], 2)) : createCommentVNode("", true)];
    }), _: 3 }, N));
  };
} }, Rt = Ee.setup;
Ee.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue"), Rt ? Rt(e, a) : void 0;
};
const nl = { slots: { root: "relative group overflow-hidden bg-default shadow-lg rounded-lg ring ring-default p-4 flex gap-2.5 focus:outline-none", wrapper: "w-0 flex-1 flex flex-col", title: "text-sm font-medium text-highlighted", description: "text-sm text-muted", icon: "shrink-0 size-5", avatar: "shrink-0", avatarSize: "2xl", actions: "flex gap-1.5 shrink-0", progress: "absolute inset-x-0 bottom-0", close: "p-0" }, variants: { color: { primary: { root: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary", icon: "text-primary" }, secondary: { root: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary", icon: "text-secondary" }, success: { root: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success", icon: "text-success" }, info: { root: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info", icon: "text-info" }, warning: { root: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning", icon: "text-warning" }, error: { root: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error", icon: "text-error" }, neutral: { root: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted", icon: "text-highlighted" } }, orientation: { horizontal: { root: "items-center", actions: "items-center" }, vertical: { root: "items-start", actions: "items-start mt-2.5" } }, title: { true: { description: "mt-1" } } }, defaultVariants: { color: "primary" } }, Ke = { __name: "UToast", __ssrInlineRender: true, props: { as: { type: null, required: false }, title: { type: [String, Object, Function], required: false }, description: { type: [String, Object, Function], required: false }, icon: { type: null, required: false }, avatar: { type: Object, required: false }, color: { type: null, required: false }, orientation: { type: null, required: false, default: "vertical" }, close: { type: [Boolean, Object], required: false, default: true }, closeIcon: { type: null, required: false }, actions: { type: Array, required: false }, progress: { type: [Boolean, Object], required: false, default: true }, class: { type: null, required: false }, ui: { type: null, required: false }, defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false }, type: { type: String, required: false }, duration: { type: Number, required: false } }, emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"], setup(e, { expose: a, emit: t }) {
  const d = e, s = t, b = useSlots(), { t: h } = Te(), k = ke$1(), S = useForwardPropsEmits(reactivePick(d, "as", "defaultOpen", "open", "duration", "type"), s), g = computed(() => {
    var _a3;
    return G({ extend: G(nl), ...((_a3 = k.ui) == null ? void 0 : _a3.toast) || {} })({ color: d.color, orientation: d.orientation, title: !!d.title || !!b.title });
  }), f = useTemplateRef("rootRef"), i = ref(0);
  return a({ height: i }), (c, $, v, C) => {
    var _a3;
    $(ssrRenderComponent(unref(ToastRoot), mergeProps({ ref_key: "rootRef", ref: f }, unref(S), { "data-orientation": e.orientation, "data-slot": "root", class: g.value.root({ class: [(_a3 = d.ui) == null ? void 0 : _a3.root, d.class] }), style: { "--height": i.value } }, C), { default: withCtx(({ remaining: D, duration: R, open: P }, w, T, N) => {
      var _a4, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      if (w) ssrRenderSlot(c.$slots, "leading", { ui: g.value }, () => {
        var _a5, _b2, _c2;
        e.avatar ? w(ssrRenderComponent(be, mergeProps({ size: ((_a5 = d.ui) == null ? void 0 : _a5.avatarSize) || g.value.avatarSize() }, e.avatar, { "data-slot": "avatar", class: g.value.avatar({ class: (_b2 = d.ui) == null ? void 0 : _b2.avatar }) }), null, T, N)) : e.icon ? w(ssrRenderComponent(ae, { name: e.icon, "data-slot": "icon", class: g.value.icon({ class: (_c2 = d.ui) == null ? void 0 : _c2.icon }) }, null, T, N)) : w("<!---->");
      }, w, T, N), w(`<div data-slot="wrapper" class="${ssrRenderClass(g.value.wrapper({ class: (_a4 = d.ui) == null ? void 0 : _a4.wrapper }))}"${N}>`), e.title || b.title ? w(ssrRenderComponent(unref(ToastTitle), { "data-slot": "title", class: g.value.title({ class: (_b = d.ui) == null ? void 0 : _b.title }) }, { default: withCtx((M, z, y, B) => {
        if (z) ssrRenderSlot(c.$slots, "title", {}, () => {
          typeof e.title == "function" ? ssrRenderVNode(z, createVNode(resolveDynamicComponent(e.title()), null, null), y, B) : typeof e.title == "object" ? ssrRenderVNode(z, createVNode(resolveDynamicComponent(e.title), null, null), y, B) : z(`<!--[-->${ssrInterpolate(e.title)}<!--]-->`);
        }, z, y, B);
        else return [renderSlot(c.$slots, "title", {}, () => [typeof e.title == "function" ? (openBlock(), createBlock(resolveDynamicComponent(e.title()), { key: 0 })) : typeof e.title == "object" ? (openBlock(), createBlock(resolveDynamicComponent(e.title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(e.title), 1)], 64))])];
      }), _: 2 }, T, N)) : w("<!---->"), e.description || b.description ? w(ssrRenderComponent(unref(ToastDescription), { "data-slot": "description", class: g.value.description({ class: (_c = d.ui) == null ? void 0 : _c.description }) }, { default: withCtx((M, z, y, B) => {
        if (z) ssrRenderSlot(c.$slots, "description", {}, () => {
          typeof e.description == "function" ? ssrRenderVNode(z, createVNode(resolveDynamicComponent(e.description()), null, null), y, B) : typeof e.description == "object" ? ssrRenderVNode(z, createVNode(resolveDynamicComponent(e.description), null, null), y, B) : z(`<!--[-->${ssrInterpolate(e.description)}<!--]-->`);
        }, z, y, B);
        else return [renderSlot(c.$slots, "description", {}, () => [typeof e.description == "function" ? (openBlock(), createBlock(resolveDynamicComponent(e.description()), { key: 0 })) : typeof e.description == "object" ? (openBlock(), createBlock(resolveDynamicComponent(e.description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(e.description), 1)], 64))])];
      }), _: 2 }, T, N)) : w("<!---->"), e.orientation === "vertical" && (((_d = e.actions) == null ? void 0 : _d.length) || b.actions) ? (w(`<div data-slot="actions" class="${ssrRenderClass(g.value.actions({ class: (_e2 = d.ui) == null ? void 0 : _e2.actions }))}"${N}>`), ssrRenderSlot(c.$slots, "actions", {}, () => {
        w("<!--[-->"), ssrRenderList(e.actions, (M, z) => {
          w(ssrRenderComponent(unref(ToastAction), { key: z, "alt-text": M.label || "Action", "as-child": "", onClick: () => {
          } }, { default: withCtx((y, B, j, U) => {
            if (B) B(ssrRenderComponent(Q, mergeProps({ size: "xs", color: e.color }, { ref_for: true }, M), null, j, U));
            else return [createVNode(Q, mergeProps({ size: "xs", color: e.color }, { ref_for: true }, M), null, 16, ["color"])];
          }), _: 2 }, T, N));
        }), w("<!--]-->");
      }, w, T, N), w("</div>")) : w("<!---->"), w("</div>"), e.orientation === "horizontal" && (((_f = e.actions) == null ? void 0 : _f.length) || b.actions) || e.close ? (w(`<div data-slot="actions" class="${ssrRenderClass(g.value.actions({ class: (_g = d.ui) == null ? void 0 : _g.actions, orientation: "horizontal" }))}"${N}>`), e.orientation === "horizontal" && (((_h = e.actions) == null ? void 0 : _h.length) || b.actions) ? ssrRenderSlot(c.$slots, "actions", {}, () => {
        w("<!--[-->"), ssrRenderList(e.actions, (M, z) => {
          w(ssrRenderComponent(unref(ToastAction), { key: z, "alt-text": M.label || "Action", "as-child": "", onClick: () => {
          } }, { default: withCtx((y, B, j, U) => {
            if (B) B(ssrRenderComponent(Q, mergeProps({ size: "xs", color: e.color }, { ref_for: true }, M), null, j, U));
            else return [createVNode(Q, mergeProps({ size: "xs", color: e.color }, { ref_for: true }, M), null, 16, ["color"])];
          }), _: 2 }, T, N));
        }), w("<!--]-->");
      }, w, T, N) : w("<!---->"), e.close || b.close ? w(ssrRenderComponent(unref(ToastClose), { "as-child": "" }, { default: withCtx((M, z, y, B) => {
        if (z) ssrRenderSlot(c.$slots, "close", { ui: g.value }, () => {
          var _a5;
          e.close ? z(ssrRenderComponent(Q, mergeProps({ icon: e.closeIcon || unref(k).ui.icons.close, color: "neutral", variant: "link", "aria-label": unref(h)("toast.close") }, typeof e.close == "object" ? e.close : {}, { "data-slot": "close", class: g.value.close({ class: (_a5 = d.ui) == null ? void 0 : _a5.close }), onClick: () => {
          } }), null, y, B)) : z("<!---->");
        }, z, y, B);
        else return [renderSlot(c.$slots, "close", { ui: g.value }, () => {
          var _a5;
          return [e.close ? (openBlock(), createBlock(Q, mergeProps({ key: 0, icon: e.closeIcon || unref(k).ui.icons.close, color: "neutral", variant: "link", "aria-label": unref(h)("toast.close") }, typeof e.close == "object" ? e.close : {}, { "data-slot": "close", class: g.value.close({ class: (_a5 = d.ui) == null ? void 0 : _a5.close }), onClick: withModifiers(() => {
          }, ["stop"]) }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)];
        })];
      }), _: 2 }, T, N)) : w("<!---->"), w("</div>")) : w("<!---->"), e.progress && P && D > 0 && R ? w(ssrRenderComponent(Ee, mergeProps({ "model-value": D / R * 100, color: e.color }, typeof e.progress == "object" ? e.progress : {}, { size: "sm", "data-slot": "progress", class: g.value.progress({ class: (_i = d.ui) == null ? void 0 : _i.progress }) }), null, T, N)) : w("<!---->");
      else return [renderSlot(c.$slots, "leading", { ui: g.value }, () => {
        var _a5, _b2, _c2;
        return [e.avatar ? (openBlock(), createBlock(be, mergeProps({ key: 0, size: ((_a5 = d.ui) == null ? void 0 : _a5.avatarSize) || g.value.avatarSize() }, e.avatar, { "data-slot": "avatar", class: g.value.avatar({ class: (_b2 = d.ui) == null ? void 0 : _b2.avatar }) }), null, 16, ["size", "class"])) : e.icon ? (openBlock(), createBlock(ae, { key: 1, name: e.icon, "data-slot": "icon", class: g.value.icon({ class: (_c2 = d.ui) == null ? void 0 : _c2.icon }) }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
      }), createVNode("div", { "data-slot": "wrapper", class: g.value.wrapper({ class: (_j = d.ui) == null ? void 0 : _j.wrapper }) }, [e.title || b.title ? (openBlock(), createBlock(unref(ToastTitle), { key: 0, "data-slot": "title", class: g.value.title({ class: (_k = d.ui) == null ? void 0 : _k.title }) }, { default: withCtx(() => [renderSlot(c.$slots, "title", {}, () => [typeof e.title == "function" ? (openBlock(), createBlock(resolveDynamicComponent(e.title()), { key: 0 })) : typeof e.title == "object" ? (openBlock(), createBlock(resolveDynamicComponent(e.title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(e.title), 1)], 64))])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), e.description || b.description ? (openBlock(), createBlock(unref(ToastDescription), { key: 1, "data-slot": "description", class: g.value.description({ class: (_l = d.ui) == null ? void 0 : _l.description }) }, { default: withCtx(() => [renderSlot(c.$slots, "description", {}, () => [typeof e.description == "function" ? (openBlock(), createBlock(resolveDynamicComponent(e.description()), { key: 0 })) : typeof e.description == "object" ? (openBlock(), createBlock(resolveDynamicComponent(e.description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(e.description), 1)], 64))])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), e.orientation === "vertical" && (((_m = e.actions) == null ? void 0 : _m.length) || b.actions) ? (openBlock(), createBlock("div", { key: 2, "data-slot": "actions", class: g.value.actions({ class: (_n = d.ui) == null ? void 0 : _n.actions }) }, [renderSlot(c.$slots, "actions", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(e.actions, (M, z) => (openBlock(), createBlock(unref(ToastAction), { key: z, "alt-text": M.label || "Action", "as-child": "", onClick: withModifiers(() => {
      }, ["stop"]) }, { default: withCtx(() => [createVNode(Q, mergeProps({ size: "xs", color: e.color }, { ref_for: true }, M), null, 16, ["color"])]), _: 2 }, 1032, ["alt-text", "onClick"]))), 128))])], 2)) : createCommentVNode("", true)], 2), e.orientation === "horizontal" && (((_o = e.actions) == null ? void 0 : _o.length) || b.actions) || e.close ? (openBlock(), createBlock("div", { key: 0, "data-slot": "actions", class: g.value.actions({ class: (_p = d.ui) == null ? void 0 : _p.actions, orientation: "horizontal" }) }, [e.orientation === "horizontal" && (((_q = e.actions) == null ? void 0 : _q.length) || b.actions) ? renderSlot(c.$slots, "actions", { key: 0 }, () => [(openBlock(true), createBlock(Fragment, null, renderList(e.actions, (M, z) => (openBlock(), createBlock(unref(ToastAction), { key: z, "alt-text": M.label || "Action", "as-child": "", onClick: withModifiers(() => {
      }, ["stop"]) }, { default: withCtx(() => [createVNode(Q, mergeProps({ size: "xs", color: e.color }, { ref_for: true }, M), null, 16, ["color"])]), _: 2 }, 1032, ["alt-text", "onClick"]))), 128))]) : createCommentVNode("", true), e.close || b.close ? (openBlock(), createBlock(unref(ToastClose), { key: 1, "as-child": "" }, { default: withCtx(() => [renderSlot(c.$slots, "close", { ui: g.value }, () => {
        var _a5;
        return [e.close ? (openBlock(), createBlock(Q, mergeProps({ key: 0, icon: e.closeIcon || unref(k).ui.icons.close, color: "neutral", variant: "link", "aria-label": unref(h)("toast.close") }, typeof e.close == "object" ? e.close : {}, { "data-slot": "close", class: g.value.close({ class: (_a5 = d.ui) == null ? void 0 : _a5.close }), onClick: withModifiers(() => {
        }, ["stop"]) }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)];
      })]), _: 3 })) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), e.progress && P && D > 0 && R ? (openBlock(), createBlock(Ee, mergeProps({ key: 1, "model-value": D / R * 100, color: e.color }, typeof e.progress == "object" ? e.progress : {}, { size: "sm", "data-slot": "progress", class: g.value.progress({ class: (_r = d.ui) == null ? void 0 : _r.progress }) }), null, 16, ["model-value", "color", "class"])) : createCommentVNode("", true)];
    }), _: 3 }, v));
  };
} }, Lt = Ke.setup;
Ke.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue"), Lt ? Lt(e, a) : void 0;
};
const ol = { slots: { viewport: "fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-(--height) focus:outline-none", base: "pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:opacity-0 data-[front=false]:*:transition-opacity data-[front=false]:*:duration-100 data-[state=closed]:animate-[toast-closed_200ms_ease-in-out] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_ease-in-out] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out" }, variants: { position: { "top-left": { viewport: "left-4" }, "top-center": { viewport: "left-1/2 transform -translate-x-1/2" }, "top-right": { viewport: "right-4" }, "bottom-left": { viewport: "left-4" }, "bottom-center": { viewport: "left-1/2 transform -translate-x-1/2" }, "bottom-right": { viewport: "right-4" } }, swipeDirection: { up: "data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]", right: "data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]", down: "data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]", left: "data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]" } }, compoundVariants: [{ position: ["top-left", "top-center", "top-right"], class: { viewport: "top-4", base: "top-0 data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out]" } }, { position: ["bottom-left", "bottom-center", "bottom-right"], class: { viewport: "bottom-4", base: "bottom-0 data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out]" } }, { swipeDirection: ["left", "right"], class: "data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0" }, { swipeDirection: ["up", "down"], class: "data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0" }], defaultVariants: { position: "bottom-right" } }, rl = { name: "Toaster" }, it = Object.assign(rl, { __ssrInlineRender: true, props: { position: { type: null, required: false }, expand: { type: Boolean, required: false, default: true }, progress: { type: Boolean, required: false, default: true }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, max: { type: Number, required: false, default: 5 }, class: { type: null, required: false }, ui: { type: null, required: false }, label: { type: String, required: false }, duration: { type: Number, required: false, default: 5e3 }, disableSwipe: { type: Boolean, required: false }, swipeThreshold: { type: Number, required: false } }, setup(e) {
  const a = e, { toasts: t, remove: d } = Ka(), s = ke$1();
  provide(ua, toRef(() => a.max));
  const b = useForwardProps(reactivePick(a, "duration", "label", "swipeThreshold", "disableSwipe")), h = We(toRef(() => a.portal)), k = computed(() => {
    switch (a.position) {
      case "top-center":
        return "up";
      case "top-right":
      case "bottom-right":
        return "right";
      case "bottom-center":
        return "down";
      case "top-left":
      case "bottom-left":
        return "left";
    }
    return "right";
  }), S = computed(() => {
    var _a3;
    return G({ extend: G(ol), ...((_a3 = s.ui) == null ? void 0 : _a3.toaster) || {} })({ position: a.position, swipeDirection: k.value });
  });
  function g(D, R) {
    D || d(R);
  }
  const f = ref(false), i = computed(() => a.expand || f.value), c = ref([]), $ = computed(() => c.value.reduce((D, { height: R }) => D + R + 16, 0)), v = computed(() => {
    var _a3;
    return ((_a3 = c.value[c.value.length - 1]) == null ? void 0 : _a3.height) || 0;
  });
  function C(D) {
    return c.value.slice(D + 1).reduce((R, { height: P }) => R + P + 16, 0);
  }
  return (D, R, P, w) => {
    R(ssrRenderComponent(unref(ToastProvider), mergeProps({ "swipe-direction": k.value }, unref(b), w), { default: withCtx((T, N, M, z) => {
      if (N) ssrRenderSlot(D.$slots, "default", {}, null, N, M, z), N("<!--[-->"), ssrRenderList(unref(t), (y, B) => {
        var _a3;
        N(ssrRenderComponent(Ke, mergeProps({ key: y.id, ref_for: true, ref_key: "refs", ref: c, progress: e.progress }, { ref_for: true }, unref(_e)(y, ["id", "close"]), { close: y.close, "data-expanded": i.value, "data-front": !i.value && B === unref(t).length - 1, style: { "--index": B - unref(t).length + unref(t).length, "--before": unref(t).length - 1 - B, "--offset": C(B), "--scale": i.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))", "--translate": i.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))", "--transform": "translateY(var(--translate)) scale(var(--scale))" }, "data-slot": "base", class: S.value.base({ class: [(_a3 = a.ui) == null ? void 0 : _a3.base, y.onClick ? "cursor-pointer" : void 0] }), "onUpdate:open": (j) => g(j, y.id), onClick: (j) => y.onClick && y.onClick(y) }), null, M, z));
      }), N("<!--]-->"), N(ssrRenderComponent(unref(ToastPortal), unref(h), { default: withCtx((y, B, j, U) => {
        var _a3, _b, _c, _d, _e2, _f;
        if (B) B(ssrRenderComponent(unref(ToastViewport), { "data-expanded": i.value, "data-slot": "viewport", class: S.value.viewport({ class: [(_a3 = a.ui) == null ? void 0 : _a3.viewport, a.class] }), style: { "--scale-factor": "0.05", "--translate-factor": ((_b = e.position) == null ? void 0 : _b.startsWith("top")) ? "1px" : "-1px", "--gap": ((_c = e.position) == null ? void 0 : _c.startsWith("top")) ? "16px" : "-16px", "--front-height": `${v.value}px`, "--height": `${$.value}px` }, onMouseenter: (q) => f.value = true, onMouseleave: (q) => f.value = false }, null, j, U));
        else return [createVNode(unref(ToastViewport), { "data-expanded": i.value, "data-slot": "viewport", class: S.value.viewport({ class: [(_d = a.ui) == null ? void 0 : _d.viewport, a.class] }), style: { "--scale-factor": "0.05", "--translate-factor": ((_e2 = e.position) == null ? void 0 : _e2.startsWith("top")) ? "1px" : "-1px", "--gap": ((_f = e.position) == null ? void 0 : _f.startsWith("top")) ? "16px" : "-16px", "--front-height": `${v.value}px`, "--height": `${$.value}px` }, onMouseenter: (q) => f.value = true, onMouseleave: (q) => f.value = false }, null, 8, ["data-expanded", "class", "style", "onMouseenter", "onMouseleave"])];
      }), _: 1 }, M, z));
      else return [renderSlot(D.$slots, "default"), (openBlock(true), createBlock(Fragment, null, renderList(unref(t), (y, B) => {
        var _a3;
        return openBlock(), createBlock(Ke, mergeProps({ key: y.id, ref_for: true, ref_key: "refs", ref: c, progress: e.progress }, { ref_for: true }, unref(_e)(y, ["id", "close"]), { close: y.close, "data-expanded": i.value, "data-front": !i.value && B === unref(t).length - 1, style: { "--index": B - unref(t).length + unref(t).length, "--before": unref(t).length - 1 - B, "--offset": C(B), "--scale": i.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))", "--translate": i.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))", "--transform": "translateY(var(--translate)) scale(var(--scale))" }, "data-slot": "base", class: S.value.base({ class: [(_a3 = a.ui) == null ? void 0 : _a3.base, y.onClick ? "cursor-pointer" : void 0] }), "onUpdate:open": (j) => g(j, y.id), onClick: (j) => y.onClick && y.onClick(y) }), null, 16, ["progress", "close", "data-expanded", "data-front", "style", "class", "onUpdate:open", "onClick"]);
      }), 128)), createVNode(unref(ToastPortal), unref(h), { default: withCtx(() => {
        var _a3, _b, _c;
        return [createVNode(unref(ToastViewport), { "data-expanded": i.value, "data-slot": "viewport", class: S.value.viewport({ class: [(_a3 = a.ui) == null ? void 0 : _a3.viewport, a.class] }), style: { "--scale-factor": "0.05", "--translate-factor": ((_b = e.position) == null ? void 0 : _b.startsWith("top")) ? "1px" : "-1px", "--gap": ((_c = e.position) == null ? void 0 : _c.startsWith("top")) ? "16px" : "-16px", "--front-height": `${v.value}px`, "--height": `${$.value}px` }, onMouseenter: (y) => f.value = true, onMouseleave: (y) => f.value = false }, null, 8, ["data-expanded", "class", "style", "onMouseenter", "onMouseleave"])];
      }), _: 1 }, 16)];
    }), _: 3 }, P));
  };
} }), Nt = it.setup;
it.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue"), Nt ? Nt(e, a) : void 0;
};
const Ie = Object.assign(it, { __name: "UToaster" });
function cl() {
  const e = shallowReactive([]), a = (g, f) => {
    const { props: i, defaultOpen: c, destroyOnClose: $ } = f || {}, v = reactive({ id: /* @__PURE__ */ Symbol(""), isOpen: !!c, component: markRaw(g), isMounted: !!c, destroyOnClose: !!$, originalProps: i || {}, props: { ...i } });
    return e.push(v), { ...v, open: (C) => t(v.id, C), close: (C) => d(v.id, C), patch: (C) => h(v.id, C) };
  }, t = (g, f) => {
    const i = k(g);
    f ? i.props = { ...i.originalProps, ...f } : i.props = { ...i.originalProps }, i.isOpen = true, i.isMounted = true;
    const c = new Promise(($) => i.resolvePromise = $);
    return Object.assign(c, { id: g, isMounted: i.isMounted, isOpen: i.isOpen, result: c });
  }, d = (g, f) => {
    const i = k(g);
    i.isOpen = false, i.resolvePromise && (i.resolvePromise(f), i.resolvePromise = void 0);
  }, s = () => {
    e.forEach((g) => d(g.id));
  }, b = (g) => {
    const f = k(g);
    if (f.isMounted = false, f.destroyOnClose) {
      const i = e.findIndex((c) => c.id === g);
      e.splice(i, 1);
    }
  }, h = (g, f) => {
    const i = k(g);
    i.props = { ...i.props, ...f };
  }, k = (g) => {
    const f = e.find((i) => i.id === g);
    if (!f) throw new Error("Overlay not found");
    return f;
  };
  return { overlays: e, open: t, close: d, closeAll: s, create: a, patch: h, unmount: b, isOpen: (g) => k(g).isOpen };
}
const ul = createSharedComposable(cl), ze = { __name: "UOverlayProvider", __ssrInlineRender: true, setup(e) {
  const { overlays: a, unmount: t, close: d } = ul(), s = computed(() => a.filter((k) => k.isMounted)), b = (k) => {
    d(k), t(k);
  }, h = (k, S) => {
    d(k, S);
  };
  return (k, S, g, f) => {
    S("<!--[-->"), ssrRenderList(s.value, (i) => {
      ssrRenderVNode(S, createVNode(resolveDynamicComponent(i.component), mergeProps({ key: i.id }, { ref_for: true }, i.props, { open: i.isOpen, "onUpdate:open": (c) => i.isOpen = c, onClose: (c) => h(i.id, c), "onAfter:leave": (c) => b(i.id) }), null), g);
    }), S("<!--]-->");
  };
} }, Vt = ze.setup;
ze.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue"), Vt ? Vt(e, a) : void 0;
};
const dl = { name: "App" }, nt = Object.assign(dl, { __ssrInlineRender: true, props: { tooltip: { type: Object, required: false }, toaster: { type: [Object, null], required: false }, locale: { type: Object, required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: "body" }, dir: { type: String, required: false }, scrollBody: { type: [Boolean, Object], required: false }, nonce: { type: String, required: false } }, setup(e) {
  const a = e, t = useForwardProps(reactivePick(a, "scrollBody")), d = toRef(() => a.tooltip), s = toRef(() => a.toaster), b = toRef(() => a.locale);
  provide(ra, b);
  const h = toRef(() => a.portal);
  return provide(ca, h), (k, S, g, f) => {
    var _a3, _b;
    S(ssrRenderComponent(unref(ConfigProvider), mergeProps({ "use-id": () => useId(), dir: a.dir || ((_a3 = b.value) == null ? void 0 : _a3.dir), locale: (_b = b.value) == null ? void 0 : _b.code }, unref(t), f), { default: withCtx((i, c, $, v) => {
      if (c) c(ssrRenderComponent(unref(TooltipProvider), d.value, { default: withCtx((C, D, R, P) => {
        if (D) e.toaster !== null ? D(ssrRenderComponent(Ie, s.value, { default: withCtx((w, T, N, M) => {
          if (T) ssrRenderSlot(k.$slots, "default", {}, null, T, N, M);
          else return [renderSlot(k.$slots, "default")];
        }), _: 3 }, R, P)) : ssrRenderSlot(k.$slots, "default", {}, null, D, R, P), D(ssrRenderComponent(ze, null, null, R, P));
        else return [e.toaster !== null ? (openBlock(), createBlock(Ie, mergeProps({ key: 0 }, s.value), { default: withCtx(() => [renderSlot(k.$slots, "default")]), _: 3 }, 16)) : renderSlot(k.$slots, "default", { key: 1 }), createVNode(ze)];
      }), _: 3 }, $, v));
      else return [createVNode(unref(TooltipProvider), d.value, { default: withCtx(() => [e.toaster !== null ? (openBlock(), createBlock(Ie, mergeProps({ key: 0 }, s.value), { default: withCtx(() => [renderSlot(k.$slots, "default")]), _: 3 }, 16)) : renderSlot(k.$slots, "default", { key: 1 }), createVNode(ze)]), _: 3 }, 16)];
    }), _: 3 }, g));
  };
} }), Mt = nt.setup;
nt.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/App.vue"), Mt ? Mt(e, a) : void 0;
};
const fl = Object.assign(nt, { __name: "UApp" }), vl = { base: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8" }, $e = { __name: "UContainer", __ssrInlineRender: true, props: { as: { type: null, required: false }, class: { type: null, required: false } }, setup(e) {
  const a = e, t = ke$1(), d = computed(() => {
    var _a3;
    return G({ extend: G(vl), ...((_a3 = t.ui) == null ? void 0 : _a3.container) || {} });
  });
  return (s, b, h, k) => {
    b(ssrRenderComponent(unref(Primitive), mergeProps({ as: e.as, class: d.value({ class: a.class }) }, k), { default: withCtx((S, g, f, i) => {
      if (g) ssrRenderSlot(s.$slots, "default", {}, null, g, f, i);
      else return [renderSlot(s.$slots, "default")];
    }), _: 3 }, h));
  };
} }, Ut = $e.setup;
$e.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue"), Ut ? Ut(e, a) : void 0;
};
const gl = { slots: { overlay: "fixed inset-0 bg-elevated/75", content: "fixed bg-default divide-y divide-default sm:ring ring-default sm:shadow-lg flex flex-col focus:outline-none", header: "flex items-center gap-1.5 p-4 sm:px-6 min-h-16", wrapper: "", body: "flex-1 overflow-y-auto p-4 sm:p-6", footer: "flex items-center gap-1.5 p-4 sm:px-6", title: "text-highlighted font-semibold", description: "mt-1 text-muted text-sm", close: "absolute top-4 end-4" }, variants: { side: { top: { content: "" }, right: { content: "max-w-md" }, bottom: { content: "" }, left: { content: "max-w-md" } }, inset: { true: { content: "rounded-lg" } }, transition: { true: { overlay: "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]" } } }, compoundVariants: [{ side: "top", inset: true, class: { content: "max-h-[calc(100%-2rem)] inset-x-4 top-4" } }, { side: "top", inset: false, class: { content: "max-h-full inset-x-0 top-0" } }, { side: "right", inset: true, class: { content: "w-[calc(100%-2rem)] inset-y-4 right-4" } }, { side: "right", inset: false, class: { content: "w-full inset-y-0 right-0" } }, { side: "bottom", inset: true, class: { content: "max-h-[calc(100%-2rem)] inset-x-4 bottom-4" } }, { side: "bottom", inset: false, class: { content: "max-h-full inset-x-0 bottom-0" } }, { side: "left", inset: true, class: { content: "w-[calc(100%-2rem)] inset-y-4 left-4" } }, { side: "left", inset: false, class: { content: "w-full inset-y-0 left-0" } }, { transition: true, side: "top", class: { content: "data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in-out]" } }, { transition: true, side: "right", class: { content: "data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]" } }, { transition: true, side: "bottom", class: { content: "data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in-out]" } }, { transition: true, side: "left", class: { content: "data-[state=open]:animate-[slide-in-from-left_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-left_200ms_ease-in-out]" } }] }, ot = { __name: "USlideover", __ssrInlineRender: true, props: { title: { type: String, required: false }, description: { type: String, required: false }, content: { type: Object, required: false }, overlay: { type: Boolean, required: false, default: true }, transition: { type: Boolean, required: false, default: true }, side: { type: null, required: false, default: "right" }, inset: { type: Boolean, required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, close: { type: [Boolean, Object], required: false, default: true }, closeIcon: { type: null, required: false }, dismissible: { type: Boolean, required: false, default: true }, class: { type: null, required: false }, ui: { type: null, required: false }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: ["after:leave", "after:enter", "close:prevent", "update:open"], setup(e, { emit: a }) {
  const t = e, d = a, s = useSlots(), { t: b } = Te(), h = ke$1(), k = useForwardPropsEmits(reactivePick(t, "open", "defaultOpen", "modal"), d), S = We(toRef(() => t.portal)), g = toRef(() => t.content), f = computed(() => t.dismissible ? {} : ["pointerDownOutside", "interactOutside", "escapeKeyDown"].reduce(($, v) => ($[v] = (C) => {
    C.preventDefault(), d("close:prevent");
  }, $), {})), i = computed(() => {
    var _a3;
    return G({ extend: G(gl), ...((_a3 = h.ui) == null ? void 0 : _a3.slideover) || {} })({ transition: t.transition, side: t.side, inset: t.inset });
  });
  return (c, $, v, C) => {
    $(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(k), C), { default: withCtx(({ open: D, close: R }, P, w, T) => {
      if (P) s.default ? P(ssrRenderComponent(unref(DialogTrigger), { "as-child": "", class: t.class }, { default: withCtx((N, M, z, y) => {
        if (M) ssrRenderSlot(c.$slots, "default", { open: D }, null, M, z, y);
        else return [renderSlot(c.$slots, "default", { open: D })];
      }), _: 2 }, w, T)) : P("<!---->"), P(ssrRenderComponent(unref(DialogPortal), unref(S), { default: withCtx((N, M, z, y) => {
        var _a3, _b, _c, _d;
        if (M) e.overlay ? M(ssrRenderComponent(unref(DialogOverlay), { "data-slot": "overlay", class: i.value.overlay({ class: (_a3 = t.ui) == null ? void 0 : _a3.overlay }) }, null, z, y)) : M("<!---->"), M(ssrRenderComponent(unref(DialogContent), mergeProps({ "data-side": e.side, "data-slot": "content", class: i.value.content({ class: [!s.default && t.class, (_b = t.ui) == null ? void 0 : _b.content] }) }, g.value, { onAfterEnter: (B) => d("after:enter"), onAfterLeave: (B) => d("after:leave") }, toHandlers(f.value)), { default: withCtx((B, j, U, q) => {
          if (j) s.content && (e.title || s.title || e.description || s.description) ? j(ssrRenderComponent(unref(VisuallyHidden), null, { default: withCtx((H, E, ee, K) => {
            if (E) e.title || s.title ? E(ssrRenderComponent(unref(DialogTitle), null, { default: withCtx((te, Z, Ce, oe) => {
              if (Z) ssrRenderSlot(c.$slots, "title", {}, () => {
                Z(`${ssrInterpolate(e.title)}`);
              }, Z, Ce, oe);
              else return [renderSlot(c.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])];
            }), _: 2 }, ee, K)) : E("<!---->"), e.description || s.description ? E(ssrRenderComponent(unref(DialogDescription), null, { default: withCtx((te, Z, Ce, oe) => {
              if (Z) ssrRenderSlot(c.$slots, "description", {}, () => {
                Z(`${ssrInterpolate(e.description)}`);
              }, Z, Ce, oe);
              else return [renderSlot(c.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])];
            }), _: 2 }, ee, K)) : E("<!---->");
            else return [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, { default: withCtx(() => [renderSlot(c.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, { default: withCtx(() => [renderSlot(c.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)];
          }), _: 2 }, U, q)) : j("<!---->"), ssrRenderSlot(c.$slots, "content", { close: R }, () => {
            var _a4, _b2, _c2;
            s.header || e.title || s.title || e.description || s.description || t.close || s.close ? (j(`<div data-slot="header" class="${ssrRenderClass(i.value.header({ class: (_a4 = t.ui) == null ? void 0 : _a4.header }))}"${q}>`), ssrRenderSlot(c.$slots, "header", { close: R }, () => {
              var _a5, _b3, _c3;
              j(`<div data-slot="wrapper" class="${ssrRenderClass(i.value.wrapper({ class: (_a5 = t.ui) == null ? void 0 : _a5.wrapper }))}"${q}>`), e.title || s.title ? j(ssrRenderComponent(unref(DialogTitle), { "data-slot": "title", class: i.value.title({ class: (_b3 = t.ui) == null ? void 0 : _b3.title }) }, { default: withCtx((H, E, ee, K) => {
                if (E) ssrRenderSlot(c.$slots, "title", {}, () => {
                  E(`${ssrInterpolate(e.title)}`);
                }, E, ee, K);
                else return [renderSlot(c.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])];
              }), _: 2 }, U, q)) : j("<!---->"), e.description || s.description ? j(ssrRenderComponent(unref(DialogDescription), { "data-slot": "description", class: i.value.description({ class: (_c3 = t.ui) == null ? void 0 : _c3.description }) }, { default: withCtx((H, E, ee, K) => {
                if (E) ssrRenderSlot(c.$slots, "description", {}, () => {
                  E(`${ssrInterpolate(e.description)}`);
                }, E, ee, K);
                else return [renderSlot(c.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])];
              }), _: 2 }, U, q)) : j("<!---->"), j("</div>"), ssrRenderSlot(c.$slots, "actions", {}, null, j, U, q), t.close || s.close ? j(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, { default: withCtx((H, E, ee, K) => {
                if (E) ssrRenderSlot(c.$slots, "close", { ui: i.value }, () => {
                  var _a6;
                  t.close ? E(ssrRenderComponent(Q, mergeProps({ icon: e.closeIcon || unref(h).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": unref(b)("slideover.close") }, typeof t.close == "object" ? t.close : {}, { "data-slot": "close", class: i.value.close({ class: (_a6 = t.ui) == null ? void 0 : _a6.close }) }), null, ee, K)) : E("<!---->");
                }, E, ee, K);
                else return [renderSlot(c.$slots, "close", { ui: i.value }, () => {
                  var _a6;
                  return [t.close ? (openBlock(), createBlock(Q, mergeProps({ key: 0, icon: e.closeIcon || unref(h).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": unref(b)("slideover.close") }, typeof t.close == "object" ? t.close : {}, { "data-slot": "close", class: i.value.close({ class: (_a6 = t.ui) == null ? void 0 : _a6.close }) }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)];
                })];
              }), _: 2 }, U, q)) : j("<!---->");
            }, j, U, q), j("</div>")) : j("<!---->"), j(`<div data-slot="body" class="${ssrRenderClass(i.value.body({ class: (_b2 = t.ui) == null ? void 0 : _b2.body }))}"${q}>`), ssrRenderSlot(c.$slots, "body", { close: R }, null, j, U, q), j("</div>"), s.footer ? (j(`<div data-slot="footer" class="${ssrRenderClass(i.value.footer({ class: (_c2 = t.ui) == null ? void 0 : _c2.footer }))}"${q}>`), ssrRenderSlot(c.$slots, "footer", { close: R }, null, j, U, q), j("</div>")) : j("<!---->");
          }, j, U, q);
          else return [s.content && (e.title || s.title || e.description || s.description) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, { default: withCtx(() => [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, { default: withCtx(() => [renderSlot(c.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, { default: withCtx(() => [renderSlot(c.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)]), _: 3 })) : createCommentVNode("", true), renderSlot(c.$slots, "content", { close: R }, () => {
            var _a4, _b2, _c2;
            return [s.header || e.title || s.title || e.description || s.description || t.close || s.close ? (openBlock(), createBlock("div", { key: 0, "data-slot": "header", class: i.value.header({ class: (_a4 = t.ui) == null ? void 0 : _a4.header }) }, [renderSlot(c.$slots, "header", { close: R }, () => {
              var _a5, _b3, _c3;
              return [createVNode("div", { "data-slot": "wrapper", class: i.value.wrapper({ class: (_a5 = t.ui) == null ? void 0 : _a5.wrapper }) }, [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0, "data-slot": "title", class: i.value.title({ class: (_b3 = t.ui) == null ? void 0 : _b3.title }) }, { default: withCtx(() => [renderSlot(c.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1, "data-slot": "description", class: i.value.description({ class: (_c3 = t.ui) == null ? void 0 : _c3.description }) }, { default: withCtx(() => [renderSlot(c.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true)], 2), renderSlot(c.$slots, "actions"), t.close || s.close ? (openBlock(), createBlock(unref(DialogClose), { key: 0, "as-child": "" }, { default: withCtx(() => [renderSlot(c.$slots, "close", { ui: i.value }, () => {
                var _a6;
                return [t.close ? (openBlock(), createBlock(Q, mergeProps({ key: 0, icon: e.closeIcon || unref(h).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": unref(b)("slideover.close") }, typeof t.close == "object" ? t.close : {}, { "data-slot": "close", class: i.value.close({ class: (_a6 = t.ui) == null ? void 0 : _a6.close }) }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)];
              })]), _: 2 }, 1024)) : createCommentVNode("", true)];
            })], 2)) : createCommentVNode("", true), createVNode("div", { "data-slot": "body", class: i.value.body({ class: (_b2 = t.ui) == null ? void 0 : _b2.body }) }, [renderSlot(c.$slots, "body", { close: R })], 2), s.footer ? (openBlock(), createBlock("div", { key: 1, "data-slot": "footer", class: i.value.footer({ class: (_c2 = t.ui) == null ? void 0 : _c2.footer }) }, [renderSlot(c.$slots, "footer", { close: R })], 2)) : createCommentVNode("", true)];
          })];
        }), _: 2 }, z, y));
        else return [e.overlay ? (openBlock(), createBlock(unref(DialogOverlay), { key: 0, "data-slot": "overlay", class: i.value.overlay({ class: (_c = t.ui) == null ? void 0 : _c.overlay }) }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DialogContent), mergeProps({ "data-side": e.side, "data-slot": "content", class: i.value.content({ class: [!s.default && t.class, (_d = t.ui) == null ? void 0 : _d.content] }) }, g.value, { onAfterEnter: (B) => d("after:enter"), onAfterLeave: (B) => d("after:leave") }, toHandlers(f.value)), { default: withCtx(() => [s.content && (e.title || s.title || e.description || s.description) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, { default: withCtx(() => [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, { default: withCtx(() => [renderSlot(c.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, { default: withCtx(() => [renderSlot(c.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)]), _: 3 })) : createCommentVNode("", true), renderSlot(c.$slots, "content", { close: R }, () => {
          var _a4, _b2, _c2;
          return [s.header || e.title || s.title || e.description || s.description || t.close || s.close ? (openBlock(), createBlock("div", { key: 0, "data-slot": "header", class: i.value.header({ class: (_a4 = t.ui) == null ? void 0 : _a4.header }) }, [renderSlot(c.$slots, "header", { close: R }, () => {
            var _a5, _b3, _c3;
            return [createVNode("div", { "data-slot": "wrapper", class: i.value.wrapper({ class: (_a5 = t.ui) == null ? void 0 : _a5.wrapper }) }, [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0, "data-slot": "title", class: i.value.title({ class: (_b3 = t.ui) == null ? void 0 : _b3.title }) }, { default: withCtx(() => [renderSlot(c.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1, "data-slot": "description", class: i.value.description({ class: (_c3 = t.ui) == null ? void 0 : _c3.description }) }, { default: withCtx(() => [renderSlot(c.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true)], 2), renderSlot(c.$slots, "actions"), t.close || s.close ? (openBlock(), createBlock(unref(DialogClose), { key: 0, "as-child": "" }, { default: withCtx(() => [renderSlot(c.$slots, "close", { ui: i.value }, () => {
              var _a6;
              return [t.close ? (openBlock(), createBlock(Q, mergeProps({ key: 0, icon: e.closeIcon || unref(h).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": unref(b)("slideover.close") }, typeof t.close == "object" ? t.close : {}, { "data-slot": "close", class: i.value.close({ class: (_a6 = t.ui) == null ? void 0 : _a6.close }) }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)];
            })]), _: 2 }, 1024)) : createCommentVNode("", true)];
          })], 2)) : createCommentVNode("", true), createVNode("div", { "data-slot": "body", class: i.value.body({ class: (_b2 = t.ui) == null ? void 0 : _b2.body }) }, [renderSlot(c.$slots, "body", { close: R })], 2), s.footer ? (openBlock(), createBlock("div", { key: 1, "data-slot": "footer", class: i.value.footer({ class: (_c2 = t.ui) == null ? void 0 : _c2.footer }) }, [renderSlot(c.$slots, "footer", { close: R })], 2)) : createCommentVNode("", true)];
        })]), _: 2 }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])];
      }), _: 2 }, w, T));
      else return [s.default ? (openBlock(), createBlock(unref(DialogTrigger), { key: 0, "as-child": "", class: t.class }, { default: withCtx(() => [renderSlot(c.$slots, "default", { open: D })]), _: 2 }, 1032, ["class"])) : createCommentVNode("", true), createVNode(unref(DialogPortal), unref(S), { default: withCtx(() => {
        var _a3, _b;
        return [e.overlay ? (openBlock(), createBlock(unref(DialogOverlay), { key: 0, "data-slot": "overlay", class: i.value.overlay({ class: (_a3 = t.ui) == null ? void 0 : _a3.overlay }) }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DialogContent), mergeProps({ "data-side": e.side, "data-slot": "content", class: i.value.content({ class: [!s.default && t.class, (_b = t.ui) == null ? void 0 : _b.content] }) }, g.value, { onAfterEnter: (N) => d("after:enter"), onAfterLeave: (N) => d("after:leave") }, toHandlers(f.value)), { default: withCtx(() => [s.content && (e.title || s.title || e.description || s.description) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, { default: withCtx(() => [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, { default: withCtx(() => [renderSlot(c.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, { default: withCtx(() => [renderSlot(c.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)]), _: 3 })) : createCommentVNode("", true), renderSlot(c.$slots, "content", { close: R }, () => {
          var _a4, _b2, _c;
          return [s.header || e.title || s.title || e.description || s.description || t.close || s.close ? (openBlock(), createBlock("div", { key: 0, "data-slot": "header", class: i.value.header({ class: (_a4 = t.ui) == null ? void 0 : _a4.header }) }, [renderSlot(c.$slots, "header", { close: R }, () => {
            var _a5, _b3, _c2;
            return [createVNode("div", { "data-slot": "wrapper", class: i.value.wrapper({ class: (_a5 = t.ui) == null ? void 0 : _a5.wrapper }) }, [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0, "data-slot": "title", class: i.value.title({ class: (_b3 = t.ui) == null ? void 0 : _b3.title }) }, { default: withCtx(() => [renderSlot(c.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1, "data-slot": "description", class: i.value.description({ class: (_c2 = t.ui) == null ? void 0 : _c2.description }) }, { default: withCtx(() => [renderSlot(c.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true)], 2), renderSlot(c.$slots, "actions"), t.close || s.close ? (openBlock(), createBlock(unref(DialogClose), { key: 0, "as-child": "" }, { default: withCtx(() => [renderSlot(c.$slots, "close", { ui: i.value }, () => {
              var _a6;
              return [t.close ? (openBlock(), createBlock(Q, mergeProps({ key: 0, icon: e.closeIcon || unref(h).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": unref(b)("slideover.close") }, typeof t.close == "object" ? t.close : {}, { "data-slot": "close", class: i.value.close({ class: (_a6 = t.ui) == null ? void 0 : _a6.close }) }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)];
            })]), _: 2 }, 1024)) : createCommentVNode("", true)];
          })], 2)) : createCommentVNode("", true), createVNode("div", { "data-slot": "body", class: i.value.body({ class: (_b2 = t.ui) == null ? void 0 : _b2.body }) }, [renderSlot(c.$slots, "body", { close: R })], 2), s.footer ? (openBlock(), createBlock("div", { key: 1, "data-slot": "footer", class: i.value.footer({ class: (_c = t.ui) == null ? void 0 : _c.footer }) }, [renderSlot(c.$slots, "footer", { close: R })], 2)) : createCommentVNode("", true)];
        })]), _: 2 }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])];
      }), _: 2 }, 1040)];
    }), _: 3 }, v));
  };
} }, Et = ot.setup;
ot.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue"), Et ? Et(e, a) : void 0;
};
const ml = { slots: { overlay: "fixed inset-0", content: "bg-default divide-y divide-default flex flex-col focus:outline-none", header: "flex items-center gap-1.5 p-4 sm:px-6 min-h-16", wrapper: "", body: "flex-1 p-4 sm:p-6", footer: "flex items-center gap-1.5 p-4 sm:px-6", title: "text-highlighted font-semibold", description: "mt-1 text-muted text-sm", close: "absolute top-4 end-4" }, variants: { transition: { true: { overlay: "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]", content: "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]" } }, fullscreen: { true: { content: "inset-0" }, false: { content: "w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring ring-default" } }, overlay: { true: { overlay: "bg-elevated/75" } }, scrollable: { true: { overlay: "overflow-y-auto", content: "relative" }, false: { content: "fixed", body: "overflow-y-auto" } } }, compoundVariants: [{ scrollable: true, fullscreen: false, class: { overlay: "grid place-items-center p-4 sm:py-8" } }, { scrollable: false, fullscreen: false, class: { content: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-hidden" } }] }, rt = { __name: "UModal", __ssrInlineRender: true, props: { title: { type: String, required: false }, description: { type: String, required: false }, content: { type: Object, required: false }, overlay: { type: Boolean, required: false, default: true }, scrollable: { type: Boolean, required: false }, transition: { type: Boolean, required: false, default: true }, fullscreen: { type: Boolean, required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, close: { type: [Boolean, Object], required: false, default: true }, closeIcon: { type: null, required: false }, dismissible: { type: Boolean, required: false, default: true }, class: { type: null, required: false }, ui: { type: null, required: false }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: ["after:leave", "after:enter", "close:prevent", "update:open"], setup(e, { emit: a }) {
  const t = e, d = a, s = useSlots(), { t: b } = Te(), h = ke$1(), k = useForwardPropsEmits(reactivePick(t, "open", "defaultOpen", "modal"), d), S = We(toRef(() => t.portal)), g = toRef(() => t.content), f = computed(() => t.dismissible ? t.scrollable ? { pointerDownOutside: (v) => {
    const C = v.detail.originalEvent, D = C.target;
    (C.offsetX > D.clientWidth || C.offsetY > D.clientHeight) && v.preventDefault();
  } } : {} : ["pointerDownOutside", "interactOutside", "escapeKeyDown"].reduce((C, D) => (C[D] = (R) => {
    R.preventDefault(), d("close:prevent");
  }, C), {})), [i, c] = createReusableTemplate(), $ = computed(() => {
    var _a3;
    return G({ extend: G(ml), ...((_a3 = h.ui) == null ? void 0 : _a3.modal) || {} })({ transition: t.transition, fullscreen: t.fullscreen, overlay: t.overlay, scrollable: t.scrollable });
  });
  return (v, C, D, R) => {
    C(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(k), R), { default: withCtx(({ open: P, close: w }, T, N, M) => {
      if (T) T(ssrRenderComponent(unref(i), null, { default: withCtx((z, y, B, j) => {
        var _a3, _b;
        if (y) y(ssrRenderComponent(unref(DialogContent), mergeProps({ "data-slot": "content", class: $.value.content({ class: [!s.default && t.class, (_a3 = t.ui) == null ? void 0 : _a3.content] }) }, g.value, { onAfterEnter: (U) => d("after:enter"), onAfterLeave: (U) => d("after:leave") }, toHandlers(f.value)), { default: withCtx((U, q, H, E) => {
          if (q) s.content && (e.title || s.title || e.description || s.description) ? q(ssrRenderComponent(unref(VisuallyHidden), null, { default: withCtx((ee, K, te, Z) => {
            if (K) e.title || s.title ? K(ssrRenderComponent(unref(DialogTitle), null, { default: withCtx((Ce, oe, Ge, Qe) => {
              if (oe) ssrRenderSlot(v.$slots, "title", {}, () => {
                oe(`${ssrInterpolate(e.title)}`);
              }, oe, Ge, Qe);
              else return [renderSlot(v.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])];
            }), _: 2 }, te, Z)) : K("<!---->"), e.description || s.description ? K(ssrRenderComponent(unref(DialogDescription), null, { default: withCtx((Ce, oe, Ge, Qe) => {
              if (oe) ssrRenderSlot(v.$slots, "description", {}, () => {
                oe(`${ssrInterpolate(e.description)}`);
              }, oe, Ge, Qe);
              else return [renderSlot(v.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])];
            }), _: 2 }, te, Z)) : K("<!---->");
            else return [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, { default: withCtx(() => [renderSlot(v.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, { default: withCtx(() => [renderSlot(v.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)];
          }), _: 2 }, H, E)) : q("<!---->"), ssrRenderSlot(v.$slots, "content", { close: w }, () => {
            var _a4, _b2, _c;
            s.header || e.title || s.title || e.description || s.description || t.close || s.close ? (q(`<div data-slot="header" class="${ssrRenderClass($.value.header({ class: (_a4 = t.ui) == null ? void 0 : _a4.header }))}"${E}>`), ssrRenderSlot(v.$slots, "header", { close: w }, () => {
              var _a5, _b3, _c2;
              q(`<div data-slot="wrapper" class="${ssrRenderClass($.value.wrapper({ class: (_a5 = t.ui) == null ? void 0 : _a5.wrapper }))}"${E}>`), e.title || s.title ? q(ssrRenderComponent(unref(DialogTitle), { "data-slot": "title", class: $.value.title({ class: (_b3 = t.ui) == null ? void 0 : _b3.title }) }, { default: withCtx((ee, K, te, Z) => {
                if (K) ssrRenderSlot(v.$slots, "title", {}, () => {
                  K(`${ssrInterpolate(e.title)}`);
                }, K, te, Z);
                else return [renderSlot(v.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])];
              }), _: 2 }, H, E)) : q("<!---->"), e.description || s.description ? q(ssrRenderComponent(unref(DialogDescription), { "data-slot": "description", class: $.value.description({ class: (_c2 = t.ui) == null ? void 0 : _c2.description }) }, { default: withCtx((ee, K, te, Z) => {
                if (K) ssrRenderSlot(v.$slots, "description", {}, () => {
                  K(`${ssrInterpolate(e.description)}`);
                }, K, te, Z);
                else return [renderSlot(v.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])];
              }), _: 2 }, H, E)) : q("<!---->"), q("</div>"), ssrRenderSlot(v.$slots, "actions", {}, null, q, H, E), t.close || s.close ? q(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, { default: withCtx((ee, K, te, Z) => {
                if (K) ssrRenderSlot(v.$slots, "close", { ui: $.value }, () => {
                  var _a6;
                  t.close ? K(ssrRenderComponent(Q, mergeProps({ icon: e.closeIcon || unref(h).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": unref(b)("modal.close") }, typeof t.close == "object" ? t.close : {}, { "data-slot": "close", class: $.value.close({ class: (_a6 = t.ui) == null ? void 0 : _a6.close }) }), null, te, Z)) : K("<!---->");
                }, K, te, Z);
                else return [renderSlot(v.$slots, "close", { ui: $.value }, () => {
                  var _a6;
                  return [t.close ? (openBlock(), createBlock(Q, mergeProps({ key: 0, icon: e.closeIcon || unref(h).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": unref(b)("modal.close") }, typeof t.close == "object" ? t.close : {}, { "data-slot": "close", class: $.value.close({ class: (_a6 = t.ui) == null ? void 0 : _a6.close }) }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)];
                })];
              }), _: 2 }, H, E)) : q("<!---->");
            }, q, H, E), q("</div>")) : q("<!---->"), s.body ? (q(`<div data-slot="body" class="${ssrRenderClass($.value.body({ class: (_b2 = t.ui) == null ? void 0 : _b2.body }))}"${E}>`), ssrRenderSlot(v.$slots, "body", { close: w }, null, q, H, E), q("</div>")) : q("<!---->"), s.footer ? (q(`<div data-slot="footer" class="${ssrRenderClass($.value.footer({ class: (_c = t.ui) == null ? void 0 : _c.footer }))}"${E}>`), ssrRenderSlot(v.$slots, "footer", { close: w }, null, q, H, E), q("</div>")) : q("<!---->");
          }, q, H, E);
          else return [s.content && (e.title || s.title || e.description || s.description) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, { default: withCtx(() => [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, { default: withCtx(() => [renderSlot(v.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, { default: withCtx(() => [renderSlot(v.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)]), _: 3 })) : createCommentVNode("", true), renderSlot(v.$slots, "content", { close: w }, () => {
            var _a4, _b2, _c;
            return [s.header || e.title || s.title || e.description || s.description || t.close || s.close ? (openBlock(), createBlock("div", { key: 0, "data-slot": "header", class: $.value.header({ class: (_a4 = t.ui) == null ? void 0 : _a4.header }) }, [renderSlot(v.$slots, "header", { close: w }, () => {
              var _a5, _b3, _c2;
              return [createVNode("div", { "data-slot": "wrapper", class: $.value.wrapper({ class: (_a5 = t.ui) == null ? void 0 : _a5.wrapper }) }, [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0, "data-slot": "title", class: $.value.title({ class: (_b3 = t.ui) == null ? void 0 : _b3.title }) }, { default: withCtx(() => [renderSlot(v.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1, "data-slot": "description", class: $.value.description({ class: (_c2 = t.ui) == null ? void 0 : _c2.description }) }, { default: withCtx(() => [renderSlot(v.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true)], 2), renderSlot(v.$slots, "actions"), t.close || s.close ? (openBlock(), createBlock(unref(DialogClose), { key: 0, "as-child": "" }, { default: withCtx(() => [renderSlot(v.$slots, "close", { ui: $.value }, () => {
                var _a6;
                return [t.close ? (openBlock(), createBlock(Q, mergeProps({ key: 0, icon: e.closeIcon || unref(h).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": unref(b)("modal.close") }, typeof t.close == "object" ? t.close : {}, { "data-slot": "close", class: $.value.close({ class: (_a6 = t.ui) == null ? void 0 : _a6.close }) }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)];
              })]), _: 2 }, 1024)) : createCommentVNode("", true)];
            })], 2)) : createCommentVNode("", true), s.body ? (openBlock(), createBlock("div", { key: 1, "data-slot": "body", class: $.value.body({ class: (_b2 = t.ui) == null ? void 0 : _b2.body }) }, [renderSlot(v.$slots, "body", { close: w })], 2)) : createCommentVNode("", true), s.footer ? (openBlock(), createBlock("div", { key: 2, "data-slot": "footer", class: $.value.footer({ class: (_c = t.ui) == null ? void 0 : _c.footer }) }, [renderSlot(v.$slots, "footer", { close: w })], 2)) : createCommentVNode("", true)];
          })];
        }), _: 2 }, B, j));
        else return [createVNode(unref(DialogContent), mergeProps({ "data-slot": "content", class: $.value.content({ class: [!s.default && t.class, (_b = t.ui) == null ? void 0 : _b.content] }) }, g.value, { onAfterEnter: (U) => d("after:enter"), onAfterLeave: (U) => d("after:leave") }, toHandlers(f.value)), { default: withCtx(() => [s.content && (e.title || s.title || e.description || s.description) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, { default: withCtx(() => [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, { default: withCtx(() => [renderSlot(v.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, { default: withCtx(() => [renderSlot(v.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)]), _: 3 })) : createCommentVNode("", true), renderSlot(v.$slots, "content", { close: w }, () => {
          var _a4, _b2, _c;
          return [s.header || e.title || s.title || e.description || s.description || t.close || s.close ? (openBlock(), createBlock("div", { key: 0, "data-slot": "header", class: $.value.header({ class: (_a4 = t.ui) == null ? void 0 : _a4.header }) }, [renderSlot(v.$slots, "header", { close: w }, () => {
            var _a5, _b3, _c2;
            return [createVNode("div", { "data-slot": "wrapper", class: $.value.wrapper({ class: (_a5 = t.ui) == null ? void 0 : _a5.wrapper }) }, [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0, "data-slot": "title", class: $.value.title({ class: (_b3 = t.ui) == null ? void 0 : _b3.title }) }, { default: withCtx(() => [renderSlot(v.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1, "data-slot": "description", class: $.value.description({ class: (_c2 = t.ui) == null ? void 0 : _c2.description }) }, { default: withCtx(() => [renderSlot(v.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true)], 2), renderSlot(v.$slots, "actions"), t.close || s.close ? (openBlock(), createBlock(unref(DialogClose), { key: 0, "as-child": "" }, { default: withCtx(() => [renderSlot(v.$slots, "close", { ui: $.value }, () => {
              var _a6;
              return [t.close ? (openBlock(), createBlock(Q, mergeProps({ key: 0, icon: e.closeIcon || unref(h).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": unref(b)("modal.close") }, typeof t.close == "object" ? t.close : {}, { "data-slot": "close", class: $.value.close({ class: (_a6 = t.ui) == null ? void 0 : _a6.close }) }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)];
            })]), _: 2 }, 1024)) : createCommentVNode("", true)];
          })], 2)) : createCommentVNode("", true), s.body ? (openBlock(), createBlock("div", { key: 1, "data-slot": "body", class: $.value.body({ class: (_b2 = t.ui) == null ? void 0 : _b2.body }) }, [renderSlot(v.$slots, "body", { close: w })], 2)) : createCommentVNode("", true), s.footer ? (openBlock(), createBlock("div", { key: 2, "data-slot": "footer", class: $.value.footer({ class: (_c = t.ui) == null ? void 0 : _c.footer }) }, [renderSlot(v.$slots, "footer", { close: w })], 2)) : createCommentVNode("", true)];
        })]), _: 2 }, 1040, ["class", "onAfterEnter", "onAfterLeave"])];
      }), _: 2 }, N, M)), s.default ? T(ssrRenderComponent(unref(DialogTrigger), { "as-child": "", class: t.class }, { default: withCtx((z, y, B, j) => {
        if (y) ssrRenderSlot(v.$slots, "default", { open: P }, null, y, B, j);
        else return [renderSlot(v.$slots, "default", { open: P })];
      }), _: 2 }, N, M)) : T("<!---->"), T(ssrRenderComponent(unref(DialogPortal), unref(S), { default: withCtx((z, y, B, j) => {
        var _a3, _b, _c, _d;
        if (y) e.scrollable ? y(ssrRenderComponent(unref(DialogOverlay), { "data-slot": "overlay", class: $.value.overlay({ class: (_a3 = t.ui) == null ? void 0 : _a3.overlay }) }, { default: withCtx((U, q, H, E) => {
          if (q) q(ssrRenderComponent(unref(c), null, null, H, E));
          else return [createVNode(unref(c))];
        }), _: 2 }, B, j)) : (y("<!--[-->"), e.overlay ? y(ssrRenderComponent(unref(DialogOverlay), { "data-slot": "overlay", class: $.value.overlay({ class: (_b = t.ui) == null ? void 0 : _b.overlay }) }, null, B, j)) : y("<!---->"), y(ssrRenderComponent(unref(c), null, null, B, j)), y("<!--]-->"));
        else return [e.scrollable ? (openBlock(), createBlock(unref(DialogOverlay), { key: 0, "data-slot": "overlay", class: $.value.overlay({ class: (_c = t.ui) == null ? void 0 : _c.overlay }) }, { default: withCtx(() => [createVNode(unref(c))]), _: 1 }, 8, ["class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [e.overlay ? (openBlock(), createBlock(unref(DialogOverlay), { key: 0, "data-slot": "overlay", class: $.value.overlay({ class: (_d = t.ui) == null ? void 0 : _d.overlay }) }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(c))], 64))];
      }), _: 2 }, N, M));
      else return [createVNode(unref(i), null, { default: withCtx(() => {
        var _a3;
        return [createVNode(unref(DialogContent), mergeProps({ "data-slot": "content", class: $.value.content({ class: [!s.default && t.class, (_a3 = t.ui) == null ? void 0 : _a3.content] }) }, g.value, { onAfterEnter: (z) => d("after:enter"), onAfterLeave: (z) => d("after:leave") }, toHandlers(f.value)), { default: withCtx(() => [s.content && (e.title || s.title || e.description || s.description) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, { default: withCtx(() => [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, { default: withCtx(() => [renderSlot(v.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, { default: withCtx(() => [renderSlot(v.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)]), _: 3 })) : createCommentVNode("", true), renderSlot(v.$slots, "content", { close: w }, () => {
          var _a4, _b, _c;
          return [s.header || e.title || s.title || e.description || s.description || t.close || s.close ? (openBlock(), createBlock("div", { key: 0, "data-slot": "header", class: $.value.header({ class: (_a4 = t.ui) == null ? void 0 : _a4.header }) }, [renderSlot(v.$slots, "header", { close: w }, () => {
            var _a5, _b2, _c2;
            return [createVNode("div", { "data-slot": "wrapper", class: $.value.wrapper({ class: (_a5 = t.ui) == null ? void 0 : _a5.wrapper }) }, [e.title || s.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0, "data-slot": "title", class: $.value.title({ class: (_b2 = t.ui) == null ? void 0 : _b2.title }) }, { default: withCtx(() => [renderSlot(v.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1, "data-slot": "description", class: $.value.description({ class: (_c2 = t.ui) == null ? void 0 : _c2.description }) }, { default: withCtx(() => [renderSlot(v.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true)], 2), renderSlot(v.$slots, "actions"), t.close || s.close ? (openBlock(), createBlock(unref(DialogClose), { key: 0, "as-child": "" }, { default: withCtx(() => [renderSlot(v.$slots, "close", { ui: $.value }, () => {
              var _a6;
              return [t.close ? (openBlock(), createBlock(Q, mergeProps({ key: 0, icon: e.closeIcon || unref(h).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": unref(b)("modal.close") }, typeof t.close == "object" ? t.close : {}, { "data-slot": "close", class: $.value.close({ class: (_a6 = t.ui) == null ? void 0 : _a6.close }) }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)];
            })]), _: 2 }, 1024)) : createCommentVNode("", true)];
          })], 2)) : createCommentVNode("", true), s.body ? (openBlock(), createBlock("div", { key: 1, "data-slot": "body", class: $.value.body({ class: (_b = t.ui) == null ? void 0 : _b.body }) }, [renderSlot(v.$slots, "body", { close: w })], 2)) : createCommentVNode("", true), s.footer ? (openBlock(), createBlock("div", { key: 2, "data-slot": "footer", class: $.value.footer({ class: (_c = t.ui) == null ? void 0 : _c.footer }) }, [renderSlot(v.$slots, "footer", { close: w })], 2)) : createCommentVNode("", true)];
        })]), _: 2 }, 1040, ["class", "onAfterEnter", "onAfterLeave"])];
      }), _: 2 }, 1024), s.default ? (openBlock(), createBlock(unref(DialogTrigger), { key: 0, "as-child": "", class: t.class }, { default: withCtx(() => [renderSlot(v.$slots, "default", { open: P })]), _: 2 }, 1032, ["class"])) : createCommentVNode("", true), createVNode(unref(DialogPortal), unref(S), { default: withCtx(() => {
        var _a3, _b;
        return [e.scrollable ? (openBlock(), createBlock(unref(DialogOverlay), { key: 0, "data-slot": "overlay", class: $.value.overlay({ class: (_a3 = t.ui) == null ? void 0 : _a3.overlay }) }, { default: withCtx(() => [createVNode(unref(c))]), _: 1 }, 8, ["class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [e.overlay ? (openBlock(), createBlock(unref(DialogOverlay), { key: 0, "data-slot": "overlay", class: $.value.overlay({ class: (_b = t.ui) == null ? void 0 : _b.overlay }) }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(c))], 64))];
      }), _: 1 }, 16)];
    }), _: 3 }, D));
  };
} }, Kt = rt.setup;
rt.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue"), Kt ? Kt(e, a) : void 0;
};
const bl = { slots: { overlay: "fixed inset-0 bg-elevated/75", content: "fixed bg-default ring ring-default flex focus:outline-none", handle: ["shrink-0 !bg-accented", "transition-opacity"], container: "w-full flex flex-col gap-4 p-4 overflow-y-auto", header: "", title: "text-highlighted font-semibold", description: "mt-1 text-muted text-sm", body: "flex-1", footer: "flex flex-col gap-1.5" }, variants: { direction: { top: { content: "mb-24 flex-col-reverse", handle: "mb-4" }, right: { content: "flex-row", handle: "!ml-4" }, bottom: { content: "mt-24 flex-col", handle: "mt-4" }, left: { content: "flex-row-reverse", handle: "!mr-4" } }, inset: { true: { content: "rounded-lg after:hidden overflow-hidden [--initial-transform:calc(100%+1.5rem)]" } }, snapPoints: { true: "" } }, compoundVariants: [{ direction: ["top", "bottom"], class: { content: "h-auto max-h-[96%]", handle: "!w-12 !h-1.5 mx-auto" } }, { direction: ["top", "bottom"], snapPoints: true, class: { content: "h-full" } }, { direction: ["right", "left"], class: { content: "w-auto max-w-[calc(100%-2rem)]", handle: "!h-12 !w-1.5 mt-auto mb-auto" } }, { direction: ["right", "left"], snapPoints: true, class: { content: "w-full" } }, { direction: "top", inset: true, class: { content: "inset-x-4 top-4" } }, { direction: "top", inset: false, class: { content: "inset-x-0 top-0 rounded-b-lg" } }, { direction: "bottom", inset: true, class: { content: "inset-x-4 bottom-4" } }, { direction: "bottom", inset: false, class: { content: "inset-x-0 bottom-0 rounded-t-lg" } }, { direction: "left", inset: true, class: { content: "inset-y-4 left-4" } }, { direction: "left", inset: false, class: { content: "inset-y-0 left-0 rounded-r-lg" } }, { direction: "right", inset: true, class: { content: "inset-y-4 right-4" } }, { direction: "right", inset: false, class: { content: "inset-y-0 right-0 rounded-l-lg" } }] }, ct = { __name: "UDrawer", __ssrInlineRender: true, props: { as: { type: null, required: false }, title: { type: String, required: false }, description: { type: String, required: false }, inset: { type: Boolean, required: false }, content: { type: Object, required: false }, overlay: { type: Boolean, required: false, default: true }, handle: { type: Boolean, required: false, default: true }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, nested: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: null, required: false }, activeSnapPoint: { type: [Number, String, null], required: false }, closeThreshold: { type: Number, required: false }, shouldScaleBackground: { type: Boolean, required: false }, setBackgroundColorOnScale: { type: Boolean, required: false }, scrollLockTimeout: { type: Number, required: false }, fixed: { type: Boolean, required: false }, dismissible: { type: Boolean, required: false, default: true }, modal: { type: Boolean, required: false, default: true }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, direction: { type: String, required: false, default: "bottom" }, noBodyStyles: { type: Boolean, required: false }, handleOnly: { type: Boolean, required: false }, preventScrollRestoration: { type: Boolean, required: false }, snapPoints: { type: Array, required: false } }, emits: ["close:prevent", "drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"], setup(e, { emit: a }) {
  const t = e, d = a, s = useSlots(), b = ke$1(), h = useForwardPropsEmits(reactivePick(t, "activeSnapPoint", "closeThreshold", "shouldScaleBackground", "setBackgroundColorOnScale", "scrollLockTimeout", "fixed", "dismissible", "modal", "open", "defaultOpen", "nested", "direction", "noBodyStyles", "handleOnly", "preventScrollRestoration", "snapPoints"), d), k = We(toRef(() => t.portal)), S = toRef(() => t.content), g = computed(() => t.dismissible ? {} : ["pointerDownOutside", "interactOutside", "escapeKeyDown"].reduce((c, $) => (c[$] = (v) => {
    v.preventDefault(), d("close:prevent");
  }, c), {})), f = computed(() => {
    var _a3;
    return G({ extend: G(bl), ...((_a3 = b.ui) == null ? void 0 : _a3.drawer) || {} })({ direction: t.direction, inset: t.inset, snapPoints: t.snapPoints && t.snapPoints.length > 0 });
  });
  return (i, c, $, v) => {
    ssrRenderVNode(c, createVNode(resolveDynamicComponent(e.nested ? unref(DrawerRootNested) : unref(DrawerRoot)), mergeProps(unref(h), v), { default: withCtx((C, D, R, P) => {
      if (D) s.default ? D(ssrRenderComponent(unref(DrawerTrigger), { "as-child": "", class: t.class }, { default: withCtx((w, T, N, M) => {
        if (T) ssrRenderSlot(i.$slots, "default", {}, null, T, N, M);
        else return [renderSlot(i.$slots, "default")];
      }), _: 3 }, R, P)) : D("<!---->"), D(ssrRenderComponent(unref(DrawerPortal), unref(k), { default: withCtx((w, T, N, M) => {
        var _a3, _b, _c, _d;
        if (T) e.overlay ? T(ssrRenderComponent(unref(DrawerOverlay), { "data-slot": "overlay", class: f.value.overlay({ class: (_a3 = t.ui) == null ? void 0 : _a3.overlay }) }, null, N, M)) : T("<!---->"), T(ssrRenderComponent(unref(DrawerContent), mergeProps({ "data-slot": "content", class: f.value.content({ class: [!s.default && t.class, (_b = t.ui) == null ? void 0 : _b.content] }) }, S.value, toHandlers(g.value)), { default: withCtx((z, y, B, j) => {
          var _a4, _b2;
          if (y) e.handle ? y(ssrRenderComponent(unref(DrawerHandle), { "data-slot": "handle", class: f.value.handle({ class: (_a4 = t.ui) == null ? void 0 : _a4.handle }) }, null, B, j)) : y("<!---->"), s.content && (e.title || s.title || e.description || s.description) ? y(ssrRenderComponent(unref(VisuallyHidden), null, { default: withCtx((U, q, H, E) => {
            if (q) e.title || s.title ? q(ssrRenderComponent(unref(DrawerTitle), null, { default: withCtx((ee, K, te, Z) => {
              if (K) ssrRenderSlot(i.$slots, "title", {}, () => {
                K(`${ssrInterpolate(e.title)}`);
              }, K, te, Z);
              else return [renderSlot(i.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])];
            }), _: 3 }, H, E)) : q("<!---->"), e.description || s.description ? q(ssrRenderComponent(unref(DrawerDescription), null, { default: withCtx((ee, K, te, Z) => {
              if (K) ssrRenderSlot(i.$slots, "description", {}, () => {
                K(`${ssrInterpolate(e.description)}`);
              }, K, te, Z);
              else return [renderSlot(i.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])];
            }), _: 3 }, H, E)) : q("<!---->");
            else return [e.title || s.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, { default: withCtx(() => [renderSlot(i.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, { default: withCtx(() => [renderSlot(i.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)];
          }), _: 3 }, B, j)) : y("<!---->"), ssrRenderSlot(i.$slots, "content", {}, () => {
            var _a5, _b3, _c2, _d2;
            y(`<div data-slot="container" class="${ssrRenderClass(f.value.container({ class: (_a5 = t.ui) == null ? void 0 : _a5.container }))}"${j}>`), s.header || e.title || s.title || e.description || s.description ? (y(`<div data-slot="header" class="${ssrRenderClass(f.value.header({ class: (_b3 = t.ui) == null ? void 0 : _b3.header }))}"${j}>`), ssrRenderSlot(i.$slots, "header", {}, () => {
              var _a6, _b4;
              e.title || s.title ? y(ssrRenderComponent(unref(DrawerTitle), { "data-slot": "title", class: f.value.title({ class: (_a6 = t.ui) == null ? void 0 : _a6.title }) }, { default: withCtx((U, q, H, E) => {
                if (q) ssrRenderSlot(i.$slots, "title", {}, () => {
                  q(`${ssrInterpolate(e.title)}`);
                }, q, H, E);
                else return [renderSlot(i.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])];
              }), _: 3 }, B, j)) : y("<!---->"), e.description || s.description ? y(ssrRenderComponent(unref(DrawerDescription), { "data-slot": "description", class: f.value.description({ class: (_b4 = t.ui) == null ? void 0 : _b4.description }) }, { default: withCtx((U, q, H, E) => {
                if (q) ssrRenderSlot(i.$slots, "description", {}, () => {
                  q(`${ssrInterpolate(e.description)}`);
                }, q, H, E);
                else return [renderSlot(i.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])];
              }), _: 3 }, B, j)) : y("<!---->");
            }, y, B, j), y("</div>")) : y("<!---->"), s.body ? (y(`<div data-slot="body" class="${ssrRenderClass(f.value.body({ class: (_c2 = t.ui) == null ? void 0 : _c2.body }))}"${j}>`), ssrRenderSlot(i.$slots, "body", {}, null, y, B, j), y("</div>")) : y("<!---->"), s.footer ? (y(`<div data-slot="footer" class="${ssrRenderClass(f.value.footer({ class: (_d2 = t.ui) == null ? void 0 : _d2.footer }))}"${j}>`), ssrRenderSlot(i.$slots, "footer", {}, null, y, B, j), y("</div>")) : y("<!---->"), y("</div>");
          }, y, B, j);
          else return [e.handle ? (openBlock(), createBlock(unref(DrawerHandle), { key: 0, "data-slot": "handle", class: f.value.handle({ class: (_b2 = t.ui) == null ? void 0 : _b2.handle }) }, null, 8, ["class"])) : createCommentVNode("", true), s.content && (e.title || s.title || e.description || s.description) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, { default: withCtx(() => [e.title || s.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, { default: withCtx(() => [renderSlot(i.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, { default: withCtx(() => [renderSlot(i.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)]), _: 3 })) : createCommentVNode("", true), renderSlot(i.$slots, "content", {}, () => {
            var _a5, _b3, _c2, _d2;
            return [createVNode("div", { "data-slot": "container", class: f.value.container({ class: (_a5 = t.ui) == null ? void 0 : _a5.container }) }, [s.header || e.title || s.title || e.description || s.description ? (openBlock(), createBlock("div", { key: 0, "data-slot": "header", class: f.value.header({ class: (_b3 = t.ui) == null ? void 0 : _b3.header }) }, [renderSlot(i.$slots, "header", {}, () => {
              var _a6, _b4;
              return [e.title || s.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0, "data-slot": "title", class: f.value.title({ class: (_a6 = t.ui) == null ? void 0 : _a6.title }) }, { default: withCtx(() => [renderSlot(i.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1, "data-slot": "description", class: f.value.description({ class: (_b4 = t.ui) == null ? void 0 : _b4.description }) }, { default: withCtx(() => [renderSlot(i.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true)];
            })], 2)) : createCommentVNode("", true), s.body ? (openBlock(), createBlock("div", { key: 1, "data-slot": "body", class: f.value.body({ class: (_c2 = t.ui) == null ? void 0 : _c2.body }) }, [renderSlot(i.$slots, "body")], 2)) : createCommentVNode("", true), s.footer ? (openBlock(), createBlock("div", { key: 2, "data-slot": "footer", class: f.value.footer({ class: (_d2 = t.ui) == null ? void 0 : _d2.footer }) }, [renderSlot(i.$slots, "footer")], 2)) : createCommentVNode("", true)], 2)];
          })];
        }), _: 3 }, N, M));
        else return [e.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), { key: 0, "data-slot": "overlay", class: f.value.overlay({ class: (_c = t.ui) == null ? void 0 : _c.overlay }) }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DrawerContent), mergeProps({ "data-slot": "content", class: f.value.content({ class: [!s.default && t.class, (_d = t.ui) == null ? void 0 : _d.content] }) }, S.value, toHandlers(g.value)), { default: withCtx(() => {
          var _a4;
          return [e.handle ? (openBlock(), createBlock(unref(DrawerHandle), { key: 0, "data-slot": "handle", class: f.value.handle({ class: (_a4 = t.ui) == null ? void 0 : _a4.handle }) }, null, 8, ["class"])) : createCommentVNode("", true), s.content && (e.title || s.title || e.description || s.description) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, { default: withCtx(() => [e.title || s.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, { default: withCtx(() => [renderSlot(i.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, { default: withCtx(() => [renderSlot(i.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)]), _: 3 })) : createCommentVNode("", true), renderSlot(i.$slots, "content", {}, () => {
            var _a5, _b2, _c2, _d2;
            return [createVNode("div", { "data-slot": "container", class: f.value.container({ class: (_a5 = t.ui) == null ? void 0 : _a5.container }) }, [s.header || e.title || s.title || e.description || s.description ? (openBlock(), createBlock("div", { key: 0, "data-slot": "header", class: f.value.header({ class: (_b2 = t.ui) == null ? void 0 : _b2.header }) }, [renderSlot(i.$slots, "header", {}, () => {
              var _a6, _b3;
              return [e.title || s.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0, "data-slot": "title", class: f.value.title({ class: (_a6 = t.ui) == null ? void 0 : _a6.title }) }, { default: withCtx(() => [renderSlot(i.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1, "data-slot": "description", class: f.value.description({ class: (_b3 = t.ui) == null ? void 0 : _b3.description }) }, { default: withCtx(() => [renderSlot(i.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true)];
            })], 2)) : createCommentVNode("", true), s.body ? (openBlock(), createBlock("div", { key: 1, "data-slot": "body", class: f.value.body({ class: (_c2 = t.ui) == null ? void 0 : _c2.body }) }, [renderSlot(i.$slots, "body")], 2)) : createCommentVNode("", true), s.footer ? (openBlock(), createBlock("div", { key: 2, "data-slot": "footer", class: f.value.footer({ class: (_d2 = t.ui) == null ? void 0 : _d2.footer }) }, [renderSlot(i.$slots, "footer")], 2)) : createCommentVNode("", true)], 2)];
          })];
        }), _: 3 }, 16, ["class"])];
      }), _: 3 }, R, P));
      else return [s.default ? (openBlock(), createBlock(unref(DrawerTrigger), { key: 0, "as-child": "", class: t.class }, { default: withCtx(() => [renderSlot(i.$slots, "default")]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DrawerPortal), unref(k), { default: withCtx(() => {
        var _a3, _b;
        return [e.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), { key: 0, "data-slot": "overlay", class: f.value.overlay({ class: (_a3 = t.ui) == null ? void 0 : _a3.overlay }) }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DrawerContent), mergeProps({ "data-slot": "content", class: f.value.content({ class: [!s.default && t.class, (_b = t.ui) == null ? void 0 : _b.content] }) }, S.value, toHandlers(g.value)), { default: withCtx(() => {
          var _a4;
          return [e.handle ? (openBlock(), createBlock(unref(DrawerHandle), { key: 0, "data-slot": "handle", class: f.value.handle({ class: (_a4 = t.ui) == null ? void 0 : _a4.handle }) }, null, 8, ["class"])) : createCommentVNode("", true), s.content && (e.title || s.title || e.description || s.description) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, { default: withCtx(() => [e.title || s.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, { default: withCtx(() => [renderSlot(i.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 })) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, { default: withCtx(() => [renderSlot(i.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 })) : createCommentVNode("", true)]), _: 3 })) : createCommentVNode("", true), renderSlot(i.$slots, "content", {}, () => {
            var _a5, _b2, _c, _d;
            return [createVNode("div", { "data-slot": "container", class: f.value.container({ class: (_a5 = t.ui) == null ? void 0 : _a5.container }) }, [s.header || e.title || s.title || e.description || s.description ? (openBlock(), createBlock("div", { key: 0, "data-slot": "header", class: f.value.header({ class: (_b2 = t.ui) == null ? void 0 : _b2.header }) }, [renderSlot(i.$slots, "header", {}, () => {
              var _a6, _b3;
              return [e.title || s.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0, "data-slot": "title", class: f.value.title({ class: (_a6 = t.ui) == null ? void 0 : _a6.title }) }, { default: withCtx(() => [renderSlot(i.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true), e.description || s.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1, "data-slot": "description", class: f.value.description({ class: (_b3 = t.ui) == null ? void 0 : _b3.description }) }, { default: withCtx(() => [renderSlot(i.$slots, "description", {}, () => [createTextVNode(toDisplayString(e.description), 1)])]), _: 3 }, 8, ["class"])) : createCommentVNode("", true)];
            })], 2)) : createCommentVNode("", true), s.body ? (openBlock(), createBlock("div", { key: 1, "data-slot": "body", class: f.value.body({ class: (_c = t.ui) == null ? void 0 : _c.body }) }, [renderSlot(i.$slots, "body")], 2)) : createCommentVNode("", true), s.footer ? (openBlock(), createBlock("div", { key: 2, "data-slot": "footer", class: f.value.footer({ class: (_d = t.ui) == null ? void 0 : _d.footer }) }, [renderSlot(i.$slots, "footer")], 2)) : createCommentVNode("", true)], 2)];
          })];
        }), _: 3 }, 16, ["class"])];
      }), _: 3 }, 16)];
    }), _: 3 }), $);
  };
} }, Ht = ct.setup;
ct.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue"), Ht ? Ht(e, a) : void 0;
};
const yl = { slots: { root: "bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50", container: "flex items-center justify-between gap-3 h-full", left: "lg:flex-1 flex items-center gap-1.5", center: "hidden lg:flex", right: "flex items-center justify-end lg:flex-1 gap-1.5", title: "shrink-0 font-bold text-xl text-highlighted flex items-end gap-1.5", toggle: "lg:hidden", content: "lg:hidden", overlay: "lg:hidden", header: "px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3", body: "p-4 sm:p-6 overflow-y-auto" }, variants: { toggleSide: { left: { toggle: "-ms-1.5" }, right: { toggle: "-me-1.5" } } } }, ut = Object.assign({ inheritAttrs: false }, { __name: "UHeader", __ssrInlineRender: true, props: mergeModels({ as: { type: null, required: false, default: "header" }, title: { type: String, required: false, default: "Nuxt UI" }, to: { type: String, required: false, default: "/" }, mode: { type: null, required: false, default: "modal" }, menu: { type: null, required: false }, toggle: { type: [Boolean, Object], required: false, default: true }, toggleSide: { type: String, required: false, default: "right" }, class: { type: null, required: false }, ui: { type: null, required: false } }, { open: { type: Boolean, default: false }, openModifiers: {} }), emits: ["update:open"], setup(e) {
  const a = e, t = useSlots(), d = useModel(e, "open", { type: Boolean, default: false }), s = J(), { t: b } = Te(), h = ke$1(), [k, S] = createReusableTemplate(), [g, f] = createReusableTemplate(), [i, c] = createReusableTemplate(), $ = computed(() => (t.title && et(t.title()) || a.title || "Nuxt UI").trim());
  watch(() => s.fullPath, () => {
    d.value = false;
  });
  const v = computed(() => {
    var _a3;
    return G({ extend: G(yl), ...((_a3 = h.ui) == null ? void 0 : _a3.header) || {} })();
  }), C = computed(() => ({ slideover: ot, modal: rt, drawer: ct })[a.mode]), D = toRef(() => defu(a.menu, { content: { onOpenAutoFocus: (P) => P.preventDefault() } }, a.mode === "modal" ? { fullscreen: true, transition: false } : {}));
  function R() {
    d.value = !d.value;
  }
  return (P, w, T, N) => {
    var _a3, _b, _c;
    w("<!--[-->"), w(ssrRenderComponent(unref(i), null, { default: withCtx((M, z, y, B) => {
      if (z) ssrRenderSlot(P.$slots, "toggle", { open: d.value, toggle: R, ui: v.value }, () => {
        var _a4;
        e.toggle ? z(ssrRenderComponent(Q, mergeProps({ color: "neutral", variant: "ghost", "aria-label": d.value ? unref(b)("header.close") : unref(b)("header.open"), icon: d.value ? unref(h).ui.icons.close : unref(h).ui.icons.menu }, typeof e.toggle == "object" ? e.toggle : {}, { "data-slot": "toggle", class: v.value.toggle({ class: (_a4 = a.ui) == null ? void 0 : _a4.toggle, toggleSide: e.toggleSide }), onClick: R }), null, y, B)) : z("<!---->");
      }, z, y, B);
      else return [renderSlot(P.$slots, "toggle", { open: d.value, toggle: R, ui: v.value }, () => {
        var _a4;
        return [e.toggle ? (openBlock(), createBlock(Q, mergeProps({ key: 0, color: "neutral", variant: "ghost", "aria-label": d.value ? unref(b)("header.close") : unref(b)("header.open"), icon: d.value ? unref(h).ui.icons.close : unref(h).ui.icons.menu }, typeof e.toggle == "object" ? e.toggle : {}, { "data-slot": "toggle", class: v.value.toggle({ class: (_a4 = a.ui) == null ? void 0 : _a4.toggle, toggleSide: e.toggleSide }), onClick: R }), null, 16, ["aria-label", "icon", "class"])) : createCommentVNode("", true)];
      })];
    }), _: 3 }, T)), w(ssrRenderComponent(unref(k), null, { default: withCtx((M, z, y, B) => {
      var _a4, _b2;
      if (z) z(`<div data-slot="left" class="${ssrRenderClass(v.value.left({ class: (_a4 = a.ui) == null ? void 0 : _a4.left }))}"${B}>`), e.toggleSide === "left" ? z(ssrRenderComponent(unref(c), null, null, y, B)) : z("<!---->"), ssrRenderSlot(P.$slots, "left", {}, () => {
        var _a5;
        z(ssrRenderComponent(Be, { to: e.to, "aria-label": $.value, "data-slot": "title", class: v.value.title({ class: (_a5 = a.ui) == null ? void 0 : _a5.title }) }, { default: withCtx((j, U, q, H) => {
          if (U) ssrRenderSlot(P.$slots, "title", {}, () => {
            U(`${ssrInterpolate(e.title)}`);
          }, U, q, H);
          else return [renderSlot(P.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])];
        }), _: 3 }, y, B));
      }, z, y, B), z("</div>");
      else return [createVNode("div", { "data-slot": "left", class: v.value.left({ class: (_b2 = a.ui) == null ? void 0 : _b2.left }) }, [e.toggleSide === "left" ? (openBlock(), createBlock(unref(c), { key: 0 })) : createCommentVNode("", true), renderSlot(P.$slots, "left", {}, () => {
        var _a5;
        return [createVNode(Be, { to: e.to, "aria-label": $.value, "data-slot": "title", class: v.value.title({ class: (_a5 = a.ui) == null ? void 0 : _a5.title }) }, { default: withCtx(() => [renderSlot(P.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])]), _: 3 }, 8, ["to", "aria-label", "class"])];
      })], 2)];
    }), _: 3 }, T)), w(ssrRenderComponent(unref(g), null, { default: withCtx((M, z, y, B) => {
      var _a4, _b2;
      if (z) z(`<div data-slot="right" class="${ssrRenderClass(v.value.right({ class: (_a4 = a.ui) == null ? void 0 : _a4.right }))}"${B}>`), ssrRenderSlot(P.$slots, "right", {}, null, z, y, B), e.toggleSide === "right" ? z(ssrRenderComponent(unref(c), null, null, y, B)) : z("<!---->"), z("</div>");
      else return [createVNode("div", { "data-slot": "right", class: v.value.right({ class: (_b2 = a.ui) == null ? void 0 : _b2.right }) }, [renderSlot(P.$slots, "right"), e.toggleSide === "right" ? (openBlock(), createBlock(unref(c), { key: 0 })) : createCommentVNode("", true)], 2)];
    }), _: 3 }, T)), w(ssrRenderComponent(unref(Primitive), mergeProps({ as: e.as }, P.$attrs, { "data-slot": "root", class: v.value.root({ class: [(_a3 = a.ui) == null ? void 0 : _a3.root, a.class] }) }), { default: withCtx((M, z, y, B) => {
      var _a4, _b2;
      if (z) ssrRenderSlot(P.$slots, "top", {}, null, z, y, B), z(ssrRenderComponent($e, { "data-slot": "container", class: v.value.container({ class: (_a4 = a.ui) == null ? void 0 : _a4.container }) }, { default: withCtx((j, U, q, H) => {
        var _a5, _b3;
        if (U) U(ssrRenderComponent(unref(S), null, null, q, H)), U(`<div data-slot="center" class="${ssrRenderClass(v.value.center({ class: (_a5 = a.ui) == null ? void 0 : _a5.center }))}"${H}>`), ssrRenderSlot(P.$slots, "default", {}, null, U, q, H), U("</div>"), U(ssrRenderComponent(unref(f), null, null, q, H));
        else return [createVNode(unref(S)), createVNode("div", { "data-slot": "center", class: v.value.center({ class: (_b3 = a.ui) == null ? void 0 : _b3.center }) }, [renderSlot(P.$slots, "default")], 2), createVNode(unref(f))];
      }), _: 3 }, y, B)), ssrRenderSlot(P.$slots, "bottom", {}, null, z, y, B);
      else return [renderSlot(P.$slots, "top"), createVNode($e, { "data-slot": "container", class: v.value.container({ class: (_b2 = a.ui) == null ? void 0 : _b2.container }) }, { default: withCtx(() => {
        var _a5;
        return [createVNode(unref(S)), createVNode("div", { "data-slot": "center", class: v.value.center({ class: (_a5 = a.ui) == null ? void 0 : _a5.center }) }, [renderSlot(P.$slots, "default")], 2), createVNode(unref(f))];
      }), _: 3 }, 8, ["class"]), renderSlot(P.$slots, "bottom")];
    }), _: 3 }, T)), w(ssrRenderComponent(unref(C), mergeProps({ open: d.value, "onUpdate:open": (M) => d.value = M, title: unref(b)("header.title"), description: unref(b)("header.description") }, D.value, { ui: { overlay: v.value.overlay({ class: (_b = a.ui) == null ? void 0 : _b.overlay }), content: v.value.content({ class: (_c = a.ui) == null ? void 0 : _c.content }) } }), { content: withCtx((M, z, y, B) => {
      if (z) ssrRenderSlot(P.$slots, "content", M, () => {
        var _a4, _b2;
        e.mode !== "drawer" ? (z(`<div data-slot="header" class="${ssrRenderClass(v.value.header({ class: (_a4 = a.ui) == null ? void 0 : _a4.header }))}"${B}>`), z(ssrRenderComponent(unref(S), null, null, y, B)), z(ssrRenderComponent(unref(f), null, null, y, B)), z("</div>")) : z("<!---->"), z(`<div data-slot="body" class="${ssrRenderClass(v.value.body({ class: (_b2 = a.ui) == null ? void 0 : _b2.body }))}"${B}>`), ssrRenderSlot(P.$slots, "body", {}, null, z, y, B), z("</div>");
      }, z, y, B);
      else return [renderSlot(P.$slots, "content", M, () => {
        var _a4, _b2;
        return [e.mode !== "drawer" ? (openBlock(), createBlock("div", { key: 0, "data-slot": "header", class: v.value.header({ class: (_a4 = a.ui) == null ? void 0 : _a4.header }) }, [createVNode(unref(S)), createVNode(unref(f))], 2)) : createCommentVNode("", true), createVNode("div", { "data-slot": "body", class: v.value.body({ class: (_b2 = a.ui) == null ? void 0 : _b2.body }) }, [renderSlot(P.$slots, "body")], 2)];
      })];
    }), _: 3 }, T)), w("<!--]-->");
  };
} }), Wt = ut.setup;
ut.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Header.vue"), Wt ? Wt(e, a) : void 0;
};
const xl = publicAssetsURL("/images/svg/logo.svg"), dt = {};
function $l(e, a, t, d) {
  a(`<img${ssrRenderAttrs(mergeProps({ src: xl, alt: "Logo" }, d))}>`);
}
const Gt = dt.setup;
dt.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("components/logo.vue"), Gt ? Gt(e, a) : void 0;
};
const pl = Object.assign(fo(dt, [["ssrRender", $l]]), { __name: "Logo" }), ft = {};
function wl(e, a, t, d) {
  const s = ae, b = W;
  a(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col sm:flex-row justify-center items-center gap-4" }, d))}><div class="flex flex-col gap-2 text-[#FFCC00] text-[24px] italic"><a href="tel:+79177666833">`), a(ssrRenderComponent(s, { name: "i-lucide-phone", size: "18" }, null, t)), a(' +7 (917) 766-68-33 </a><a href="tel:+79273242582">'), a(ssrRenderComponent(s, { name: "i-lucide-phone", size: "18" }, null, t)), a(" +7 (927) 324-25-82 </a></div>"), a(ssrRenderComponent(b, { class: "button-gradient h-16 uppercase flex items-center justify-center gap-3", icon: "i-lucide-phone-call", to: "tel:+79177666833" }, { default: withCtx((h, k, S, g) => {
    if (k) k(ssrRenderComponent(s, { name: "i-lucide-phone-call", size: "18" }, null, S, g)), k(" \u0412\u044B\u0437\u0432\u0430\u0442\u044C ");
    else return [createVNode(s, { name: "i-lucide-phone-call", size: "18" }), createTextVNode(" \u0412\u044B\u0437\u0432\u0430\u0442\u044C ")];
  }), _: 1 }, t)), a("</div>");
}
const Qt = ft.setup;
ft.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("components/phones.vue"), Qt ? Qt(e, a) : void 0;
};
const hl = Object.assign(fo(ft, [["ssrRender", wl]]), { __name: "Phones" }), vt = {};
function kl(e, a, t, d) {
  const s = $e, b = ut, h = pl, k = hl;
  a(`<div${ssrRenderAttrs(mergeProps({ class: "border-b border-b-primary/70" }, d))}>`), a(ssrRenderComponent(s, null, { default: withCtx((S, g, f, i) => {
    if (g) g(ssrRenderComponent(b, { back: "/", class: "border-b-0 relative" }, { left: withCtx((c, $, v, C) => {
      if ($) $(ssrRenderComponent(h, null, null, v, C));
      else return [createVNode(h)];
    }), body: withCtx((c, $, v, C) => {
      if ($) $(ssrRenderComponent(k, null, null, v, C));
      else return [createVNode(k)];
    }), right: withCtx((c, $, v, C) => {
      if ($) $(ssrRenderComponent(k, { class: "not-lg:hidden" }, null, v, C));
      else return [createVNode(k, { class: "not-lg:hidden" })];
    }), _: 1 }, f, i));
    else return [createVNode(b, { back: "/", class: "border-b-0 relative" }, { left: withCtx(() => [createVNode(h)]), body: withCtx(() => [createVNode(k)]), right: withCtx(() => [createVNode(k, { class: "not-lg:hidden" })]), _: 1 })];
  }), _: 1 }, t)), a("</div>");
}
const Yt = vt.setup;
vt.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("components/section/header.vue"), Yt ? Yt(e, a) : void 0;
};
const ql = Object.assign(fo(vt, [["ssrRender", kl]]), { __name: "SectionHeader" }), gt = {};
function Sl(e, a, t, d) {
  const s = $e, b = ae, h = W;
  a(`<div${ssrRenderAttrs(mergeProps({ class: "welcome-section w-full pt-10 mx-auto" }, d))}>`), a(ssrRenderComponent(s, { class: "h-[calc(100vh-100px)] flex flex-col justify-start gap-20" }, { default: withCtx((k, S, g, f) => {
    if (S) S(`<div class="cities-list w-full flex flex-col justify-center items-center gap-2"${f}><div class="flex text-[clamp(1.25rem,3vw,2.5rem)] justify-center items-center gap-1"${f}> \u041A\u0423\u041C\u0415\u0420\u0422\u0410\u0423 `), S(ssrRenderComponent(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }, null, g, f)), S(" \u0423\u0424\u0410 "), S(ssrRenderComponent(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }, null, g, f)), S(` \u041A\u0423\u041C\u0415\u0420\u0422\u0410\u0423 </div><div class="flex text-[clamp(1.25rem,3vw,2.5rem)] justify-center items-center gap-1"${f}> \u041C\u0415\u041B\u0415\u0423\u0417 `), S(ssrRenderComponent(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }, null, g, f)), S(" \u0423\u0424\u0410 "), S(ssrRenderComponent(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }, null, g, f)), S(` \u041C\u0415\u041B\u0415\u0423\u0417 </div><div class="flex text-[clamp(1.25rem,3vw,2.5rem)] justify-center items-center gap-1"${f}> \u0421\u0410\u041B\u0410\u0412\u0410\u0422 `), S(ssrRenderComponent(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }, null, g, f)), S(" \u0423\u0424\u0410 "), S(ssrRenderComponent(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }, null, g, f)), S(` \u0421\u0410\u041B\u0410\u0412\u0410\u0422 </div></div><div class="font-medium text-[clamp(1.25rem,3vw,3rem)] text-white text-center lg:text-left w-full lg:w-[70%]"${f}> \u041A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438 </div>`), S(ssrRenderComponent(h, { class: "lg:hidden button-gradient w-80 h-20 mx-auto my-10 uppercase flex items-center justify-center gap-3", icon: "i-lucide-phone-call", to: "tel:+79177666833" }, { default: withCtx((i, c, $, v) => {
      if (c) c(ssrRenderComponent(b, { name: "i-lucide-phone-call", size: "18" }, null, $, v)), c(" \u0412\u044B\u0437\u0432\u0430\u0442\u044C ");
      else return [createVNode(b, { name: "i-lucide-phone-call", size: "18" }), createTextVNode(" \u0412\u044B\u0437\u0432\u0430\u0442\u044C ")];
    }), _: 1 }, g, f)), S(`<div class="font-thin text-[clamp(1rem,3vw,2rem)] text-white text-center lg:text-left underline decoration-1 underline-offset-5"${f}> \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u0441 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043E\u043C </div>`);
    else return [createVNode("div", { class: "cities-list w-full flex flex-col justify-center items-center gap-2" }, [createVNode("div", { class: "flex text-[clamp(1.25rem,3vw,2.5rem)] justify-center items-center gap-1" }, [createTextVNode(" \u041A\u0423\u041C\u0415\u0420\u0422\u0410\u0423 "), createVNode(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }), createTextVNode(" \u0423\u0424\u0410 "), createVNode(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }), createTextVNode(" \u041A\u0423\u041C\u0415\u0420\u0422\u0410\u0423 ")]), createVNode("div", { class: "flex text-[clamp(1.25rem,3vw,2.5rem)] justify-center items-center gap-1" }, [createTextVNode(" \u041C\u0415\u041B\u0415\u0423\u0417 "), createVNode(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }), createTextVNode(" \u0423\u0424\u0410 "), createVNode(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }), createTextVNode(" \u041C\u0415\u041B\u0415\u0423\u0417 ")]), createVNode("div", { class: "flex text-[clamp(1.25rem,3vw,2.5rem)] justify-center items-center gap-1" }, [createTextVNode(" \u0421\u0410\u041B\u0410\u0412\u0410\u0422 "), createVNode(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }), createTextVNode(" \u0423\u0424\u0410 "), createVNode(b, { name: "i-lucide-arrow-right", class: "h-6 w-6" }), createTextVNode(" \u0421\u0410\u041B\u0410\u0412\u0410\u0422 ")])]), createVNode("div", { class: "font-medium text-[clamp(1.25rem,3vw,3rem)] text-white text-center lg:text-left w-full lg:w-[70%]" }, " \u041A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438 "), createVNode(h, { class: "lg:hidden button-gradient w-80 h-20 mx-auto my-10 uppercase flex items-center justify-center gap-3", icon: "i-lucide-phone-call", to: "tel:+79177666833" }, { default: withCtx(() => [createVNode(b, { name: "i-lucide-phone-call", size: "18" }), createTextVNode(" \u0412\u044B\u0437\u0432\u0430\u0442\u044C ")]), _: 1 }), createVNode("div", { class: "font-thin text-[clamp(1rem,3vw,2rem)] text-white text-center lg:text-left underline decoration-1 underline-offset-5" }, " \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u0441 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043E\u043C ")];
  }), _: 1 }, t)), a("</div>");
}
const Xt = gt.setup;
gt.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("components/section/welcome.vue"), Xt ? Xt(e, a) : void 0;
};
const Cl = Object.assign(fo(gt, [["ssrRender", Sl]]), { __name: "SectionWelcome" }), mt = defineComponent({ __name: "title", __ssrInlineRender: true, props: { title: {} }, setup(e) {
  return (a, t, d, s) => {
    t(`<h2${ssrRenderAttrs(mergeProps({ class: "w-full text-[clamp(1.25rem,3vw,3rem)] text-center" }, s))}>${ssrInterpolate(e.title)}</h2>`);
  };
} }), Zt = mt.setup;
mt.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("components/section/title.vue"), Zt ? Zt(e, a) : void 0;
};
const zl = Object.assign(mt, { __name: "SectionTitle" }), Jt = publicAssetsURL("/images/svg/arrow-b.svg"), bt = defineComponent({ __name: "advantages", __ssrInlineRender: true, setup(e) {
  const a = [{ message: [{ color: "#FFCC00", text: "\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0441\u0442\u0430\u0436" }, { color: "#FFFFFF", text: "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439" }], description: "\u0441\u0442\u0430\u0436 \u043D\u0430\u0448\u0438\u0445 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u043E\u0442 7 - 10 \u043B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430" }, { message: [{ color: "#FFFFFF", text: "\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0438" }, { color: "#FFCC00", text: "\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C" }], description: "\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E" }, { message: [{ color: "#FFFFFF", text: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0438" }, { color: "#FFCC00", text: "\u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044F" }], description: "\u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043E\u0442\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B" }, { message: [{ color: "#FFFFFF", text: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u0438" }, { color: "#FFCC00", text: "\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430" }], description: "\u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u043C \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043F\u043E\u0441\u044B\u043B\u043E\u043A", lost: true }];
  return (t, d, s, b) => {
    const h = $e, k = zl;
    d(`<div${ssrRenderAttrs(mergeProps({ class: "section-advantages w-full mx-auto h-auto pt-5 pb-10 border-b border-b-primary/70" }, b))}>`), d(ssrRenderComponent(h, { class: "flex flex-col justify-start items-center gap-5" }, { default: withCtx((S, g, f, i) => {
      if (g) g(ssrRenderComponent(k, { title: "\u041D\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430" }, null, f, i)), g(`<div class="lg:w-[70%] flex flex-col justify-center items-center gap-5"${i}><!--[-->`), ssrRenderList(a, (c, $) => {
        g(`<!--[--><div class="item flex flex-col justify-center items-center gap-1 w-full"${i}><div class="flex flex-row justify-center items-center gap-2 w-full text-white"${i}><!--[-->`), ssrRenderList(c.message, (v) => {
          g(`<span class="${ssrRenderClass(`uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${v.color}]`)}"${i}>${ssrInterpolate(v.text)}</span>`);
        }), g(`<!--]--></div><div class="text-white sm:text-[10px] md:text-[14px] lg:text-[20px] w-full text-center uppercase"${i}>${ssrInterpolate(c.description)}</div></div>`), c.lost ? g("<!---->") : g(`<img${ssrRenderAttr("src", Jt)} alt="arrow-b" class="h-7"${i}>`), g("<!--]-->");
      }), g("<!--]--></div>");
      else return [createVNode(k, { title: "\u041D\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430" }), createVNode("div", { class: "lg:w-[70%] flex flex-col justify-center items-center gap-5" }, [(openBlock(true), createBlock(Fragment, null, renderList(a, (c, $) => (openBlock(), createBlock(Fragment, { key: $ }, [createVNode("div", { class: "item flex flex-col justify-center items-center gap-1 w-full" }, [createVNode("div", { class: "flex flex-row justify-center items-center gap-2 w-full text-white" }, [(openBlock(true), createBlock(Fragment, null, renderList(c.message, (v) => (openBlock(), createBlock("span", { class: `uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${v.color}]` }, toDisplayString(v.text), 3))), 256))]), createVNode("div", { class: "text-white sm:text-[10px] md:text-[14px] lg:text-[20px] w-full text-center uppercase" }, toDisplayString(c.description), 1)]), c.lost ? createCommentVNode("", true) : (openBlock(), createBlock("img", { key: 0, src: Jt, alt: "arrow-b", class: "h-7" }))], 64))), 128))])];
    }), _: 1 }, s)), d("</div>");
  };
} }), It = bt.setup;
bt.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("components/section/advantages.vue"), It ? It(e, a) : void 0;
};
const jl = Object.assign(bt, { __name: "SectionAdvantages" }), Bl = defineAsyncComponent(() => import('./reviews-bdLLziRK.mjs').then((e) => e.default || e)), Ol = defineAsyncComponent(() => import('./order-DtXTrQIT.mjs').then((e) => e.default || e)), Al = defineAsyncComponent(() => import('./footer-k1obGIaI.mjs').then((e) => e.default || e)), yt = defineComponent({ __name: "index", __ssrInlineRender: true, setup(e) {
  return Lo({ title: "\u0422\u0430\u043A\u0441\u0438 \u042D\u043A\u0441\u043F\u0440\u0435\u0441\u0441 | \u041C\u0435\u0436\u0433\u043E\u0440\u043E\u0434\u043D\u0435\u0435 \u0442\u0430\u043A\u0441\u0438 \u0438\u0437 \u041A\u0443\u043C\u0435\u0440\u0442\u0430\u0443 \u0423\u0444\u0430", ogTitle: "\u0422\u0430\u043A\u0441\u0438 \u042D\u043A\u0441\u043F\u0440\u0435\u0441\u0441 | \u041C\u0435\u0436\u0433\u043E\u0440\u043E\u0434\u043D\u0435\u0435 \u0442\u0430\u043A\u0441\u0438 \u0438\u0437 \u041A\u0443\u043C\u0435\u0440\u0442\u0430\u0443 \u0423\u0444\u0430", description: "\u0422\u0430\u043A\u0441\u0438 \u041A\u0443\u043C\u0435\u0440\u0442\u0430\u0443 - \u0423\u0444\u0430, \u041C\u0435\u043B\u0435\u0443\u0437 - \u0423\u0444\u0430, \u0421\u0430\u043B\u0430\u0432\u0430\u0442 - \u0423\u0444\u0430 | \u0422\u0430\u043A\u0441\u0438 Express - \u0431\u044B\u0441\u0442\u0440\u043E, \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u043E. \u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0430\u043A\u0441\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u0438 \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044C \u043F\u043E\u0435\u0437\u0434\u043A\u043E\u0439!", ogDescription: "\u0422\u0430\u043A\u0441\u0438 \u041A\u0443\u043C\u0435\u0440\u0442\u0430\u0443 - \u0423\u0444\u0430, \u041C\u0435\u043B\u0435\u0443\u0437 - \u0423\u0444\u0430, \u0421\u0430\u043B\u0430\u0432\u0430\u0442 - \u0423\u0444\u0430 | \u0422\u0430\u043A\u0441\u0438 Express - \u0431\u044B\u0441\u0442\u0440\u043E, \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u043E. \u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0430\u043A\u0441\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u0438 \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044C \u043F\u043E\u0435\u0437\u0434\u043A\u043E\u0439!", twitterCard: "summary_large_image" }), (a, t, d, s) => {
    const b = fl, h = ql, k = Cl, S = jl, g = Bl, f = Ol, i = Al;
    t(ssrRenderComponent(b, s, { default: withCtx((c, $, v, C) => {
      if ($) $(ssrRenderComponent(h, null, null, v, C)), $(ssrRenderComponent(k, null, null, v, C)), $(ssrRenderComponent(S, null, null, v, C)), $(ssrRenderComponent(g, null, null, v, C)), $(ssrRenderComponent(f, null, null, v, C)), $(ssrRenderComponent(i, null, null, v, C));
      else return [createVNode(h), createVNode(k), createVNode(S), createVNode(g), createVNode(f), createVNode(i)];
    }), _: 1 }, d));
  };
} }), _t = yt.setup;
yt.setup = (e, a) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), _t ? _t(e, a) : void 0;
};
const Gl = Object.freeze(Object.defineProperty({ __proto__: null, default: yt }, Symbol.toStringTag, { value: "Module" }));

export { ae as _, ct as a, Q as b, Xa as c, Qa as d, be as e, Ka as f, rt as g, $e as h, zl as i, pl as j, Gl as k, Hl as l, G as t, Wl as u };
//# sourceMappingURL=index-CdhGuka8.mjs.map

import { defineComponent, withCtx, createVNode, reactive, defineAsyncComponent, getCurrentInstance, onMounted, isRef, watch, onScopeDispose, ref, toRef, provide, unref, mergeProps, useId, renderSlot, openBlock, createBlock, hasInjectionContext, inject, computed, resolveDynamicComponent, useSlots, useModel, createCommentVNode, createTextVNode, toDisplayString, mergeModels, Fragment, renderList, toRefs, useTemplateRef, withModifiers, normalizeProps, guardReactiveProps, watchEffect, normalizeStyle, shallowReactive, markRaw, createElementBlock, Teleport, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { p as portalTargetInjectionKey, C as ConfigProvider_default, a as usePortal, T as Teleport_default, f as focusFirst$1, P as Presence_default, g as getActiveElement, V as VisuallyHidden_default, b as getTabbableCandidates, i as isNullish } from './overlay-BG1xKR7v.mjs';
import { k as useForwardProps$1, u as useComponentProps, g as getSlotChildrenText, t as tv, b as _sfc_main$f, c as _sfc_main$1$1, P as Primitive, a as useForwardProps, o as omit, _ as _sfc_main$5$1, e as _sfc_main$3$1, j as createContext } from './Button-D7hwtKF6.mjs';
import { T as TooltipProvider_default, _ as _sfc_main$e } from './Slideover-BrwUM_ju.mjs';
import { reactivePick, createReusableTemplate, createSharedComposable, onKeyStroke, unrefElement, useVModel, useRafFn } from '@vueuse/core';
import { l as localeContextInjectionKey, u as useLocale } from './useLocale-CasdCEot.mjs';
import { u as useCollection } from './Collection-Bx5WsODp.mjs';
import { u as useForwardExpose } from './useForwardExpose-C3mVDiKg.mjs';
import { u as useToast, t as toastMaxInjectionKey } from './useToast-CZLK1bG2.mjs';
import { isClient, useTimeout } from '@vueuse/shared';
import { h as __nuxt_component_2, c as useNuxtApp, i as injectHead$1, _ as _export_sfc, g as useRuntimeConfig, e as useRoute, b as useAppConfig } from './server.mjs';
import { _ as _sfc_main$b } from './Container-BxaGJmMa.mjs';
import { z as defu, p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _sfc_main$d } from './Modal-BGQEWp84.mjs';
import { _ as _sfc_main$c } from './Drawer-CBvvA4dC.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-BVaogQjF.mjs';
import { u as utils } from './index-CzlXzl75.mjs';
import { useScript as useScript$2 } from 'unhead/scripts';
import 'aria-hidden';
import 'tailwind-variants';
import './index-ByCR7jEh.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-CR0bxPSR.mjs';
import 'perfect-debounce';
import './state-DVSaO_PC.mjs';
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
import 'vaul-vue';

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (instance) {
      return instance;
    }
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
var DismissableLayerBranch_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DismissableLayerBranch",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { forwardRef } = useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps({ ref: unref(forwardRef) }, props), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DismissableLayerBranch_default = DismissableLayerBranch_vue_vue_type_script_setup_true_lang_default;
const DEFAULT_MAX = 100;
const [injectProgressRootContext, provideProgressRootContext] = /* @__PURE__ */ createContext("ProgressRoot");
const isNumber = (v) => typeof v === "number";
function validateValue(value, max) {
  const isValidValueError = isNullish(value) || isNumber(value) && !Number.isNaN(value) && value <= max && value >= 0;
  if (isValidValueError) return value;
  console.error(`Invalid prop \`value\` of value \`${value}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`);
  return null;
}
function validateMax(max) {
  const isValidMaxError = isNumber(max) && !Number.isNaN(max) && max > 0;
  if (isValidMaxError) return max;
  console.error(`Invalid prop \`max\` of value \`${max}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`);
  return DEFAULT_MAX;
}
var ProgressRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {
      type: [Number, null],
      required: false
    },
    max: {
      type: Number,
      required: false,
      default: DEFAULT_MAX
    },
    getValueLabel: {
      type: Function,
      required: false,
      default: (value, max) => isNumber(value) ? `${Math.round(value / max * DEFAULT_MAX)}%` : void 0
    },
    getValueText: {
      type: Function,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: ["update:modelValue", "update:max"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useForwardExpose();
    const modelValue = useVModel(props, "modelValue", emit, { passive: props.modelValue === void 0 });
    const max = useVModel(props, "max", emit, { passive: props.max === void 0 });
    watch(() => modelValue.value, async (value) => {
      const correctedValue = validateValue(value, props.max);
      if (correctedValue !== value) {
        await nextTick();
        modelValue.value = correctedValue;
      }
    }, { immediate: true });
    watch(() => props.max, (newMax) => {
      const correctedMax = validateMax(props.max);
      if (correctedMax !== newMax) max.value = correctedMax;
    }, { immediate: true });
    const progressState = computed(() => {
      if (isNullish(modelValue.value)) return "indeterminate";
      if (modelValue.value === max.value) return "complete";
      return "loading";
    });
    provideProgressRootContext({
      modelValue,
      max,
      progressState
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        "as-child": _ctx.asChild,
        as: _ctx.as,
        "aria-valuemax": unref(max),
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(unref(modelValue)) ? unref(modelValue) : void 0,
        "aria-valuetext": _ctx.getValueText?.(unref(modelValue), unref(max)),
        "aria-label": _ctx.getValueLabel(unref(modelValue), unref(max)),
        role: "progressbar",
        "data-state": progressState.value,
        "data-value": unref(modelValue) ?? void 0,
        "data-max": unref(max)
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
        _: 3
      }, 8, [
        "as-child",
        "as",
        "aria-valuemax",
        "aria-valuenow",
        "aria-valuetext",
        "aria-label",
        "data-state",
        "data-value",
        "data-max"
      ]);
    };
  }
});
var ProgressRoot_default = ProgressRoot_vue_vue_type_script_setup_true_lang_default;
var ProgressIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectProgressRootContext();
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        "data-state": unref(rootContext).progressState.value,
        "data-value": unref(rootContext).modelValue?.value ?? void 0,
        "data-max": unref(rootContext).max.value
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "data-state",
        "data-value",
        "data-max"
      ]);
    };
  }
});
var ProgressIndicator_default = ProgressIndicator_vue_vue_type_script_setup_true_lang_default;
var ToastAnnounceExclude_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "data-reka-toast-announce-exclude": "",
        "data-reka-toast-announce-alt": _ctx.altText || void 0
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-reka-toast-announce-alt"
      ]);
    };
  }
});
var ToastAnnounceExclude_default = ToastAnnounceExclude_vue_vue_type_script_setup_true_lang_default;
const [injectToastProviderContext, provideToastProviderContext] = /* @__PURE__ */ createContext("ToastProvider");
var ToastProvider_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastProvider",
  props: {
    label: {
      type: String,
      required: false,
      default: "Notification"
    },
    duration: {
      type: Number,
      required: false,
      default: 5e3
    },
    disableSwipe: {
      type: Boolean,
      required: false
    },
    swipeDirection: {
      type: String,
      required: false,
      default: "right"
    },
    swipeThreshold: {
      type: Number,
      required: false,
      default: 50
    }
  },
  setup(__props) {
    const props = __props;
    const { label, duration, disableSwipe, swipeDirection, swipeThreshold } = toRefs(props);
    useCollection({ isProvider: true });
    const viewport = ref();
    const toastCount = ref(0);
    const isFocusedToastEscapeKeyDownRef = ref(false);
    const isClosePausedRef = ref(false);
    if (props.label && typeof props.label === "string" && !props.label.trim()) {
      const error = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(error);
    }
    provideToastProviderContext({
      label,
      duration,
      disableSwipe,
      swipeDirection,
      swipeThreshold,
      toastCount,
      viewport,
      onViewportChange(el) {
        viewport.value = el;
      },
      onToastAdd() {
        toastCount.value++;
      },
      onToastRemove() {
        toastCount.value--;
      },
      isFocusedToastEscapeKeyDownRef,
      isClosePausedRef
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var ToastProvider_default = ToastProvider_vue_vue_type_script_setup_true_lang_default;
var ToastAnnounce_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastAnnounce",
  setup(__props) {
    const providerContext = injectToastProviderContext();
    const isAnnounced = useTimeout(1e3);
    const renderAnnounceText = ref(false);
    let raf1 = 0;
    let raf2 = 0;
    if (isClient) {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          renderAnnounceText.value = true;
        });
      });
      onScopeDispose(() => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      });
    }
    return (_ctx, _cache) => {
      return unref(isAnnounced) || renderAnnounceText.value ? (openBlock(), createBlock(unref(VisuallyHidden_default), {
        key: 0,
        feature: "fully-hidden"
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref(providerContext).label.value) + " ", 1), renderSlot(_ctx.$slots, "default")]),
        _: 3
      })) : createCommentVNode("v-if", true);
    };
  }
});
var ToastAnnounce_default = ToastAnnounce_vue_vue_type_script_setup_true_lang_default;
const TOAST_SWIPE_START = "toast.swipeStart";
const TOAST_SWIPE_MOVE = "toast.swipeMove";
const TOAST_SWIPE_CANCEL = "toast.swipeCancel";
const TOAST_SWIPE_END = "toast.swipeEnd";
const VIEWPORT_PAUSE = "toast.viewportPause";
const VIEWPORT_RESUME = "toast.viewportResume";
function handleAndDispatchCustomEvent(name, handler, detail) {
  const currentTarget = detail.originalEvent.currentTarget;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler) currentTarget.addEventListener(name, handler, { once: true });
  currentTarget.dispatchEvent(event);
}
function isDeltaInDirection(delta, direction, threshold = 0) {
  const deltaX = Math.abs(delta.x);
  const deltaY = Math.abs(delta.y);
  const isDeltaX = deltaX > deltaY;
  if (direction === "left" || direction === "right") return isDeltaX && deltaX > threshold;
  else return !isDeltaX && deltaY > threshold;
}
function isHTMLElement(node) {
  return node.nodeType === node.ELEMENT_NODE;
}
function getAnnounceTextContent(container) {
  const textContent = [];
  const childNodes = Array.from(container.childNodes);
  childNodes.forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
    if (isHTMLElement(node)) {
      const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
      const isExcluded = node.dataset.rekaToastAnnounceExclude === "";
      if (!isHidden) if (isExcluded) {
        const altText = node.dataset.rekaToastAnnounceAlt;
        if (altText) textContent.push(altText);
      } else textContent.push(...getAnnounceTextContent(node));
    }
  });
  return textContent;
}
const [injectToastRootContext, provideToastRootContext] = /* @__PURE__ */ createContext("ToastRoot");
var ToastRootImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastRootImpl",
  props: {
    type: {
      type: String,
      required: false
    },
    open: {
      type: Boolean,
      required: false,
      default: false
    },
    duration: {
      type: Number,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "li"
    }
  },
  emits: [
    "close",
    "escapeKeyDown",
    "pause",
    "resume",
    "swipeStart",
    "swipeMove",
    "swipeCancel",
    "swipeEnd"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement } = useForwardExpose();
    const { CollectionItem } = useCollection();
    const providerContext = injectToastProviderContext();
    const pointerStartRef = ref(null);
    const swipeDeltaRef = ref(null);
    const duration = computed(() => typeof props.duration === "number" ? props.duration : providerContext.duration.value);
    const closeTimerStartTimeRef = ref(0);
    const closeTimerRemainingTimeRef = ref(duration.value);
    const closeTimerRef = ref(0);
    const remainingTime = ref(duration.value);
    const remainingRaf = useRafFn(() => {
      const elapsedTime = Date.now() - closeTimerStartTimeRef.value;
      remainingTime.value = Math.max(closeTimerRemainingTimeRef.value - elapsedTime, 0);
    }, { fpsLimit: 60 });
    function startTimer(duration$1) {
      if (duration$1 <= 0 || duration$1 === Number.POSITIVE_INFINITY) return;
      if (!isClient) return;
      (void 0).clearTimeout(closeTimerRef.value);
      closeTimerStartTimeRef.value = Date.now();
      closeTimerRef.value = (void 0).setTimeout(handleClose, duration$1);
    }
    function handleClose(event) {
      const isNonPointerEvent = event?.pointerType === "";
      const isFocusInToast = currentElement.value?.contains(getActiveElement());
      if (isFocusInToast && isNonPointerEvent) providerContext.viewport.value?.focus();
      if (isNonPointerEvent) providerContext.isClosePausedRef.value = false;
      emits("close");
    }
    const announceTextContent = computed(() => currentElement.value ? getAnnounceTextContent(currentElement.value) : null);
    if (props.type && !["foreground", "background"].includes(props.type)) {
      const error = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(error);
    }
    watchEffect((cleanupFn) => {
      const viewport = providerContext.viewport.value;
      if (viewport) {
        const handleResume = () => {
          startTimer(closeTimerRemainingTimeRef.value);
          remainingRaf.resume();
          emits("resume");
        };
        const handlePause = () => {
          const elapsedTime = Date.now() - closeTimerStartTimeRef.value;
          closeTimerRemainingTimeRef.value = closeTimerRemainingTimeRef.value - elapsedTime;
          (void 0).clearTimeout(closeTimerRef.value);
          remainingRaf.pause();
          emits("pause");
        };
        viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
        viewport.addEventListener(VIEWPORT_RESUME, handleResume);
        return () => {
          viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
          viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
        };
      }
    });
    watch(() => [props.open, duration.value], () => {
      closeTimerRemainingTimeRef.value = duration.value;
      if (props.open && !providerContext.isClosePausedRef.value) startTimer(duration.value);
    }, { immediate: true });
    onKeyStroke("Escape", (event) => {
      emits("escapeKeyDown", event);
      if (!event.defaultPrevented) {
        providerContext.isFocusedToastEscapeKeyDownRef.value = true;
        handleClose();
      }
    });
    provideToastRootContext({ onClose: handleClose });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [announceTextContent.value ? (openBlock(), createBlock(ToastAnnounce_default, {
        key: 0,
        role: "alert",
        "aria-live": _ctx.type === "foreground" ? "assertive" : "polite"
      }, {
        default: withCtx(() => [createCommentVNode("\n      Render each chunk as its own text node so screen readers get the\n      natural pause break between nodes (see comment in utils.ts).\n      Interpolating the array directly with `{{ announceTextContent }}`\n      would route through Vue's `toDisplayString`, which JSON-stringifies\n      arrays — the live region would then announce literal `[`, quotes\n      and commas instead of the toast title and description.\n    "), (openBlock(true), createElementBlock(Fragment, null, renderList(announceTextContent.value, (text, i) => {
          return openBlock(), createElementBlock(Fragment, { key: i }, [createTextVNode(toDisplayString(text), 1)], 64);
        }), 128))]),
        _: 1
      }, 8, ["aria-live"])) : createCommentVNode("v-if", true), unref(providerContext).viewport.value ? (openBlock(), createBlock(Teleport, {
        key: 1,
        to: unref(providerContext).viewport.value
      }, [createVNode(unref(CollectionItem), null, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
          ref: unref(forwardRef),
          tabindex: "0"
        }, _ctx.$attrs, {
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "data-state": _ctx.open ? "open" : "closed",
          "data-swipe-direction": unref(providerContext).swipeDirection.value,
          style: unref(providerContext).disableSwipe.value ? void 0 : {
            userSelect: "none",
            touchAction: "none"
          },
          onPointerdown: _cache[0] || (_cache[0] = withModifiers((event) => {
            if (unref(providerContext).disableSwipe.value) return;
            pointerStartRef.value = {
              x: event.clientX,
              y: event.clientY
            };
          }, ["left"])),
          onPointermove: _cache[1] || (_cache[1] = (event) => {
            if (unref(providerContext).disableSwipe.value || !pointerStartRef.value) return;
            const x = event.clientX - pointerStartRef.value.x;
            const y = event.clientY - pointerStartRef.value.y;
            const hasSwipeMoveStarted = Boolean(swipeDeltaRef.value);
            const isHorizontalSwipe = ["left", "right"].includes(unref(providerContext).swipeDirection.value);
            const clamp = ["left", "up"].includes(unref(providerContext).swipeDirection.value) ? Math.min : Math.max;
            const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
            const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
            const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
            const delta = {
              x: clampedX,
              y: clampedY
            };
            const eventDetail = {
              originalEvent: event,
              delta
            };
            if (hasSwipeMoveStarted) {
              swipeDeltaRef.value = delta;
              unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_MOVE), (ev) => emits("swipeMove", ev), eventDetail);
            } else if (unref(isDeltaInDirection)(delta, unref(providerContext).swipeDirection.value, moveStartBuffer)) {
              swipeDeltaRef.value = delta;
              unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_START), (ev) => emits("swipeStart", ev), eventDetail);
              event.target.setPointerCapture(event.pointerId);
            } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) pointerStartRef.value = null;
          }),
          onPointerup: _cache[2] || (_cache[2] = (event) => {
            if (unref(providerContext).disableSwipe.value) return;
            const delta = swipeDeltaRef.value;
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
            swipeDeltaRef.value = null;
            pointerStartRef.value = null;
            if (delta) {
              const toast = event.currentTarget;
              const eventDetail = {
                originalEvent: event,
                delta
              };
              if (unref(isDeltaInDirection)(delta, unref(providerContext).swipeDirection.value, unref(providerContext).swipeThreshold.value)) unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_END), (ev) => emits("swipeEnd", ev), eventDetail);
              else unref(handleAndDispatchCustomEvent)(unref(TOAST_SWIPE_CANCEL), (ev) => emits("swipeCancel", ev), eventDetail);
              toast?.addEventListener("click", (event$1) => event$1.preventDefault(), { once: true });
            }
          })
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
            remaining: remainingTime.value,
            duration: duration.value
          })]),
          _: 3
        }, 16, [
          "as",
          "as-child",
          "data-state",
          "data-swipe-direction",
          "style"
        ])]),
        _: 3
      })], 8, ["to"])) : createCommentVNode("v-if", true)], 64);
    };
  }
});
var ToastRootImpl_default = ToastRootImpl_vue_vue_type_script_setup_true_lang_default;
var ToastClose_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastClose",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectToastRootContext();
    const { forwardRef } = useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ToastAnnounceExclude_default, { "as-child": "" }, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps(props, {
          ref: unref(forwardRef),
          type: _ctx.as === "button" ? "button" : void 0,
          onClick: unref(rootContext).onClose
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, ["type", "onClick"])]),
        _: 3
      });
    };
  }
});
var ToastClose_default = ToastClose_vue_vue_type_script_setup_true_lang_default;
var ToastAction_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastAction",
  props: {
    altText: {
      type: String,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    if (!props.altText) throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef } = useForwardExpose();
    return (_ctx, _cache) => {
      return _ctx.altText ? (openBlock(), createBlock(ToastAnnounceExclude_default, {
        key: 0,
        "alt-text": _ctx.altText,
        "as-child": ""
      }, {
        default: withCtx(() => [createVNode(ToastClose_default, {
          ref: unref(forwardRef),
          as: _ctx.as,
          "as-child": _ctx.asChild
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, ["as", "as-child"])]),
        _: 3
      }, 8, ["alt-text"])) : createCommentVNode("v-if", true);
    };
  }
});
var ToastAction_default = ToastAction_vue_vue_type_script_setup_true_lang_default;
var ToastDescription_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastDescription",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var ToastDescription_default = ToastDescription_vue_vue_type_script_setup_true_lang_default;
var ToastPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var ToastPortal_default = ToastPortal_vue_vue_type_script_setup_true_lang_default;
var ToastRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: true
    },
    forceMount: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "foreground"
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    duration: {
      type: Number,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "li"
    }
  },
  emits: [
    "escapeKeyDown",
    "pause",
    "resume",
    "swipeStart",
    "swipeMove",
    "swipeCancel",
    "swipeEnd",
    "update:open"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef } = useForwardExpose();
    const open = useVModel(props, "open", emits, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(open) }, {
        default: withCtx(() => [createVNode(ToastRootImpl_default, mergeProps({
          ref: unref(forwardRef),
          open: unref(open),
          type: _ctx.type,
          as: _ctx.as,
          "as-child": _ctx.asChild,
          duration: _ctx.duration
        }, _ctx.$attrs, {
          onClose: _cache[0] || (_cache[0] = ($event) => open.value = false),
          onPause: _cache[1] || (_cache[1] = ($event) => emits("pause")),
          onResume: _cache[2] || (_cache[2] = ($event) => emits("resume")),
          onEscapeKeyDown: _cache[3] || (_cache[3] = ($event) => emits("escapeKeyDown", $event)),
          onSwipeStart: _cache[4] || (_cache[4] = (event) => {
            emits("swipeStart", event);
            if (!event.defaultPrevented) event.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: _cache[5] || (_cache[5] = (event) => {
            emits("swipeMove", event);
            if (!event.defaultPrevented) {
              const { x, y } = event.detail.delta;
              const target = event.currentTarget;
              target.setAttribute("data-swipe", "move");
              target.style.setProperty("--reka-toast-swipe-move-x", `${x}px`);
              target.style.setProperty("--reka-toast-swipe-move-y", `${y}px`);
            }
          }),
          onSwipeCancel: _cache[6] || (_cache[6] = (event) => {
            emits("swipeCancel", event);
            if (!event.defaultPrevented) {
              const target = event.currentTarget;
              target.setAttribute("data-swipe", "cancel");
              target.style.removeProperty("--reka-toast-swipe-move-x");
              target.style.removeProperty("--reka-toast-swipe-move-y");
              target.style.removeProperty("--reka-toast-swipe-end-x");
              target.style.removeProperty("--reka-toast-swipe-end-y");
            }
          }),
          onSwipeEnd: _cache[7] || (_cache[7] = (event) => {
            emits("swipeEnd", event);
            if (!event.defaultPrevented) {
              const { x, y } = event.detail.delta;
              const target = event.currentTarget;
              target.setAttribute("data-swipe", "end");
              target.style.removeProperty("--reka-toast-swipe-move-x");
              target.style.removeProperty("--reka-toast-swipe-move-y");
              target.style.setProperty("--reka-toast-swipe-end-x", `${x}px`);
              target.style.setProperty("--reka-toast-swipe-end-y", `${y}px`);
              open.value = false;
            }
          })
        }), {
          default: withCtx(({ remaining, duration: _duration }) => [renderSlot(_ctx.$slots, "default", {
            remaining,
            duration: _duration,
            open: unref(open)
          })]),
          _: 3
        }, 16, [
          "open",
          "type",
          "as",
          "as-child",
          "duration"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var ToastRoot_default = ToastRoot_vue_vue_type_script_setup_true_lang_default;
var ToastTitle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ToastTitle",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var ToastTitle_default = ToastTitle_vue_vue_type_script_setup_true_lang_default;
var FocusProxy_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const providerContext = injectToastProviderContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(VisuallyHidden_default), {
        tabindex: "0",
        style: { "position": "fixed" },
        onFocus: _cache[0] || (_cache[0] = (event) => {
          const prevFocusedElement = event.relatedTarget;
          const isFocusFromOutsideViewport = !unref(providerContext).viewport.value?.contains(prevFocusedElement);
          if (isFocusFromOutsideViewport) emits("focusFromOutsideViewport");
        })
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      });
    };
  }
});
var FocusProxy_default = FocusProxy_vue_vue_type_script_setup_true_lang_default;
var ToastViewport_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastViewport",
  props: {
    hotkey: {
      type: Array,
      required: false,
      default: () => ["F8"]
    },
    label: {
      type: [String, Function],
      required: false,
      default: "Notifications ({hotkey})"
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "ol"
    }
  },
  setup(__props) {
    const props = __props;
    const { hotkey, label } = toRefs(props);
    const { forwardRef, currentElement } = useForwardExpose();
    const { CollectionSlot, getItems } = useCollection();
    const providerContext = injectToastProviderContext();
    const hasToasts = computed(() => providerContext.toastCount.value > 0);
    const headFocusProxyRef = ref();
    const tailFocusProxyRef = ref();
    const KEY_RE = /Key/g;
    const DIGIT_RE = /Digit/g;
    const hotkeyMessage = computed(() => hotkey.value.join("+").replace(KEY_RE, "").replace(DIGIT_RE, ""));
    onKeyStroke(hotkey.value, () => {
      currentElement.value.focus();
    });
    watchEffect((cleanupFn) => {
      const viewport = currentElement.value;
      if (hasToasts.value && viewport) {
        const handlePause = () => {
          if (!providerContext.isClosePausedRef.value) {
            const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
            viewport.dispatchEvent(pauseEvent);
            providerContext.isClosePausedRef.value = true;
          }
        };
        const handleResume = () => {
          if (providerContext.isClosePausedRef.value) {
            const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
            viewport.dispatchEvent(resumeEvent);
            providerContext.isClosePausedRef.value = false;
          }
        };
        const handleFocusOutResume = (event) => {
          const isFocusMovingOutside = !viewport.contains(event.relatedTarget);
          if (isFocusMovingOutside) handleResume();
        };
        const handlePointerLeaveResume = () => {
          const isFocusInside = viewport.contains(getActiveElement());
          if (!isFocusInside) handleResume();
        };
        const handleKeyDown = (event) => {
          const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
          const isTabKey = event.key === "Tab" && !isMetaKey;
          if (isTabKey) {
            const focusedElement = getActiveElement();
            const isTabbingBackwards = event.shiftKey;
            const targetIsViewport = event.target === viewport;
            if (targetIsViewport && isTabbingBackwards) {
              headFocusProxyRef.value?.focus();
              return;
            }
            const tabbingDirection = isTabbingBackwards ? "backwards" : "forwards";
            const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection });
            const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
            if (focusFirst$1(sortedCandidates.slice(index + 1))) event.preventDefault();
            else isTabbingBackwards ? headFocusProxyRef.value?.focus() : tailFocusProxyRef.value?.focus();
          }
        };
        viewport.addEventListener("focusin", handlePause);
        viewport.addEventListener("focusout", handleFocusOutResume);
        viewport.addEventListener("pointermove", handlePause);
        viewport.addEventListener("pointerleave", handlePointerLeaveResume);
        viewport.addEventListener("keydown", handleKeyDown);
        (void 0).addEventListener("blur", handlePause);
        (void 0).addEventListener("focus", handleResume);
        cleanupFn(() => {
          viewport.removeEventListener("focusin", handlePause);
          viewport.removeEventListener("focusout", handleFocusOutResume);
          viewport.removeEventListener("pointermove", handlePause);
          viewport.removeEventListener("pointerleave", handlePointerLeaveResume);
          viewport.removeEventListener("keydown", handleKeyDown);
          (void 0).removeEventListener("blur", handlePause);
          (void 0).removeEventListener("focus", handleResume);
        });
      }
    });
    function getSortedTabbableCandidates({ tabbingDirection }) {
      const toastItems = getItems().map((i) => i.ref);
      const tabbableCandidates = toastItems.map((toastNode) => {
        const toastTabbableCandidates = [toastNode, ...getTabbableCandidates(toastNode)];
        return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
      });
      return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DismissableLayerBranch_default), {
        role: "region",
        "aria-label": typeof unref(label) === "string" ? unref(label).replace("{hotkey}", hotkeyMessage.value) : unref(label)(hotkeyMessage.value),
        tabindex: "-1",
        style: normalizeStyle({ pointerEvents: hasToasts.value ? void 0 : "none" })
      }, {
        default: withCtx(() => [
          hasToasts.value ? (openBlock(), createBlock(FocusProxy_default, {
            key: 0,
            ref: (node) => {
              if (!node) return void 0;
              headFocusProxyRef.value = unref(unrefElement)(node);
              return void 0;
            },
            onFocusFromOutsideViewport: _cache[0] || (_cache[0] = () => {
              const tabbableCandidates = getSortedTabbableCandidates({ tabbingDirection: "forwards" });
              unref(focusFirst$1)(tabbableCandidates);
            })
          }, null, 512)) : createCommentVNode("v-if", true),
          createVNode(unref(CollectionSlot), null, {
            default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
              ref: unref(forwardRef),
              tabindex: "-1",
              as: _ctx.as,
              "as-child": _ctx.asChild
            }, _ctx.$attrs), {
              default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
              _: 3
            }, 16, ["as", "as-child"])]),
            _: 3
          }),
          hasToasts.value ? (openBlock(), createBlock(FocusProxy_default, {
            key: 1,
            ref: (node) => {
              if (!node) return void 0;
              tailFocusProxyRef.value = unref(unrefElement)(node);
              return void 0;
            },
            onFocusFromOutsideViewport: _cache[1] || (_cache[1] = () => {
              const tabbableCandidates = getSortedTabbableCandidates({ tabbingDirection: "backwards" });
              unref(focusFirst$1)(tabbableCandidates);
            })
          }, null, 512)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["aria-label", "style"]);
    };
  }
});
var ToastViewport_default = ToastViewport_vue_vue_type_script_setup_true_lang_default;
const onNuxtReady = (callback) => {
  {
    return;
  }
};
const theme$3 = {
  "slots": {
    "root": "gap-2",
    "base": "relative overflow-hidden rounded-full bg-accented",
    "indicator": "rounded-full size-full transition-transform duration-200 ease-out motion-reduce:data-[state=indeterminate]:animate-pulse",
    "status": "flex text-dimmed transition-[width] duration-200",
    "steps": "grid items-end",
    "step": "truncate text-end row-start-1 col-start-1 transition-opacity"
  },
  "variants": {
    "animation": {
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "color": {
      "primary": {
        "indicator": "bg-primary",
        "steps": "text-primary"
      },
      "secondary": {
        "indicator": "bg-secondary",
        "steps": "text-secondary"
      },
      "success": {
        "indicator": "bg-success",
        "steps": "text-success"
      },
      "info": {
        "indicator": "bg-info",
        "steps": "text-info"
      },
      "warning": {
        "indicator": "bg-warning",
        "steps": "text-warning"
      },
      "error": {
        "indicator": "bg-error",
        "steps": "text-error"
      },
      "neutral": {
        "indicator": "bg-inverted",
        "steps": "text-inverted"
      }
    },
    "size": {
      "2xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "sm": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "md": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "lg": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "xl": {
        "status": "text-base",
        "steps": "text-base"
      },
      "2xl": {
        "status": "text-base",
        "steps": "text-base"
      }
    },
    "step": {
      "active": {
        "step": "opacity-100"
      },
      "first": {
        "step": "opacity-100 text-muted"
      },
      "other": {
        "step": "opacity-0"
      },
      "last": {
        "step": ""
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex flex-col",
        "base": "w-full",
        "status": "flex-row items-center justify-end min-w-fit"
      },
      "vertical": {
        "root": "h-full flex flex-row-reverse",
        "base": "h-full",
        "status": "flex-col justify-end min-h-fit"
      }
    },
    "inverted": {
      "true": {
        "status": "self-end"
      }
    }
  },
  "compoundVariants": [
    {
      "inverted": true,
      "orientation": "horizontal",
      "class": {
        "step": "text-start",
        "status": "flex-row-reverse"
      }
    },
    {
      "inverted": true,
      "orientation": "vertical",
      "class": {
        "steps": "items-start",
        "status": "flex-col-reverse"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xs",
      "class": "h-px"
    },
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": "h-0.5"
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": "h-1"
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": "h-2"
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": "h-3"
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": "h-4"
    },
    {
      "orientation": "horizontal",
      "size": "2xl",
      "class": "h-5"
    },
    {
      "orientation": "vertical",
      "size": "2xs",
      "class": "w-px"
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": "w-0.5"
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": "w-1"
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": "w-2"
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": "w-3"
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": "w-4"
    },
    {
      "orientation": "vertical",
      "size": "2xl",
      "class": "w-5"
    },
    {
      "orientation": "horizontal",
      "animation": "carousel",
      "class": {
        "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel",
      "class": {
        "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "swing",
      "class": {
        "indicator": "motion-safe:data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "swing",
      "class": {
        "indicator": "motion-safe:data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "elastic",
      "class": {
        "indicator": "motion-safe:data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "elastic",
      "class": {
        "indicator": "motion-safe:data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]"
      }
    }
  ],
  "defaultVariants": {
    "animation": "carousel",
    "color": "primary",
    "size": "md"
  }
};
const _sfc_main$a = {
  __name: "UProgress",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    max: { type: [Number, Array], required: false },
    status: { type: Boolean, required: false },
    inverted: { type: Boolean, required: false, default: false },
    size: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    animation: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    getValueLabel: { type: Function, required: false },
    getValueText: { type: Function, required: false },
    modelValue: { type: [Number, null], required: false, default: null }
  },
  emits: ["update:modelValue", "update:max"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("progress", _props);
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "getValueLabel", "getValueText", "modelValue"), emits);
    const isIndeterminate = computed(() => rootProps.value.modelValue === null);
    const hasSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value || !props.max) {
        return void 0;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case rootProps.value.modelValue < 0:
          return 0;
        case rootProps.value.modelValue > (realMax.value ?? 100):
          return 100;
        default:
          return Math.round(rootProps.value.modelValue / (realMax.value ?? 100) * 100);
      }
    });
    const indicatorStyle = computed(() => {
      if (percent.value === void 0) {
        return;
      }
      if (props.orientation === "vertical") {
        return {
          transform: `translateY(${props.inverted ? "" : "-"}${100 - percent.value}%)`
        };
      } else {
        if (dir.value === "rtl") {
          return {
            transform: `translateX(${props.inverted ? "-" : ""}${100 - percent.value}%)`
          };
        } else {
          return {
            transform: `translateX(${props.inverted ? "" : "-"}${100 - percent.value}%)`
          };
        }
      }
    });
    const statusStyle = computed(() => {
      const value = `${Math.max(percent.value ?? 0, 0)}%`;
      return props.orientation === "vertical" ? { height: value } : { width: value };
    });
    function isActive(index) {
      return index === Number(props.modelValue);
    }
    function isFirst(index) {
      return index === 0;
    }
    function isLast(index) {
      return index === realMax.value;
    }
    function stepVariant(index) {
      index = Number(index);
      if (isActive(index) && !isFirst(index)) {
        return "active";
      }
      if (isFirst(index) && isActive(index)) {
        return "first";
      }
      if (isLast(index) && isActive(index)) {
        return "last";
      }
      return "other";
    }
    const ui = computed(() => tv({ extend: theme$3, ...appConfig.ui?.progress || {} })({
      animation: props.animation,
      size: props.size,
      color: props.color,
      orientation: props.orientation,
      inverted: props.inverted
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-orientation": unref(props).orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!isIndeterminate.value && (unref(props).status || !!slots.status)) {
              _push2(`<div data-slot="status" class="${ssrRenderClass(ui.value.status({ class: unref(props).ui?.status }))}" style="${ssrRenderStyle(statusStyle.value)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "status", { percent: percent.value }, () => {
                _push2(`${ssrInterpolate(percent.value)}% `);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(ProgressRoot_default), mergeProps(unref(rootProps), {
              max: realMax.value,
              "data-slot": "base",
              class: ui.value.base({ class: unref(props).ui?.base }),
              style: { "transform": "translateZ(0)" }
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProgressIndicator_default), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: unref(props).ui?.indicator }),
                    style: indicatorStyle.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ProgressIndicator_default), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: unref(props).ui?.indicator }),
                      style: indicatorStyle.value
                    }, null, 8, ["class", "style"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (hasSteps.value) {
              _push2(`<div data-slot="steps" class="${ssrRenderClass(ui.value.steps({ class: unref(props).ui?.steps }))}"${_scopeId}><!--[-->`);
              ssrRenderList(unref(props).max, (step, index) => {
                _push2(`<div data-slot="step" class="${ssrRenderClass(ui.value.step({ class: unref(props).ui?.step, step: stepVariant(index) }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `step-${index}`, { step }, () => {
                  _push2(`${ssrInterpolate(step)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !isIndeterminate.value && (unref(props).status || !!slots.status) ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "status",
                class: ui.value.status({ class: unref(props).ui?.status }),
                style: statusStyle.value
              }, [
                renderSlot(_ctx.$slots, "status", { percent: percent.value }, () => [
                  createTextVNode(toDisplayString(percent.value) + "% ", 1)
                ])
              ], 6)) : createCommentVNode("", true),
              createVNode(unref(ProgressRoot_default), mergeProps(unref(rootProps), {
                max: realMax.value,
                "data-slot": "base",
                class: ui.value.base({ class: unref(props).ui?.base }),
                style: { "transform": "translateZ(0)" }
              }), {
                default: withCtx(() => [
                  createVNode(unref(ProgressIndicator_default), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: unref(props).ui?.indicator }),
                    style: indicatorStyle.value
                  }, null, 8, ["class", "style"])
                ]),
                _: 1
              }, 16, ["max", "class"]),
              hasSteps.value ? (openBlock(), createBlock("div", {
                key: 1,
                "data-slot": "steps",
                class: ui.value.steps({ class: unref(props).ui?.steps })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(props).max, (step, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    "data-slot": "step",
                    class: ui.value.step({ class: unref(props).ui?.step, step: stepVariant(index) })
                  }, [
                    renderSlot(_ctx.$slots, `step-${index}`, { step }, () => [
                      createTextVNode(toDisplayString(step), 1)
                    ])
                  ], 2);
                }), 128))
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "relative group overflow-hidden bg-default shadow-lg rounded-lg ring ring-default p-4 flex gap-2.5",
    "wrapper": "w-0 flex-1 flex flex-col",
    "title": "text-sm font-medium text-highlighted",
    "description": "text-sm text-muted",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xl",
    "actions": "flex gap-1.5 shrink-0",
    "progress": "absolute inset-x-0 bottom-0",
    "close": "p-0"
  },
  "variants": {
    "color": {
      "primary": {
        "root": "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary",
        "icon": "text-primary"
      },
      "secondary": {
        "root": "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary",
        "icon": "text-secondary"
      },
      "success": {
        "root": "outline-success/25 focus-visible:outline-3 focus-visible:ring-success",
        "icon": "text-success"
      },
      "info": {
        "root": "outline-info/25 focus-visible:outline-3 focus-visible:ring-info",
        "icon": "text-info"
      },
      "warning": {
        "root": "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning",
        "icon": "text-warning"
      },
      "error": {
        "root": "outline-error/25 focus-visible:outline-3 focus-visible:ring-error",
        "icon": "text-error"
      },
      "neutral": {
        "root": "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted",
        "icon": "text-highlighted"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "items-center",
        "actions": "items-center"
      },
      "vertical": {
        "root": "items-start",
        "actions": "items-start mt-2.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "defaultVariants": {
    "color": "primary"
  }
};
const _sfc_main$9 = {
  __name: "UToast",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: [String, Object, Function], required: false },
    description: { type: [String, Object, Function], required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: null, required: false },
    actions: { type: Array, required: false },
    duration: { type: Number, required: false },
    progress: { type: [Boolean, Object], required: false, default: true },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    type: { type: String, required: false }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("toast", _props);
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "defaultOpen", "open", "duration", "type"), emits);
    const ui = computed(() => tv({ extend: theme$2, ...appConfig.ui?.toast || {} })({
      color: props.color,
      orientation: props.orientation,
      title: !!props.title || !!slots.title
    }));
    const rootRef = useTemplateRef("rootRef");
    const height = ref(0);
    __expose({
      height
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastRoot_default), mergeProps({
        ref_key: "rootRef",
        ref: rootRef
      }, unref(rootProps), {
        "data-orientation": unref(props).orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] }),
        style: { "--height": height.value }
      }, _attrs), {
        default: withCtx(({ remaining, duration: totalDuration, open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
              if (unref(props).avatar) {
                _push2(ssrRenderComponent(_sfc_main$3$1, mergeProps({
                  size: unref(props).ui?.avatarSize || ui.value.avatarSize()
                }, unref(props).avatar, {
                  "data-slot": "avatar",
                  class: ui.value.avatar({ class: unref(props).ui?.avatar })
                }), null, _parent2, _scopeId));
              } else if (unref(props).icon) {
                _push2(ssrRenderComponent(_sfc_main$5$1, {
                  name: unref(props).icon,
                  "data-slot": "icon",
                  class: ui.value.icon({ class: unref(props).ui?.icon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
            if (unref(props).title || !!slots.title) {
              _push2(ssrRenderComponent(unref(ToastTitle_default), {
                "data-slot": "title",
                class: ui.value.title({ class: unref(props).ui?.title })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      if (typeof unref(props).title === "function") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).title()), null, null), _parent3, _scopeId2);
                      } else if (typeof unref(props).title === "object") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).title), null, null), _parent3, _scopeId2);
                      } else {
                        _push3(`<!--[-->${ssrInterpolate(unref(props).title)}<!--]-->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        typeof unref(props).title === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title()), { key: 0 })) : typeof unref(props).title === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createTextVNode(toDisplayString(unref(props).title), 1)
                        ], 64))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(props).description || !!slots.description) {
              _push2(ssrRenderComponent(unref(ToastDescription_default), {
                "data-slot": "description",
                class: ui.value.description({ class: unref(props).ui?.description })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                      if (typeof unref(props).description === "function") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).description()), null, null), _parent3, _scopeId2);
                      } else if (typeof unref(props).description === "object") {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).description), null, null), _parent3, _scopeId2);
                      } else {
                        _push3(`<!--[-->${ssrInterpolate(unref(props).description)}<!--]-->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "description", {}, () => [
                        typeof unref(props).description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description()), { key: 0 })) : typeof unref(props).description === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createTextVNode(toDisplayString(unref(props).description), 1)
                        ], 64))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions)) {
              _push2(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({ class: unref(props).ui?.actions }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(unref(props).actions, (action, index) => {
                  _push2(ssrRenderComponent(unref(ToastAction_default), {
                    key: index,
                    "alt-text": action.label || "Action",
                    "as-child": "",
                    onClick: () => {
                    }
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_sfc_main$f, mergeProps({
                          size: "xs",
                          color: unref(props).color
                        }, { ref_for: true }, action), null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_sfc_main$f, mergeProps({
                            size: "xs",
                            color: unref(props).color
                          }, { ref_for: true }, action), null, 16, ["color"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close) {
              _push2(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({ class: unref(props).ui?.actions, orientation: "horizontal" }))}"${_scopeId}>`);
              if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions)) {
                ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(unref(props).actions, (action, index) => {
                    _push2(ssrRenderComponent(unref(ToastAction_default), {
                      key: index,
                      "alt-text": action.label || "Action",
                      "as-child": "",
                      onClick: () => {
                      }
                    }, {
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_sfc_main$f, mergeProps({
                            size: "xs",
                            color: unref(props).color
                          }, { ref_for: true }, action), null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_sfc_main$f, mergeProps({
                              size: "xs",
                              color: unref(props).color
                            }, { ref_for: true }, action), null, 16, ["color"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if (unref(props).close || !!slots.close) {
                _push2(ssrRenderComponent(unref(ToastClose_default), { "as-child": "" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                        if (unref(props).close) {
                          _push3(ssrRenderComponent(_sfc_main$f, mergeProps({
                            icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                            color: "neutral",
                            variant: "link",
                            "aria-label": unref(t)("toast.close")
                          }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                            "data-slot": "close",
                            class: ui.value.close({ class: unref(props).ui?.close }),
                            onClick: () => {
                            }
                          }), null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                          unref(props).close ? (openBlock(), createBlock(_sfc_main$f, mergeProps({
                            key: 0,
                            icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                            color: "neutral",
                            variant: "link",
                            "aria-label": unref(t)("toast.close")
                          }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                            "data-slot": "close",
                            class: ui.value.close({ class: unref(props).ui?.close }),
                            onClick: withModifiers(() => {
                            }, ["stop"])
                          }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(props).progress && open && remaining > 0 && totalDuration) {
              _push2(ssrRenderComponent(_sfc_main$a, mergeProps({
                "model-value": remaining / totalDuration * 100,
                color: unref(props).color
              }, typeof unref(props).progress === "object" ? unref(props).progress : {}, {
                size: "sm",
                "data-slot": "progress",
                class: ui.value.progress({ class: unref(props).ui?.progress })
              }), null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
                  key: 0,
                  size: unref(props).ui?.avatarSize || ui.value.avatarSize()
                }, unref(props).avatar, {
                  "data-slot": "avatar",
                  class: ui.value.avatar({ class: unref(props).ui?.avatar })
                }), null, 16, ["size", "class"])) : unref(props).icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                  key: 1,
                  name: unref(props).icon,
                  "data-slot": "icon",
                  class: ui.value.icon({ class: unref(props).ui?.icon })
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ]),
              createVNode("div", {
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
              }, [
                unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(ToastTitle_default), {
                  key: 0,
                  "data-slot": "title",
                  class: ui.value.title({ class: unref(props).ui?.title })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      typeof unref(props).title === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title()), { key: 0 })) : typeof unref(props).title === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createTextVNode(toDisplayString(unref(props).title), 1)
                      ], 64))
                    ])
                  ]),
                  _: 3
                }, 8, ["class"])) : createCommentVNode("", true),
                unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(ToastDescription_default), {
                  key: 1,
                  "data-slot": "description",
                  class: ui.value.description({ class: unref(props).ui?.description })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "description", {}, () => [
                      typeof unref(props).description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description()), { key: 0 })) : typeof unref(props).description === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createTextVNode(toDisplayString(unref(props).description), 1)
                      ], 64))
                    ])
                  ]),
                  _: 3
                }, 8, ["class"])) : createCommentVNode("", true),
                unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions) ? (openBlock(), createBlock("div", {
                  key: 2,
                  "data-slot": "actions",
                  class: ui.value.actions({ class: unref(props).ui?.actions })
                }, [
                  renderSlot(_ctx.$slots, "actions", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, (action, index) => {
                      return openBlock(), createBlock(unref(ToastAction_default), {
                        key: index,
                        "alt-text": action.label || "Action",
                        "as-child": "",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$f, mergeProps({
                            size: "xs",
                            color: unref(props).color
                          }, { ref_for: true }, action), null, 16, ["color"])
                        ]),
                        _: 2
                      }, 1032, ["alt-text", "onClick"]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "actions",
                class: ui.value.actions({ class: unref(props).ui?.actions, orientation: "horizontal" })
              }, [
                unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) ? renderSlot(_ctx.$slots, "actions", { key: 0 }, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, (action, index) => {
                    return openBlock(), createBlock(unref(ToastAction_default), {
                      key: index,
                      "alt-text": action.label || "Action",
                      "as-child": "",
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$f, mergeProps({
                          size: "xs",
                          color: unref(props).color
                        }, { ref_for: true }, action), null, 16, ["color"])
                      ]),
                      _: 2
                    }, 1032, ["alt-text", "onClick"]);
                  }), 128))
                ]) : createCommentVNode("", true),
                unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(ToastClose_default), {
                  key: 1,
                  "as-child": ""
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                      unref(props).close ? (openBlock(), createBlock(_sfc_main$f, mergeProps({
                        key: 0,
                        icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                        color: "neutral",
                        variant: "link",
                        "aria-label": unref(t)("toast.close")
                      }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                        "data-slot": "close",
                        class: ui.value.close({ class: unref(props).ui?.close }),
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 3
                })) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true),
              unref(props).progress && open && remaining > 0 && totalDuration ? (openBlock(), createBlock(_sfc_main$a, mergeProps({
                key: 1,
                "model-value": remaining / totalDuration * 100,
                color: unref(props).color
              }, typeof unref(props).progress === "object" ? unref(props).progress : {}, {
                size: "sm",
                "data-slot": "progress",
                class: ui.value.progress({ class: unref(props).ui?.progress })
              }), null, 16, ["model-value", "color", "class"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "viewport": "fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-(--height) focus:outline-none",
    "base": "pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:opacity-0 data-[front=false]:*:transition-opacity data-[front=false]:*:duration-100 data-[state=closed]:animate-[toast-closed_200ms_ease-in-out] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_ease-in-out] data-[state=open]:data-[pulsing=odd]:animate-[toast-pulse-a_300ms_ease-out] data-[state=open]:data-[pulsing=even]:animate-[toast-pulse-b_300ms_ease-out] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out"
  },
  "variants": {
    "position": {
      "top-left": {
        "viewport": "left-4"
      },
      "top-center": {
        "viewport": "left-1/2 transform -translate-x-1/2"
      },
      "top-right": {
        "viewport": "right-4"
      },
      "bottom-left": {
        "viewport": "left-4"
      },
      "bottom-center": {
        "viewport": "left-1/2 transform -translate-x-1/2"
      },
      "bottom-right": {
        "viewport": "right-4"
      }
    },
    "swipeDirection": {
      "up": "data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]",
      "right": "data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]",
      "down": "data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]",
      "left": "data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]"
    }
  },
  "compoundVariants": [
    {
      "position": [
        "top-left",
        "top-center",
        "top-right"
      ],
      "class": {
        "viewport": "top-4",
        "base": "top-0 data-[state=open]:animate-[toast-slide-in-from-top_200ms_ease-in-out]"
      }
    },
    {
      "position": [
        "bottom-left",
        "bottom-center",
        "bottom-right"
      ],
      "class": {
        "viewport": "bottom-4",
        "base": "bottom-0 data-[state=open]:animate-[toast-slide-in-from-bottom_200ms_ease-in-out]"
      }
    },
    {
      "swipeDirection": [
        "left",
        "right"
      ],
      "class": "data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0"
    },
    {
      "swipeDirection": [
        "up",
        "down"
      ],
      "class": "data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0"
    }
  ],
  "defaultVariants": {
    "position": "bottom-right"
  }
};
const __default__$1 = {
  name: "Toaster"
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  props: {
    position: { type: null, required: false },
    expand: { type: Boolean, required: false, default: true },
    progress: { type: Boolean, required: false, default: true },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    max: { type: Number, required: false, default: 5 },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    label: { type: String, required: false },
    duration: { type: Number, required: false, default: 5e3 },
    disableSwipe: { type: Boolean, required: false },
    swipeThreshold: { type: Number, required: false }
  },
  setup(__props) {
    const _props = __props;
    const props = useComponentProps("toaster", _props);
    const { toasts, remove } = useToast();
    const appConfig = useAppConfig();
    provide(toastMaxInjectionKey, toRef(() => props.max));
    const providerProps = useForwardProps(reactivePick(props, "duration", "label", "swipeThreshold", "disableSwipe"));
    const portalProps = usePortal(toRef(() => props.portal));
    const swipeDirection = computed(() => {
      switch (props.position) {
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
    });
    const ui = computed(() => tv({ extend: theme$1, ...appConfig.ui?.toaster || {} })({
      position: props.position,
      swipeDirection: swipeDirection.value
    }));
    function onUpdateOpen(value, id) {
      if (value) {
        return;
      }
      remove(id);
    }
    const hovered = ref(false);
    const expanded = computed(() => props.expand || hovered.value);
    const refs = ref([]);
    const height = computed(() => refs.value.reduce((acc, { height: height2 }) => acc + height2 + 16, 0));
    const frontHeight = computed(() => refs.value[refs.value.length - 1]?.height || 0);
    function getOffset(index) {
      return refs.value.slice(index + 1).reduce((acc, { height: height2 }) => acc + height2 + 16, 0);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastProvider_default), mergeProps({ "swipe-direction": swipeDirection.value }, unref(providerProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<!--[-->`);
            ssrRenderList(unref(toasts), (toast, index) => {
              _push2(ssrRenderComponent(_sfc_main$9, mergeProps({
                key: toast.id,
                ref_for: true,
                ref_key: "refs",
                ref: refs,
                progress: unref(props).progress
              }, { ref_for: true }, unref(omit)(toast, ["id", "close", "_duplicate", "_updated"]), {
                close: toast.close,
                "data-expanded": expanded.value,
                "data-front": !expanded.value && index === unref(toasts).length - 1,
                "data-pulsing": toast._duplicate ? toast._duplicate % 2 === 0 ? "even" : "odd" : void 0,
                style: {
                  "--index": index - unref(toasts).length + unref(toasts).length,
                  "--before": unref(toasts).length - 1 - index,
                  "--offset": getOffset(index),
                  "--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
                  "--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
                  "--transform": "translateY(var(--translate)) scale(var(--scale))"
                },
                "data-slot": "base",
                class: ui.value.base({ class: [unref(props).ui?.base, toast.onClick ? "cursor-pointer" : void 0] }),
                "onUpdate:open": ($event) => onUpdateOpen($event, toast.id),
                onClick: ($event) => toast.onClick && toast.onClick(toast)
              }), null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(unref(ToastPortal_default), unref(portalProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ToastViewport_default), {
                    "data-expanded": expanded.value,
                    "data-slot": "viewport",
                    class: ui.value.viewport({ class: [unref(props).ui?.viewport, unref(props).class] }),
                    style: {
                      "--scale-factor": "0.05",
                      "--translate-factor": unref(props).position?.startsWith("top") ? "1px" : "-1px",
                      "--gap": unref(props).position?.startsWith("top") ? "16px" : "-16px",
                      "--front-height": `${frontHeight.value}px`,
                      "--height": `${height.value}px`
                    },
                    onMouseenter: ($event) => hovered.value = true,
                    onMouseleave: ($event) => hovered.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ToastViewport_default), {
                      "data-expanded": expanded.value,
                      "data-slot": "viewport",
                      class: ui.value.viewport({ class: [unref(props).ui?.viewport, unref(props).class] }),
                      style: {
                        "--scale-factor": "0.05",
                        "--translate-factor": unref(props).position?.startsWith("top") ? "1px" : "-1px",
                        "--gap": unref(props).position?.startsWith("top") ? "16px" : "-16px",
                        "--front-height": `${frontHeight.value}px`,
                        "--height": `${height.value}px`
                      },
                      onMouseenter: ($event) => hovered.value = true,
                      onMouseleave: ($event) => hovered.value = false
                    }, null, 8, ["data-expanded", "class", "style", "onMouseenter", "onMouseleave"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(toasts), (toast, index) => {
                return openBlock(), createBlock(_sfc_main$9, mergeProps({
                  key: toast.id,
                  ref_for: true,
                  ref_key: "refs",
                  ref: refs,
                  progress: unref(props).progress
                }, { ref_for: true }, unref(omit)(toast, ["id", "close", "_duplicate", "_updated"]), {
                  close: toast.close,
                  "data-expanded": expanded.value,
                  "data-front": !expanded.value && index === unref(toasts).length - 1,
                  "data-pulsing": toast._duplicate ? toast._duplicate % 2 === 0 ? "even" : "odd" : void 0,
                  style: {
                    "--index": index - unref(toasts).length + unref(toasts).length,
                    "--before": unref(toasts).length - 1 - index,
                    "--offset": getOffset(index),
                    "--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
                    "--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
                    "--transform": "translateY(var(--translate)) scale(var(--scale))"
                  },
                  "data-slot": "base",
                  class: ui.value.base({ class: [unref(props).ui?.base, toast.onClick ? "cursor-pointer" : void 0] }),
                  "onUpdate:open": ($event) => onUpdateOpen($event, toast.id),
                  onClick: ($event) => toast.onClick && toast.onClick(toast)
                }), null, 16, ["progress", "close", "data-expanded", "data-front", "data-pulsing", "style", "class", "onUpdate:open", "onClick"]);
              }), 128)),
              createVNode(unref(ToastPortal_default), unref(portalProps), {
                default: withCtx(() => [
                  createVNode(unref(ToastViewport_default), {
                    "data-expanded": expanded.value,
                    "data-slot": "viewport",
                    class: ui.value.viewport({ class: [unref(props).ui?.viewport, unref(props).class] }),
                    style: {
                      "--scale-factor": "0.05",
                      "--translate-factor": unref(props).position?.startsWith("top") ? "1px" : "-1px",
                      "--gap": unref(props).position?.startsWith("top") ? "16px" : "-16px",
                      "--front-height": `${frontHeight.value}px`,
                      "--height": `${height.value}px`
                    },
                    onMouseenter: ($event) => hovered.value = true,
                    onMouseleave: ($event) => hovered.value = false
                  }, null, 8, ["data-expanded", "class", "style", "onMouseenter", "onMouseleave"])
                ]),
                _: 1
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const UToaster = Object.assign(_sfc_main$8, { __name: "UToaster" });
function _useOverlay() {
  const overlays = shallowReactive([]);
  const create = (component, _options) => {
    const { props, defaultOpen, destroyOnClose } = _options || {};
    const options = reactive({
      id: /* @__PURE__ */ Symbol(""),
      isOpen: !!defaultOpen,
      component: markRaw(component),
      isMounted: !!defaultOpen,
      destroyOnClose: !!destroyOnClose,
      originalProps: props || {},
      props: { ...props }
    });
    overlays.push(options);
    return {
      ...options,
      open: (props2) => open(options.id, props2),
      close: (value) => close(options.id, value),
      patch: (props2) => patch(options.id, props2)
    };
  };
  const open = (id, props) => {
    const overlay = getOverlay(id);
    if (props) {
      overlay.props = { ...overlay.originalProps, ...props };
    } else {
      overlay.props = { ...overlay.originalProps };
    }
    overlay.isOpen = true;
    overlay.isMounted = true;
    const result = new Promise((resolve) => overlay.resolvePromise = resolve);
    return Object.assign(result, {
      id,
      isMounted: overlay.isMounted,
      isOpen: overlay.isOpen,
      result
    });
  };
  const close = (id, value) => {
    const overlay = getOverlay(id);
    overlay.isOpen = false;
    if (overlay.resolvePromise) {
      overlay.resolvePromise(value);
      overlay.resolvePromise = void 0;
    }
  };
  const closeAll = () => {
    overlays.forEach((overlay) => close(overlay.id));
  };
  const unmount = (id) => {
    const overlay = getOverlay(id);
    overlay.isMounted = false;
    if (overlay.destroyOnClose) {
      const index = overlays.findIndex((overlay2) => overlay2.id === id);
      overlays.splice(index, 1);
    }
  };
  const patch = (id, props) => {
    const overlay = getOverlay(id);
    overlay.props = { ...overlay.props, ...props };
  };
  const getOverlay = (id) => {
    const overlay = overlays.find((overlay2) => overlay2.id === id);
    if (!overlay) {
      throw new Error("Overlay not found");
    }
    return overlay;
  };
  const isOpen = (id) => {
    const overlay = getOverlay(id);
    return overlay.isOpen;
  };
  return {
    overlays,
    open,
    close,
    closeAll,
    create,
    patch,
    unmount,
    isOpen
  };
}
const useOverlay = /* @__PURE__ */ createSharedComposable(_useOverlay);
const _sfc_main$7 = {
  __name: "UOverlayProvider",
  __ssrInlineRender: true,
  setup(__props) {
    const { overlays, unmount, close } = useOverlay();
    const mountedOverlays = computed(() => overlays.filter((overlay) => overlay.isMounted));
    const onAfterLeave = (id) => {
      close(id);
      unmount(id);
    };
    const onClose = (id, value) => {
      close(id, value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(mountedOverlays.value, (overlay) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(overlay.component), mergeProps({
          key: overlay.id
        }, { ref_for: true }, overlay.props, {
          open: overlay.isOpen,
          "onUpdate:open": ($event) => overlay.isOpen = $event,
          onClose: (value) => onClose(overlay.id, value),
          "onAfter:leave": ($event) => onAfterLeave(overlay.id)
        }), null), _parent);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __default__ = {
  name: "App"
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    tooltip: { type: Object, required: false },
    toaster: { type: [Object, null], required: false },
    locale: { type: Object, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: "body" },
    dir: { type: String, required: false },
    scrollBody: { type: [Boolean, Object], required: false },
    nonce: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const configProviderProps = useForwardProps$1(reactivePick(props, "scrollBody"));
    const tooltipProps = toRef(() => props.tooltip);
    const toasterProps = toRef(() => props.toaster);
    const locale = toRef(() => props.locale);
    provide(localeContextInjectionKey, locale);
    const portal = toRef(() => props.portal);
    provide(portalTargetInjectionKey, portal);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ConfigProvider_default), mergeProps({
        "use-id": () => useId(),
        dir: props.dir || locale.value?.dir,
        locale: locale.value?.code
      }, unref(configProviderProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipProvider_default), tooltipProps.value, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.toaster !== null) {
                    _push3(ssrRenderComponent(UToaster, toasterProps.value, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  }
                  _push3(ssrRenderComponent(_sfc_main$7, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    __props.toaster !== null ? (openBlock(), createBlock(UToaster, mergeProps({ key: 0 }, toasterProps.value), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 16)) : renderSlot(_ctx.$slots, "default", { key: 1 }),
                    createVNode(_sfc_main$7)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TooltipProvider_default), tooltipProps.value, {
                default: withCtx(() => [
                  __props.toaster !== null ? (openBlock(), createBlock(UToaster, mergeProps({ key: 0 }, toasterProps.value), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 16)) : renderSlot(_ctx.$slots, "default", { key: 1 }),
                  createVNode(_sfc_main$7)
                ]),
                _: 3
              }, 16)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/App.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$6, { __name: "UApp" });
const theme = {
  "slots": {
    "root": "bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50",
    "container": "flex items-center justify-between gap-3 h-full",
    "left": "lg:flex-1 flex items-center gap-1.5",
    "center": "hidden lg:flex",
    "right": "flex items-center justify-end lg:flex-1 gap-1.5",
    "title": "shrink-0 font-bold text-xl text-highlighted flex items-end gap-1.5",
    "toggle": "lg:hidden",
    "content": "lg:hidden",
    "overlay": "lg:hidden",
    "header": "px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3",
    "body": "p-4 sm:p-6 overflow-y-auto"
  },
  "variants": {
    "toggleSide": {
      "left": {
        "toggle": "-ms-1.5"
      },
      "right": {
        "toggle": "-me-1.5"
      }
    }
  }
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UHeader",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false, default: "header" },
    title: { type: String, required: false, default: "Nuxt UI" },
    to: { type: String, required: false, default: "/" },
    mode: { type: null, required: false, default: "modal" },
    menu: { type: null, required: false },
    toggle: { type: [Boolean, Object], required: false, default: true },
    toggleSide: { type: String, required: false, default: "right" },
    autoClose: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("header", _props);
    const open = useModel(__props, "open", { type: Boolean, ...{ default: false } });
    const route = useRoute();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const [DefineLeftTemplate, ReuseLeftTemplate] = createReusableTemplate();
    const [DefineRightTemplate, ReuseRightTemplate] = createReusableTemplate();
    const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Nuxt UI").trim();
    });
    watch(() => route.fullPath, () => {
      if (!props.autoClose) return;
      open.value = false;
    });
    const ui = computed(() => tv({ extend: theme, ...appConfig.ui?.header || {} })());
    const Menu = computed(() => ({
      slideover: _sfc_main$e,
      modal: _sfc_main$d,
      drawer: _sfc_main$c
    })[props.mode]);
    const menuProps = toRef(() => defu(props.menu, {}, props.mode === "modal" ? { fullscreen: true, transition: false } : {}));
    function toggleOpen() {
      open.value = !open.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineToggleTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "toggle", {
              open: open.value,
              toggle: toggleOpen,
              ui: ui.value
            }, () => {
              if (unref(props).toggle) {
                _push2(ssrRenderComponent(_sfc_main$f, mergeProps({
                  color: "neutral",
                  variant: "ghost",
                  "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
                  icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
                }, typeof unref(props).toggle === "object" ? unref(props).toggle : {}, {
                  "data-slot": "toggle",
                  class: ui.value.toggle({ class: unref(props).ui?.toggle, toggleSide: unref(props).toggleSide }),
                  onClick: toggleOpen
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "toggle", {
                open: open.value,
                toggle: toggleOpen,
                ui: ui.value
              }, () => [
                unref(props).toggle ? (openBlock(), createBlock(_sfc_main$f, mergeProps({
                  key: 0,
                  color: "neutral",
                  variant: "ghost",
                  "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
                  icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
                }, typeof unref(props).toggle === "object" ? unref(props).toggle : {}, {
                  "data-slot": "toggle",
                  class: ui.value.toggle({ class: unref(props).ui?.toggle, toggleSide: unref(props).toggleSide }),
                  onClick: toggleOpen
                }), null, 16, ["aria-label", "icon", "class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineLeftTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="left" class="${ssrRenderClass(ui.value.left({ class: unref(props).ui?.left }))}"${_scopeId}>`);
            if (unref(props).toggleSide === "left") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "left", {}, () => {
              _push2(ssrRenderComponent(_sfc_main$1$1, {
                to: unref(props).to,
                "aria-label": ariaLabel.value,
                "data-slot": "title",
                class: ui.value.title({ class: unref(props).ui?.title })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push3(`${ssrInterpolate(unref(props).title)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(unref(props).title), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                "data-slot": "left",
                class: ui.value.left({ class: unref(props).ui?.left })
              }, [
                unref(props).toggleSide === "left" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "left", {}, () => [
                  createVNode(_sfc_main$1$1, {
                    to: unref(props).to,
                    "aria-label": ariaLabel.value,
                    "data-slot": "title",
                    class: ui.value.title({ class: unref(props).ui?.title })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(unref(props).title), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["to", "aria-label", "class"])
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineRightTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="right" class="${ssrRenderClass(ui.value.right({ class: unref(props).ui?.right }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "right", {}, null, _push2, _parent2, _scopeId);
            if (unref(props).toggleSide === "right") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                "data-slot": "right",
                class: ui.value.right({ class: unref(props).ui?.right })
              }, [
                renderSlot(_ctx.$slots, "right"),
                unref(props).toggleSide === "right" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": "root"
      }, _ctx.$attrs, {
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$b, {
              "data-slot": "container",
              class: ui.value.container({ class: unref(props).ui?.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent3, _scopeId2));
                  _push3(`<div data-slot="center" class="${ssrRenderClass(ui.value.center({ class: unref(props).ui?.center }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ReuseLeftTemplate)),
                    createVNode("div", {
                      "data-slot": "center",
                      class: ui.value.center({ class: unref(props).ui?.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode(unref(ReuseRightTemplate))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top"),
              createVNode(_sfc_main$b, {
                "data-slot": "container",
                class: ui.value.container({ class: unref(props).ui?.container })
              }, {
                default: withCtx(() => [
                  createVNode(unref(ReuseLeftTemplate)),
                  createVNode("div", {
                    "data-slot": "center",
                    class: ui.value.center({ class: unref(props).ui?.center })
                  }, [
                    renderSlot(_ctx.$slots, "default")
                  ], 2),
                  createVNode(unref(ReuseRightTemplate))
                ]),
                _: 3
              }, 8, ["class"]),
              renderSlot(_ctx.$slots, "bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Menu), mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        title: unref(t)("header.title"),
        description: unref(t)("header.description")
      }, menuProps.value, {
        ui: {
          overlay: ui.value.overlay({ class: unref(props).ui?.overlay }),
          content: ui.value.content({ class: unref(props).ui?.content })
        }
      }), {
        content: withCtx((contentData, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "content", contentData, () => {
              if (unref(props).mode !== "drawer") {
                _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "body", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "content", contentData, () => [
                unref(props).mode !== "drawer" ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "header",
                  class: ui.value.header({ class: unref(props).ui?.header })
                }, [
                  createVNode(unref(ReuseLeftTemplate)),
                  createVNode(unref(ReuseRightTemplate))
                ], 2)) : createCommentVNode("", true),
                createVNode("div", {
                  "data-slot": "body",
                  class: ui.value.body({ class: unref(props).ui?.body })
                }, [
                  renderSlot(_ctx.$slots, "body")
                ], 2)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/svg/logo.svg");
const _imports_1 = publicAssetsURL("/images/svg/sm-logo.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: "https://taxi-express.su/" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<picture${_scopeId}><source media="(min-width: 573px)"${ssrRenderAttr("srcset", _imports_0)}${_scopeId}><source media="(max-width: 573px)"${ssrRenderAttr("srcset", _imports_1)}${_scopeId}><img height="72" width="240"${ssrRenderAttr("src", _imports_0)} alt="logo" style="${ssrRenderStyle({ "width": "auto" })}"${_scopeId}></picture>`);
      } else {
        return [
          createVNode("picture", null, [
            createVNode("source", {
              media: "(min-width: 573px)",
              srcset: _imports_0
            }),
            createVNode("source", {
              media: "(max-width: 573px)",
              srcset: _imports_1
            }),
            createVNode("img", {
              height: "72",
              width: "240",
              src: _imports_0,
              alt: "logo",
              style: { "width": "auto" }
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/logo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]), { __name: "Logo" });
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_UIcon = _sfc_main$5$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2 text-[#FFCC00] text-[24px] pl-10 italic" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contacts" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-contact",
          size: "18"
        }, null, _parent2, _scopeId));
        _push2(` Контакты `);
      } else {
        return [
          createVNode(_component_UIcon, {
            name: "i-lucide-contact",
            size: "18"
          }),
          createTextVNode(" Контакты ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/vacancies" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-clipboard-list",
          size: "18"
        }, null, _parent2, _scopeId));
        _push2(` Вакансии `);
      } else {
        return [
          createVNode(_component_UIcon, {
            name: "i-lucide-clipboard-list",
            size: "18"
          }),
          createTextVNode(" Вакансии ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]), { __name: "Menu" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "phones",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$5$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col sm:flex-row justify-center items-center gap-4" }, _attrs))}><div class="flex flex-col gap-2 text-[#FFCC00] text-[24px] italic"><a href="tel:+79177666833">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-phone",
        size: "18"
      }, null, _parent));
      _push(` +7 (917) 766-68-33 </a><a href="tel:+79273242582">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-phone",
        size: "18"
      }, null, _parent));
      _push(` +7 (927) 324-25-82 </a></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "button-gradient h-16 flex items-center justify-center gap-3",
        icon: "i-lucide-phone-call",
        to: "tel:+79177666833",
        onClick: ($event) => unref(utils).sendCallToTelegram("+79177666833")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-phone-call",
              size: "18"
            }, null, _parent2, _scopeId));
            _push2(` Вызвать `);
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
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/phones.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$2, { __name: "Phones" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UContainer = _sfc_main$b;
  const _component_UHeader = _sfc_main$5;
  const _component_Logo = __nuxt_component_0;
  const _component_Menu = __nuxt_component_3;
  const _component_Phones = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b border-b-primary/70" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UHeader, {
          back: "/",
          class: "border-b-0 relative"
        }, {
          left: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Logo, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Menu, { class: "not-sm:hidden" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Logo),
                createVNode(_component_Menu, { class: "not-sm:hidden" })
              ];
            }
          }),
          body: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Phones, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Phones)
              ];
            }
          }),
          right: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Phones, { class: "not-lg:hidden" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Phones, { class: "not-lg:hidden" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UHeader, {
            back: "/",
            class: "border-b-0 relative"
          }, {
            left: withCtx(() => [
              createVNode(_component_Logo),
              createVNode(_component_Menu, { class: "not-sm:hidden" })
            ]),
            body: withCtx(() => [
              createVNode(_component_Phones)
            ]),
            right: withCtx(() => [
              createVNode(_component_Phones, { class: "not-lg:hidden" })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "SectionHeader" });
function registerVueScopeHandlers(script, scope) {
  if (!scope) {
    return;
  }
  const _registerCb = (key, cb) => {
    if (!script._cbs[key]) {
      cb(script.instance);
      return () => {
      };
    }
    let i = script._cbs[key].push(cb);
    const destroy = () => {
      if (i) {
        script._cbs[key]?.splice(i - 1, 1);
        i = null;
      }
    };
    onScopeDispose(destroy);
    return destroy;
  };
  script.onLoaded = (cb) => _registerCb("loaded", cb);
  script.onError = (cb) => _registerCb("error", cb);
  const triggerAbortController = script._triggerAbortController;
  onScopeDispose(() => {
    triggerAbortController?.abort();
  });
}
function useScript$1(_input, _options) {
  const input = typeof _input === "string" ? { src: _input } : _input;
  const options = _options || {};
  const head = options?.head || /* @__PURE__ */ injectHead();
  options.head = head;
  const scope = getCurrentInstance();
  options.eventContext = scope;
  if (scope && typeof options.trigger === "undefined") {
    options.trigger = onMounted;
  } else if (isRef(options.trigger) || typeof options.trigger === "function" && options.trigger.length === 0) {
    const trigger = options.trigger;
    let off;
    options.trigger = new Promise((resolve) => {
      off = watch(trigger, (val) => {
        if (val) {
          resolve(true);
        }
      }, {
        immediate: true
      });
      onScopeDispose(() => resolve(false), true);
    }).then((val) => {
      off?.();
      return val;
    });
  }
  head._scriptStatusWatcher = head._scriptStatusWatcher || head.hooks.hook("script:updated", ({ script: s }) => {
    if (s._statusRef) {
      s._statusRef.value = s.status;
    }
  });
  const script = useScript$2(head, input, options);
  script._statusRef = script._statusRef || ref(script.status);
  registerVueScopeHandlers(script, scope);
  return new Proxy(script, {
    get(_, key, a) {
      return Reflect.get(_, key === "status" ? "_statusRef" : key, a);
    }
  });
}
function resolveTrigger(trigger) {
  return null;
}
function useNuxtScriptRuntimeConfig() {
  return useRuntimeConfig().public["nuxt-scripts"];
}
function resolveScriptKey(input) {
  return input.key || input.src || (typeof input.innerHTML === "string" ? input.innerHTML : "");
}
function useScript(input, options) {
  input = typeof input === "string" ? { src: input } : input;
  options = defu(options, useNuxtScriptRuntimeConfig()?.defaultScriptOptions);
  if (options.trigger && typeof options.trigger === "object" && !("then" in options.trigger)) {
    resolveTrigger(options.trigger);
  }
  const id = String(resolveScriptKey(input));
  const nuxtApp = useNuxtApp();
  options.head = options.head || injectHead$1();
  if (!options.head) {
    throw new Error("useScript() has been called without Nuxt context.");
  }
  nuxtApp.$scripts = nuxtApp.$scripts || reactive({});
  !!nuxtApp.$scripts?.[id];
  const err = options._validate?.();
  if (options.trigger === "onNuxtReady" || options.trigger === "client") {
    if (!options.warmupStrategy) {
      options.warmupStrategy = "preload";
    }
    if (options.trigger === "onNuxtReady") {
      options.trigger = onNuxtReady;
    }
  }
  const instance = useScript$1(input, options);
  const _remove = instance.remove;
  instance.remove = () => {
    nuxtApp.$scripts[id] = void 0;
    return _remove();
  };
  const _load = instance.load;
  instance.load = async () => {
    if (err) {
      return Promise.reject(err);
    }
    return _load();
  };
  nuxtApp.$scripts[id] = instance;
  return instance;
}
const __nuxt_component_3_lazy = defineAsyncComponent(() => import('./footer-cMMn2wyi.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useScript("/js/yandex-metrika.js", {
      tagPosition: "bodyClose"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UApp = __nuxt_component_0$1;
      const _component_SectionHeader = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_LazySectionFooter = __nuxt_component_3_lazy;
      _push(ssrRenderComponent(_component_UApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionHeader, null, null, _parent2, _scopeId));
            _push2(`<main${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(`</main>`);
            _push2(ssrRenderComponent(_component_LazySectionFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SectionHeader),
              createVNode("main", null, [
                createVNode(_component_NuxtPage)
              ]),
              createVNode(_component_LazySectionFooter)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { __nuxt_component_0 as _, _default as a };

import * as vue from 'vue';
import { inject, computed, defineComponent, openBlock, createBlock, unref, withCtx, renderSlot, toRefs, ref, getCurrentInstance, h, Teleport, createCommentVNode, watch, nextTick, watchEffect, normalizeStyle, reactive, toValue } from 'vue';
import { unrefElement, useMounted, defaultWindow, onKeyStroke, createSharedComposable, useEventListener, createGlobalState } from '@vueuse/core';
import { tryOnBeforeUnmount, isClient, isIOS } from '@vueuse/shared';
import { B as defu } from '../nitro/nitro.mjs';
import { hideOthers } from 'aria-hidden';
import { P as Primitive, s as renderSlotFragments, m as createContext } from './Button-0rygPcVD.mjs';
import { u as useForwardExpose } from './useForwardExpose-C3mVDiKg.mjs';

function getActiveElement() {
  let activeElement = (void 0).activeElement;
  if (activeElement == null) return null;
  while (activeElement != null && activeElement.shadowRoot != null && activeElement.shadowRoot.activeElement != null) activeElement = activeElement.shadowRoot.activeElement;
  return activeElement;
}
function handleAndDispatchCustomEvent(name, handler, detail) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler) target.addEventListener(name, handler, { once: true });
  target.dispatchEvent(event);
}
function isNullish(value) {
  return value === null || value === void 0;
}
const [injectConfigProviderContext, provideConfigProviderContext] = /* @__PURE__ */ createContext("ConfigProvider");
var ConfigProvider_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ConfigProvider",
  props: {
    dir: {
      type: String,
      required: false,
      default: "ltr"
    },
    locale: {
      type: String,
      required: false,
      default: "en"
    },
    scrollBody: {
      type: [Boolean, Object],
      required: false,
      default: true
    },
    nonce: {
      type: String,
      required: false,
      default: void 0
    },
    teleportTo: {
      type: null,
      required: false,
      default: void 0
    },
    useId: {
      type: Function,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const { dir, locale, scrollBody, nonce, teleportTo } = toRefs(props);
    provideConfigProviderContext({
      dir,
      locale,
      scrollBody,
      nonce,
      teleportTo,
      useId: props.useId
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var ConfigProvider_default = ConfigProvider_vue_vue_type_script_setup_true_lang_default;
const useBodyLockStackCount = createSharedComposable(() => {
  const map = ref(/* @__PURE__ */ new Map());
  const initialOverflow = ref();
  const locked = computed(() => {
    for (const value of map.value.values()) if (value) return true;
    return false;
  });
  const context2 = injectConfigProviderContext({ scrollBody: ref(true) });
  let stopTouchMoveListener = null;
  const resetBodyStyle = () => {
    (void 0).body.style.paddingRight = "";
    (void 0).body.style.marginRight = "";
    (void 0).body.style.pointerEvents = "";
    (void 0).documentElement.style.removeProperty("--scrollbar-width");
    (void 0).body.style.overflow = initialOverflow.value ?? "";
    isIOS && stopTouchMoveListener?.();
    initialOverflow.value = void 0;
  };
  watch(locked, (val, oldVal) => {
    if (!isClient) return;
    if (!val) {
      if (oldVal) resetBodyStyle();
      return;
    }
    if (initialOverflow.value === void 0) initialOverflow.value = (void 0).body.style.overflow;
    const verticalScrollbarWidth = (void 0).innerWidth - (void 0).documentElement.clientWidth;
    const defaultConfig = {
      padding: verticalScrollbarWidth,
      margin: 0
    };
    const config = context2.scrollBody?.value ? typeof context2.scrollBody.value === "object" ? defu({
      padding: context2.scrollBody.value.padding === true ? verticalScrollbarWidth : context2.scrollBody.value.padding,
      margin: context2.scrollBody.value.margin === true ? verticalScrollbarWidth : context2.scrollBody.value.margin
    }, defaultConfig) : defaultConfig : {
      padding: 0,
      margin: 0
    };
    if (verticalScrollbarWidth > 0) {
      (void 0).body.style.paddingRight = typeof config.padding === "number" ? `${config.padding}px` : String(config.padding);
      (void 0).body.style.marginRight = typeof config.margin === "number" ? `${config.margin}px` : String(config.margin);
      (void 0).documentElement.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
      (void 0).body.style.overflow = "hidden";
    }
    if (isIOS) stopTouchMoveListener = useEventListener(void 0, "touchmove", (e) => preventDefault(e), { passive: false });
    nextTick(() => {
      if (!locked.value) return;
      (void 0).body.style.pointerEvents = "none";
      (void 0).body.style.overflow = "hidden";
    });
  }, {
    immediate: true,
    flush: "sync"
  });
  return map;
});
function useBodyScrollLock(initialState) {
  const id = Math.random().toString(36).substring(2, 7);
  const map = useBodyLockStackCount();
  map.value.set(id, initialState ?? false);
  const locked = computed({
    get: () => map.value.get(id) ?? false,
    set: (value) => map.value.set(id, value)
  });
  tryOnBeforeUnmount(() => {
    map.value.delete(id);
  });
  return locked;
}
function checkOverflowScroll(ele) {
  const style = (void 0).getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
  else {
    const parent = ele.parentNode;
    if (!(parent instanceof Element) || parent.tagName === "BODY") return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || (void 0).event;
  const _target = e.target;
  if (_target instanceof Element && checkOverflowScroll(_target)) return false;
  if (e.touches.length > 1) return true;
  if (e.preventDefault && e.cancelable) e.preventDefault();
  return false;
}
function useHideOthers(target) {
  let undo;
  watch(() => unrefElement(target), (el) => {
    let isInsideClosedPopover = false;
    try {
      isInsideClosedPopover = !!el?.closest("[popover]:not(:popover-open)");
    } catch {
    }
    if (el && !isInsideClosedPopover) undo = hideOthers(el);
    else if (undo) undo();
  });
}
let count = 0;
function useId(deterministicId, prefix = "reka") {
  if (deterministicId) return deterministicId;
  let id;
  const configProviderContext = injectConfigProviderContext({ useId: void 0 });
  if (configProviderContext.useId) id = configProviderContext.useId();
  else if ("useId" in vue) id = vue.useId?.();
  else id = `${++count}`;
  return prefix ? `${prefix}-${id}` : id;
}
function useStateMachine(initialState, machine) {
  const state = ref(initialState);
  function reducer(event) {
    const nextState = machine[state.value][event];
    return nextState ?? state.value;
  }
  const dispatch = (event) => {
    state.value = reducer(event);
  };
  return {
    state,
    dispatch
  };
}
function usePresence(present, node) {
  const stylesRef = ref({});
  const prevAnimationNameRef = ref("none");
  const prevPresentRef = ref(present);
  const initialState = present.value ? "mounted" : "unmounted";
  let timeoutId;
  const ownerWindow = node.value?.ownerDocument.defaultView ?? defaultWindow;
  const { state, dispatch } = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  });
  const dispatchCustomEvent = (name) => {
    if (isClient) {
      const customEvent = new CustomEvent(name, {
        bubbles: false,
        cancelable: false
      });
      node.value?.dispatchEvent(customEvent);
    }
  };
  watch(present, async (currentPresent, prevPresent) => {
    const hasPresentChanged = prevPresent !== currentPresent;
    await nextTick();
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.value;
      const currentAnimationName = getAnimationName(node.value);
      if (currentPresent) {
        dispatch("MOUNT");
        dispatchCustomEvent("enter");
        if (currentAnimationName === "none") dispatchCustomEvent("after-enter");
      } else if (currentAnimationName === "none" || currentAnimationName === "undefined" || stylesRef.value?.display === "none") {
        dispatch("UNMOUNT");
        dispatchCustomEvent("leave");
        dispatchCustomEvent("after-leave");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (prevPresent && isAnimating) {
          dispatch("ANIMATION_OUT");
          dispatchCustomEvent("leave");
        } else {
          dispatch("UNMOUNT");
          dispatchCustomEvent("after-leave");
        }
      }
    }
  }, { immediate: true });
  const handleAnimationEnd = (event) => {
    const currentAnimationName = getAnimationName(node.value);
    const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
    const directionName = state.value === "mounted" ? "enter" : "leave";
    if (event.target === node.value && isCurrentAnimation) {
      dispatchCustomEvent(`after-${directionName}`);
      dispatch("ANIMATION_END");
      if (!prevPresentRef.value) {
        const currentFillMode = node.value.style.animationFillMode;
        node.value.style.animationFillMode = "forwards";
        timeoutId = ownerWindow?.setTimeout(() => {
          if (node.value?.style.animationFillMode === "forwards") node.value.style.animationFillMode = currentFillMode;
        });
      }
    }
    if (event.target === node.value && currentAnimationName === "none") dispatch("ANIMATION_END");
  };
  const handleAnimationStart = (event) => {
    if (event.target === node.value) prevAnimationNameRef.value = getAnimationName(node.value);
  };
  watch(node, (newNode, oldNode) => {
    if (newNode) {
      stylesRef.value = getComputedStyle(newNode);
      newNode.addEventListener("animationstart", handleAnimationStart);
      newNode.addEventListener("animationcancel", handleAnimationEnd);
      newNode.addEventListener("animationend", handleAnimationEnd);
    } else {
      dispatch("ANIMATION_END");
      if (timeoutId !== void 0) ownerWindow?.clearTimeout(timeoutId);
      oldNode?.removeEventListener("animationstart", handleAnimationStart);
      oldNode?.removeEventListener("animationcancel", handleAnimationEnd);
      oldNode?.removeEventListener("animationend", handleAnimationEnd);
    }
  }, { immediate: true });
  watch(state, () => {
    const currentAnimationName = getAnimationName(node.value);
    prevAnimationNameRef.value = state.value === "mounted" ? currentAnimationName : "none";
  });
  const isPresent = computed(() => ["mounted", "unmountSuspended"].includes(state.value));
  return { isPresent };
}
function getAnimationName(node) {
  return node ? getComputedStyle(node).animationName || "none" : "none";
}
var Presence_default = /* @__PURE__ */ defineComponent({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: true
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(props, { slots, expose }) {
    const { present, forceMount } = toRefs(props);
    const node = ref();
    const { isPresent } = usePresence(present, node);
    expose({ present: isPresent });
    let children = slots.default({ present: isPresent.value });
    children = renderSlotFragments(children || []);
    const instance = getCurrentInstance();
    if (children && children?.length > 1) {
      const componentName = instance?.parent?.type.name ? `<${instance.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${componentName}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((line) => `  - ${line}`).join("\n")
      ].join("\n"));
    }
    return () => {
      if (forceMount.value || present.value || isPresent.value) return h(slots.default({ present: isPresent.value })[0], { ref: (v) => {
        const el = unrefElement(v);
        if (typeof el?.hasAttribute === "undefined") return el;
        if (el?.hasAttribute("data-reka-popper-content-wrapper")) node.value = el.firstElementChild;
        else node.value = el;
        return el;
      } });
      else return null;
    };
  }
});
const POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
const FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
function isLayerExist(layerElement, targetElement) {
  if (!(targetElement instanceof Element)) return false;
  const targetLayer = targetElement.closest("[data-dismissable-layer]");
  const mainLayer = layerElement.dataset.dismissableLayer === "" ? layerElement : layerElement.querySelector("[data-dismissable-layer]");
  const nodeList = Array.from(layerElement.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  if (targetLayer && (mainLayer === targetLayer || nodeList.indexOf(mainLayer) < nodeList.indexOf(targetLayer))) return true;
  else return false;
}
function usePointerDownOutside(onPointerDownOutside, element, enabled = true) {
  const ownerDocument = element?.value?.ownerDocument ?? globalThis?.document;
  const isPointerInsideDOMTree = ref(false);
  const handleClickRef = ref(() => {
  });
  watchEffect((cleanupFn) => {
    if (!isClient || !toValue(enabled)) return;
    const handlePointerDown = async (event) => {
      const target = event.target;
      if (!element?.value || !target) return;
      if (isLayerExist(element.value, target)) {
        isPointerInsideDOMTree.value = false;
        return;
      }
      if (event.target && !isPointerInsideDOMTree.value) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, onPointerDownOutside, eventDetail);
        };
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.value);
          handleClickRef.value = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.value, { once: true });
        } else handleAndDispatchPointerDownOutsideEvent();
      } else ownerDocument.removeEventListener("click", handleClickRef.value);
      isPointerInsideDOMTree.value = false;
    };
    const timerId = (void 0).setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    cleanupFn(() => {
      (void 0).clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.value);
    });
  });
  return { onPointerDownCapture: () => {
    if (!toValue(enabled)) return;
    isPointerInsideDOMTree.value = true;
  } };
}
function useFocusOutside(onFocusOutside, element, enabled = true) {
  const ownerDocument = element?.value?.ownerDocument ?? globalThis?.document;
  const isFocusInsideDOMTree = ref(false);
  watchEffect((cleanupFn) => {
    if (!isClient || !toValue(enabled)) return;
    const handleFocus = async (event) => {
      if (!element?.value) return;
      await nextTick();
      await nextTick();
      const target = event.target;
      if (!element.value || !target || isLayerExist(element.value, target)) return;
      if (event.target && !isFocusInsideDOMTree.value) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, onFocusOutside, eventDetail);
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    cleanupFn(() => ownerDocument.removeEventListener("focusin", handleFocus));
  });
  return {
    onFocusCapture: () => {
      if (!toValue(enabled)) return;
      isFocusInsideDOMTree.value = true;
    },
    onBlurCapture: () => {
      if (!toValue(enabled)) return;
      isFocusInsideDOMTree.value = false;
    }
  };
}
const context = /* @__PURE__ */ reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false,
      default: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    present: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement: layerElement } = useForwardExpose();
    const ownerDocument = computed(() => layerElement.value?.ownerDocument ?? globalThis.document);
    const layers = computed(() => context.layersRoot);
    const index = computed(() => {
      return layerElement.value ? Array.from(layers.value).indexOf(layerElement.value) : -1;
    });
    const isBodyPointerEventsDisabled = computed(() => {
      return context.layersWithOutsidePointerEventsDisabled.size > 0;
    });
    const isPointerEventsEnabled = computed(() => {
      const localLayers = Array.from(layers.value);
      const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
      const highestLayerWithOutsidePointerEventsDisabledIndex = localLayers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
      return index.value >= highestLayerWithOutsidePointerEventsDisabledIndex;
    });
    const pointerDownOutside2 = usePointerDownOutside(async (event) => {
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch?.contains(event.target));
      if (!props.present || !isPointerEventsEnabled.value || isPointerDownOnBranch) return;
      emits("pointerDownOutside", event);
      emits("interactOutside", event);
      await nextTick();
      if (!event.defaultPrevented) emits("dismiss");
    }, layerElement);
    const focusOutside = useFocusOutside((event) => {
      const isFocusInBranch = [...context.branches].some((branch) => branch?.contains(event.target));
      if (!props.present || isFocusInBranch) return;
      emits("focusOutside", event);
      emits("interactOutside", event);
      if (!event.defaultPrevented) emits("dismiss");
    }, layerElement);
    onKeyStroke("Escape", (event) => {
      if (!props.present) return;
      const isHighestLayer = index.value === layers.value.size - 1;
      if (!isHighestLayer) return;
      emits("escapeKeyDown", event);
      if (!event.defaultPrevented) emits("dismiss");
    });
    watch([
      layerElement,
      () => props.disableOutsidePointerEvents,
      () => props.present
    ], ([element, disableOutsidePointerEvents, present], _, onCleanup) => {
      if (!element || !present) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          context.originalBodyPointerEvents = ownerDocument.value.body.style.pointerEvents;
          ownerDocument.value.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(element);
        onCleanup(() => {
          context.layersWithOutsidePointerEventsDisabled.delete(element);
          if (context.layersWithOutsidePointerEventsDisabled.size === 0 && !isNullish(context.originalBodyPointerEvents)) ownerDocument.value.body.style.pointerEvents = context.originalBodyPointerEvents;
        });
      }
    }, { immediate: true });
    watch([layerElement, () => props.present], ([element, present], _, onCleanup) => {
      if (!element || !present) return;
      layers.value.add(element);
      onCleanup(() => {
        layers.value.delete(element);
      });
    }, { immediate: true });
    watchEffect((cleanupFn) => {
      cleanupFn(() => {
        if (!layerElement.value) return;
        layers.value.delete(layerElement.value);
        context.layersWithOutsidePointerEventsDisabled.delete(layerElement.value);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref: unref(forwardRef),
        "as-child": _ctx.asChild,
        as: _ctx.as,
        "data-dismissable-layer": "",
        style: normalizeStyle({ pointerEvents: isBodyPointerEventsDisabled.value ? isPointerEventsEnabled.value ? "auto" : "none" : void 0 }),
        onFocusCapture: unref(focusOutside).onFocusCapture,
        onBlurCapture: unref(focusOutside).onBlurCapture,
        onPointerdownCapture: unref(pointerDownOutside2).onPointerDownCapture
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as-child",
        "as",
        "style",
        "onFocusCapture",
        "onBlurCapture",
        "onPointerdownCapture"
      ]);
    };
  }
});
var DismissableLayer_default = DismissableLayer_vue_vue_type_script_setup_true_lang_default;
const useFocusStackState = createGlobalState(() => {
  const stack = ref([]);
  return stack;
});
function createFocusScopesStack() {
  const stack = useFocusStackState();
  return {
    add(focusScope) {
      const activeFocusScope = stack.value[0];
      if (focusScope !== activeFocusScope) activeFocusScope?.pause();
      stack.value = arrayRemove(stack.value, focusScope);
      stack.value.unshift(focusScope);
    },
    remove(focusScope) {
      stack.value = arrayRemove(stack.value, focusScope);
      stack.value[0]?.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) updatedArray.splice(index, 1);
  return updatedArray;
}
const AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
const AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
const EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
function focusFirst$1(candidates, { select = false } = {}) {
  const previouslyFocusedElement = getActiveElement();
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (getActiveElement() !== previouslyFocusedElement) return true;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = (void 0).createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
    const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
    if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
    return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) if (!isHidden(element, { upTo: container })) return element;
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = getActiveElement();
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
  }
}
var FocusScope_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: false,
      default: false
    },
    trapped: {
      type: Boolean,
      required: false,
      default: false
    },
    present: {
      type: Boolean,
      required: false,
      default: true
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
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { currentRef, currentElement } = useForwardExpose();
    const lastFocusedElementRef = ref(null);
    const focusScopesStack = createFocusScopesStack();
    const focusScope = /* @__PURE__ */ reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((cleanupFn) => {
      if (!isClient) return;
      const container = currentElement.value;
      if (!props.trapped) return;
      function handleFocusIn(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) lastFocusedElementRef.value = target;
        else focus(lastFocusedElementRef.value, { select: true });
      }
      function handleFocusOut(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.value, { select: true });
      }
      function handleMutations(mutations) {
        const lastFocusedElement = lastFocusedElementRef.value;
        if (lastFocusedElement === null) return;
        const anyNodesRemoved = mutations.some((m) => m.removedNodes.length > 0);
        if (!anyNodesRemoved) return;
        const isLastFocusedElementExist = container.contains(lastFocusedElement);
        if (!isLastFocusedElementExist) focus(container);
      }
      (void 0).addEventListener("focusin", handleFocusIn);
      (void 0).addEventListener("focusout", handleFocusOut);
      const mutationObserver = new MutationObserver(handleMutations);
      if (container) mutationObserver.observe(container, {
        childList: true,
        subtree: true
      });
      cleanupFn(() => {
        (void 0).removeEventListener("focusin", handleFocusIn);
        (void 0).removeEventListener("focusout", handleFocusOut);
        mutationObserver.disconnect();
      });
    });
    function dispatchMountAutoFocus(container, previouslyFocusedElement) {
      const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
      const handleMountAutoFocus = (ev) => emits("mountAutoFocus", ev);
      container.addEventListener(AUTOFOCUS_ON_MOUNT, handleMountAutoFocus);
      container.dispatchEvent(mountEvent);
      container.removeEventListener(AUTOFOCUS_ON_MOUNT, handleMountAutoFocus);
      if (!mountEvent.defaultPrevented) {
        focusFirst$1(getTabbableCandidates(container), { select: true });
        if (getActiveElement() === previouslyFocusedElement) focus(container);
      }
    }
    watchEffect(async (cleanupFn) => {
      const container = currentElement.value;
      await nextTick();
      if (!container) return;
      if (props.present !== false) focusScopesStack.add(focusScope);
      const previouslyFocusedElement = getActiveElement();
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate && props.present !== false) dispatchMountAutoFocus(container, previouslyFocusedElement);
      cleanupFn(() => {
        const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
        const unmountEventHandler = (ev) => {
          emits("unmountAutoFocus", ev);
        };
        container.addEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
        container.dispatchEvent(unmountEvent);
        container.setAttribute("data-focus-scope-unmounting", "");
        setTimeout(() => {
          if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? (void 0).body, { select: true });
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
          focusScopesStack.remove(focusScope);
          container.removeAttribute("data-focus-scope-unmounting");
        }, 0);
      });
    });
    watch(() => props.present, async (present, prevPresent) => {
      if (!isClient) return;
      if (present === false && prevPresent === true) {
        focusScopesStack.remove(focusScope);
        return;
      }
      if (present !== true || prevPresent !== false) return;
      focusScopesStack.add(focusScope);
      await nextTick();
      const container = currentElement.value;
      if (!container) return;
      const previouslyFocusedElement = getActiveElement();
      if (!container.contains(previouslyFocusedElement)) dispatchMountAutoFocus(container, previouslyFocusedElement);
    });
    function handleKeyDown(event) {
      if (!props.loop && !props.trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = getActiveElement();
      if (isTabKey && focusedElement) {
        const container = event.currentTarget;
        const [first, last] = getTabbableEdges(container);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container) event.preventDefault();
        } else if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (props.loop) focus(first, { select: true });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (props.loop) focus(last, { select: true });
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "currentRef",
        ref: currentRef,
        tabindex: "-1",
        "as-child": _ctx.asChild,
        as: _ctx.as,
        onKeydown: handleKeyDown
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["as-child", "as"]);
    };
  }
});
var FocusScope_default = FocusScope_vue_vue_type_script_setup_true_lang_default;
const ITEM_SELECT = "menu.itemSelect";
const SELECTION_KEYS = ["Enter", " "];
const FIRST_KEYS = [
  "ArrowDown",
  "PageUp",
  "Home"
];
const LAST_KEYS = [
  "ArrowUp",
  "PageDown",
  "End"
];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
const SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
const SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function getOpenState(open) {
  return open ? "open" : "closed";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = getActiveElement();
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus();
    if (getActiveElement() !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function isPointerInGraceArea(event, area) {
  if (!area) return false;
  const cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return isPointInPolygon(cursorPos, area);
}
function isMouseEvent(event) {
  return event.pointerType === "mouse";
}
var Teleport_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Teleport",
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
    const configContext = injectConfigProviderContext({});
    const target = computed(() => props.to ?? configContext.teleportTo?.value ?? "body");
    const isMounted = useMounted();
    return (_ctx, _cache) => {
      return unref(isMounted) || _ctx.forceMount ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: target.value,
        disabled: _ctx.disabled,
        defer: _ctx.defer
      }, [renderSlot(_ctx.$slots, "default")], 8, [
        "to",
        "disabled",
        "defer"
      ])) : createCommentVNode("v-if", true);
    };
  }
});
var Teleport_default = Teleport_vue_vue_type_script_setup_true_lang_default;
var VisuallyHidden_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: false,
      default: "focusable"
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "aria-hidden": _ctx.feature === "focusable" || _ctx.feature === "fully-hidden" ? "true" : void 0,
        "data-hidden": _ctx.feature === "fully-hidden" ? "" : void 0,
        tabindex: _ctx.feature === "fully-hidden" ? "-1" : void 0,
        style: {
          position: "absolute",
          border: 0,
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          top: "-1px",
          left: "-1px"
        }
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-hidden",
        "data-hidden",
        "tabindex"
      ]);
    };
  }
});
var VisuallyHidden_default = VisuallyHidden_vue_vue_type_script_setup_true_lang_default;
const portalTargetInjectionKey = /* @__PURE__ */ Symbol("nuxt-ui.portal-target");
function usePortal(portal) {
  const globalPortal = inject(portalTargetInjectionKey, void 0);
  const value = computed(() => portal.value === true ? globalPortal?.value : portal.value);
  const disabled = computed(() => typeof value.value === "boolean" ? !value.value : false);
  const to = computed(() => typeof value.value === "boolean" ? "body" : value.value);
  return computed(() => ({
    to: to.value,
    disabled: disabled.value
  }));
}
function pointerDownOutside(e, options = {}) {
  const originalEvent = e.detail.originalEvent;
  const target = originalEvent.target;
  if (!target?.isConnected) {
    e.preventDefault();
    return;
  }
  if (options.scrollable) {
    if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
      e.preventDefault();
    }
  }
}

export { ConfigProvider_default as C, DismissableLayer_default as D, FocusScope_default as F, ITEM_SELECT as I, LAST_KEYS as L, Presence_default as P, SUB_CLOSE_KEYS as S, Teleport_default as T, VisuallyHidden_default as V, usePortal as a, getTabbableCandidates as b, pointerDownOutside as c, useHideOthers as d, useBodyScrollLock as e, focusFirst$1 as f, getActiveElement as g, getOpenState as h, isNullish as i, injectConfigProviderContext as j, getCheckedState as k, isIndeterminate as l, SELECTION_KEYS as m, SUB_OPEN_KEYS as n, isMouseEvent as o, portalTargetInjectionKey as p, isPointerInGraceArea as q, FIRST_LAST_KEYS as r, focusFirst as s, handleAndDispatchCustomEvent as t, useId as u };

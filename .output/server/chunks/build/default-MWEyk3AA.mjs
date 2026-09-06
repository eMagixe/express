import { r as __exportAll } from './components-CEYKtFqx.mjs';
import { _ as _plugin_vue_export_helper_default, a as useAppConfig, c as useRoute$1, p as page_default } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-DBlEMESS.mjs';
import { u as useComponentProps, a as useForwardProps, t as tv, o as omit, n as useForwardProps$1, b as _sfc_main$5$1, g as getSlotChildrenText, _ as _sfc_main$d, c as _sfc_main$1$1, P as Primitive, e as _sfc_main$3$1, m as createContext } from './Button-Cn6n7Ulk.mjs';
import { a as usePortal, p as portalTargetInjectionKey, C as ConfigProvider_default, T as Teleport_default, f as focusFirst$1, P as Presence_default, g as getActiveElement, V as VisuallyHidden_default, b as getTabbableCandidates, i as isNullish } from './overlay-Dn203DW_.mjs';
import { u as useForwardExpose } from './useForwardExpose-lTVrimVg.mjs';
import { u as useCollection } from './Collection-BHq5nCg7.mjs';
import { _ as _sfc_main$a } from './Modal-DCnjX90t.mjs';
import { T as TooltipProvider_default, _ as _sfc_main$c } from './Slideover-BH9ah5wz.mjs';
import { _ as _sfc_main$e } from './Container-D6wH7HZZ.mjs';
import { l as localeContextInjectionKey, u as useLocale } from './useLocale-Da6kM5uy.mjs';
import { u as useToast, t as toastMaxInjectionKey } from './useToast-G9UjyR3Z.mjs';
import { u as useCall } from './useCall-Dj6MvIIm.mjs';
import { _ as _sfc_main$b } from './Drawer-Bp0mVmZt.mjs';
import { useSSRContext, defineAsyncComponent, mergeProps, withCtx, createVNode, provide, toRef, computed, ref, unref, renderSlot, openBlock, createBlock, Fragment, renderList, useId, defineComponent, createTextVNode, toDisplayString, useSlots, useModel, watch, createCommentVNode, mergeModels, toRefs, useTemplateRef, resolveDynamicComponent, withModifiers, normalizeProps, guardReactiveProps, watchEffect, normalizeStyle, nextTick, createElementBlock, Teleport, shallowReactive, onScopeDispose, reactive, markRaw } from 'vue';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { p as defu } from '../nitro/nitro.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderVNode } from 'vue/server-renderer';
import { reactivePick, createReusableTemplate, onKeyStroke, unrefElement, useVModel, createSharedComposable, useRafFn } from '@vueuse/core';
import { isClient, useTimeout } from '@vueuse/shared';
import './asyncData-D23YQ4Dm.mjs';
import 'nostics';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'nostics/formatters/ansi';
import 'vue-router';
import 'tailwindcss/colors';
import 'unhead/plugins';
import 'unhead/utils';
import 'tailwind-variants';
import 'aria-hidden';
import './state-DyBHau4b.mjs';
import 'vaul-vue';
import 'unhead/server';
import 'unhead/legacy';
import 'vue-bundle-renderer/runtime';
import 'devalue';
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

//#region \0virtual:public?%2Fimages%2Fsvg%2Flogo.svg
var _virtual_public__2Fimages_2Fsvg_2Flogo_default = publicAssetsURL("/images/svg/logo.svg");
//#endregion
//#region \0virtual:public?%2Fimages%2Fsvg%2Fsm-logo.svg
var _virtual_public__2Fimages_2Fsvg_2Fsm_logo_default = publicAssetsURL("/images/svg/sm-logo.svg");
//#endregion
//#region app/components/logo.vue
var _sfc_main$10 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
	_push(ssrRenderComponent(NuxtLink, mergeProps({ to: "https://taxi-express.su/" }, _attrs), {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<picture${_scopeId}><source media="(min-width: 573px)"${ssrRenderAttr("srcset", _virtual_public__2Fimages_2Fsvg_2Flogo_default)}${_scopeId}><source media="(max-width: 573px)"${ssrRenderAttr("srcset", _virtual_public__2Fimages_2Fsvg_2Fsm_logo_default)}${_scopeId}><img height="72" width="240"${ssrRenderAttr("src", _virtual_public__2Fimages_2Fsvg_2Flogo_default)} alt="logo" style="${ssrRenderStyle({ "width": "auto" })}"${_scopeId}></picture>`);
			else return [createVNode("picture", null, [
				createVNode("source", {
					media: "(min-width: 573px)",
					srcset: _virtual_public__2Fimages_2Fsvg_2Flogo_default
				}),
				createVNode("source", {
					media: "(max-width: 573px)",
					srcset: _virtual_public__2Fimages_2Fsvg_2Fsm_logo_default
				}),
				createVNode("img", {
					height: "72",
					width: "240",
					src: _virtual_public__2Fimages_2Fsvg_2Flogo_default,
					alt: "logo",
					style: { "width": "auto" }
				})
			])];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$11 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/logo.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var logo_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$10, [["ssrRender", _sfc_ssrRender$4]]), { __name: "Logo" });
//#endregion
//#region node_modules/reka-ui/dist/DismissableLayer/DismissableLayerBranch.js
var DismissableLayerBranch_default = /* @__PURE__ */ defineComponent({
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
		const { forwardRef} = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({ ref: unref(forwardRef) }, props), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Progress/ProgressRoot.js
var DEFAULT_MAX = 100;
var [injectProgressRootContext, provideProgressRootContext] = /*#__PURE__*/ createContext("ProgressRoot");
var isNumber = (v) => typeof v === "number";
function validateValue(value, max) {
	if (isNullish(value) || isNumber(value) && !Number.isNaN(value) && value <= max && value >= 0) return value;
	console.error(`Invalid prop \`value\` of value \`${value}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`);
	return null;
}
function validateMax(max) {
	if (isNumber(max) && !Number.isNaN(max) && max > 0) return max;
	console.error(`Invalid prop \`max\` of value \`${max}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`);
	return DEFAULT_MAX;
}
var ProgressRoot_default = /* @__PURE__ */ defineComponent({
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
//#endregion
//#region node_modules/reka-ui/dist/Progress/ProgressIndicator.js
var ProgressIndicator_default = /* @__PURE__ */ defineComponent({
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
//#endregion
//#region node_modules/reka-ui/dist/Toast/ToastAnnounceExclude.js
var ToastAnnounceExclude_default = /* @__PURE__ */ defineComponent({
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
//#endregion
//#region node_modules/reka-ui/dist/Toast/ToastProvider.js
var [injectToastProviderContext, provideToastProviderContext] = /*#__PURE__*/ createContext("ToastProvider");
var ToastProvider_default = /* @__PURE__ */ defineComponent({
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
		if (props.label && typeof props.label === "string" && !props.label.trim()) throw new Error("Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.");
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
//#endregion
//#region node_modules/reka-ui/dist/Toast/ToastAnnounce.js
var ToastAnnounce_default = /* @__PURE__ */ defineComponent({
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
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
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
	Array.from(container.childNodes).forEach((node) => {
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
//#endregion
//#region node_modules/reka-ui/dist/Toast/ToastRootImpl.js
var [injectToastRootContext, provideToastRootContext] = /*#__PURE__*/ createContext("ToastRoot");
var ToastRootImpl_default = /* @__PURE__ */ defineComponent({
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
			if (currentElement.value?.contains(getActiveElement()) && isNonPointerEvent) providerContext.viewport.value?.focus();
			if (isNonPointerEvent) providerContext.isClosePausedRef.value = false;
			emits("close");
		}
		const announceTextContent = computed(() => currentElement.value ? getAnnounceTextContent(currentElement.value) : null);
		if (props.type && !["foreground", "background"].includes(props.type)) throw new Error("Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.");
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
				cleanupFn(() => {
					viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
					viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
				});
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
							unref(handleAndDispatchCustomEvent)(unref("toast.swipeMove"), (ev) => emits("swipeMove", ev), eventDetail);
						} else if (unref(isDeltaInDirection)(delta, unref(providerContext).swipeDirection.value, moveStartBuffer)) {
							swipeDeltaRef.value = delta;
							unref(handleAndDispatchCustomEvent)(unref("toast.swipeStart"), (ev) => emits("swipeStart", ev), eventDetail);
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
							if (unref(isDeltaInDirection)(delta, unref(providerContext).swipeDirection.value, unref(providerContext).swipeThreshold.value)) unref(handleAndDispatchCustomEvent)(unref("toast.swipeEnd"), (ev) => emits("swipeEnd", ev), eventDetail);
							else unref(handleAndDispatchCustomEvent)(unref("toast.swipeCancel"), (ev) => emits("swipeCancel", ev), eventDetail);
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
//#endregion
//#region node_modules/reka-ui/dist/Toast/ToastClose.js
var ToastClose_default = /* @__PURE__ */ defineComponent({
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
//#endregion
//#region node_modules/reka-ui/dist/Toast/ToastAction.js
var ToastAction_default = /* @__PURE__ */ defineComponent({
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
		if (!__props.altText) throw new Error("Missing prop `altText` expected on `ToastAction`");
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
//#endregion
//#region node_modules/reka-ui/dist/Toast/ToastDescription.js
var ToastDescription_default = /* @__PURE__ */ defineComponent({
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
//#endregion
//#region node_modules/reka-ui/dist/Toast/ToastPortal.js
var ToastPortal_default = /* @__PURE__ */ defineComponent({
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
//#endregion
//#region node_modules/reka-ui/dist/Toast/ToastRoot.js
var ToastRoot_default = /* @__PURE__ */ defineComponent({
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
//#endregion
//#region node_modules/reka-ui/dist/Toast/ToastTitle.js
var ToastTitle_default = /* @__PURE__ */ defineComponent({
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
//#endregion
//#region node_modules/reka-ui/dist/Toast/FocusProxy.js
var FocusProxy_default = /* @__PURE__ */ defineComponent({
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
					if (!unref(providerContext).viewport.value?.contains(prevFocusedElement)) emits("focusFromOutsideViewport");
				})
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Toast/ToastViewport.js
var ToastViewport_default = /* @__PURE__ */ defineComponent({
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
		const { hotkey, label } = toRefs(__props);
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
					if (!viewport.contains(event.relatedTarget)) handleResume();
				};
				const handlePointerLeaveResume = () => {
					if (!viewport.contains(getActiveElement())) handleResume();
				};
				const handleKeyDown = (event) => {
					const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
					if (event.key === "Tab" && !isMetaKey) {
						const focusedElement = getActiveElement();
						const isTabbingBackwards = event.shiftKey;
						if (event.target === viewport && isTabbingBackwards) {
							headFocusProxyRef.value?.focus();
							return;
						}
						const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection: isTabbingBackwards ? "backwards" : "forwards" });
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
			const tabbableCandidates = getItems().map((i) => i.ref).map((toastNode) => {
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
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fprogress.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprogress_default = {
	"slots": {
		"root": "gap-2",
		"base": "relative overflow-hidden rounded-full bg-accented",
		"indicator": "rounded-full size-full transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:data-[state=indeterminate]:animate-pulse",
		"status": "flex text-dimmed duration-200 ease-out motion-reduce:transition-none",
		"steps": "grid items-end",
		"step": "truncate text-end row-start-1 col-start-1 transition-opacity ease-out"
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
				"steps": "text-highlighted"
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
			"active": { "step": "opacity-100" },
			"first": { "step": "opacity-100 text-muted" },
			"other": { "step": "opacity-0" },
			"last": { "step": "" }
		},
		"orientation": {
			"horizontal": {
				"root": "w-full flex flex-col",
				"base": "w-full",
				"status": "flex-row items-center justify-end w-(--percent) min-w-fit transition-[width]"
			},
			"vertical": {
				"root": "h-full flex flex-row-reverse",
				"base": "h-full",
				"status": "flex-col justify-end h-(--percent) min-h-fit transition-[height]"
			}
		},
		"inverted": { "true": { "status": "self-end" } }
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
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel_2s_linear_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_linear_infinite]" }
		},
		{
			"orientation": "vertical",
			"animation": "carousel",
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-vertical_2s_linear_infinite]" }
		},
		{
			"orientation": "horizontal",
			"animation": "carousel-inverse",
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-inverse_2s_linear_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_linear_infinite]" }
		},
		{
			"orientation": "vertical",
			"animation": "carousel-inverse",
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_linear_infinite]" }
		},
		{
			"orientation": "horizontal",
			"animation": "swing",
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[swing_2s_var(--ease-in-out)_infinite]" }
		},
		{
			"orientation": "vertical",
			"animation": "swing",
			"class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[swing-vertical_2s_var(--ease-in-out)_infinite]" }
		},
		{
			"orientation": "horizontal",
			"animation": "elastic",
			"class": { "indicator": "relative motion-safe:data-[state=indeterminate]:animate-[elastic_2s_var(--ease-in-out)_infinite]" }
		},
		{
			"orientation": "vertical",
			"animation": "elastic",
			"class": { "indicator": "relative motion-safe:data-[state=indeterminate]:animate-[elastic-vertical_2s_var(--ease-in-out)_infinite]" }
		}
	],
	"defaultVariants": {
		"animation": "carousel",
		"color": "primary",
		"size": "md"
	}
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Progress.vue
var _sfc_main$9 = {
	__name: "UProgress",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		max: {
			type: [Number, Array],
			required: false
		},
		status: {
			type: Boolean,
			required: false
		},
		inverted: {
			type: Boolean,
			required: false,
			default: false
		},
		size: {
			type: null,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "horizontal"
		},
		animation: {
			type: null,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		getValueLabel: {
			type: Function,
			required: false
		},
		getValueText: {
			type: Function,
			required: false
		},
		modelValue: {
			type: [Number, null],
			required: false,
			default: null
		}
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
			if (isIndeterminate.value || !props.max) return;
			if (Array.isArray(props.max)) return props.max.length - 1;
			return Number(props.max);
		});
		const percent = computed(() => {
			if (isIndeterminate.value) return;
			switch (true) {
				case rootProps.value.modelValue < 0: return 0;
				case rootProps.value.modelValue > (realMax.value ?? 100): return 100;
				default: return Math.round(rootProps.value.modelValue / (realMax.value ?? 100) * 100);
			}
		});
		const indicatorStyle = computed(() => {
			if (percent.value === void 0) return;
			if (props.orientation === "vertical") return { transform: `translateY(${props.inverted ? "" : "-"}${100 - percent.value}%)` };
			else if (dir.value === "rtl") return { transform: `translateX(${props.inverted ? "-" : ""}${100 - percent.value}%)` };
			else return { transform: `translateX(${props.inverted ? "" : "-"}${100 - percent.value}%)` };
		});
		const statusStyle = computed(() => ({ "--percent": `${Math.max(percent.value ?? 0, 0)}%` }));
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
			if (isActive(index) && !isFirst(index)) return "active";
			if (isFirst(index) && isActive(index)) return "first";
			if (isLast(index) && isActive(index)) return "last";
			return "other";
		}
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprogress_default,
			...appConfig.ui?.progress || {}
		})({
			animation: props.animation,
			size: props.size,
			color: props.color,
			orientation: props.orientation,
			inverted: props.inverted
		}));
		const themeColors = computed(() => Object.keys({
			...virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fprogress_default.variants?.color,
			...appConfig.ui?.progress?.variants?.color
		}));
		const customColor = computed(() => props.color && !themeColors.value.includes(props.color) ? props.color : void 0);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"data-orientation": unref(props).orientation,
				"data-slot": "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (!isIndeterminate.value && (unref(props).status || !!slots.status)) {
							_push(`<div data-slot="status" class="${ssrRenderClass(ui.value.status({ class: unref(props).ui?.status }))}" style="${ssrRenderStyle(statusStyle.value)}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "status", { percent: percent.value }, () => {
								_push(`${ssrInterpolate(percent.value)}% `);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(ssrRenderComponent(unref(ProgressRoot_default), mergeProps(unref(rootProps), {
							max: realMax.value,
							"data-slot": "base",
							class: ui.value.base({ class: unref(props).ui?.base }),
							style: { "transform": "translateZ(0)" }
						}), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(ProgressIndicator_default), {
									"data-slot": "indicator",
									class: ui.value.indicator({ class: unref(props).ui?.indicator }),
									style: [indicatorStyle.value, customColor.value ? { backgroundColor: customColor.value } : void 0]
								}, null, _parent, _scopeId));
								else return [createVNode(unref(ProgressIndicator_default), {
									"data-slot": "indicator",
									class: ui.value.indicator({ class: unref(props).ui?.indicator }),
									style: [indicatorStyle.value, customColor.value ? { backgroundColor: customColor.value } : void 0]
								}, null, 8, ["class", "style"])];
							}),
							_: 1
						}, _parent, _scopeId));
						if (hasSteps.value) {
							_push(`<div data-slot="steps" class="${ssrRenderClass(ui.value.steps({ class: unref(props).ui?.steps }))}" style="${ssrRenderStyle(customColor.value ? { color: customColor.value } : void 0)}"${_scopeId}><!--[-->`);
							ssrRenderList(unref(props).max, (step, index) => {
								_push(`<div data-slot="step" class="${ssrRenderClass(ui.value.step({
									class: unref(props).ui?.step,
									step: stepVariant(index)
								}))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, `step-${index}`, { step }, () => {
									_push(`${ssrInterpolate(step)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
					} else return [
						!isIndeterminate.value && (unref(props).status || !!slots.status) ? (openBlock(), createBlock("div", {
							key: 0,
							"data-slot": "status",
							class: ui.value.status({ class: unref(props).ui?.status }),
							style: statusStyle.value
						}, [renderSlot(_ctx.$slots, "status", { percent: percent.value }, () => [createTextVNode(toDisplayString(percent.value) + "% ", 1)])], 6)) : createCommentVNode("", true),
						createVNode(unref(ProgressRoot_default), mergeProps(unref(rootProps), {
							max: realMax.value,
							"data-slot": "base",
							class: ui.value.base({ class: unref(props).ui?.base }),
							style: { "transform": "translateZ(0)" }
						}), {
							default: withCtx(() => [createVNode(unref(ProgressIndicator_default), {
								"data-slot": "indicator",
								class: ui.value.indicator({ class: unref(props).ui?.indicator }),
								style: [indicatorStyle.value, customColor.value ? { backgroundColor: customColor.value } : void 0]
							}, null, 8, ["class", "style"])]),
							_: 1
						}, 16, ["max", "class"]),
						hasSteps.value ? (openBlock(), createBlock("div", {
							key: 1,
							"data-slot": "steps",
							class: ui.value.steps({ class: unref(props).ui?.steps }),
							style: customColor.value ? { color: customColor.value } : void 0
						}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).max, (step, index) => {
							return openBlock(), createBlock("div", {
								key: index,
								"data-slot": "step",
								class: ui.value.step({
									class: unref(props).ui?.step,
									step: stepVariant(index)
								})
							}, [renderSlot(_ctx.$slots, `step-${index}`, { step }, () => [createTextVNode(toDisplayString(step), 1)])], 2);
						}), 128))], 6)) : createCommentVNode("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$10 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Ftoast.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ftoast_default = {
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
		"title": { "true": { "description": "mt-1" } }
	},
	"defaultVariants": { "color": "primary" }
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Toast.vue
var _sfc_main$8 = {
	__name: "UToast",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		title: {
			type: [
				String,
				Object,
				Function
			],
			required: false
		},
		description: {
			type: [
				String,
				Object,
				Function
			],
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		avatar: {
			type: Object,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "vertical"
		},
		close: {
			type: [Boolean, Object],
			required: false,
			default: true
		},
		closeIcon: {
			type: null,
			required: false
		},
		actions: {
			type: Array,
			required: false
		},
		duration: {
			type: Number,
			required: false
		},
		progress: {
			type: [Boolean, Object],
			required: false,
			default: true
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		type: {
			type: String,
			required: false
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
	setup(__props, { expose: __expose, emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("toast", _props);
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "as", "defaultOpen", "open", "duration", "type"), emits);
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ftoast_default,
			...appConfig.ui?.toast || {}
		})({
			color: props.color,
			orientation: props.orientation,
			title: !!props.title || !!slots.title
		}));
		const rootRef = useTemplateRef("rootRef");
		const height = ref(0);
		__expose({ height });
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
				default: withCtx(({ remaining, duration: totalDuration, open }, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
							if (unref(props).avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: unref(props).ui?.avatarSize || ui.value.avatarSize() }, unref(props).avatar, {
								"data-slot": "avatar",
								class: ui.value.avatar({ class: unref(props).ui?.avatar })
							}), null, _parent, _scopeId));
							else if (unref(props).icon) _push(ssrRenderComponent(_sfc_main$5$1, {
								name: unref(props).icon,
								"data-slot": "icon",
								class: ui.value.icon({ class: unref(props).ui?.icon })
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
						if (unref(props).title || !!slots.title) _push(ssrRenderComponent(unref(ToastTitle_default), {
							"data-slot": "title",
							class: ui.value.title({ class: unref(props).ui?.title })
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
									if (typeof unref(props).title === "function") ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(props).title()), null, null), _parent, _scopeId);
									else if (typeof unref(props).title === "object") ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(props).title), null, null), _parent, _scopeId);
									else _push(`<!--[-->${ssrInterpolate(unref(props).title)}<!--]-->`);
								}, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "title", {}, () => [typeof unref(props).title === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title()), { key: 0 })) : typeof unref(props).title === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(props).title), 1)], 64))])];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						if (unref(props).description || !!slots.description) _push(ssrRenderComponent(unref(ToastDescription_default), {
							"data-slot": "description",
							class: ui.value.description({ class: unref(props).ui?.description })
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
									if (typeof unref(props).description === "function") ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(props).description()), null, null), _parent, _scopeId);
									else if (typeof unref(props).description === "object") ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(props).description), null, null), _parent, _scopeId);
									else _push(`<!--[-->${ssrInterpolate(unref(props).description)}<!--]-->`);
								}, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "description", {}, () => [typeof unref(props).description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description()), { key: 0 })) : typeof unref(props).description === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(props).description), 1)], 64))])];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						if (unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions)) {
							_push(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({ class: unref(props).ui?.actions }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
								_push(`<!--[-->`);
								ssrRenderList(unref(props).actions, (action, index) => {
									_push(ssrRenderComponent(unref(ToastAction_default), {
										key: index,
										"alt-text": action.label || "Action",
										"as-child": "",
										onClick: () => {}
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(_sfc_main$d, mergeProps({
												size: "xs",
												color: unref(props).color
											}, { ref_for: true }, action), null, _parent, _scopeId));
											else return [createVNode(_sfc_main$d, mergeProps({
												size: "xs",
												color: unref(props).color
											}, { ref_for: true }, action), null, 16, ["color"])];
										}),
										_: 2
									}, _parent, _scopeId));
								});
								_push(`<!--]-->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
						if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close) {
							_push(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({
								class: unref(props).ui?.actions,
								orientation: "horizontal"
							}))}"${_scopeId}>`);
							if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions)) ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
								_push(`<!--[-->`);
								ssrRenderList(unref(props).actions, (action, index) => {
									_push(ssrRenderComponent(unref(ToastAction_default), {
										key: index,
										"alt-text": action.label || "Action",
										"as-child": "",
										onClick: () => {}
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(_sfc_main$d, mergeProps({
												size: "xs",
												color: unref(props).color
											}, { ref_for: true }, action), null, _parent, _scopeId));
											else return [createVNode(_sfc_main$d, mergeProps({
												size: "xs",
												color: unref(props).color
											}, { ref_for: true }, action), null, 16, ["color"])];
										}),
										_: 2
									}, _parent, _scopeId));
								});
								_push(`<!--]-->`);
							}, _push, _parent, _scopeId);
							else _push(`<!---->`);
							if (unref(props).close || !!slots.close) _push(ssrRenderComponent(unref(ToastClose_default), { "as-child": "" }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
										if (unref(props).close) _push(ssrRenderComponent(_sfc_main$d, mergeProps({
											icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
											color: "neutral",
											variant: "link",
											"aria-label": unref(t)("toast.close")
										}, typeof unref(props).close === "object" ? unref(props).close : {}, {
											"data-slot": "close",
											class: ui.value.close({ class: unref(props).ui?.close }),
											onClick: () => {}
										}), null, _parent, _scopeId));
										else _push(`<!---->`);
									}, _push, _parent, _scopeId);
									else return [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
										key: 0,
										icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
										color: "neutral",
										variant: "link",
										"aria-label": unref(t)("toast.close")
									}, typeof unref(props).close === "object" ? unref(props).close : {}, {
										"data-slot": "close",
										class: ui.value.close({ class: unref(props).ui?.close }),
										onClick: withModifiers(() => {}, ["stop"])
									}), null, 16, [
										"icon",
										"aria-label",
										"class",
										"onClick"
									])) : createCommentVNode("", true)])];
								}),
								_: 2
							}, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						if (unref(props).progress && open && remaining > 0 && totalDuration) _push(ssrRenderComponent(_sfc_main$9, mergeProps({
							"model-value": remaining / totalDuration * 100,
							color: unref(props).color
						}, typeof unref(props).progress === "object" ? unref(props).progress : {}, {
							size: "sm",
							"data-slot": "progress",
							class: ui.value.progress({ class: unref(props).ui?.progress })
						}), null, _parent, _scopeId));
						else _push(`<!---->`);
					} else return [
						renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
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
						}, null, 8, ["name", "class"])) : createCommentVNode("", true)]),
						createVNode("div", {
							"data-slot": "wrapper",
							class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
						}, [
							unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(ToastTitle_default), {
								key: 0,
								"data-slot": "title",
								class: ui.value.title({ class: unref(props).ui?.title })
							}, {
								default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [typeof unref(props).title === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title()), { key: 0 })) : typeof unref(props).title === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(props).title), 1)], 64))])]),
								_: 3
							}, 8, ["class"])) : createCommentVNode("", true),
							unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(ToastDescription_default), {
								key: 1,
								"data-slot": "description",
								class: ui.value.description({ class: unref(props).ui?.description })
							}, {
								default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [typeof unref(props).description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description()), { key: 0 })) : typeof unref(props).description === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(props).description), 1)], 64))])]),
								_: 3
							}, 8, ["class"])) : createCommentVNode("", true),
							unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions) ? (openBlock(), createBlock("div", {
								key: 2,
								"data-slot": "actions",
								class: ui.value.actions({ class: unref(props).ui?.actions })
							}, [renderSlot(_ctx.$slots, "actions", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, (action, index) => {
								return openBlock(), createBlock(unref(ToastAction_default), {
									key: index,
									"alt-text": action.label || "Action",
									"as-child": "",
									onClick: withModifiers(() => {}, ["stop"])
								}, {
									default: withCtx(() => [createVNode(_sfc_main$d, mergeProps({
										size: "xs",
										color: unref(props).color
									}, { ref_for: true }, action), null, 16, ["color"])]),
									_: 2
								}, 1032, ["alt-text", "onClick"]);
							}), 128))])], 2)) : createCommentVNode("", true)
						], 2),
						unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close ? (openBlock(), createBlock("div", {
							key: 0,
							"data-slot": "actions",
							class: ui.value.actions({
								class: unref(props).ui?.actions,
								orientation: "horizontal"
							})
						}, [unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) ? renderSlot(_ctx.$slots, "actions", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, (action, index) => {
							return openBlock(), createBlock(unref(ToastAction_default), {
								key: index,
								"alt-text": action.label || "Action",
								"as-child": "",
								onClick: withModifiers(() => {}, ["stop"])
							}, {
								default: withCtx(() => [createVNode(_sfc_main$d, mergeProps({
									size: "xs",
									color: unref(props).color
								}, { ref_for: true }, action), null, 16, ["color"])]),
								_: 2
							}, 1032, ["alt-text", "onClick"]);
						}), 128))], void 0, 0) : createCommentVNode("", true), unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(ToastClose_default), {
							key: 1,
							"as-child": ""
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
								key: 0,
								icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
								color: "neutral",
								variant: "link",
								"aria-label": unref(t)("toast.close")
							}, typeof unref(props).close === "object" ? unref(props).close : {}, {
								"data-slot": "close",
								class: ui.value.close({ class: unref(props).ui?.close }),
								onClick: withModifiers(() => {}, ["stop"])
							}), null, 16, [
								"icon",
								"aria-label",
								"class",
								"onClick"
							])) : createCommentVNode("", true)])]),
							_: 3
						})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
						unref(props).progress && open && remaining > 0 && totalDuration ? (openBlock(), createBlock(_sfc_main$9, mergeProps({
							key: 1,
							"model-value": remaining / totalDuration * 100,
							color: unref(props).color
						}, typeof unref(props).progress === "object" ? unref(props).progress : {}, {
							size: "sm",
							"data-slot": "progress",
							class: ui.value.progress({ class: unref(props).ui?.progress })
						}), null, 16, [
							"model-value",
							"color",
							"class"
						])) : createCommentVNode("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$9 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Ftoaster.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ftoaster_default = {
	"slots": {
		"viewport": "fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-(--height) focus:outline-none",
		"base": "pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:opacity-0 data-[front=false]:*:transition-opacity data-[front=false]:*:duration-100 data-[state=closed]:animate-[toast-closed_200ms_var(--ease-out)] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_var(--ease-out)] motion-safe:data-[state=open]:data-[pulsing=odd]:animate-[toast-pulse-a_200ms_var(--ease-out)] motion-safe:data-[state=open]:data-[pulsing=even]:animate-[toast-pulse-b_200ms_var(--ease-out)] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out motion-reduce:transition-none"
	},
	"variants": {
		"position": {
			"top-left": { "viewport": "left-4" },
			"top-center": { "viewport": "left-1/2 transform -translate-x-1/2" },
			"top-right": { "viewport": "right-4" },
			"bottom-left": { "viewport": "left-4" },
			"bottom-center": { "viewport": "left-1/2 transform -translate-x-1/2" },
			"bottom-right": { "viewport": "right-4" }
		},
		"swipeDirection": {
			"up": "data-[swipe=end]:animate-[toast-slide-up_200ms_var(--ease-out)]",
			"right": "data-[swipe=end]:animate-[toast-slide-right_200ms_var(--ease-out)]",
			"down": "data-[swipe=end]:animate-[toast-slide-down_200ms_var(--ease-out)]",
			"left": "data-[swipe=end]:animate-[toast-slide-left_200ms_var(--ease-out)]"
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
				"base": "top-0 data-[state=open]:animate-[toast-slide-in-from-top_200ms_var(--ease-out)]"
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
				"base": "bottom-0 data-[state=open]:animate-[toast-slide-in-from-bottom_200ms_var(--ease-out)]"
			}
		},
		{
			"swipeDirection": ["left", "right"],
			"class": "data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0"
		},
		{
			"swipeDirection": ["up", "down"],
			"class": "data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0"
		}
	],
	"defaultVariants": { "position": "bottom-right" }
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue
var _sfc_main$7 = /*@__PURE__*/ Object.assign({ name: "Toaster" }, {
	__ssrInlineRender: true,
	props: {
		position: {
			type: null,
			required: false
		},
		expand: {
			type: Boolean,
			required: false,
			default: true
		},
		progress: {
			type: Boolean,
			required: false,
			default: true
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
		},
		max: {
			type: Number,
			required: false,
			default: 5
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		label: {
			type: String,
			required: false
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
		swipeThreshold: {
			type: Number,
			required: false
		}
	},
	setup(__props) {
		const props = useComponentProps("toaster", __props);
		const { toasts, remove } = useToast();
		const appConfig = useAppConfig();
		provide(toastMaxInjectionKey, toRef(() => props.max));
		const providerProps = useForwardProps(reactivePick(props, "duration", "label", "swipeThreshold", "disableSwipe"));
		const portalProps = usePortal(toRef(() => props.portal));
		const swipeDirection = computed(() => {
			switch (props.position) {
				case "top-center": return "up";
				case "top-right":
				case "bottom-right": return "right";
				case "bottom-center": return "down";
				case "top-left":
				case "bottom-left": return "left";
			}
			return "right";
		});
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ftoaster_default,
			...appConfig.ui?.toaster || {}
		})({
			position: props.position,
			swipeDirection: swipeDirection.value
		}));
		function onUpdateOpen(value, id) {
			if (value) return;
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
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(`<!--[-->`);
						ssrRenderList(unref(toasts), (toast, index) => {
							_push(ssrRenderComponent(_sfc_main$8, mergeProps({
								key: toast.id,
								ref_for: true,
								ref_key: "refs",
								ref: refs,
								progress: unref(props).progress
							}, { ref_for: true }, unref(omit)(toast, [
								"id",
								"close",
								"_duplicate",
								"_updated"
							]), {
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
							}), null, _parent, _scopeId));
						});
						_push(`<!--]-->`);
						_push(ssrRenderComponent(unref(ToastPortal_default), unref(portalProps), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(ToastViewport_default), {
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
								}, null, _parent, _scopeId));
								else return [createVNode(unref(ToastViewport_default), {
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
								}, null, 8, [
									"data-expanded",
									"class",
									"style",
									"onMouseenter",
									"onMouseleave"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						renderSlot(_ctx.$slots, "default"),
						(openBlock(true), createBlock(Fragment, null, renderList(unref(toasts), (toast, index) => {
							return openBlock(), createBlock(_sfc_main$8, mergeProps({
								key: toast.id,
								ref_for: true,
								ref_key: "refs",
								ref: refs,
								progress: unref(props).progress
							}, { ref_for: true }, unref(omit)(toast, [
								"id",
								"close",
								"_duplicate",
								"_updated"
							]), {
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
							}), null, 16, [
								"progress",
								"close",
								"data-expanded",
								"data-front",
								"data-pulsing",
								"style",
								"class",
								"onUpdate:open",
								"onClick"
							]);
						}), 128)),
						createVNode(unref(ToastPortal_default), unref(portalProps), {
							default: withCtx(() => [createVNode(unref(ToastViewport_default), {
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
							}, null, 8, [
								"data-expanded",
								"class",
								"style",
								"onMouseenter",
								"onMouseleave"
							])]),
							_: 1
						}, 16)
					];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$8 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var Toaster_default = Object.assign(_sfc_main$7, { __name: "UToaster" });
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/composables/useOverlay.js
function _useOverlay() {
	const overlays = shallowReactive([]);
	const create = (component, _options) => {
		const { props, defaultOpen, destroyOnClose } = _options || {};
		const options = reactive({
			id: Symbol(""),
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
		if (props) overlay.props = {
			...overlay.originalProps,
			...props
		};
		else overlay.props = { ...overlay.originalProps };
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
		overlay.props = {
			...overlay.props,
			...props
		};
	};
	const getOverlay = (id) => {
		const overlay = overlays.find((overlay2) => overlay2.id === id);
		if (!overlay) throw new Error("Overlay not found");
		return overlay;
	};
	const isOpen = (id) => {
		return getOverlay(id).isOpen;
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
var useOverlay = /* @__PURE__ */ createSharedComposable(_useOverlay);
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue
var _sfc_main$6 = {
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
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(overlay.component), mergeProps({ key: overlay.id }, { ref_for: true }, overlay.props, {
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
var _sfc_setup$7 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/App.vue
var _sfc_main$5 = /*@__PURE__*/ Object.assign({ name: "App" }, {
	__ssrInlineRender: true,
	props: {
		tooltip: {
			type: Object,
			required: false
		},
		toaster: {
			type: [Object, null],
			required: false
		},
		locale: {
			type: Object,
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: "body"
		},
		dir: {
			type: String,
			required: false
		},
		scrollBody: {
			type: [Boolean, Object],
			required: false
		},
		nonce: {
			type: String,
			required: false
		}
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
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(TooltipProvider_default), tooltipProps.value, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								if (__props.toaster !== null) _push(ssrRenderComponent(Toaster_default, toasterProps.value, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
										else return [renderSlot(_ctx.$slots, "default")];
									}),
									_: 3
								}, _parent, _scopeId));
								else ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
								_push(ssrRenderComponent(_sfc_main$6, null, null, _parent, _scopeId));
							} else return [__props.toaster !== null ? (openBlock(), createBlock(Toaster_default, mergeProps({ key: 0 }, toasterProps.value), {
								default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
								_: 3
							}, 16)) : renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1), createVNode(_sfc_main$6)];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [createVNode(unref(TooltipProvider_default), tooltipProps.value, {
						default: withCtx(() => [__props.toaster !== null ? (openBlock(), createBlock(Toaster_default, mergeProps({ key: 0 }, toasterProps.value), {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 16)) : renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1), createVNode(_sfc_main$6)]),
						_: 3
					}, 16)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$6 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/App.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var App_default = Object.assign(_sfc_main$5, { __name: "UApp" });
//#endregion
//#region app/components/modal/call.vue?vue&type=script&setup=true&lang.ts
var call_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "call",
	__ssrInlineRender: true,
	setup(__props) {
		const call = useCall();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UModal = _sfc_main$a;
			const _component_NuxtLink = NuxtLink;
			const _component_UIcon = _sfc_main$5$1;
			const _component_UProgress = _sfc_main$9;
			_push(ssrRenderComponent(_component_UModal, mergeProps({
				class: "z-500",
				open: unref(call).order.value.modalVisible,
				"onUpdate:open": ($event) => unref(call).order.value.modalVisible = $event,
				"close-icon": "i-lucide-circle-x",
				ui: {
					body: "bg-gray-600 text-white flex flex-col justify-center items-center gap-5 mb-10",
					header: "bg-gray-600 border-gray-600 min-h-auto",
					close: "text-gray-200 hover:text-gray-600",
					title: "text-gray-200",
					content: "bg-gray-600 border-gray-600"
				}
			}, _attrs), {
				body: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<h2 class="text-primary text-2xl text-center w-full"${_scopeId}>Ваш номер заявки: #${ssrInterpolate(unref(call).order.value.uid)}</h2><p class="text-sm text-white text-center w-full"${_scopeId}>Назовите его диспетчеру при необходимости...</p>`);
						if (unref(call).order.value.callEnabled) _push(ssrRenderComponent(_component_NuxtLink, {
							class: "button-gradient h-16 flex items-center justify-center gap-3",
							icon: "i-lucide-phone-call",
							to: `tel:${unref(call).order.value.phone}`,
							onClick: ($event) => unref(useCall)().sendData()
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(_component_UIcon, {
										name: "i-lucide-phone-call",
										size: "18"
									}, null, _parent, _scopeId));
									_push(` Позвонить `);
								} else return [createVNode(_component_UIcon, {
									name: "i-lucide-phone-call",
									size: "18"
								}), createTextVNode(" Позвонить ")];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(ssrRenderComponent(_component_UProgress, null, null, _parent, _scopeId));
					} else return [
						createVNode("h2", { class: "text-primary text-2xl text-center w-full" }, "Ваш номер заявки: #" + toDisplayString(unref(call).order.value.uid), 1),
						createVNode("p", { class: "text-sm text-white text-center w-full" }, "Назовите его диспетчеру при необходимости..."),
						unref(call).order.value.callEnabled ? (openBlock(), createBlock(_component_NuxtLink, {
							key: 0,
							class: "button-gradient h-16 flex items-center justify-center gap-3",
							icon: "i-lucide-phone-call",
							to: `tel:${unref(call).order.value.phone}`,
							onClick: ($event) => unref(useCall)().sendData()
						}, {
							default: withCtx(() => [createVNode(_component_UIcon, {
								name: "i-lucide-phone-call",
								size: "18"
							}), createTextVNode(" Позвонить ")]),
							_: 1
						}, 8, ["to", "onClick"])) : (openBlock(), createBlock(_component_UProgress, { key: 1 }))
					];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region app/components/modal/call.vue
var _sfc_setup$5 = call_vue_vue_type_script_setup_true_lang_default.setup;
call_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/call.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var call_default = Object.assign(call_vue_vue_type_script_setup_true_lang_default, { __name: "ModalCall" });
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fheader.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fheader_default = {
	"slots": {
		"root": "bg-default/75 backdrop-blur-sm border-b border-default h-(--ui-header-height) sticky top-0 z-50",
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
	"variants": { "toggleSide": {
		"left": { "toggle": "-ms-1.5" },
		"right": { "toggle": "-me-1.5" }
	} }
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Header.vue
var _sfc_main$4 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UHeader",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({
		as: {
			type: null,
			required: false,
			default: "header"
		},
		title: {
			type: String,
			required: false,
			default: "Nuxt UI"
		},
		to: {
			type: String,
			required: false,
			default: "/"
		},
		mode: {
			type: null,
			required: false,
			default: "modal"
		},
		menu: {
			type: null,
			required: false
		},
		toggle: {
			type: [Boolean, Object],
			required: false,
			default: true
		},
		toggleSide: {
			type: String,
			required: false,
			default: "right"
		},
		autoClose: {
			type: Boolean,
			required: false,
			default: true
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	}, {
		"open": {
			type: Boolean,
			default: false
		},
		"openModifiers": {}
	}),
	emits: ["update:open"],
	setup(__props) {
		const _props = __props;
		const slots = useSlots();
		const props = useComponentProps("header", _props);
		const open = useModel(__props, "open", {
			type: Boolean,
			default: false
		});
		const route = useRoute$1();
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const [DefineLeftTemplate, ReuseLeftTemplate] = createReusableTemplate();
		const [DefineRightTemplate, ReuseRightTemplate] = createReusableTemplate();
		const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
		const ariaLabel = computed(() => {
			return (slots.title && getSlotChildrenText(slots.title()) || props.title || "Nuxt UI").trim();
		});
		watch(() => route.fullPath, () => {
			if (!props.autoClose) return;
			open.value = false;
		});
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fheader_default,
			...appConfig.ui?.header || {}
		})());
		const Menu = computed(() => ({
			slideover: _sfc_main$c,
			modal: _sfc_main$a,
			drawer: _sfc_main$b
		})[props.mode]);
		const menuProps = toRef(() => defu(props.menu, {}, props.mode === "modal" ? {
			fullscreen: true,
			transition: false
		} : {}));
		function toggleOpen() {
			open.value = !open.value;
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(DefineToggleTemplate), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "toggle", {
						open: open.value,
						toggle: toggleOpen,
						ui: ui.value
					}, () => {
						if (unref(props).toggle) _push(ssrRenderComponent(_sfc_main$d, mergeProps({
							color: "neutral",
							variant: "ghost",
							"aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
							icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
						}, typeof unref(props).toggle === "object" ? unref(props).toggle : {}, {
							"data-slot": "toggle",
							class: ui.value.toggle({
								class: unref(props).ui?.toggle,
								toggleSide: unref(props).toggleSide
							}),
							onClick: toggleOpen
						}), null, _parent, _scopeId));
						else _push(`<!---->`);
					}, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "toggle", {
						open: open.value,
						toggle: toggleOpen,
						ui: ui.value
					}, () => [unref(props).toggle ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
						key: 0,
						color: "neutral",
						variant: "ghost",
						"aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
						icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
					}, typeof unref(props).toggle === "object" ? unref(props).toggle : {}, {
						"data-slot": "toggle",
						class: ui.value.toggle({
							class: unref(props).ui?.toggle,
							toggleSide: unref(props).toggleSide
						}),
						onClick: toggleOpen
					}), null, 16, [
						"aria-label",
						"icon",
						"class"
					])) : createCommentVNode("", true)])];
				}),
				_: 3
			}, _parent));
			_push(ssrRenderComponent(unref(DefineLeftTemplate), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div data-slot="left" class="${ssrRenderClass(ui.value.left({ class: unref(props).ui?.left }))}"${_scopeId}>`);
						if (unref(props).toggleSide === "left") _push(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent, _scopeId));
						else _push(`<!---->`);
						ssrRenderSlot(_ctx.$slots, "left", {}, () => {
							_push(ssrRenderComponent(_sfc_main$1$1, {
								to: unref(props).to,
								"aria-label": ariaLabel.value,
								"data-slot": "title",
								class: ui.value.title({ class: unref(props).ui?.title })
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
										_push(`${ssrInterpolate(unref(props).title)}`);
									}, _push, _parent, _scopeId);
									else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
								}),
								_: 3
							}, _parent, _scopeId));
						}, _push, _parent, _scopeId);
						_push(`</div>`);
					} else return [createVNode("div", {
						"data-slot": "left",
						class: ui.value.left({ class: unref(props).ui?.left })
					}, [unref(props).toggleSide === "left" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true), renderSlot(_ctx.$slots, "left", {}, () => [createVNode(_sfc_main$1$1, {
						to: unref(props).to,
						"aria-label": ariaLabel.value,
						"data-slot": "title",
						class: ui.value.title({ class: unref(props).ui?.title })
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
						_: 3
					}, 8, [
						"to",
						"aria-label",
						"class"
					])])], 2)];
				}),
				_: 3
			}, _parent));
			_push(ssrRenderComponent(unref(DefineRightTemplate), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div data-slot="right" class="${ssrRenderClass(ui.value.right({ class: unref(props).ui?.right }))}"${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent, _scopeId);
						if (unref(props).toggleSide === "right") _push(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode("div", {
						"data-slot": "right",
						class: ui.value.right({ class: unref(props).ui?.right })
					}, [renderSlot(_ctx.$slots, "right"), unref(props).toggleSide === "right" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true)], 2)];
				}),
				_: 3
			}, _parent));
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"data-slot": "root"
			}, _ctx.$attrs, { class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] }) }), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent, _scopeId);
						_push(ssrRenderComponent(_sfc_main$e, {
							"data-slot": "container",
							class: ui.value.container({ class: unref(props).ui?.container })
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent, _scopeId));
									_push(`<div data-slot="center" class="${ssrRenderClass(ui.value.center({ class: unref(props).ui?.center }))}"${_scopeId}>`);
									ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
									_push(`</div>`);
									_push(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent, _scopeId));
								} else return [
									createVNode(unref(ReuseLeftTemplate)),
									createVNode("div", {
										"data-slot": "center",
										class: ui.value.center({ class: unref(props).ui?.center })
									}, [renderSlot(_ctx.$slots, "default")], 2),
									createVNode(unref(ReuseRightTemplate))
								];
							}),
							_: 3
						}, _parent, _scopeId));
						ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent, _scopeId);
					} else return [
						renderSlot(_ctx.$slots, "top"),
						createVNode(_sfc_main$e, {
							"data-slot": "container",
							class: ui.value.container({ class: unref(props).ui?.container })
						}, {
							default: withCtx(() => [
								createVNode(unref(ReuseLeftTemplate)),
								createVNode("div", {
									"data-slot": "center",
									class: ui.value.center({ class: unref(props).ui?.center })
								}, [renderSlot(_ctx.$slots, "default")], 2),
								createVNode(unref(ReuseRightTemplate))
							]),
							_: 3
						}, 8, ["class"]),
						renderSlot(_ctx.$slots, "bottom")
					];
				}),
				_: 3
			}, _parent));
			_push(ssrRenderComponent(unref(Menu), mergeProps({
				open: open.value,
				"onUpdate:open": ($event) => open.value = $event,
				title: unref(t)("header.title"),
				description: unref(t)("header.description")
			}, menuProps.value, { ui: {
				overlay: ui.value.overlay({ class: unref(props).ui?.overlay }),
				content: ui.value.content({ class: unref(props).ui?.content })
			} }), {
				content: withCtx((contentData, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "content", contentData, () => {
						if (unref(props).mode !== "drawer") {
							_push(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}"${_scopeId}>`);
							_push(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent, _scopeId));
							_push(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent, _scopeId));
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent, _scopeId);
						_push(`</div>`);
					}, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "content", contentData, () => [unref(props).mode !== "drawer" ? (openBlock(), createBlock("div", {
						key: 0,
						"data-slot": "header",
						class: ui.value.header({ class: unref(props).ui?.header })
					}, [createVNode(unref(ReuseLeftTemplate)), createVNode(unref(ReuseRightTemplate))], 2)) : createCommentVNode("", true), createVNode("div", {
						"data-slot": "body",
						class: ui.value.body({ class: unref(props).ui?.body })
					}, [renderSlot(_ctx.$slots, "body")], 2)])];
				}),
				_: 3
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Header.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region app/components/menu.vue
var _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
	const _component_NuxtLink = NuxtLink;
	const _component_UIcon = _sfc_main$5$1;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2 text-[#FFCC00] text-[24px] pl-10 italic" }, _attrs))}>`);
	_push(ssrRenderComponent(_component_NuxtLink, { to: "/contacts" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-contact",
					size: "18"
				}, null, _parent, _scopeId));
				_push(` Контакты `);
			} else return [createVNode(_component_UIcon, {
				name: "i-lucide-contact",
				size: "18"
			}), createTextVNode(" Контакты ")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_NuxtLink, { to: "/vacancies" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-clipboard-list",
					size: "18"
				}, null, _parent, _scopeId));
				_push(` Вакансии `);
			} else return [createVNode(_component_UIcon, {
				name: "i-lucide-clipboard-list",
				size: "18"
			}), createTextVNode(" Вакансии ")];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var menu_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]), { __name: "Menu" });
//#endregion
//#region app/components/phones.vue
var _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
	const _component_UIcon = _sfc_main$5$1;
	const _component_NuxtLink = NuxtLink;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col sm:flex-row justify-center items-center gap-4" }, _attrs))}><div class="flex flex-col gap-2 text-[#FFCC00] text-[24px] italic"><a>`);
	_push(ssrRenderComponent(_component_UIcon, {
		name: "i-lucide-phone",
		size: "18"
	}, null, _parent));
	_push(` +7 (917) 766-68-33 </a><a>`);
	_push(ssrRenderComponent(_component_UIcon, {
		name: "i-lucide-phone",
		size: "18"
	}, null, _parent));
	_push(` +7 (927) 324-25-82 </a></div>`);
	_push(ssrRenderComponent(_component_NuxtLink, {
		class: "button-gradient h-16 flex items-center justify-center gap-3",
		icon: "i-lucide-phone-call",
		onClick: ($event) => ("useCall" in _ctx ? _ctx.useCall : unref(useCall))().openModalCall("+79177666833")
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-phone-call",
					size: "18"
				}, null, _parent, _scopeId));
				_push(` Вызвать `);
			} else return [createVNode(_component_UIcon, {
				name: "i-lucide-phone-call",
				size: "18"
			}), createTextVNode(" Вызвать ")];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/phones.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var phones_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]), { __name: "Phones" });
//#endregion
//#region app/components/section/header.vue
var _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	const _component_UContainer = _sfc_main$e;
	const _component_UHeader = _sfc_main$4;
	const _component_Logo = logo_default;
	const _component_Menu = menu_default;
	const _component_Phones = phones_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b border-b-primary/70" }, _attrs))}>`);
	_push(ssrRenderComponent(_component_UContainer, null, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_UHeader, {
				back: "/",
				class: "border-b-0 relative"
			}, {
				left: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Logo, null, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Menu, { class: "not-sm:hidden" }, null, _parent, _scopeId));
					} else return [createVNode(_component_Logo), createVNode(_component_Menu, { class: "not-sm:hidden" })];
				}),
				body: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_Phones, null, null, _parent, _scopeId));
					else return [createVNode(_component_Phones)];
				}),
				right: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_Phones, { class: "not-lg:hidden" }, null, _parent, _scopeId));
					else return [createVNode(_component_Phones, { class: "not-lg:hidden" })];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [createVNode(_component_UHeader, {
				back: "/",
				class: "border-b-0 relative"
			}, {
				left: withCtx(() => [createVNode(_component_Logo), createVNode(_component_Menu, { class: "not-sm:hidden" })]),
				body: withCtx(() => [createVNode(_component_Phones)]),
				right: withCtx(() => [createVNode(_component_Phones, { class: "not-lg:hidden" })]),
				_: 1
			})];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/header.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var header_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "SectionHeader" });
//#endregion
//#region app/layouts/default.vue
var default_exports = /* @__PURE__ */ __exportAll({ default: () => default_default });
var __nuxt_component_4_lazy = defineAsyncComponent(() => import('./footer-Dgb2o1aa.mjs').then((c) => c.default || c));
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_UApp = App_default;
	const _component_ModalCall = call_default;
	const _component_SectionHeader = header_default;
	const _component_NuxtPage = page_default;
	const _component_LazySectionFooter = __nuxt_component_4_lazy;
	_push(ssrRenderComponent(_component_UApp, _attrs, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(ssrRenderComponent(_component_ModalCall, null, null, _parent, _scopeId));
				_push(ssrRenderComponent(_component_SectionHeader, null, null, _parent, _scopeId));
				_push(`<main${_scopeId}>`);
				_push(ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId));
				_push(`</main>`);
				_push(ssrRenderComponent(_component_LazySectionFooter, null, null, _parent, _scopeId));
			} else return [
				createVNode(_component_ModalCall),
				createVNode(_component_SectionHeader),
				createVNode("main", null, [createVNode(_component_NuxtPage)]),
				createVNode(_component_LazySectionFooter)
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { default_default as default, logo_default as n, default_exports as t };

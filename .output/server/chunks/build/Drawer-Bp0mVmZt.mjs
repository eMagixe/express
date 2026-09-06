import { a as useAppConfig } from '../virtual/entry.mjs';
import { u as useComponentProps, a as useForwardProps, t as tv, F as FieldGroupReset, _ as _sfc_main$1 } from './Button-Cn6n7Ulk.mjs';
import { a as usePortal, c as pointerDownOutside, V as VisuallyHidden_default } from './overlay-Dn203DW_.mjs';
import { u as useLocale } from './useLocale-Da6kM5uy.mjs';
import { useSlots, toRef, computed, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, toHandlers, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { reactivePick } from '@vueuse/core';
import { DrawerRootNested, DrawerRoot, DrawerTrigger, DrawerPortal, DrawerOverlay, DrawerContent, DrawerHandle, DrawerTitle, DrawerDescription, DrawerClose } from 'vaul-vue';

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fdrawer.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fdrawer_default = {
	"slots": {
		"overlay": "fixed inset-0 bg-elevated/75",
		"content": "fixed bg-default ring ring-default flex focus:outline-none",
		"handle": ["shrink-0 !bg-accented", "transition-opacity ease-out"],
		"container": "w-full flex flex-col gap-4 p-4 overflow-y-auto",
		"header": "flex items-center gap-1.5 min-h-8",
		"wrapper": "min-w-0 flex-1",
		"title": "text-highlighted font-semibold",
		"description": "mt-1 text-muted text-sm",
		"actions": "flex items-center gap-1.5 shrink-0 ms-auto",
		"body": "flex-1",
		"footer": "flex flex-col gap-1.5",
		"close": ""
	},
	"variants": {
		"direction": {
			"top": {
				"content": "mb-24 flex-col-reverse",
				"handle": "mb-4"
			},
			"right": {
				"content": "flex-row rtl:flex-row-reverse",
				"handle": "!ml-4"
			},
			"bottom": {
				"content": "mt-24 flex-col",
				"handle": "mt-4"
			},
			"left": {
				"content": "flex-row-reverse rtl:flex-row",
				"handle": "!mr-4"
			}
		},
		"inset": { "true": { "content": "rounded-lg after:hidden overflow-hidden [--initial-transform:calc(100%+1.5rem)]" } },
		"snapPoints": { "true": "" }
	},
	"compoundVariants": [
		{
			"direction": ["top", "bottom"],
			"class": {
				"content": "h-auto max-h-[96%]",
				"handle": "!w-12 !h-1.5 mx-auto"
			}
		},
		{
			"direction": ["top", "bottom"],
			"snapPoints": true,
			"class": { "content": "h-full" }
		},
		{
			"direction": ["right", "left"],
			"class": {
				"content": "w-auto max-w-[calc(100%-2rem)]",
				"handle": "!h-12 !w-1.5 mt-auto mb-auto"
			}
		},
		{
			"direction": ["right", "left"],
			"snapPoints": true,
			"class": { "content": "w-full" }
		},
		{
			"direction": "top",
			"inset": true,
			"class": { "content": "inset-x-4 top-4" }
		},
		{
			"direction": "top",
			"inset": false,
			"class": { "content": "inset-x-0 top-0 rounded-b-lg" }
		},
		{
			"direction": "bottom",
			"inset": true,
			"class": { "content": "inset-x-4 bottom-4" }
		},
		{
			"direction": "bottom",
			"inset": false,
			"class": { "content": "inset-x-0 bottom-0 rounded-t-lg" }
		},
		{
			"direction": "left",
			"inset": true,
			"class": { "content": "inset-y-4 left-4" }
		},
		{
			"direction": "left",
			"inset": false,
			"class": { "content": "inset-y-0 left-0 rounded-r-lg" }
		},
		{
			"direction": "right",
			"inset": true,
			"class": { "content": "inset-y-4 right-4" }
		},
		{
			"direction": "right",
			"inset": false,
			"class": { "content": "inset-y-0 right-0 rounded-l-lg" }
		}
	]
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue
var _sfc_main = {
	__name: "UDrawer",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		inset: {
			type: Boolean,
			required: false
		},
		content: {
			type: Object,
			required: false
		},
		overlay: {
			type: Boolean,
			required: false,
			default: true
		},
		handle: {
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
		nested: {
			type: Boolean,
			required: false
		},
		close: {
			type: [Boolean, Object],
			required: false
		},
		closeIcon: {
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
		activeSnapPoint: {
			type: [
				Number,
				String,
				null
			],
			required: false
		},
		closeThreshold: {
			type: Number,
			required: false
		},
		shouldScaleBackground: {
			type: Boolean,
			required: false
		},
		setBackgroundColorOnScale: {
			type: Boolean,
			required: false
		},
		scrollLockTimeout: {
			type: Number,
			required: false
		},
		fixed: {
			type: Boolean,
			required: false
		},
		dismissible: {
			type: Boolean,
			required: false,
			default: true
		},
		modal: {
			type: Boolean,
			required: false,
			default: true
		},
		open: {
			type: Boolean,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		direction: {
			type: String,
			required: false,
			default: "bottom"
		},
		noBodyStyles: {
			type: Boolean,
			required: false
		},
		handleOnly: {
			type: Boolean,
			required: false
		},
		preventScrollRestoration: {
			type: Boolean,
			required: false
		},
		snapPoints: {
			type: Array,
			required: false
		}
	},
	emits: [
		"close:prevent",
		"drag",
		"release",
		"close",
		"update:open",
		"update:activeSnapPoint",
		"animationEnd"
	],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("drawer", _props);
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "activeSnapPoint", "closeThreshold", "shouldScaleBackground", "setBackgroundColorOnScale", "scrollLockTimeout", "fixed", "dismissible", "modal", "open", "defaultOpen", "nested", "direction", "noBodyStyles", "handleOnly", "preventScrollRestoration", "snapPoints"), emits);
		const portalProps = usePortal(toRef(() => props.portal));
		const contentProps = toRef(() => props.content);
		const contentEvents = computed(() => {
			if (!props.dismissible) return ["interactOutside", "escapeKeyDown"].reduce((acc, curr) => {
				acc[curr] = (e) => {
					e.preventDefault();
					emits("close:prevent");
				};
				return acc;
			}, {});
			return { pointerDownOutside };
		});
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fdrawer_default,
			...appConfig.ui?.drawer || {}
		})({
			direction: props.direction,
			inset: props.inset,
			snapPoints: props.snapPoints && props.snapPoints.length > 0
		}));
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(props).nested ? unref(DrawerRootNested) : unref(DrawerRoot)), mergeProps(unref(rootProps), _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (!!slots.default) _push(ssrRenderComponent(unref(DrawerTrigger), {
							"as-child": "",
							class: unref(props).class
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "default")];
							}),
							_: 3
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(ssrRenderComponent(unref(DrawerPortal), unref(portalProps), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(FieldGroupReset), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											if (unref(props).overlay) _push(ssrRenderComponent(unref(DrawerOverlay), {
												"data-slot": "overlay",
												class: ui.value.overlay({ class: unref(props).ui?.overlay })
											}, null, _parent, _scopeId));
											else _push(`<!---->`);
											_push(ssrRenderComponent(unref(DrawerContent), mergeProps({
												"data-slot": "content",
												class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
											}, contentProps.value, toHandlers(contentEvents.value)), {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) {
														if (unref(props).handle) _push(ssrRenderComponent(unref(DrawerHandle), {
															"data-slot": "handle",
															class: ui.value.handle({ class: unref(props).ui?.handle })
														}, null, _parent, _scopeId));
														else _push(`<!---->`);
														if (!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content) _push(ssrRenderComponent(unref(VisuallyHidden_default), null, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) {
																	if (!unref(props).title && !slots.title) _push(ssrRenderComponent(unref(DrawerTitle), null, null, _parent, _scopeId));
																	else if (!!slots.content) _push(ssrRenderComponent(unref(DrawerTitle), null, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
																				_push(`${ssrInterpolate(unref(props).title)}`);
																			}, _push, _parent, _scopeId);
																			else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
																		}),
																		_: 3
																	}, _parent, _scopeId));
																	else _push(`<!---->`);
																	if (!unref(props).description && !slots.description) _push(ssrRenderComponent(unref(DrawerDescription), null, null, _parent, _scopeId));
																	else if (!!slots.content) _push(ssrRenderComponent(unref(DrawerDescription), null, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
																				_push(`${ssrInterpolate(unref(props).description)}`);
																			}, _push, _parent, _scopeId);
																			else return [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])];
																		}),
																		_: 3
																	}, _parent, _scopeId));
																	else _push(`<!---->`);
																} else return [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DrawerTitle), { key: 1 }, {
																	default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
																	_: 3
																})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DrawerDescription), { key: 3 }, {
																	default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
																	_: 3
																})) : createCommentVNode("", true)];
															}),
															_: 3
														}, _parent, _scopeId));
														else _push(`<!---->`);
														ssrRenderSlot(_ctx.$slots, "content", {}, () => {
															_push(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: unref(props).ui?.container }))}"${_scopeId}>`);
															if (!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close || !!slots.actions) {
																_push(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}"${_scopeId}>`);
																ssrRenderSlot(_ctx.$slots, "header", {}, () => {
																	if (unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
																		_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
																		if (unref(props).title || !!slots.title) _push(ssrRenderComponent(unref(DrawerTitle), {
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
																		else _push(`<!---->`);
																		if (unref(props).description || !!slots.description) _push(ssrRenderComponent(unref(DrawerDescription), {
																			"data-slot": "description",
																			class: ui.value.description({ class: unref(props).ui?.description })
																		}, {
																			default: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
																					_push(`${ssrInterpolate(unref(props).description)}`);
																				}, _push, _parent, _scopeId);
																				else return [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])];
																			}),
																			_: 3
																		}, _parent, _scopeId));
																		else _push(`<!---->`);
																		_push(`</div>`);
																	} else _push(`<!---->`);
																	if (!!slots.actions || unref(props).close || !!slots.close) {
																		_push(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({ class: unref(props).ui?.actions }))}"${_scopeId}>`);
																		ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent, _scopeId);
																		if (unref(props).close || !!slots.close) _push(ssrRenderComponent(unref(DrawerClose), { "as-child": "" }, {
																			default: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
																					if (unref(props).close) _push(ssrRenderComponent(_sfc_main$1, mergeProps({
																						icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
																						color: "neutral",
																						variant: "ghost",
																						"aria-label": unref(t)("drawer.close")
																					}, typeof unref(props).close === "object" ? unref(props).close : {}, {
																						"data-slot": "close",
																						class: ui.value.close({ class: unref(props).ui?.close })
																					}), null, _parent, _scopeId));
																					else _push(`<!---->`);
																				}, _push, _parent, _scopeId);
																				else return [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
																					key: 0,
																					icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
																					color: "neutral",
																					variant: "ghost",
																					"aria-label": unref(t)("drawer.close")
																				}, typeof unref(props).close === "object" ? unref(props).close : {}, {
																					"data-slot": "close",
																					class: ui.value.close({ class: unref(props).ui?.close })
																				}), null, 16, [
																					"icon",
																					"aria-label",
																					"class"
																				])) : createCommentVNode("", true)])];
																			}),
																			_: 3
																		}, _parent, _scopeId));
																		else _push(`<!---->`);
																		_push(`</div>`);
																	} else _push(`<!---->`);
																}, _push, _parent, _scopeId);
																_push(`</div>`);
															} else _push(`<!---->`);
															if (!!slots.body) {
																_push(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}>`);
																ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent, _scopeId);
																_push(`</div>`);
															} else _push(`<!---->`);
															if (!!slots.footer) {
																_push(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: unref(props).ui?.footer }))}"${_scopeId}>`);
																ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent, _scopeId);
																_push(`</div>`);
															} else _push(`<!---->`);
															_push(`</div>`);
														}, _push, _parent, _scopeId);
													} else return [
														unref(props).handle ? (openBlock(), createBlock(unref(DrawerHandle), {
															key: 0,
															"data-slot": "handle",
															class: ui.value.handle({ class: unref(props).ui?.handle })
														}, null, 8, ["class"])) : createCommentVNode("", true),
														!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 1 }, {
															default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DrawerTitle), { key: 1 }, {
																default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
																_: 3
															})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DrawerDescription), { key: 3 }, {
																default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
																_: 3
															})) : createCommentVNode("", true)]),
															_: 3
														})) : createCommentVNode("", true),
														renderSlot(_ctx.$slots, "content", {}, () => [createVNode("div", {
															"data-slot": "container",
															class: ui.value.container({ class: unref(props).ui?.container })
														}, [
															!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close || !!slots.actions ? (openBlock(), createBlock("div", {
																key: 0,
																"data-slot": "header",
																class: ui.value.header({ class: unref(props).ui?.header })
															}, [renderSlot(_ctx.$slots, "header", {}, () => [unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
																key: 0,
																"data-slot": "wrapper",
																class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
															}, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
																key: 0,
																"data-slot": "title",
																class: ui.value.title({ class: unref(props).ui?.title })
															}, {
																default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
																_: 3
															}, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
																key: 1,
																"data-slot": "description",
																class: ui.value.description({ class: unref(props).ui?.description })
															}, {
																default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
																_: 3
															}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), !!slots.actions || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
																key: 1,
																"data-slot": "actions",
																class: ui.value.actions({ class: unref(props).ui?.actions })
															}, [renderSlot(_ctx.$slots, "actions"), unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DrawerClose), {
																key: 0,
																"as-child": ""
															}, {
																default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
																	key: 0,
																	icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
																	color: "neutral",
																	variant: "ghost",
																	"aria-label": unref(t)("drawer.close")
																}, typeof unref(props).close === "object" ? unref(props).close : {}, {
																	"data-slot": "close",
																	class: ui.value.close({ class: unref(props).ui?.close })
																}), null, 16, [
																	"icon",
																	"aria-label",
																	"class"
																])) : createCommentVNode("", true)])]),
																_: 3
															})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
															!!slots.body ? (openBlock(), createBlock("div", {
																key: 1,
																"data-slot": "body",
																class: ui.value.body({ class: unref(props).ui?.body })
															}, [renderSlot(_ctx.$slots, "body")], 2)) : createCommentVNode("", true),
															!!slots.footer ? (openBlock(), createBlock("div", {
																key: 2,
																"data-slot": "footer",
																class: ui.value.footer({ class: unref(props).ui?.footer })
															}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)
														], 2)])
													];
												}),
												_: 3
											}, _parent, _scopeId));
										} else return [unref(props).overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
											key: 0,
											"data-slot": "overlay",
											class: ui.value.overlay({ class: unref(props).ui?.overlay })
										}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DrawerContent), mergeProps({
											"data-slot": "content",
											class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
										}, contentProps.value, toHandlers(contentEvents.value)), {
											default: withCtx(() => [
												unref(props).handle ? (openBlock(), createBlock(unref(DrawerHandle), {
													key: 0,
													"data-slot": "handle",
													class: ui.value.handle({ class: unref(props).ui?.handle })
												}, null, 8, ["class"])) : createCommentVNode("", true),
												!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 1 }, {
													default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DrawerTitle), { key: 1 }, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
														_: 3
													})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DrawerDescription), { key: 3 }, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
														_: 3
													})) : createCommentVNode("", true)]),
													_: 3
												})) : createCommentVNode("", true),
												renderSlot(_ctx.$slots, "content", {}, () => [createVNode("div", {
													"data-slot": "container",
													class: ui.value.container({ class: unref(props).ui?.container })
												}, [
													!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close || !!slots.actions ? (openBlock(), createBlock("div", {
														key: 0,
														"data-slot": "header",
														class: ui.value.header({ class: unref(props).ui?.header })
													}, [renderSlot(_ctx.$slots, "header", {}, () => [unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
														key: 0,
														"data-slot": "wrapper",
														class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
													}, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
														key: 0,
														"data-slot": "title",
														class: ui.value.title({ class: unref(props).ui?.title })
													}, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
														_: 3
													}, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
														key: 1,
														"data-slot": "description",
														class: ui.value.description({ class: unref(props).ui?.description })
													}, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
														_: 3
													}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), !!slots.actions || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
														key: 1,
														"data-slot": "actions",
														class: ui.value.actions({ class: unref(props).ui?.actions })
													}, [renderSlot(_ctx.$slots, "actions"), unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DrawerClose), {
														key: 0,
														"as-child": ""
													}, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
															key: 0,
															icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
															color: "neutral",
															variant: "ghost",
															"aria-label": unref(t)("drawer.close")
														}, typeof unref(props).close === "object" ? unref(props).close : {}, {
															"data-slot": "close",
															class: ui.value.close({ class: unref(props).ui?.close })
														}), null, 16, [
															"icon",
															"aria-label",
															"class"
														])) : createCommentVNode("", true)])]),
														_: 3
													})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
													!!slots.body ? (openBlock(), createBlock("div", {
														key: 1,
														"data-slot": "body",
														class: ui.value.body({ class: unref(props).ui?.body })
													}, [renderSlot(_ctx.$slots, "body")], 2)) : createCommentVNode("", true),
													!!slots.footer ? (openBlock(), createBlock("div", {
														key: 2,
														"data-slot": "footer",
														class: ui.value.footer({ class: unref(props).ui?.footer })
													}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)
												], 2)])
											]),
											_: 3
										}, 16, ["class"])];
									}),
									_: 3
								}, _parent, _scopeId));
								else return [createVNode(unref(FieldGroupReset), null, {
									default: withCtx(() => [unref(props).overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
										key: 0,
										"data-slot": "overlay",
										class: ui.value.overlay({ class: unref(props).ui?.overlay })
									}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DrawerContent), mergeProps({
										"data-slot": "content",
										class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
									}, contentProps.value, toHandlers(contentEvents.value)), {
										default: withCtx(() => [
											unref(props).handle ? (openBlock(), createBlock(unref(DrawerHandle), {
												key: 0,
												"data-slot": "handle",
												class: ui.value.handle({ class: unref(props).ui?.handle })
											}, null, 8, ["class"])) : createCommentVNode("", true),
											!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 1 }, {
												default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DrawerTitle), { key: 1 }, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
													_: 3
												})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DrawerDescription), { key: 3 }, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
													_: 3
												})) : createCommentVNode("", true)]),
												_: 3
											})) : createCommentVNode("", true),
											renderSlot(_ctx.$slots, "content", {}, () => [createVNode("div", {
												"data-slot": "container",
												class: ui.value.container({ class: unref(props).ui?.container })
											}, [
												!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close || !!slots.actions ? (openBlock(), createBlock("div", {
													key: 0,
													"data-slot": "header",
													class: ui.value.header({ class: unref(props).ui?.header })
												}, [renderSlot(_ctx.$slots, "header", {}, () => [unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
													key: 0,
													"data-slot": "wrapper",
													class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
												}, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
													key: 0,
													"data-slot": "title",
													class: ui.value.title({ class: unref(props).ui?.title })
												}, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
													_: 3
												}, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
													key: 1,
													"data-slot": "description",
													class: ui.value.description({ class: unref(props).ui?.description })
												}, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
													_: 3
												}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), !!slots.actions || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
													key: 1,
													"data-slot": "actions",
													class: ui.value.actions({ class: unref(props).ui?.actions })
												}, [renderSlot(_ctx.$slots, "actions"), unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DrawerClose), {
													key: 0,
													"as-child": ""
												}, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
														key: 0,
														icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
														color: "neutral",
														variant: "ghost",
														"aria-label": unref(t)("drawer.close")
													}, typeof unref(props).close === "object" ? unref(props).close : {}, {
														"data-slot": "close",
														class: ui.value.close({ class: unref(props).ui?.close })
													}), null, 16, [
														"icon",
														"aria-label",
														"class"
													])) : createCommentVNode("", true)])]),
													_: 3
												})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
												!!slots.body ? (openBlock(), createBlock("div", {
													key: 1,
													"data-slot": "body",
													class: ui.value.body({ class: unref(props).ui?.body })
												}, [renderSlot(_ctx.$slots, "body")], 2)) : createCommentVNode("", true),
												!!slots.footer ? (openBlock(), createBlock("div", {
													key: 2,
													"data-slot": "footer",
													class: ui.value.footer({ class: unref(props).ui?.footer })
												}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)
											], 2)])
										]),
										_: 3
									}, 16, ["class"])]),
									_: 3
								})];
							}),
							_: 3
						}, _parent, _scopeId));
					} else return [!!slots.default ? (openBlock(), createBlock(unref(DrawerTrigger), {
						key: 0,
						"as-child": "",
						class: unref(props).class
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					}, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DrawerPortal), unref(portalProps), {
						default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
							default: withCtx(() => [unref(props).overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
								key: 0,
								"data-slot": "overlay",
								class: ui.value.overlay({ class: unref(props).ui?.overlay })
							}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DrawerContent), mergeProps({
								"data-slot": "content",
								class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
							}, contentProps.value, toHandlers(contentEvents.value)), {
								default: withCtx(() => [
									unref(props).handle ? (openBlock(), createBlock(unref(DrawerHandle), {
										key: 0,
										"data-slot": "handle",
										class: ui.value.handle({ class: unref(props).ui?.handle })
									}, null, 8, ["class"])) : createCommentVNode("", true),
									!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 1 }, {
										default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DrawerTitle), { key: 1 }, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
											_: 3
										})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DrawerDescription), { key: 3 }, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
											_: 3
										})) : createCommentVNode("", true)]),
										_: 3
									})) : createCommentVNode("", true),
									renderSlot(_ctx.$slots, "content", {}, () => [createVNode("div", {
										"data-slot": "container",
										class: ui.value.container({ class: unref(props).ui?.container })
									}, [
										!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close || !!slots.actions ? (openBlock(), createBlock("div", {
											key: 0,
											"data-slot": "header",
											class: ui.value.header({ class: unref(props).ui?.header })
										}, [renderSlot(_ctx.$slots, "header", {}, () => [unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
											key: 0,
											"data-slot": "wrapper",
											class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
										}, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
											key: 0,
											"data-slot": "title",
											class: ui.value.title({ class: unref(props).ui?.title })
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
											_: 3
										}, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
											key: 1,
											"data-slot": "description",
											class: ui.value.description({ class: unref(props).ui?.description })
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
											_: 3
										}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), !!slots.actions || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
											key: 1,
											"data-slot": "actions",
											class: ui.value.actions({ class: unref(props).ui?.actions })
										}, [renderSlot(_ctx.$slots, "actions"), unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DrawerClose), {
											key: 0,
											"as-child": ""
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
												key: 0,
												icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
												color: "neutral",
												variant: "ghost",
												"aria-label": unref(t)("drawer.close")
											}, typeof unref(props).close === "object" ? unref(props).close : {}, {
												"data-slot": "close",
												class: ui.value.close({ class: unref(props).ui?.close })
											}), null, 16, [
												"icon",
												"aria-label",
												"class"
											])) : createCommentVNode("", true)])]),
											_: 3
										})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
										!!slots.body ? (openBlock(), createBlock("div", {
											key: 1,
											"data-slot": "body",
											class: ui.value.body({ class: unref(props).ui?.body })
										}, [renderSlot(_ctx.$slots, "body")], 2)) : createCommentVNode("", true),
										!!slots.footer ? (openBlock(), createBlock("div", {
											key: 2,
											"data-slot": "footer",
											class: ui.value.footer({ class: unref(props).ui?.footer })
										}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)
									], 2)])
								]),
								_: 3
							}, 16, ["class"])]),
							_: 3
						})]),
						_: 3
					}, 16)];
				}),
				_: 3
			}), _parent);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };

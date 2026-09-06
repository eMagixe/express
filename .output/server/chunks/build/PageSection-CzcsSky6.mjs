import { a as useAppConfig } from '../virtual/entry.mjs';
import { u as useComponentProps, t as tv, P as Primitive, b as _sfc_main$5, _ as _sfc_main$3, g as getSlotChildrenText, c as _sfc_main$1$1 } from './Button-D5UK4P4A.mjs';
import { _ as _sfc_main$2 } from './Container-CLUPcRvH.mjs';
import { u as usePrefix } from './usePrefix-wIR1GMpN.mjs';
import { useSlots, computed, unref, mergeProps, withCtx, openBlock, createBlock, renderSlot, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fpage-feature.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_feature_default = {
	"slots": {
		"root": "relative rounded-sm",
		"wrapper": "",
		"leading": "inline-flex items-center justify-center",
		"leadingIcon": "size-5 shrink-0 text-primary",
		"title": "text-base text-pretty font-semibold text-highlighted",
		"description": "text-[15px] text-pretty text-muted"
	},
	"variants": {
		"orientation": {
			"horizontal": {
				"root": "flex items-start gap-2.5",
				"leading": "p-0.5"
			},
			"vertical": { "leading": "mb-2.5" }
		},
		"to": { "true": { "root": ["outline-primary/25 has-focus-visible:outline-3", "transition"] } },
		"title": { "true": { "description": "mt-1" } }
	}
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/PageFeature.vue
var _sfc_main$1 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UPageFeature",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		icon: {
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
		orientation: {
			type: null,
			required: false,
			default: "horizontal"
		},
		to: {
			type: null,
			required: false
		},
		target: {
			type: [
				String,
				Object,
				null
			],
			required: false
		},
		onClick: {
			type: Function,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const _props = __props;
		const slots = useSlots();
		const props = useComponentProps("pageFeature", _props);
		const appConfig = useAppConfig();
		const prefix = usePrefix();
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_feature_default,
			...appConfig.ui?.pageFeature || {}
		})({
			orientation: props.orientation,
			title: !!props.title || !!slots.title,
			to: !!props.to || !!props.onClick
		}));
		const ariaLabel = computed(() => {
			return (slots.title && getSlotChildrenText(slots.title()) || props.title || "Feature link").trim();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({ as: unref(props).as }, !unref(props).to ? _ctx.$attrs : {}, {
				"data-orientation": unref(props).orientation,
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] }),
				onClick: unref(props).onClick
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(props).icon || !!slots.leading) {
							_push(`<div data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
								if (unref(props).icon) _push(ssrRenderComponent(_sfc_main$5, {
									name: unref(props).icon,
									"data-slot": "leadingIcon",
									class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
								}, null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
						if (unref(props).to) _push(ssrRenderComponent(_sfc_main$1$1, mergeProps({ "aria-label": ariaLabel.value }, {
							"to": unref(props).to,
							"target": unref(props).target,
							..._ctx.$attrs,
							"data-slot": void 0
						}, {
							class: unref(prefix)("focus:outline-none peer"),
							raw: ""
						}), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<span class="${ssrRenderClass(unref(prefix)("absolute inset-0"))}" aria-hidden="true"${_scopeId}></span>`);
								else return [createVNode("span", {
									class: unref(prefix)("absolute inset-0"),
									"aria-hidden": "true"
								}, null, 2)];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						ssrRenderSlot(_ctx.$slots, "default", {}, () => {
							if (unref(props).title || !!slots.title) {
								_push(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: unref(props).ui?.title }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "title", {}, () => {
									_push(`${ssrInterpolate(unref(props).title)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							if (unref(props).description || !!slots.description) {
								_push(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "description", {}, () => {
									_push(`${ssrInterpolate(unref(props).description)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(`</div>`);
					} else return [unref(props).icon || !!slots.leading ? (openBlock(), createBlock("div", {
						key: 0,
						"data-slot": "leading",
						class: ui.value.leading({ class: unref(props).ui?.leading })
					}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
						key: 0,
						name: unref(props).icon,
						"data-slot": "leadingIcon",
						class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
					}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true), createVNode("div", {
						"data-slot": "wrapper",
						class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
					}, [unref(props).to ? (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
						key: 0,
						"aria-label": ariaLabel.value
					}, {
						"to": unref(props).to,
						"target": unref(props).target,
						..._ctx.$attrs,
						"data-slot": void 0
					}, {
						class: unref(prefix)("focus:outline-none peer"),
						raw: ""
					}), {
						default: withCtx(() => [createVNode("span", {
							class: unref(prefix)("absolute inset-0"),
							"aria-hidden": "true"
						}, null, 2)]),
						_: 1
					}, 16, ["aria-label", "class"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default", {}, () => [unref(props).title || !!slots.title ? (openBlock(), createBlock("div", {
						key: 0,
						"data-slot": "title",
						class: ui.value.title({ class: unref(props).ui?.title })
					}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])], 2)) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
						key: 1,
						"data-slot": "description",
						class: ui.value.description({ class: unref(props).ui?.description })
					}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)])], 2)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageFeature.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fpage-section.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_section_default = {
	"slots": {
		"root": "relative isolate",
		"container": "flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",
		"wrapper": "",
		"header": "",
		"leading": "flex items-center mb-6",
		"leadingIcon": "size-10 shrink-0 text-primary",
		"headline": "mb-3",
		"title": "text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted",
		"description": "text-base sm:text-lg text-muted",
		"body": "mt-8",
		"features": "grid",
		"footer": "mt-8",
		"links": "flex flex-wrap gap-x-6 gap-y-3"
	},
	"variants": {
		"orientation": {
			"horizontal": {
				"container": "lg:grid-cols-2 lg:items-center",
				"description": "text-pretty",
				"features": "gap-4"
			},
			"vertical": {
				"container": "",
				"headline": "justify-center",
				"leading": "justify-center",
				"title": "text-center",
				"description": "text-center text-balance",
				"links": "justify-center",
				"features": "sm:grid-cols-2 lg:grid-cols-3 gap-8"
			}
		},
		"reverse": { "true": { "wrapper": "order-last" } },
		"headline": { "true": { "headline": "font-semibold text-primary flex items-center gap-1.5" } },
		"title": { "true": { "description": "mt-6" } },
		"description": { "true": "" },
		"body": { "true": "" }
	},
	"compoundVariants": [
		{
			"orientation": "vertical",
			"title": true,
			"class": { "body": "mt-16" }
		},
		{
			"orientation": "vertical",
			"description": true,
			"class": { "body": "mt-16" }
		},
		{
			"orientation": "vertical",
			"body": true,
			"class": { "footer": "mt-16" }
		}
	]
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/PageSection.vue
var _sfc_main = {
	__name: "UPageSection",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false,
			default: "section"
		},
		headline: {
			type: String,
			required: false
		},
		icon: {
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
		links: {
			type: Array,
			required: false
		},
		features: {
			type: Array,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "vertical"
		},
		reverse: {
			type: Boolean,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const _props = __props;
		const slots = useSlots();
		const props = useComponentProps("pageSection", _props);
		const appConfig = useAppConfig();
		const prefix = usePrefix();
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpage_section_default,
			...appConfig.ui?.pageSection || {}
		})({
			orientation: props.orientation,
			reverse: props.reverse,
			title: !!props.title || !!slots.title,
			description: !!props.description || !!slots.description,
			body: !!slots.body || !!props.features?.length || !!slots.features
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"data-orientation": unref(props).orientation,
				"data-slot": "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent, _scopeId);
						_push(ssrRenderComponent(_sfc_main$2, {
							"data-slot": "container",
							class: ui.value.container({ class: unref(props).ui?.container })
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || unref(props).features?.length || !!slots.features || !!slots.footer || unref(props).links?.length || !!slots.links) {
										_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
										if (!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
											_push(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}"${_scopeId}>`);
											ssrRenderSlot(_ctx.$slots, "header", {}, () => {
												if (unref(props).icon || !!slots.leading) {
													_push(`<div data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
														if (unref(props).icon) _push(ssrRenderComponent(_sfc_main$5, {
															name: unref(props).icon,
															"data-slot": "leadingIcon",
															class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
														}, null, _parent, _scopeId));
														else _push(`<!---->`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if (unref(props).headline || !!slots.headline) {
													_push(`<div data-slot="headline" class="${ssrRenderClass(ui.value.headline({
														class: unref(props).ui?.headline,
														headline: !slots.headline
													}))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
														_push(`${ssrInterpolate(unref(props).headline)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if (unref(props).title || !!slots.title) {
													_push(`<h2 data-slot="title" class="${ssrRenderClass(ui.value.title({ class: unref(props).ui?.title }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "title", {}, () => {
														_push(`${ssrInterpolate(unref(props).title)}`);
													}, _push, _parent, _scopeId);
													_push(`</h2>`);
												} else _push(`<!---->`);
												if (unref(props).description || !!slots.description) {
													_push(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "description", {}, () => {
														_push(`${ssrInterpolate(unref(props).description)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										if (!!slots.body || unref(props).features?.length || !!slots.features) {
											_push(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}>`);
											ssrRenderSlot(_ctx.$slots, "body", {}, () => {
												if (unref(props).features?.length || !!slots.features) {
													_push(`<ul data-slot="features" class="${ssrRenderClass(ui.value.features({ class: unref(props).ui?.features }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "features", {}, () => {
														_push(`<!--[-->`);
														ssrRenderList(unref(props).features, (feature, index) => {
															_push(ssrRenderComponent(_sfc_main$1, mergeProps({
																key: index,
																as: "li"
															}, { ref_for: true }, feature), null, _parent, _scopeId));
														});
														_push(`<!--]-->`);
													}, _push, _parent, _scopeId);
													_push(`</ul>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										if (!!slots.footer || unref(props).links?.length || !!slots.links) {
											_push(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: unref(props).ui?.footer }))}"${_scopeId}>`);
											ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
												if (unref(props).links?.length || !!slots.links) {
													_push(`<div data-slot="links" class="${ssrRenderClass(ui.value.links({ class: unref(props).ui?.links }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "links", {}, () => {
														_push(`<!--[-->`);
														ssrRenderList(unref(props).links, (link, index) => {
															_push(ssrRenderComponent(_sfc_main$3, mergeProps({
																key: index,
																size: "lg"
															}, { ref_for: true }, link), null, _parent, _scopeId));
														});
														_push(`<!--]-->`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										_push(`</div>`);
									} else _push(`<!---->`);
									if (!!slots.default) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
									else if (unref(props).orientation === "horizontal") _push(`<div class="${ssrRenderClass(unref(prefix)("hidden lg:block"))}"${_scopeId}></div>`);
									else _push(`<!---->`);
								} else return [!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || unref(props).features?.length || !!slots.features || !!slots.footer || unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
									key: 0,
									"data-slot": "wrapper",
									class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
								}, [
									!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
										key: 0,
										"data-slot": "header",
										class: ui.value.header({ class: unref(props).ui?.header })
									}, [renderSlot(_ctx.$slots, "header", {}, () => [
										unref(props).icon || !!slots.leading ? (openBlock(), createBlock("div", {
											key: 0,
											"data-slot": "leading",
											class: ui.value.leading({ class: unref(props).ui?.leading })
										}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
											key: 0,
											name: unref(props).icon,
											"data-slot": "leadingIcon",
											class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
										}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
										unref(props).headline || !!slots.headline ? (openBlock(), createBlock("div", {
											key: 1,
											"data-slot": "headline",
											class: ui.value.headline({
												class: unref(props).ui?.headline,
												headline: !slots.headline
											})
										}, [renderSlot(_ctx.$slots, "headline", {}, () => [createTextVNode(toDisplayString(unref(props).headline), 1)])], 2)) : createCommentVNode("", true),
										unref(props).title || !!slots.title ? (openBlock(), createBlock("h2", {
											key: 2,
											"data-slot": "title",
											class: ui.value.title({ class: unref(props).ui?.title })
										}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])], 2)) : createCommentVNode("", true),
										unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
											key: 3,
											"data-slot": "description",
											class: ui.value.description({ class: unref(props).ui?.description })
										}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)
									])], 2)) : createCommentVNode("", true),
									!!slots.body || unref(props).features?.length || !!slots.features ? (openBlock(), createBlock("div", {
										key: 1,
										"data-slot": "body",
										class: ui.value.body({ class: unref(props).ui?.body })
									}, [renderSlot(_ctx.$slots, "body", {}, () => [unref(props).features?.length || !!slots.features ? (openBlock(), createBlock("ul", {
										key: 0,
										"data-slot": "features",
										class: ui.value.features({ class: unref(props).ui?.features })
									}, [renderSlot(_ctx.$slots, "features", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).features, (feature, index) => {
										return openBlock(), createBlock(_sfc_main$1, mergeProps({
											key: index,
											as: "li"
										}, { ref_for: true }, feature), null, 16);
									}), 128))])], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
									!!slots.footer || unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
										key: 2,
										"data-slot": "footer",
										class: ui.value.footer({ class: unref(props).ui?.footer })
									}, [renderSlot(_ctx.$slots, "footer", {}, () => [unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
										key: 0,
										"data-slot": "links",
										class: ui.value.links({ class: unref(props).ui?.links })
									}, [renderSlot(_ctx.$slots, "links", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).links, (link, index) => {
										return openBlock(), createBlock(_sfc_main$3, mergeProps({
											key: index,
											size: "lg"
										}, { ref_for: true }, link), null, 16);
									}), 128))])], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
								], 2)) : createCommentVNode("", true), !!slots.default ? renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1) : unref(props).orientation === "horizontal" ? (openBlock(), createBlock("div", {
									key: 2,
									class: unref(prefix)("hidden lg:block")
								}, null, 2)) : createCommentVNode("", true)];
							}),
							_: 3
						}, _parent, _scopeId));
						ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent, _scopeId);
					} else return [
						renderSlot(_ctx.$slots, "top"),
						createVNode(_sfc_main$2, {
							"data-slot": "container",
							class: ui.value.container({ class: unref(props).ui?.container })
						}, {
							default: withCtx(() => [!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || unref(props).features?.length || !!slots.features || !!slots.footer || unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
								key: 0,
								"data-slot": "wrapper",
								class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
							}, [
								!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
									key: 0,
									"data-slot": "header",
									class: ui.value.header({ class: unref(props).ui?.header })
								}, [renderSlot(_ctx.$slots, "header", {}, () => [
									unref(props).icon || !!slots.leading ? (openBlock(), createBlock("div", {
										key: 0,
										"data-slot": "leading",
										class: ui.value.leading({ class: unref(props).ui?.leading })
									}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
										key: 0,
										name: unref(props).icon,
										"data-slot": "leadingIcon",
										class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
									}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
									unref(props).headline || !!slots.headline ? (openBlock(), createBlock("div", {
										key: 1,
										"data-slot": "headline",
										class: ui.value.headline({
											class: unref(props).ui?.headline,
											headline: !slots.headline
										})
									}, [renderSlot(_ctx.$slots, "headline", {}, () => [createTextVNode(toDisplayString(unref(props).headline), 1)])], 2)) : createCommentVNode("", true),
									unref(props).title || !!slots.title ? (openBlock(), createBlock("h2", {
										key: 2,
										"data-slot": "title",
										class: ui.value.title({ class: unref(props).ui?.title })
									}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])], 2)) : createCommentVNode("", true),
									unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
										key: 3,
										"data-slot": "description",
										class: ui.value.description({ class: unref(props).ui?.description })
									}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)
								])], 2)) : createCommentVNode("", true),
								!!slots.body || unref(props).features?.length || !!slots.features ? (openBlock(), createBlock("div", {
									key: 1,
									"data-slot": "body",
									class: ui.value.body({ class: unref(props).ui?.body })
								}, [renderSlot(_ctx.$slots, "body", {}, () => [unref(props).features?.length || !!slots.features ? (openBlock(), createBlock("ul", {
									key: 0,
									"data-slot": "features",
									class: ui.value.features({ class: unref(props).ui?.features })
								}, [renderSlot(_ctx.$slots, "features", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).features, (feature, index) => {
									return openBlock(), createBlock(_sfc_main$1, mergeProps({
										key: index,
										as: "li"
									}, { ref_for: true }, feature), null, 16);
								}), 128))])], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
								!!slots.footer || unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
									key: 2,
									"data-slot": "footer",
									class: ui.value.footer({ class: unref(props).ui?.footer })
								}, [renderSlot(_ctx.$slots, "footer", {}, () => [unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
									key: 0,
									"data-slot": "links",
									class: ui.value.links({ class: unref(props).ui?.links })
								}, [renderSlot(_ctx.$slots, "links", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).links, (link, index) => {
									return openBlock(), createBlock(_sfc_main$3, mergeProps({
										key: index,
										size: "lg"
									}, { ref_for: true }, link), null, 16);
								}), 128))])], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
							], 2)) : createCommentVNode("", true), !!slots.default ? renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1) : unref(props).orientation === "horizontal" ? (openBlock(), createBlock("div", {
								key: 2,
								class: unref(prefix)("hidden lg:block")
							}, null, 2)) : createCommentVNode("", true)]),
							_: 3
						}, 8, ["class"]),
						renderSlot(_ctx.$slots, "bottom")
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageSection.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };

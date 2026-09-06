import { a as useAppConfig } from '../virtual/entry.mjs';
import { u as useComponentProps, t as tv, P as Primitive, b as _sfc_main$5, _ as _sfc_main$2 } from './Button-D5UK4P4A.mjs';
import { _ as _sfc_main$1 } from './Badge-Cz_GlsYG.mjs';
import { useSlots, computed, unref, withCtx, openBlock, createBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createVNode, mergeProps, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { createReusableTemplate } from '@vueuse/core';

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fpricing-plan.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpricing_plan_default = {
	"slots": {
		"root": "relative grid rounded-lg p-6 lg:p-8 xl:p-10 gap-6",
		"header": "",
		"body": "flex flex-col min-w-0",
		"footer": "flex flex-col gap-6 items-center",
		"titleWrapper": "flex items-center gap-3",
		"title": "text-highlighted truncate text-2xl sm:text-3xl text-pretty font-semibold",
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
				"body": "lg:col-span-2 pb-6 lg:pb-0 lg:pe-6 justify-center",
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
			"outline": { "root": "bg-default ring ring-default" },
			"soft": { "root": "bg-elevated/50" },
			"subtle": { "root": "bg-elevated/50 ring ring-default" }
		},
		"highlight": { "true": { "root": "ring-2 ring-inset ring-primary" } },
		"scale": { "true": { "root": "lg:scale-[1.1] lg:z-[1]" } }
	},
	"compoundVariants": [{
		"orientation": "horizontal",
		"variant": "soft",
		"class": { "root": "divide-accented" }
	}, {
		"orientation": "horizontal",
		"variant": "subtle",
		"class": { "root": "divide-accented" }
	}],
	"defaultVariants": { "variant": "outline" }
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/PricingPlan.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UPricingPlan",
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
		badge: {
			type: [String, Object],
			required: false
		},
		billingCycle: {
			type: String,
			required: false
		},
		billingPeriod: {
			type: String,
			required: false
		},
		price: {
			type: String,
			required: false
		},
		discount: {
			type: String,
			required: false
		},
		features: {
			type: Array,
			required: false
		},
		button: {
			type: Object,
			required: false
		},
		tagline: {
			type: String,
			required: false
		},
		terms: {
			type: String,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "vertical"
		},
		variant: {
			type: null,
			required: false
		},
		highlight: {
			type: Boolean,
			required: false
		},
		scale: {
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
		const props = useComponentProps("pricingPlan", _props);
		const appConfig = useAppConfig();
		const [DefinePriceTemplate, ReusePriceTemplate] = createReusableTemplate();
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpricing_plan_default,
			...appConfig.ui?.pricingPlan || {}
		})({
			orientation: props.orientation,
			variant: props.variant,
			highlight: props.highlight,
			scale: props.scale
		}));
		const features = computed(() => props.features?.map((feature) => typeof feature === "string" ? { title: feature } : feature));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(DefinePriceTemplate), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(props).discount || unref(props).price || !!slots.discount || !!slots.price || unref(props).billingCycle || unref(props).billingPeriod || !!slots.billing) {
							_push(`<div data-slot="priceWrapper" class="${ssrRenderClass(ui.value.priceWrapper({ class: unref(props).ui?.priceWrapper }))}"${_scopeId}>`);
							if (unref(props).discount && unref(props).price || !!slots.discount) {
								_push(`<div data-slot="discount" class="${ssrRenderClass(ui.value.discount({ class: unref(props).ui?.discount }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "discount", {}, () => {
									_push(`${ssrInterpolate(unref(props).price)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							if (unref(props).discount || unref(props).price || !!slots.price) {
								_push(`<div data-slot="price" class="${ssrRenderClass(ui.value.price({ class: unref(props).ui?.price }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "price", {}, () => {
									_push(`${ssrInterpolate(unref(props).discount || unref(props).price)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							if (unref(props).billingCycle || unref(props).billingPeriod || !!slots.billing) {
								_push(`<div data-slot="billing" class="${ssrRenderClass(ui.value.billing({ class: unref(props).ui?.billing }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "billing", { ui: ui.value }, () => {
									_push(`<span data-slot="billingPeriod" class="${ssrRenderClass(ui.value.billingPeriod({ class: unref(props).ui?.billingPeriod }))}"${_scopeId}>${ssrInterpolate(unref(props).billingPeriod || "\xA0")}</span>`);
									if (unref(props).billingCycle) _push(`<span data-slot="billingCycle" class="${ssrRenderClass(ui.value.billingCycle({ class: unref(props).ui?.billingCycle }))}"${_scopeId}>${ssrInterpolate(unref(props).billingCycle)}</span>`);
									else _push(`<!---->`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [unref(props).discount || unref(props).price || !!slots.discount || !!slots.price || unref(props).billingCycle || unref(props).billingPeriod || !!slots.billing ? (openBlock(), createBlock("div", {
						key: 0,
						"data-slot": "priceWrapper",
						class: ui.value.priceWrapper({ class: unref(props).ui?.priceWrapper })
					}, [
						unref(props).discount && unref(props).price || !!slots.discount ? (openBlock(), createBlock("div", {
							key: 0,
							"data-slot": "discount",
							class: ui.value.discount({ class: unref(props).ui?.discount })
						}, [renderSlot(_ctx.$slots, "discount", {}, () => [createTextVNode(toDisplayString(unref(props).price), 1)])], 2)) : createCommentVNode("", true),
						unref(props).discount || unref(props).price || !!slots.price ? (openBlock(), createBlock("div", {
							key: 1,
							"data-slot": "price",
							class: ui.value.price({ class: unref(props).ui?.price })
						}, [renderSlot(_ctx.$slots, "price", {}, () => [createTextVNode(toDisplayString(unref(props).discount || unref(props).price), 1)])], 2)) : createCommentVNode("", true),
						unref(props).billingCycle || unref(props).billingPeriod || !!slots.billing ? (openBlock(), createBlock("div", {
							key: 2,
							"data-slot": "billing",
							class: ui.value.billing({ class: unref(props).ui?.billing })
						}, [renderSlot(_ctx.$slots, "billing", { ui: ui.value }, () => [createVNode("span", {
							"data-slot": "billingPeriod",
							class: ui.value.billingPeriod({ class: unref(props).ui?.billingPeriod })
						}, toDisplayString(unref(props).billingPeriod || "\xA0"), 3), unref(props).billingCycle ? (openBlock(), createBlock("span", {
							key: 0,
							"data-slot": "billingCycle",
							class: ui.value.billingCycle({ class: unref(props).ui?.billingCycle })
						}, toDisplayString(unref(props).billingCycle), 3)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
					], 2)) : createCommentVNode("", true)];
				}),
				_: 3
			}, _parent));
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"data-slot": "root"
			}, _ctx.$attrs, {
				"data-orientation": unref(props).orientation,
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (!!slots.header && unref(props).orientation === "vertical") {
							_push(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, "body", {}, () => {
							_push(`<div data-slot="titleWrapper" class="${ssrRenderClass(ui.value.titleWrapper({ class: unref(props).ui?.titleWrapper }))}"${_scopeId}>`);
							if (unref(props).title || !!slots.title) {
								_push(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: unref(props).ui?.title }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "title", {}, () => {
									_push(`${ssrInterpolate(unref(props).title)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							ssrRenderSlot(_ctx.$slots, "badge", { ui: ui.value }, () => {
								if (unref(props).badge) _push(ssrRenderComponent(_sfc_main$1, mergeProps({
									color: "primary",
									variant: "subtle"
								}, typeof unref(props).badge === "string" ? { label: unref(props).badge } : unref(props).badge, {
									"data-slot": "badge",
									class: ui.value.badge({ class: unref(props).ui?.badge })
								}), null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
							if (unref(props).description || !!slots.description) {
								_push(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "description", {}, () => {
									_push(`${ssrInterpolate(unref(props).description)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							if (unref(props).orientation === "vertical") _push(ssrRenderComponent(unref(ReusePriceTemplate), null, null, _parent, _scopeId));
							else _push(`<!---->`);
							if (features.value?.length || !!slots.features) {
								_push(`<ul data-slot="features" class="${ssrRenderClass(ui.value.features({ class: unref(props).ui?.features }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "features", {}, () => {
									_push(`<!--[-->`);
									ssrRenderList(features.value, (feature, index) => {
										_push(`<li data-slot="feature" class="${ssrRenderClass(ui.value.feature({ class: unref(props).ui?.feature }))}"${_scopeId}>`);
										_push(ssrRenderComponent(_sfc_main$5, {
											name: feature.icon || unref(appConfig).ui.icons.success,
											"data-slot": "featureIcon",
											class: ui.value.featureIcon({ class: unref(props).ui?.featureIcon })
										}, null, _parent, _scopeId));
										_push(`<span data-slot="featureTitle" class="${ssrRenderClass(ui.value.featureTitle({ class: unref(props).ui?.featureTitle }))}"${_scopeId}>${ssrInterpolate(feature.title)}</span></li>`);
									});
									_push(`<!--]-->`);
								}, _push, _parent, _scopeId);
								_push(`</ul>`);
							} else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(`</div>`);
						if (unref(props).terms || !!slots.terms || unref(props).button || !!slots.button || unref(props).orientation === "horizontal" || unref(props).tagline || !!slots.tagline || !!slots.footer) {
							_push(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: unref(props).ui?.footer }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
								if (unref(props).tagline || !!slots.tagline) {
									_push(`<div data-slot="tagline" class="${ssrRenderClass(ui.value.tagline({ class: unref(props).ui?.tagline }))}"${_scopeId}>`);
									ssrRenderSlot(_ctx.$slots, "tagline", {}, () => {
										_push(`${ssrInterpolate(unref(props).tagline)}`);
									}, _push, _parent, _scopeId);
									_push(`</div>`);
								} else _push(`<!---->`);
								if (unref(props).orientation === "horizontal") _push(ssrRenderComponent(unref(ReusePriceTemplate), null, null, _parent, _scopeId));
								else _push(`<!---->`);
								ssrRenderSlot(_ctx.$slots, "button", { ui: ui.value }, () => {
									if (unref(props).button) _push(ssrRenderComponent(_sfc_main$2, mergeProps({
										block: true,
										size: "lg",
										...unref(props).button
									}, {
										"data-slot": "button",
										class: ui.value.button({ class: unref(props).ui?.button }),
										onClick: unref(props).button?.onClick
									}), null, _parent, _scopeId));
									else _push(`<!---->`);
								}, _push, _parent, _scopeId);
								if (unref(props).terms || !!slots.terms) {
									_push(`<div data-slot="terms" class="${ssrRenderClass(ui.value.terms({ class: unref(props).ui?.terms }))}"${_scopeId}>`);
									ssrRenderSlot(_ctx.$slots, "terms", {}, () => {
										_push(`${ssrInterpolate(unref(props).terms)}`);
									}, _push, _parent, _scopeId);
									_push(`</div>`);
								} else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [
						!!slots.header && unref(props).orientation === "vertical" ? (openBlock(), createBlock("div", {
							key: 0,
							"data-slot": "header",
							class: ui.value.header({ class: unref(props).ui?.header })
						}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true),
						createVNode("div", {
							"data-slot": "body",
							class: ui.value.body({ class: unref(props).ui?.body })
						}, [renderSlot(_ctx.$slots, "body", {}, () => [
							createVNode("div", {
								"data-slot": "titleWrapper",
								class: ui.value.titleWrapper({ class: unref(props).ui?.titleWrapper })
							}, [unref(props).title || !!slots.title ? (openBlock(), createBlock("div", {
								key: 0,
								"data-slot": "title",
								class: ui.value.title({ class: unref(props).ui?.title })
							}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])], 2)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "badge", { ui: ui.value }, () => [unref(props).badge ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
								key: 0,
								color: "primary",
								variant: "subtle"
							}, typeof unref(props).badge === "string" ? { label: unref(props).badge } : unref(props).badge, {
								"data-slot": "badge",
								class: ui.value.badge({ class: unref(props).ui?.badge })
							}), null, 16, ["class"])) : createCommentVNode("", true)])], 2),
							unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
								key: 0,
								"data-slot": "description",
								class: ui.value.description({ class: unref(props).ui?.description })
							}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true),
							unref(props).orientation === "vertical" ? (openBlock(), createBlock(unref(ReusePriceTemplate), { key: 1 })) : createCommentVNode("", true),
							features.value?.length || !!slots.features ? (openBlock(), createBlock("ul", {
								key: 2,
								"data-slot": "features",
								class: ui.value.features({ class: unref(props).ui?.features })
							}, [renderSlot(_ctx.$slots, "features", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(features.value, (feature, index) => {
								return openBlock(), createBlock("li", {
									key: index,
									"data-slot": "feature",
									class: ui.value.feature({ class: unref(props).ui?.feature })
								}, [createVNode(_sfc_main$5, {
									name: feature.icon || unref(appConfig).ui.icons.success,
									"data-slot": "featureIcon",
									class: ui.value.featureIcon({ class: unref(props).ui?.featureIcon })
								}, null, 8, ["name", "class"]), createVNode("span", {
									"data-slot": "featureTitle",
									class: ui.value.featureTitle({ class: unref(props).ui?.featureTitle })
								}, toDisplayString(feature.title), 3)], 2);
							}), 128))])], 2)) : createCommentVNode("", true)
						])], 2),
						unref(props).terms || !!slots.terms || unref(props).button || !!slots.button || unref(props).orientation === "horizontal" || unref(props).tagline || !!slots.tagline || !!slots.footer ? (openBlock(), createBlock("div", {
							key: 1,
							"data-slot": "footer",
							class: ui.value.footer({ class: unref(props).ui?.footer })
						}, [renderSlot(_ctx.$slots, "footer", {}, () => [
							unref(props).tagline || !!slots.tagline ? (openBlock(), createBlock("div", {
								key: 0,
								"data-slot": "tagline",
								class: ui.value.tagline({ class: unref(props).ui?.tagline })
							}, [renderSlot(_ctx.$slots, "tagline", {}, () => [createTextVNode(toDisplayString(unref(props).tagline), 1)])], 2)) : createCommentVNode("", true),
							unref(props).orientation === "horizontal" ? (openBlock(), createBlock(unref(ReusePriceTemplate), { key: 1 })) : createCommentVNode("", true),
							renderSlot(_ctx.$slots, "button", { ui: ui.value }, () => [unref(props).button ? (openBlock(), createBlock(_sfc_main$2, mergeProps({ key: 0 }, {
								block: true,
								size: "lg",
								...unref(props).button
							}, {
								"data-slot": "button",
								class: ui.value.button({ class: unref(props).ui?.button }),
								onClick: unref(props).button?.onClick
							}), null, 16, ["class", "onClick"])) : createCommentVNode("", true)]),
							unref(props).terms || !!slots.terms ? (openBlock(), createBlock("div", {
								key: 2,
								"data-slot": "terms",
								class: ui.value.terms({ class: unref(props).ui?.terms })
							}, [renderSlot(_ctx.$slots, "terms", {}, () => [createTextVNode(toDisplayString(unref(props).terms), 1)])], 2)) : createCommentVNode("", true)
						])], 2)) : createCommentVNode("", true)
					];
				}),
				_: 3
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PricingPlan.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };

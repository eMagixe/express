import { a as useAppConfig } from '../virtual/entry.mjs';
import { u as useComponentProps, t as tv, P as Primitive, c as _sfc_main$1, p as pickLinkProps, d as _sfc_main$2, b as _sfc_main$5, e as _sfc_main$3, f as get } from './Button-D5UK4P4A.mjs';
import { u as useLocale } from './useLocale-Cji6XXXY.mjs';
import { useSlots, computed, unref, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, createVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fbreadcrumb.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fbreadcrumb_default = {
	"slots": {
		"root": "relative min-w-0",
		"list": "flex items-center gap-1.5",
		"item": "flex min-w-0",
		"link": "group relative flex items-center gap-1.5 text-sm min-w-0 rounded-md",
		"linkLeadingIcon": "shrink-0 size-5",
		"linkLeadingAvatar": "shrink-0",
		"linkLeadingAvatarSize": "2xs",
		"linkLabel": "truncate",
		"separator": "flex",
		"separatorIcon": "shrink-0 size-5 text-muted"
	},
	"variants": {
		"active": {
			"true": { "link": "font-semibold" },
			"false": { "link": "text-muted font-medium" }
		},
		"disabled": { "true": { "link": "cursor-not-allowed opacity-75" } },
		"to": { "true": "" },
		"color": {
			"primary": { "link": "outline-primary/25 focus-visible:outline-3" },
			"secondary": { "link": "outline-secondary/25 focus-visible:outline-3" },
			"success": { "link": "outline-success/25 focus-visible:outline-3" },
			"info": { "link": "outline-info/25 focus-visible:outline-3" },
			"warning": { "link": "outline-warning/25 focus-visible:outline-3" },
			"error": { "link": "outline-error/25 focus-visible:outline-3" },
			"neutral": { "link": "outline-inverted/25 focus-visible:outline-3" }
		}
	},
	"compoundVariants": [
		{
			"disabled": false,
			"active": false,
			"to": true,
			"class": { "link": ["hover:text-default", "transition-colors"] }
		},
		{
			"color": "primary",
			"active": true,
			"class": { "link": "text-primary" }
		},
		{
			"color": "secondary",
			"active": true,
			"class": { "link": "text-secondary" }
		},
		{
			"color": "success",
			"active": true,
			"class": { "link": "text-success" }
		},
		{
			"color": "info",
			"active": true,
			"class": { "link": "text-info" }
		},
		{
			"color": "warning",
			"active": true,
			"class": { "link": "text-warning" }
		},
		{
			"color": "error",
			"active": true,
			"class": { "link": "text-error" }
		},
		{
			"color": "neutral",
			"active": true,
			"class": { "link": "text-highlighted" }
		}
	],
	"defaultVariants": { "color": "primary" }
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue
var _sfc_main = {
	__name: "UBreadcrumb",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false,
			default: "nav"
		},
		items: {
			type: Array,
			required: false
		},
		separatorIcon: {
			type: null,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		labelKey: {
			type: null,
			required: false,
			default: "label"
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
		const props = useComponentProps("breadcrumb", _props);
		const { dir } = useLocale();
		const appConfig = useAppConfig();
		const separatorIcon = computed(() => props.separatorIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fbreadcrumb_default,
			...appConfig.ui?.breadcrumb || {}
		})({ color: props.color }));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"aria-label": "breadcrumb",
				"data-slot": "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ol data-slot="list" class="${ssrRenderClass(ui.value.list({ class: unref(props).ui?.list }))}"${_scopeId}><!--[-->`);
						ssrRenderList(unref(props).items, (item, index) => {
							_push(`<!--[--><li data-slot="item" class="${ssrRenderClass(ui.value.item({ class: [unref(props).ui?.item, item.ui?.item] }))}"${_scopeId}>`);
							_push(ssrRenderComponent(_sfc_main$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
								default: withCtx(({ active, ...slotProps }, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(_sfc_main$2, mergeProps({ ref_for: true }, slotProps, {
										as: "span",
										"aria-current": (item.active ?? active) && index === unref(props).items.length - 1 ? "page" : void 0,
										"data-slot": "link",
										class: ui.value.link({
											class: [
												unref(props).ui?.link,
												item.ui?.link,
												item.class
											],
											active: item.active ?? index === unref(props).items.length - 1,
											disabled: !!item.disabled,
											to: !!item.to
										})
									}), {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) ssrRenderSlot(_ctx.$slots, item.slot || "item", {
												item,
												active: item.active ?? index === unref(props).items.length - 1,
												index,
												ui: ui.value
											}, () => {
												ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
													item,
													active: item.active ?? index === unref(props).items.length - 1,
													index,
													ui: ui.value
												}, () => {
													if (item.icon) _push(ssrRenderComponent(_sfc_main$5, {
														name: item.icon,
														"data-slot": "linkLeadingIcon",
														class: ui.value.linkLeadingIcon({
															class: [unref(props).ui?.linkLeadingIcon, item.ui?.linkLeadingIcon],
															active: item.active ?? index === unref(props).items.length - 1
														})
													}, null, _parent, _scopeId));
													else if (item.avatar) _push(ssrRenderComponent(_sfc_main$3, mergeProps({ size: unref(props).ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize() }, { ref_for: true }, item.avatar, {
														"data-slot": "linkLeadingAvatar",
														class: ui.value.linkLeadingAvatar({
															class: [unref(props).ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar],
															active: item.active ?? index === unref(props).items.length - 1
														})
													}), null, _parent, _scopeId));
													else _push(`<!---->`);
												}, _push, _parent, _scopeId);
												if (unref(get)(item, unref(props).labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) {
													_push(`<span data-slot="linkLabel" class="${ssrRenderClass(ui.value.linkLabel({ class: [unref(props).ui?.linkLabel, item.ui?.linkLabel] }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
														item,
														active: item.active ?? index === unref(props).items.length - 1,
														index
													}, () => {
														_push(`${ssrInterpolate(unref(get)(item, unref(props).labelKey))}`);
													}, _push, _parent, _scopeId);
													_push(`</span>`);
												} else _push(`<!---->`);
												ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
													item,
													active: item.active ?? index === unref(props).items.length - 1,
													index
												}, null, _push, _parent, _scopeId);
											}, _push, _parent, _scopeId);
											else return [renderSlot(_ctx.$slots, item.slot || "item", {
												item,
												active: item.active ?? index === unref(props).items.length - 1,
												index,
												ui: ui.value
											}, () => [
												renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
													item,
													active: item.active ?? index === unref(props).items.length - 1,
													index,
													ui: ui.value
												}, () => [item.icon ? (openBlock(), createBlock(_sfc_main$5, {
													key: 0,
													name: item.icon,
													"data-slot": "linkLeadingIcon",
													class: ui.value.linkLeadingIcon({
														class: [unref(props).ui?.linkLeadingIcon, item.ui?.linkLeadingIcon],
														active: item.active ?? index === unref(props).items.length - 1
													})
												}, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
													key: 1,
													size: unref(props).ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
												}, { ref_for: true }, item.avatar, {
													"data-slot": "linkLeadingAvatar",
													class: ui.value.linkLeadingAvatar({
														class: [unref(props).ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar],
														active: item.active ?? index === unref(props).items.length - 1
													})
												}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
												unref(get)(item, unref(props).labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
													key: 0,
													"data-slot": "linkLabel",
													class: ui.value.linkLabel({ class: [unref(props).ui?.linkLabel, item.ui?.linkLabel] })
												}, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
													item,
													active: item.active ?? index === unref(props).items.length - 1,
													index
												}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)])], 2)) : createCommentVNode("", true),
												renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
													item,
													active: item.active ?? index === unref(props).items.length - 1,
													index
												})
											])];
										}),
										_: 2
									}, _parent, _scopeId));
									else return [createVNode(_sfc_main$2, mergeProps({ ref_for: true }, slotProps, {
										as: "span",
										"aria-current": (item.active ?? active) && index === unref(props).items.length - 1 ? "page" : void 0,
										"data-slot": "link",
										class: ui.value.link({
											class: [
												unref(props).ui?.link,
												item.ui?.link,
												item.class
											],
											active: item.active ?? index === unref(props).items.length - 1,
											disabled: !!item.disabled,
											to: !!item.to
										})
									}), {
										default: withCtx(() => [renderSlot(_ctx.$slots, item.slot || "item", {
											item,
											active: item.active ?? index === unref(props).items.length - 1,
											index,
											ui: ui.value
										}, () => [
											renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
												item,
												active: item.active ?? index === unref(props).items.length - 1,
												index,
												ui: ui.value
											}, () => [item.icon ? (openBlock(), createBlock(_sfc_main$5, {
												key: 0,
												name: item.icon,
												"data-slot": "linkLeadingIcon",
												class: ui.value.linkLeadingIcon({
													class: [unref(props).ui?.linkLeadingIcon, item.ui?.linkLeadingIcon],
													active: item.active ?? index === unref(props).items.length - 1
												})
											}, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
												key: 1,
												size: unref(props).ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
											}, { ref_for: true }, item.avatar, {
												"data-slot": "linkLeadingAvatar",
												class: ui.value.linkLeadingAvatar({
													class: [unref(props).ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar],
													active: item.active ?? index === unref(props).items.length - 1
												})
											}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
											unref(get)(item, unref(props).labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
												key: 0,
												"data-slot": "linkLabel",
												class: ui.value.linkLabel({ class: [unref(props).ui?.linkLabel, item.ui?.linkLabel] })
											}, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
												item,
												active: item.active ?? index === unref(props).items.length - 1,
												index
											}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)])], 2)) : createCommentVNode("", true),
											renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
												item,
												active: item.active ?? index === unref(props).items.length - 1,
												index
											})
										])]),
										_: 2
									}, 1040, ["aria-current", "class"])];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</li>`);
							if (index < unref(props).items.length - 1) {
								_push(`<li role="presentation" aria-hidden="true" data-slot="separator" class="${ssrRenderClass(ui.value.separator({ class: [unref(props).ui?.separator, item.ui?.separator] }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => {
									_push(ssrRenderComponent(_sfc_main$5, {
										name: separatorIcon.value,
										"data-slot": "separatorIcon",
										class: ui.value.separatorIcon({ class: [unref(props).ui?.separatorIcon, item.ui?.separatorIcon] })
									}, null, _parent, _scopeId));
								}, _push, _parent, _scopeId);
								_push(`</li>`);
							} else _push(`<!---->`);
							_push(`<!--]-->`);
						});
						_push(`<!--]--></ol>`);
					} else return [createVNode("ol", {
						"data-slot": "list",
						class: ui.value.list({ class: unref(props).ui?.list })
					}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).items, (item, index) => {
						return openBlock(), createBlock(Fragment, { key: index }, [createVNode("li", {
							"data-slot": "item",
							class: ui.value.item({ class: [unref(props).ui?.item, item.ui?.item] })
						}, [createVNode(_sfc_main$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
							default: withCtx(({ active, ...slotProps }) => [createVNode(_sfc_main$2, mergeProps({ ref_for: true }, slotProps, {
								as: "span",
								"aria-current": (item.active ?? active) && index === unref(props).items.length - 1 ? "page" : void 0,
								"data-slot": "link",
								class: ui.value.link({
									class: [
										unref(props).ui?.link,
										item.ui?.link,
										item.class
									],
									active: item.active ?? index === unref(props).items.length - 1,
									disabled: !!item.disabled,
									to: !!item.to
								})
							}), {
								default: withCtx(() => [renderSlot(_ctx.$slots, item.slot || "item", {
									item,
									active: item.active ?? index === unref(props).items.length - 1,
									index,
									ui: ui.value
								}, () => [
									renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
										item,
										active: item.active ?? index === unref(props).items.length - 1,
										index,
										ui: ui.value
									}, () => [item.icon ? (openBlock(), createBlock(_sfc_main$5, {
										key: 0,
										name: item.icon,
										"data-slot": "linkLeadingIcon",
										class: ui.value.linkLeadingIcon({
											class: [unref(props).ui?.linkLeadingIcon, item.ui?.linkLeadingIcon],
											active: item.active ?? index === unref(props).items.length - 1
										})
									}, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
										key: 1,
										size: unref(props).ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
									}, { ref_for: true }, item.avatar, {
										"data-slot": "linkLeadingAvatar",
										class: ui.value.linkLeadingAvatar({
											class: [unref(props).ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar],
											active: item.active ?? index === unref(props).items.length - 1
										})
									}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
									unref(get)(item, unref(props).labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
										key: 0,
										"data-slot": "linkLabel",
										class: ui.value.linkLabel({ class: [unref(props).ui?.linkLabel, item.ui?.linkLabel] })
									}, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
										item,
										active: item.active ?? index === unref(props).items.length - 1,
										index
									}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)])], 2)) : createCommentVNode("", true),
									renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
										item,
										active: item.active ?? index === unref(props).items.length - 1,
										index
									})
								])]),
								_: 2
							}, 1040, ["aria-current", "class"])]),
							_: 2
						}, 1040)], 2), index < unref(props).items.length - 1 ? (openBlock(), createBlock("li", {
							key: 0,
							role: "presentation",
							"aria-hidden": "true",
							"data-slot": "separator",
							class: ui.value.separator({ class: [unref(props).ui?.separator, item.ui?.separator] })
						}, [renderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => [createVNode(_sfc_main$5, {
							name: separatorIcon.value,
							"data-slot": "separatorIcon",
							class: ui.value.separatorIcon({ class: [unref(props).ui?.separatorIcon, item.ui?.separatorIcon] })
						}, null, 8, ["name", "class"])])], 2)) : createCommentVNode("", true)], 64);
					}), 128))], 2)];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };

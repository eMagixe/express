import { a as useAppConfig } from '../virtual/entry.mjs';
import { D as DropdownMenuRoot_default, g as DropdownMenuTrigger_default, h as DropdownMenuArrow_default, i as useFilter, u as useForwardPropsEmits, j as DropdownMenu } from './useFilter-BDnhBvLL.mjs';
import { u as useComponentProps, a as useForwardProps, t as tv, j as isArrayOfArray, b as _sfc_main$5, e as _sfc_main$3, f as get, F as FieldGroupReset, c as _sfc_main$1$1, p as pickLinkProps, d as _sfc_main$2$1, o as omit, P as Primitive } from './Button-D5UK4P4A.mjs';
import { a as usePortal } from './overlay-CnuoVSfw.mjs';
import { _ as _sfc_main$4 } from './Input-BoJ6XMWD.mjs';
import { u as useLocale } from './useLocale-Cji6XXXY.mjs';
import { useSlots, useModel, toRef, computed, unref, mergeProps, withCtx, renderSlot, createSlots, openBlock, createBlock, createCommentVNode, renderList, createVNode, mergeModels, ref, createTextVNode, toDisplayString, Fragment, resolveDynamicComponent, withModifiers, reactive, useSSRContext } from 'vue';
import { p as defu } from '../nitro/nitro.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { reactivePick, reactiveOmit, createReusableTemplate, createSharedComposable } from '@vueuse/core';

//#region node_modules/@nuxt/ui/dist/runtime/composables/useKbd.js
var kbdKeysMap = {
	meta: "",
	ctrl: "",
	alt: "",
	win: "⊞",
	command: "⌘",
	shift: "⇧",
	control: "⌃",
	option: "⌥",
	enter: "↵",
	delete: "⌦",
	backspace: "⌫",
	escape: "Esc",
	tab: "⇥",
	capslock: "⇪",
	arrowup: "↑",
	arrowright: "→",
	arrowdown: "↓",
	arrowleft: "←",
	pageup: "⇞",
	pagedown: "⇟",
	home: "↖",
	end: "↘"
};
var _useKbd = () => {
	const macOS = computed(() => false);
	const kbdKeysSpecificMap = reactive({
		meta: " ",
		alt: " ",
		ctrl: " "
	});
	function getKbdKey(value) {
		if (!value) return;
		if ([
			"meta",
			"alt",
			"ctrl"
		].includes(value)) return kbdKeysSpecificMap[value];
		return kbdKeysMap[value] || value;
	}
	return {
		macOS,
		getKbdKey
	};
};
var useKbd = /* @__PURE__ */ createSharedComposable(_useKbd);
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fkbd.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fkbd_default = {
	"base": "inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase",
	"variants": {
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
			"sm": "h-4 min-w-[16px] text-[10px]",
			"md": "h-5 min-w-[20px] text-[11px]",
			"lg": "h-6 min-w-[24px] text-[12px]"
		}
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": "solid",
			"class": "text-inverted bg-primary"
		},
		{
			"color": "secondary",
			"variant": "solid",
			"class": "text-inverted bg-secondary"
		},
		{
			"color": "success",
			"variant": "solid",
			"class": "text-inverted bg-success"
		},
		{
			"color": "info",
			"variant": "solid",
			"class": "text-inverted bg-info"
		},
		{
			"color": "warning",
			"variant": "solid",
			"class": "text-inverted bg-warning"
		},
		{
			"color": "error",
			"variant": "solid",
			"class": "text-inverted bg-error"
		},
		{
			"color": "primary",
			"variant": "outline",
			"class": "ring ring-inset ring-primary/50 text-primary"
		},
		{
			"color": "secondary",
			"variant": "outline",
			"class": "ring ring-inset ring-secondary/50 text-secondary"
		},
		{
			"color": "success",
			"variant": "outline",
			"class": "ring ring-inset ring-success/50 text-success"
		},
		{
			"color": "info",
			"variant": "outline",
			"class": "ring ring-inset ring-info/50 text-info"
		},
		{
			"color": "warning",
			"variant": "outline",
			"class": "ring ring-inset ring-warning/50 text-warning"
		},
		{
			"color": "error",
			"variant": "outline",
			"class": "ring ring-inset ring-error/50 text-error"
		},
		{
			"color": "primary",
			"variant": "soft",
			"class": "text-primary bg-primary/10"
		},
		{
			"color": "secondary",
			"variant": "soft",
			"class": "text-secondary bg-secondary/10"
		},
		{
			"color": "success",
			"variant": "soft",
			"class": "text-success bg-success/10"
		},
		{
			"color": "info",
			"variant": "soft",
			"class": "text-info bg-info/10"
		},
		{
			"color": "warning",
			"variant": "soft",
			"class": "text-warning bg-warning/10"
		},
		{
			"color": "error",
			"variant": "soft",
			"class": "text-error bg-error/10"
		},
		{
			"color": "primary",
			"variant": "subtle",
			"class": "text-primary ring ring-inset ring-primary/25 bg-primary/10"
		},
		{
			"color": "secondary",
			"variant": "subtle",
			"class": "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10"
		},
		{
			"color": "success",
			"variant": "subtle",
			"class": "text-success ring ring-inset ring-success/25 bg-success/10"
		},
		{
			"color": "info",
			"variant": "subtle",
			"class": "text-info ring ring-inset ring-info/25 bg-info/10"
		},
		{
			"color": "warning",
			"variant": "subtle",
			"class": "text-warning ring ring-inset ring-warning/25 bg-warning/10"
		},
		{
			"color": "error",
			"variant": "subtle",
			"class": "text-error ring ring-inset ring-error/25 bg-error/10"
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
		}
	],
	"defaultVariants": {
		"variant": "outline",
		"color": "neutral",
		"size": "md"
	}
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue
var _sfc_main$2 = {
	__name: "UKbd",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false,
			default: "kbd"
		},
		value: {
			type: null,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		variant: {
			type: null,
			required: false
		},
		size: {
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
		}
	},
	setup(__props) {
		const props = useComponentProps("kbd", __props);
		const { getKbdKey } = useKbd();
		const appConfig = useAppConfig();
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fkbd_default,
			...appConfig.ui?.kbd || {}
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				class: ui.value({
					class: [unref(props).ui?.base, unref(props).class],
					color: unref(props).color,
					variant: unref(props).variant,
					size: unref(props).size
				})
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, () => {
						_push(`${ssrInterpolate(unref(getKbdKey)(unref(props).value))}`);
					}, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(unref(getKbdKey)(unref(props).value)), 1)])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue
var _sfc_main$1 = {
	__name: "UDropdownMenuContent",
	__ssrInlineRender: true,
	props: {
		items: {
			type: null,
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true
		},
		sub: {
			type: Boolean,
			required: false
		},
		labelKey: {
			type: null,
			required: true
		},
		descriptionKey: {
			type: null,
			required: true
		},
		checkedIcon: {
			type: null,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		},
		externalIcon: {
			type: [Boolean, String],
			required: false,
			skipCheck: true
		},
		size: {
			type: null,
			required: false
		},
		filter: {
			type: [Boolean, Object],
			required: false
		},
		filterFields: {
			type: Array,
			required: false
		},
		ignoreFilter: {
			type: Boolean,
			required: false
		},
		searchTerm: {
			type: String,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: null,
			required: true
		},
		uiOverride: {
			type: null,
			required: false
		},
		loop: {
			type: Boolean,
			required: false
		},
		memoDependencies: {
			type: Array,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		hideShiftedArrow: {
			type: Boolean,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		}
	},
	emits: [
		"update:searchTerm",
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const slots = useSlots();
		const { t, dir } = useLocale();
		const appConfig = useAppConfig();
		const { filterGroups } = useFilter();
		const _searchTerm = ref("");
		const searchTerm = computed({
			get: () => props.searchTerm ?? _searchTerm.value,
			set: (value) => {
				_searchTerm.value = value;
				emits("update:searchTerm", value);
			}
		});
		const inputProps = toRef(() => defu(props.filter, {
			placeholder: t("dropdownMenu.search"),
			variant: "none"
		}));
		const portalProps = usePortal(toRef(() => props.portal));
		const contentProps = useForwardPropsEmits(reactiveOmit(props, "sub", "items", "portal", "labelKey", "descriptionKey", "checkedIcon", "loadingIcon", "externalIcon", "size", "filter", "filterFields", "ignoreFilter", "searchTerm", "class", "ui", "uiOverride"), emits);
		const getProxySlots = () => omit(slots, ["default"]);
		const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate();
		const childrenIcon = computed(() => dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight);
		const groups = computed(() => {
			if (!props.items?.length) return [];
			return isArrayOfArray(props.items) ? props.items : [props.items];
		});
		const isStructuralItem = (item) => !!item.type && ["label", "separator"].includes(item.type);
		const filteredGroups = computed(() => {
			if (!props.filter || props.ignoreFilter || !searchTerm.value) return groups.value;
			const fields = Array.isArray(props.filterFields) && props.filterFields.length ? props.filterFields : [props.labelKey];
			return filterGroups(groups.value, searchTerm.value, {
				fields,
				isStructural: isStructuralItem
			});
		});
		const hasFilteredItems = computed(() => filteredGroups.value.some((group) => group.some((item) => !isStructuralItem(item))));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(DefineItemTemplate), null, {
				default: withCtx(({ item, active, index }, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, item.slot || "item", {
						item,
						index,
						ui: __props.ui
					}, () => {
						ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
							item,
							active,
							index,
							ui: __props.ui
						}, () => {
							if (item.loading) _push(ssrRenderComponent(_sfc_main$5, {
								name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
								"data-slot": "itemLeadingIcon",
								class: __props.ui.itemLeadingIcon({
									class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon],
									color: item?.color,
									loading: true
								})
							}, null, _parent, _scopeId));
							else if (item.icon) _push(ssrRenderComponent(_sfc_main$5, {
								name: item.icon,
								"data-slot": "itemLeadingIcon",
								class: __props.ui.itemLeadingIcon({
									class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon],
									color: item?.color,
									active
								})
							}, null, _parent, _scopeId));
							else if (item.avatar) _push(ssrRenderComponent(_sfc_main$3, mergeProps({ size: item.ui?.itemLeadingAvatarSize || __props.uiOverride?.itemLeadingAvatarSize || __props.ui.itemLeadingAvatarSize() }, item.avatar, {
								"data-slot": "itemLeadingAvatar",
								class: __props.ui.itemLeadingAvatar({
									class: [__props.uiOverride?.itemLeadingAvatar, item.ui?.itemLeadingAvatar],
									active
								})
							}), null, _parent, _scopeId));
							else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						if (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] || unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"]) {
							_push(`<span data-slot="itemWrapper" class="${ssrRenderClass(__props.ui.itemWrapper({ class: [__props.uiOverride?.itemWrapper, item.ui?.itemWrapper] }))}"${_scopeId}><span data-slot="itemLabel" class="${ssrRenderClass(__props.ui.itemLabel({
								class: [__props.uiOverride?.itemLabel, item.ui?.itemLabel],
								active
							}))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
								item,
								active,
								index
							}, () => {
								_push(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
							}, _push, _parent, _scopeId);
							if (item.target === "_blank" && __props.externalIcon !== false) _push(ssrRenderComponent(_sfc_main$5, {
								name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
								"data-slot": "itemLabelExternalIcon",
								class: __props.ui.itemLabelExternalIcon({
									class: [__props.uiOverride?.itemLabelExternalIcon, item.ui?.itemLabelExternalIcon],
									color: item?.color,
									active
								})
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`</span>`);
							if (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"]) {
								_push(`<span data-slot="itemDescription" class="${ssrRenderClass(__props.ui.itemDescription({ class: [__props.uiOverride?.itemDescription, item.ui?.itemDescription] }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "item-description", {
									item,
									active,
									index
								}, () => {
									_push(`${ssrInterpolate(unref(get)(item, props.descriptionKey))}`);
								}, _push, _parent, _scopeId);
								_push(`</span>`);
							} else _push(`<!---->`);
							_push(`</span>`);
						} else _push(`<!---->`);
						_push(`<span data-slot="itemTrailing" class="${ssrRenderClass(__props.ui.itemTrailing({ class: [__props.uiOverride?.itemTrailing, item.ui?.itemTrailing] }))}"${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
							item,
							active,
							index,
							ui: __props.ui
						}, () => {
							if (item.children?.length) _push(ssrRenderComponent(_sfc_main$5, {
								name: childrenIcon.value,
								"data-slot": "itemTrailingIcon",
								class: __props.ui.itemTrailingIcon({
									class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon],
									color: item?.color,
									active
								})
							}, null, _parent, _scopeId));
							else if (item.kbds?.length) {
								_push(`<span data-slot="itemTrailingKbds" class="${ssrRenderClass(__props.ui.itemTrailingKbds({ class: [__props.uiOverride?.itemTrailingKbds, item.ui?.itemTrailingKbds] }))}"${_scopeId}><!--[-->`);
								ssrRenderList(item.kbds, (kbd, kbdIndex) => {
									_push(ssrRenderComponent(_sfc_main$2, mergeProps({
										key: kbdIndex,
										size: item.ui?.itemTrailingKbdsSize || __props.uiOverride?.itemTrailingKbdsSize || __props.ui.itemTrailingKbdsSize()
									}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent, _scopeId));
								});
								_push(`<!--]--></span>`);
							} else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(ssrRenderComponent(unref(DropdownMenu).ItemIndicator, { "as-child": "" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_sfc_main$5, {
									name: __props.checkedIcon || unref(appConfig).ui.icons.check,
									"data-slot": "itemTrailingIcon",
									class: __props.ui.itemTrailingIcon({
										class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon],
										color: item?.color
									})
								}, null, _parent, _scopeId));
								else return [createVNode(_sfc_main$5, {
									name: __props.checkedIcon || unref(appConfig).ui.icons.check,
									"data-slot": "itemTrailingIcon",
									class: __props.ui.itemTrailingIcon({
										class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon],
										color: item?.color
									})
								}, null, 8, ["name", "class"])];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</span>`);
					}, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, item.slot || "item", {
						item,
						index,
						ui: __props.ui
					}, () => [
						renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
							item,
							active,
							index,
							ui: __props.ui
						}, () => [item.loading ? (openBlock(), createBlock(_sfc_main$5, {
							key: 0,
							name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
							"data-slot": "itemLeadingIcon",
							class: __props.ui.itemLeadingIcon({
								class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon],
								color: item?.color,
								loading: true
							})
						}, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$5, {
							key: 1,
							name: item.icon,
							"data-slot": "itemLeadingIcon",
							class: __props.ui.itemLeadingIcon({
								class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon],
								color: item?.color,
								active
							})
						}, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
							key: 2,
							size: item.ui?.itemLeadingAvatarSize || __props.uiOverride?.itemLeadingAvatarSize || __props.ui.itemLeadingAvatarSize()
						}, item.avatar, {
							"data-slot": "itemLeadingAvatar",
							class: __props.ui.itemLeadingAvatar({
								class: [__props.uiOverride?.itemLeadingAvatar, item.ui?.itemLeadingAvatar],
								active
							})
						}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
						unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] || unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"] ? (openBlock(), createBlock("span", {
							key: 0,
							"data-slot": "itemWrapper",
							class: __props.ui.itemWrapper({ class: [__props.uiOverride?.itemWrapper, item.ui?.itemWrapper] })
						}, [createVNode("span", {
							"data-slot": "itemLabel",
							class: __props.ui.itemLabel({
								class: [__props.uiOverride?.itemLabel, item.ui?.itemLabel],
								active
							})
						}, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
							item,
							active,
							index
						}, () => [createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)]), item.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5, {
							key: 0,
							name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
							"data-slot": "itemLabelExternalIcon",
							class: __props.ui.itemLabelExternalIcon({
								class: [__props.uiOverride?.itemLabelExternalIcon, item.ui?.itemLabelExternalIcon],
								color: item?.color,
								active
							})
						}, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2), unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"] ? (openBlock(), createBlock("span", {
							key: 0,
							"data-slot": "itemDescription",
							class: __props.ui.itemDescription({ class: [__props.uiOverride?.itemDescription, item.ui?.itemDescription] })
						}, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "item-description", {
							item,
							active,
							index
						}, () => [createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
						createVNode("span", {
							"data-slot": "itemTrailing",
							class: __props.ui.itemTrailing({ class: [__props.uiOverride?.itemTrailing, item.ui?.itemTrailing] })
						}, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
							item,
							active,
							index,
							ui: __props.ui
						}, () => [item.children?.length ? (openBlock(), createBlock(_sfc_main$5, {
							key: 0,
							name: childrenIcon.value,
							"data-slot": "itemTrailingIcon",
							class: __props.ui.itemTrailingIcon({
								class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon],
								color: item?.color,
								active
							})
						}, null, 8, ["name", "class"])) : item.kbds?.length ? (openBlock(), createBlock("span", {
							key: 1,
							"data-slot": "itemTrailingKbds",
							class: __props.ui.itemTrailingKbds({ class: [__props.uiOverride?.itemTrailingKbds, item.ui?.itemTrailingKbds] })
						}, [(openBlock(true), createBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
							return openBlock(), createBlock(_sfc_main$2, mergeProps({
								key: kbdIndex,
								size: item.ui?.itemTrailingKbdsSize || __props.uiOverride?.itemTrailingKbdsSize || __props.ui.itemTrailingKbdsSize()
							}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
						}), 128))], 2)) : createCommentVNode("", true)]), createVNode(unref(DropdownMenu).ItemIndicator, { "as-child": "" }, {
							default: withCtx(() => [createVNode(_sfc_main$5, {
								name: __props.checkedIcon || unref(appConfig).ui.icons.check,
								"data-slot": "itemTrailingIcon",
								class: __props.ui.itemTrailingIcon({
									class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon],
									color: item?.color
								})
							}, null, 8, ["name", "class"])]),
							_: 2
						}, 1024)], 2)
					])];
				}),
				_: 3
			}, _parent));
			_push(ssrRenderComponent(unref(DropdownMenu).Portal, unref(portalProps), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(FieldGroupReset), null, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.sub ? unref(DropdownMenu).SubContent : unref(DropdownMenu).Content), mergeProps({
								"data-slot": "content",
								class: __props.ui.content({ class: [__props.uiOverride?.content, props.class] })
							}, unref(contentProps)), {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										if (!!__props.filter) _push(ssrRenderComponent(unref(DropdownMenu).Filter, {
											modelValue: searchTerm.value,
											"onUpdate:modelValue": ($event) => searchTerm.value = $event,
											"as-child": ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(_sfc_main$4, mergeProps({
													autofocus: "",
													autocomplete: "off",
													size: __props.size
												}, inputProps.value, {
													"data-slot": "input",
													class: __props.ui.input({ class: __props.uiOverride?.input }),
													onChange: () => {}
												}), null, _parent, _scopeId));
												else return [createVNode(_sfc_main$4, mergeProps({
													autofocus: "",
													autocomplete: "off",
													size: __props.size
												}, inputProps.value, {
													"data-slot": "input",
													class: __props.ui.input({ class: __props.uiOverride?.input }),
													onChange: withModifiers(() => {}, ["stop"])
												}), null, 16, [
													"size",
													"class",
													"onChange"
												])];
											}),
											_: 1
										}, _parent, _scopeId));
										else _push(`<!---->`);
										ssrRenderSlot(_ctx.$slots, "content-top", { sub: __props.sub ?? false }, null, _push, _parent, _scopeId);
										if (!searchTerm.value || hasFilteredItems.value) {
											_push(`<div role="presentation" data-slot="viewport" class="${ssrRenderClass(__props.ui.viewport({ class: __props.uiOverride?.viewport }))}"${_scopeId}><!--[-->`);
											ssrRenderList(filteredGroups.value, (group, groupIndex) => {
												_push(ssrRenderComponent(unref(DropdownMenu).Group, {
													key: `group-${groupIndex}`,
													"data-slot": "group",
													class: __props.ui.group({ class: __props.uiOverride?.group })
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(`<!--[-->`);
															ssrRenderList(group, (item, index) => {
																_push(`<!--[-->`);
																if (item.type === "label") _push(ssrRenderComponent(unref(DropdownMenu).Label, {
																	"data-slot": "label",
																	class: __props.ui.label({ class: [
																		__props.uiOverride?.label,
																		item.ui?.label,
																		item.class
																	] })
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(ReuseItemTemplate), {
																			item,
																			index
																		}, null, _parent, _scopeId));
																		else return [createVNode(unref(ReuseItemTemplate), {
																			item,
																			index
																		}, null, 8, ["item", "index"])];
																	}),
																	_: 2
																}, _parent, _scopeId));
																else if (item.type === "separator") _push(ssrRenderComponent(unref(DropdownMenu).Separator, {
																	"data-slot": "separator",
																	class: __props.ui.separator({ class: [
																		__props.uiOverride?.separator,
																		item.ui?.separator,
																		item.class
																	] })
																}, null, _parent, _scopeId));
																else if (item?.children?.length) _push(ssrRenderComponent(unref(DropdownMenu).Sub, {
																	open: item.open,
																	"default-open": item.defaultOpen
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) {
																			_push(ssrRenderComponent(unref(DropdownMenu).SubTrigger, {
																				as: "button",
																				type: "button",
																				disabled: item.disabled,
																				"text-value": unref(get)(item, props.labelKey),
																				"data-slot": "item",
																				class: __props.ui.item({
																					class: [
																						__props.uiOverride?.item,
																						item.ui?.item,
																						item.class
																					],
																					color: item?.color
																				})
																			}, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(ssrRenderComponent(unref(ReuseItemTemplate), {
																						item,
																						index
																					}, null, _parent, _scopeId));
																					else return [createVNode(unref(ReuseItemTemplate), {
																						item,
																						index
																					}, null, 8, ["item", "index"])];
																				}),
																				_: 2
																			}, _parent, _scopeId));
																			_push(ssrRenderComponent(_sfc_main$1, mergeProps({
																				sub: "",
																				class: item.ui?.content,
																				ui: __props.ui,
																				"ui-override": __props.uiOverride,
																				portal: __props.portal,
																				items: item.children,
																				align: "start",
																				"align-offset": -4,
																				"side-offset": 3,
																				"label-key": __props.labelKey,
																				"description-key": __props.descriptionKey,
																				"checked-icon": __props.checkedIcon,
																				"loading-icon": __props.loadingIcon,
																				"external-icon": __props.externalIcon,
																				size: __props.size,
																				filter: item.filter,
																				"filter-fields": item.filterFields || __props.filterFields,
																				"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
																			}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList(getProxySlots(), (_, name) => {
																				return {
																					name,
																					fn: withCtx((slotData, _push, _parent, _scopeId) => {
																						if (_push) ssrRenderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData), null, _push, _parent, _scopeId);
																						else return [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))];
																					})
																				};
																			})]), _parent, _scopeId));
																		} else return [createVNode(unref(DropdownMenu).SubTrigger, {
																			as: "button",
																			type: "button",
																			disabled: item.disabled,
																			"text-value": unref(get)(item, props.labelKey),
																			"data-slot": "item",
																			class: __props.ui.item({
																				class: [
																					__props.uiOverride?.item,
																					item.ui?.item,
																					item.class
																				],
																				color: item?.color
																			})
																		}, {
																			default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																				item,
																				index
																			}, null, 8, ["item", "index"])]),
																			_: 2
																		}, 1032, [
																			"disabled",
																			"text-value",
																			"class"
																		]), createVNode(_sfc_main$1, mergeProps({
																			sub: "",
																			class: item.ui?.content,
																			ui: __props.ui,
																			"ui-override": __props.uiOverride,
																			portal: __props.portal,
																			items: item.children,
																			align: "start",
																			"align-offset": -4,
																			"side-offset": 3,
																			"label-key": __props.labelKey,
																			"description-key": __props.descriptionKey,
																			"checked-icon": __props.checkedIcon,
																			"loading-icon": __props.loadingIcon,
																			"external-icon": __props.externalIcon,
																			size: __props.size,
																			filter: item.filter,
																			"filter-fields": item.filterFields || __props.filterFields,
																			"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
																		}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList(getProxySlots(), (_, name) => {
																			return {
																				name,
																				fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))])
																			};
																		})]), 1040, [
																			"class",
																			"ui",
																			"ui-override",
																			"portal",
																			"items",
																			"label-key",
																			"description-key",
																			"checked-icon",
																			"loading-icon",
																			"external-icon",
																			"size",
																			"filter",
																			"filter-fields",
																			"ignore-filter"
																		])];
																	}),
																	_: 2
																}, _parent, _scopeId));
																else if (item.type === "checkbox") _push(ssrRenderComponent(unref(DropdownMenu).CheckboxItem, {
																	"model-value": item.checked,
																	disabled: item.disabled,
																	"text-value": unref(get)(item, props.labelKey),
																	"data-slot": "item",
																	class: __props.ui.item({
																		class: [
																			__props.uiOverride?.item,
																			item.ui?.item,
																			item.class
																		],
																		color: item?.color
																	}),
																	"onUpdate:modelValue": item.onUpdateChecked,
																	onSelect: item.onSelect
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(ReuseItemTemplate), {
																			item,
																			index
																		}, null, _parent, _scopeId));
																		else return [createVNode(unref(ReuseItemTemplate), {
																			item,
																			index
																		}, null, 8, ["item", "index"])];
																	}),
																	_: 2
																}, _parent, _scopeId));
																else _push(ssrRenderComponent(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
																	default: withCtx(({ active, ...slotProps }, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(DropdownMenu).Item, {
																			"as-child": "",
																			disabled: item.disabled,
																			"text-value": unref(get)(item, props.labelKey),
																			onSelect: item.onSelect
																		}, {
																			default: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) _push(ssrRenderComponent(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
																					"data-slot": "item",
																					class: __props.ui.item({
																						class: [
																							__props.uiOverride?.item,
																							item.ui?.item,
																							item.class
																						],
																						color: item?.color,
																						active
																					})
																				}), {
																					default: withCtx((_, _push, _parent, _scopeId) => {
																						if (_push) _push(ssrRenderComponent(unref(ReuseItemTemplate), {
																							item,
																							active,
																							index
																						}, null, _parent, _scopeId));
																						else return [createVNode(unref(ReuseItemTemplate), {
																							item,
																							active,
																							index
																						}, null, 8, [
																							"item",
																							"active",
																							"index"
																						])];
																					}),
																					_: 2
																				}, _parent, _scopeId));
																				else return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
																					"data-slot": "item",
																					class: __props.ui.item({
																						class: [
																							__props.uiOverride?.item,
																							item.ui?.item,
																							item.class
																						],
																						color: item?.color,
																						active
																					})
																				}), {
																					default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																						item,
																						active,
																						index
																					}, null, 8, [
																						"item",
																						"active",
																						"index"
																					])]),
																					_: 2
																				}, 1040, ["class"])];
																			}),
																			_: 2
																		}, _parent, _scopeId));
																		else return [createVNode(unref(DropdownMenu).Item, {
																			"as-child": "",
																			disabled: item.disabled,
																			"text-value": unref(get)(item, props.labelKey),
																			onSelect: item.onSelect
																		}, {
																			default: withCtx(() => [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
																				"data-slot": "item",
																				class: __props.ui.item({
																					class: [
																						__props.uiOverride?.item,
																						item.ui?.item,
																						item.class
																					],
																					color: item?.color,
																					active
																				})
																			}), {
																				default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																					item,
																					active,
																					index
																				}, null, 8, [
																					"item",
																					"active",
																					"index"
																				])]),
																				_: 2
																			}, 1040, ["class"])]),
																			_: 2
																		}, 1032, [
																			"disabled",
																			"text-value",
																			"onSelect"
																		])];
																	}),
																	_: 2
																}, _parent, _scopeId));
																_push(`<!--]-->`);
															});
															_push(`<!--]-->`);
														} else return [(openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
															return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [item.type === "label" ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
																key: 0,
																"data-slot": "label",
																class: __props.ui.label({ class: [
																	__props.uiOverride?.label,
																	item.ui?.label,
																	item.class
																] })
															}, {
																default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																	item,
																	index
																}, null, 8, ["item", "index"])]),
																_: 2
															}, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
																key: 1,
																"data-slot": "separator",
																class: __props.ui.separator({ class: [
																	__props.uiOverride?.separator,
																	item.ui?.separator,
																	item.class
																] })
															}, null, 8, ["class"])) : item?.children?.length ? (openBlock(), createBlock(unref(DropdownMenu).Sub, {
																key: 2,
																open: item.open,
																"default-open": item.defaultOpen
															}, {
																default: withCtx(() => [createVNode(unref(DropdownMenu).SubTrigger, {
																	as: "button",
																	type: "button",
																	disabled: item.disabled,
																	"text-value": unref(get)(item, props.labelKey),
																	"data-slot": "item",
																	class: __props.ui.item({
																		class: [
																			__props.uiOverride?.item,
																			item.ui?.item,
																			item.class
																		],
																		color: item?.color
																	})
																}, {
																	default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																		item,
																		index
																	}, null, 8, ["item", "index"])]),
																	_: 2
																}, 1032, [
																	"disabled",
																	"text-value",
																	"class"
																]), createVNode(_sfc_main$1, mergeProps({
																	sub: "",
																	class: item.ui?.content,
																	ui: __props.ui,
																	"ui-override": __props.uiOverride,
																	portal: __props.portal,
																	items: item.children,
																	align: "start",
																	"align-offset": -4,
																	"side-offset": 3,
																	"label-key": __props.labelKey,
																	"description-key": __props.descriptionKey,
																	"checked-icon": __props.checkedIcon,
																	"loading-icon": __props.loadingIcon,
																	"external-icon": __props.externalIcon,
																	size: __props.size,
																	filter: item.filter,
																	"filter-fields": item.filterFields || __props.filterFields,
																	"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
																}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList(getProxySlots(), (_, name) => {
																	return {
																		name,
																		fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))])
																	};
																})]), 1040, [
																	"class",
																	"ui",
																	"ui-override",
																	"portal",
																	"items",
																	"label-key",
																	"description-key",
																	"checked-icon",
																	"loading-icon",
																	"external-icon",
																	"size",
																	"filter",
																	"filter-fields",
																	"ignore-filter"
																])]),
																_: 2
															}, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(DropdownMenu).CheckboxItem, {
																key: 3,
																"model-value": item.checked,
																disabled: item.disabled,
																"text-value": unref(get)(item, props.labelKey),
																"data-slot": "item",
																class: __props.ui.item({
																	class: [
																		__props.uiOverride?.item,
																		item.ui?.item,
																		item.class
																	],
																	color: item?.color
																}),
																"onUpdate:modelValue": item.onUpdateChecked,
																onSelect: item.onSelect
															}, {
																default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																	item,
																	index
																}, null, 8, ["item", "index"])]),
																_: 2
															}, 1032, [
																"model-value",
																"disabled",
																"text-value",
																"class",
																"onUpdate:modelValue",
																"onSelect"
															])) : (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
																key: 4,
																ref_for: true
															}, unref(pickLinkProps)(item), { custom: "" }), {
																default: withCtx(({ active, ...slotProps }) => [createVNode(unref(DropdownMenu).Item, {
																	"as-child": "",
																	disabled: item.disabled,
																	"text-value": unref(get)(item, props.labelKey),
																	onSelect: item.onSelect
																}, {
																	default: withCtx(() => [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
																		"data-slot": "item",
																		class: __props.ui.item({
																			class: [
																				__props.uiOverride?.item,
																				item.ui?.item,
																				item.class
																			],
																			color: item?.color,
																			active
																		})
																	}), {
																		default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																			item,
																			active,
																			index
																		}, null, 8, [
																			"item",
																			"active",
																			"index"
																		])]),
																		_: 2
																	}, 1040, ["class"])]),
																	_: 2
																}, 1032, [
																	"disabled",
																	"text-value",
																	"onSelect"
																])]),
																_: 2
															}, 1040))], 64);
														}), 128))];
													}),
													_: 2
												}, _parent, _scopeId));
											});
											_push(`<!--]--></div>`);
										} else _push(`<!---->`);
										if (searchTerm.value && !hasFilteredItems.value) {
											_push(`<div data-slot="empty" class="${ssrRenderClass(__props.ui.empty({ class: __props.uiOverride?.empty }))}"${_scopeId}>`);
											ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
												_push(`${ssrInterpolate(unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value }))}`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
										ssrRenderSlot(_ctx.$slots, "content-bottom", { sub: __props.sub ?? false }, null, _push, _parent, _scopeId);
									} else return [
										!!__props.filter ? (openBlock(), createBlock(unref(DropdownMenu).Filter, {
											key: 0,
											modelValue: searchTerm.value,
											"onUpdate:modelValue": ($event) => searchTerm.value = $event,
											"as-child": ""
										}, {
											default: withCtx(() => [createVNode(_sfc_main$4, mergeProps({
												autofocus: "",
												autocomplete: "off",
												size: __props.size
											}, inputProps.value, {
												"data-slot": "input",
												class: __props.ui.input({ class: __props.uiOverride?.input }),
												onChange: withModifiers(() => {}, ["stop"])
											}), null, 16, [
												"size",
												"class",
												"onChange"
											])]),
											_: 1
										}, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
										renderSlot(_ctx.$slots, "content-top", { sub: __props.sub ?? false }),
										!searchTerm.value || hasFilteredItems.value ? (openBlock(), createBlock("div", {
											key: 1,
											role: "presentation",
											"data-slot": "viewport",
											class: __props.ui.viewport({ class: __props.uiOverride?.viewport })
										}, [(openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
											return openBlock(), createBlock(unref(DropdownMenu).Group, {
												key: `group-${groupIndex}`,
												"data-slot": "group",
												class: __props.ui.group({ class: __props.uiOverride?.group })
											}, {
												default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
													return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [item.type === "label" ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
														key: 0,
														"data-slot": "label",
														class: __props.ui.label({ class: [
															__props.uiOverride?.label,
															item.ui?.label,
															item.class
														] })
													}, {
														default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
															item,
															index
														}, null, 8, ["item", "index"])]),
														_: 2
													}, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
														key: 1,
														"data-slot": "separator",
														class: __props.ui.separator({ class: [
															__props.uiOverride?.separator,
															item.ui?.separator,
															item.class
														] })
													}, null, 8, ["class"])) : item?.children?.length ? (openBlock(), createBlock(unref(DropdownMenu).Sub, {
														key: 2,
														open: item.open,
														"default-open": item.defaultOpen
													}, {
														default: withCtx(() => [createVNode(unref(DropdownMenu).SubTrigger, {
															as: "button",
															type: "button",
															disabled: item.disabled,
															"text-value": unref(get)(item, props.labelKey),
															"data-slot": "item",
															class: __props.ui.item({
																class: [
																	__props.uiOverride?.item,
																	item.ui?.item,
																	item.class
																],
																color: item?.color
															})
														}, {
															default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																item,
																index
															}, null, 8, ["item", "index"])]),
															_: 2
														}, 1032, [
															"disabled",
															"text-value",
															"class"
														]), createVNode(_sfc_main$1, mergeProps({
															sub: "",
															class: item.ui?.content,
															ui: __props.ui,
															"ui-override": __props.uiOverride,
															portal: __props.portal,
															items: item.children,
															align: "start",
															"align-offset": -4,
															"side-offset": 3,
															"label-key": __props.labelKey,
															"description-key": __props.descriptionKey,
															"checked-icon": __props.checkedIcon,
															"loading-icon": __props.loadingIcon,
															"external-icon": __props.externalIcon,
															size: __props.size,
															filter: item.filter,
															"filter-fields": item.filterFields || __props.filterFields,
															"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
														}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList(getProxySlots(), (_, name) => {
															return {
																name,
																fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))])
															};
														})]), 1040, [
															"class",
															"ui",
															"ui-override",
															"portal",
															"items",
															"label-key",
															"description-key",
															"checked-icon",
															"loading-icon",
															"external-icon",
															"size",
															"filter",
															"filter-fields",
															"ignore-filter"
														])]),
														_: 2
													}, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(DropdownMenu).CheckboxItem, {
														key: 3,
														"model-value": item.checked,
														disabled: item.disabled,
														"text-value": unref(get)(item, props.labelKey),
														"data-slot": "item",
														class: __props.ui.item({
															class: [
																__props.uiOverride?.item,
																item.ui?.item,
																item.class
															],
															color: item?.color
														}),
														"onUpdate:modelValue": item.onUpdateChecked,
														onSelect: item.onSelect
													}, {
														default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
															item,
															index
														}, null, 8, ["item", "index"])]),
														_: 2
													}, 1032, [
														"model-value",
														"disabled",
														"text-value",
														"class",
														"onUpdate:modelValue",
														"onSelect"
													])) : (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
														key: 4,
														ref_for: true
													}, unref(pickLinkProps)(item), { custom: "" }), {
														default: withCtx(({ active, ...slotProps }) => [createVNode(unref(DropdownMenu).Item, {
															"as-child": "",
															disabled: item.disabled,
															"text-value": unref(get)(item, props.labelKey),
															onSelect: item.onSelect
														}, {
															default: withCtx(() => [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
																"data-slot": "item",
																class: __props.ui.item({
																	class: [
																		__props.uiOverride?.item,
																		item.ui?.item,
																		item.class
																	],
																	color: item?.color,
																	active
																})
															}), {
																default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																	item,
																	active,
																	index
																}, null, 8, [
																	"item",
																	"active",
																	"index"
																])]),
																_: 2
															}, 1040, ["class"])]),
															_: 2
														}, 1032, [
															"disabled",
															"text-value",
															"onSelect"
														])]),
														_: 2
													}, 1040))], 64);
												}), 128))]),
												_: 2
											}, 1032, ["class"]);
										}), 128))], 2)) : createCommentVNode("", true),
										searchTerm.value && !hasFilteredItems.value ? (openBlock(), createBlock("div", {
											key: 2,
											"data-slot": "empty",
											class: __props.ui.empty({ class: __props.uiOverride?.empty })
										}, [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value })), 1)])], 2)) : createCommentVNode("", true),
										renderSlot(_ctx.$slots, "default"),
										renderSlot(_ctx.$slots, "content-bottom", { sub: __props.sub ?? false })
									];
								}),
								_: 3
							}), _parent, _scopeId);
							else return [(openBlock(), createBlock(resolveDynamicComponent(__props.sub ? unref(DropdownMenu).SubContent : unref(DropdownMenu).Content), mergeProps({
								"data-slot": "content",
								class: __props.ui.content({ class: [__props.uiOverride?.content, props.class] })
							}, unref(contentProps)), {
								default: withCtx(() => [
									!!__props.filter ? (openBlock(), createBlock(unref(DropdownMenu).Filter, {
										key: 0,
										modelValue: searchTerm.value,
										"onUpdate:modelValue": ($event) => searchTerm.value = $event,
										"as-child": ""
									}, {
										default: withCtx(() => [createVNode(_sfc_main$4, mergeProps({
											autofocus: "",
											autocomplete: "off",
											size: __props.size
										}, inputProps.value, {
											"data-slot": "input",
											class: __props.ui.input({ class: __props.uiOverride?.input }),
											onChange: withModifiers(() => {}, ["stop"])
										}), null, 16, [
											"size",
											"class",
											"onChange"
										])]),
										_: 1
									}, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
									renderSlot(_ctx.$slots, "content-top", { sub: __props.sub ?? false }),
									!searchTerm.value || hasFilteredItems.value ? (openBlock(), createBlock("div", {
										key: 1,
										role: "presentation",
										"data-slot": "viewport",
										class: __props.ui.viewport({ class: __props.uiOverride?.viewport })
									}, [(openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
										return openBlock(), createBlock(unref(DropdownMenu).Group, {
											key: `group-${groupIndex}`,
											"data-slot": "group",
											class: __props.ui.group({ class: __props.uiOverride?.group })
										}, {
											default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
												return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [item.type === "label" ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
													key: 0,
													"data-slot": "label",
													class: __props.ui.label({ class: [
														__props.uiOverride?.label,
														item.ui?.label,
														item.class
													] })
												}, {
													default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
														item,
														index
													}, null, 8, ["item", "index"])]),
													_: 2
												}, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
													key: 1,
													"data-slot": "separator",
													class: __props.ui.separator({ class: [
														__props.uiOverride?.separator,
														item.ui?.separator,
														item.class
													] })
												}, null, 8, ["class"])) : item?.children?.length ? (openBlock(), createBlock(unref(DropdownMenu).Sub, {
													key: 2,
													open: item.open,
													"default-open": item.defaultOpen
												}, {
													default: withCtx(() => [createVNode(unref(DropdownMenu).SubTrigger, {
														as: "button",
														type: "button",
														disabled: item.disabled,
														"text-value": unref(get)(item, props.labelKey),
														"data-slot": "item",
														class: __props.ui.item({
															class: [
																__props.uiOverride?.item,
																item.ui?.item,
																item.class
															],
															color: item?.color
														})
													}, {
														default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
															item,
															index
														}, null, 8, ["item", "index"])]),
														_: 2
													}, 1032, [
														"disabled",
														"text-value",
														"class"
													]), createVNode(_sfc_main$1, mergeProps({
														sub: "",
														class: item.ui?.content,
														ui: __props.ui,
														"ui-override": __props.uiOverride,
														portal: __props.portal,
														items: item.children,
														align: "start",
														"align-offset": -4,
														"side-offset": 3,
														"label-key": __props.labelKey,
														"description-key": __props.descriptionKey,
														"checked-icon": __props.checkedIcon,
														"loading-icon": __props.loadingIcon,
														"external-icon": __props.externalIcon,
														size: __props.size,
														filter: item.filter,
														"filter-fields": item.filterFields || __props.filterFields,
														"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
													}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList(getProxySlots(), (_, name) => {
														return {
															name,
															fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))])
														};
													})]), 1040, [
														"class",
														"ui",
														"ui-override",
														"portal",
														"items",
														"label-key",
														"description-key",
														"checked-icon",
														"loading-icon",
														"external-icon",
														"size",
														"filter",
														"filter-fields",
														"ignore-filter"
													])]),
													_: 2
												}, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(DropdownMenu).CheckboxItem, {
													key: 3,
													"model-value": item.checked,
													disabled: item.disabled,
													"text-value": unref(get)(item, props.labelKey),
													"data-slot": "item",
													class: __props.ui.item({
														class: [
															__props.uiOverride?.item,
															item.ui?.item,
															item.class
														],
														color: item?.color
													}),
													"onUpdate:modelValue": item.onUpdateChecked,
													onSelect: item.onSelect
												}, {
													default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
														item,
														index
													}, null, 8, ["item", "index"])]),
													_: 2
												}, 1032, [
													"model-value",
													"disabled",
													"text-value",
													"class",
													"onUpdate:modelValue",
													"onSelect"
												])) : (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
													key: 4,
													ref_for: true
												}, unref(pickLinkProps)(item), { custom: "" }), {
													default: withCtx(({ active, ...slotProps }) => [createVNode(unref(DropdownMenu).Item, {
														"as-child": "",
														disabled: item.disabled,
														"text-value": unref(get)(item, props.labelKey),
														onSelect: item.onSelect
													}, {
														default: withCtx(() => [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
															"data-slot": "item",
															class: __props.ui.item({
																class: [
																	__props.uiOverride?.item,
																	item.ui?.item,
																	item.class
																],
																color: item?.color,
																active
															})
														}), {
															default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																item,
																active,
																index
															}, null, 8, [
																"item",
																"active",
																"index"
															])]),
															_: 2
														}, 1040, ["class"])]),
														_: 2
													}, 1032, [
														"disabled",
														"text-value",
														"onSelect"
													])]),
													_: 2
												}, 1040))], 64);
											}), 128))]),
											_: 2
										}, 1032, ["class"]);
									}), 128))], 2)) : createCommentVNode("", true),
									searchTerm.value && !hasFilteredItems.value ? (openBlock(), createBlock("div", {
										key: 2,
										"data-slot": "empty",
										class: __props.ui.empty({ class: __props.uiOverride?.empty })
									}, [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value })), 1)])], 2)) : createCommentVNode("", true),
									renderSlot(_ctx.$slots, "default"),
									renderSlot(_ctx.$slots, "content-bottom", { sub: __props.sub ?? false })
								]),
								_: 3
							}, 16, ["class"]))];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [createVNode(unref(FieldGroupReset), null, {
						default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.sub ? unref(DropdownMenu).SubContent : unref(DropdownMenu).Content), mergeProps({
							"data-slot": "content",
							class: __props.ui.content({ class: [__props.uiOverride?.content, props.class] })
						}, unref(contentProps)), {
							default: withCtx(() => [
								!!__props.filter ? (openBlock(), createBlock(unref(DropdownMenu).Filter, {
									key: 0,
									modelValue: searchTerm.value,
									"onUpdate:modelValue": ($event) => searchTerm.value = $event,
									"as-child": ""
								}, {
									default: withCtx(() => [createVNode(_sfc_main$4, mergeProps({
										autofocus: "",
										autocomplete: "off",
										size: __props.size
									}, inputProps.value, {
										"data-slot": "input",
										class: __props.ui.input({ class: __props.uiOverride?.input }),
										onChange: withModifiers(() => {}, ["stop"])
									}), null, 16, [
										"size",
										"class",
										"onChange"
									])]),
									_: 1
								}, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
								renderSlot(_ctx.$slots, "content-top", { sub: __props.sub ?? false }),
								!searchTerm.value || hasFilteredItems.value ? (openBlock(), createBlock("div", {
									key: 1,
									role: "presentation",
									"data-slot": "viewport",
									class: __props.ui.viewport({ class: __props.uiOverride?.viewport })
								}, [(openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
									return openBlock(), createBlock(unref(DropdownMenu).Group, {
										key: `group-${groupIndex}`,
										"data-slot": "group",
										class: __props.ui.group({ class: __props.uiOverride?.group })
									}, {
										default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
											return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [item.type === "label" ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
												key: 0,
												"data-slot": "label",
												class: __props.ui.label({ class: [
													__props.uiOverride?.label,
													item.ui?.label,
													item.class
												] })
											}, {
												default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
													item,
													index
												}, null, 8, ["item", "index"])]),
												_: 2
											}, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
												key: 1,
												"data-slot": "separator",
												class: __props.ui.separator({ class: [
													__props.uiOverride?.separator,
													item.ui?.separator,
													item.class
												] })
											}, null, 8, ["class"])) : item?.children?.length ? (openBlock(), createBlock(unref(DropdownMenu).Sub, {
												key: 2,
												open: item.open,
												"default-open": item.defaultOpen
											}, {
												default: withCtx(() => [createVNode(unref(DropdownMenu).SubTrigger, {
													as: "button",
													type: "button",
													disabled: item.disabled,
													"text-value": unref(get)(item, props.labelKey),
													"data-slot": "item",
													class: __props.ui.item({
														class: [
															__props.uiOverride?.item,
															item.ui?.item,
															item.class
														],
														color: item?.color
													})
												}, {
													default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
														item,
														index
													}, null, 8, ["item", "index"])]),
													_: 2
												}, 1032, [
													"disabled",
													"text-value",
													"class"
												]), createVNode(_sfc_main$1, mergeProps({
													sub: "",
													class: item.ui?.content,
													ui: __props.ui,
													"ui-override": __props.uiOverride,
													portal: __props.portal,
													items: item.children,
													align: "start",
													"align-offset": -4,
													"side-offset": 3,
													"label-key": __props.labelKey,
													"description-key": __props.descriptionKey,
													"checked-icon": __props.checkedIcon,
													"loading-icon": __props.loadingIcon,
													"external-icon": __props.externalIcon,
													size: __props.size,
													filter: item.filter,
													"filter-fields": item.filterFields || __props.filterFields,
													"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
												}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList(getProxySlots(), (_, name) => {
													return {
														name,
														fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))])
													};
												})]), 1040, [
													"class",
													"ui",
													"ui-override",
													"portal",
													"items",
													"label-key",
													"description-key",
													"checked-icon",
													"loading-icon",
													"external-icon",
													"size",
													"filter",
													"filter-fields",
													"ignore-filter"
												])]),
												_: 2
											}, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(DropdownMenu).CheckboxItem, {
												key: 3,
												"model-value": item.checked,
												disabled: item.disabled,
												"text-value": unref(get)(item, props.labelKey),
												"data-slot": "item",
												class: __props.ui.item({
													class: [
														__props.uiOverride?.item,
														item.ui?.item,
														item.class
													],
													color: item?.color
												}),
												"onUpdate:modelValue": item.onUpdateChecked,
												onSelect: item.onSelect
											}, {
												default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
													item,
													index
												}, null, 8, ["item", "index"])]),
												_: 2
											}, 1032, [
												"model-value",
												"disabled",
												"text-value",
												"class",
												"onUpdate:modelValue",
												"onSelect"
											])) : (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
												key: 4,
												ref_for: true
											}, unref(pickLinkProps)(item), { custom: "" }), {
												default: withCtx(({ active, ...slotProps }) => [createVNode(unref(DropdownMenu).Item, {
													"as-child": "",
													disabled: item.disabled,
													"text-value": unref(get)(item, props.labelKey),
													onSelect: item.onSelect
												}, {
													default: withCtx(() => [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
														"data-slot": "item",
														class: __props.ui.item({
															class: [
																__props.uiOverride?.item,
																item.ui?.item,
																item.class
															],
															color: item?.color,
															active
														})
													}), {
														default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
															item,
															active,
															index
														}, null, 8, [
															"item",
															"active",
															"index"
														])]),
														_: 2
													}, 1040, ["class"])]),
													_: 2
												}, 1032, [
													"disabled",
													"text-value",
													"onSelect"
												])]),
												_: 2
											}, 1040))], 64);
										}), 128))]),
										_: 2
									}, 1032, ["class"]);
								}), 128))], 2)) : createCommentVNode("", true),
								searchTerm.value && !hasFilteredItems.value ? (openBlock(), createBlock("div", {
									key: 2,
									"data-slot": "empty",
									class: __props.ui.empty({ class: __props.uiOverride?.empty })
								}, [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value })), 1)])], 2)) : createCommentVNode("", true),
								renderSlot(_ctx.$slots, "default"),
								renderSlot(_ctx.$slots, "content-bottom", { sub: __props.sub ?? false })
							]),
							_: 3
						}, 16, ["class"]))]),
						_: 3
					})];
				}),
				_: 3
			}, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fdropdown-menu.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fdropdown_menu_default = {
	"slots": {
		"content": "min-w-32 max-h-(--reka-dropdown-menu-content-available-height) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)] origin-(--reka-dropdown-menu-content-transform-origin) flex flex-col",
		"input": "border-b border-default",
		"empty": "text-center text-muted",
		"viewport": "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1",
		"arrow": "fill-bg stroke-default",
		"group": "p-1 isolate",
		"label": "w-full flex items-center font-semibold text-highlighted",
		"separator": "-mx-1 my-1 h-px bg-border",
		"item": "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
		"itemLeadingIcon": "shrink-0",
		"itemLeadingAvatar": "shrink-0",
		"itemLeadingAvatarSize": "",
		"itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
		"itemTrailingIcon": "shrink-0",
		"itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0",
		"itemTrailingKbdsSize": "",
		"itemWrapper": "flex-1 flex flex-col text-start min-w-0",
		"itemLabel": "truncate",
		"itemDescription": "truncate text-muted",
		"itemLabelExternalIcon": "inline-block size-3 align-top text-dimmed"
	},
	"variants": {
		"color": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"active": {
			"true": {
				"item": "text-highlighted before:bg-elevated",
				"itemLeadingIcon": "text-default"
			},
			"false": {
				"item": ["text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50", "transition-colors before:transition-colors"],
				"itemLeadingIcon": ["text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default", "transition-colors"]
			}
		},
		"loading": { "true": { "itemLeadingIcon": "animate-spin" } },
		"size": {
			"xs": {
				"label": "p-1 text-xs gap-1",
				"item": "p-1 text-xs gap-1",
				"empty": "p-2 text-xs",
				"itemLeadingIcon": "size-4",
				"itemLeadingAvatarSize": "3xs",
				"itemTrailingIcon": "size-4",
				"itemTrailingKbds": "gap-0.5",
				"itemTrailingKbdsSize": "sm"
			},
			"sm": {
				"label": "p-1.5 text-xs gap-1.5",
				"item": "p-1.5 text-xs gap-1.5",
				"empty": "p-2.5 text-xs",
				"itemLeadingIcon": "size-4",
				"itemLeadingAvatarSize": "3xs",
				"itemTrailingIcon": "size-4",
				"itemTrailingKbds": "gap-0.5",
				"itemTrailingKbdsSize": "sm"
			},
			"md": {
				"label": "p-1.5 text-sm gap-1.5",
				"item": "p-1.5 text-sm gap-1.5",
				"empty": "p-2.5 text-sm",
				"itemLeadingIcon": "size-5",
				"itemLeadingAvatarSize": "2xs",
				"itemTrailingIcon": "size-5",
				"itemTrailingKbds": "gap-0.5",
				"itemTrailingKbdsSize": "md"
			},
			"lg": {
				"label": "p-2 text-sm gap-2",
				"item": "p-2 text-sm gap-2",
				"empty": "p-3 text-sm",
				"itemLeadingIcon": "size-5",
				"itemLeadingAvatarSize": "2xs",
				"itemTrailingIcon": "size-5",
				"itemTrailingKbds": "gap-1",
				"itemTrailingKbdsSize": "md"
			},
			"xl": {
				"label": "p-2 text-base gap-2",
				"item": "p-2 text-base gap-2",
				"empty": "p-3 text-base",
				"itemLeadingIcon": "size-6",
				"itemLeadingAvatarSize": "xs",
				"itemTrailingIcon": "size-6",
				"itemTrailingKbds": "gap-1",
				"itemTrailingKbdsSize": "lg"
			}
		}
	},
	"compoundVariants": [
		{
			"color": "primary",
			"active": false,
			"class": {
				"item": "text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10",
				"itemLeadingIcon": "text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary"
			}
		},
		{
			"color": "secondary",
			"active": false,
			"class": {
				"item": "text-secondary data-highlighted:text-secondary data-highlighted:before:bg-secondary/10 data-[state=open]:before:bg-secondary/10",
				"itemLeadingIcon": "text-secondary/75 group-data-highlighted:text-secondary group-data-[state=open]:text-secondary"
			}
		},
		{
			"color": "success",
			"active": false,
			"class": {
				"item": "text-success data-highlighted:text-success data-highlighted:before:bg-success/10 data-[state=open]:before:bg-success/10",
				"itemLeadingIcon": "text-success/75 group-data-highlighted:text-success group-data-[state=open]:text-success"
			}
		},
		{
			"color": "info",
			"active": false,
			"class": {
				"item": "text-info data-highlighted:text-info data-highlighted:before:bg-info/10 data-[state=open]:before:bg-info/10",
				"itemLeadingIcon": "text-info/75 group-data-highlighted:text-info group-data-[state=open]:text-info"
			}
		},
		{
			"color": "warning",
			"active": false,
			"class": {
				"item": "text-warning data-highlighted:text-warning data-highlighted:before:bg-warning/10 data-[state=open]:before:bg-warning/10",
				"itemLeadingIcon": "text-warning/75 group-data-highlighted:text-warning group-data-[state=open]:text-warning"
			}
		},
		{
			"color": "error",
			"active": false,
			"class": {
				"item": "text-error data-highlighted:text-error data-highlighted:before:bg-error/10 data-[state=open]:before:bg-error/10",
				"itemLeadingIcon": "text-error/75 group-data-highlighted:text-error group-data-[state=open]:text-error"
			}
		},
		{
			"color": "primary",
			"active": true,
			"class": {
				"item": "text-primary before:bg-primary/10",
				"itemLeadingIcon": "text-primary"
			}
		},
		{
			"color": "secondary",
			"active": true,
			"class": {
				"item": "text-secondary before:bg-secondary/10",
				"itemLeadingIcon": "text-secondary"
			}
		},
		{
			"color": "success",
			"active": true,
			"class": {
				"item": "text-success before:bg-success/10",
				"itemLeadingIcon": "text-success"
			}
		},
		{
			"color": "info",
			"active": true,
			"class": {
				"item": "text-info before:bg-info/10",
				"itemLeadingIcon": "text-info"
			}
		},
		{
			"color": "warning",
			"active": true,
			"class": {
				"item": "text-warning before:bg-warning/10",
				"itemLeadingIcon": "text-warning"
			}
		},
		{
			"color": "error",
			"active": true,
			"class": {
				"item": "text-error before:bg-error/10",
				"itemLeadingIcon": "text-error"
			}
		}
	],
	"defaultVariants": { "size": "md" }
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue
var _sfc_main = {
	__name: "UDropdownMenu",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({
		size: {
			type: null,
			required: false
		},
		items: {
			type: null,
			required: false
		},
		checkedIcon: {
			type: null,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		},
		externalIcon: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
		},
		content: {
			type: Object,
			required: false
		},
		arrow: {
			type: [Boolean, Object],
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
		},
		labelKey: {
			type: null,
			required: false,
			default: "label"
		},
		descriptionKey: {
			type: null,
			required: false,
			default: "description"
		},
		filter: {
			type: [Boolean, Object],
			required: false,
			default: false
		},
		filterFields: {
			type: Array,
			required: false
		},
		ignoreFilter: {
			type: Boolean,
			required: false,
			default: false
		},
		disabled: {
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
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		modal: {
			type: Boolean,
			required: false,
			default: true
		}
	}, {
		"searchTerm": {
			type: String,
			default: ""
		},
		"searchTermModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["update:open"], ["update:searchTerm"]),
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const searchTerm = useModel(__props, "searchTerm", {
			type: String,
			default: ""
		});
		const props = useComponentProps("dropdownMenu", _props);
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "defaultOpen", "open", "modal"), emits);
		const contentProps = toRef(() => defu(props.content, {
			side: "bottom",
			sideOffset: 8,
			collisionPadding: 8
		}));
		const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
		const getProxySlots = () => omit(slots, ["default"]);
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fdropdown_menu_default,
			...appConfig.ui?.dropdownMenu || {}
		})({ size: props.size }));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuRoot_default), mergeProps(unref(rootProps), _attrs), {
				default: withCtx(({ open }, _push, _parent, _scopeId) => {
					if (_push) {
						if (!!slots.default) _push(ssrRenderComponent(unref(DropdownMenuTrigger_default), {
							"as-child": "",
							class: unref(props).class,
							disabled: unref(props).disabled
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "default", { open })];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(ssrRenderComponent(_sfc_main$1, mergeProps({
							"search-term": searchTerm.value,
							"onUpdate:searchTerm": ($event) => searchTerm.value = $event,
							class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] }),
							ui: ui.value,
							"ui-override": unref(props).ui
						}, contentProps.value, {
							items: unref(props).items,
							portal: unref(props).portal,
							"label-key": unref(props).labelKey,
							"description-key": unref(props).descriptionKey,
							"checked-icon": unref(props).checkedIcon,
							"loading-icon": unref(props).loadingIcon,
							"external-icon": unref(props).externalIcon,
							size: unref(props).size,
							filter: unref(props).filter,
							"filter-fields": unref(props).filterFields,
							"ignore-filter": unref(props).ignoreFilter
						}), createSlots({
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (!!unref(props).arrow) _push(ssrRenderComponent(unref(DropdownMenuArrow_default), mergeProps(arrowProps.value, {
										"data-slot": "arrow",
										class: ui.value.arrow({ class: unref(props).ui?.arrow })
									}), null, _parent, _scopeId));
									else _push(`<!---->`);
								} else return [!!unref(props).arrow ? (openBlock(), createBlock(unref(DropdownMenuArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
									"data-slot": "arrow",
									class: ui.value.arrow({ class: unref(props).ui?.arrow })
								}), null, 16, ["class"])) : createCommentVNode("", true)];
							}),
							_: 2
						}, [renderList(getProxySlots(), (_, name) => {
							return {
								name,
								fn: withCtx((slotData, _push, _parent, _scopeId) => {
									if (_push) ssrRenderSlot(_ctx.$slots, name, slotData, null, _push, _parent, _scopeId);
									else return [renderSlot(_ctx.$slots, name, slotData)];
								})
							};
						})]), _parent, _scopeId));
					} else return [!!slots.default ? (openBlock(), createBlock(unref(DropdownMenuTrigger_default), {
						key: 0,
						"as-child": "",
						class: unref(props).class,
						disabled: unref(props).disabled
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open })]),
						_: 2
					}, 1032, ["class", "disabled"])) : createCommentVNode("", true), createVNode(_sfc_main$1, mergeProps({
						"search-term": searchTerm.value,
						"onUpdate:searchTerm": ($event) => searchTerm.value = $event,
						class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] }),
						ui: ui.value,
						"ui-override": unref(props).ui
					}, contentProps.value, {
						items: unref(props).items,
						portal: unref(props).portal,
						"label-key": unref(props).labelKey,
						"description-key": unref(props).descriptionKey,
						"checked-icon": unref(props).checkedIcon,
						"loading-icon": unref(props).loadingIcon,
						"external-icon": unref(props).externalIcon,
						size: unref(props).size,
						filter: unref(props).filter,
						"filter-fields": unref(props).filterFields,
						"ignore-filter": unref(props).ignoreFilter
					}), createSlots({
						default: withCtx(() => [!!unref(props).arrow ? (openBlock(), createBlock(unref(DropdownMenuArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
							"data-slot": "arrow",
							class: ui.value.arrow({ class: unref(props).ui?.arrow })
						}), null, 16, ["class"])) : createCommentVNode("", true)]),
						_: 2
					}, [renderList(getProxySlots(), (_, name) => {
						return {
							name,
							fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, slotData)])
						};
					})]), 1040, [
						"search-term",
						"onUpdate:searchTerm",
						"class",
						"ui",
						"ui-override",
						"items",
						"portal",
						"label-key",
						"description-key",
						"checked-icon",
						"loading-icon",
						"external-icon",
						"size",
						"filter",
						"filter-fields",
						"ignore-filter"
					])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$2 as a };

import { u as useSeoMeta$1 } from '../virtual/entry.mjs';
import { a as _sfc_main$5 } from './Button-D5UK4P4A.mjs';
import { u as useLazyFetch } from './fetch-DUhcUvKg.mjs';
import { _ as _sfc_main } from './Container-CLUPcRvH.mjs';
import { u as useCall } from './useCall-hlJkbtsS.mjs';
import { _ as _sfc_main$1 } from './Breadcrumb-D1-Ungc1.mjs';
import { _ as _sfc_main$2 } from './PageSection-CzcsSky6.mjs';
import { _ as _sfc_main$3 } from './PricingPlan-g40oX2Te.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../nitro/nitro.mjs';
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
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import 'unhead/utils';
import './components-DTuZdOqa.mjs';
import './asyncData-D2HMHIUX.mjs';
import '@iconify/utils/lib/css/icon';
import './nuxt-link-By4uHnr8.mjs';
import '@vueuse/core';
import 'tailwind-variants';
import '@vue/shared';
import 'fnv1a-64';
import 'object-identity';
import './state-CjjX6iZP.mjs';
import './useLocale-Cji6XXXY.mjs';
import './usePrefix-wIR1GMpN.mjs';
import './Badge-Cz_GlsYG.mjs';

//#region app/pages/directions/from-ufa.vue?vue&type=script&setup=true&lang.ts
var from_ufa_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "from-ufa",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const items = ref([
			{
				label: "Главная",
				to: "/"
			},
			{
				label: "Все направления",
				to: "/directions"
			},
			{ label: "Из Уфы" }
		]);
		useSeoMeta$1({
			title: "Такси Экспресс | направление из Уфы в города Башкортостана",
			description: "Такси из Уфы | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
			ogTitle: "Такси Экспресс | направление из Уфы в города Башкортостана",
			ogDescription: "Такси из Уфы | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
			ogUrl: "https://taxi-express.su/directions/from-ufa",
			ogType: "website",
			ogLocale: "ru_RU",
			twitterCard: "summary_large_image"
		});
		const directions = ref([]);
		[__temp, __restore] = withAsyncContext(() => useLazyFetch("/api/direction/all", {
			key: "directions",
			method: "GET"
		}, "$lDVnstU0iG").then(({ data }) => {
			if (data.value) directions.value = data.value;
		})), await __temp, __restore();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UContainer = _sfc_main;
			const _component_UBreadcrumb = _sfc_main$1;
			const _component_UPageSection = _sfc_main$2;
			const _component_UIcon = _sfc_main$5;
			const _component_UPricingPlan = _sfc_main$3;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "directions-page" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_UContainer, { class: "pt-10" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_UBreadcrumb, {
						items: unref(items),
						ui: {
							link: "text-white hover:text-primary",
							separatorIcon: "text-white"
						}
					}, null, _parent, _scopeId));
					else return [createVNode(_component_UBreadcrumb, {
						items: unref(items),
						ui: {
							link: "text-white hover:text-primary",
							separatorIcon: "text-white"
						}
					}, null, 8, ["items"])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_UPageSection, {
				title: "Из Уфы",
				description: "до крупных городов Башкортостана",
				orientation: "horizontal",
				ui: {
					title: "text-primary tracking-wider",
					description: "text-white",
					container: "pb-5 sm:pb-5 lg:pb-5 pt-10 sm:pt-10 lg:pt-10",
					wrapper: "text-white flex flex-col justify-start items-start gap-5 h-full w-full",
					links: "w-full flex flex-col justify-center items-center gap-5",
					footer: "w-full",
					features: "text-white"
				}
			}, null, _parent));
			_push(ssrRenderComponent(_component_UContainer, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex flex-row gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-info" }, null, _parent, _scopeId));
						_push(`<div${_scopeId}><p class="text-white text-sm pb-1"${_scopeId}> Основные направления нашего такси, по ним ежедневно едут маршруты с опытными водителями со стажем от 7 - 10 лет. </p><p class="text-white text-sm pb-1"${_scopeId}>Предоставляем отчетные документы, билеты, qr-коды. а также осуществляем перевозки и доставки посылок и документации. </p><p class="text-white text-sm pb-5"${_scopeId}>Дополнительную информацию вы можете уточнить у диспетчера...</p></div></div><h2 class="text-primary text-2xl py-10 text-center"${_scopeId}>Круглосуточный прием заказов</h2><div class="w-full flex flex-col justify-center items-center gap-10"${_scopeId}><!--[-->`);
						ssrRenderList(unref(directions), (direction) => {
							_push(ssrRenderComponent(_component_UPricingPlan, {
								orientation: "horizontal",
								class: "p-10 bg-linear-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] w-full",
								title: `Уфа - ${direction.name}`,
								description: "Заказ возможен в обоих направлениях",
								price: `от ${direction.price} руб.`,
								features: [
									`${direction.distance} км - всего ${(direction.price / direction.distance).toFixed(0)} руб. за км`,
									`Доставим за ${direction.time}`,
									"Билеты, отчётные документы, qr-коды",
									"Передача документации и посылок"
								],
								ui: {
									root: "ring-0 item-direction",
									title: "text-primary title",
									description: "text-white",
									price: "text-primary",
									featureTitle: "text-white",
									button: "button-gradient"
								},
								button: {
									label: "Позвонить",
									trailingIcon: "i-lucide-phone",
									onClick: () => ("useCall" in _ctx ? _ctx.useCall : unref(useCall))().toCall("+79177666833")
								}
							}, null, _parent, _scopeId));
						});
						_push(`<!--]--><p class="text-sm text-gray-400 text-center mb-10"${_scopeId}>* требуется дополнительная оплата</p></div>`);
					} else return [
						createVNode("div", { class: "flex flex-row gap-3" }, [createVNode(_component_UIcon, { name: "i-lucide-info" }), createVNode("div", null, [
							createVNode("p", { class: "text-white text-sm pb-1" }, " Основные направления нашего такси, по ним ежедневно едут маршруты с опытными водителями со стажем от 7 - 10 лет. "),
							createVNode("p", { class: "text-white text-sm pb-1" }, "Предоставляем отчетные документы, билеты, qr-коды. а также осуществляем перевозки и доставки посылок и документации. "),
							createVNode("p", { class: "text-white text-sm pb-5" }, "Дополнительную информацию вы можете уточнить у диспетчера...")
						])]),
						createVNode("h2", { class: "text-primary text-2xl py-10 text-center" }, "Круглосуточный прием заказов"),
						createVNode("div", { class: "w-full flex flex-col justify-center items-center gap-10" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(directions), (direction) => {
							return openBlock(), createBlock(_component_UPricingPlan, {
								orientation: "horizontal",
								class: "p-10 bg-linear-to-r from-gray-600/30 to-gray-700/30 backdrop-blur-[5px] w-full",
								title: `Уфа - ${direction.name}`,
								description: "Заказ возможен в обоих направлениях",
								price: `от ${direction.price} руб.`,
								features: [
									`${direction.distance} км - всего ${(direction.price / direction.distance).toFixed(0)} руб. за км`,
									`Доставим за ${direction.time}`,
									"Билеты, отчётные документы, qr-коды",
									"Передача документации и посылок"
								],
								ui: {
									root: "ring-0 item-direction",
									title: "text-primary title",
									description: "text-white",
									price: "text-primary",
									featureTitle: "text-white",
									button: "button-gradient"
								},
								button: {
									label: "Позвонить",
									trailingIcon: "i-lucide-phone",
									onClick: () => ("useCall" in _ctx ? _ctx.useCall : unref(useCall))().toCall("+79177666833")
								}
							}, null, 8, [
								"title",
								"price",
								"features",
								"button"
							]);
						}), 256)), createVNode("p", { class: "text-sm text-gray-400 text-center mb-10" }, "* требуется дополнительная оплата")])
					];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/pages/directions/from-ufa.vue
var _sfc_setup = from_ufa_vue_vue_type_script_setup_true_lang_default.setup;
from_ufa_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/directions/from-ufa.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var from_ufa_default = from_ufa_vue_vue_type_script_setup_true_lang_default;

export { from_ufa_default as default };

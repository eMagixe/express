import { u as useSeoMeta$1 } from '../virtual/entry.mjs';
import { c as create_default } from './create-BdifaX9k.mjs';
import { u as useLazyFetch } from './fetch-DUhcUvKg.mjs';
import { _ as _sfc_main } from './Container-CLUPcRvH.mjs';
import { _ as _sfc_main$1 } from './Breadcrumb-D1-Ungc1.mjs';
import { _ as _sfc_main$2 } from './PageSection-CzcsSky6.mjs';
import { defineComponent, ref, withAsyncContext, computed, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './nuxt-link-By4uHnr8.mjs';
import './useFilter-BDnhBvLL.mjs';
import './Button-D5UK4P4A.mjs';
import './components-DTuZdOqa.mjs';
import './asyncData-D2HMHIUX.mjs';
import '@iconify/utils/lib/css/icon';
import '@vueuse/core';
import 'tailwind-variants';
import './overlay-CnuoVSfw.mjs';
import './useForwardExpose-lTVrimVg.mjs';
import '@vueuse/shared';
import 'aria-hidden';
import './Collection-CMR0dnYu.mjs';
import '@internationalized/date';
import '@tanstack/vue-virtual';
import '@floating-ui/vue';
import './Popover-reAmjTCC.mjs';
import './FormField-B9FP6L9G.mjs';
import './title-pte2Tibk.mjs';
import './Input-BoJ6XMWD.mjs';
import './useLocale-Cji6XXXY.mjs';
import './useToast-DbOihFhv.mjs';
import './state-CjjX6iZP.mjs';
import './useCall-BiDssLem.mjs';
import 'maska/vue';
import 'valibot';
import '@vue/shared';
import 'fnv1a-64';
import 'object-identity';
import './usePrefix-wIR1GMpN.mjs';

//#region app/pages/directions/salavat-ufa.vue?vue&type=script&setup=true&lang.ts
var salavat_ufa_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "salavat-ufa",
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
			{ label: "Салават - Уфа" }
		]);
		ref([
			{
				title: "Расстояние",
				description: "163 км",
				icon: "i-lucide-arrow-right-left"
			},
			{
				title: "Расчетное время в пути",
				description: "~ 2 часа 30 мин",
				icon: "i-lucide-clock"
			},
			{
				title: "Стоимость",
				description: "от 1200 руб *",
				icon: "i-lucide-receipt-russian-ruble"
			}
		]);
		useSeoMeta$1({
			title: "Такси Экспресс | направление из Салавата в Уфу",
			description: "Такси Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
			ogTitle: "Такси Экспресс | направление из Салавата в Уфу",
			ogDescription: "Такси Салават - Уфа | Такси Express - быстро, комфортно и надежно. Закажите такси онлайн и наслаждайтесь поездкой!",
			ogUrl: "https://taxi-express.su/directions/salavat-ufa",
			ogType: "website",
			ogLocale: "ru_RU",
			twitterCard: "summary_large_image"
		});
		const directions = ref([]);
		[__temp, __restore] = withAsyncContext(() => useLazyFetch("/api/direction/all", {
			key: "directions",
			method: "GET"
		}, "$aX9OEP9rsq").then(({ data }) => {
			if (data.value) directions.value = data.value;
		})), await __temp, __restore();
		const direction = computed(() => {
			const [current] = directions.value.filter((direction) => {
				return direction.slug === "salavat-ufa";
			});
			if (current) {
				current.features = [
					{
						title: "Расстояние",
						description: `${current.distance} км`,
						icon: "i-lucide-arrow-right-left"
					},
					{
						title: "Расчетное время в пути",
						description: current.time,
						icon: "i-lucide-clock"
					},
					{
						title: "Стоимость",
						description: `от ${current.price} руб *`,
						icon: "i-lucide-receipt-russian-ruble"
					}
				];
				return current;
			} else return null;
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UContainer = _sfc_main;
			const _component_UBreadcrumb = _sfc_main$1;
			const _component_UPageSection = _sfc_main$2;
			const _component_OrderCreate = create_default;
			if (unref(direction)) {
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
					title: unref(direction).name,
					description: unref(direction).description,
					orientation: "horizontal",
					features: unref(direction).features,
					ui: {
						title: "text-primary tracking-wider",
						description: "text-white",
						container: "py-10 sm:py-10 lg:py-10",
						wrapper: "text-white flex flex-col justify-start items-start gap-5 h-full w-full",
						links: "w-full flex flex-col justify-center items-center gap-5",
						footer: "w-full",
						features: "text-white"
					}
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d740479.3925558841!2d55.03231519424448!3d54.001191569699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x43d7fffbafa7009d%3A0x56073e4216dfddeb!2z0KHQsNC70LDQstCw0YIsINCg0LXRgdC_LiDQkdCw0YjQutC-0YDRgtC-0YHRgtCw0L0!3m2!1d53.386043699999995!2d55.925947199999996!4m5!1s0x43d93a259216bce1%3A0xaceec0921eda92cc!2z0KPRhNCwLCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d54.734790999999994!2d55.9578555!5e0!3m2!1sru!2sru!4v1771932003232!5m2!1sru!2sru" class="w-full h-full min-h-100 rounded-lg" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${_scopeId}></iframe>`);
						else return [createVNode("iframe", {
							src: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d740479.3925558841!2d55.03231519424448!3d54.001191569699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x43d7fffbafa7009d%3A0x56073e4216dfddeb!2z0KHQsNC70LDQstCw0YIsINCg0LXRgdC_LiDQkdCw0YjQutC-0YDRgtC-0YHRgtCw0L0!3m2!1d53.386043699999995!2d55.925947199999996!4m5!1s0x43d93a259216bce1%3A0xaceec0921eda92cc!2z0KPRhNCwLCDQoNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9!3m2!1d54.734790999999994!2d55.9578555!5e0!3m2!1sru!2sru!4v1771932003232!5m2!1sru!2sru",
							class: "w-full h-full min-h-100 rounded-lg",
							loading: "lazy",
							referrerpolicy: "no-referrer-when-downgrade"
						})];
					}),
					_: 1
				}, _parent));
				_push(ssrRenderComponent(_component_UContainer, null, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(_component_OrderCreate, {
							direction: true,
							from: "Салават",
							to: "Уфа"
						}, null, _parent, _scopeId));
						else return [createVNode(_component_OrderCreate, {
							direction: true,
							from: "Салават",
							to: "Уфа"
						})];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
		};
	}
});
//#endregion
//#region app/pages/directions/salavat-ufa.vue
var _sfc_setup = salavat_ufa_vue_vue_type_script_setup_true_lang_default.setup;
salavat_ufa_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/directions/salavat-ufa.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var salavat_ufa_default = salavat_ufa_vue_vue_type_script_setup_true_lang_default;

export { salavat_ufa_default as default };

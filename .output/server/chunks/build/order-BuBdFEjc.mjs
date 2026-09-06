import { _ as _plugin_vue_export_helper_default, i as useRuntimeConfig } from '../virtual/entry.mjs';
import { c as create_default } from './create-DlncQjEZ.mjs';
import { _ as _sfc_main } from './Container-D6wH7HZZ.mjs';
import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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
import './nuxt-link-DBlEMESS.mjs';
import './useFilter-4Slx_Anp.mjs';
import './Button-Cn6n7Ulk.mjs';
import './components-CEYKtFqx.mjs';
import './asyncData-D23YQ4Dm.mjs';
import '@iconify/utils/lib/css/icon';
import '@vueuse/core';
import 'tailwind-variants';
import './overlay-Dn203DW_.mjs';
import './useForwardExpose-lTVrimVg.mjs';
import '@vueuse/shared';
import 'aria-hidden';
import './Collection-BHq5nCg7.mjs';
import '@internationalized/date';
import '@tanstack/vue-virtual';
import '@floating-ui/vue';
import './Popover-CYY4RrA5.mjs';
import './FormField-L82dJET-.mjs';
import './title-pte2Tibk.mjs';
import './Input-CIZ2z4xB.mjs';
import './useLocale-Da6kM5uy.mjs';
import './useToast-G9UjyR3Z.mjs';
import './state-DyBHau4b.mjs';
import './useCall-Dj6MvIIm.mjs';
import 'maska/vue';
import 'valibot';

//#region app/components/section/order.vue?vue&type=script&setup=true&lang.ts
var order_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "order",
	__ssrInlineRender: true,
	setup(__props) {
		const config = useRuntimeConfig();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UContainer = _sfc_main;
			const _component_OrderCreate = create_default;
			if (unref(config).public.orderVisible) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "section-order w-full mx-auto h-auto py-5 border-b border-b-[#0A0B08]" }, _attrs))} data-v-0ab721c1>`);
				_push(ssrRenderComponent(_component_UContainer, { class: "flex animation-box flex-col justify-center items-center gap-5" }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(_component_OrderCreate, null, null, _parent, _scopeId));
						else return [createVNode(_component_OrderCreate)];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
		};
	}
});
//#endregion
//#region app/components/section/order.vue
var _sfc_setup = order_vue_vue_type_script_setup_true_lang_default.setup;
order_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/order.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var order_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(order_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-0ab721c1"]]), { __name: "SectionOrder" });

export { order_default as default };

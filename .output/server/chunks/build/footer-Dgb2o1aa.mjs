import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { b as _sfc_main$5 } from './Button-Cn6n7Ulk.mjs';
import { n as logo_default } from './default-MWEyk3AA.mjs';
import { mergeProps, useSSRContext } from 'vue';
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
import './components-CEYKtFqx.mjs';
import './asyncData-D23YQ4Dm.mjs';
import '@iconify/utils/lib/css/icon';
import './nuxt-link-DBlEMESS.mjs';
import '@vueuse/core';
import 'tailwind-variants';
import './overlay-Dn203DW_.mjs';
import './useForwardExpose-lTVrimVg.mjs';
import '@vueuse/shared';
import 'aria-hidden';
import './Collection-BHq5nCg7.mjs';
import './Modal-DCnjX90t.mjs';
import './useLocale-Da6kM5uy.mjs';
import './Slideover-BH9ah5wz.mjs';
import './Container-D6wH7HZZ.mjs';
import './useToast-G9UjyR3Z.mjs';
import './state-DyBHau4b.mjs';
import './useCall-Dj6MvIIm.mjs';
import './Drawer-Bp0mVmZt.mjs';
import 'vaul-vue';

//#region app/components/section/footer.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_Logo = logo_default;
	const _component_UIcon = _sfc_main$5;
	_push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full justify-end items-center gap-5 sm:gap-2 pt-5" }, _attrs))}><div class="h-14">`);
	_push(ssrRenderComponent(_component_Logo, null, null, _parent));
	_push(`</div><div class="flex flex-col sm:flex-row justify-center text-center p-5 gap-5 sm:gap-10 text-[#FFCC00] text-[24px] italic"><a>`);
	_push(ssrRenderComponent(_component_UIcon, {
		name: "i-lucide-phone",
		size: "18"
	}, null, _parent));
	_push(` +7 (917) 766-68-33 </a><a>`);
	_push(ssrRenderComponent(_component_UIcon, {
		name: "i-lucide-phone",
		size: "18"
	}, null, _parent));
	_push(` +7 (927) 324-25-82 </a></div></footer>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/footer.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var footer_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "SectionFooter" });

export { footer_default as default };

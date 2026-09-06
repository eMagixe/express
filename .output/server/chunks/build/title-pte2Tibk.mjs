import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/section/title.vue?vue&type=script&setup=true&lang.ts
var title_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "title",
	__ssrInlineRender: true,
	props: { title: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<h2${ssrRenderAttrs(mergeProps({ class: "w-full text-[clamp(1.25rem,3vw,3rem)] text-center" }, _attrs))}>${ssrInterpolate(__props.title)}</h2>`);
		};
	}
});
//#endregion
//#region app/components/section/title.vue
var _sfc_setup = title_vue_vue_type_script_setup_true_lang_default.setup;
title_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/title.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var title_default = Object.assign(title_vue_vue_type_script_setup_true_lang_default, { __name: "SectionTitle" });

export { title_default as t };

import { n as navigateTo } from '../virtual/entry.mjs';
import { _ as _sfc_main$4 } from './Button-D5UK4P4A.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './FormField-B9FP6L9G.mjs';
import { _ as _sfc_main } from './Container-CLUPcRvH.mjs';
import { _ as _sfc_main$3 } from './Input-BoJ6XMWD.mjs';
import { u as useToast } from './useToast-DbOihFhv.mjs';
import { u as useAuth } from './useAuth-B-M6IXMu.mjs';
import { defineComponent, reactive, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import * as v from 'valibot';
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
import './useForwardExpose-lTVrimVg.mjs';
import './state-CjjX6iZP.mjs';

//#region app/pages/dashboard/login.vue?vue&type=script&setup=true&lang.ts
var login_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "login",
	__ssrInlineRender: true,
	setup(__props) {
		const auth = useAuth();
		const schema = v.object({
			email: v.pipe(v.string(), v.email("Invalid email")),
			password: v.pipe(v.string(), v.minLength(6, "Must be at least 6 characters"))
		});
		const form = reactive({
			email: "",
			password: ""
		});
		const onSubmit = async () => {
			const toast = useToast();
			try {
				await auth.login(form.email, form.password).then(() => {
					toast.add({
						title: "Выполнено",
						description: "Вход успешно выполнен.",
						color: "success"
					});
					navigateTo("/dashboard");
				});
			} catch {
				toast.add({
					title: "Ошибка",
					description: "Неверный email или пароль.",
					color: "error"
				});
			}
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UContainer = _sfc_main;
			const _component_UForm = _sfc_main$1;
			const _component_UFormField = _sfc_main$2;
			const _component_UInput = _sfc_main$3;
			const _component_UButton = _sfc_main$4;
			_push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "flex flex-col gap-2 items-center justify-center h-screen p-10" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_UForm, {
						schema: unref(schema),
						state: unref(form),
						class: "space-y-4 bg-gray-600/30 p-10 rounded-lg",
						onSubmit
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(_component_UFormField, {
									ui: { label: "text-white" },
									label: "Email",
									name: "email"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_UInput, {
											size: "xl",
											modelValue: unref(form).email,
											"onUpdate:modelValue": ($event) => unref(form).email = $event
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UInput, {
											size: "xl",
											modelValue: unref(form).email,
											"onUpdate:modelValue": ($event) => unref(form).email = $event
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(ssrRenderComponent(_component_UFormField, {
									ui: { label: "text-white" },
									label: "Пароль",
									name: "password"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(_component_UInput, {
											size: "xl",
											modelValue: unref(form).password,
											"onUpdate:modelValue": ($event) => unref(form).password = $event,
											type: "password"
										}, null, _parent, _scopeId));
										else return [createVNode(_component_UInput, {
											size: "xl",
											modelValue: unref(form).password,
											"onUpdate:modelValue": ($event) => unref(form).password = $event,
											type: "password"
										}, null, 8, ["modelValue", "onUpdate:modelValue"])];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(ssrRenderComponent(_component_UButton, {
									size: "xl",
									type: "submit"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(` Войти `);
										else return [createTextVNode(" Войти ")];
									}),
									_: 1
								}, _parent, _scopeId));
							} else return [
								createVNode(_component_UFormField, {
									ui: { label: "text-white" },
									label: "Email",
									name: "email"
								}, {
									default: withCtx(() => [createVNode(_component_UInput, {
										size: "xl",
										modelValue: unref(form).email,
										"onUpdate:modelValue": ($event) => unref(form).email = $event
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}),
								createVNode(_component_UFormField, {
									ui: { label: "text-white" },
									label: "Пароль",
									name: "password"
								}, {
									default: withCtx(() => [createVNode(_component_UInput, {
										size: "xl",
										modelValue: unref(form).password,
										"onUpdate:modelValue": ($event) => unref(form).password = $event,
										type: "password"
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}),
								createVNode(_component_UButton, {
									size: "xl",
									type: "submit"
								}, {
									default: withCtx(() => [createTextVNode(" Войти ")]),
									_: 1
								})
							];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_UForm, {
						schema: unref(schema),
						state: unref(form),
						class: "space-y-4 bg-gray-600/30 p-10 rounded-lg",
						onSubmit
					}, {
						default: withCtx(() => [
							createVNode(_component_UFormField, {
								ui: { label: "text-white" },
								label: "Email",
								name: "email"
							}, {
								default: withCtx(() => [createVNode(_component_UInput, {
									size: "xl",
									modelValue: unref(form).email,
									"onUpdate:modelValue": ($event) => unref(form).email = $event
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}),
							createVNode(_component_UFormField, {
								ui: { label: "text-white" },
								label: "Пароль",
								name: "password"
							}, {
								default: withCtx(() => [createVNode(_component_UInput, {
									size: "xl",
									modelValue: unref(form).password,
									"onUpdate:modelValue": ($event) => unref(form).password = $event,
									type: "password"
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}),
							createVNode(_component_UButton, {
								size: "xl",
								type: "submit"
							}, {
								default: withCtx(() => [createTextVNode(" Войти ")]),
								_: 1
							})
						]),
						_: 1
					}, 8, ["schema", "state"])];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region app/pages/dashboard/login.vue
var _sfc_setup = login_vue_vue_type_script_setup_true_lang_default.setup;
login_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/login.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var login_default = login_vue_vue_type_script_setup_true_lang_default;

export { login_default as default };

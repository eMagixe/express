import { _ as _sfc_main$1 } from './Container-zod5AUW4.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './FormField-BNT_ypeH.mjs';
import { _ as _sfc_main$3 } from './Input-B2jApfVL.mjs';
import { b as _sfc_main$4 } from './Button-NFuoQ1v4.mjs';
import { defineComponent, reactive, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import * as v from 'valibot';
import { u as useAuth } from './useAuth-DtBqJ7yr.mjs';
import { u as useToast } from './useToast-YcMWm34g.mjs';
import { n as navigateTo } from './server.mjs';
import '@vueuse/core';
import './useForwardExpose-C3mVDiKg.mjs';
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
import 'tailwind-variants';
import './index-qAEP9vXy.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-BhQrY2j7.mjs';
import 'perfect-debounce';
import './nuxt-link-DDci5Ary.mjs';
import './state-tqLlnwND.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
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
          toast.add({ title: "Выполнено", description: "Вход успешно выполнен.", color: "success" });
          navigateTo("/dashboard");
        });
      } catch {
        toast.add({ title: "Ошибка", description: "Неверный email или пароль.", color: "error" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_UForm = _sfc_main$1$1;
      const _component_UFormField = _sfc_main$2;
      const _component_UInput = _sfc_main$3;
      const _component_UButton = _sfc_main$4;
      _push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "flex flex-col gap-2 items-center justify-center h-screen p-10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              schema: unref(schema),
              state: unref(form),
              class: "space-y-4 bg-gray-600/30 p-10 rounded-lg",
              onSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormField, {
                    ui: { label: "text-white" },
                    label: "Email",
                    name: "email"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          size: "xl",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            size: "xl",
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormField, {
                    ui: { label: "text-white" },
                    label: "Пароль",
                    name: "password"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          size: "xl",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          type: "password"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            size: "xl",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            type: "password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "xl",
                    type: "submit"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Войти `);
                      } else {
                        return [
                          createTextVNode(" Войти ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UFormField, {
                      ui: { label: "text-white" },
                      label: "Email",
                      name: "email"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          size: "xl",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      ui: { label: "text-white" },
                      label: "Пароль",
                      name: "password"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          size: "xl",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          type: "password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UButton, {
                      size: "xl",
                      type: "submit"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Войти ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UForm, {
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
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        size: "xl",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    ui: { label: "text-white" },
                    label: "Пароль",
                    name: "password"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        size: "xl",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        type: "password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    size: "xl",
                    type: "submit"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Войти ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["schema", "state"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };

import { g as _sfc_main$b, e as useToast, h as __nuxt_component_0, b as _sfc_main$h, t as tv, i as formBusInjectionKey, j as formStateInjectionKey, k as formErrorsInjectionKey, m as formInputsInjectionKey, n as formLoadingInjectionKey, o as formOptionsInjectionKey, p as inputIdInjectionKey, q as formFieldInjectionKey, s as useLocale, v as usePortal, u as useFormField, w as useFieldGroup, c as useComponentIcons, x as isArrayOfArray, r as get, y as compare, _ as _sfc_main$m, d as _sfc_main$k, z as _sfc_main$l, l as looseToNumber, A as getDisplayValue } from './index-DP3LNEV4.mjs';
import { mergeProps, withCtx, createVNode, defineComponent, ref, useTemplateRef, reactive, shallowRef, computed, unref, withDirectives, isRef, createTextVNode, useId, inject, provide, readonly, resolveDynamicComponent, renderSlot, useSlots, watch, toDisplayString, openBlock, createBlock, createCommentVNode, useModel, toRef, withModifiers, Fragment, renderList, mergeModels, toHandlers, toRaw, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderVNode, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { useEventBus, reactivePick, createReusableTemplate, reactiveOmit } from '@vueuse/core';
import { _ as _export_sfc, c as useAppConfig } from './server.mjs';
import { Primitive, Label, useFilter, useForwardPropsEmits, ComboboxItem, ComboboxLabel, ComboboxSeparator, ComboboxItemIndicator, ComboboxRoot, ComboboxAnchor, TagsInputRoot, TagsInputItem, TagsInputItemText, TagsInputItemDelete, ComboboxInput, TagsInputInput, ComboboxTrigger, ComboboxCancel, ComboboxPortal, ComboboxContent, ComboboxEmpty, ComboboxVirtualizer, ComboboxGroup, ComboboxArrow, useForwardProps, CheckboxRoot, CheckboxIndicator } from 'reka-ui';
import { _ as _sfc_main$9 } from './Input-BsagbtTX.mjs';
import { y as defu, B as isEqual } from '../nitro/nitro.mjs';
import { DateRangeField, DateField, HoverCard, Popover, RangeCalendar, Calendar } from 'reka-ui/namespaced';
import { getWeekNumber } from 'reka-ui/date';
import { CalendarDate } from '@internationalized/date';
import { vMaska } from 'maska/vue';
import * as v from 'valibot';
import 'tailwind-variants';
import './index-B6dJa6dm.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
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
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './nuxt-link-Cto9_xmT.mjs';
import 'vaul-vue';

function isSuperStructSchema(schema) {
  return "schema" in schema && typeof schema.coercer === "function" && typeof schema.validator === "function" && typeof schema.refiner === "function";
}
function isStandardSchema(schema) {
  return "~standard" in schema;
}
async function validateStandardSchema(state, schema) {
  const result = await schema["~standard"].validate(state);
  if (result.issues) {
    return {
      errors: result.issues?.map((issue) => ({
        name: issue.path?.map((item) => typeof item === "object" ? item.key : item).join(".") || "",
        message: issue.message
      })) || [],
      result: null
    };
  }
  return {
    errors: null,
    result: result.value
  };
}
async function validateSuperstructSchema(state, schema) {
  const [err, result] = schema.validate(state);
  if (err) {
    const errors = err.failures().map((error) => ({
      message: error.message,
      name: error.path.join(".")
    }));
    return {
      errors,
      result: null
    };
  }
  return {
    errors: null,
    result
  };
}
function validateSchema(state, schema) {
  if (isStandardSchema(schema)) {
    return validateStandardSchema(state, schema);
  } else if (isSuperStructSchema(schema)) {
    return validateSuperstructSchema(state, schema);
  } else {
    throw new Error("Form validation failed: Unsupported form schema");
  }
}
function getAtPath(data, path) {
  if (!path) return data;
  const value = path.split(".").reduce(
    (value2, key) => value2?.[key],
    data
  );
  return value;
}
function setAtPath(data, path, value) {
  if (!path) return Object.assign(data, value);
  if (!data) return data;
  const keys = path.split(".");
  let current = data;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (current[key] === void 0 || current[key] === null) {
      if (i + 1 < keys.length && !Number.isNaN(Number(keys[i + 1]))) {
        current[key] = [];
      } else {
        current[key] = {};
      }
    }
    current = current[key];
  }
  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;
  return data;
}
class FormValidationException extends Error {
  formId;
  errors;
  constructor(formId, errors) {
    super("Form validation exception");
    this.formId = formId;
    this.errors = errors;
    Object.setPrototypeOf(this, FormValidationException.prototype);
  }
}
const theme$6 = {
  "base": ""
};
const _sfc_main$8 = {
  __name: "UForm",
  __ssrInlineRender: true,
  props: {
    id: { type: [String, Number], required: false },
    schema: { type: null, required: false },
    state: { type: null, required: false },
    validate: { type: Function, required: false },
    validateOn: { type: Array, required: false, default() {
      return ["input", "blur", "change"];
    } },
    disabled: { type: Boolean, required: false },
    name: { type: null, required: false },
    validateOnInputDelay: { type: Number, required: false, default: 300 },
    transform: { type: null, required: false, default: () => true },
    nested: { type: Boolean, required: false },
    loadingAuto: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    onSubmit: { type: Function, required: false }
  },
  emits: ["submit", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$6), ...appConfig.ui?.form || {} }));
    const formId = props.id ?? useId();
    const bus = useEventBus(`form-${formId}`);
    const parentBus = props.nested === true && inject(
      formBusInjectionKey,
      void 0
    );
    const parentState = props.nested === true ? inject(formStateInjectionKey, void 0) : void 0;
    const state = computed(() => {
      if (parentState?.value) {
        return props.name ? getAtPath(parentState.value, props.name) : parentState.value;
      }
      return props.state;
    });
    provide(formBusInjectionKey, bus);
    provide(formStateInjectionKey, state);
    const nestedForms = ref(/* @__PURE__ */ new Map());
    const errors = ref([]);
    provide(formErrorsInjectionKey, errors);
    const inputs = ref({});
    provide(formInputsInjectionKey, inputs);
    const dirtyFields = reactive(/* @__PURE__ */ new Set());
    const touchedFields = reactive(/* @__PURE__ */ new Set());
    const blurredFields = reactive(/* @__PURE__ */ new Set());
    function resolveErrorIds(errs) {
      return errs.map((err) => ({
        ...err,
        id: err?.name ? inputs.value[err.name]?.id : void 0
      }));
    }
    const transformedState = ref(null);
    async function getErrors() {
      let errs = props.validate ? await props.validate(state.value) ?? [] : [];
      if (props.schema) {
        const { errors: errors2, result } = await validateSchema(state.value, props.schema);
        if (errors2) {
          errs = errs.concat(errors2);
        } else {
          transformedState.value = result;
        }
      }
      return resolveErrorIds(errs);
    }
    async function _validate(opts = { silent: false, nested: false, transform: false }) {
      const names = opts.name && !Array.isArray(opts.name) ? [opts.name] : opts.name;
      let nestedResults = [];
      let nestedErrors = [];
      if (!names && opts.nested) {
        const validations = Array.from(nestedForms.value.values()).map(
          (form) => validateNestedForm(form, opts)
        );
        const results = await Promise.all(validations);
        nestedErrors = results.filter((r) => r.error).flatMap((r) => r.error.errors.map((e) => addFormPath(e, r.name)));
        nestedResults = results.filter((r) => r.output !== void 0);
      }
      const currentErrors = await getErrors();
      const allErrors = [...currentErrors, ...nestedErrors];
      if (names) {
        errors.value = filterErrorsByNames(allErrors, names);
      } else {
        errors.value = allErrors;
      }
      if (errors.value?.length) {
        if (opts.silent) return false;
        throw new FormValidationException(formId, errors.value);
      }
      if (opts.transform) {
        nestedResults.forEach((result) => {
          if (result.name) {
            setAtPath(transformedState.value, result.name, result.output);
          } else {
            Object.assign(transformedState.value, result.output);
          }
        });
        return transformedState.value ?? state.value;
      }
      return state.value;
    }
    const loading = ref(false);
    provide(formLoadingInjectionKey, readonly(loading));
    async function onSubmitWrapper(payload) {
      loading.value = props.loadingAuto && true;
      const event = payload;
      try {
        event.data = await _validate({ nested: true, transform: props.transform });
        await props.onSubmit?.(event);
        dirtyFields.clear();
      } catch (error) {
        if (!(error instanceof FormValidationException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: error.errors
        };
        emits("error", errorEvent);
      } finally {
        loading.value = false;
      }
    }
    const disabled = computed(() => props.disabled || loading.value);
    provide(formOptionsInjectionKey, computed(() => ({
      disabled: disabled.value,
      validateOnInputDelay: props.validateOnInputDelay
    })));
    async function validateNestedForm(form, opts) {
      try {
        const result = await form.validate({ ...opts, silent: false });
        return { name: form.name, output: result };
      } catch (error) {
        if (!(error instanceof FormValidationException)) throw error;
        return { name: form.name, error };
      }
    }
    function addFormPath(error, formPath) {
      if (!formPath || !error.name) return error;
      return { ...error, name: formPath + "." + error.name };
    }
    function stripFormPath(error, formPath) {
      const prefix = formPath + ".";
      const name = error?.name?.startsWith(prefix) ? error.name.substring(prefix.length) : error.name;
      return { ...error, name };
    }
    function filterFormErrors(errors2, formPath) {
      if (!formPath) return errors2;
      return errors2.filter((e) => e?.name?.startsWith(formPath + ".")).map((e) => stripFormPath(e, formPath));
    }
    function getFormErrors(form) {
      return form.api.getErrors().map(
        (e) => form.name ? { ...e, name: form.name + "." + e.name } : e
      );
    }
    function matchesTarget(target, path) {
      if (!target || !path) return true;
      if (target instanceof RegExp) return target.test(path);
      return path === target || typeof target === "string" && target.startsWith(path + ".");
    }
    function getNestedTarget(target, formPath) {
      if (!target || target instanceof RegExp) return target;
      if (formPath === target) return void 0;
      if (typeof target === "string" && target.startsWith(formPath + ".")) {
        return target.substring(formPath.length + 1);
      }
      return target;
    }
    function filterErrorsByNames(allErrors, names) {
      const nameSet = new Set(names);
      const patterns = names.map((name) => inputs.value?.[name]?.pattern).filter(Boolean);
      const matchesNames = (error) => {
        if (!error.name) return false;
        if (nameSet.has(error.name)) return true;
        return patterns.some((pattern) => pattern.test(error.name));
      };
      const keepErrors = errors.value.filter((error) => !matchesNames(error));
      const newErrors = allErrors.filter(matchesNames);
      return [...keepErrors, ...newErrors];
    }
    function filterErrorsByTarget(currentErrors, target) {
      return currentErrors.filter(
        (err) => target instanceof RegExp ? !(err.name && target.test(err.name)) : !err.name || err.name !== target
      );
    }
    function isLocalError(error) {
      return !error.name || !!inputs.value[error.name];
    }
    const api = {
      validate: _validate,
      errors,
      setErrors(errs, name) {
        const localErrors = resolveErrorIds(errs.filter(isLocalError));
        const nestedErrors = [];
        for (const form of nestedForms.value.values()) {
          if (matchesTarget(name, form.name)) {
            const formErrors = filterFormErrors(errs, form.name);
            form.api.setErrors(formErrors, getNestedTarget(name, form.name || ""));
            nestedErrors.push(...getFormErrors(form));
          }
        }
        if (name) {
          const keepErrors = filterErrorsByTarget(errors.value, name);
          errors.value = [...keepErrors, ...localErrors, ...nestedErrors];
        } else {
          errors.value = [...localErrors, ...nestedErrors];
        }
      },
      async submit() {
        await onSubmitWrapper(new Event("submit"));
      },
      getErrors(name) {
        if (!name) return errors.value;
        return errors.value.filter(
          (err) => name instanceof RegExp ? err.name && name.test(err.name) : err.name === name
        );
      },
      clear(name) {
        const localErrors = name ? errors.value.filter(
          (err) => isLocalError(err) && (name instanceof RegExp ? !(err.name && name.test(err.name)) : err.name !== name)
        ) : [];
        const nestedErrors = [];
        for (const form of nestedForms.value.values()) {
          if (matchesTarget(name, form.name)) form.api.clear();
          nestedErrors.push(...getFormErrors(form));
        }
        errors.value = [...localErrors, ...nestedErrors];
      },
      disabled,
      loading,
      dirty: computed(() => !!dirtyFields.size),
      dirtyFields: readonly(dirtyFields),
      blurredFields: readonly(blurredFields),
      touchedFields: readonly(touchedFields)
    };
    __expose(api);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(parentBus) ? "div" : "form"), mergeProps({
        id: unref(formId),
        class: ui.value({ class: props.class }),
        onSubmit: onSubmitWrapper
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {
              errors: errors.value,
              loading: loading.value
            }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {
                errors: errors.value,
                loading: loading.value
              })
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const theme$5 = {
  "slots": {
    "root": "",
    "wrapper": "",
    "labelWrapper": "flex content-center items-center justify-between gap-1",
    "label": "block font-medium text-default",
    "container": "relative",
    "description": "text-muted",
    "error": "mt-2 text-error",
    "hint": "text-muted",
    "help": "mt-2 text-muted"
  },
  "variants": {
    "size": {
      "xs": {
        "root": "text-xs"
      },
      "sm": {
        "root": "text-xs"
      },
      "md": {
        "root": "text-sm"
      },
      "lg": {
        "root": "text-sm"
      },
      "xl": {
        "root": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    },
    "orientation": {
      "vertical": {
        "container": "mt-1"
      },
      "horizontal": {
        "root": "flex justify-between place-items-baseline gap-2"
      }
    }
  },
  "defaultVariants": {
    "size": "md",
    "orientation": "vertical"
  }
};
const _sfc_main$7 = {
  __name: "UFormField",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    errorPattern: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    help: { type: String, required: false },
    error: { type: [Boolean, String], required: false, default: void 0 },
    hint: { type: String, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    eagerValidation: { type: Boolean, required: false },
    validateOnInputDelay: { type: Number, required: false },
    orientation: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$5), ...appConfig.ui?.formField || {} })({
      size: props.size,
      required: props.required,
      orientation: props.orientation
    }));
    const formErrors = inject(formErrorsInjectionKey, null);
    const error = computed(() => props.error || formErrors?.value?.find((error2) => error2.name === props.name || props.errorPattern && error2.name?.match(props.errorPattern))?.message);
    const id = ref(useId());
    const ariaId = id.value;
    const formInputs = inject(formInputsInjectionKey, void 0);
    watch(id, () => {
      if (formInputs && props.name) {
        formInputs.value[props.name] = { id: id.value, pattern: props.errorPattern };
      }
    }, { immediate: true });
    provide(inputIdInjectionKey, id);
    provide(formFieldInjectionKey, computed(() => ({
      error: error.value,
      name: props.name,
      size: props.size,
      eagerValidation: props.eagerValidation,
      validateOnInputDelay: props.validateOnInputDelay,
      errorPattern: props.errorPattern,
      hint: props.hint,
      description: props.description,
      help: props.help,
      ariaId
    })));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
            if (__props.label || !!slots.label) {
              _push2(`<div data-slot="labelWrapper" class="${ssrRenderClass(ui.value.labelWrapper({ class: props.ui?.labelWrapper }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Label), {
                for: id.value,
                "data-slot": "label",
                class: ui.value.label({ class: props.ui?.label })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "label", { label: __props.label }, () => {
                      _push3(`${ssrInterpolate(__props.label)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                        createTextVNode(toDisplayString(__props.label), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              if (__props.hint || !!slots.hint) {
                _push2(`<span${ssrRenderAttr("id", `${unref(ariaId)}-hint`)} data-slot="hint" class="${ssrRenderClass(ui.value.hint({ class: props.ui?.hint }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "hint", { hint: __props.hint }, () => {
                  _push2(`${ssrInterpolate(__props.hint)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.description || !!slots.description) {
              _push2(`<p${ssrRenderAttr("id", `${unref(ariaId)}-description`)} data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${ssrRenderClass([(__props.label || !!slots.label || __props.description || !!slots.description) && ui.value.container({ class: props.ui?.container })])}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { error: error.value }, null, _push2, _parent2, _scopeId);
            if (props.error !== false && (typeof error.value === "string" && error.value || !!slots.error)) {
              _push2(`<div${ssrRenderAttr("id", `${unref(ariaId)}-error`)} data-slot="error" class="${ssrRenderClass(ui.value.error({ class: props.ui?.error }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "error", { error: error.value }, () => {
                _push2(`${ssrInterpolate(error.value)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else if (__props.help || !!slots.help) {
              _push2(`<div${ssrRenderAttr("id", `${unref(ariaId)}-help`)} data-slot="help" class="${ssrRenderClass(ui.value.help({ class: props.ui?.help }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "help", { help: __props.help }, () => {
                _push2(`${ssrInterpolate(__props.help)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "labelWrapper",
                  class: ui.value.labelWrapper({ class: props.ui?.labelWrapper })
                }, [
                  createVNode(unref(Label), {
                    for: id.value,
                    "data-slot": "label",
                    class: ui.value.label({ class: props.ui?.label })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                        createTextVNode(toDisplayString(__props.label), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["for", "class"]),
                  __props.hint || !!slots.hint ? (openBlock(), createBlock("span", {
                    key: 0,
                    id: `${unref(ariaId)}-hint`,
                    "data-slot": "hint",
                    class: ui.value.hint({ class: props.ui?.hint })
                  }, [
                    renderSlot(_ctx.$slots, "hint", { hint: __props.hint }, () => [
                      createTextVNode(toDisplayString(__props.hint), 1)
                    ])
                  ], 10, ["id"])) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  id: `${unref(ariaId)}-description`,
                  "data-slot": "description",
                  class: ui.value.description({ class: props.ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 10, ["id"])) : createCommentVNode("", true)
              ], 2),
              createVNode("div", {
                class: [(__props.label || !!slots.label || __props.description || !!slots.description) && ui.value.container({ class: props.ui?.container })]
              }, [
                renderSlot(_ctx.$slots, "default", { error: error.value }),
                props.error !== false && (typeof error.value === "string" && error.value || !!slots.error) ? (openBlock(), createBlock("div", {
                  key: 0,
                  id: `${unref(ariaId)}-error`,
                  "data-slot": "error",
                  class: ui.value.error({ class: props.ui?.error })
                }, [
                  renderSlot(_ctx.$slots, "error", { error: error.value }, () => [
                    createTextVNode(toDisplayString(error.value), 1)
                  ])
                ], 10, ["id"])) : __props.help || !!slots.help ? (openBlock(), createBlock("div", {
                  key: 1,
                  id: `${unref(ariaId)}-help`,
                  "data-slot": "help",
                  class: ui.value.help({ class: props.ui?.help })
                }, [
                  renderSlot(_ctx.$slots, "help", { help: __props.help }, () => [
                    createTextVNode(toDisplayString(__props.help), 1)
                  ])
                ], 10, ["id"])) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
function itemHasDescription(item, descriptionKey) {
  if (typeof item !== "object" || item === null) {
    return false;
  }
  const value = get(item, descriptionKey);
  return value !== void 0 && value !== null && value !== "";
}
function getSize(size, hasDescription) {
  if (hasDescription) {
    return {
      xs: 44,
      sm: 48,
      md: 52,
      lg: 56,
      xl: 60
    }[size];
  }
  return {
    xs: 24,
    sm: 28,
    md: 32,
    lg: 36,
    xl: 40
  }[size];
}
function getEstimateSize(items, size, descriptionKey, hasDescriptionSlot) {
  const sizeWithDescription = getSize(size, true);
  const sizeWithoutDescription = getSize(size, false);
  if (hasDescriptionSlot) {
    return () => sizeWithDescription;
  }
  if (!descriptionKey) {
    return () => sizeWithoutDescription;
  }
  return (index) => {
    return itemHasDescription(items[index], descriptionKey) ? sizeWithDescription : sizeWithoutDescription;
  };
}
const theme$4 = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "rounded-md",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "group absolute inset-y-0 end-0 flex items-center disabled:cursor-not-allowed disabled:opacity-75",
    "trailingIcon": "shrink-0 text-dimmed",
    "trailingClear": "p-0",
    "arrow": "fill-default",
    "content": "max-h-60 w-(--reka-combobox-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-combobox-content-transform-origin) pointer-events-auto flex flex-col",
    "viewport": "relative scroll-py-1 overflow-y-auto flex-1",
    "group": "p-1 isolate",
    "empty": "text-center text-muted",
    "label": "font-semibold text-highlighted",
    "separator": "-mx-1 my-1 h-px bg-border",
    "item": [
      "group relative w-full flex items-start gap-1.5 p-1.5 text-sm select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50",
      "transition-colors before:transition-colors"
    ],
    "itemLeadingIcon": [
      "shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default",
      "transition-colors"
    ],
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemLeadingChip": "shrink-0",
    "itemLeadingChipSize": "",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0",
    "itemWrapper": "flex-1 flex flex-col min-w-0",
    "itemLabel": "truncate",
    "itemDescription": "truncate text-muted",
    "tagsItem": "px-1.5 py-0.5 rounded-sm font-medium inline-flex items-center gap-0.5 ring ring-inset ring-accented bg-elevated text-default data-disabled:cursor-not-allowed data-disabled:opacity-75",
    "tagsItemText": "truncate",
    "tagsItemDelete": [
      "inline-flex items-center rounded-xs text-dimmed hover:text-default hover:bg-accented/75 disabled:pointer-events-none",
      "transition-colors"
    ],
    "tagsItemDeleteIcon": "shrink-0",
    "tagsInput": "flex-1 border-0 bg-transparent placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
      },
      "vertical": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1 text-[10px]/3 gap-1",
        "item": "p-1 text-xs gap-1",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4",
        "tagsItem": "text-[10px]/3",
        "tagsItemDeleteIcon": "size-3",
        "empty": "p-1 text-xs"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1.5 text-[10px]/3 gap-1.5",
        "item": "p-1.5 text-xs gap-1.5",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4",
        "tagsItem": "text-[10px]/3",
        "tagsItemDeleteIcon": "size-3",
        "empty": "p-1.5 text-xs"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-1.5 text-xs gap-1.5",
        "item": "p-1.5 text-sm gap-1.5",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5",
        "tagsItem": "text-xs",
        "tagsItemDeleteIcon": "size-3.5",
        "empty": "p-1.5 text-sm"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-2 text-xs gap-2",
        "item": "p-2 text-sm gap-2",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5",
        "tagsItem": "text-xs",
        "tagsItemDeleteIcon": "size-3.5",
        "empty": "p-2 text-sm"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6",
        "label": "p-2 text-sm gap-2",
        "item": "p-2 text-base gap-2",
        "itemLeadingIcon": "size-6",
        "itemLeadingAvatarSize": "xs",
        "itemLeadingChip": "size-6",
        "itemLeadingChipSize": "lg",
        "itemTrailingIcon": "size-6",
        "tagsItem": "text-sm",
        "tagsItemDeleteIcon": "size-4",
        "empty": "p-2 text-base"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    },
    "virtualize": {
      "true": {
        "viewport": "p-1 isolate"
      },
      "false": {
        "viewport": "divide-y divide-default"
      }
    },
    "multiple": {
      "true": {
        "root": "flex-wrap"
      },
      "false": {
        "base": "w-full border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75"
      }
    }
  },
  "compoundVariants": [
    {
      "variant": "soft",
      "multiple": true,
      "class": "has-focus:bg-elevated"
    },
    {
      "variant": "ghost",
      "multiple": true,
      "class": "has-focus:bg-elevated"
    },
    {
      "color": "primary",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:ring-2 has-focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:ring-2 has-focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:ring-2 has-focus-visible:ring-success"
    },
    {
      "color": "info",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:ring-2 has-focus-visible:ring-info"
    },
    {
      "color": "warning",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:ring-2 has-focus-visible:ring-warning"
    },
    {
      "color": "error",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:ring-2 has-focus-visible:ring-error"
    },
    {
      "color": "neutral",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:ring-2 has-focus-visible:ring-inverted"
    },
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UInputMenu",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    id: { type: String, required: false },
    type: { type: null, required: false, default: "text" },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    trailingIcon: { type: null, required: false },
    selectedIcon: { type: null, required: false },
    deleteIcon: { type: null, required: false },
    clear: { type: [Boolean, Object], required: false },
    clearIcon: { type: null, required: false },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    virtualize: { type: [Boolean, Object], required: false, default: false },
    valueKey: { type: null, required: false },
    labelKey: { type: null, required: false, default: "label" },
    descriptionKey: { type: null, required: false, default: "description" },
    items: { type: null, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    modelModifiers: { type: Object, required: false },
    multiple: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    createItem: { type: [Boolean, String, Object], required: false },
    filterFields: { type: Array, required: false },
    ignoreFilter: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    name: { type: String, required: false },
    resetSearchTermOnBlur: { type: Boolean, required: false, default: true },
    resetSearchTermOnSelect: { type: Boolean, required: false, default: true },
    resetModelValueOnClear: { type: Boolean, required: false, default: true },
    highlightOnHover: { type: Boolean, required: false },
    openOnClick: { type: Boolean, required: false },
    openOnFocus: { type: Boolean, required: false },
    by: { type: [String, Function], required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  }, {
    "searchTerm": { type: String, ...{ default: "" } },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:open", "change", "blur", "focus", "create", "clear", "highlight", "remove-tag", "update:modelValue"], ["update:searchTerm"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const searchTerm = useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const { contains } = useFilter({ sensitivity: "base" });
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "modelValue", "defaultValue", "open", "defaultOpen", "required", "multiple", "resetSearchTermOnBlur", "resetSearchTermOnSelect", "resetModelValueOnClear", "highlightOnHover", "openOnClick", "openOnFocus", "by"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" }));
    const arrowProps = toRef(() => props.arrow);
    const clearProps = computed(() => typeof props.clear === "object" ? props.clear : {});
    const virtualizerProps = toRef(() => {
      if (!props.virtualize) return false;
      return defu(typeof props.virtualize === "boolean" ? {} : props.virtualize, {
        estimateSize: getEstimateSize(filteredItems.value, inputSize.value || "md", props.descriptionKey, !!slots["item-description"])
      });
    });
    const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, size: formGroupSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(toRef(() => defu(props, { trailingIcon: appConfig.ui.icons.chevronDown })));
    const inputSize = computed(() => fieldGroupSize.value || formGroupSize.value);
    const [DefineCreateItemTemplate, ReuseCreateItemTemplate] = createReusableTemplate();
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
      props: {
        item: {
          type: [Object, String, Number, Boolean],
          required: true
        },
        index: {
          type: Number,
          required: false
        }
      }
    });
    const ui = computed(() => tv({ extend: tv(theme$4), ...appConfig.ui?.inputMenu || {} })({
      color: color.value,
      variant: props.variant,
      size: inputSize?.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      multiple: props.multiple,
      fieldGroup: orientation.value,
      virtualize: !!props.virtualize
    }));
    const items = computed(() => groups.value.flatMap((group) => group));
    function displayValue(value) {
      return getDisplayValue(items.value, value, {
        labelKey: props.labelKey,
        valueKey: props.valueKey,
        by: props.by
      }) ?? "";
    }
    const groups = computed(
      () => props.items?.length ? isArrayOfArray(props.items) ? props.items : [props.items] : []
    );
    const filteredGroups = computed(() => {
      if (props.ignoreFilter || !searchTerm.value) {
        return groups.value;
      }
      const fields = Array.isArray(props.filterFields) ? props.filterFields : [props.labelKey];
      return groups.value.map((items2) => items2.filter((item) => {
        if (item === void 0 || item === null) {
          return false;
        }
        if (typeof item !== "object") {
          return contains(String(item), searchTerm.value);
        }
        if (item.type && ["label", "separator"].includes(item.type)) {
          return true;
        }
        return fields.some((field) => {
          const value = get(item, field);
          return value !== void 0 && value !== null && contains(String(value), searchTerm.value);
        });
      })).filter((group) => group.filter(
        (item) => !isInputItem(item) || (!item.type || !["label", "separator"].includes(item.type))
      ).length > 0);
    });
    const filteredItems = computed(() => filteredGroups.value.flatMap((group) => group));
    const createItem = computed(() => {
      if (!props.createItem || !searchTerm.value) {
        return false;
      }
      const newItem = props.valueKey ? { [props.valueKey]: searchTerm.value } : searchTerm.value;
      if (typeof props.createItem === "object" && props.createItem.when === "always" || props.createItem === "always") {
        return !filteredItems.value.find((item) => compare(item, newItem, props.by ?? props.valueKey));
      }
      return !filteredItems.value.length;
    });
    const createItemPosition = computed(() => typeof props.createItem === "object" ? props.createItem.position : "bottom");
    const inputRef = useTemplateRef("inputRef");
    function onUpdate(value) {
      if (toRaw(props.modelValue) === value) {
        return;
      }
      if (props.modelModifiers?.trim) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number) {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullable) {
        value ??= null;
      }
      if (props.modelModifiers?.optional) {
        value ??= void 0;
      }
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
      if (props.resetSearchTermOnSelect) {
        searchTerm.value = "";
      }
    }
    function onBlur(event) {
      emits("blur", event);
      emitFormBlur();
    }
    function onFocus(event) {
      emits("focus", event);
      emitFormFocus();
    }
    function onUpdateOpen(value) {
      let timeoutId;
      if (!value) {
        const event = new FocusEvent("blur");
        emits("blur", event);
        emitFormBlur();
        if (props.resetSearchTermOnBlur) {
          const STATE_ANIMATION_DELAY_MS = 100;
          timeoutId = setTimeout(() => {
            searchTerm.value = "";
          }, STATE_ANIMATION_DELAY_MS);
        }
      } else {
        const event = new FocusEvent("focus");
        emits("focus", event);
        emitFormFocus();
        clearTimeout(timeoutId);
      }
    }
    function onRemoveTag(event, modelValue) {
      if (props.multiple) {
        const filteredValue = modelValue.filter((value) => !isEqual(value, event));
        emits("update:modelValue", filteredValue);
        emits("remove-tag", event);
        onUpdate(filteredValue);
      }
    }
    function onCreate(e) {
      e.preventDefault();
      e.stopPropagation();
      emits("create", searchTerm.value);
    }
    function onSelect(e, item) {
      if (!isInputItem(item)) {
        return;
      }
      if (item.disabled) {
        e.preventDefault();
        return;
      }
      item.onSelect?.(e);
    }
    function isInputItem(item) {
      return typeof item === "object" && item !== null;
    }
    function isModelValueEmpty(modelValue) {
      if (props.multiple && Array.isArray(modelValue)) {
        return modelValue.length === 0;
      }
      return modelValue === void 0 || modelValue === null || modelValue === "";
    }
    function onClear() {
      emits("clear");
    }
    const viewportRef = useTemplateRef("viewportRef");
    __expose({
      inputRef: toRef(() => inputRef.value?.$el),
      viewportRef: toRef(() => viewportRef.value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineCreateItemTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxItem), {
              "data-slot": "item",
              class: ui.value.item({ class: props.ui?.item }),
              value: searchTerm.value,
              onSelect: onCreate
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-slot="itemLabel" class="${ssrRenderClass(ui.value.itemLabel({ class: props.ui?.itemLabel }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => {
                    _push3(`${ssrInterpolate(unref(t)("inputMenu.create", { label: searchTerm.value }))}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", {
                      "data-slot": "itemLabel",
                      class: ui.value.itemLabel({ class: props.ui?.itemLabel })
                    }, [
                      renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                        createTextVNode(toDisplayString(unref(t)("inputMenu.create", { label: searchTerm.value })), 1)
                      ])
                    ], 2)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ComboboxItem), {
                "data-slot": "item",
                class: ui.value.item({ class: props.ui?.item }),
                value: searchTerm.value,
                onSelect: onCreate
              }, {
                default: withCtx(() => [
                  createVNode("span", {
                    "data-slot": "itemLabel",
                    class: ui.value.itemLabel({ class: props.ui?.itemLabel })
                  }, [
                    renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                      createTextVNode(toDisplayString(unref(t)("inputMenu.create", { label: searchTerm.value })), 1)
                    ])
                  ], 2)
                ]),
                _: 3
              }, 8, ["class", "value"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isInputItem(item) && item.type === "label") {
              _push2(ssrRenderComponent(unref(ComboboxLabel), {
                "data-slot": "label",
                class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else if (isInputItem(item) && item.type === "separator") {
              _push2(ssrRenderComponent(unref(ComboboxSeparator), {
                "data-slot": "separator",
                class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(ComboboxItem), {
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, isInputItem(item) && item.ui?.item, isInputItem(item) && item.class] }),
                disabled: isInputItem(item) && item.disabled,
                value: props.valueKey && isInputItem(item) ? unref(get)(item, props.valueKey) : item,
                onSelect: ($event) => onSelect($event, item)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "item", {
                      item,
                      index,
                      ui: ui.value
                    }, () => {
                      ssrRenderSlot(_ctx.$slots, "item-leading", {
                        item,
                        index,
                        ui: ui.value
                      }, () => {
                        if (isInputItem(item) && item.icon) {
                          _push3(ssrRenderComponent(_sfc_main$m, {
                            name: item.icon,
                            "data-slot": "itemLeadingIcon",
                            class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                          }, null, _parent3, _scopeId2));
                        } else if (isInputItem(item) && item.avatar) {
                          _push3(ssrRenderComponent(_sfc_main$k, mergeProps({
                            size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                          }, item.avatar, {
                            "data-slot": "itemLeadingAvatar",
                            class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                          }), null, _parent3, _scopeId2));
                        } else if (isInputItem(item) && item.chip) {
                          _push3(ssrRenderComponent(_sfc_main$l, mergeProps({
                            size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                            inset: "",
                            standalone: ""
                          }, item.chip, {
                            "data-slot": "itemLeadingChip",
                            class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                          }), null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`<span data-slot="itemWrapper" class="${ssrRenderClass(ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isInputItem(item) && item.ui?.itemWrapper] }))}"${_scopeId2}><span data-slot="itemLabel" class="${ssrRenderClass(ui.value.itemLabel({ class: [props.ui?.itemLabel, isInputItem(item) && item.ui?.itemLabel] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "item-label", {
                        item,
                        index
                      }, () => {
                        _push3(`${ssrInterpolate(isInputItem(item) ? unref(get)(item, props.labelKey) : item)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</span>`);
                      if (isInputItem(item) && (unref(get)(item, props.descriptionKey) || !!slots["item-description"])) {
                        _push3(`<span data-slot="itemDescription" class="${ssrRenderClass(ui.value.itemDescription({ class: [props.ui?.itemDescription, isInputItem(item) && item.ui?.itemDescription] }))}"${_scopeId2}>`);
                        ssrRenderSlot(_ctx.$slots, "item-description", {
                          item,
                          index
                        }, () => {
                          _push3(`${ssrInterpolate(unref(get)(item, props.descriptionKey))}`);
                        }, _push3, _parent3, _scopeId2);
                        _push3(`</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</span><span data-slot="itemTrailing" class="${ssrRenderClass(ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isInputItem(item) && item.ui?.itemTrailing] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "item-trailing", {
                        item,
                        index,
                        ui: ui.value
                      }, null, _push3, _parent3, _scopeId2);
                      _push3(ssrRenderComponent(unref(ComboboxItemIndicator), { "as-child": "" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_sfc_main$m, {
                              name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                              "data-slot": "itemTrailingIcon",
                              class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isInputItem(item) && item.ui?.itemTrailingIcon] })
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_sfc_main$m, {
                                name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                "data-slot": "itemTrailingIcon",
                                class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isInputItem(item) && item.ui?.itemTrailingIcon] })
                              }, null, 8, ["name", "class"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</span>`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "item", {
                        item,
                        index,
                        ui: ui.value
                      }, () => [
                        renderSlot(_ctx.$slots, "item-leading", {
                          item,
                          index,
                          ui: ui.value
                        }, () => [
                          isInputItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$m, {
                            key: 0,
                            name: item.icon,
                            "data-slot": "itemLeadingIcon",
                            class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                          }, null, 8, ["name", "class"])) : isInputItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                            key: 1,
                            size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                          }, item.avatar, {
                            "data-slot": "itemLeadingAvatar",
                            class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                          }), null, 16, ["size", "class"])) : isInputItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$l, mergeProps({
                            key: 2,
                            size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                            inset: "",
                            standalone: ""
                          }, item.chip, {
                            "data-slot": "itemLeadingChip",
                            class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ]),
                        createVNode("span", {
                          "data-slot": "itemWrapper",
                          class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isInputItem(item) && item.ui?.itemWrapper] })
                        }, [
                          createVNode("span", {
                            "data-slot": "itemLabel",
                            class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isInputItem(item) && item.ui?.itemLabel] })
                          }, [
                            renderSlot(_ctx.$slots, "item-label", {
                              item,
                              index
                            }, () => [
                              createTextVNode(toDisplayString(isInputItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                            ])
                          ], 2),
                          isInputItem(item) && (unref(get)(item, props.descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
                            key: 0,
                            "data-slot": "itemDescription",
                            class: ui.value.itemDescription({ class: [props.ui?.itemDescription, isInputItem(item) && item.ui?.itemDescription] })
                          }, [
                            renderSlot(_ctx.$slots, "item-description", {
                              item,
                              index
                            }, () => [
                              createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ], 2),
                        createVNode("span", {
                          "data-slot": "itemTrailing",
                          class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isInputItem(item) && item.ui?.itemTrailing] })
                        }, [
                          renderSlot(_ctx.$slots, "item-trailing", {
                            item,
                            index,
                            ui: ui.value
                          }),
                          createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$m, {
                                name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                "data-slot": "itemTrailingIcon",
                                class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isInputItem(item) && item.ui?.itemTrailingIcon] })
                              }, null, 8, ["name", "class"])
                            ]),
                            _: 2
                          }, 1024)
                        ], 2)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            }
          } else {
            return [
              isInputItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                key: 0,
                "data-slot": "label",
                class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : isInputItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                key: 1,
                "data-slot": "separator",
                class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                key: 2,
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, isInputItem(item) && item.ui?.item, isInputItem(item) && item.class] }),
                disabled: isInputItem(item) && item.disabled,
                value: props.valueKey && isInputItem(item) ? unref(get)(item, props.valueKey) : item,
                onSelect: ($event) => onSelect($event, item)
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "item", {
                    item,
                    index,
                    ui: ui.value
                  }, () => [
                    renderSlot(_ctx.$slots, "item-leading", {
                      item,
                      index,
                      ui: ui.value
                    }, () => [
                      isInputItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$m, {
                        key: 0,
                        name: item.icon,
                        "data-slot": "itemLeadingIcon",
                        class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                      }, null, 8, ["name", "class"])) : isInputItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                        key: 1,
                        size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                      }, item.avatar, {
                        "data-slot": "itemLeadingAvatar",
                        class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                      }), null, 16, ["size", "class"])) : isInputItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$l, mergeProps({
                        key: 2,
                        size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                        inset: "",
                        standalone: ""
                      }, item.chip, {
                        "data-slot": "itemLeadingChip",
                        class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ]),
                    createVNode("span", {
                      "data-slot": "itemWrapper",
                      class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isInputItem(item) && item.ui?.itemWrapper] })
                    }, [
                      createVNode("span", {
                        "data-slot": "itemLabel",
                        class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isInputItem(item) && item.ui?.itemLabel] })
                      }, [
                        renderSlot(_ctx.$slots, "item-label", {
                          item,
                          index
                        }, () => [
                          createTextVNode(toDisplayString(isInputItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                        ])
                      ], 2),
                      isInputItem(item) && (unref(get)(item, props.descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
                        key: 0,
                        "data-slot": "itemDescription",
                        class: ui.value.itemDescription({ class: [props.ui?.itemDescription, isInputItem(item) && item.ui?.itemDescription] })
                      }, [
                        renderSlot(_ctx.$slots, "item-description", {
                          item,
                          index
                        }, () => [
                          createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ], 2),
                    createVNode("span", {
                      "data-slot": "itemTrailing",
                      class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isInputItem(item) && item.ui?.itemTrailing] })
                    }, [
                      renderSlot(_ctx.$slots, "item-trailing", {
                        item,
                        index,
                        ui: ui.value
                      }),
                      createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$m, {
                            name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                            "data-slot": "itemTrailingIcon",
                            class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isInputItem(item) && item.ui?.itemTrailingIcon] })
                          }, null, 8, ["name", "class"])
                        ]),
                        _: 2
                      }, 1024)
                    ], 2)
                  ])
                ]),
                _: 2
              }, 1032, ["class", "disabled", "value", "onSelect"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps(unref(rootProps), {
        name: unref(name),
        disabled: unref(disabled),
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        "as-child": !!__props.multiple,
        "ignore-filter": "",
        "onUpdate:modelValue": onUpdate,
        "onUpdate:open": onUpdateOpen
      }), {
        default: withCtx(({ modelValue, open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxAnchor), {
              "as-child": !__props.multiple,
              "data-slot": "base",
              class: ui.value.base({ class: props.ui?.base })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.multiple) {
                    _push3(ssrRenderComponent(unref(TagsInputRoot), {
                      "model-value": modelValue,
                      disabled: unref(disabled),
                      required: __props.required,
                      delimiter: "",
                      "as-child": "",
                      onBlur,
                      onFocus,
                      onRemoveTag: ($event) => onRemoveTag($event, modelValue)
                    }, {
                      default: withCtx(({ modelValue: tags }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(tags, (item, index) => {
                            _push4(ssrRenderComponent(unref(TagsInputItem), {
                              key: index,
                              value: item,
                              "data-slot": "tagsItem",
                              class: ui.value.tagsItem({ class: [props.ui?.tagsItem, isInputItem(item) && item.ui?.tagsItem] })
                            }, {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(TagsInputItemText), {
                                    "data-slot": "tagsItemText",
                                    class: ui.value.tagsItemText({ class: [props.ui?.tagsItemText, isInputItem(item) && item.ui?.tagsItemText] })
                                  }, {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "tags-item-text", {
                                          item,
                                          index
                                        }, () => {
                                          _push6(`${ssrInterpolate(displayValue(item))}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "tags-item-text", {
                                            item,
                                            index
                                          }, () => [
                                            createTextVNode(toDisplayString(displayValue(item)), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(unref(TagsInputItemDelete), {
                                    "data-slot": "tagsItemDelete",
                                    class: ui.value.tagsItemDelete({ class: [props.ui?.tagsItemDelete, isInputItem(item) && item.ui?.tagsItemDelete] }),
                                    disabled: unref(disabled)
                                  }, {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "tags-item-delete", {
                                          item,
                                          index,
                                          ui: ui.value
                                        }, () => {
                                          _push6(ssrRenderComponent(_sfc_main$m, {
                                            name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                            "data-slot": "tagsItemDeleteIcon",
                                            class: ui.value.tagsItemDeleteIcon({ class: [props.ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
                                          }, null, _parent6, _scopeId5));
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "tags-item-delete", {
                                            item,
                                            index,
                                            ui: ui.value
                                          }, () => [
                                            createVNode(_sfc_main$m, {
                                              name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                              "data-slot": "tagsItemDeleteIcon",
                                              class: ui.value.tagsItemDeleteIcon({ class: [props.ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
                                            }, null, 8, ["name", "class"])
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(TagsInputItemText), {
                                      "data-slot": "tagsItemText",
                                      class: ui.value.tagsItemText({ class: [props.ui?.tagsItemText, isInputItem(item) && item.ui?.tagsItemText] })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "tags-item-text", {
                                          item,
                                          index
                                        }, () => [
                                          createTextVNode(toDisplayString(displayValue(item)), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]),
                                    createVNode(unref(TagsInputItemDelete), {
                                      "data-slot": "tagsItemDelete",
                                      class: ui.value.tagsItemDelete({ class: [props.ui?.tagsItemDelete, isInputItem(item) && item.ui?.tagsItemDelete] }),
                                      disabled: unref(disabled)
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "tags-item-delete", {
                                          item,
                                          index,
                                          ui: ui.value
                                        }, () => [
                                          createVNode(_sfc_main$m, {
                                            name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                            "data-slot": "tagsItemDeleteIcon",
                                            class: ui.value.tagsItemDeleteIcon({ class: [props.ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
                                          }, null, 8, ["name", "class"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["class", "disabled"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                          _push4(ssrRenderComponent(unref(ComboboxInput), {
                            modelValue: searchTerm.value,
                            "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                            "as-child": ""
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(TagsInputInput), mergeProps({
                                  id: unref(id),
                                  ref_key: "inputRef",
                                  ref: inputRef
                                }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                                  placeholder: __props.placeholder,
                                  "data-slot": "tagsInput",
                                  class: ui.value.tagsInput({ class: props.ui?.tagsInput }),
                                  onChange: () => {
                                  }
                                }), null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(TagsInputInput), mergeProps({
                                    id: unref(id),
                                    ref_key: "inputRef",
                                    ref: inputRef
                                  }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                                    placeholder: __props.placeholder,
                                    "data-slot": "tagsInput",
                                    class: ui.value.tagsInput({ class: props.ui?.tagsInput }),
                                    onChange: withModifiers(() => {
                                    }, ["stop"])
                                  }), null, 16, ["id", "placeholder", "class", "onChange"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(tags, (item, index) => {
                              return openBlock(), createBlock(unref(TagsInputItem), {
                                key: index,
                                value: item,
                                "data-slot": "tagsItem",
                                class: ui.value.tagsItem({ class: [props.ui?.tagsItem, isInputItem(item) && item.ui?.tagsItem] })
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(TagsInputItemText), {
                                    "data-slot": "tagsItemText",
                                    class: ui.value.tagsItemText({ class: [props.ui?.tagsItemText, isInputItem(item) && item.ui?.tagsItemText] })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "tags-item-text", {
                                        item,
                                        index
                                      }, () => [
                                        createTextVNode(toDisplayString(displayValue(item)), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]),
                                  createVNode(unref(TagsInputItemDelete), {
                                    "data-slot": "tagsItemDelete",
                                    class: ui.value.tagsItemDelete({ class: [props.ui?.tagsItemDelete, isInputItem(item) && item.ui?.tagsItemDelete] }),
                                    disabled: unref(disabled)
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "tags-item-delete", {
                                        item,
                                        index,
                                        ui: ui.value
                                      }, () => [
                                        createVNode(_sfc_main$m, {
                                          name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                          "data-slot": "tagsItemDeleteIcon",
                                          class: ui.value.tagsItemDeleteIcon({ class: [props.ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
                                        }, null, 8, ["name", "class"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "disabled"])
                                ]),
                                _: 2
                              }, 1032, ["value", "class"]);
                            }), 128)),
                            createVNode(unref(ComboboxInput), {
                              modelValue: searchTerm.value,
                              "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(TagsInputInput), mergeProps({
                                  id: unref(id),
                                  ref_key: "inputRef",
                                  ref: inputRef
                                }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                                  placeholder: __props.placeholder,
                                  "data-slot": "tagsInput",
                                  class: ui.value.tagsInput({ class: props.ui?.tagsInput }),
                                  onChange: withModifiers(() => {
                                  }, ["stop"])
                                }), null, 16, ["id", "placeholder", "class", "onChange"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(ComboboxInput), mergeProps({
                      id: unref(id),
                      ref_key: "inputRef",
                      ref: inputRef,
                      "display-value": displayValue
                    }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                      type: __props.type,
                      placeholder: __props.placeholder,
                      required: __props.required,
                      onBlur,
                      onFocus,
                      onChange: () => {
                      },
                      "onUpdate:modelValue": ($event) => searchTerm.value = $event
                    }), null, _parent3, _scopeId2));
                  }
                  if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
                    _push3(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "leading", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => {
                      if (unref(isLeading) && unref(leadingIconName)) {
                        _push3(ssrRenderComponent(_sfc_main$m, {
                          name: unref(leadingIconName),
                          "data-slot": "leadingIcon",
                          class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                        }, null, _parent3, _scopeId2));
                      } else if (!!__props.avatar) {
                        _push3(ssrRenderComponent(_sfc_main$k, mergeProps({
                          size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                        }, __props.avatar, {
                          "data-slot": "itemLeadingAvatar",
                          class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                        }), null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(isTrailing) || !!slots.trailing || !!__props.clear) {
                    _push3(ssrRenderComponent(unref(ComboboxTrigger), {
                      "data-slot": "trailing",
                      class: ui.value.trailing({ class: props.ui?.trailing })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            if (!!__props.clear && !isModelValueEmpty(modelValue)) {
                              _push4(ssrRenderComponent(unref(ComboboxCancel), { "as-child": "" }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_sfc_main$h, mergeProps({
                                      as: "span",
                                      icon: __props.clearIcon || unref(appConfig).ui.icons.close,
                                      variant: "link",
                                      color: "neutral",
                                      tabindex: "-1"
                                    }, clearProps.value, {
                                      "data-slot": "trailingClear",
                                      class: ui.value.trailingClear({ class: props.ui?.trailingClear }),
                                      onClick: onClear
                                    }), null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$h, mergeProps({
                                        as: "span",
                                        icon: __props.clearIcon || unref(appConfig).ui.icons.close,
                                        variant: "link",
                                        color: "neutral",
                                        tabindex: "-1"
                                      }, clearProps.value, {
                                        "data-slot": "trailingClear",
                                        class: ui.value.trailingClear({ class: props.ui?.trailingClear }),
                                        onClick: withModifiers(onClear, ["stop"])
                                      }), null, 16, ["icon", "class"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else if (unref(trailingIconName)) {
                              _push4(ssrRenderComponent(_sfc_main$m, {
                                name: unref(trailingIconName),
                                "data-slot": "trailingIcon",
                                class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "trailing", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => [
                              !!__props.clear && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(ComboboxCancel), {
                                key: 0,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$h, mergeProps({
                                    as: "span",
                                    icon: __props.clearIcon || unref(appConfig).ui.icons.close,
                                    variant: "link",
                                    color: "neutral",
                                    tabindex: "-1"
                                  }, clearProps.value, {
                                    "data-slot": "trailingClear",
                                    class: ui.value.trailingClear({ class: props.ui?.trailingClear }),
                                    onClick: withModifiers(onClear, ["stop"])
                                  }), null, 16, ["icon", "class"])
                                ]),
                                _: 1
                              })) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$m, {
                                key: 1,
                                name: unref(trailingIconName),
                                "data-slot": "trailingIcon",
                                class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    __props.multiple ? (openBlock(), createBlock(unref(TagsInputRoot), {
                      key: 0,
                      "model-value": modelValue,
                      disabled: unref(disabled),
                      required: __props.required,
                      delimiter: "",
                      "as-child": "",
                      onBlur,
                      onFocus,
                      onRemoveTag: ($event) => onRemoveTag($event, modelValue)
                    }, {
                      default: withCtx(({ modelValue: tags }) => [
                        (openBlock(true), createBlock(Fragment, null, renderList(tags, (item, index) => {
                          return openBlock(), createBlock(unref(TagsInputItem), {
                            key: index,
                            value: item,
                            "data-slot": "tagsItem",
                            class: ui.value.tagsItem({ class: [props.ui?.tagsItem, isInputItem(item) && item.ui?.tagsItem] })
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(TagsInputItemText), {
                                "data-slot": "tagsItemText",
                                class: ui.value.tagsItemText({ class: [props.ui?.tagsItemText, isInputItem(item) && item.ui?.tagsItemText] })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "tags-item-text", {
                                    item,
                                    index
                                  }, () => [
                                    createTextVNode(toDisplayString(displayValue(item)), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["class"]),
                              createVNode(unref(TagsInputItemDelete), {
                                "data-slot": "tagsItemDelete",
                                class: ui.value.tagsItemDelete({ class: [props.ui?.tagsItemDelete, isInputItem(item) && item.ui?.tagsItemDelete] }),
                                disabled: unref(disabled)
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "tags-item-delete", {
                                    item,
                                    index,
                                    ui: ui.value
                                  }, () => [
                                    createVNode(_sfc_main$m, {
                                      name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                      "data-slot": "tagsItemDeleteIcon",
                                      class: ui.value.tagsItemDeleteIcon({ class: [props.ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
                                    }, null, 8, ["name", "class"])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["class", "disabled"])
                            ]),
                            _: 2
                          }, 1032, ["value", "class"]);
                        }), 128)),
                        createVNode(unref(ComboboxInput), {
                          modelValue: searchTerm.value,
                          "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(TagsInputInput), mergeProps({
                              id: unref(id),
                              ref_key: "inputRef",
                              ref: inputRef
                            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                              placeholder: __props.placeholder,
                              "data-slot": "tagsInput",
                              class: ui.value.tagsInput({ class: props.ui?.tagsInput }),
                              onChange: withModifiers(() => {
                              }, ["stop"])
                            }), null, 16, ["id", "placeholder", "class", "onChange"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 3
                    }, 8, ["model-value", "disabled", "required", "onRemoveTag"])) : (openBlock(), createBlock(unref(ComboboxInput), mergeProps({
                      key: 1,
                      id: unref(id),
                      ref_key: "inputRef",
                      ref: inputRef,
                      "display-value": displayValue
                    }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                      type: __props.type,
                      placeholder: __props.placeholder,
                      required: __props.required,
                      onBlur,
                      onFocus,
                      onChange: withModifiers(() => {
                      }, ["stop"]),
                      "onUpdate:modelValue": ($event) => searchTerm.value = $event
                    }), null, 16, ["id", "type", "placeholder", "required", "onChange", "onUpdate:modelValue"])),
                    unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                      key: 2,
                      "data-slot": "leading",
                      class: ui.value.leading({ class: props.ui?.leading })
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => [
                        unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$m, {
                          key: 0,
                          name: unref(leadingIconName),
                          "data-slot": "leadingIcon",
                          class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                        }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                          key: 1,
                          size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                        }, __props.avatar, {
                          "data-slot": "itemLeadingAvatar",
                          class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    unref(isTrailing) || !!slots.trailing || !!__props.clear ? (openBlock(), createBlock(unref(ComboboxTrigger), {
                      key: 3,
                      "data-slot": "trailing",
                      class: ui.value.trailing({ class: props.ui?.trailing })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "trailing", {
                          modelValue,
                          open,
                          ui: ui.value
                        }, () => [
                          !!__props.clear && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(ComboboxCancel), {
                            key: 0,
                            "as-child": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$h, mergeProps({
                                as: "span",
                                icon: __props.clearIcon || unref(appConfig).ui.icons.close,
                                variant: "link",
                                color: "neutral",
                                tabindex: "-1"
                              }, clearProps.value, {
                                "data-slot": "trailingClear",
                                class: ui.value.trailingClear({ class: props.ui?.trailingClear }),
                                onClick: withModifiers(onClear, ["stop"])
                              }), null, 16, ["icon", "class"])
                            ]),
                            _: 1
                          })) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$m, {
                            key: 1,
                            name: unref(trailingIconName),
                            "data-slot": "trailingIcon",
                            class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ComboboxPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: props.ui?.content })
                  }, contentProps.value, { onFocusOutside: () => {
                  } }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push4, _parent4, _scopeId3);
                        _push4(ssrRenderComponent(unref(ComboboxEmpty), {
                          "data-slot": "empty",
                          class: ui.value.empty({ class: props.ui?.empty })
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                                _push5(`${ssrInterpolate(searchTerm.value ? unref(t)("inputMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("inputMenu.noData"))}`);
                              }, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                  createTextVNode(toDisplayString(searchTerm.value ? unref(t)("inputMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("inputMenu.noData")), 1)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<div role="presentation" data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: props.ui?.viewport }))}"${_scopeId3}>`);
                        if (!!__props.virtualize) {
                          _push4(`<!--[-->`);
                          if (createItem.value && createItemPosition.value === "top") {
                            _push4(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(ssrRenderComponent(unref(ComboboxVirtualizer), mergeProps({
                            options: filteredItems.value,
                            "text-content": (item2) => isInputItem(item2) ? unref(get)(item2, props.labelKey) : String(item2)
                          }, virtualizerProps.value), {
                            default: withCtx(({ option: item, virtualItem }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(ReuseItemTemplate), {
                                  item,
                                  index: virtualItem.index
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(ReuseItemTemplate), {
                                    item,
                                    index: virtualItem.index
                                  }, null, 8, ["item", "index"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          if (createItem.value && createItemPosition.value === "bottom") {
                            _push4(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--]-->`);
                        } else {
                          _push4(`<!--[-->`);
                          if (createItem.value && createItemPosition.value === "top") {
                            _push4(ssrRenderComponent(unref(ComboboxGroup), {
                              "data-slot": "group",
                              class: ui.value.group({ class: props.ui?.group })
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(ReuseCreateItemTemplate))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--[-->`);
                          ssrRenderList(filteredGroups.value, (group, groupIndex) => {
                            _push4(ssrRenderComponent(unref(ComboboxGroup), {
                              key: `group-${groupIndex}`,
                              "data-slot": "group",
                              class: ui.value.group({ class: props.ui?.group })
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(group, (item, index) => {
                                    _push5(ssrRenderComponent(unref(ReuseItemTemplate), {
                                      key: `group-${groupIndex}-${index}`,
                                      item,
                                      index
                                    }, null, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                      return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                        key: `group-${groupIndex}-${index}`,
                                        item,
                                        index
                                      }, null, 8, ["item", "index"]);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                          if (createItem.value && createItemPosition.value === "bottom") {
                            _push4(ssrRenderComponent(unref(ComboboxGroup), {
                              "data-slot": "group",
                              class: ui.value.group({ class: props.ui?.group })
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(ReuseCreateItemTemplate))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--]-->`);
                        }
                        _push4(`</div>`);
                        ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push4, _parent4, _scopeId3);
                        if (!!__props.arrow) {
                          _push4(ssrRenderComponent(unref(ComboboxArrow), mergeProps(arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content-top"),
                          createVNode(unref(ComboboxEmpty), {
                            "data-slot": "empty",
                            class: ui.value.empty({ class: props.ui?.empty })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                createTextVNode(toDisplayString(searchTerm.value ? unref(t)("inputMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("inputMenu.noData")), 1)
                              ])
                            ]),
                            _: 3
                          }, 8, ["class"]),
                          createVNode("div", {
                            ref_key: "viewportRef",
                            ref: viewportRef,
                            role: "presentation",
                            "data-slot": "viewport",
                            class: ui.value.viewport({ class: props.ui?.viewport })
                          }, [
                            !!__props.virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                              createVNode(unref(ComboboxVirtualizer), mergeProps({
                                options: filteredItems.value,
                                "text-content": (item2) => isInputItem(item2) ? unref(get)(item2, props.labelKey) : String(item2)
                              }, virtualizerProps.value), {
                                default: withCtx(({ option: item, virtualItem }) => [
                                  createVNode(unref(ReuseItemTemplate), {
                                    item,
                                    index: virtualItem.index
                                  }, null, 8, ["item", "index"])
                                ]),
                                _: 1
                              }, 16, ["options", "text-content"]),
                              createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ComboboxGroup), {
                                key: 0,
                                "data-slot": "group",
                                class: ui.value.group({ class: props.ui?.group })
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseCreateItemTemplate))
                                ]),
                                _: 1
                              }, 8, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                return openBlock(), createBlock(unref(ComboboxGroup), {
                                  key: `group-${groupIndex}`,
                                  "data-slot": "group",
                                  class: ui.value.group({ class: props.ui?.group })
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                      return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                        key: `group-${groupIndex}-${index}`,
                                        item,
                                        index
                                      }, null, 8, ["item", "index"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128)),
                              createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ComboboxGroup), {
                                key: 1,
                                "data-slot": "group",
                                class: ui.value.group({ class: props.ui?.group })
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseCreateItemTemplate))
                                ]),
                                _: 1
                              }, 8, ["class"])) : createCommentVNode("", true)
                            ], 64))
                          ], 2),
                          renderSlot(_ctx.$slots, "content-bottom"),
                          !!__props.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxContent), mergeProps({
                      "data-slot": "content",
                      class: ui.value.content({ class: props.ui?.content })
                    }, contentProps.value, {
                      onFocusOutside: withModifiers(() => {
                      }, ["prevent"])
                    }), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "content-top"),
                        createVNode(unref(ComboboxEmpty), {
                          "data-slot": "empty",
                          class: ui.value.empty({ class: props.ui?.empty })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                              createTextVNode(toDisplayString(searchTerm.value ? unref(t)("inputMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("inputMenu.noData")), 1)
                            ])
                          ]),
                          _: 3
                        }, 8, ["class"]),
                        createVNode("div", {
                          ref_key: "viewportRef",
                          ref: viewportRef,
                          role: "presentation",
                          "data-slot": "viewport",
                          class: ui.value.viewport({ class: props.ui?.viewport })
                        }, [
                          !!__props.virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                            createVNode(unref(ComboboxVirtualizer), mergeProps({
                              options: filteredItems.value,
                              "text-content": (item2) => isInputItem(item2) ? unref(get)(item2, props.labelKey) : String(item2)
                            }, virtualizerProps.value), {
                              default: withCtx(({ option: item, virtualItem }) => [
                                createVNode(unref(ReuseItemTemplate), {
                                  item,
                                  index: virtualItem.index
                                }, null, 8, ["item", "index"])
                              ]),
                              _: 1
                            }, 16, ["options", "text-content"]),
                            createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ComboboxGroup), {
                              key: 0,
                              "data-slot": "group",
                              class: ui.value.group({ class: props.ui?.group })
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ReuseCreateItemTemplate))
                              ]),
                              _: 1
                            }, 8, ["class"])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                              return openBlock(), createBlock(unref(ComboboxGroup), {
                                key: `group-${groupIndex}`,
                                "data-slot": "group",
                                class: ui.value.group({ class: props.ui?.group })
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                    return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                      key: `group-${groupIndex}-${index}`,
                                      item,
                                      index
                                    }, null, 8, ["item", "index"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["class"]);
                            }), 128)),
                            createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ComboboxGroup), {
                              key: 1,
                              "data-slot": "group",
                              class: ui.value.group({ class: props.ui?.group })
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ReuseCreateItemTemplate))
                              ]),
                              _: 1
                            }, 8, ["class"])) : createCommentVNode("", true)
                          ], 64))
                        ], 2),
                        renderSlot(_ctx.$slots, "content-bottom"),
                        !!__props.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: props.ui?.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)
                      ]),
                      _: 3
                    }, 16, ["class", "onFocusOutside"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ComboboxAnchor), {
                "as-child": !__props.multiple,
                "data-slot": "base",
                class: ui.value.base({ class: props.ui?.base })
              }, {
                default: withCtx(() => [
                  __props.multiple ? (openBlock(), createBlock(unref(TagsInputRoot), {
                    key: 0,
                    "model-value": modelValue,
                    disabled: unref(disabled),
                    required: __props.required,
                    delimiter: "",
                    "as-child": "",
                    onBlur,
                    onFocus,
                    onRemoveTag: ($event) => onRemoveTag($event, modelValue)
                  }, {
                    default: withCtx(({ modelValue: tags }) => [
                      (openBlock(true), createBlock(Fragment, null, renderList(tags, (item, index) => {
                        return openBlock(), createBlock(unref(TagsInputItem), {
                          key: index,
                          value: item,
                          "data-slot": "tagsItem",
                          class: ui.value.tagsItem({ class: [props.ui?.tagsItem, isInputItem(item) && item.ui?.tagsItem] })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(TagsInputItemText), {
                              "data-slot": "tagsItemText",
                              class: ui.value.tagsItemText({ class: [props.ui?.tagsItemText, isInputItem(item) && item.ui?.tagsItemText] })
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "tags-item-text", {
                                  item,
                                  index
                                }, () => [
                                  createTextVNode(toDisplayString(displayValue(item)), 1)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"]),
                            createVNode(unref(TagsInputItemDelete), {
                              "data-slot": "tagsItemDelete",
                              class: ui.value.tagsItemDelete({ class: [props.ui?.tagsItemDelete, isInputItem(item) && item.ui?.tagsItemDelete] }),
                              disabled: unref(disabled)
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "tags-item-delete", {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => [
                                  createVNode(_sfc_main$m, {
                                    name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                    "data-slot": "tagsItemDeleteIcon",
                                    class: ui.value.tagsItemDeleteIcon({ class: [props.ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
                                  }, null, 8, ["name", "class"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class", "disabled"])
                          ]),
                          _: 2
                        }, 1032, ["value", "class"]);
                      }), 128)),
                      createVNode(unref(ComboboxInput), {
                        modelValue: searchTerm.value,
                        "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(TagsInputInput), mergeProps({
                            id: unref(id),
                            ref_key: "inputRef",
                            ref: inputRef
                          }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                            placeholder: __props.placeholder,
                            "data-slot": "tagsInput",
                            class: ui.value.tagsInput({ class: props.ui?.tagsInput }),
                            onChange: withModifiers(() => {
                            }, ["stop"])
                          }), null, 16, ["id", "placeholder", "class", "onChange"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 3
                  }, 8, ["model-value", "disabled", "required", "onRemoveTag"])) : (openBlock(), createBlock(unref(ComboboxInput), mergeProps({
                    key: 1,
                    id: unref(id),
                    ref_key: "inputRef",
                    ref: inputRef,
                    "display-value": displayValue
                  }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                    type: __props.type,
                    placeholder: __props.placeholder,
                    required: __props.required,
                    onBlur,
                    onFocus,
                    onChange: withModifiers(() => {
                    }, ["stop"]),
                    "onUpdate:modelValue": ($event) => searchTerm.value = $event
                  }), null, 16, ["id", "type", "placeholder", "required", "onChange", "onUpdate:modelValue"])),
                  unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                    key: 2,
                    "data-slot": "leading",
                    class: ui.value.leading({ class: props.ui?.leading })
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => [
                      unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$m, {
                        key: 0,
                        name: unref(leadingIconName),
                        "data-slot": "leadingIcon",
                        class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                      }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                        key: 1,
                        size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                      }, __props.avatar, {
                        "data-slot": "itemLeadingAvatar",
                        class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  unref(isTrailing) || !!slots.trailing || !!__props.clear ? (openBlock(), createBlock(unref(ComboboxTrigger), {
                    key: 3,
                    "data-slot": "trailing",
                    class: ui.value.trailing({ class: props.ui?.trailing })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "trailing", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => [
                        !!__props.clear && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(ComboboxCancel), {
                          key: 0,
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$h, mergeProps({
                              as: "span",
                              icon: __props.clearIcon || unref(appConfig).ui.icons.close,
                              variant: "link",
                              color: "neutral",
                              tabindex: "-1"
                            }, clearProps.value, {
                              "data-slot": "trailingClear",
                              class: ui.value.trailingClear({ class: props.ui?.trailingClear }),
                              onClick: withModifiers(onClear, ["stop"])
                            }), null, 16, ["icon", "class"])
                          ]),
                          _: 1
                        })) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$m, {
                          key: 1,
                          name: unref(trailingIconName),
                          "data-slot": "trailingIcon",
                          class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["as-child", "class"]),
              createVNode(unref(ComboboxPortal), unref(portalProps), {
                default: withCtx(() => [
                  createVNode(unref(ComboboxContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: props.ui?.content })
                  }, contentProps.value, {
                    onFocusOutside: withModifiers(() => {
                    }, ["prevent"])
                  }), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "content-top"),
                      createVNode(unref(ComboboxEmpty), {
                        "data-slot": "empty",
                        class: ui.value.empty({ class: props.ui?.empty })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                            createTextVNode(toDisplayString(searchTerm.value ? unref(t)("inputMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("inputMenu.noData")), 1)
                          ])
                        ]),
                        _: 3
                      }, 8, ["class"]),
                      createVNode("div", {
                        ref_key: "viewportRef",
                        ref: viewportRef,
                        role: "presentation",
                        "data-slot": "viewport",
                        class: ui.value.viewport({ class: props.ui?.viewport })
                      }, [
                        !!__props.virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                          createVNode(unref(ComboboxVirtualizer), mergeProps({
                            options: filteredItems.value,
                            "text-content": (item2) => isInputItem(item2) ? unref(get)(item2, props.labelKey) : String(item2)
                          }, virtualizerProps.value), {
                            default: withCtx(({ option: item, virtualItem }) => [
                              createVNode(unref(ReuseItemTemplate), {
                                item,
                                index: virtualItem.index
                              }, null, 8, ["item", "index"])
                            ]),
                            _: 1
                          }, 16, ["options", "text-content"]),
                          createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ComboboxGroup), {
                            key: 0,
                            "data-slot": "group",
                            class: ui.value.group({ class: props.ui?.group })
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ReuseCreateItemTemplate))
                            ]),
                            _: 1
                          }, 8, ["class"])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                            return openBlock(), createBlock(unref(ComboboxGroup), {
                              key: `group-${groupIndex}`,
                              "data-slot": "group",
                              class: ui.value.group({ class: props.ui?.group })
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                  return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                    key: `group-${groupIndex}-${index}`,
                                    item,
                                    index
                                  }, null, 8, ["item", "index"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128)),
                          createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ComboboxGroup), {
                            key: 1,
                            "data-slot": "group",
                            class: ui.value.group({ class: props.ui?.group })
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ReuseCreateItemTemplate))
                            ]),
                            _: 1
                          }, 8, ["class"])) : createCommentVNode("", true)
                        ], 64))
                      ], 2),
                      renderSlot(_ctx.$slots, "content-bottom"),
                      !!__props.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                        "data-slot": "arrow",
                        class: ui.value.arrow({ class: props.ui?.arrow })
                      }), null, 16, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 16, ["class", "onFocusOutside"])
                ]),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const theme$3 = {
  "slots": {
    "base": [
      "group relative inline-flex items-center rounded-md select-none",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed",
    "segment": [
      "rounded text-center outline-hidden data-placeholder:text-dimmed data-[segment=literal]:text-muted data-invalid:text-error data-disabled:cursor-not-allowed data-disabled:opacity-75",
      "transition-colors"
    ],
    "separatorIcon": "shrink-0 size-4 text-muted"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "size": {
      "xs": {
        "base": [
          "px-2 py-1 text-xs gap-1",
          "gap-0.25"
        ],
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "segment": "data-[segment=day]:w-6 data-[segment=month]:w-6 data-[segment=year]:w-9"
      },
      "sm": {
        "base": [
          "px-2.5 py-1.5 text-xs gap-1.5",
          "gap-0.5"
        ],
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "segment": "data-[segment=day]:w-6 data-[segment=month]:w-6 data-[segment=year]:w-9"
      },
      "md": {
        "base": [
          "px-2.5 py-1.5 text-sm gap-1.5",
          "gap-0.5"
        ],
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "segment": "data-[segment=day]:w-7 data-[segment=month]:w-7 data-[segment=year]:w-11"
      },
      "lg": {
        "base": [
          "px-3 py-2 text-sm gap-2",
          "gap-0.75"
        ],
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "segment": "data-[segment=day]:w-7 data-[segment=month]:w-7 data-[segment=year]:w-11"
      },
      "xl": {
        "base": [
          "px-3 py-2 text-base gap-2",
          "gap-0.75"
        ],
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6",
        "segment": "data-[segment=day]:w-8 data-[segment=month]:w-8 data-[segment=year]:w-13"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "variant": "outline",
      "class": {
        "segment": "focus:bg-elevated"
      }
    },
    {
      "variant": "soft",
      "class": {
        "segment": "focus:bg-accented/50 group-hover:focus:bg-accented"
      }
    },
    {
      "variant": "subtle",
      "class": {
        "segment": "focus:bg-accented"
      }
    },
    {
      "variant": "ghost",
      "class": {
        "segment": "focus:bg-elevated group-hover:focus:bg-accented"
      }
    },
    {
      "variant": "none",
      "class": {
        "segment": "focus:bg-elevated"
      }
    },
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UInputDate",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    separatorIcon: { type: null, required: false },
    range: { type: Boolean, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false },
    defaultPlaceholder: { type: null, required: false },
    placeholder: { type: null, required: false },
    hourCycle: { type: null, required: false },
    step: { type: Object, required: false },
    granularity: { type: String, required: false },
    hideTimeZone: { type: Boolean, required: false },
    maxValue: { type: null, required: false },
    minValue: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false },
    isDateUnavailable: { type: Function, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "update:placeholder"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactiveOmit(props, "id", "name", "range", "modelValue", "defaultValue", "color", "variant", "size", "highlight", "disabled", "autofocus", "autofocusDelay", "icon", "avatar", "leading", "leadingIcon", "trailing", "trailingIcon", "loading", "loadingIcon", "separatorIcon", "class", "ui"), emits);
    const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, size: formGroupSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const [DefineSegmentsTemplate, ReuseSegmentsTemplate] = createReusableTemplate();
    const inputSize = computed(() => fieldGroupSize.value || formGroupSize.value);
    const ui = computed(() => tv({ extend: tv(theme$3), ...appConfig.ui?.inputDate || {} })({
      color: color.value,
      variant: props.variant,
      size: inputSize.value,
      highlight: highlight.value,
      loading: props.loading,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      fieldGroup: orientation.value
    }));
    const inputsRef = ref([]);
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    function onFocus(event) {
      emitFormFocus();
      emits("focus", event);
    }
    const DateField$1 = computed(() => props.range ? DateRangeField : DateField);
    __expose({
      inputsRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineSegmentsTemplate), null, {
        default: withCtx(({ segments, type }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(segments, (segment, index) => {
              _push2(ssrRenderComponent(unref(DateField$1).Input, {
                key: `${segment.part}-${index}`,
                ref_for: true,
                ref: (el) => inputsRef.value[index] = el,
                type,
                part: segment.part,
                "data-slot": "segment",
                class: ui.value.segment({ class: props.ui?.segment }),
                "data-segment": segment.part
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(segment.value.trim())}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(segment.value.trim()), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(segments, (segment, index) => {
                return openBlock(), createBlock(unref(DateField$1).Input, {
                  key: `${segment.part}-${index}`,
                  ref_for: true,
                  ref: (el) => inputsRef.value[index] = el,
                  type,
                  part: segment.part,
                  "data-slot": "segment",
                  class: ui.value.segment({ class: props.ui?.segment }),
                  "data-segment": segment.part
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(segment.value.trim()), 1)
                  ]),
                  _: 2
                }, 1032, ["type", "part", "class", "data-segment"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(DateField$1).Root, mergeProps({ ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
        id: unref(id),
        "model-value": __props.modelValue,
        "default-value": __props.defaultValue,
        name: unref(name),
        disabled: unref(disabled),
        "data-slot": "base",
        class: ui.value.base({ class: [props.ui?.base, props.class] }),
        "onUpdate:modelValue": onUpdate,
        onBlur,
        onFocus
      }), {
        default: withCtx(({ segments }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (Array.isArray(segments)) {
              _push2(ssrRenderComponent(unref(ReuseSegmentsTemplate), { segments }, null, _parent2, _scopeId));
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(ReuseSegmentsTemplate), {
                segments: segments.start,
                type: "start"
              }, null, _parent2, _scopeId));
              ssrRenderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => {
                _push2(ssrRenderComponent(_sfc_main$m, {
                  name: __props.separatorIcon || unref(appConfig).ui.icons.minus,
                  "data-slot": "separatorIcon",
                  class: ui.value.separatorIcon({ class: props.ui?.separatorIcon })
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              _push2(ssrRenderComponent(unref(ReuseSegmentsTemplate), {
                segments: segments.end,
                type: "end"
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$m, {
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$k, mergeProps({
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: props.ui?.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$m, {
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              Array.isArray(segments) ? (openBlock(), createBlock(unref(ReuseSegmentsTemplate), {
                key: 0,
                segments
              }, null, 8, ["segments"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(unref(ReuseSegmentsTemplate), {
                  segments: segments.start,
                  type: "start"
                }, null, 8, ["segments"]),
                renderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => [
                  createVNode(_sfc_main$m, {
                    name: __props.separatorIcon || unref(appConfig).ui.icons.minus,
                    "data-slot": "separatorIcon",
                    class: ui.value.separatorIcon({ class: props.ui?.separatorIcon })
                  }, null, 8, ["name", "class"])
                ]),
                createVNode(unref(ReuseSegmentsTemplate), {
                  segments: segments.end,
                  type: "end"
                }, null, 8, ["segments"])
              ], 64)),
              renderSlot(_ctx.$slots, "default", { ui: ui.value }),
              unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 2,
                "data-slot": "leading",
                class: ui.value.leading({ class: props.ui?.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$m, {
                    key: 0,
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$k, mergeProps({
                    key: 1,
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 3,
                "data-slot": "trailing",
                class: ui.value.trailing({ class: props.ui?.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                  unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$m, {
                    key: 0,
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/InputDate.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "content": "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",
    "arrow": "fill-default"
  }
};
const _sfc_main$4 = {
  __name: "UPopover",
  __ssrInlineRender: true,
  props: {
    mode: { type: null, required: false, default: "click" },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    reference: { type: null, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    modal: { type: Boolean, required: false },
    openDelay: { type: Number, required: false, default: 0 },
    closeDelay: { type: Number, required: false, default: 0 }
  },
  emits: ["close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const pick = props.mode === "hover" ? reactivePick(props, "defaultOpen", "open", "openDelay", "closeDelay") : reactivePick(props, "defaultOpen", "open", "modal");
    const rootProps = useForwardPropsEmits(pick, emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      return {};
    });
    const arrowProps = toRef(() => props.arrow);
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.popover || {} })({
      side: contentProps.value.side
    }));
    const Component = computed(() => props.mode === "hover" ? HoverCard : Popover);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Component).Root, mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default || !!__props.reference) {
              _push2(ssrRenderComponent(unref(Component).Trigger, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ("Anchor" in Component.value && !!slots.anchor) {
              _push2(ssrRenderComponent(unref(Component).Anchor, { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "anchor", close ? { close } : {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "anchor", close ? { close } : {})
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Component).Portal, unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Component).Content, mergeProps(contentProps.value, {
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", close ? { close } : {}, null, _push4, _parent4, _scopeId3);
                        if (!!__props.arrow) {
                          _push4(ssrRenderComponent(unref(Component).Arrow, mergeProps(arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                          !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                        !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: props.ui?.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1040, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default || !!__props.reference ? (openBlock(), createBlock(unref(Component).Trigger, {
                key: 0,
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["reference", "class"])) : createCommentVNode("", true),
              "Anchor" in Component.value && !!slots.anchor ? (openBlock(), createBlock(unref(Component).Anchor, {
                key: 1,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "anchor", close ? { close } : {})
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              createVNode(unref(Component).Portal, unref(portalProps), {
                default: withCtx(() => [
                  createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                      !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                        "data-slot": "arrow",
                        class: ui.value.arrow({ class: props.ui?.arrow })
                      }), null, 16, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1040, ["class"])
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "",
    "header": "flex items-center justify-between",
    "body": "flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0",
    "heading": "text-center font-medium truncate mx-auto",
    "grid": "w-full border-collapse select-none space-y-1 focus:outline-none",
    "gridRow": "grid grid-cols-7 place-items-center",
    "gridWeekDaysRow": "mb-1 grid w-full grid-cols-7",
    "gridBody": "grid",
    "headCell": "rounded-md",
    "headCellWeek": "rounded-md text-muted",
    "cell": "relative text-center",
    "cellTrigger": [
      "m-0.5 relative flex items-center justify-center rounded-full whitespace-nowrap focus-visible:ring-2 focus:outline-none data-disabled:text-muted data-unavailable:line-through data-unavailable:text-muted data-unavailable:pointer-events-none data-today:font-semibold data-[outside-view]:text-muted",
      "transition"
    ],
    "cellWeek": "relative text-center text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "headCell": "text-primary",
        "cellTrigger": "focus-visible:ring-primary"
      },
      "secondary": {
        "headCell": "text-secondary",
        "cellTrigger": "focus-visible:ring-secondary"
      },
      "success": {
        "headCell": "text-success",
        "cellTrigger": "focus-visible:ring-success"
      },
      "info": {
        "headCell": "text-info",
        "cellTrigger": "focus-visible:ring-info"
      },
      "warning": {
        "headCell": "text-warning",
        "cellTrigger": "focus-visible:ring-warning"
      },
      "error": {
        "headCell": "text-error",
        "cellTrigger": "focus-visible:ring-error"
      },
      "neutral": {
        "headCell": "text-highlighted",
        "cellTrigger": "focus-visible:ring-inverted"
      }
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "heading": "text-xs",
        "cell": "text-xs",
        "cellWeek": "text-xs",
        "headCell": "text-[10px]",
        "headCellWeek": "text-[10px]",
        "cellTrigger": "size-7",
        "body": "space-y-2 pt-2"
      },
      "sm": {
        "heading": "text-xs",
        "headCell": "text-xs",
        "headCellWeek": "text-xs",
        "cellWeek": "text-xs",
        "cell": "text-xs",
        "cellTrigger": "size-7"
      },
      "md": {
        "heading": "text-sm",
        "headCell": "text-xs",
        "headCellWeek": "text-xs",
        "cellWeek": "text-xs",
        "cell": "text-sm",
        "cellTrigger": "size-8"
      },
      "lg": {
        "heading": "text-md",
        "headCell": "text-md",
        "headCellWeek": "text-md",
        "cellTrigger": "size-9 text-md"
      },
      "xl": {
        "heading": "text-lg",
        "headCell": "text-lg",
        "headCellWeek": "text-lg",
        "cellTrigger": "size-10 text-lg"
      }
    },
    "weekNumbers": {
      "true": {
        "gridRow": "grid-cols-8",
        "gridWeekDaysRow": "grid-cols-8 [&>*:first-child]:col-start-2"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-[selected]:bg-primary data-[selected]:text-inverted data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/20 hover:not-data-[selected]:bg-primary/20"
      }
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-[selected]:bg-secondary data-[selected]:text-inverted data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/20 hover:not-data-[selected]:bg-secondary/20"
      }
    },
    {
      "color": "success",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-[selected]:bg-success data-[selected]:text-inverted data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/20 hover:not-data-[selected]:bg-success/20"
      }
    },
    {
      "color": "info",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-[selected]:bg-info data-[selected]:text-inverted data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/20 hover:not-data-[selected]:bg-info/20"
      }
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-[selected]:bg-warning data-[selected]:text-inverted data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/20 hover:not-data-[selected]:bg-warning/20"
      }
    },
    {
      "color": "error",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-[selected]:bg-error data-[selected]:text-inverted data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/20 hover:not-data-[selected]:bg-error/20"
      }
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-primary/50 data-[selected]:text-primary data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/10 hover:not-data-[selected]:bg-primary/10"
      }
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-secondary/50 data-[selected]:text-secondary data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/10 hover:not-data-[selected]:bg-secondary/10"
      }
    },
    {
      "color": "success",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-success/50 data-[selected]:text-success data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/10 hover:not-data-[selected]:bg-success/10"
      }
    },
    {
      "color": "info",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-info/50 data-[selected]:text-info data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/10 hover:not-data-[selected]:bg-info/10"
      }
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-warning/50 data-[selected]:text-warning data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/10 hover:not-data-[selected]:bg-warning/10"
      }
    },
    {
      "color": "error",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-error/50 data-[selected]:text-error data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/10 hover:not-data-[selected]:bg-error/10"
      }
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-[selected]:bg-primary/10 data-[selected]:text-primary data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/20 hover:not-data-[selected]:bg-primary/20"
      }
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-[selected]:bg-secondary/10 data-[selected]:text-secondary data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/20 hover:not-data-[selected]:bg-secondary/20"
      }
    },
    {
      "color": "success",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-[selected]:bg-success/10 data-[selected]:text-success data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/20 hover:not-data-[selected]:bg-success/20"
      }
    },
    {
      "color": "info",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-[selected]:bg-info/10 data-[selected]:text-info data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/20 hover:not-data-[selected]:bg-info/20"
      }
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-[selected]:bg-warning/10 data-[selected]:text-warning data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/20 hover:not-data-[selected]:bg-warning/20"
      }
    },
    {
      "color": "error",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-[selected]:bg-error/10 data-[selected]:text-error data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/20 hover:not-data-[selected]:bg-error/20"
      }
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-[selected]:bg-primary/10 data-[selected]:text-primary data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-primary/25 data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/20 hover:not-data-[selected]:bg-primary/20"
      }
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-[selected]:bg-secondary/10 data-[selected]:text-secondary data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-secondary/25 data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/20 hover:not-data-[selected]:bg-secondary/20"
      }
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-[selected]:bg-success/10 data-[selected]:text-success data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-success/25 data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/20 hover:not-data-[selected]:bg-success/20"
      }
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-[selected]:bg-info/10 data-[selected]:text-info data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-info/25 data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/20 hover:not-data-[selected]:bg-info/20"
      }
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-[selected]:bg-warning/10 data-[selected]:text-warning data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-warning/25 data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/20 hover:not-data-[selected]:bg-warning/20"
      }
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-[selected]:bg-error/10 data-[selected]:text-error data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-error/25 data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/20 hover:not-data-[selected]:bg-error/20"
      }
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-[selected]:bg-inverted data-[selected]:text-inverted data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/20 hover:not-data-[selected]:bg-inverted/10"
      }
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-accented data-[selected]:text-default data-[selected]:bg-default data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/10 hover:not-data-[selected]:bg-inverted/10"
      }
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-[selected]:bg-elevated data-[selected]:text-default data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/20 hover:not-data-[selected]:bg-inverted/10"
      }
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-[selected]:bg-elevated data-[selected]:text-default data-[selected]:ring data-[selected]:ring-inset data-[selected]:ring-accented data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/20 hover:not-data-[selected]:bg-inverted/10"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "solid"
  }
};
const _sfc_main$3 = {
  __name: "UCalendar",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    nextYearIcon: { type: null, required: false },
    nextYear: { type: Object, required: false },
    nextMonthIcon: { type: null, required: false },
    nextMonth: { type: Object, required: false },
    prevYearIcon: { type: null, required: false },
    prevYear: { type: Object, required: false },
    prevMonthIcon: { type: null, required: false },
    prevMonth: { type: Object, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    range: { type: Boolean, required: false },
    multiple: { type: Boolean, required: false },
    monthControls: { type: Boolean, required: false, default: true },
    yearControls: { type: Boolean, required: false, default: true },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    weekNumbers: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultPlaceholder: { type: null, required: false },
    placeholder: { type: null, required: false },
    allowNonContiguousRanges: { type: Boolean, required: false },
    pagedNavigation: { type: Boolean, required: false },
    preventDeselect: { type: Boolean, required: false },
    maximumDays: { type: Number, required: false },
    weekStartsOn: { type: Number, required: false },
    weekdayFormat: { type: String, required: false },
    fixedWeeks: { type: Boolean, required: false, default: true },
    maxValue: { type: null, required: false },
    minValue: { type: null, required: false },
    numberOfMonths: { type: Number, required: false },
    disabled: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false },
    initialFocus: { type: Boolean, required: false },
    isDateDisabled: { type: Function, required: false },
    isDateUnavailable: { type: Function, required: false },
    isDateHighlightable: { type: Function, required: false },
    nextPage: { type: Function, required: false },
    prevPage: { type: Function, required: false },
    disableDaysOutsideCurrentView: { type: Boolean, required: false },
    fixedDate: { type: String, required: false }
  },
  emits: ["update:modelValue", "update:placeholder", "update:validModelValue", "update:startValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { dir, t, locale } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactiveOmit(props, "range", "modelValue", "defaultValue", "color", "variant", "size", "monthControls", "yearControls", "class", "ui"), emits);
    const nextYearIcon = computed(() => props.nextYearIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight));
    const nextMonthIcon = computed(() => props.nextMonthIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const prevYearIcon = computed(() => props.prevYearIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft));
    const prevMonthIcon = computed(() => props.prevMonthIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft));
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.calendar || {} })({
      color: props.color,
      size: props.size,
      variant: props.variant,
      weekNumbers: props.weekNumbers
    }));
    function paginateYear(date, sign) {
      if (sign === -1) {
        return date.subtract({ years: 1 });
      }
      return date.add({ years: 1 });
    }
    const Calendar$1 = computed(() => props.range ? RangeCalendar : Calendar);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Calendar$1).Root, mergeProps(unref(rootProps), {
        "model-value": __props.modelValue,
        "default-value": __props.defaultValue,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx(({ weekDays, grid }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar$1).Header, {
              "data-slot": "header",
              class: ui.value.header({ class: props.ui?.header })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.yearControls) {
                    _push3(ssrRenderComponent(unref(Calendar$1).Prev, {
                      "prev-page": (date) => paginateYear(date, -1),
                      "aria-label": unref(t)("calendar.prevYear"),
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$h, mergeProps({
                            icon: prevYearIcon.value,
                            size: props.size,
                            color: "neutral",
                            variant: "ghost"
                          }, props.prevYear), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$h, mergeProps({
                              icon: prevYearIcon.value,
                              size: props.size,
                              color: "neutral",
                              variant: "ghost"
                            }, props.prevYear), null, 16, ["icon", "size"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (props.monthControls) {
                    _push3(ssrRenderComponent(unref(Calendar$1).Prev, {
                      "aria-label": unref(t)("calendar.prevMonth"),
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$h, mergeProps({
                            icon: prevMonthIcon.value,
                            size: props.size,
                            color: "neutral",
                            variant: "ghost"
                          }, props.prevMonth), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$h, mergeProps({
                              icon: prevMonthIcon.value,
                              size: props.size,
                              color: "neutral",
                              variant: "ghost"
                            }, props.prevMonth), null, 16, ["icon", "size"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(Calendar$1).Heading, {
                    "data-slot": "heading",
                    class: ui.value.heading({ class: props.ui?.heading })
                  }, {
                    default: withCtx(({ headingValue }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "heading", { value: headingValue }, () => {
                          _push4(`${ssrInterpolate(headingValue)}`);
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "heading", { value: headingValue }, () => [
                            createTextVNode(toDisplayString(headingValue), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  if (props.monthControls) {
                    _push3(ssrRenderComponent(unref(Calendar$1).Next, {
                      "aria-label": unref(t)("calendar.nextMonth"),
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$h, mergeProps({
                            icon: nextMonthIcon.value,
                            size: props.size,
                            color: "neutral",
                            variant: "ghost"
                          }, props.nextMonth), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$h, mergeProps({
                              icon: nextMonthIcon.value,
                              size: props.size,
                              color: "neutral",
                              variant: "ghost"
                            }, props.nextMonth), null, 16, ["icon", "size"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (props.yearControls) {
                    _push3(ssrRenderComponent(unref(Calendar$1).Next, {
                      "next-page": (date) => paginateYear(date, 1),
                      "aria-label": unref(t)("calendar.nextYear"),
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$h, mergeProps({
                            icon: nextYearIcon.value,
                            size: props.size,
                            color: "neutral",
                            variant: "ghost"
                          }, props.nextYear), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$h, mergeProps({
                              icon: nextYearIcon.value,
                              size: props.size,
                              color: "neutral",
                              variant: "ghost"
                            }, props.nextYear), null, 16, ["icon", "size"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    props.yearControls ? (openBlock(), createBlock(unref(Calendar$1).Prev, {
                      key: 0,
                      "prev-page": (date) => paginateYear(date, -1),
                      "aria-label": unref(t)("calendar.prevYear"),
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$h, mergeProps({
                          icon: prevYearIcon.value,
                          size: props.size,
                          color: "neutral",
                          variant: "ghost"
                        }, props.prevYear), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["prev-page", "aria-label"])) : createCommentVNode("", true),
                    props.monthControls ? (openBlock(), createBlock(unref(Calendar$1).Prev, {
                      key: 1,
                      "aria-label": unref(t)("calendar.prevMonth"),
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$h, mergeProps({
                          icon: prevMonthIcon.value,
                          size: props.size,
                          color: "neutral",
                          variant: "ghost"
                        }, props.prevMonth), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])) : createCommentVNode("", true),
                    createVNode(unref(Calendar$1).Heading, {
                      "data-slot": "heading",
                      class: ui.value.heading({ class: props.ui?.heading })
                    }, {
                      default: withCtx(({ headingValue }) => [
                        renderSlot(_ctx.$slots, "heading", { value: headingValue }, () => [
                          createTextVNode(toDisplayString(headingValue), 1)
                        ])
                      ]),
                      _: 3
                    }, 8, ["class"]),
                    props.monthControls ? (openBlock(), createBlock(unref(Calendar$1).Next, {
                      key: 2,
                      "aria-label": unref(t)("calendar.nextMonth"),
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$h, mergeProps({
                          icon: nextMonthIcon.value,
                          size: props.size,
                          color: "neutral",
                          variant: "ghost"
                        }, props.nextMonth), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])) : createCommentVNode("", true),
                    props.yearControls ? (openBlock(), createBlock(unref(Calendar$1).Next, {
                      key: 3,
                      "next-page": (date) => paginateYear(date, 1),
                      "aria-label": unref(t)("calendar.nextYear"),
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$h, mergeProps({
                          icon: nextYearIcon.value,
                          size: props.size,
                          color: "neutral",
                          variant: "ghost"
                        }, props.nextYear), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["next-page", "aria-label"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId}><!--[-->`);
            ssrRenderList(grid, (month) => {
              _push2(ssrRenderComponent(unref(Calendar$1).Grid, {
                key: month.value.toString(),
                "data-slot": "grid",
                class: ui.value.grid({ class: props.ui?.grid })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Calendar$1).GridHead, null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Calendar$1).GridRow, {
                            "data-slot": "gridWeekDaysRow",
                            class: ui.value.gridWeekDaysRow({ class: props.ui?.gridWeekDaysRow })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(weekDays, (day) => {
                                  _push5(ssrRenderComponent(unref(Calendar$1).HeadCell, {
                                    key: day,
                                    "data-slot": "headCell",
                                    class: ui.value.headCell({ class: props.ui?.headCell })
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "week-day", { day }, () => {
                                          _push6(`${ssrInterpolate(day)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "week-day", { day }, () => [
                                            createTextVNode(toDisplayString(day), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                    return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                      key: day,
                                      "data-slot": "headCell",
                                      class: ui.value.headCell({ class: props.ui?.headCell })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "week-day", { day }, () => [
                                          createTextVNode(toDisplayString(day), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Calendar$1).GridRow, {
                              "data-slot": "gridWeekDaysRow",
                              class: ui.value.gridWeekDaysRow({ class: props.ui?.gridWeekDaysRow })
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                  return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                    key: day,
                                    "data-slot": "headCell",
                                    class: ui.value.headCell({ class: props.ui?.headCell })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "week-day", { day }, () => [
                                        createTextVNode(toDisplayString(day), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Calendar$1).GridBody, {
                      "data-slot": "gridBody",
                      class: ui.value.gridBody({ class: props.ui?.gridBody })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(month.rows, (weekDates, index) => {
                            _push4(ssrRenderComponent(unref(Calendar$1).GridRow, {
                              key: `weekDate-${index}`,
                              "data-slot": "gridRow",
                              class: ui.value.gridRow({ class: props.ui?.gridRow })
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (__props.weekNumbers && weekDates[0]) {
                                    _push5(`<td role="gridcell" data-slot="cellWeek" class="${ssrRenderClass(ui.value.cellWeek({ class: props.ui?.cellWeek }))}"${_scopeId4}>${ssrInterpolate(unref(getWeekNumber)(weekDates[0], unref(locale).code))}</td>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<!--[-->`);
                                  ssrRenderList(weekDates, (weekDate) => {
                                    _push5(ssrRenderComponent(unref(Calendar$1).Cell, {
                                      key: weekDate.toString(),
                                      date: weekDate,
                                      "data-slot": "cell",
                                      class: ui.value.cell({ class: props.ui?.cell })
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(Calendar$1).CellTrigger, {
                                            day: weekDate,
                                            month: month.value,
                                            "data-slot": "cellTrigger",
                                            class: ui.value.cellTrigger({ class: props.ui?.cellTrigger })
                                          }, {
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                ssrRenderSlot(_ctx.$slots, "day", { day: weekDate }, () => {
                                                  _push7(`${ssrInterpolate(weekDate.day)}`);
                                                }, _push7, _parent7, _scopeId6);
                                              } else {
                                                return [
                                                  renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                                    createTextVNode(toDisplayString(weekDate.day), 1)
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(Calendar$1).CellTrigger, {
                                              day: weekDate,
                                              month: month.value,
                                              "data-slot": "cellTrigger",
                                              class: ui.value.cellTrigger({ class: props.ui?.cellTrigger })
                                            }, {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                                  createTextVNode(toDisplayString(weekDate.day), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["day", "month", "class"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    __props.weekNumbers && weekDates[0] ? (openBlock(), createBlock("td", {
                                      key: 0,
                                      role: "gridcell",
                                      "data-slot": "cellWeek",
                                      class: ui.value.cellWeek({ class: props.ui?.cellWeek })
                                    }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                      return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                        key: weekDate.toString(),
                                        date: weekDate,
                                        "data-slot": "cell",
                                        class: ui.value.cell({ class: props.ui?.cell })
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Calendar$1).CellTrigger, {
                                            day: weekDate,
                                            month: month.value,
                                            "data-slot": "cellTrigger",
                                            class: ui.value.cellTrigger({ class: props.ui?.cellTrigger })
                                          }, {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                                createTextVNode(toDisplayString(weekDate.day), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["day", "month", "class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["date", "class"]);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                              return openBlock(), createBlock(unref(Calendar$1).GridRow, {
                                key: `weekDate-${index}`,
                                "data-slot": "gridRow",
                                class: ui.value.gridRow({ class: props.ui?.gridRow })
                              }, {
                                default: withCtx(() => [
                                  __props.weekNumbers && weekDates[0] ? (openBlock(), createBlock("td", {
                                    key: 0,
                                    role: "gridcell",
                                    "data-slot": "cellWeek",
                                    class: ui.value.cellWeek({ class: props.ui?.cellWeek })
                                  }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                    return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                      key: weekDate.toString(),
                                      date: weekDate,
                                      "data-slot": "cell",
                                      class: ui.value.cell({ class: props.ui?.cell })
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Calendar$1).CellTrigger, {
                                          day: weekDate,
                                          month: month.value,
                                          "data-slot": "cellTrigger",
                                          class: ui.value.cellTrigger({ class: props.ui?.cellTrigger })
                                        }, {
                                          default: withCtx(() => [
                                            renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                              createTextVNode(toDisplayString(weekDate.day), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["day", "month", "class"])
                                      ]),
                                      _: 2
                                    }, 1032, ["date", "class"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["class"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Calendar$1).GridHead, null, {
                        default: withCtx(() => [
                          createVNode(unref(Calendar$1).GridRow, {
                            "data-slot": "gridWeekDaysRow",
                            class: ui.value.gridWeekDaysRow({ class: props.ui?.gridWeekDaysRow })
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                  key: day,
                                  "data-slot": "headCell",
                                  class: ui.value.headCell({ class: props.ui?.headCell })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "week-day", { day }, () => [
                                      createTextVNode(toDisplayString(day), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(Calendar$1).GridBody, {
                        "data-slot": "gridBody",
                        class: ui.value.gridBody({ class: props.ui?.gridBody })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(Calendar$1).GridRow, {
                              key: `weekDate-${index}`,
                              "data-slot": "gridRow",
                              class: ui.value.gridRow({ class: props.ui?.gridRow })
                            }, {
                              default: withCtx(() => [
                                __props.weekNumbers && weekDates[0] ? (openBlock(), createBlock("td", {
                                  key: 0,
                                  role: "gridcell",
                                  "data-slot": "cellWeek",
                                  class: ui.value.cellWeek({ class: props.ui?.cellWeek })
                                }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                    key: weekDate.toString(),
                                    date: weekDate,
                                    "data-slot": "cell",
                                    class: ui.value.cell({ class: props.ui?.cell })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Calendar$1).CellTrigger, {
                                        day: weekDate,
                                        month: month.value,
                                        "data-slot": "cellTrigger",
                                        class: ui.value.cellTrigger({ class: props.ui?.cellTrigger })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                            createTextVNode(toDisplayString(weekDate.day), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["day", "month", "class"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date", "class"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(unref(Calendar$1).Header, {
                "data-slot": "header",
                class: ui.value.header({ class: props.ui?.header })
              }, {
                default: withCtx(() => [
                  props.yearControls ? (openBlock(), createBlock(unref(Calendar$1).Prev, {
                    key: 0,
                    "prev-page": (date) => paginateYear(date, -1),
                    "aria-label": unref(t)("calendar.prevYear"),
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$h, mergeProps({
                        icon: prevYearIcon.value,
                        size: props.size,
                        color: "neutral",
                        variant: "ghost"
                      }, props.prevYear), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["prev-page", "aria-label"])) : createCommentVNode("", true),
                  props.monthControls ? (openBlock(), createBlock(unref(Calendar$1).Prev, {
                    key: 1,
                    "aria-label": unref(t)("calendar.prevMonth"),
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$h, mergeProps({
                        icon: prevMonthIcon.value,
                        size: props.size,
                        color: "neutral",
                        variant: "ghost"
                      }, props.prevMonth), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : createCommentVNode("", true),
                  createVNode(unref(Calendar$1).Heading, {
                    "data-slot": "heading",
                    class: ui.value.heading({ class: props.ui?.heading })
                  }, {
                    default: withCtx(({ headingValue }) => [
                      renderSlot(_ctx.$slots, "heading", { value: headingValue }, () => [
                        createTextVNode(toDisplayString(headingValue), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"]),
                  props.monthControls ? (openBlock(), createBlock(unref(Calendar$1).Next, {
                    key: 2,
                    "aria-label": unref(t)("calendar.nextMonth"),
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$h, mergeProps({
                        icon: nextMonthIcon.value,
                        size: props.size,
                        color: "neutral",
                        variant: "ghost"
                      }, props.nextMonth), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : createCommentVNode("", true),
                  props.yearControls ? (openBlock(), createBlock(unref(Calendar$1).Next, {
                    key: 3,
                    "next-page": (date) => paginateYear(date, 1),
                    "aria-label": unref(t)("calendar.nextYear"),
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$h, mergeProps({
                        icon: nextYearIcon.value,
                        size: props.size,
                        color: "neutral",
                        variant: "ghost"
                      }, props.nextYear), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["next-page", "aria-label"])) : createCommentVNode("", true)
                ]),
                _: 3
              }, 8, ["class"]),
              createVNode("div", {
                "data-slot": "body",
                class: ui.value.body({ class: props.ui?.body })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(grid, (month) => {
                  return openBlock(), createBlock(unref(Calendar$1).Grid, {
                    key: month.value.toString(),
                    "data-slot": "grid",
                    class: ui.value.grid({ class: props.ui?.grid })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Calendar$1).GridHead, null, {
                        default: withCtx(() => [
                          createVNode(unref(Calendar$1).GridRow, {
                            "data-slot": "gridWeekDaysRow",
                            class: ui.value.gridWeekDaysRow({ class: props.ui?.gridWeekDaysRow })
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                  key: day,
                                  "data-slot": "headCell",
                                  class: ui.value.headCell({ class: props.ui?.headCell })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "week-day", { day }, () => [
                                      createTextVNode(toDisplayString(day), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(Calendar$1).GridBody, {
                        "data-slot": "gridBody",
                        class: ui.value.gridBody({ class: props.ui?.gridBody })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(Calendar$1).GridRow, {
                              key: `weekDate-${index}`,
                              "data-slot": "gridRow",
                              class: ui.value.gridRow({ class: props.ui?.gridRow })
                            }, {
                              default: withCtx(() => [
                                __props.weekNumbers && weekDates[0] ? (openBlock(), createBlock("td", {
                                  key: 0,
                                  role: "gridcell",
                                  "data-slot": "cellWeek",
                                  class: ui.value.cellWeek({ class: props.ui?.cellWeek })
                                }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                    key: weekDate.toString(),
                                    date: weekDate,
                                    "data-slot": "cell",
                                    class: ui.value.cell({ class: props.ui?.cell })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Calendar$1).CellTrigger, {
                                        day: weekDate,
                                        month: month.value,
                                        "data-slot": "cellTrigger",
                                        class: ui.value.cellTrigger({ class: props.ui?.cellTrigger })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                            createTextVNode(toDisplayString(weekDate.day), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["day", "month", "class"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date", "class"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["class"])
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 128))
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative flex items-start",
    "container": "flex items-center",
    "base": "rounded-sm ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full text-inverted",
    "icon": "shrink-0 size-full",
    "wrapper": "w-full",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "focus-visible:outline-primary",
        "indicator": "bg-primary"
      },
      "secondary": {
        "base": "focus-visible:outline-secondary",
        "indicator": "bg-secondary"
      },
      "success": {
        "base": "focus-visible:outline-success",
        "indicator": "bg-success"
      },
      "info": {
        "base": "focus-visible:outline-info",
        "indicator": "bg-info"
      },
      "warning": {
        "base": "focus-visible:outline-warning",
        "indicator": "bg-warning"
      },
      "error": {
        "base": "focus-visible:outline-error",
        "indicator": "bg-error"
      },
      "neutral": {
        "base": "focus-visible:outline-inverted",
        "indicator": "bg-inverted"
      }
    },
    "variant": {
      "list": {
        "root": ""
      },
      "card": {
        "root": "border border-muted rounded-lg"
      }
    },
    "indicator": {
      "start": {
        "root": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "root": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "text-center"
      }
    },
    "size": {
      "xs": {
        "base": "size-3",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "size-3.5",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "size-4",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "size-4.5",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "size-5",
        "container": "h-6",
        "wrapper": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    },
    "disabled": {
      "true": {
        "root": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    },
    "checked": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "size": "xs",
      "variant": "card",
      "class": {
        "root": "p-2.5"
      }
    },
    {
      "size": "sm",
      "variant": "card",
      "class": {
        "root": "p-3"
      }
    },
    {
      "size": "md",
      "variant": "card",
      "class": {
        "root": "p-3.5"
      }
    },
    {
      "size": "lg",
      "variant": "card",
      "class": {
        "root": "p-4"
      }
    },
    {
      "size": "xl",
      "variant": "card",
      "class": {
        "root": "p-4.5"
      }
    },
    {
      "color": "primary",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-secondary"
      }
    },
    {
      "color": "success",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-success"
      }
    },
    {
      "color": "info",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-info"
      }
    },
    {
      "color": "warning",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-warning"
      }
    },
    {
      "color": "error",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-error"
      }
    },
    {
      "color": "neutral",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-inverted"
      }
    },
    {
      "variant": "card",
      "disabled": true,
      "class": {
        "root": "cursor-not-allowed"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "list",
    "indicator": "start"
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UCheckbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    indicator: { type: null, required: false },
    icon: { type: null, required: false },
    indeterminateIcon: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    name: { type: String, required: false },
    value: { type: null, required: false },
    id: { type: String, required: false },
    defaultValue: { type: [Boolean, String], required: false }
  }, {
    "modelValue": { type: [Boolean, String], ...{ default: void 0 } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue", { type: [Boolean, String], ...{ default: void 0 } });
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props);
    const id = _id.value ?? useId();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.checkbox || {} })({
      size: size.value,
      color: color.value,
      variant: props.variant,
      indicator: props.indicator,
      required: props.required,
      disabled: disabled.value
    }));
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: !__props.variant || __props.variant === "list" ? __props.as : unref(Label),
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              modelValue: modelValue.value,
              "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
              name: unref(name),
              disabled: unref(disabled),
              "data-slot": "base",
              class: ui.value.base({ class: props.ui?.base })
            }), {
              default: withCtx(({ modelValue: modelValue2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckboxIndicator), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: props.ui?.indicator })
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (modelValue2 === "indeterminate") {
                          _push4(ssrRenderComponent(_sfc_main$m, {
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$m, {
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$m, {
                            key: 0,
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$m, {
                            key: 1,
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckboxIndicator), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: props.ui?.indicator })
                    }, {
                      default: withCtx(() => [
                        modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$m, {
                          key: 0,
                          name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$m, {
                          key: 1,
                          name: __props.icon || unref(appConfig).ui.icons.check,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"]))
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.label || !!slots.label || (__props.description || !!slots.description)) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
              if (__props.label || !!slots.label) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", { label: __props.label }, () => {
                        _push3(`${ssrInterpolate(__props.label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                          createTextVNode(toDisplayString(__props.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "container",
                class: ui.value.container({ class: props.ui?.container })
              }, [
                createVNode(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                  modelValue: modelValue.value,
                  "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
                  name: unref(name),
                  disabled: unref(disabled),
                  "data-slot": "base",
                  class: ui.value.base({ class: props.ui?.base })
                }), {
                  default: withCtx(({ modelValue: modelValue2 }) => [
                    createVNode(unref(CheckboxIndicator), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: props.ui?.indicator })
                    }, {
                      default: withCtx(() => [
                        modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$m, {
                          key: 0,
                          name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$m, {
                          key: 1,
                          name: __props.icon || unref(appConfig).ui.icons.check,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"]))
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]),
                  _: 1
                }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])
              ], 2),
              __props.label || !!slots.label || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                  key: 0,
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                      createTextVNode(toDisplayString(__props.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  "data-slot": "description",
                  class: ui.value.description({ class: props.ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const check = ref(false);
    const inputDate = useTemplateRef("inputDate");
    const dateNow = new Date(Date.now());
    const currentDate = new CalendarDate(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDay());
    const toast = useToast();
    const data = reactive({
      name: "",
      phone: "",
      from: "",
      from_address: "",
      to: "",
      to_address: "",
      date: shallowRef(currentDate)
    });
    const schema = v.object({
      name: v.pipe(v.string(), v.nonEmpty("Обязательное поле для заполнения")),
      phone: v.pipe(v.string(), v.nonEmpty("Обязательное поле для заполнения")),
      to: v.pipe(v.string(), v.nonEmpty("Обязательное поле для заполнения")),
      from: v.pipe(v.string(), v.nonEmpty("Обязательное поле для заполнения")),
      to_address: v.pipe(v.string(), v.nonEmpty("Обязательное поле для заполнения")),
      from_address: v.pipe(v.string(), v.nonEmpty("Обязательное поле для заполнения")),
      date: v.pipe(v.any(), v.nonEmpty("Обязательное поле для заполнения"))
    });
    const cities = ref(["Кумертау", "Мелеуз", "Салават", "Уфа"]);
    const from_cities = computed(() => {
      if (data.to === "Уфа") {
        return cities.value.filter((i) => i !== "Уфа");
      } else {
        return cities.value;
      }
    });
    const to_cities = computed(() => {
      if (data.from === "Уфа") {
        return cities.value.filter((i) => i !== "Уфа");
      } else {
        return cities.value.filter((i) => i === "Уфа");
      }
    });
    const reset = () => {
      data.to_address = "";
      data.from_address = "";
      data.to = "";
      data.from = "";
      data.name = "";
      data.phone = "";
      data.date = currentDate;
    };
    const createOrder = async () => {
      await $fetch("/api/order/create", {
        method: "POST",
        body: {
          ...data
        }
      });
    };
    const onSubmit = async () => {
      createOrder().then(() => {
        toast.add({ title: "Ответ", description: "Заявка была успешно создана", color: "success" });
      }).catch((response) => {
        console.log(response);
        toast.add({ title: "Ответ", description: "Произошла ошибка при создании заявки", color: "error" });
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionTitle = __nuxt_component_0;
      const _component_UForm = _sfc_main$8;
      const _component_UFormField = _sfc_main$7;
      const _component_UInput = _sfc_main$9;
      const _component_UInputMenu = _sfc_main$6;
      const _component_UInputDate = _sfc_main$5;
      const _component_UPopover = _sfc_main$4;
      const _component_UButton = _sfc_main$h;
      const _component_UCalendar = _sfc_main$3;
      const _component_UCheckbox = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SectionTitle, { title: "Сделать заявку" }, null, _parent));
      _push(ssrRenderComponent(_component_UForm, {
        class: "w-full flex flex-col justify-start items-center pt-10 gap-5",
        schema: unref(schema),
        state: unref(data),
        onSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col lg:grid lg:grid-cols-2 justify-start items-center pt-10 gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, { name: "name" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(data).name,
                    "onUpdate:modelValue": ($event) => unref(data).name = $event,
                    color: "primary",
                    placeholder: "Ф.И.О",
                    size: "xl"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(data).name,
                      "onUpdate:modelValue": ($event) => unref(data).name = $event,
                      color: "primary",
                      placeholder: "Ф.И.О",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { name: "phone" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, mergeProps({
                    modelValue: unref(data).phone,
                    "onUpdate:modelValue": ($event) => unref(data).phone = $event,
                    placeholder: "+7-(000)-000-00-00",
                    icon: "i-lucide-phone",
                    size: "xl"
                  }, ssrGetDirectiveProps(_ctx, unref(vMaska), "+7-(###)-###-##-##")), null, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives(createVNode(_component_UInput, {
                      modelValue: unref(data).phone,
                      "onUpdate:modelValue": ($event) => unref(data).phone = $event,
                      placeholder: "+7-(000)-000-00-00",
                      icon: "i-lucide-phone",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                      [unref(vMaska), "+7-(###)-###-##-##"]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { name: "from" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInputMenu, {
                    modelValue: unref(data).from,
                    "onUpdate:modelValue": ($event) => unref(data).from = $event,
                    items: unref(from_cities),
                    color: "primary",
                    placeholder: "Город отправления",
                    size: "xl"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInputMenu, {
                      modelValue: unref(data).from,
                      "onUpdate:modelValue": ($event) => unref(data).from = $event,
                      items: unref(from_cities),
                      color: "primary",
                      placeholder: "Город отправления",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { name: "from_address" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(data).from_address,
                    "onUpdate:modelValue": ($event) => unref(data).from_address = $event,
                    color: "primary",
                    placeholder: "Адрес отправления",
                    size: "xl"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(data).from_address,
                      "onUpdate:modelValue": ($event) => unref(data).from_address = $event,
                      color: "primary",
                      placeholder: "Адрес отправления",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { name: "to" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInputMenu, {
                    modelValue: unref(data).to,
                    "onUpdate:modelValue": ($event) => unref(data).to = $event,
                    items: unref(to_cities),
                    color: "primary",
                    placeholder: "Город прибытия",
                    size: "xl"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInputMenu, {
                      modelValue: unref(data).to,
                      "onUpdate:modelValue": ($event) => unref(data).to = $event,
                      items: unref(to_cities),
                      color: "primary",
                      placeholder: "Город прибытия",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { name: "to_address" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(data).to_address,
                    "onUpdate:modelValue": ($event) => unref(data).to_address = $event,
                    color: "primary",
                    placeholder: "Адрес прибытия",
                    size: "xl"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(data).to_address,
                      "onUpdate:modelValue": ($event) => unref(data).to_address = $event,
                      color: "primary",
                      placeholder: "Адрес прибытия",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { name: "date" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInputDate, {
                    ref_key: "inputDate",
                    ref: inputDate,
                    modelValue: unref(data).date,
                    "onUpdate:modelValue": ($event) => unref(data).date = $event
                  }, {
                    trailing: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UPopover, {
                          reference: unref(inputDate)?.inputsRef[3]?.$el,
                          ui: {
                            content: "text-white bg-gray-600 w-[320px] sm:w-[440px] rounded-[26px]"
                          }
                        }, {
                          content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UCalendar, {
                                modelValue: unref(data).date,
                                "onUpdate:modelValue": ($event) => unref(data).date = $event,
                                class: "p-2"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UCalendar, {
                                  modelValue: unref(data).date,
                                  "onUpdate:modelValue": ($event) => unref(data).date = $event,
                                  class: "p-2"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UButton, {
                                color: "neutral",
                                variant: "link",
                                size: "md",
                                icon: "i-lucide-calendar",
                                "aria-label": "Выберите дату",
                                class: "px-0"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UButton, {
                                  color: "neutral",
                                  variant: "link",
                                  size: "md",
                                  icon: "i-lucide-calendar",
                                  "aria-label": "Выберите дату",
                                  class: "px-0"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UPopover, {
                            reference: unref(inputDate)?.inputsRef[3]?.$el,
                            ui: {
                              content: "text-white bg-gray-600 w-[320px] sm:w-[440px] rounded-[26px]"
                            }
                          }, {
                            content: withCtx(() => [
                              createVNode(_component_UCalendar, {
                                modelValue: unref(data).date,
                                "onUpdate:modelValue": ($event) => unref(data).date = $event,
                                class: "p-2"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_UButton, {
                                color: "neutral",
                                variant: "link",
                                size: "md",
                                icon: "i-lucide-calendar",
                                "aria-label": "Выберите дату",
                                class: "px-0"
                              })
                            ]),
                            _: 1
                          }, 8, ["reference"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInputDate, {
                      ref_key: "inputDate",
                      ref: inputDate,
                      modelValue: unref(data).date,
                      "onUpdate:modelValue": ($event) => unref(data).date = $event
                    }, {
                      trailing: withCtx(() => [
                        createVNode(_component_UPopover, {
                          reference: unref(inputDate)?.inputsRef[3]?.$el,
                          ui: {
                            content: "text-white bg-gray-600 w-[320px] sm:w-[440px] rounded-[26px]"
                          }
                        }, {
                          content: withCtx(() => [
                            createVNode(_component_UCalendar, {
                              modelValue: unref(data).date,
                              "onUpdate:modelValue": ($event) => unref(data).date = $event,
                              class: "p-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "link",
                              size: "md",
                              icon: "i-lucide-calendar",
                              "aria-label": "Выберите дату",
                              class: "px-0"
                            })
                          ]),
                          _: 1
                        }, 8, ["reference"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="min-w-[320px] max-w-110 flex flex-col justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCheckbox, {
              modelValue: unref(check),
              "onUpdate:modelValue": ($event) => isRef(check) ? check.value = $event : null,
              label: "Подтверждение",
              description: "Даю согласие на обработку персональных данных и подтверждаю правильность введенных данных",
              ui: {
                base: "h-5 w-5 text-white bg-gray-600 mt-10 mr-2",
                description: "text-gray-400",
                label: "text-white text-lg"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="w-full flex flex-row justify-center items-center pt-5 mb-20 gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              class: "button-gradient uppercase h-16",
              icon: "i-lucide-send",
              disabled: !unref(check)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Отправить `);
                } else {
                  return [
                    createTextVNode(" Отправить ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              class: "button-gradient uppercase h-16",
              onClick: reset
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Очистить `);
                } else {
                  return [
                    createTextVNode(" Очистить ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col lg:grid lg:grid-cols-2 justify-start items-center pt-10 gap-5" }, [
                createVNode(_component_UFormField, { name: "name" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(data).name,
                      "onUpdate:modelValue": ($event) => unref(data).name = $event,
                      color: "primary",
                      placeholder: "Ф.И.О",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { name: "phone" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode(_component_UInput, {
                      modelValue: unref(data).phone,
                      "onUpdate:modelValue": ($event) => unref(data).phone = $event,
                      placeholder: "+7-(000)-000-00-00",
                      icon: "i-lucide-phone",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                      [unref(vMaska), "+7-(###)-###-##-##"]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { name: "from" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInputMenu, {
                      modelValue: unref(data).from,
                      "onUpdate:modelValue": ($event) => unref(data).from = $event,
                      items: unref(from_cities),
                      color: "primary",
                      placeholder: "Город отправления",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { name: "from_address" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(data).from_address,
                      "onUpdate:modelValue": ($event) => unref(data).from_address = $event,
                      color: "primary",
                      placeholder: "Адрес отправления",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { name: "to" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInputMenu, {
                      modelValue: unref(data).to,
                      "onUpdate:modelValue": ($event) => unref(data).to = $event,
                      items: unref(to_cities),
                      color: "primary",
                      placeholder: "Город прибытия",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { name: "to_address" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(data).to_address,
                      "onUpdate:modelValue": ($event) => unref(data).to_address = $event,
                      color: "primary",
                      placeholder: "Адрес прибытия",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { name: "date" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInputDate, {
                      ref_key: "inputDate",
                      ref: inputDate,
                      modelValue: unref(data).date,
                      "onUpdate:modelValue": ($event) => unref(data).date = $event
                    }, {
                      trailing: withCtx(() => [
                        createVNode(_component_UPopover, {
                          reference: unref(inputDate)?.inputsRef[3]?.$el,
                          ui: {
                            content: "text-white bg-gray-600 w-[320px] sm:w-[440px] rounded-[26px]"
                          }
                        }, {
                          content: withCtx(() => [
                            createVNode(_component_UCalendar, {
                              modelValue: unref(data).date,
                              "onUpdate:modelValue": ($event) => unref(data).date = $event,
                              class: "p-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "link",
                              size: "md",
                              icon: "i-lucide-calendar",
                              "aria-label": "Выберите дату",
                              class: "px-0"
                            })
                          ]),
                          _: 1
                        }, 8, ["reference"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "min-w-[320px] max-w-110 flex flex-col justify-center items-center" }, [
                  createVNode(_component_UCheckbox, {
                    modelValue: unref(check),
                    "onUpdate:modelValue": ($event) => isRef(check) ? check.value = $event : null,
                    label: "Подтверждение",
                    description: "Даю согласие на обработку персональных данных и подтверждаю правильность введенных данных",
                    ui: {
                      base: "h-5 w-5 text-white bg-gray-600 mt-10 mr-2",
                      description: "text-gray-400",
                      label: "text-white text-lg"
                    }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", { class: "w-full flex flex-row justify-center items-center pt-5 mb-20 gap-5" }, [
                createVNode(_component_UButton, {
                  type: "submit",
                  class: "button-gradient uppercase h-16",
                  icon: "i-lucide-send",
                  disabled: !unref(check)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Отправить ")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                createVNode(_component_UButton, {
                  class: "button-gradient uppercase h-16",
                  onClick: reset
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Очистить ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/order/create.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "OrderCreate" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UContainer = _sfc_main$b;
  const _component_OrderCreate = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-order w-full mx-auto h-auto py-5 border-b border-b-primary/70" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col justify-center items-center gap-5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_OrderCreate, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_OrderCreate)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const order = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "SectionOrder" });

export { order as default };
//# sourceMappingURL=order-Cio4sc_3.mjs.map

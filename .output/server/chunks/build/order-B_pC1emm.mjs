import { _ as _sfc_main$9, h as useToast, c as _sfc_main$f, t as tv, n as formBusInjectionKey, o as formStateInjectionKey, p as formErrorsInjectionKey, q as formInputsInjectionKey, r as formLoadingInjectionKey, s as formOptionsInjectionKey, v as inputIdInjectionKey, w as formFieldInjectionKey, b as useLocale, y as usePortal, e as useFormField, z as useFieldGroup, f as useComponentIcons, A as isArrayOfArray, x as get, B as compare, a as _sfc_main$k, g as _sfc_main$i, C as _sfc_main$j, l as looseToNumber, D as getDisplayValue } from './index-BGZzggxM.mjs';
import { _ as __nuxt_component_0 } from './title-BAS7RGFK.mjs';
import { mergeProps, withCtx, createVNode, defineComponent, ref, reactive, shallowRef, computed, watch, unref, withDirectives, isRef, createTextVNode, toDisplayString, useId, inject, provide, readonly, resolveDynamicComponent, renderSlot, useSlots, openBlock, createBlock, createCommentVNode, useModel, toRef, useTemplateRef, withModifiers, Fragment, renderList, mergeModels, toHandlers, toRaw, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderVNode, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { useEventBus, reactivePick, createReusableTemplate, reactiveOmit } from '@vueuse/core';
import { _ as _export_sfc, c as useAppConfig } from './server.mjs';
import { Primitive, Label, useFilter, useForwardPropsEmits, ComboboxItem, ComboboxLabel, ComboboxSeparator, ComboboxItemIndicator, ComboboxRoot, ComboboxAnchor, TagsInputRoot, TagsInputItem, TagsInputItemText, TagsInputItemDelete, ComboboxInput, TagsInputInput, ComboboxTrigger, ComboboxCancel, ComboboxPortal, ComboboxContent, ComboboxEmpty, ComboboxVirtualizer, ComboboxGroup, ComboboxArrow, TimeFieldRoot, TimeFieldInput, useForwardProps, CheckboxRoot, CheckboxIndicator } from 'reka-ui';
import { _ as _sfc_main$a } from './Input-D4KLJPHk.mjs';
import { y as defu, B as isEqual } from '../nitro/nitro.mjs';
import { a as __nuxt_component_5 } from './index-CZ0fzO44.mjs';
import { HoverCard, Popover, RangeCalendar, Calendar } from 'reka-ui/namespaced';
import { getWeekNumber } from 'reka-ui/date';
import { DateFormatter, Time, CalendarDate, getLocalTimeZone } from '@internationalized/date';
import { vMaska } from 'maska/vue';
import * as v from 'valibot';
import { minLength } from 'valibot';
import 'tailwind-variants';
import './nuxt-link-DZAxAXO9.mjs';
import 'vaul-vue';
import 'unhead/scripts';
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
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function isSuperStructSchema(schema) {
  return "schema" in schema && typeof schema.coercer === "function" && typeof schema.validator === "function" && typeof schema.refiner === "function";
}
function isStandardSchema(schema) {
  return "~standard" in schema;
}
async function validateStandardSchema(state, schema) {
  var _a;
  const result = await schema["~standard"].validate(state);
  if (result.issues) {
    return {
      errors: ((_a = result.issues) == null ? void 0 : _a.map((issue) => {
        var _a2;
        return {
          name: ((_a2 = issue.path) == null ? void 0 : _a2.map((item) => typeof item === "object" ? item.key : item).join(".")) || "",
          message: issue.message
        };
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
    (value2, key) => value2 == null ? void 0 : value2[key],
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
  constructor(formId, errors) {
    super("Form validation exception");
    __publicField(this, "formId");
    __publicField(this, "errors");
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
    var _a;
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a2;
      return tv({ extend: tv(theme$6), ...((_a2 = appConfig.ui) == null ? void 0 : _a2.form) || {} });
    });
    const formId = (_a = props.id) != null ? _a : useId();
    const bus = useEventBus(`form-${formId}`);
    const parentBus = props.nested === true && inject(
      formBusInjectionKey,
      void 0
    );
    const parentState = props.nested === true ? inject(formStateInjectionKey, void 0) : void 0;
    const state = computed(() => {
      if (parentState == null ? void 0 : parentState.value) {
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
      return errs.map((err) => {
        var _a2;
        return {
          ...err,
          id: (err == null ? void 0 : err.name) ? (_a2 = inputs.value[err.name]) == null ? void 0 : _a2.id : void 0
        };
      });
    }
    const transformedState = ref(null);
    async function getErrors() {
      var _a2;
      let errs = props.validate ? (_a2 = await props.validate(state.value)) != null ? _a2 : [] : [];
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
      var _a2, _b;
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
      if ((_a2 = errors.value) == null ? void 0 : _a2.length) {
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
        return (_b = transformedState.value) != null ? _b : state.value;
      }
      return state.value;
    }
    const loading = ref(false);
    provide(formLoadingInjectionKey, readonly(loading));
    async function onSubmitWrapper(payload) {
      var _a2;
      loading.value = props.loadingAuto && true;
      const event = payload;
      try {
        event.data = await _validate({ nested: true, transform: props.transform });
        await ((_a2 = props.onSubmit) == null ? void 0 : _a2.call(props, event));
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
      var _a2;
      const prefix = formPath + ".";
      const name = ((_a2 = error == null ? void 0 : error.name) == null ? void 0 : _a2.startsWith(prefix)) ? error.name.substring(prefix.length) : error.name;
      return { ...error, name };
    }
    function filterFormErrors(errors2, formPath) {
      if (!formPath) return errors2;
      return errors2.filter((e) => {
        var _a2;
        return (_a2 = e == null ? void 0 : e.name) == null ? void 0 : _a2.startsWith(formPath + ".");
      }).map((e) => stripFormPath(e, formPath));
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
      const patterns = names.map((name) => {
        var _a2, _b;
        return (_b = (_a2 = inputs.value) == null ? void 0 : _a2[name]) == null ? void 0 : _b.pattern;
      }).filter(Boolean);
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
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$5), ...((_a = appConfig.ui) == null ? void 0 : _a.formField) || {} })({
        size: props.size,
        required: props.required,
        orientation: props.orientation
      });
    });
    const formErrors = inject(formErrorsInjectionKey, null);
    const error = computed(() => {
      var _a, _b;
      return props.error || ((_b = (_a = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a.find((error2) => {
        var _a2;
        return error2.name === props.name || props.errorPattern && ((_a2 = error2.name) == null ? void 0 : _a2.match(props.errorPattern));
      })) == null ? void 0 : _b.message);
    });
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
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: (_a2 = props.ui) == null ? void 0 : _a2.wrapper }))}"${_scopeId}>`);
            if (__props.label || !!slots.label) {
              _push2(`<div data-slot="labelWrapper" class="${ssrRenderClass(ui.value.labelWrapper({ class: (_b = props.ui) == null ? void 0 : _b.labelWrapper }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Label), {
                for: id.value,
                "data-slot": "label",
                class: ui.value.label({ class: (_c = props.ui) == null ? void 0 : _c.label })
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
                _push2(`<span${ssrRenderAttr("id", `${unref(ariaId)}-hint`)} data-slot="hint" class="${ssrRenderClass(ui.value.hint({ class: (_d = props.ui) == null ? void 0 : _d.hint }))}"${_scopeId}>`);
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
              _push2(`<p${ssrRenderAttr("id", `${unref(ariaId)}-description`)} data-slot="description" class="${ssrRenderClass(ui.value.description({ class: (_e = props.ui) == null ? void 0 : _e.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${ssrRenderClass([(__props.label || !!slots.label || __props.description || !!slots.description) && ui.value.container({ class: (_f = props.ui) == null ? void 0 : _f.container })])}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { error: error.value }, null, _push2, _parent2, _scopeId);
            if (props.error !== false && (typeof error.value === "string" && error.value || !!slots.error)) {
              _push2(`<div${ssrRenderAttr("id", `${unref(ariaId)}-error`)} data-slot="error" class="${ssrRenderClass(ui.value.error({ class: (_g = props.ui) == null ? void 0 : _g.error }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "error", { error: error.value }, () => {
                _push2(`${ssrInterpolate(error.value)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else if (__props.help || !!slots.help) {
              _push2(`<div${ssrRenderAttr("id", `${unref(ariaId)}-help`)} data-slot="help" class="${ssrRenderClass(ui.value.help({ class: (_h = props.ui) == null ? void 0 : _h.help }))}"${_scopeId}>`);
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
                class: ui.value.wrapper({ class: (_i = props.ui) == null ? void 0 : _i.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "labelWrapper",
                  class: ui.value.labelWrapper({ class: (_j = props.ui) == null ? void 0 : _j.labelWrapper })
                }, [
                  createVNode(unref(Label), {
                    for: id.value,
                    "data-slot": "label",
                    class: ui.value.label({ class: (_k = props.ui) == null ? void 0 : _k.label })
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
                    class: ui.value.hint({ class: (_l = props.ui) == null ? void 0 : _l.hint })
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
                  class: ui.value.description({ class: (_m = props.ui) == null ? void 0 : _m.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 10, ["id"])) : createCommentVNode("", true)
              ], 2),
              createVNode("div", {
                class: [(__props.label || !!slots.label || __props.description || !!slots.description) && ui.value.container({ class: (_n = props.ui) == null ? void 0 : _n.container })]
              }, [
                renderSlot(_ctx.$slots, "default", { error: error.value }),
                props.error !== false && (typeof error.value === "string" && error.value || !!slots.error) ? (openBlock(), createBlock("div", {
                  key: 0,
                  id: `${unref(ariaId)}-error`,
                  "data-slot": "error",
                  class: ui.value.error({ class: (_o = props.ui) == null ? void 0 : _o.error })
                }, [
                  renderSlot(_ctx.$slots, "error", { error: error.value }, () => [
                    createTextVNode(toDisplayString(error.value), 1)
                  ])
                ], 10, ["id"])) : __props.help || !!slots.help ? (openBlock(), createBlock("div", {
                  key: 1,
                  id: `${unref(ariaId)}-help`,
                  "data-slot": "help",
                  class: ui.value.help({ class: (_p = props.ui) == null ? void 0 : _p.help })
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
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$4), ...((_a = appConfig.ui) == null ? void 0 : _a.inputMenu) || {} })({
        color: color.value,
        variant: props.variant,
        size: inputSize == null ? void 0 : inputSize.value,
        loading: props.loading,
        highlight: highlight.value,
        leading: isLeading.value || !!props.avatar || !!slots.leading,
        trailing: isTrailing.value || !!slots.trailing,
        multiple: props.multiple,
        fieldGroup: orientation.value,
        virtualize: !!props.virtualize
      });
    });
    const items = computed(() => groups.value.flatMap((group) => group));
    function displayValue(value) {
      var _a;
      return (_a = getDisplayValue(items.value, value, {
        labelKey: props.labelKey,
        valueKey: props.valueKey,
        by: props.by
      })) != null ? _a : "";
    }
    const groups = computed(
      () => {
        var _a;
        return ((_a = props.items) == null ? void 0 : _a.length) ? isArrayOfArray(props.items) ? props.items : [props.items] : [];
      }
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
        return !filteredItems.value.find((item) => {
          var _a;
          return compare(item, newItem, (_a = props.by) != null ? _a : props.valueKey);
        });
      }
      return !filteredItems.value.length;
    });
    const createItemPosition = computed(() => typeof props.createItem === "object" ? props.createItem.position : "bottom");
    const inputRef = useTemplateRef("inputRef");
    function onUpdate(value) {
      var _a, _b, _c, _d, _e;
      if (toRaw(props.modelValue) === value) {
        return;
      }
      if ((_a = props.modelModifiers) == null ? void 0 : _a.trim) {
        value = (_b = value == null ? void 0 : value.trim()) != null ? _b : null;
      }
      if ((_c = props.modelModifiers) == null ? void 0 : _c.number) {
        value = looseToNumber(value);
      }
      if ((_d = props.modelModifiers) == null ? void 0 : _d.nullable) {
        value != null ? value : value = null;
      }
      if ((_e = props.modelModifiers) == null ? void 0 : _e.optional) {
        value != null ? value : value = void 0;
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
      var _a;
      if (!isInputItem(item)) {
        return;
      }
      if (item.disabled) {
        e.preventDefault();
        return;
      }
      (_a = item.onSelect) == null ? void 0 : _a.call(item, e);
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
      inputRef: toRef(() => {
        var _a;
        return (_a = inputRef.value) == null ? void 0 : _a.$el;
      }),
      viewportRef: toRef(() => viewportRef.value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineCreateItemTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxItem), {
              "data-slot": "item",
              class: ui.value.item({ class: (_a2 = props.ui) == null ? void 0 : _a2.item }),
              value: searchTerm.value,
              onSelect: onCreate
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(`<span data-slot="itemLabel" class="${ssrRenderClass(ui.value.itemLabel({ class: (_a3 = props.ui) == null ? void 0 : _a3.itemLabel }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => {
                    _push3(`${ssrInterpolate(unref(t)("inputMenu.create", { label: searchTerm.value }))}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", {
                      "data-slot": "itemLabel",
                      class: ui.value.itemLabel({ class: (_b2 = props.ui) == null ? void 0 : _b2.itemLabel })
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
                class: ui.value.item({ class: (_b = props.ui) == null ? void 0 : _b.item }),
                value: searchTerm.value,
                onSelect: onCreate
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode("span", {
                      "data-slot": "itemLabel",
                      class: ui.value.itemLabel({ class: (_a3 = props.ui) == null ? void 0 : _a3.itemLabel })
                    }, [
                      renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                        createTextVNode(toDisplayString(unref(t)("inputMenu.create", { label: searchTerm.value })), 1)
                      ])
                    ], 2)
                  ];
                }),
                _: 3
              }, 8, ["class", "value"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            if (isInputItem(item) && item.type === "label") {
              _push2(ssrRenderComponent(unref(ComboboxLabel), {
                "data-slot": "label",
                class: ui.value.label({ class: [(_a2 = props.ui) == null ? void 0 : _a2.label, (_b = item.ui) == null ? void 0 : _b.label, item.class] })
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
                class: ui.value.separator({ class: [(_c = props.ui) == null ? void 0 : _c.separator, (_d = item.ui) == null ? void 0 : _d.separator, item.class] })
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(ComboboxItem), {
                "data-slot": "item",
                class: ui.value.item({ class: [(_e = props.ui) == null ? void 0 : _e.item, isInputItem(item) && ((_f = item.ui) == null ? void 0 : _f.item), isInputItem(item) && item.class] }),
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
                      var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
                      ssrRenderSlot(_ctx.$slots, "item-leading", {
                        item,
                        index,
                        ui: ui.value
                      }, () => {
                        var _a4, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i2, _j2;
                        if (isInputItem(item) && item.icon) {
                          _push3(ssrRenderComponent(_sfc_main$k, {
                            name: item.icon,
                            "data-slot": "itemLeadingIcon",
                            class: ui.value.itemLeadingIcon({ class: [(_a4 = props.ui) == null ? void 0 : _a4.itemLeadingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemLeadingIcon] })
                          }, null, _parent3, _scopeId2));
                        } else if (isInputItem(item) && item.avatar) {
                          _push3(ssrRenderComponent(_sfc_main$i, mergeProps({
                            size: ((_c3 = item.ui) == null ? void 0 : _c3.itemLeadingAvatarSize) || ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                          }, item.avatar, {
                            "data-slot": "itemLeadingAvatar",
                            class: ui.value.itemLeadingAvatar({ class: [(_e3 = props.ui) == null ? void 0 : _e3.itemLeadingAvatar, (_f3 = item.ui) == null ? void 0 : _f3.itemLeadingAvatar] })
                          }), null, _parent3, _scopeId2));
                        } else if (isInputItem(item) && item.chip) {
                          _push3(ssrRenderComponent(_sfc_main$j, mergeProps({
                            size: ((_g3 = item.ui) == null ? void 0 : _g3.itemLeadingChipSize) || ((_h3 = props.ui) == null ? void 0 : _h3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                            inset: "",
                            standalone: ""
                          }, item.chip, {
                            "data-slot": "itemLeadingChip",
                            class: ui.value.itemLeadingChip({ class: [(_i2 = props.ui) == null ? void 0 : _i2.itemLeadingChip, (_j2 = item.ui) == null ? void 0 : _j2.itemLeadingChip] })
                          }), null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`<span data-slot="itemWrapper" class="${ssrRenderClass(ui.value.itemWrapper({ class: [(_a3 = props.ui) == null ? void 0 : _a3.itemWrapper, isInputItem(item) && ((_b2 = item.ui) == null ? void 0 : _b2.itemWrapper)] }))}"${_scopeId2}><span data-slot="itemLabel" class="${ssrRenderClass(ui.value.itemLabel({ class: [(_c2 = props.ui) == null ? void 0 : _c2.itemLabel, isInputItem(item) && ((_d2 = item.ui) == null ? void 0 : _d2.itemLabel)] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "item-label", {
                        item,
                        index
                      }, () => {
                        _push3(`${ssrInterpolate(isInputItem(item) ? unref(get)(item, props.labelKey) : item)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</span>`);
                      if (isInputItem(item) && (unref(get)(item, props.descriptionKey) || !!slots["item-description"])) {
                        _push3(`<span data-slot="itemDescription" class="${ssrRenderClass(ui.value.itemDescription({ class: [(_e2 = props.ui) == null ? void 0 : _e2.itemDescription, isInputItem(item) && ((_f2 = item.ui) == null ? void 0 : _f2.itemDescription)] }))}"${_scopeId2}>`);
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
                      _push3(`</span><span data-slot="itemTrailing" class="${ssrRenderClass(ui.value.itemTrailing({ class: [(_g2 = props.ui) == null ? void 0 : _g2.itemTrailing, isInputItem(item) && ((_h2 = item.ui) == null ? void 0 : _h2.itemTrailing)] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "item-trailing", {
                        item,
                        index,
                        ui: ui.value
                      }, null, _push3, _parent3, _scopeId2);
                      _push3(ssrRenderComponent(unref(ComboboxItemIndicator), { "as-child": "" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          var _a4, _b3, _c3, _d3;
                          if (_push4) {
                            _push4(ssrRenderComponent(_sfc_main$k, {
                              name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                              "data-slot": "itemTrailingIcon",
                              class: ui.value.itemTrailingIcon({ class: [(_a4 = props.ui) == null ? void 0 : _a4.itemTrailingIcon, isInputItem(item) && ((_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon)] })
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_sfc_main$k, {
                                name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                "data-slot": "itemTrailingIcon",
                                class: ui.value.itemTrailingIcon({ class: [(_c3 = props.ui) == null ? void 0 : _c3.itemTrailingIcon, isInputItem(item) && ((_d3 = item.ui) == null ? void 0 : _d3.itemTrailingIcon)] })
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
                      }, () => {
                        var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
                        return [
                          renderSlot(_ctx.$slots, "item-leading", {
                            item,
                            index,
                            ui: ui.value
                          }, () => {
                            var _a4, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i2, _j2;
                            return [
                              isInputItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$k, {
                                key: 0,
                                name: item.icon,
                                "data-slot": "itemLeadingIcon",
                                class: ui.value.itemLeadingIcon({ class: [(_a4 = props.ui) == null ? void 0 : _a4.itemLeadingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemLeadingIcon] })
                              }, null, 8, ["name", "class"])) : isInputItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$i, mergeProps({
                                key: 1,
                                size: ((_c3 = item.ui) == null ? void 0 : _c3.itemLeadingAvatarSize) || ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                              }, item.avatar, {
                                "data-slot": "itemLeadingAvatar",
                                class: ui.value.itemLeadingAvatar({ class: [(_e3 = props.ui) == null ? void 0 : _e3.itemLeadingAvatar, (_f3 = item.ui) == null ? void 0 : _f3.itemLeadingAvatar] })
                              }), null, 16, ["size", "class"])) : isInputItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$j, mergeProps({
                                key: 2,
                                size: ((_g3 = item.ui) == null ? void 0 : _g3.itemLeadingChipSize) || ((_h3 = props.ui) == null ? void 0 : _h3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                                inset: "",
                                standalone: ""
                              }, item.chip, {
                                "data-slot": "itemLeadingChip",
                                class: ui.value.itemLeadingChip({ class: [(_i2 = props.ui) == null ? void 0 : _i2.itemLeadingChip, (_j2 = item.ui) == null ? void 0 : _j2.itemLeadingChip] })
                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                            ];
                          }),
                          createVNode("span", {
                            "data-slot": "itemWrapper",
                            class: ui.value.itemWrapper({ class: [(_a3 = props.ui) == null ? void 0 : _a3.itemWrapper, isInputItem(item) && ((_b2 = item.ui) == null ? void 0 : _b2.itemWrapper)] })
                          }, [
                            createVNode("span", {
                              "data-slot": "itemLabel",
                              class: ui.value.itemLabel({ class: [(_c2 = props.ui) == null ? void 0 : _c2.itemLabel, isInputItem(item) && ((_d2 = item.ui) == null ? void 0 : _d2.itemLabel)] })
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
                              class: ui.value.itemDescription({ class: [(_e2 = props.ui) == null ? void 0 : _e2.itemDescription, isInputItem(item) && ((_f2 = item.ui) == null ? void 0 : _f2.itemDescription)] })
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
                            class: ui.value.itemTrailing({ class: [(_g2 = props.ui) == null ? void 0 : _g2.itemTrailing, isInputItem(item) && ((_h2 = item.ui) == null ? void 0 : _h2.itemTrailing)] })
                          }, [
                            renderSlot(_ctx.$slots, "item-trailing", {
                              item,
                              index,
                              ui: ui.value
                            }),
                            createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                              default: withCtx(() => {
                                var _a4, _b3;
                                return [
                                  createVNode(_sfc_main$k, {
                                    name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                    "data-slot": "itemTrailingIcon",
                                    class: ui.value.itemTrailingIcon({ class: [(_a4 = props.ui) == null ? void 0 : _a4.itemTrailingIcon, isInputItem(item) && ((_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon)] })
                                  }, null, 8, ["name", "class"])
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ], 2)
                        ];
                      })
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
                class: ui.value.label({ class: [(_g = props.ui) == null ? void 0 : _g.label, (_h = item.ui) == null ? void 0 : _h.label, item.class] })
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : isInputItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                key: 1,
                "data-slot": "separator",
                class: ui.value.separator({ class: [(_i = props.ui) == null ? void 0 : _i.separator, (_j = item.ui) == null ? void 0 : _j.separator, item.class] })
              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                key: 2,
                "data-slot": "item",
                class: ui.value.item({ class: [(_k = props.ui) == null ? void 0 : _k.item, isInputItem(item) && ((_l = item.ui) == null ? void 0 : _l.item), isInputItem(item) && item.class] }),
                disabled: isInputItem(item) && item.disabled,
                value: props.valueKey && isInputItem(item) ? unref(get)(item, props.valueKey) : item,
                onSelect: ($event) => onSelect($event, item)
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "item", {
                    item,
                    index,
                    ui: ui.value
                  }, () => {
                    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
                    return [
                      renderSlot(_ctx.$slots, "item-leading", {
                        item,
                        index,
                        ui: ui.value
                      }, () => {
                        var _a4, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i2, _j2;
                        return [
                          isInputItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$k, {
                            key: 0,
                            name: item.icon,
                            "data-slot": "itemLeadingIcon",
                            class: ui.value.itemLeadingIcon({ class: [(_a4 = props.ui) == null ? void 0 : _a4.itemLeadingIcon, (_b3 = item.ui) == null ? void 0 : _b3.itemLeadingIcon] })
                          }, null, 8, ["name", "class"])) : isInputItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$i, mergeProps({
                            key: 1,
                            size: ((_c3 = item.ui) == null ? void 0 : _c3.itemLeadingAvatarSize) || ((_d3 = props.ui) == null ? void 0 : _d3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                          }, item.avatar, {
                            "data-slot": "itemLeadingAvatar",
                            class: ui.value.itemLeadingAvatar({ class: [(_e3 = props.ui) == null ? void 0 : _e3.itemLeadingAvatar, (_f3 = item.ui) == null ? void 0 : _f3.itemLeadingAvatar] })
                          }), null, 16, ["size", "class"])) : isInputItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$j, mergeProps({
                            key: 2,
                            size: ((_g3 = item.ui) == null ? void 0 : _g3.itemLeadingChipSize) || ((_h3 = props.ui) == null ? void 0 : _h3.itemLeadingChipSize) || ui.value.itemLeadingChipSize(),
                            inset: "",
                            standalone: ""
                          }, item.chip, {
                            "data-slot": "itemLeadingChip",
                            class: ui.value.itemLeadingChip({ class: [(_i2 = props.ui) == null ? void 0 : _i2.itemLeadingChip, (_j2 = item.ui) == null ? void 0 : _j2.itemLeadingChip] })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ];
                      }),
                      createVNode("span", {
                        "data-slot": "itemWrapper",
                        class: ui.value.itemWrapper({ class: [(_a3 = props.ui) == null ? void 0 : _a3.itemWrapper, isInputItem(item) && ((_b2 = item.ui) == null ? void 0 : _b2.itemWrapper)] })
                      }, [
                        createVNode("span", {
                          "data-slot": "itemLabel",
                          class: ui.value.itemLabel({ class: [(_c2 = props.ui) == null ? void 0 : _c2.itemLabel, isInputItem(item) && ((_d2 = item.ui) == null ? void 0 : _d2.itemLabel)] })
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
                          class: ui.value.itemDescription({ class: [(_e2 = props.ui) == null ? void 0 : _e2.itemDescription, isInputItem(item) && ((_f2 = item.ui) == null ? void 0 : _f2.itemDescription)] })
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
                        class: ui.value.itemTrailing({ class: [(_g2 = props.ui) == null ? void 0 : _g2.itemTrailing, isInputItem(item) && ((_h2 = item.ui) == null ? void 0 : _h2.itemTrailing)] })
                      }, [
                        renderSlot(_ctx.$slots, "item-trailing", {
                          item,
                          index,
                          ui: ui.value
                        }),
                        createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                          default: withCtx(() => {
                            var _a4, _b3;
                            return [
                              createVNode(_sfc_main$k, {
                                name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                "data-slot": "itemTrailingIcon",
                                class: ui.value.itemTrailingIcon({ class: [(_a4 = props.ui) == null ? void 0 : _a4.itemTrailingIcon, isInputItem(item) && ((_b3 = item.ui) == null ? void 0 : _b3.itemTrailingIcon)] })
                              }, null, 8, ["name", "class"])
                            ];
                          }),
                          _: 2
                        }, 1024)
                      ], 2)
                    ];
                  })
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
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] }),
        "as-child": !!__props.multiple,
        "ignore-filter": "",
        "onUpdate:modelValue": onUpdate,
        "onUpdate:open": onUpdateOpen
      }), {
        default: withCtx(({ modelValue, open }, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxAnchor), {
              "as-child": !__props.multiple,
              "data-slot": "base",
              class: ui.value.base({ class: (_a2 = props.ui) == null ? void 0 : _a2.base })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c, _d;
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
                            var _a4, _b3;
                            _push4(ssrRenderComponent(unref(TagsInputItem), {
                              key: index,
                              value: item,
                              "data-slot": "tagsItem",
                              class: ui.value.tagsItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tagsItem, isInputItem(item) && ((_b3 = item.ui) == null ? void 0 : _b3.tagsItem)] })
                            }, {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                var _a5, _b4, _c2, _d2, _e, _f, _g, _h;
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(TagsInputItemText), {
                                    "data-slot": "tagsItemText",
                                    class: ui.value.tagsItemText({ class: [(_a5 = props.ui) == null ? void 0 : _a5.tagsItemText, isInputItem(item) && ((_b4 = item.ui) == null ? void 0 : _b4.tagsItemText)] })
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
                                    class: ui.value.tagsItemDelete({ class: [(_c2 = props.ui) == null ? void 0 : _c2.tagsItemDelete, isInputItem(item) && ((_d2 = item.ui) == null ? void 0 : _d2.tagsItemDelete)] }),
                                    disabled: unref(disabled)
                                  }, {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "tags-item-delete", {
                                          item,
                                          index,
                                          ui: ui.value
                                        }, () => {
                                          var _a6, _b5;
                                          _push6(ssrRenderComponent(_sfc_main$k, {
                                            name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                            "data-slot": "tagsItemDeleteIcon",
                                            class: ui.value.tagsItemDeleteIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.tagsItemDeleteIcon, isInputItem(item) && ((_b5 = item.ui) == null ? void 0 : _b5.tagsItemDeleteIcon)] })
                                          }, null, _parent6, _scopeId5));
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "tags-item-delete", {
                                            item,
                                            index,
                                            ui: ui.value
                                          }, () => {
                                            var _a6, _b5;
                                            return [
                                              createVNode(_sfc_main$k, {
                                                name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                                "data-slot": "tagsItemDeleteIcon",
                                                class: ui.value.tagsItemDeleteIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.tagsItemDeleteIcon, isInputItem(item) && ((_b5 = item.ui) == null ? void 0 : _b5.tagsItemDeleteIcon)] })
                                              }, null, 8, ["name", "class"])
                                            ];
                                          })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(TagsInputItemText), {
                                      "data-slot": "tagsItemText",
                                      class: ui.value.tagsItemText({ class: [(_e = props.ui) == null ? void 0 : _e.tagsItemText, isInputItem(item) && ((_f = item.ui) == null ? void 0 : _f.tagsItemText)] })
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
                                      class: ui.value.tagsItemDelete({ class: [(_g = props.ui) == null ? void 0 : _g.tagsItemDelete, isInputItem(item) && ((_h = item.ui) == null ? void 0 : _h.tagsItemDelete)] }),
                                      disabled: unref(disabled)
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "tags-item-delete", {
                                          item,
                                          index,
                                          ui: ui.value
                                        }, () => {
                                          var _a6, _b5;
                                          return [
                                            createVNode(_sfc_main$k, {
                                              name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                              "data-slot": "tagsItemDeleteIcon",
                                              class: ui.value.tagsItemDeleteIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.tagsItemDeleteIcon, isInputItem(item) && ((_b5 = item.ui) == null ? void 0 : _b5.tagsItemDeleteIcon)] })
                                            }, null, 8, ["name", "class"])
                                          ];
                                        })
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
                              var _a4, _b3;
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(TagsInputInput), mergeProps({
                                  id: unref(id),
                                  ref_key: "inputRef",
                                  ref: inputRef
                                }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                                  placeholder: __props.placeholder,
                                  "data-slot": "tagsInput",
                                  class: ui.value.tagsInput({ class: (_a4 = props.ui) == null ? void 0 : _a4.tagsInput }),
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
                                    class: ui.value.tagsInput({ class: (_b3 = props.ui) == null ? void 0 : _b3.tagsInput }),
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
                              var _a4, _b3;
                              return openBlock(), createBlock(unref(TagsInputItem), {
                                key: index,
                                value: item,
                                "data-slot": "tagsItem",
                                class: ui.value.tagsItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tagsItem, isInputItem(item) && ((_b3 = item.ui) == null ? void 0 : _b3.tagsItem)] })
                              }, {
                                default: withCtx(() => {
                                  var _a5, _b4, _c2, _d2;
                                  return [
                                    createVNode(unref(TagsInputItemText), {
                                      "data-slot": "tagsItemText",
                                      class: ui.value.tagsItemText({ class: [(_a5 = props.ui) == null ? void 0 : _a5.tagsItemText, isInputItem(item) && ((_b4 = item.ui) == null ? void 0 : _b4.tagsItemText)] })
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
                                      class: ui.value.tagsItemDelete({ class: [(_c2 = props.ui) == null ? void 0 : _c2.tagsItemDelete, isInputItem(item) && ((_d2 = item.ui) == null ? void 0 : _d2.tagsItemDelete)] }),
                                      disabled: unref(disabled)
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "tags-item-delete", {
                                          item,
                                          index,
                                          ui: ui.value
                                        }, () => {
                                          var _a6, _b5;
                                          return [
                                            createVNode(_sfc_main$k, {
                                              name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                              "data-slot": "tagsItemDeleteIcon",
                                              class: ui.value.tagsItemDeleteIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.tagsItemDeleteIcon, isInputItem(item) && ((_b5 = item.ui) == null ? void 0 : _b5.tagsItemDeleteIcon)] })
                                            }, null, 8, ["name", "class"])
                                          ];
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["class", "disabled"])
                                  ];
                                }),
                                _: 2
                              }, 1032, ["value", "class"]);
                            }), 128)),
                            createVNode(unref(ComboboxInput), {
                              modelValue: searchTerm.value,
                              "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                              "as-child": ""
                            }, {
                              default: withCtx(() => {
                                var _a4;
                                return [
                                  createVNode(unref(TagsInputInput), mergeProps({
                                    id: unref(id),
                                    ref_key: "inputRef",
                                    ref: inputRef
                                  }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                                    placeholder: __props.placeholder,
                                    "data-slot": "tagsInput",
                                    class: ui.value.tagsInput({ class: (_a4 = props.ui) == null ? void 0 : _a4.tagsInput }),
                                    onChange: withModifiers(() => {
                                    }, ["stop"])
                                  }), null, 16, ["id", "placeholder", "class", "onChange"])
                                ];
                              }),
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
                    _push3(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: (_a3 = props.ui) == null ? void 0 : _a3.leading }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "leading", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => {
                      var _a4, _b3, _c2;
                      if (unref(isLeading) && unref(leadingIconName)) {
                        _push3(ssrRenderComponent(_sfc_main$k, {
                          name: unref(leadingIconName),
                          "data-slot": "leadingIcon",
                          class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                        }, null, _parent3, _scopeId2));
                      } else if (!!__props.avatar) {
                        _push3(ssrRenderComponent(_sfc_main$i, mergeProps({
                          size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                        }, __props.avatar, {
                          "data-slot": "itemLeadingAvatar",
                          class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
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
                      class: ui.value.trailing({ class: (_b2 = props.ui) == null ? void 0 : _b2.trailing })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            var _a4;
                            if (!!__props.clear && !isModelValueEmpty(modelValue)) {
                              _push4(ssrRenderComponent(unref(ComboboxCancel), { "as-child": "" }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  var _a5, _b3;
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_sfc_main$f, mergeProps({
                                      as: "span",
                                      icon: __props.clearIcon || unref(appConfig).ui.icons.close,
                                      variant: "link",
                                      color: "neutral",
                                      tabindex: "-1"
                                    }, clearProps.value, {
                                      "data-slot": "trailingClear",
                                      class: ui.value.trailingClear({ class: (_a5 = props.ui) == null ? void 0 : _a5.trailingClear }),
                                      onClick: onClear
                                    }), null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$f, mergeProps({
                                        as: "span",
                                        icon: __props.clearIcon || unref(appConfig).ui.icons.close,
                                        variant: "link",
                                        color: "neutral",
                                        tabindex: "-1"
                                      }, clearProps.value, {
                                        "data-slot": "trailingClear",
                                        class: ui.value.trailingClear({ class: (_b3 = props.ui) == null ? void 0 : _b3.trailingClear }),
                                        onClick: withModifiers(onClear, ["stop"])
                                      }), null, 16, ["icon", "class"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else if (unref(trailingIconName)) {
                              _push4(ssrRenderComponent(_sfc_main$k, {
                                name: unref(trailingIconName),
                                "data-slot": "trailingIcon",
                                class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
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
                            }, () => {
                              var _a4;
                              return [
                                !!__props.clear && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(ComboboxCancel), {
                                  key: 0,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => {
                                    var _a5;
                                    return [
                                      createVNode(_sfc_main$f, mergeProps({
                                        as: "span",
                                        icon: __props.clearIcon || unref(appConfig).ui.icons.close,
                                        variant: "link",
                                        color: "neutral",
                                        tabindex: "-1"
                                      }, clearProps.value, {
                                        "data-slot": "trailingClear",
                                        class: ui.value.trailingClear({ class: (_a5 = props.ui) == null ? void 0 : _a5.trailingClear }),
                                        onClick: withModifiers(onClear, ["stop"])
                                      }), null, 16, ["icon", "class"])
                                    ];
                                  }),
                                  _: 1
                                })) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$k, {
                                  key: 1,
                                  name: unref(trailingIconName),
                                  "data-slot": "trailingIcon",
                                  class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ];
                            })
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
                          var _a4, _b3;
                          return openBlock(), createBlock(unref(TagsInputItem), {
                            key: index,
                            value: item,
                            "data-slot": "tagsItem",
                            class: ui.value.tagsItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tagsItem, isInputItem(item) && ((_b3 = item.ui) == null ? void 0 : _b3.tagsItem)] })
                          }, {
                            default: withCtx(() => {
                              var _a5, _b4, _c2, _d2;
                              return [
                                createVNode(unref(TagsInputItemText), {
                                  "data-slot": "tagsItemText",
                                  class: ui.value.tagsItemText({ class: [(_a5 = props.ui) == null ? void 0 : _a5.tagsItemText, isInputItem(item) && ((_b4 = item.ui) == null ? void 0 : _b4.tagsItemText)] })
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
                                  class: ui.value.tagsItemDelete({ class: [(_c2 = props.ui) == null ? void 0 : _c2.tagsItemDelete, isInputItem(item) && ((_d2 = item.ui) == null ? void 0 : _d2.tagsItemDelete)] }),
                                  disabled: unref(disabled)
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "tags-item-delete", {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => {
                                      var _a6, _b5;
                                      return [
                                        createVNode(_sfc_main$k, {
                                          name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                          "data-slot": "tagsItemDeleteIcon",
                                          class: ui.value.tagsItemDeleteIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.tagsItemDeleteIcon, isInputItem(item) && ((_b5 = item.ui) == null ? void 0 : _b5.tagsItemDeleteIcon)] })
                                        }, null, 8, ["name", "class"])
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["class", "disabled"])
                              ];
                            }),
                            _: 2
                          }, 1032, ["value", "class"]);
                        }), 128)),
                        createVNode(unref(ComboboxInput), {
                          modelValue: searchTerm.value,
                          "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                          "as-child": ""
                        }, {
                          default: withCtx(() => {
                            var _a4;
                            return [
                              createVNode(unref(TagsInputInput), mergeProps({
                                id: unref(id),
                                ref_key: "inputRef",
                                ref: inputRef
                              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                                placeholder: __props.placeholder,
                                "data-slot": "tagsInput",
                                class: ui.value.tagsInput({ class: (_a4 = props.ui) == null ? void 0 : _a4.tagsInput }),
                                onChange: withModifiers(() => {
                                }, ["stop"])
                              }), null, 16, ["id", "placeholder", "class", "onChange"])
                            ];
                          }),
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
                      class: ui.value.leading({ class: (_c = props.ui) == null ? void 0 : _c.leading })
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => {
                        var _a4, _b3, _c2;
                        return [
                          unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$k, {
                            key: 0,
                            name: unref(leadingIconName),
                            "data-slot": "leadingIcon",
                            class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                          }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$i, mergeProps({
                            key: 1,
                            size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                          }, __props.avatar, {
                            "data-slot": "itemLeadingAvatar",
                            class: ui.value.itemLeadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.itemLeadingAvatar })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ];
                      })
                    ], 2)) : createCommentVNode("", true),
                    unref(isTrailing) || !!slots.trailing || !!__props.clear ? (openBlock(), createBlock(unref(ComboboxTrigger), {
                      key: 3,
                      "data-slot": "trailing",
                      class: ui.value.trailing({ class: (_d = props.ui) == null ? void 0 : _d.trailing })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "trailing", {
                          modelValue,
                          open,
                          ui: ui.value
                        }, () => {
                          var _a4;
                          return [
                            !!__props.clear && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(ComboboxCancel), {
                              key: 0,
                              "as-child": ""
                            }, {
                              default: withCtx(() => {
                                var _a5;
                                return [
                                  createVNode(_sfc_main$f, mergeProps({
                                    as: "span",
                                    icon: __props.clearIcon || unref(appConfig).ui.icons.close,
                                    variant: "link",
                                    color: "neutral",
                                    tabindex: "-1"
                                  }, clearProps.value, {
                                    "data-slot": "trailingClear",
                                    class: ui.value.trailingClear({ class: (_a5 = props.ui) == null ? void 0 : _a5.trailingClear }),
                                    onClick: withModifiers(onClear, ["stop"])
                                  }), null, 16, ["icon", "class"])
                                ];
                              }),
                              _: 1
                            })) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$k, {
                              key: 1,
                              name: unref(trailingIconName),
                              "data-slot": "trailingIcon",
                              class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ];
                        })
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
                var _a3, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: (_a3 = props.ui) == null ? void 0 : _a3.content })
                  }, contentProps.value, { onFocusOutside: () => {
                  } }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a4, _b3, _c, _d, _e, _f, _g, _h, _i, _j;
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push4, _parent4, _scopeId3);
                        _push4(ssrRenderComponent(unref(ComboboxEmpty), {
                          "data-slot": "empty",
                          class: ui.value.empty({ class: (_a4 = props.ui) == null ? void 0 : _a4.empty })
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
                        _push4(`<div role="presentation" data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: (_b3 = props.ui) == null ? void 0 : _b3.viewport }))}"${_scopeId3}>`);
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
                              class: ui.value.group({ class: (_c = props.ui) == null ? void 0 : _c.group })
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
                            var _a5;
                            _push4(ssrRenderComponent(unref(ComboboxGroup), {
                              key: `group-${groupIndex}`,
                              "data-slot": "group",
                              class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
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
                              class: ui.value.group({ class: (_d = props.ui) == null ? void 0 : _d.group })
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
                            class: ui.value.arrow({ class: (_e = props.ui) == null ? void 0 : _e.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content-top"),
                          createVNode(unref(ComboboxEmpty), {
                            "data-slot": "empty",
                            class: ui.value.empty({ class: (_f = props.ui) == null ? void 0 : _f.empty })
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
                            class: ui.value.viewport({ class: (_g = props.ui) == null ? void 0 : _g.viewport })
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
                                class: ui.value.group({ class: (_h = props.ui) == null ? void 0 : _h.group })
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseCreateItemTemplate))
                                ]),
                                _: 1
                              }, 8, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                var _a5;
                                return openBlock(), createBlock(unref(ComboboxGroup), {
                                  key: `group-${groupIndex}`,
                                  "data-slot": "group",
                                  class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
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
                                class: ui.value.group({ class: (_i = props.ui) == null ? void 0 : _i.group })
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
                            class: ui.value.arrow({ class: (_j = props.ui) == null ? void 0 : _j.arrow })
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
                      class: ui.value.content({ class: (_b2 = props.ui) == null ? void 0 : _b2.content })
                    }, contentProps.value, {
                      onFocusOutside: withModifiers(() => {
                      }, ["prevent"])
                    }), {
                      default: withCtx(() => {
                        var _a4, _b3, _c, _d, _e;
                        return [
                          renderSlot(_ctx.$slots, "content-top"),
                          createVNode(unref(ComboboxEmpty), {
                            "data-slot": "empty",
                            class: ui.value.empty({ class: (_a4 = props.ui) == null ? void 0 : _a4.empty })
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
                            class: ui.value.viewport({ class: (_b3 = props.ui) == null ? void 0 : _b3.viewport })
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
                                class: ui.value.group({ class: (_c = props.ui) == null ? void 0 : _c.group })
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseCreateItemTemplate))
                                ]),
                                _: 1
                              }, 8, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                var _a5;
                                return openBlock(), createBlock(unref(ComboboxGroup), {
                                  key: `group-${groupIndex}`,
                                  "data-slot": "group",
                                  class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
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
                                class: ui.value.group({ class: (_d = props.ui) == null ? void 0 : _d.group })
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
                            class: ui.value.arrow({ class: (_e = props.ui) == null ? void 0 : _e.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
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
                class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base })
              }, {
                default: withCtx(() => {
                  var _a3, _b2;
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
                          var _a4, _b3;
                          return openBlock(), createBlock(unref(TagsInputItem), {
                            key: index,
                            value: item,
                            "data-slot": "tagsItem",
                            class: ui.value.tagsItem({ class: [(_a4 = props.ui) == null ? void 0 : _a4.tagsItem, isInputItem(item) && ((_b3 = item.ui) == null ? void 0 : _b3.tagsItem)] })
                          }, {
                            default: withCtx(() => {
                              var _a5, _b4, _c, _d;
                              return [
                                createVNode(unref(TagsInputItemText), {
                                  "data-slot": "tagsItemText",
                                  class: ui.value.tagsItemText({ class: [(_a5 = props.ui) == null ? void 0 : _a5.tagsItemText, isInputItem(item) && ((_b4 = item.ui) == null ? void 0 : _b4.tagsItemText)] })
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
                                  class: ui.value.tagsItemDelete({ class: [(_c = props.ui) == null ? void 0 : _c.tagsItemDelete, isInputItem(item) && ((_d = item.ui) == null ? void 0 : _d.tagsItemDelete)] }),
                                  disabled: unref(disabled)
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "tags-item-delete", {
                                      item,
                                      index,
                                      ui: ui.value
                                    }, () => {
                                      var _a6, _b5;
                                      return [
                                        createVNode(_sfc_main$k, {
                                          name: __props.deleteIcon || unref(appConfig).ui.icons.close,
                                          "data-slot": "tagsItemDeleteIcon",
                                          class: ui.value.tagsItemDeleteIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.tagsItemDeleteIcon, isInputItem(item) && ((_b5 = item.ui) == null ? void 0 : _b5.tagsItemDeleteIcon)] })
                                        }, null, 8, ["name", "class"])
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["class", "disabled"])
                              ];
                            }),
                            _: 2
                          }, 1032, ["value", "class"]);
                        }), 128)),
                        createVNode(unref(ComboboxInput), {
                          modelValue: searchTerm.value,
                          "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                          "as-child": ""
                        }, {
                          default: withCtx(() => {
                            var _a4;
                            return [
                              createVNode(unref(TagsInputInput), mergeProps({
                                id: unref(id),
                                ref_key: "inputRef",
                                ref: inputRef
                              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                                placeholder: __props.placeholder,
                                "data-slot": "tagsInput",
                                class: ui.value.tagsInput({ class: (_a4 = props.ui) == null ? void 0 : _a4.tagsInput }),
                                onChange: withModifiers(() => {
                                }, ["stop"])
                              }), null, 16, ["id", "placeholder", "class", "onChange"])
                            ];
                          }),
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
                      class: ui.value.leading({ class: (_a3 = props.ui) == null ? void 0 : _a3.leading })
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => {
                        var _a4, _b3, _c;
                        return [
                          unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$k, {
                            key: 0,
                            name: unref(leadingIconName),
                            "data-slot": "leadingIcon",
                            class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                          }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$i, mergeProps({
                            key: 1,
                            size: ((_b3 = props.ui) == null ? void 0 : _b3.itemLeadingAvatarSize) || ui.value.itemLeadingAvatarSize()
                          }, __props.avatar, {
                            "data-slot": "itemLeadingAvatar",
                            class: ui.value.itemLeadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.itemLeadingAvatar })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ];
                      })
                    ], 2)) : createCommentVNode("", true),
                    unref(isTrailing) || !!slots.trailing || !!__props.clear ? (openBlock(), createBlock(unref(ComboboxTrigger), {
                      key: 3,
                      "data-slot": "trailing",
                      class: ui.value.trailing({ class: (_b2 = props.ui) == null ? void 0 : _b2.trailing })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "trailing", {
                          modelValue,
                          open,
                          ui: ui.value
                        }, () => {
                          var _a4;
                          return [
                            !!__props.clear && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(ComboboxCancel), {
                              key: 0,
                              "as-child": ""
                            }, {
                              default: withCtx(() => {
                                var _a5;
                                return [
                                  createVNode(_sfc_main$f, mergeProps({
                                    as: "span",
                                    icon: __props.clearIcon || unref(appConfig).ui.icons.close,
                                    variant: "link",
                                    color: "neutral",
                                    tabindex: "-1"
                                  }, clearProps.value, {
                                    "data-slot": "trailingClear",
                                    class: ui.value.trailingClear({ class: (_a5 = props.ui) == null ? void 0 : _a5.trailingClear }),
                                    onClick: withModifiers(onClear, ["stop"])
                                  }), null, 16, ["icon", "class"])
                                ];
                              }),
                              _: 1
                            })) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$k, {
                              key: 1,
                              name: unref(trailingIconName),
                              "data-slot": "trailingIcon",
                              class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, 1032, ["as-child", "class"]),
              createVNode(unref(ComboboxPortal), unref(portalProps), {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(unref(ComboboxContent), mergeProps({
                      "data-slot": "content",
                      class: ui.value.content({ class: (_a3 = props.ui) == null ? void 0 : _a3.content })
                    }, contentProps.value, {
                      onFocusOutside: withModifiers(() => {
                      }, ["prevent"])
                    }), {
                      default: withCtx(() => {
                        var _a4, _b2, _c, _d, _e;
                        return [
                          renderSlot(_ctx.$slots, "content-top"),
                          createVNode(unref(ComboboxEmpty), {
                            "data-slot": "empty",
                            class: ui.value.empty({ class: (_a4 = props.ui) == null ? void 0 : _a4.empty })
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
                            class: ui.value.viewport({ class: (_b2 = props.ui) == null ? void 0 : _b2.viewport })
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
                                class: ui.value.group({ class: (_c = props.ui) == null ? void 0 : _c.group })
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseCreateItemTemplate))
                                ]),
                                _: 1
                              }, 8, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                var _a5;
                                return openBlock(), createBlock(unref(ComboboxGroup), {
                                  key: `group-${groupIndex}`,
                                  "data-slot": "group",
                                  class: ui.value.group({ class: (_a5 = props.ui) == null ? void 0 : _a5.group })
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
                                class: ui.value.group({ class: (_d = props.ui) == null ? void 0 : _d.group })
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
                            class: ui.value.arrow({ class: (_e = props.ui) == null ? void 0 : _e.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class", "onFocusOutside"])
                  ];
                }),
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
    "content": "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",
    "arrow": "fill-default"
  }
};
const _sfc_main$5 = {
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
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$3), ...((_a = appConfig.ui) == null ? void 0 : _a.popover) || {} })({
        side: contentProps.value.side
      });
    });
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
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Component).Content, mergeProps(contentProps.value, {
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, (_a = props.ui) == null ? void 0 : _a.content] })
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2;
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", close ? { close } : {}, null, _push4, _parent4, _scopeId3);
                        if (!!__props.arrow) {
                          _push4(ssrRenderComponent(unref(Component).Arrow, mergeProps(arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: (_a2 = props.ui) == null ? void 0 : _a2.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                          !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
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
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                          !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: (_a2 = props.ui) == null ? void 0 : _a2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
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
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, (_a = props.ui) == null ? void 0 : _a.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                          !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: (_a2 = props.ui) == null ? void 0 : _a2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040, ["class"])
                  ];
                }),
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme$2 = {
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
const _sfc_main$4 = {
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
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$2), ...((_a = appConfig.ui) == null ? void 0 : _a.calendar) || {} })({
        color: props.color,
        size: props.size,
        variant: props.variant,
        weekNumbers: props.weekNumbers
      });
    });
    function paginateYear(date, sign) {
      if (sign === -1) {
        return date.subtract({ years: 1 });
      }
      return date.add({ years: 1 });
    }
    const Calendar$1 = computed(() => props.range ? RangeCalendar : Calendar);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Calendar$1).Root, mergeProps(unref(rootProps), {
        "model-value": __props.modelValue,
        "default-value": __props.defaultValue,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx(({ weekDays, grid }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar$1).Header, {
              "data-slot": "header",
              class: ui.value.header({ class: (_a2 = props.ui) == null ? void 0 : _a2.header })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  if (props.yearControls) {
                    _push3(ssrRenderComponent(unref(Calendar$1).Prev, {
                      "prev-page": (date) => paginateYear(date, -1),
                      "aria-label": unref(t)("calendar.prevYear"),
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$f, mergeProps({
                            icon: prevYearIcon.value,
                            size: props.size,
                            color: "neutral",
                            variant: "ghost"
                          }, props.prevYear), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$f, mergeProps({
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
                          _push4(ssrRenderComponent(_sfc_main$f, mergeProps({
                            icon: prevMonthIcon.value,
                            size: props.size,
                            color: "neutral",
                            variant: "ghost"
                          }, props.prevMonth), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$f, mergeProps({
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
                    class: ui.value.heading({ class: (_a3 = props.ui) == null ? void 0 : _a3.heading })
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
                          _push4(ssrRenderComponent(_sfc_main$f, mergeProps({
                            icon: nextMonthIcon.value,
                            size: props.size,
                            color: "neutral",
                            variant: "ghost"
                          }, props.nextMonth), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$f, mergeProps({
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
                          _push4(ssrRenderComponent(_sfc_main$f, mergeProps({
                            icon: nextYearIcon.value,
                            size: props.size,
                            color: "neutral",
                            variant: "ghost"
                          }, props.nextYear), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$f, mergeProps({
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
                        createVNode(_sfc_main$f, mergeProps({
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
                        createVNode(_sfc_main$f, mergeProps({
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
                      class: ui.value.heading({ class: (_b2 = props.ui) == null ? void 0 : _b2.heading })
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
                        createVNode(_sfc_main$f, mergeProps({
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
                        createVNode(_sfc_main$f, mergeProps({
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
            _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: (_b = props.ui) == null ? void 0 : _b.body }))}"${_scopeId}><!--[-->`);
            ssrRenderList(grid, (month) => {
              var _a3;
              _push2(ssrRenderComponent(unref(Calendar$1).Grid, {
                key: month.value.toString(),
                "data-slot": "grid",
                class: ui.value.grid({ class: (_a3 = props.ui) == null ? void 0 : _a3.grid })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a4, _b2;
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Calendar$1).GridHead, null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        var _a5, _b3;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Calendar$1).GridRow, {
                            "data-slot": "gridWeekDaysRow",
                            class: ui.value.gridWeekDaysRow({ class: (_a5 = props.ui) == null ? void 0 : _a5.gridWeekDaysRow })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(weekDays, (day) => {
                                  var _a6;
                                  _push5(ssrRenderComponent(unref(Calendar$1).HeadCell, {
                                    key: day,
                                    "data-slot": "headCell",
                                    class: ui.value.headCell({ class: (_a6 = props.ui) == null ? void 0 : _a6.headCell })
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
                                    var _a6;
                                    return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                      key: day,
                                      "data-slot": "headCell",
                                      class: ui.value.headCell({ class: (_a6 = props.ui) == null ? void 0 : _a6.headCell })
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
                              class: ui.value.gridWeekDaysRow({ class: (_b3 = props.ui) == null ? void 0 : _b3.gridWeekDaysRow })
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                  var _a6;
                                  return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                    key: day,
                                    "data-slot": "headCell",
                                    class: ui.value.headCell({ class: (_a6 = props.ui) == null ? void 0 : _a6.headCell })
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
                      class: ui.value.gridBody({ class: (_a4 = props.ui) == null ? void 0 : _a4.gridBody })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(month.rows, (weekDates, index) => {
                            var _a5;
                            _push4(ssrRenderComponent(unref(Calendar$1).GridRow, {
                              key: `weekDate-${index}`,
                              "data-slot": "gridRow",
                              class: ui.value.gridRow({ class: (_a5 = props.ui) == null ? void 0 : _a5.gridRow })
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                var _a6, _b3;
                                if (_push5) {
                                  if (__props.weekNumbers && weekDates[0]) {
                                    _push5(`<td role="gridcell" data-slot="cellWeek" class="${ssrRenderClass(ui.value.cellWeek({ class: (_a6 = props.ui) == null ? void 0 : _a6.cellWeek }))}"${_scopeId4}>${ssrInterpolate(unref(getWeekNumber)(weekDates[0], unref(locale).code))}</td>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<!--[-->`);
                                  ssrRenderList(weekDates, (weekDate) => {
                                    var _a7;
                                    _push5(ssrRenderComponent(unref(Calendar$1).Cell, {
                                      key: weekDate.toString(),
                                      date: weekDate,
                                      "data-slot": "cell",
                                      class: ui.value.cell({ class: (_a7 = props.ui) == null ? void 0 : _a7.cell })
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        var _a8, _b4;
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(Calendar$1).CellTrigger, {
                                            day: weekDate,
                                            month: month.value,
                                            "data-slot": "cellTrigger",
                                            class: ui.value.cellTrigger({ class: (_a8 = props.ui) == null ? void 0 : _a8.cellTrigger })
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
                                              class: ui.value.cellTrigger({ class: (_b4 = props.ui) == null ? void 0 : _b4.cellTrigger })
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
                                      class: ui.value.cellWeek({ class: (_b3 = props.ui) == null ? void 0 : _b3.cellWeek })
                                    }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                      var _a7;
                                      return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                        key: weekDate.toString(),
                                        date: weekDate,
                                        "data-slot": "cell",
                                        class: ui.value.cell({ class: (_a7 = props.ui) == null ? void 0 : _a7.cell })
                                      }, {
                                        default: withCtx(() => {
                                          var _a8;
                                          return [
                                            createVNode(unref(Calendar$1).CellTrigger, {
                                              day: weekDate,
                                              month: month.value,
                                              "data-slot": "cellTrigger",
                                              class: ui.value.cellTrigger({ class: (_a8 = props.ui) == null ? void 0 : _a8.cellTrigger })
                                            }, {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                                  createTextVNode(toDisplayString(weekDate.day), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["day", "month", "class"])
                                          ];
                                        }),
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
                              var _a5;
                              return openBlock(), createBlock(unref(Calendar$1).GridRow, {
                                key: `weekDate-${index}`,
                                "data-slot": "gridRow",
                                class: ui.value.gridRow({ class: (_a5 = props.ui) == null ? void 0 : _a5.gridRow })
                              }, {
                                default: withCtx(() => {
                                  var _a6;
                                  return [
                                    __props.weekNumbers && weekDates[0] ? (openBlock(), createBlock("td", {
                                      key: 0,
                                      role: "gridcell",
                                      "data-slot": "cellWeek",
                                      class: ui.value.cellWeek({ class: (_a6 = props.ui) == null ? void 0 : _a6.cellWeek })
                                    }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                      var _a7;
                                      return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                        key: weekDate.toString(),
                                        date: weekDate,
                                        "data-slot": "cell",
                                        class: ui.value.cell({ class: (_a7 = props.ui) == null ? void 0 : _a7.cell })
                                      }, {
                                        default: withCtx(() => {
                                          var _a8;
                                          return [
                                            createVNode(unref(Calendar$1).CellTrigger, {
                                              day: weekDate,
                                              month: month.value,
                                              "data-slot": "cellTrigger",
                                              class: ui.value.cellTrigger({ class: (_a8 = props.ui) == null ? void 0 : _a8.cellTrigger })
                                            }, {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                                  createTextVNode(toDisplayString(weekDate.day), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["day", "month", "class"])
                                          ];
                                        }),
                                        _: 2
                                      }, 1032, ["date", "class"]);
                                    }), 128))
                                  ];
                                }),
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
                        default: withCtx(() => {
                          var _a5;
                          return [
                            createVNode(unref(Calendar$1).GridRow, {
                              "data-slot": "gridWeekDaysRow",
                              class: ui.value.gridWeekDaysRow({ class: (_a5 = props.ui) == null ? void 0 : _a5.gridWeekDaysRow })
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                  var _a6;
                                  return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                    key: day,
                                    "data-slot": "headCell",
                                    class: ui.value.headCell({ class: (_a6 = props.ui) == null ? void 0 : _a6.headCell })
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
                        }),
                        _: 2
                      }, 1024),
                      createVNode(unref(Calendar$1).GridBody, {
                        "data-slot": "gridBody",
                        class: ui.value.gridBody({ class: (_b2 = props.ui) == null ? void 0 : _b2.gridBody })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            var _a5;
                            return openBlock(), createBlock(unref(Calendar$1).GridRow, {
                              key: `weekDate-${index}`,
                              "data-slot": "gridRow",
                              class: ui.value.gridRow({ class: (_a5 = props.ui) == null ? void 0 : _a5.gridRow })
                            }, {
                              default: withCtx(() => {
                                var _a6;
                                return [
                                  __props.weekNumbers && weekDates[0] ? (openBlock(), createBlock("td", {
                                    key: 0,
                                    role: "gridcell",
                                    "data-slot": "cellWeek",
                                    class: ui.value.cellWeek({ class: (_a6 = props.ui) == null ? void 0 : _a6.cellWeek })
                                  }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                    var _a7;
                                    return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                      key: weekDate.toString(),
                                      date: weekDate,
                                      "data-slot": "cell",
                                      class: ui.value.cell({ class: (_a7 = props.ui) == null ? void 0 : _a7.cell })
                                    }, {
                                      default: withCtx(() => {
                                        var _a8;
                                        return [
                                          createVNode(unref(Calendar$1).CellTrigger, {
                                            day: weekDate,
                                            month: month.value,
                                            "data-slot": "cellTrigger",
                                            class: ui.value.cellTrigger({ class: (_a8 = props.ui) == null ? void 0 : _a8.cellTrigger })
                                          }, {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                                createTextVNode(toDisplayString(weekDate.day), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["day", "month", "class"])
                                        ];
                                      }),
                                      _: 2
                                    }, 1032, ["date", "class"]);
                                  }), 128))
                                ];
                              }),
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
                class: ui.value.header({ class: (_c = props.ui) == null ? void 0 : _c.header })
              }, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    props.yearControls ? (openBlock(), createBlock(unref(Calendar$1).Prev, {
                      key: 0,
                      "prev-page": (date) => paginateYear(date, -1),
                      "aria-label": unref(t)("calendar.prevYear"),
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$f, mergeProps({
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
                        createVNode(_sfc_main$f, mergeProps({
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
                      class: ui.value.heading({ class: (_a3 = props.ui) == null ? void 0 : _a3.heading })
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
                        createVNode(_sfc_main$f, mergeProps({
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
                        createVNode(_sfc_main$f, mergeProps({
                          icon: nextYearIcon.value,
                          size: props.size,
                          color: "neutral",
                          variant: "ghost"
                        }, props.nextYear), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["next-page", "aria-label"])) : createCommentVNode("", true)
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              createVNode("div", {
                "data-slot": "body",
                class: ui.value.body({ class: (_d = props.ui) == null ? void 0 : _d.body })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(grid, (month) => {
                  var _a3;
                  return openBlock(), createBlock(unref(Calendar$1).Grid, {
                    key: month.value.toString(),
                    "data-slot": "grid",
                    class: ui.value.grid({ class: (_a3 = props.ui) == null ? void 0 : _a3.grid })
                  }, {
                    default: withCtx(() => {
                      var _a4;
                      return [
                        createVNode(unref(Calendar$1).GridHead, null, {
                          default: withCtx(() => {
                            var _a5;
                            return [
                              createVNode(unref(Calendar$1).GridRow, {
                                "data-slot": "gridWeekDaysRow",
                                class: ui.value.gridWeekDaysRow({ class: (_a5 = props.ui) == null ? void 0 : _a5.gridWeekDaysRow })
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                    var _a6;
                                    return openBlock(), createBlock(unref(Calendar$1).HeadCell, {
                                      key: day,
                                      "data-slot": "headCell",
                                      class: ui.value.headCell({ class: (_a6 = props.ui) == null ? void 0 : _a6.headCell })
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
                          }),
                          _: 2
                        }, 1024),
                        createVNode(unref(Calendar$1).GridBody, {
                          "data-slot": "gridBody",
                          class: ui.value.gridBody({ class: (_a4 = props.ui) == null ? void 0 : _a4.gridBody })
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                              var _a5;
                              return openBlock(), createBlock(unref(Calendar$1).GridRow, {
                                key: `weekDate-${index}`,
                                "data-slot": "gridRow",
                                class: ui.value.gridRow({ class: (_a5 = props.ui) == null ? void 0 : _a5.gridRow })
                              }, {
                                default: withCtx(() => {
                                  var _a6;
                                  return [
                                    __props.weekNumbers && weekDates[0] ? (openBlock(), createBlock("td", {
                                      key: 0,
                                      role: "gridcell",
                                      "data-slot": "cellWeek",
                                      class: ui.value.cellWeek({ class: (_a6 = props.ui) == null ? void 0 : _a6.cellWeek })
                                    }, toDisplayString(unref(getWeekNumber)(weekDates[0], unref(locale).code)), 3)) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                      var _a7;
                                      return openBlock(), createBlock(unref(Calendar$1).Cell, {
                                        key: weekDate.toString(),
                                        date: weekDate,
                                        "data-slot": "cell",
                                        class: ui.value.cell({ class: (_a7 = props.ui) == null ? void 0 : _a7.cell })
                                      }, {
                                        default: withCtx(() => {
                                          var _a8;
                                          return [
                                            createVNode(unref(Calendar$1).CellTrigger, {
                                              day: weekDate,
                                              month: month.value,
                                              "data-slot": "cellTrigger",
                                              class: ui.value.cellTrigger({ class: (_a8 = props.ui) == null ? void 0 : _a8.cellTrigger })
                                            }, {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, "day", { day: weekDate }, () => [
                                                  createTextVNode(toDisplayString(weekDate.day), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["day", "month", "class"])
                                          ];
                                        }),
                                        _: 2
                                      }, 1032, ["date", "class"]);
                                    }), 128))
                                  ];
                                }),
                                _: 2
                              }, 1032, ["class"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ];
                    }),
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$1 = {
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
    ]
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
        "segment": "not-data-[segment=literal]:w-6"
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
        "segment": "not-data-[segment=literal]:w-6"
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
        "segment": "not-data-[segment=literal]:w-7"
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
        "segment": "not-data-[segment=literal]:w-7"
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
        "segment": "not-data-[segment=literal]:w-8"
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
const _sfc_main$3 = {
  __name: "UInputTime",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultValue: { type: Object, required: false },
    defaultPlaceholder: { type: Object, required: false },
    placeholder: { type: Object, required: false },
    modelValue: { type: [Object, null], required: false },
    hourCycle: { type: null, required: false },
    step: { type: Object, required: false },
    granularity: { type: String, required: false },
    hideTimeZone: { type: Boolean, required: false },
    maxValue: { type: Object, required: false },
    minValue: { type: Object, required: false },
    disabled: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  },
  emits: ["change", "blur", "focus", "update:modelValue", "update:placeholder"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactiveOmit(props, "id", "name", "color", "variant", "size", "highlight", "disabled", "autofocus", "autofocusDelay", "icon", "avatar", "leading", "leadingIcon", "trailing", "trailingIcon", "loading", "loadingIcon", "class", "ui"), emits);
    const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, id, color, size: formGroupSize, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const inputSize = computed(() => fieldGroupSize.value || formGroupSize.value);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme$1), ...((_a = appConfig.ui) == null ? void 0 : _a.inputTime) || {} })({
        color: color.value,
        variant: props.variant,
        size: inputSize.value,
        loading: props.loading,
        highlight: highlight.value,
        leading: isLeading.value || !!props.avatar || !!slots.leading,
        trailing: isTrailing.value || !!slots.trailing,
        fieldGroup: orientation.value
      });
    });
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
    __expose({
      inputsRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(TimeFieldRoot), mergeProps({ ...unref(rootProps), ...unref(ariaAttrs) }, {
        id: unref(id),
        name: unref(name),
        disabled: unref(disabled),
        "data-slot": "base",
        class: ui.value.base({ class: [(_a = props.ui) == null ? void 0 : _a.base, props.class] }),
        "onUpdate:modelValue": onUpdate,
        onBlur,
        onFocus
      }, _attrs), {
        default: withCtx(({ segments }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(segments, (segment, index) => {
              var _a3;
              _push2(ssrRenderComponent(unref(TimeFieldInput), {
                key: `${segment.part}-${index}`,
                ref_for: true,
                ref: (el) => inputsRef.value[index] = el,
                part: segment.part,
                "data-slot": "segment",
                class: ui.value.segment({ class: (_a3 = props.ui) == null ? void 0 : _a3.segment })
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
            ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: (_a2 = props.ui) == null ? void 0 : _a2.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                var _a3, _b2, _c2;
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$k, {
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$i, mergeProps({
                    size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.leadingAvatar })
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
              _push2(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: (_b = props.ui) == null ? void 0 : _b.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
                var _a3;
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$k, {
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
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
              (openBlock(true), createBlock(Fragment, null, renderList(segments, (segment, index) => {
                var _a3;
                return openBlock(), createBlock(unref(TimeFieldInput), {
                  key: `${segment.part}-${index}`,
                  ref_for: true,
                  ref: (el) => inputsRef.value[index] = el,
                  part: segment.part,
                  "data-slot": "segment",
                  class: ui.value.segment({ class: (_a3 = props.ui) == null ? void 0 : _a3.segment })
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(segment.value.trim()), 1)
                  ]),
                  _: 2
                }, 1032, ["part", "class"]);
              }), 128)),
              renderSlot(_ctx.$slots, "default", { ui: ui.value }),
              unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 0,
                "data-slot": "leading",
                class: ui.value.leading({ class: (_c = props.ui) == null ? void 0 : _c.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                  var _a3, _b2, _c2;
                  return [
                    unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$k, {
                      key: 0,
                      name: unref(leadingIconName),
                      "data-slot": "leadingIcon",
                      class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                    }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$i, mergeProps({
                      key: 1,
                      size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                    }, __props.avatar, {
                      "data-slot": "leadingAvatar",
                      class: ui.value.leadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.leadingAvatar })
                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 1,
                "data-slot": "trailing",
                class: ui.value.trailing({ class: (_d = props.ui) == null ? void 0 : _d.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
                  var _a3;
                  return [
                    unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$k, {
                      key: 0,
                      name: unref(trailingIconName),
                      "data-slot": "trailingIcon",
                      class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/InputTime.vue");
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
    var _a;
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue", { type: [Boolean, String], ...{ default: void 0 } });
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props);
    const id = (_a = _id.value) != null ? _a : useId();
    const ui = computed(() => {
      var _a2;
      return tv({ extend: tv(theme), ...((_a2 = appConfig.ui) == null ? void 0 : _a2.checkbox) || {} })({
        size: size.value,
        color: color.value,
        variant: props.variant,
        indicator: props.indicator,
        required: props.required,
        disabled: disabled.value
      });
    });
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: !__props.variant || __props.variant === "list" ? __props.as : unref(Label),
        "data-slot": "root",
        class: ui.value.root({ class: [(_a2 = props.ui) == null ? void 0 : _a2.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              modelValue: modelValue.value,
              "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
              name: unref(name),
              disabled: unref(disabled),
              "data-slot": "base",
              class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base })
            }), {
              default: withCtx(({ modelValue: modelValue2 }, _push3, _parent3, _scopeId2) => {
                var _a4, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckboxIndicator), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator })
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a5, _b3, _c2, _d2;
                      if (_push4) {
                        if (modelValue2 === "indeterminate") {
                          _push4(ssrRenderComponent(_sfc_main$k, {
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_a5 = props.ui) == null ? void 0 : _a5.icon })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$k, {
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_b3 = props.ui) == null ? void 0 : _b3.icon })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$k, {
                            key: 0,
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$k, {
                            key: 1,
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_d2 = props.ui) == null ? void 0 : _d2.icon })
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
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator })
                    }, {
                      default: withCtx(() => {
                        var _a5, _b3;
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$k, {
                            key: 0,
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_a5 = props.ui) == null ? void 0 : _a5.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$k, {
                            key: 1,
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: (_b3 = props.ui) == null ? void 0 : _b3.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.label || !!slots.label || (__props.description || !!slots.description)) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
              if (__props.label || !!slots.label) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: (_d = props.ui) == null ? void 0 : _d.label })
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
                _push2(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: (_e = props.ui) == null ? void 0 : _e.description }))}"${_scopeId}>`);
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
                class: ui.value.container({ class: (_f = props.ui) == null ? void 0 : _f.container })
              }, [
                createVNode(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                  modelValue: modelValue.value,
                  "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
                  name: unref(name),
                  disabled: unref(disabled),
                  "data-slot": "base",
                  class: ui.value.base({ class: (_g = props.ui) == null ? void 0 : _g.base })
                }), {
                  default: withCtx(({ modelValue: modelValue2 }) => {
                    var _a4;
                    return [
                      createVNode(unref(CheckboxIndicator), {
                        "data-slot": "indicator",
                        class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator })
                      }, {
                        default: withCtx(() => {
                          var _a5, _b2;
                          return [
                            modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$k, {
                              key: 0,
                              name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: (_a5 = props.ui) == null ? void 0 : _a5.icon })
                            }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$k, {
                              key: 1,
                              name: __props.icon || unref(appConfig).ui.icons.check,
                              "data-slot": "icon",
                              class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                            }, null, 8, ["name", "class"]))
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"])
                    ];
                  }),
                  _: 1
                }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])
              ], 2),
              __props.label || !!slots.label || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: (_h = props.ui) == null ? void 0 : _h.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                  key: 0,
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: (_i = props.ui) == null ? void 0 : _i.label })
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
                  class: ui.value.description({ class: (_j = props.ui) == null ? void 0 : _j.description })
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
    const df = new DateFormatter("ru-RU", {
      dateStyle: "medium"
    });
    const check = ref(false);
    const toast = useToast();
    const [day, month, year] = new Date(Date.now()).toLocaleDateString("ru-RU").split(".");
    const defaultTime = new Time(16, 30, 0);
    const currentDate = new CalendarDate(Number(year), Number(month), Number(day));
    const data = reactive({
      name: "",
      phone: "",
      from: "\u041A\u0443\u043C\u0435\u0440\u0442\u0430\u0443",
      from_address: "",
      to: "\u0423\u0444\u0430",
      to_address: "",
      date: shallowRef(currentDate),
      time: shallowRef(defaultTime)
    });
    const orderCreated = ref(false);
    const schema = v.object({
      name: v.pipe(v.string(), v.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")),
      phone: v.pipe(
        v.string(),
        v.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"),
        minLength(18, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430")
      ),
      to: v.pipe(v.string(), v.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")),
      from: v.pipe(v.string(), v.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")),
      to_address: v.pipe(v.string(), v.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")),
      from_address: v.pipe(v.string(), v.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")),
      date: v.pipe(v.any(), v.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")),
      time: v.pipe(v.any(), v.nonEmpty("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"))
    });
    const cities = ref(["\u041A\u0443\u043C\u0435\u0440\u0442\u0430\u0443", "\u041C\u0435\u043B\u0435\u0443\u0437", "\u0421\u0430\u043B\u0430\u0432\u0430\u0442", "\u0423\u0444\u0430"]);
    const from_cities = computed(() => {
      return cities.value;
    });
    watch(
      () => data.from,
      (value) => {
        if (value === "\u0423\u0444\u0430") data.to = "";
      }
    );
    const to_cities = computed(() => {
      if (data.from === "\u0423\u0444\u0430") {
        return cities.value.filter((i) => i !== "\u0423\u0444\u0430");
      } else {
        return cities.value.filter((i) => i === "\u0423\u0444\u0430");
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
      data.time = defaultTime;
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
        toast.add({ title: "\u041E\u0442\u0432\u0435\u0442", description: "\u0417\u0430\u044F\u0432\u043A\u0430 \u0431\u044B\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0430", color: "success" });
        orderCreated.value = true;
      }).catch((response) => {
        console.log(response);
        toast.add({ title: "\u041E\u0442\u0432\u0435\u0442", description: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0437\u0430\u044F\u0432\u043A\u0438", color: "error" });
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionTitle = __nuxt_component_0;
      const _component_UForm = _sfc_main$8;
      const _component_UFormField = _sfc_main$7;
      const _component_UInput = _sfc_main$a;
      const _component_UInputMenu = _sfc_main$6;
      const _component_ClientOnly = __nuxt_component_5;
      const _component_UPopover = _sfc_main$5;
      const _component_UButton = _sfc_main$f;
      const _component_UCalendar = _sfc_main$4;
      const _component_UInputTime = _sfc_main$3;
      const _component_UCheckbox = _sfc_main$2;
      _push(`<!--[-->`);
      if (!unref(orderCreated)) {
        _push(ssrRenderComponent(_component_SectionTitle, { title: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(orderCreated)) {
        _push(ssrRenderComponent(_component_UForm, {
          class: "w-full flex flex-col justify-start items-center pt-5 gap-5",
          schema: unref(schema),
          state: unref(data),
          onSubmit,
          id: "form-create-order"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col lg:grid lg:grid-cols-2 justify-start items-center lg:items-start gap-5" data-v-7ed6d4b3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { name: "name" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: unref(data).name,
                      "onUpdate:modelValue": ($event) => unref(data).name = $event,
                      color: "primary",
                      placeholder: "\u0424.\u0418.\u041E",
                      size: "xl",
                      id: "name"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: unref(data).name,
                        "onUpdate:modelValue": ($event) => unref(data).name = $event,
                        color: "primary",
                        placeholder: "\u0424.\u0418.\u041E",
                        size: "xl",
                        id: "name"
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
                      size: "xl",
                      id: "phone"
                    }, ssrGetDirectiveProps(_ctx, unref(vMaska), "+7-(###)-###-##-##")), null, _parent3, _scopeId2));
                  } else {
                    return [
                      withDirectives(createVNode(_component_UInput, {
                        modelValue: unref(data).phone,
                        "onUpdate:modelValue": ($event) => unref(data).phone = $event,
                        placeholder: "+7-(000)-000-00-00",
                        icon: "i-lucide-phone",
                        size: "xl",
                        id: "phone"
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
                      "open-on-focus": "",
                      color: "primary",
                      placeholder: "\u0413\u043E\u0440\u043E\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
                      size: "xl",
                      id: "from"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInputMenu, {
                        modelValue: unref(data).from,
                        "onUpdate:modelValue": ($event) => unref(data).from = $event,
                        items: unref(from_cities),
                        "open-on-focus": "",
                        color: "primary",
                        placeholder: "\u0413\u043E\u0440\u043E\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
                        size: "xl",
                        id: "from"
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
                      placeholder: "\u0410\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
                      size: "xl",
                      id: "from_address"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: unref(data).from_address,
                        "onUpdate:modelValue": ($event) => unref(data).from_address = $event,
                        color: "primary",
                        placeholder: "\u0410\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
                        size: "xl",
                        id: "from_address"
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
                      "open-on-focus": "",
                      color: "primary",
                      placeholder: "\u0413\u043E\u0440\u043E\u0434 \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u044F",
                      size: "xl",
                      id: "to"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInputMenu, {
                        modelValue: unref(data).to,
                        "onUpdate:modelValue": ($event) => unref(data).to = $event,
                        items: unref(to_cities),
                        "open-on-focus": "",
                        color: "primary",
                        placeholder: "\u0413\u043E\u0440\u043E\u0434 \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u044F",
                        size: "xl",
                        id: "to"
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
                      placeholder: "\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u044F",
                      size: "xl",
                      id: "to_address"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: unref(data).to_address,
                        "onUpdate:modelValue": ($event) => unref(data).to_address = $event,
                        color: "primary",
                        placeholder: "\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u044F",
                        size: "xl",
                        id: "to_address"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="date-time w-full flex not-sm:flex-col justify-start items-center gap-5" data-v-7ed6d4b3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                name: "time",
                class: "w-[50%] not-sm:w-[320px]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInputTime, {
                      class: "w-full",
                      "hour-cycle": 24,
                      "default-value": unref(data).time,
                      id: "time"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInputTime, {
                        class: "w-full",
                        "hour-cycle": 24,
                        "default-value": unref(data).time,
                        id: "time"
                      }, null, 8, ["default-value"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="min-w-[320px] max-w-110 flex flex-col justify-center items-center" data-v-7ed6d4b3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: unref(check),
                "onUpdate:modelValue": ($event) => isRef(check) ? check.value = $event : null,
                label: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435",
                description: "\u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
                ui: {
                  base: "h-5 w-5 text-white bg-gray-600 mt-10 m-2",
                  description: "text-primary/70",
                  label: "text-white text-lg"
                },
                id: "check"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="w-full flex flex-row justify-center items-center pt-5 mb-20 gap-5" data-v-7ed6d4b3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                type: "submit",
                class: "button-gradient h-16",
                icon: "i-lucide-send",
                disabled: !unref(check)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C `);
                  } else {
                    return [
                      createTextVNode(" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                class: "button-gradient h-16",
                onClick: reset
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C`);
                  } else {
                    return [
                      createTextVNode("\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col lg:grid lg:grid-cols-2 justify-start items-center lg:items-start gap-5" }, [
                  createVNode(_component_UFormField, { name: "name" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(data).name,
                        "onUpdate:modelValue": ($event) => unref(data).name = $event,
                        color: "primary",
                        placeholder: "\u0424.\u0418.\u041E",
                        size: "xl",
                        id: "name"
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
                        size: "xl",
                        id: "phone"
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
                        "open-on-focus": "",
                        color: "primary",
                        placeholder: "\u0413\u043E\u0440\u043E\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
                        size: "xl",
                        id: "from"
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
                        placeholder: "\u0410\u0434\u0440\u0435\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
                        size: "xl",
                        id: "from_address"
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
                        "open-on-focus": "",
                        color: "primary",
                        placeholder: "\u0413\u043E\u0440\u043E\u0434 \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u044F",
                        size: "xl",
                        id: "to"
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
                        placeholder: "\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u0438\u0431\u044B\u0442\u0438\u044F",
                        size: "xl",
                        id: "to_address"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "date-time w-full flex not-sm:flex-col justify-start items-center gap-5" }, [
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        createVNode(_component_UFormField, {
                          name: "date",
                          class: "w-[50%] not-sm:w-[320px]"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UPopover, null, {
                              content: withCtx(() => [
                                createVNode(_component_UCalendar, {
                                  modelValue: unref(data).date,
                                  "onUpdate:modelValue": ($event) => unref(data).date = $event,
                                  class: "p-2",
                                  id: "date"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_UButton, {
                                  icon: "i-lucide-calendar",
                                  id: "date-button",
                                  class: "w-full bg-gray-600 h-12 rounded-[26px] border border-white justify-between text-left"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(data).date ? unref(df).format(unref(data).date.toDate(unref(getLocalTimeZone)())) : "\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0434\u0430\u0442\u0443"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      name: "time",
                      class: "w-[50%] not-sm:w-[320px]"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInputTime, {
                          class: "w-full",
                          "hour-cycle": 24,
                          "default-value": unref(data).time,
                          id: "time"
                        }, null, 8, ["default-value"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "min-w-[320px] max-w-110 flex flex-col justify-center items-center" }, [
                    createVNode(_component_UCheckbox, {
                      modelValue: unref(check),
                      "onUpdate:modelValue": ($event) => isRef(check) ? check.value = $event : null,
                      label: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435",
                      description: "\u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
                      ui: {
                        base: "h-5 w-5 text-white bg-gray-600 mt-10 m-2",
                        description: "text-primary/70",
                        label: "text-white text-lg"
                      },
                      id: "check"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "w-full flex flex-row justify-center items-center pt-5 mb-20 gap-5" }, [
                  createVNode(_component_UButton, {
                    type: "submit",
                    class: "button-gradient h-16",
                    icon: "i-lucide-send",
                    disabled: !unref(check)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(_component_UButton, {
                    class: "button-gradient h-16",
                    onClick: reset
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div data-v-7ed6d4b3><div class="order-created w-full flex flex-col justify-start items-start mb-20 gap-5" data-v-7ed6d4b3><h3 class="text-2xl font-bold text-center" data-v-7ed6d4b3>\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430.</h3><p class="w-full text-center" data-v-7ed6d4b3>\u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0441\u0432\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438.</p><p data-v-7ed6d4b3> \u0418\u043C\u044F: <b data-v-7ed6d4b3>${ssrInterpolate(unref(data).name)}</b></p><p data-v-7ed6d4b3>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ${ssrInterpolate(unref(data).phone)}</p><p data-v-7ed6d4b3>\u0418\u0437: ${ssrInterpolate(unref(data).from)}, ${ssrInterpolate(unref(data).from_address)}</p><p data-v-7ed6d4b3>\u0414\u043E: ${ssrInterpolate(unref(data).to)}, ${ssrInterpolate(unref(data).to_address)}</p><p data-v-7ed6d4b3>\u0414\u0430\u0442\u0430: ${ssrInterpolate(unref(data).date)}, \u0432\u0440\u0435\u043C\u044F: ${ssrInterpolate(unref(data).time)}</p></div></div>`);
      }
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
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-7ed6d4b3"]]), { __name: "OrderCreate" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UContainer = _sfc_main$9;
  const _component_OrderCreate = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-order w-full mx-auto h-auto py-5 border-b border-b-[#0A0B08]" }, _attrs))} data-v-0bf01efe>`);
  _push(ssrRenderComponent(_component_UContainer, { class: "flex animation-box flex-col justify-center items-center gap-5" }, {
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
const order = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0bf01efe"]]), { __name: "SectionOrder" });

export { order as default };

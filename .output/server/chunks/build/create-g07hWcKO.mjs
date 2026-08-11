import { _ as __nuxt_component_1$1 } from './title-Bvxv237P.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$6, L as Label_default } from './FormField-DQ-B2VOq.mjs';
import { _ as _sfc_main$7 } from './Input-DVSPuXok.mjs';
import { defineComponent, ref, computed, reactive, shallowRef, watch, unref, withCtx, createVNode, mergeProps, withDirectives, openBlock, createBlock, isRef, createTextVNode, useSlots, useModel, useAttrs, toRef, useTemplateRef, nextTick, renderSlot, toDisplayString, createCommentVNode, withModifiers, Fragment, renderList, mergeModels, getCurrentInstance, useId, resolveDynamicComponent, toRaw, toRefs, withKeys, toHandlers, createElementBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { b as _sfc_main$9, _ as _sfc_main$5$1, u as useComponentProps, a as useForwardProps, A as useFormField, l as useFieldGroup, m as useComponentIcons, t as tv, i as isArrayOfArray, D as compare, f as get, e as _sfc_main$3$1, h as _sfc_main$4$1, F as FieldGroupReset, P as Primitive, B as looseToNumber, E as getDisplayValue, j as createContext } from './Button-D7hwtKF6.mjs';
import { i as useFilter, A as Autocomplete, C as Combobox, Y as YearRangePicker, k as YearPicker, M as MonthRangePicker, l as MonthPicker, R as RangeCalendar, m as Calendar, n as getWeekNumber, T as TimeField, a as useDirection, o as useFormControl, b as useArrowNavigation, V as VisuallyHiddenInput_default, p as useComposing, q as useDateField, r as useLocale$1, s as useDateFormatter, t as normalizeHourCycle, v as normalizeDateStep, w as isBefore, x as isBeforeOrSame, y as areAllDaysBetweenValid, z as getDefaultTime, B as initializeTimeSegmentValues, E as syncTimeSegmentValues, F as createContent, G as syncSegmentValues, H as getTimeFieldSegmentElements, I as isSegmentNavigationKey, J as injectRovingFocusGroupContext, K as useKbd, L as getFocusIntent, N as wrapArray, O as focusFirst } from './useFilter-C_G9ePwc.mjs';
import { u as useForwardExpose } from './useForwardExpose-C3mVDiKg.mjs';
import { u as useCollection, a as usePrimitiveElement } from './Collection-Bx5WsODp.mjs';
import { reactivePick, reactiveOmit, createReusableTemplate, useVModel, useFocusWithin } from '@vueuse/core';
import { a as usePortal, u as useId$1, i as isNullish, V as VisuallyHidden_default, P as Presence_default } from './overlay-BG1xKR7v.mjs';
import { z as defu, D as isEqual } from '../nitro/nitro.mjs';
import { u as useLocale } from './useLocale-CasdCEot.mjs';
import { _ as _export_sfc, g as useRuntimeConfig, b as useAppConfig, c as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$8, i as isValueEqualOrExist } from './Popover-BLX7US29.mjs';
import { o as onPrehydrate } from './fetch-BcNBoCK9.mjs';
import { Time, CalendarDate, today, getLocalTimeZone, toCalendarDateTime } from '@internationalized/date';
import { _ as __nuxt_component_0 } from './nuxt-link-BVaogQjF.mjs';
import { vMaska } from 'maska/vue';
import * as v from 'valibot';
import { minLength } from 'valibot';
import { u as utils } from './index-CzlXzl75.mjs';
import { u as useToast } from './useToast-CZLK1bG2.mjs';

function useForwardScopeId() {
  const scopeId = getCurrentInstance()?.vnode?.scopeId;
  return scopeId ? { [scopeId]: "" } : {};
}
var RovingFocusItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {
      type: String,
      required: false
    },
    focusable: {
      type: Boolean,
      required: false,
      default: true
    },
    active: {
      type: Boolean,
      required: false
    },
    allowShiftKey: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    const props = __props;
    const context = injectRovingFocusGroupContext();
    const randomId = useId$1();
    const id = computed(() => props.tabStopId || randomId);
    const isCurrentTabStop = computed(() => context.currentTabStopId.value === id.value);
    const { getItems, CollectionItem } = useCollection();
    watch(() => props.focusable, (newVal, oldVal) => {
      if (newVal === oldVal) return;
      if (newVal) context.onFocusableItemAdd();
      else context.onFocusableItemRemove();
    });
    function handleKeydown(event) {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget) return;
      const focusIntent = getFocusIntent(event, context.orientation.value, context.dir.value);
      if (focusIntent !== void 0) {
        if (event.metaKey || event.ctrlKey || event.altKey || (props.allowShiftKey ? false : event.shiftKey)) return;
        event.preventDefault();
        let candidateNodes = [...getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "")];
        if (focusIntent === "last") candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev") candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop.value ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        nextTick(() => focusFirst(candidateNodes));
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CollectionItem), null, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          tabindex: isCurrentTabStop.value ? 0 : -1,
          "data-orientation": unref(context).orientation.value,
          "data-active": _ctx.active ? "" : void 0,
          "data-disabled": !_ctx.focusable ? "" : void 0,
          as: _ctx.as,
          "as-child": _ctx.asChild,
          onMousedown: _cache[0] || (_cache[0] = (event) => {
            if (!_ctx.focusable) event.preventDefault();
            else unref(context).onItemFocus(id.value);
          }),
          onFocus: _cache[1] || (_cache[1] = ($event) => unref(context).onItemFocus(id.value)),
          onKeydown: handleKeydown
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "tabindex",
          "data-orientation",
          "data-active",
          "data-disabled",
          "as",
          "as-child"
        ])]),
        _: 3
      });
    };
  }
});
var RovingFocusItem_default = RovingFocusItem_vue_vue_type_script_setup_true_lang_default;
const [injectCheckboxGroupRootContext] = /* @__PURE__ */ createContext("CheckboxGroupRoot");
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
const [injectCheckboxRootContext, provideCheckboxRootContext] = /* @__PURE__ */ createContext("CheckboxRoot");
var CheckboxRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "CheckboxRoot",
  props: {
    defaultValue: {
      type: null,
      required: false
    },
    modelValue: {
      type: null,
      required: false,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: false
    },
    value: {
      type: null,
      required: false,
      default: "on"
    },
    id: {
      type: String,
      required: false
    },
    trueValue: {
      type: null,
      required: false,
      default: () => true
    },
    falseValue: {
      type: null,
      required: false,
      default: () => false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    },
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement } = useForwardExpose();
    const checkboxGroupContext = injectCheckboxGroupRootContext(null);
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: props.defaultValue ?? props.falseValue,
      passive: props.modelValue === void 0
    });
    const disabled = computed(() => checkboxGroupContext?.disabled.value || props.disabled);
    const isChecked = computed(() => isEqual(modelValue.value, props.trueValue));
    const checkboxState = computed(() => {
      if (!isNullish(checkboxGroupContext?.modelValue.value)) return isValueEqualOrExist(checkboxGroupContext.modelValue.value, props.value);
      else {
        if (modelValue.value === "indeterminate") return "indeterminate";
        return isChecked.value;
      }
    });
    function handleClick() {
      if (!isNullish(checkboxGroupContext?.modelValue.value)) {
        const modelValueArray = [...checkboxGroupContext.modelValue.value || []];
        if (isValueEqualOrExist(modelValueArray, props.value)) {
          const index = modelValueArray.findIndex((i) => isEqual(i, props.value));
          modelValueArray.splice(index, 1);
        } else modelValueArray.push(props.value);
        checkboxGroupContext.modelValue.value = modelValueArray;
      } else if (modelValue.value === "indeterminate") modelValue.value = props.trueValue;
      else modelValue.value = isChecked.value ? props.falseValue : props.trueValue;
    }
    const isFormControl = useFormControl(currentElement);
    const scopeIdAttrs = useForwardScopeId();
    const attrs = useAttrs();
    const ariaLabel = computed(() => {
      if (attrs["aria-label"]) return void 0;
      return props.id && currentElement.value ? (void 0).querySelector(`[for="${props.id}"]`)?.innerText : void 0;
    });
    provideCheckboxRootContext({
      disabled,
      state: checkboxState
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [(openBlock(), createBlock(resolveDynamicComponent(unref(checkboxGroupContext)?.rovingFocus.value ? unref(RovingFocusItem_default) : unref(Primitive)), mergeProps({
        ..._ctx.$attrs,
        ...unref(scopeIdAttrs)
      }, {
        id: _ctx.id,
        ref: unref(forwardRef),
        role: "checkbox",
        "as-child": _ctx.asChild,
        as: _ctx.as,
        type: _ctx.as === "button" ? "button" : void 0,
        "aria-checked": unref(isIndeterminate)(checkboxState.value) ? "mixed" : checkboxState.value,
        "aria-required": _ctx.required,
        "aria-label": _ctx.$attrs["aria-label"] || ariaLabel.value,
        "data-state": unref(getState)(checkboxState.value),
        "data-disabled": disabled.value ? "" : void 0,
        disabled: disabled.value,
        focusable: unref(checkboxGroupContext)?.rovingFocus.value ? !disabled.value : void 0,
        onKeydown: withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]),
        onClick: handleClick
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          modelValue: unref(modelValue),
          state: checkboxState.value
        })]),
        _: 3
      }, 16, [
        "id",
        "as-child",
        "as",
        "type",
        "aria-checked",
        "aria-required",
        "aria-label",
        "data-state",
        "data-disabled",
        "disabled",
        "focusable",
        "onKeydown"
      ])), unref(isFormControl) && _ctx.name && !unref(checkboxGroupContext) ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), mergeProps({
        key: 0,
        type: "checkbox",
        checked: !!checkboxState.value,
        name: _ctx.name,
        value: _ctx.value,
        disabled: disabled.value,
        required: _ctx.required
      }, unref(scopeIdAttrs)), null, 16, [
        "checked",
        "name",
        "value",
        "disabled",
        "required"
      ])) : createCommentVNode("v-if", true)], 64);
    };
  }
});
var CheckboxRoot_default = CheckboxRoot_vue_vue_type_script_setup_true_lang_default;
var CheckboxIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    const { forwardRef } = useForwardExpose();
    const rootContext = injectCheckboxRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(isIndeterminate)(unref(rootContext).state.value) || unref(rootContext).state.value === true }, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
          ref: unref(forwardRef),
          "data-state": unref(getState)(unref(rootContext).state.value),
          "data-disabled": unref(rootContext).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": _ctx.asChild,
          as: _ctx.as
        }, _ctx.$attrs), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "data-state",
          "data-disabled",
          "as-child",
          "as"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var CheckboxIndicator_default = CheckboxIndicator_vue_vue_type_script_setup_true_lang_default;
const [injectTagsInputRootContext, provideTagsInputRootContext] = /* @__PURE__ */ createContext("TagsInputRoot");
var TagsInputRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TagsInputRoot",
  props: {
    modelValue: {
      type: [Array, null],
      required: false
    },
    defaultValue: {
      type: Array,
      required: false,
      default: () => []
    },
    addOnPaste: {
      type: Boolean,
      required: false
    },
    addOnTab: {
      type: Boolean,
      required: false
    },
    addOnBlur: {
      type: Boolean,
      required: false
    },
    duplicate: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    delimiter: {
      type: null,
      required: false,
      default: ","
    },
    dir: {
      type: String,
      required: false
    },
    max: {
      type: Number,
      required: false,
      default: 0
    },
    id: {
      type: String,
      required: false
    },
    convertValue: {
      type: Function,
      required: false
    },
    displayValue: {
      type: Function,
      required: false,
      default: (value) => value.toString()
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "update:modelValue",
    "invalid",
    "addTag",
    "removeTag"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { addOnPaste, disabled, delimiter, max, id, dir: propDir, addOnBlur, addOnTab } = toRefs(props);
    const dir = useDirection(propDir);
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: props.defaultValue,
      passive: true,
      deep: true
    });
    const { forwardRef, currentElement } = useForwardExpose();
    const { focused } = useFocusWithin(currentElement);
    const isFormControl = useFormControl(currentElement);
    const { getItems, CollectionSlot } = useCollection({ isProvider: true });
    const selectedElement = ref();
    const isInvalidInput = ref(false);
    const currentModelValue = computed(() => Array.isArray(modelValue.value) ? [...modelValue.value] : []);
    function handleRemoveTag(index) {
      if (index !== -1) {
        const collection = getItems().filter((i) => i.ref.dataset.disabled !== "");
        modelValue.value = modelValue.value.filter((_, i) => i !== index);
        emits("removeTag", collection[index].value);
      }
    }
    provideTagsInputRootContext({
      modelValue,
      onAddValue: (_payload) => {
        const array = [...currentModelValue.value];
        const modelValueIsObject = array.length > 0 && typeof array[0] === "object";
        const defaultValueIsObject = array.length > 0 && typeof props.defaultValue[0] === "object";
        if ((modelValueIsObject || defaultValueIsObject) && typeof props.convertValue !== "function") throw new Error("You must provide a `convertValue` function when using objects as values.");
        const payload = props.convertValue ? props.convertValue(_payload) : _payload;
        if (array.length >= max.value && !!max.value) {
          emits("invalid", payload);
          return false;
        }
        if (props.duplicate) {
          modelValue.value = [...array, payload];
          emits("addTag", payload);
          return true;
        } else {
          const exist = array.includes(payload);
          if (!exist) {
            modelValue.value = [...array, payload];
            emits("addTag", payload);
            return true;
          } else isInvalidInput.value = true;
        }
        emits("invalid", payload);
        return false;
      },
      onRemoveValue: handleRemoveTag,
      onInputKeydown: (event) => {
        if (event.isComposing) return;
        const target = event.target;
        const collection = getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "");
        if (!collection.length) return;
        const lastTag = collection.at(-1);
        switch (event.key) {
          case "Delete":
          case "Backspace": {
            if (target.selectionStart !== 0 || target.selectionEnd !== 0) break;
            if (selectedElement.value) {
              const index = collection.findIndex((i) => i === selectedElement.value);
              handleRemoveTag(index);
              selectedElement.value = selectedElement.value === lastTag ? collection.at(index - 1) : collection.at(index + 1);
              event.preventDefault();
            } else if (event.key === "Backspace") {
              selectedElement.value = lastTag;
              event.preventDefault();
            }
            break;
          }
          case "Home":
          case "End":
          case "ArrowRight":
          case "ArrowLeft": {
            const isArrowRight = event.key === "ArrowRight" && dir.value === "ltr" || event.key === "ArrowLeft" && dir.value === "rtl";
            const isArrowLeft = !isArrowRight;
            if (target.selectionStart !== 0 || target.selectionEnd !== 0) break;
            if (isArrowLeft && !selectedElement.value) {
              selectedElement.value = lastTag;
              event.preventDefault();
            } else if (isArrowRight && lastTag && selectedElement.value === lastTag) {
              selectedElement.value = void 0;
              event.preventDefault();
            } else if (selectedElement.value) {
              const el = useArrowNavigation(event, selectedElement.value, void 0, {
                itemsArray: collection,
                loop: false,
                dir: dir.value
              });
              if (el) selectedElement.value = el;
              event.preventDefault();
            }
            break;
          }
          case "ArrowUp":
          case "ArrowDown": {
            if (selectedElement.value) event.preventDefault();
            break;
          }
          default:
            selectedElement.value = void 0;
        }
      },
      selectedElement,
      isInvalidInput,
      addOnPaste,
      addOnBlur,
      addOnTab,
      dir,
      disabled,
      delimiter,
      max,
      id,
      displayValue: props.displayValue
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CollectionSlot), null, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          ref: unref(forwardRef),
          dir: unref(dir),
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "data-invalid": isInvalidInput.value ? "" : void 0,
          "data-disabled": unref(disabled) ? "" : void 0,
          "data-focused": unref(focused) ? "" : void 0
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) }), unref(isFormControl) && _ctx.name ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
            key: 0,
            name: _ctx.name,
            value: unref(modelValue),
            required: _ctx.required,
            disabled: unref(disabled)
          }, null, 8, [
            "name",
            "value",
            "required",
            "disabled"
          ])) : createCommentVNode("v-if", true)]),
          _: 3
        }, 8, [
          "dir",
          "as",
          "as-child",
          "data-invalid",
          "data-disabled",
          "data-focused"
        ])]),
        _: 3
      });
    };
  }
});
var TagsInputRoot_default = TagsInputRoot_vue_vue_type_script_setup_true_lang_default;
var TagsInputInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TagsInputInput",
  props: {
    placeholder: {
      type: String,
      required: false
    },
    autoFocus: {
      type: Boolean,
      required: false
    },
    maxLength: {
      type: Number,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "input"
    }
  },
  setup(__props) {
    const context = injectTagsInputRootContext();
    const { forwardRef } = useForwardExpose();
    function handleBlur(event) {
      context.selectedElement.value = void 0;
      if (!context.addOnBlur.value) return;
      const target = event.target;
      const relatedTarget = event.relatedTarget;
      const controlledId = target.getAttribute("aria-controls");
      if (controlledId && relatedTarget?.closest(`#${CSS.escape(controlledId)}`)) return;
      if (!target.value) return;
      const isAdded = context.onAddValue(target.value);
      if (isAdded) target.value = "";
    }
    function handleTab(event) {
      if (!context.addOnTab.value) return;
      handleCustomKeydown(event);
    }
    const { isComposing, handleCompositionStart, handleCompositionEnd } = useComposing();
    async function handleCustomKeydown(event) {
      if (isComposing.value) return;
      await nextTick();
      if (event.defaultPrevented) return;
      const target = event.target;
      if (!target.value) return;
      const isAdded = context.onAddValue(target.value);
      if (isAdded) target.value = "";
      event.preventDefault();
    }
    function handleInput(event) {
      if (isComposing.value) return;
      context.isInvalidInput.value = false;
      if (event.data === null) return;
      const delimiter = context.delimiter.value;
      const matchesDelimiter = delimiter === event.data || delimiter instanceof RegExp && delimiter.test(event.data);
      if (matchesDelimiter) {
        const target = event.target;
        target.value = target.value.replace(delimiter, "");
        if (target.value.trim() === "") {
          target.value = "";
          return;
        }
        const isAdded = context.onAddValue(target.value);
        if (isAdded) target.value = "";
      }
    }
    function handleInputKeydown(event) {
      if (isComposing.value) return;
      context.onInputKeydown(event);
    }
    function handlePaste(event) {
      if (context.addOnPaste.value) {
        event.preventDefault();
        const clipboardData = event.clipboardData;
        if (!clipboardData) return;
        const value = clipboardData.getData("text");
        if (context.delimiter.value) {
          const splitValue = value.split(context.delimiter.value);
          splitValue.forEach((v2) => {
            context.onAddValue(v2);
          });
        } else context.onAddValue(value);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        id: unref(context).id?.value,
        ref: unref(forwardRef),
        type: "text",
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        as: _ctx.as,
        "as-child": _ctx.asChild,
        maxlength: _ctx.maxLength,
        placeholder: _ctx.placeholder,
        disabled: unref(context).disabled.value,
        "data-invalid": unref(context).isInvalidInput.value ? "" : void 0,
        onInput: handleInput,
        onKeydown: [
          withKeys(handleCustomKeydown, ["enter"]),
          withKeys(handleTab, ["tab"]),
          handleInputKeydown
        ],
        onBlur: handleBlur,
        onCompositionstart: unref(handleCompositionStart),
        onCompositionend: unref(handleCompositionEnd),
        onPaste: handlePaste
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "id",
        "as",
        "as-child",
        "maxlength",
        "placeholder",
        "disabled",
        "data-invalid",
        "onCompositionstart",
        "onCompositionend"
      ]);
    };
  }
});
var TagsInputInput_default = TagsInputInput_vue_vue_type_script_setup_true_lang_default;
const [injectTagsInputItemContext, provideTagsInputItemContext] = /* @__PURE__ */ createContext("TagsInputItem");
var TagsInputItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TagsInputItem",
  props: {
    value: {
      type: null,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { value } = toRefs(props);
    const context = injectTagsInputRootContext();
    const { forwardRef, currentElement } = useForwardExpose();
    const { CollectionItem } = useCollection();
    const isSelected = computed(() => context.selectedElement.value === currentElement.value);
    const disabled = computed(() => props.disabled || context.disabled.value);
    const itemContext = provideTagsInputItemContext({
      value,
      isSelected,
      disabled,
      textId: "",
      displayValue: computed(() => context.displayValue(value.value))
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CollectionItem), { value: unref(value) }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          ref: unref(forwardRef),
          as: _ctx.as,
          "as-child": _ctx.asChild,
          "aria-labelledby": unref(itemContext).textId,
          "aria-current": isSelected.value,
          "data-disabled": disabled.value ? "" : void 0,
          "data-state": isSelected.value ? "active" : "inactive"
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "aria-labelledby",
          "aria-current",
          "data-disabled",
          "data-state"
        ])]),
        _: 3
      }, 8, ["value"]);
    };
  }
});
var TagsInputItem_default = TagsInputItem_vue_vue_type_script_setup_true_lang_default;
var TagsInputItemDelete_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TagsInputItemDelete",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    const context = injectTagsInputRootContext();
    const itemContext = injectTagsInputItemContext();
    const disabled = computed(() => itemContext.disabled?.value || context.disabled.value);
    function handleDelete() {
      if (disabled.value) return;
      const index = context.modelValue.value.findIndex((i) => isEqual(i, itemContext.value.value));
      context.onRemoveValue(index);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps({ tabindex: "-1" }, props, {
        "aria-labelledby": unref(itemContext).textId,
        "aria-current": unref(itemContext).isSelected.value,
        "data-state": unref(itemContext).isSelected.value ? "active" : "inactive",
        "data-disabled": disabled.value ? "" : void 0,
        type: _ctx.as === "button" ? "button" : void 0,
        onClick: handleDelete
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "aria-labelledby",
        "aria-current",
        "data-state",
        "data-disabled",
        "type"
      ]);
    };
  }
});
var TagsInputItemDelete_default = TagsInputItemDelete_vue_vue_type_script_setup_true_lang_default;
var TagsInputItemText_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TagsInputItemText",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    const props = __props;
    const itemContext = injectTagsInputItemContext();
    useForwardExpose();
    itemContext.textId ||= useId$1(void 0, "reka-tags-input-item-text");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(itemContext).textId }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(unref(itemContext).displayValue.value), 1)])]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var TagsInputItemText_default = TagsInputItemText_vue_vue_type_script_setup_true_lang_default;
const [injectTimeRangeFieldRootContext, provideTimeRangeFieldRootContext] = /* @__PURE__ */ createContext("TimeRangeFieldRoot");
function convertValue(value, date = today(getLocalTimeZone())) {
  if (value && "day" in value) return value;
  return toCalendarDateTime(date, value);
}
var TimeRangeFieldRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "TimeRangeFieldRoot",
  props: {
    defaultValue: {
      type: Object,
      required: false,
      default: void 0
    },
    defaultPlaceholder: {
      type: Object,
      required: false
    },
    placeholder: {
      type: Object,
      required: false,
      default: void 0
    },
    modelValue: {
      type: [Object, null],
      required: false
    },
    hourCycle: {
      type: null,
      required: false
    },
    step: {
      type: Object,
      required: false
    },
    granularity: {
      type: String,
      required: false
    },
    hideTimeZone: {
      type: Boolean,
      required: false
    },
    maxValue: {
      type: Object,
      required: false
    },
    minValue: {
      type: Object,
      required: false
    },
    locale: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    id: {
      type: String,
      required: false
    },
    dir: {
      type: String,
      required: false
    },
    isTimeUnavailable: {
      type: Function,
      required: false,
      default: void 0
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false
    }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { disabled, readonly, granularity, defaultValue, minValue, maxValue, dir: propDir, locale: propLocale, isTimeUnavailable: propsIsTimeUnavailable } = toRefs(props);
    const locale = useLocale$1(propLocale);
    const dir = useDirection(propDir);
    const formatter = useDateFormatter(locale.value, { hourCycle: normalizeHourCycle(props.hourCycle) });
    const { primitiveElement, currentElement: parentElement } = usePrimitiveElement();
    const segmentElements = ref(/* @__PURE__ */ new Set());
    const step = computed(() => normalizeDateStep(props));
    const convertedMinValue = computed(() => minValue.value ? convertValue(minValue.value) : void 0);
    const convertedMaxValue = computed(() => maxValue.value ? convertValue(maxValue.value) : void 0);
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: defaultValue.value ?? {
        start: void 0,
        end: void 0
      },
      passive: props.modelValue === void 0
    });
    const isStartInvalid = computed(() => {
      if (!modelValue.value?.start) return false;
      const convertedStartValue$1 = convertValue(modelValue.value.start);
      if (propsIsTimeUnavailable.value?.(convertedStartValue$1)) return true;
      if (convertedMinValue.value && isBefore(convertedStartValue$1, convertedMinValue.value)) return true;
      if (convertedMaxValue.value && isBefore(convertedMaxValue.value, convertedStartValue$1)) return true;
      return false;
    });
    const isEndInvalid = computed(() => {
      if (!modelValue.value?.end) return false;
      const convertedEndValue$1 = convertValue(modelValue.value.end);
      if (propsIsTimeUnavailable.value?.(convertedEndValue$1)) return true;
      if (convertedMinValue.value && isBefore(convertedEndValue$1, convertedMinValue.value)) return true;
      if (convertedMaxValue.value && isBefore(convertedMaxValue.value, convertedEndValue$1)) return true;
      return false;
    });
    const isInvalid = computed(() => {
      if (isStartInvalid.value || isEndInvalid.value) return true;
      if (!modelValue.value?.start || !modelValue.value?.end) return false;
      const convertedModelValue$1 = {
        start: convertValue(modelValue.value.start),
        end: convertValue(modelValue.value.end)
      };
      if (!isBeforeOrSame(convertedModelValue$1.start, convertedModelValue$1.end)) return true;
      if (propsIsTimeUnavailable.value !== void 0) {
        const allValid = areAllDaysBetweenValid(convertedModelValue$1.start, convertedModelValue$1.end, propsIsTimeUnavailable.value, void 0);
        if (!allValid) return true;
      }
      return false;
    });
    const startValue = ref(modelValue.value?.start?.copy());
    const endValue = ref(modelValue.value?.end?.copy());
    watch([startValue, endValue], ([_startValue, _endValue]) => {
      modelValue.value = {
        start: _startValue?.copy(),
        end: _endValue?.copy()
      };
    });
    const convertedStartValue = computed({
      get() {
        if (isNullish(startValue.value)) return startValue.value;
        return convertValue(startValue.value);
      },
      set(newValue) {
        if (newValue) startValue.value = startValue.value && "day" in startValue.value ? newValue : new Time(newValue.hour, newValue.minute, newValue.second, startValue.value?.millisecond);
        else startValue.value = newValue;
        return newValue;
      }
    });
    const convertedEndValue = computed({
      get() {
        if (isNullish(endValue.value)) return endValue.value;
        return convertValue(endValue.value);
      },
      set(newValue) {
        if (newValue) endValue.value = endValue.value && "day" in endValue.value ? newValue : new Time(newValue.hour, newValue.minute, newValue.second, endValue.value?.millisecond);
        else endValue.value = newValue;
        return newValue;
      }
    });
    const convertedModelValue = computed(() => ({
      start: convertedStartValue.value,
      end: convertedEndValue.value
    }));
    const defaultDate = getDefaultTime({
      defaultPlaceholder: props.placeholder,
      defaultValue: modelValue.value?.start
    });
    const placeholder = useVModel(props, "placeholder", emits, {
      defaultValue: props.defaultPlaceholder ?? defaultDate.copy(),
      passive: props.placeholder === void 0
    });
    const convertedPlaceholder = computed({
      get() {
        return convertValue(placeholder.value);
      },
      set(newValue) {
        if (newValue) placeholder.value = "day" in placeholder.value ? newValue.copy() : new Time(newValue.hour, newValue.minute, newValue.second, placeholder.value?.millisecond);
        return newValue;
      }
    });
    const inferredGranularity = computed(() => {
      if (granularity.value) return granularity.value;
      return "minute";
    });
    const initialSegments = initializeTimeSegmentValues(inferredGranularity.value);
    const startSegmentValues = ref(convertedStartValue.value ? { ...syncTimeSegmentValues({
      value: convertedStartValue.value,
      formatter
    }) } : { ...initialSegments });
    const endSegmentValues = ref(convertedEndValue.value ? { ...syncTimeSegmentValues({
      value: convertedEndValue.value,
      formatter
    }) } : { ...initialSegments });
    const startSegmentContent = computed(() => createContent({
      granularity: inferredGranularity.value,
      dateRef: convertedPlaceholder.value,
      formatter,
      hideTimeZone: props.hideTimeZone,
      hourCycle: props.hourCycle,
      segmentValues: startSegmentValues.value,
      locale,
      isTimeValue: true
    }));
    const endSegmentContent = computed(() => createContent({
      granularity: inferredGranularity.value,
      dateRef: convertedPlaceholder.value,
      formatter,
      hideTimeZone: props.hideTimeZone,
      hourCycle: props.hourCycle,
      segmentValues: endSegmentValues.value,
      locale,
      isTimeValue: true
    }));
    const segmentContents = computed(() => ({
      start: startSegmentContent.value.arr,
      end: endSegmentContent.value.arr
    }));
    const editableSegmentContents = computed(() => ({
      start: segmentContents.value.start.filter(({ part }) => part !== "literal"),
      end: segmentContents.value.end.filter(({ part }) => part !== "literal")
    }));
    watch(convertedModelValue, (_modelValue) => {
      const isStartChanged = _modelValue?.start && convertedStartValue.value ? _modelValue.start.compare(convertedStartValue.value) !== 0 : _modelValue?.start !== convertedStartValue.value;
      if (isStartChanged) convertedStartValue.value = _modelValue?.start?.copy();
      const isEndChanged = _modelValue?.end && convertedEndValue.value ? _modelValue.end.compare(convertedEndValue.value) !== 0 : _modelValue?.end !== convertedEndValue.value;
      if (isEndChanged) convertedEndValue.value = _modelValue?.end?.copy();
    });
    watch([convertedStartValue, locale], ([_startValue]) => {
      if (_startValue !== void 0) startSegmentValues.value = { ...syncSegmentValues({
        value: _startValue,
        formatter
      }) };
      else if (Object.values(startSegmentValues.value).every((value) => value !== null) && _startValue === void 0) startSegmentValues.value = { ...initialSegments };
    });
    watch(locale, (value) => {
      if (formatter.getLocale() !== value) {
        formatter.setLocale(value);
        nextTick(() => {
          segmentElements.value.clear();
          getTimeFieldSegmentElements(parentElement.value).forEach((item) => segmentElements.value.add(item));
        });
      }
    });
    watch(convertedModelValue, (_modelValue) => {
      if (_modelValue && _modelValue.start !== void 0 && placeholder.value.compare(_modelValue.start) !== 0) placeholder.value = _modelValue.start.copy();
    });
    watch([convertedEndValue, locale], ([_endValue]) => {
      if (_endValue !== void 0) endSegmentValues.value = { ...syncSegmentValues({
        value: _endValue,
        formatter
      }) };
      else if (Object.values(endSegmentValues.value).every((value) => value !== null) && _endValue === void 0) endSegmentValues.value = { ...initialSegments };
    });
    const currentFocusedElement = ref(null);
    const currentSegmentIndex = computed(() => Array.from(segmentElements.value).findIndex((el) => el.getAttribute("data-reka-time-field-segment") === currentFocusedElement.value?.getAttribute("data-reka-time-field-segment") && el.getAttribute("data-reka-time-range-field-segment-type") === currentFocusedElement.value?.getAttribute("data-reka-time-range-field-segment-type")));
    const nextFocusableSegment = computed(() => {
      const sign = dir.value === "rtl" ? -1 : 1;
      const nextCondition = sign < 0 ? currentSegmentIndex.value < 0 : currentSegmentIndex.value > segmentElements.value.size - 1;
      if (nextCondition) return null;
      const segmentToFocus = Array.from(segmentElements.value)[currentSegmentIndex.value + sign];
      return segmentToFocus;
    });
    const prevFocusableSegment = computed(() => {
      const sign = dir.value === "rtl" ? -1 : 1;
      const prevCondition = sign > 0 ? currentSegmentIndex.value < 0 : currentSegmentIndex.value > segmentElements.value.size - 1;
      if (prevCondition) return null;
      const segmentToFocus = Array.from(segmentElements.value)[currentSegmentIndex.value - sign];
      return segmentToFocus;
    });
    const kbd = useKbd();
    function handleKeydown(e) {
      if (e.isComposing) return;
      if (!isSegmentNavigationKey(e.key)) return;
      if (e.key === kbd.ARROW_LEFT) prevFocusableSegment.value?.focus();
      if (e.key === kbd.ARROW_RIGHT) nextFocusableSegment.value?.focus();
    }
    function setFocusedElement(el) {
      currentFocusedElement.value = el;
    }
    provideTimeRangeFieldRootContext({
      locale,
      startValue: convertedStartValue,
      endValue: convertedEndValue,
      placeholder: convertedPlaceholder,
      disabled,
      formatter,
      hourCycle: props.hourCycle,
      step,
      readonly,
      isInvalid,
      segmentValues: {
        start: startSegmentValues,
        end: endSegmentValues
      },
      segmentContents: editableSegmentContents,
      elements: segmentElements,
      setFocusedElement,
      focusNext() {
        nextFocusableSegment.value?.focus();
      }
    });
    __expose({ setFocusedElement });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(_ctx.$attrs, {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        role: "group",
        "aria-disabled": unref(disabled) ? true : void 0,
        "data-disabled": unref(disabled) ? "" : void 0,
        "data-readonly": unref(readonly) ? "" : void 0,
        "data-invalid": isInvalid.value ? "" : void 0,
        dir: unref(dir),
        onKeydown: withKeys(handleKeydown, ["left", "right"])
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          modelValue: unref(modelValue),
          segments: segmentContents.value,
          isInvalid: isInvalid.value
        }), createVNode(unref(VisuallyHidden_default), {
          id: _ctx.id,
          as: "input",
          feature: "focusable",
          tabindex: "-1",
          value: `${unref(modelValue)?.start?.toString()} - ${unref(modelValue)?.end?.toString()}`,
          name: _ctx.name,
          disabled: unref(disabled),
          required: _ctx.required,
          onFocus: _cache[0] || (_cache[0] = ($event) => Array.from(segmentElements.value)?.[0]?.focus())
        }, null, 8, [
          "id",
          "value",
          "name",
          "disabled",
          "required"
        ])]),
        _: 3
      }, 16, [
        "aria-disabled",
        "data-disabled",
        "data-readonly",
        "data-invalid",
        "dir"
      ]);
    };
  }
});
var TimeRangeFieldRoot_default = TimeRangeFieldRoot_vue_vue_type_script_setup_true_lang_default;
var TimeRangeFieldInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "TimeRangeFieldInput",
  props: {
    part: {
      type: null,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectTimeRangeFieldRootContext();
    const hasLeftFocus = ref(true);
    const lastKeyZero = ref(false);
    const { handleSegmentClick, handleSegmentKeydown, handleSegmentBeforeInput, handleSegmentCompositionStart, handleSegmentCompositionEnd, attributes } = useDateField({
      hasLeftFocus,
      lastKeyZero,
      placeholder: rootContext.placeholder,
      hourCycle: rootContext.hourCycle,
      step: rootContext.step,
      segmentValues: rootContext.segmentValues[props.type],
      formatter: rootContext.formatter,
      part: props.part,
      disabled: rootContext.disabled,
      readonly: rootContext.readonly,
      focusNext: rootContext.focusNext,
      modelValue: props.type === "start" ? rootContext.startValue : rootContext.endValue
    });
    const disabled = computed(() => rootContext.disabled.value);
    const readonly = computed(() => rootContext.readonly.value);
    const isInvalid = computed(() => rootContext.isInvalid.value);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild
      }, unref(attributes), {
        contenteditable: disabled.value || readonly.value ? false : _ctx.part !== "literal",
        "data-reka-time-field-segment": _ctx.part,
        "data-reka-time-range-field-segment-type": _ctx.type,
        "aria-disabled": disabled.value ? true : void 0,
        "aria-readonly": readonly.value ? true : void 0,
        "data-disabled": disabled.value ? "" : void 0,
        "data-invalid": isInvalid.value ? "" : void 0,
        "aria-invalid": isInvalid.value ? true : void 0
      }, toHandlers(_ctx.part !== "literal" ? {
        mousedown: unref(handleSegmentClick),
        keydown: unref(handleSegmentKeydown),
        beforeinput: unref(handleSegmentBeforeInput),
        compositionstart: unref(handleSegmentCompositionStart),
        compositionend: unref(handleSegmentCompositionEnd),
        focusout: () => {
          hasLeftFocus.value = true;
        },
        focusin: (e) => {
          unref(rootContext).setFocusedElement(e.target);
        }
      } : {})), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "contenteditable",
        "data-reka-time-field-segment",
        "data-reka-time-range-field-segment-type",
        "aria-disabled",
        "aria-readonly",
        "data-disabled",
        "data-invalid",
        "aria-invalid"
      ]);
    };
  }
});
var TimeRangeFieldInput_default = TimeRangeFieldInput_vue_vue_type_script_setup_true_lang_default;
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
const theme$3 = {
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
    "trailing": "group absolute inset-y-0 end-0 flex items-center disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none",
    "trailingIcon": "shrink-0 text-dimmed",
    "trailingClear": "p-0",
    "arrow": "fill-bg stroke-default",
    "content": "max-h-[min(15rem,var(--reka-combobox-content-available-height,15rem))] w-(--reka-combobox-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-combobox-content-transform-origin) pointer-events-auto flex flex-col",
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
        "base": "px-2 py-1 text-sm/4 gap-1",
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
        "empty": "p-2 text-xs"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-sm/4 gap-1.5",
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
        "empty": "p-2.5 text-xs"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-base/5 gap-1.5",
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
        "empty": "p-2.5 text-sm"
      },
      "lg": {
        "base": "px-3 py-2 text-base/5 gap-2",
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
        "empty": "p-3 text-sm"
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
        "empty": "p-3 text-base"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent focus:outline-none"
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
    "fixed": {
      "false": ""
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
        "base": "w-full border-0 placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75"
      }
    }
  },
  "compoundVariants": [
    {
      "variant": "soft",
      "multiple": true,
      "class": "has-focus:bg-elevated has-focus-visible:outline-3"
    },
    {
      "variant": "ghost",
      "multiple": true,
      "class": "has-focus:bg-elevated has-focus-visible:outline-3"
    },
    {
      "color": "primary",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:outline-3 has-focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:outline-3 has-focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:outline-3 has-focus-visible:ring-success"
    },
    {
      "color": "info",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:outline-3 has-focus-visible:ring-info"
    },
    {
      "color": "warning",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:outline-3 has-focus-visible:ring-warning"
    },
    {
      "color": "error",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:outline-3 has-focus-visible:ring-error"
    },
    {
      "color": "neutral",
      "multiple": true,
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "has-focus-visible:outline-3 has-focus-visible:ring-inverted"
    },
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
    },
    {
      "color": "primary",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-primary/25 focus-visible:outline-3"
    },
    {
      "color": "secondary",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-secondary/25 focus-visible:outline-3"
    },
    {
      "color": "success",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-success/25 focus-visible:outline-3"
    },
    {
      "color": "info",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-info/25 focus-visible:outline-3"
    },
    {
      "color": "warning",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-warning/25 focus-visible:outline-3"
    },
    {
      "color": "error",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-error/25 focus-visible:outline-3"
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
      "class": "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-inverted/25 focus-visible:outline-3"
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
    },
    {
      "fixed": false,
      "size": "xs",
      "class": "md:text-xs"
    },
    {
      "fixed": false,
      "size": "sm",
      "class": "md:text-xs"
    },
    {
      "fixed": false,
      "size": "md",
      "class": "md:text-sm"
    },
    {
      "fixed": false,
      "size": "lg",
      "class": "md:text-sm"
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
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
    modelModifiers: { type: null, required: false },
    multiple: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    fixed: { type: Boolean, required: false },
    mode: { type: String, required: false, default: "combobox" },
    createItem: { type: [Boolean, String, Object], required: false },
    filterFields: { type: Array, required: false },
    ignoreFilter: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
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
  emits: /* @__PURE__ */ mergeModels(["change", "blur", "focus", "create", "clear", "highlight", "remove-tag", "update:modelValue", "update:open"], ["update:searchTerm"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("inputMenu", _props);
    const searchTerm = useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const { filterGroups } = useFilter();
    const isAutocomplete = computed(() => props.mode === "autocomplete");
    const rootPropsPick = reactivePick(props, "as", "modelValue", "defaultValue", "open", "defaultOpen", "required", "multiple", "resetSearchTermOnBlur", "resetSearchTermOnSelect", "resetModelValueOnClear", "highlightOnHover", "openOnClick", "openOnFocus", "by");
    const rootPropsOmitted = reactiveOmit(rootPropsPick, "multiple", "resetSearchTermOnSelect", "resetModelValueOnClear", "by");
    const rootProps = useForwardProps(computed(() => isAutocomplete.value ? rootPropsOmitted : rootPropsPick), emits);
    const Component = computed(() => isAutocomplete.value ? Autocomplete : Combobox);
    const attrs = useAttrs();
    const baseDataSlot = computed(() => props.multiple && !isAutocomplete.value ? attrs["data-slot"] ?? "base" : "base");
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" }));
    const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
    const clearProps = computed(() => typeof props.clear === "object" ? props.clear : {});
    const virtualizerProps = toRef(() => {
      if (!props.virtualize) return false;
      return defu(typeof props.virtualize === "boolean" ? {} : props.virtualize, {
        estimateSize: getEstimateSize(filteredItems.value, inputSize.value || "md", props.descriptionKey, !!slots["item-description"])
      });
    });
    const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, size: formFieldSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(_props);
    const { orientation, size: fieldGroupSize } = useFieldGroup(_props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(toRef(() => defu(props, { trailingIcon: appConfig.ui.icons.chevronDown })));
    const inputSize = computed(() => fieldGroupSize.value || formFieldSize.value);
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
    const ui = computed(() => tv({ extend: theme$3, ...appConfig.ui?.inputMenu || {} })({
      color: color.value ?? props.color,
      variant: props.variant,
      size: inputSize?.value ?? props.size,
      loading: props.loading,
      highlight: highlight.value ?? props.highlight,
      fixed: props.fixed,
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
      return filterGroups(groups.value, searchTerm.value, {
        fields,
        isStructural: (item) => isInputItem(item) && !!item.type && ["label", "separator"].includes(item.type)
      });
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
    watch(() => props.modelValue, (newValue) => {
      if (isAutocomplete.value) {
        searchTerm.value = String(newValue ?? "");
      }
    });
    function onUpdate(value) {
      if (toRaw(props.modelValue) === value) {
        return;
      }
      if (props.modelModifiers?.trim && (typeof value === "string" || value === null || value === void 0)) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number) {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullable) {
        value ??= null;
      }
      if (props.modelModifiers?.optional && !props.modelModifiers?.nullable && value !== null) {
        value ??= void 0;
      }
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
      if (isAutocomplete.value) {
        searchTerm.value = String(value ?? "");
      } else if (props.resetSearchTermOnSelect) {
        searchTerm.value = "";
      }
    }
    function onInputUpdate(value) {
      if (!isAutocomplete.value) {
        searchTerm.value = value;
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
    const isOpen = ref(false);
    function onUpdateOpen(value) {
      isOpen.value = value;
      let timeoutId;
      if (!value) {
        const event = new FocusEvent("blur");
        emits("blur", event);
        emitFormBlur();
        if (!isAutocomplete.value && props.resetSearchTermOnBlur) {
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
    const comboboxRootRef = useTemplateRef("comboboxRootRef");
    watch(() => props.items, async () => {
      if (!isOpen.value || !props.createItem) {
        return;
      }
      await nextTick();
      comboboxRootRef.value?.highlightFirstItem?.();
    }, { flush: "post" });
    __expose({
      inputRef: toRef(() => inputRef.value?.$el),
      viewportRef: toRef(() => viewportRef.value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineCreateItemTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Component).Item, {
              "data-slot": "item",
              class: ui.value.item({ class: unref(props).ui?.item }),
              value: searchTerm.value,
              onSelect: onCreate
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-slot="itemLabel" class="${ssrRenderClass(ui.value.itemLabel({ class: unref(props).ui?.itemLabel }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => {
                    _push3(`${ssrInterpolate(unref(t)("inputMenu.create", { label: searchTerm.value }))}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", {
                      "data-slot": "itemLabel",
                      class: ui.value.itemLabel({ class: unref(props).ui?.itemLabel })
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
              createVNode(unref(Component).Item, {
                "data-slot": "item",
                class: ui.value.item({ class: unref(props).ui?.item }),
                value: searchTerm.value,
                onSelect: onCreate
              }, {
                default: withCtx(() => [
                  createVNode("span", {
                    "data-slot": "itemLabel",
                    class: ui.value.itemLabel({ class: unref(props).ui?.itemLabel })
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
              _push2(ssrRenderComponent(unref(Component).Label, {
                "data-slot": "label",
                class: ui.value.label({ class: [unref(props).ui?.label, item.ui?.label, item.class] })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(get)(item, unref(props).labelKey))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else if (isInputItem(item) && item.type === "separator") {
              _push2(ssrRenderComponent(unref(Component).Separator, {
                "data-slot": "separator",
                class: ui.value.separator({ class: [unref(props).ui?.separator, item.ui?.separator, item.class] })
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(Component).Item, {
                "data-slot": "item",
                class: ui.value.item({ class: [unref(props).ui?.item, isInputItem(item) && item.ui?.item, isInputItem(item) && item.class] }),
                disabled: isInputItem(item) && item.disabled,
                value: unref(props).valueKey && isInputItem(item) ? unref(get)(item, unref(props).valueKey) : item,
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
                          _push3(ssrRenderComponent(_sfc_main$5$1, {
                            name: item.icon,
                            "data-slot": "itemLeadingIcon",
                            class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                          }, null, _parent3, _scopeId2));
                        } else if (isInputItem(item) && item.avatar) {
                          _push3(ssrRenderComponent(_sfc_main$3$1, mergeProps({
                            size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                          }, item.avatar, {
                            "data-slot": "itemLeadingAvatar",
                            class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                          }), null, _parent3, _scopeId2));
                        } else if (isInputItem(item) && item.chip) {
                          _push3(ssrRenderComponent(_sfc_main$4$1, mergeProps({
                            size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                            inset: "",
                            standalone: ""
                          }, item.chip, {
                            "data-slot": "itemLeadingChip",
                            class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                          }), null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                      _push3(`<span data-slot="itemWrapper" class="${ssrRenderClass(ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isInputItem(item) && item.ui?.itemWrapper] }))}"${_scopeId2}><span data-slot="itemLabel" class="${ssrRenderClass(ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isInputItem(item) && item.ui?.itemLabel] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "item-label", {
                        item,
                        index
                      }, () => {
                        _push3(`${ssrInterpolate(isInputItem(item) ? unref(get)(item, unref(props).labelKey) : item)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</span>`);
                      if (isInputItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"])) {
                        _push3(`<span data-slot="itemDescription" class="${ssrRenderClass(ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isInputItem(item) && item.ui?.itemDescription] }))}"${_scopeId2}>`);
                        ssrRenderSlot(_ctx.$slots, "item-description", {
                          item,
                          index
                        }, () => {
                          _push3(`${ssrInterpolate(unref(get)(item, unref(props).descriptionKey))}`);
                        }, _push3, _parent3, _scopeId2);
                        _push3(`</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</span><span data-slot="itemTrailing" class="${ssrRenderClass(ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isInputItem(item) && item.ui?.itemTrailing] }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "item-trailing", {
                        item,
                        index,
                        ui: ui.value
                      }, null, _push3, _parent3, _scopeId2);
                      if (!isAutocomplete.value) {
                        _push3(ssrRenderComponent(unref(Component).ItemIndicator, { "as-child": "" }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_sfc_main$5$1, {
                                name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
                                "data-slot": "itemTrailingIcon",
                                class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isInputItem(item) && item.ui?.itemTrailingIcon] })
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_sfc_main$5$1, {
                                  name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
                                  "data-slot": "itemTrailingIcon",
                                  class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isInputItem(item) && item.ui?.itemTrailingIcon] })
                                }, null, 8, ["name", "class"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
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
                          isInputItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                            key: 0,
                            name: item.icon,
                            "data-slot": "itemLeadingIcon",
                            class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                          }, null, 8, ["name", "class"])) : isInputItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
                            key: 1,
                            size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                          }, item.avatar, {
                            "data-slot": "itemLeadingAvatar",
                            class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                          }), null, 16, ["size", "class"])) : isInputItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
                            key: 2,
                            size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                            inset: "",
                            standalone: ""
                          }, item.chip, {
                            "data-slot": "itemLeadingChip",
                            class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ]),
                        createVNode("span", {
                          "data-slot": "itemWrapper",
                          class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isInputItem(item) && item.ui?.itemWrapper] })
                        }, [
                          createVNode("span", {
                            "data-slot": "itemLabel",
                            class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isInputItem(item) && item.ui?.itemLabel] })
                          }, [
                            renderSlot(_ctx.$slots, "item-label", {
                              item,
                              index
                            }, () => [
                              createTextVNode(toDisplayString(isInputItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)
                            ])
                          ], 2),
                          isInputItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
                            key: 0,
                            "data-slot": "itemDescription",
                            class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isInputItem(item) && item.ui?.itemDescription] })
                          }, [
                            renderSlot(_ctx.$slots, "item-description", {
                              item,
                              index
                            }, () => [
                              createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)
                            ])
                          ], 2)) : createCommentVNode("", true)
                        ], 2),
                        createVNode("span", {
                          "data-slot": "itemTrailing",
                          class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isInputItem(item) && item.ui?.itemTrailing] })
                        }, [
                          renderSlot(_ctx.$slots, "item-trailing", {
                            item,
                            index,
                            ui: ui.value
                          }),
                          !isAutocomplete.value ? (openBlock(), createBlock(unref(Component).ItemIndicator, {
                            key: 0,
                            "as-child": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5$1, {
                                name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
                                "data-slot": "itemTrailingIcon",
                                class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isInputItem(item) && item.ui?.itemTrailingIcon] })
                              }, null, 8, ["name", "class"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
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
              isInputItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(Component).Label, {
                key: 0,
                "data-slot": "label",
                class: ui.value.label({ class: [unref(props).ui?.label, item.ui?.label, item.class] })
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : isInputItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(Component).Separator, {
                key: 1,
                "data-slot": "separator",
                class: ui.value.separator({ class: [unref(props).ui?.separator, item.ui?.separator, item.class] })
              }, null, 8, ["class"])) : (openBlock(), createBlock(unref(Component).Item, {
                key: 2,
                "data-slot": "item",
                class: ui.value.item({ class: [unref(props).ui?.item, isInputItem(item) && item.ui?.item, isInputItem(item) && item.class] }),
                disabled: isInputItem(item) && item.disabled,
                value: unref(props).valueKey && isInputItem(item) ? unref(get)(item, unref(props).valueKey) : item,
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
                      isInputItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                        key: 0,
                        name: item.icon,
                        "data-slot": "itemLeadingIcon",
                        class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                      }, null, 8, ["name", "class"])) : isInputItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
                        key: 1,
                        size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                      }, item.avatar, {
                        "data-slot": "itemLeadingAvatar",
                        class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                      }), null, 16, ["size", "class"])) : isInputItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
                        key: 2,
                        size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                        inset: "",
                        standalone: ""
                      }, item.chip, {
                        "data-slot": "itemLeadingChip",
                        class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ]),
                    createVNode("span", {
                      "data-slot": "itemWrapper",
                      class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isInputItem(item) && item.ui?.itemWrapper] })
                    }, [
                      createVNode("span", {
                        "data-slot": "itemLabel",
                        class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isInputItem(item) && item.ui?.itemLabel] })
                      }, [
                        renderSlot(_ctx.$slots, "item-label", {
                          item,
                          index
                        }, () => [
                          createTextVNode(toDisplayString(isInputItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)
                        ])
                      ], 2),
                      isInputItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
                        key: 0,
                        "data-slot": "itemDescription",
                        class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isInputItem(item) && item.ui?.itemDescription] })
                      }, [
                        renderSlot(_ctx.$slots, "item-description", {
                          item,
                          index
                        }, () => [
                          createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ], 2),
                    createVNode("span", {
                      "data-slot": "itemTrailing",
                      class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isInputItem(item) && item.ui?.itemTrailing] })
                    }, [
                      renderSlot(_ctx.$slots, "item-trailing", {
                        item,
                        index,
                        ui: ui.value
                      }),
                      !isAutocomplete.value ? (openBlock(), createBlock(unref(Component).ItemIndicator, {
                        key: 0,
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5$1, {
                            name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
                            "data-slot": "itemTrailingIcon",
                            class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isInputItem(item) && item.ui?.itemTrailingIcon] })
                          }, null, 8, ["name", "class"])
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)
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
      _push(ssrRenderComponent(unref(Component).Root, mergeProps({
        ref_key: "comboboxRootRef",
        ref: comboboxRootRef
      }, unref(rootProps), {
        name: unref(name),
        disabled: unref(disabled),
        "data-slot": _ctx.$attrs["data-slot"] ?? "root",
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] }),
        "as-child": !!unref(props).multiple && !isAutocomplete.value,
        "ignore-filter": "",
        "onUpdate:modelValue": onUpdate,
        "onUpdate:open": onUpdateOpen
      }), {
        default: withCtx(({ modelValue, open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Component).Anchor, {
              "as-child": !unref(props).multiple,
              "data-slot": baseDataSlot.value,
              class: ui.value.base({ class: unref(props).ui?.base })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(props).multiple && !isAutocomplete.value) {
                    _push3(ssrRenderComponent(unref(TagsInputRoot_default), {
                      "model-value": modelValue,
                      disabled: unref(disabled),
                      required: unref(props).required,
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
                            _push4(ssrRenderComponent(unref(TagsInputItem_default), {
                              key: index,
                              value: item,
                              "data-slot": "tagsItem",
                              class: ui.value.tagsItem({ class: [unref(props).ui?.tagsItem, isInputItem(item) && item.ui?.tagsItem] })
                            }, {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(TagsInputItemText_default), {
                                    "data-slot": "tagsItemText",
                                    class: ui.value.tagsItemText({ class: [unref(props).ui?.tagsItemText, isInputItem(item) && item.ui?.tagsItemText] })
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
                                  _push5(ssrRenderComponent(unref(TagsInputItemDelete_default), {
                                    "data-slot": "tagsItemDelete",
                                    class: ui.value.tagsItemDelete({ class: [unref(props).ui?.tagsItemDelete, isInputItem(item) && item.ui?.tagsItemDelete] }),
                                    disabled: unref(disabled)
                                  }, {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "tags-item-delete", {
                                          item,
                                          index,
                                          ui: ui.value
                                        }, () => {
                                          _push6(ssrRenderComponent(_sfc_main$5$1, {
                                            name: unref(props).deleteIcon || unref(appConfig).ui.icons.close,
                                            "data-slot": "tagsItemDeleteIcon",
                                            class: ui.value.tagsItemDeleteIcon({ class: [unref(props).ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
                                          }, null, _parent6, _scopeId5));
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "tags-item-delete", {
                                            item,
                                            index,
                                            ui: ui.value
                                          }, () => [
                                            createVNode(_sfc_main$5$1, {
                                              name: unref(props).deleteIcon || unref(appConfig).ui.icons.close,
                                              "data-slot": "tagsItemDeleteIcon",
                                              class: ui.value.tagsItemDeleteIcon({ class: [unref(props).ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
                                            }, null, 8, ["name", "class"])
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(TagsInputItemText_default), {
                                      "data-slot": "tagsItemText",
                                      class: ui.value.tagsItemText({ class: [unref(props).ui?.tagsItemText, isInputItem(item) && item.ui?.tagsItemText] })
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
                                    createVNode(unref(TagsInputItemDelete_default), {
                                      "data-slot": "tagsItemDelete",
                                      class: ui.value.tagsItemDelete({ class: [unref(props).ui?.tagsItemDelete, isInputItem(item) && item.ui?.tagsItemDelete] }),
                                      disabled: unref(disabled)
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "tags-item-delete", {
                                          item,
                                          index,
                                          ui: ui.value
                                        }, () => [
                                          createVNode(_sfc_main$5$1, {
                                            name: unref(props).deleteIcon || unref(appConfig).ui.icons.close,
                                            "data-slot": "tagsItemDeleteIcon",
                                            class: ui.value.tagsItemDeleteIcon({ class: [unref(props).ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
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
                          _push4(ssrRenderComponent(unref(Component).Input, {
                            modelValue: searchTerm.value,
                            "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                            "as-child": ""
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(TagsInputInput_default), mergeProps({
                                  id: unref(id),
                                  ref_key: "inputRef",
                                  ref: inputRef
                                }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                                  placeholder: unref(props).placeholder,
                                  "data-slot": "tagsInput",
                                  class: ui.value.tagsInput({ class: unref(props).ui?.tagsInput }),
                                  onChange: () => {
                                  }
                                }), null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(TagsInputInput_default), mergeProps({
                                    id: unref(id),
                                    ref_key: "inputRef",
                                    ref: inputRef
                                  }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                                    placeholder: unref(props).placeholder,
                                    "data-slot": "tagsInput",
                                    class: ui.value.tagsInput({ class: unref(props).ui?.tagsInput }),
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
                              return openBlock(), createBlock(unref(TagsInputItem_default), {
                                key: index,
                                value: item,
                                "data-slot": "tagsItem",
                                class: ui.value.tagsItem({ class: [unref(props).ui?.tagsItem, isInputItem(item) && item.ui?.tagsItem] })
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(TagsInputItemText_default), {
                                    "data-slot": "tagsItemText",
                                    class: ui.value.tagsItemText({ class: [unref(props).ui?.tagsItemText, isInputItem(item) && item.ui?.tagsItemText] })
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
                                  createVNode(unref(TagsInputItemDelete_default), {
                                    "data-slot": "tagsItemDelete",
                                    class: ui.value.tagsItemDelete({ class: [unref(props).ui?.tagsItemDelete, isInputItem(item) && item.ui?.tagsItemDelete] }),
                                    disabled: unref(disabled)
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "tags-item-delete", {
                                        item,
                                        index,
                                        ui: ui.value
                                      }, () => [
                                        createVNode(_sfc_main$5$1, {
                                          name: unref(props).deleteIcon || unref(appConfig).ui.icons.close,
                                          "data-slot": "tagsItemDeleteIcon",
                                          class: ui.value.tagsItemDeleteIcon({ class: [unref(props).ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
                                        }, null, 8, ["name", "class"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "disabled"])
                                ]),
                                _: 2
                              }, 1032, ["value", "class"]);
                            }), 128)),
                            createVNode(unref(Component).Input, {
                              modelValue: searchTerm.value,
                              "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(TagsInputInput_default), mergeProps({
                                  id: unref(id),
                                  ref_key: "inputRef",
                                  ref: inputRef
                                }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                                  placeholder: unref(props).placeholder,
                                  "data-slot": "tagsInput",
                                  class: ui.value.tagsInput({ class: unref(props).ui?.tagsInput }),
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
                    _push3(ssrRenderComponent(unref(Component).Input, mergeProps({
                      id: unref(id),
                      ref_key: "inputRef",
                      ref: inputRef
                    }, { ...!isAutocomplete.value ? { displayValue } : {}, ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                      "data-slot": unref(props).multiple ? void 0 : "base",
                      type: unref(props).type,
                      placeholder: unref(props).placeholder,
                      required: unref(props).required,
                      onBlur,
                      onFocus,
                      onChange: () => {
                      },
                      "onUpdate:modelValue": onInputUpdate
                    }), null, _parent3, _scopeId2));
                  }
                  if (unref(isLeading) || !!unref(props).avatar || !!slots.leading) {
                    _push3(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "leading", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => {
                      if (unref(isLeading) && unref(leadingIconName)) {
                        _push3(ssrRenderComponent(_sfc_main$5$1, {
                          name: unref(leadingIconName),
                          "data-slot": "leadingIcon",
                          class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
                        }, null, _parent3, _scopeId2));
                      } else if (!!unref(props).avatar) {
                        _push3(ssrRenderComponent(_sfc_main$3$1, mergeProps({
                          size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                        }, unref(props).avatar, {
                          "data-slot": "itemLeadingAvatar",
                          class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
                        }), null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(isTrailing) || !!slots.trailing || !!unref(props).clear) {
                    _push3(ssrRenderComponent(unref(Component).Trigger, {
                      "data-slot": "trailing",
                      class: ui.value.trailing({ class: unref(props).ui?.trailing })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            if (!!unref(props).clear && !isModelValueEmpty(modelValue)) {
                              _push4(ssrRenderComponent(unref(Component).Cancel, { "as-child": "" }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_sfc_main$9, mergeProps({
                                      as: "span",
                                      icon: unref(props).clearIcon || unref(appConfig).ui.icons.close,
                                      size: inputSize.value,
                                      variant: "link",
                                      color: "neutral",
                                      tabindex: "-1"
                                    }, clearProps.value, {
                                      "data-slot": "trailingClear",
                                      class: ui.value.trailingClear({ class: unref(props).ui?.trailingClear }),
                                      onClick: onClear
                                    }), null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$9, mergeProps({
                                        as: "span",
                                        icon: unref(props).clearIcon || unref(appConfig).ui.icons.close,
                                        size: inputSize.value,
                                        variant: "link",
                                        color: "neutral",
                                        tabindex: "-1"
                                      }, clearProps.value, {
                                        "data-slot": "trailingClear",
                                        class: ui.value.trailingClear({ class: unref(props).ui?.trailingClear }),
                                        onClick: withModifiers(onClear, ["stop"])
                                      }), null, 16, ["icon", "size", "class"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else if (unref(trailingIconName)) {
                              _push4(ssrRenderComponent(_sfc_main$5$1, {
                                name: unref(trailingIconName),
                                "data-slot": "trailingIcon",
                                class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
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
                              !!unref(props).clear && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(Component).Cancel, {
                                key: 0,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$9, mergeProps({
                                    as: "span",
                                    icon: unref(props).clearIcon || unref(appConfig).ui.icons.close,
                                    size: inputSize.value,
                                    variant: "link",
                                    color: "neutral",
                                    tabindex: "-1"
                                  }, clearProps.value, {
                                    "data-slot": "trailingClear",
                                    class: ui.value.trailingClear({ class: unref(props).ui?.trailingClear }),
                                    onClick: withModifiers(onClear, ["stop"])
                                  }), null, 16, ["icon", "size", "class"])
                                ]),
                                _: 1
                              })) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
                                key: 1,
                                name: unref(trailingIconName),
                                "data-slot": "trailingIcon",
                                class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
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
                    unref(props).multiple && !isAutocomplete.value ? (openBlock(), createBlock(unref(TagsInputRoot_default), {
                      key: 0,
                      "model-value": modelValue,
                      disabled: unref(disabled),
                      required: unref(props).required,
                      delimiter: "",
                      "as-child": "",
                      onBlur,
                      onFocus,
                      onRemoveTag: ($event) => onRemoveTag($event, modelValue)
                    }, {
                      default: withCtx(({ modelValue: tags }) => [
                        (openBlock(true), createBlock(Fragment, null, renderList(tags, (item, index) => {
                          return openBlock(), createBlock(unref(TagsInputItem_default), {
                            key: index,
                            value: item,
                            "data-slot": "tagsItem",
                            class: ui.value.tagsItem({ class: [unref(props).ui?.tagsItem, isInputItem(item) && item.ui?.tagsItem] })
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(TagsInputItemText_default), {
                                "data-slot": "tagsItemText",
                                class: ui.value.tagsItemText({ class: [unref(props).ui?.tagsItemText, isInputItem(item) && item.ui?.tagsItemText] })
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
                              createVNode(unref(TagsInputItemDelete_default), {
                                "data-slot": "tagsItemDelete",
                                class: ui.value.tagsItemDelete({ class: [unref(props).ui?.tagsItemDelete, isInputItem(item) && item.ui?.tagsItemDelete] }),
                                disabled: unref(disabled)
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "tags-item-delete", {
                                    item,
                                    index,
                                    ui: ui.value
                                  }, () => [
                                    createVNode(_sfc_main$5$1, {
                                      name: unref(props).deleteIcon || unref(appConfig).ui.icons.close,
                                      "data-slot": "tagsItemDeleteIcon",
                                      class: ui.value.tagsItemDeleteIcon({ class: [unref(props).ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
                                    }, null, 8, ["name", "class"])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["class", "disabled"])
                            ]),
                            _: 2
                          }, 1032, ["value", "class"]);
                        }), 128)),
                        createVNode(unref(Component).Input, {
                          modelValue: searchTerm.value,
                          "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(TagsInputInput_default), mergeProps({
                              id: unref(id),
                              ref_key: "inputRef",
                              ref: inputRef
                            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                              placeholder: unref(props).placeholder,
                              "data-slot": "tagsInput",
                              class: ui.value.tagsInput({ class: unref(props).ui?.tagsInput }),
                              onChange: withModifiers(() => {
                              }, ["stop"])
                            }), null, 16, ["id", "placeholder", "class", "onChange"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 3
                    }, 8, ["model-value", "disabled", "required", "onRemoveTag"])) : (openBlock(), createBlock(unref(Component).Input, mergeProps({
                      key: 1,
                      id: unref(id),
                      ref_key: "inputRef",
                      ref: inputRef
                    }, { ...!isAutocomplete.value ? { displayValue } : {}, ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                      "data-slot": unref(props).multiple ? void 0 : "base",
                      type: unref(props).type,
                      placeholder: unref(props).placeholder,
                      required: unref(props).required,
                      onBlur,
                      onFocus,
                      onChange: withModifiers(() => {
                      }, ["stop"]),
                      "onUpdate:modelValue": onInputUpdate
                    }), null, 16, ["id", "data-slot", "type", "placeholder", "required", "onChange"])),
                    unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                      key: 2,
                      "data-slot": "leading",
                      class: ui.value.leading({ class: unref(props).ui?.leading })
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => [
                        unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
                          key: 0,
                          name: unref(leadingIconName),
                          "data-slot": "leadingIcon",
                          class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
                        }, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
                          key: 1,
                          size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                        }, unref(props).avatar, {
                          "data-slot": "itemLeadingAvatar",
                          class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    unref(isTrailing) || !!slots.trailing || !!unref(props).clear ? (openBlock(), createBlock(unref(Component).Trigger, {
                      key: 3,
                      "data-slot": "trailing",
                      class: ui.value.trailing({ class: unref(props).ui?.trailing })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "trailing", {
                          modelValue,
                          open,
                          ui: ui.value
                        }, () => [
                          !!unref(props).clear && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(Component).Cancel, {
                            key: 0,
                            "as-child": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, mergeProps({
                                as: "span",
                                icon: unref(props).clearIcon || unref(appConfig).ui.icons.close,
                                size: inputSize.value,
                                variant: "link",
                                color: "neutral",
                                tabindex: "-1"
                              }, clearProps.value, {
                                "data-slot": "trailingClear",
                                class: ui.value.trailingClear({ class: unref(props).ui?.trailingClear }),
                                onClick: withModifiers(onClear, ["stop"])
                              }), null, 16, ["icon", "size", "class"])
                            ]),
                            _: 1
                          })) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
                            key: 1,
                            name: unref(trailingIconName),
                            "data-slot": "trailingIcon",
                            class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
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
            _push2(ssrRenderComponent(unref(Component).Portal, unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(FieldGroupReset), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Component).Content, mergeProps({
                          "data-slot": "content",
                          class: ui.value.content({ class: unref(props).ui?.content })
                        }, contentProps.value, { onFocusOutside: () => {
                        } }), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push5, _parent5, _scopeId4);
                              _push5(ssrRenderComponent(unref(Component).Empty, {
                                "data-slot": "empty",
                                class: ui.value.empty({ class: unref(props).ui?.empty })
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                                      _push6(`${ssrInterpolate(searchTerm.value ? unref(t)("inputMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("inputMenu.noData"))}`);
                                    }, _push6, _parent6, _scopeId5);
                                  } else {
                                    return [
                                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("inputMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("inputMenu.noData")), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`<div role="presentation" data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: unref(props).ui?.viewport }))}"${_scopeId4}>`);
                              if (!!unref(props).virtualize) {
                                _push5(`<!--[-->`);
                                if (createItem.value && createItemPosition.value === "top") {
                                  _push5(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(ssrRenderComponent(unref(Component).Virtualizer, mergeProps({
                                  options: filteredItems.value,
                                  "text-content": (item2) => isInputItem(item2) ? unref(get)(item2, unref(props).labelKey) : String(item2)
                                }, virtualizerProps.value), {
                                  default: withCtx(({ option: item, virtualItem }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(ReuseItemTemplate), {
                                        item,
                                        index: virtualItem.index
                                      }, null, _parent6, _scopeId5));
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
                                }, _parent5, _scopeId4));
                                if (createItem.value && createItemPosition.value === "bottom") {
                                  _push5(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!--[-->`);
                                if (createItem.value && createItemPosition.value === "top") {
                                  _push5(ssrRenderComponent(unref(Component).Group, {
                                    "data-slot": "group",
                                    class: ui.value.group({ class: unref(props).ui?.group })
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(ReuseCreateItemTemplate))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<!--[-->`);
                                ssrRenderList(filteredGroups.value, (group, groupIndex) => {
                                  _push5(ssrRenderComponent(unref(Component).Group, {
                                    key: `group-${groupIndex}`,
                                    "data-slot": "group",
                                    class: ui.value.group({ class: unref(props).ui?.group })
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<!--[-->`);
                                        ssrRenderList(group, (item, index) => {
                                          _push6(ssrRenderComponent(unref(ReuseItemTemplate), {
                                            key: `group-${groupIndex}-${index}`,
                                            item,
                                            index
                                          }, null, _parent6, _scopeId5));
                                        });
                                        _push6(`<!--]-->`);
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
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                                if (createItem.value && createItemPosition.value === "bottom") {
                                  _push5(ssrRenderComponent(unref(Component).Group, {
                                    "data-slot": "group",
                                    class: ui.value.group({ class: unref(props).ui?.group })
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(ReuseCreateItemTemplate))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<!--]-->`);
                              }
                              _push5(`</div>`);
                              ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push5, _parent5, _scopeId4);
                              if (!!unref(props).arrow) {
                                _push5(ssrRenderComponent(unref(Component).Arrow, mergeProps(arrowProps.value, {
                                  "data-slot": "arrow",
                                  class: ui.value.arrow({ class: unref(props).ui?.arrow })
                                }), null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "content-top"),
                                createVNode(unref(Component).Empty, {
                                  "data-slot": "empty",
                                  class: ui.value.empty({ class: unref(props).ui?.empty })
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
                                  class: ui.value.viewport({ class: unref(props).ui?.viewport })
                                }, [
                                  !!unref(props).virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                    createVNode(unref(Component).Virtualizer, mergeProps({
                                      options: filteredItems.value,
                                      "text-content": (item2) => isInputItem(item2) ? unref(get)(item2, unref(props).labelKey) : String(item2)
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
                                    createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(Component).Group, {
                                      key: 0,
                                      "data-slot": "group",
                                      class: ui.value.group({ class: unref(props).ui?.group })
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(ReuseCreateItemTemplate))
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                      return openBlock(), createBlock(unref(Component).Group, {
                                        key: `group-${groupIndex}`,
                                        "data-slot": "group",
                                        class: ui.value.group({ class: unref(props).ui?.group })
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
                                    createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(Component).Group, {
                                      key: 1,
                                      "data-slot": "group",
                                      class: ui.value.group({ class: unref(props).ui?.group })
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(ReuseCreateItemTemplate))
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 64))
                                ], 2),
                                renderSlot(_ctx.$slots, "content-bottom"),
                                !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                                  "data-slot": "arrow",
                                  class: ui.value.arrow({ class: unref(props).ui?.arrow })
                                }), null, 16, ["class"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Component).Content, mergeProps({
                            "data-slot": "content",
                            class: ui.value.content({ class: unref(props).ui?.content })
                          }, contentProps.value, {
                            onFocusOutside: withModifiers(() => {
                            }, ["prevent"])
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "content-top"),
                              createVNode(unref(Component).Empty, {
                                "data-slot": "empty",
                                class: ui.value.empty({ class: unref(props).ui?.empty })
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
                                class: ui.value.viewport({ class: unref(props).ui?.viewport })
                              }, [
                                !!unref(props).virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                  createVNode(unref(Component).Virtualizer, mergeProps({
                                    options: filteredItems.value,
                                    "text-content": (item2) => isInputItem(item2) ? unref(get)(item2, unref(props).labelKey) : String(item2)
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
                                  createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(Component).Group, {
                                    key: 0,
                                    "data-slot": "group",
                                    class: ui.value.group({ class: unref(props).ui?.group })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseCreateItemTemplate))
                                    ]),
                                    _: 1
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                    return openBlock(), createBlock(unref(Component).Group, {
                                      key: `group-${groupIndex}`,
                                      "data-slot": "group",
                                      class: ui.value.group({ class: unref(props).ui?.group })
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
                                  createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(Component).Group, {
                                    key: 1,
                                    "data-slot": "group",
                                    class: ui.value.group({ class: unref(props).ui?.group })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseCreateItemTemplate))
                                    ]),
                                    _: 1
                                  }, 8, ["class"])) : createCommentVNode("", true)
                                ], 64))
                              ], 2),
                              renderSlot(_ctx.$slots, "content-bottom"),
                              !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                                "data-slot": "arrow",
                                class: ui.value.arrow({ class: unref(props).ui?.arrow })
                              }), null, 16, ["class"])) : createCommentVNode("", true)
                            ]),
                            _: 3
                          }, 16, ["class", "onFocusOutside"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(FieldGroupReset), null, {
                      default: withCtx(() => [
                        createVNode(unref(Component).Content, mergeProps({
                          "data-slot": "content",
                          class: ui.value.content({ class: unref(props).ui?.content })
                        }, contentProps.value, {
                          onFocusOutside: withModifiers(() => {
                          }, ["prevent"])
                        }), {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "content-top"),
                            createVNode(unref(Component).Empty, {
                              "data-slot": "empty",
                              class: ui.value.empty({ class: unref(props).ui?.empty })
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
                              class: ui.value.viewport({ class: unref(props).ui?.viewport })
                            }, [
                              !!unref(props).virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                createVNode(unref(Component).Virtualizer, mergeProps({
                                  options: filteredItems.value,
                                  "text-content": (item2) => isInputItem(item2) ? unref(get)(item2, unref(props).labelKey) : String(item2)
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
                                createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(Component).Group, {
                                  key: 0,
                                  "data-slot": "group",
                                  class: ui.value.group({ class: unref(props).ui?.group })
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseCreateItemTemplate))
                                  ]),
                                  _: 1
                                }, 8, ["class"])) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                  return openBlock(), createBlock(unref(Component).Group, {
                                    key: `group-${groupIndex}`,
                                    "data-slot": "group",
                                    class: ui.value.group({ class: unref(props).ui?.group })
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
                                createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(Component).Group, {
                                  key: 1,
                                  "data-slot": "group",
                                  class: ui.value.group({ class: unref(props).ui?.group })
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseCreateItemTemplate))
                                  ]),
                                  _: 1
                                }, 8, ["class"])) : createCommentVNode("", true)
                              ], 64))
                            ], 2),
                            renderSlot(_ctx.$slots, "content-bottom"),
                            !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                              "data-slot": "arrow",
                              class: ui.value.arrow({ class: unref(props).ui?.arrow })
                            }), null, 16, ["class"])) : createCommentVNode("", true)
                          ]),
                          _: 3
                        }, 16, ["class", "onFocusOutside"])
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Component).Anchor, {
                "as-child": !unref(props).multiple,
                "data-slot": baseDataSlot.value,
                class: ui.value.base({ class: unref(props).ui?.base })
              }, {
                default: withCtx(() => [
                  unref(props).multiple && !isAutocomplete.value ? (openBlock(), createBlock(unref(TagsInputRoot_default), {
                    key: 0,
                    "model-value": modelValue,
                    disabled: unref(disabled),
                    required: unref(props).required,
                    delimiter: "",
                    "as-child": "",
                    onBlur,
                    onFocus,
                    onRemoveTag: ($event) => onRemoveTag($event, modelValue)
                  }, {
                    default: withCtx(({ modelValue: tags }) => [
                      (openBlock(true), createBlock(Fragment, null, renderList(tags, (item, index) => {
                        return openBlock(), createBlock(unref(TagsInputItem_default), {
                          key: index,
                          value: item,
                          "data-slot": "tagsItem",
                          class: ui.value.tagsItem({ class: [unref(props).ui?.tagsItem, isInputItem(item) && item.ui?.tagsItem] })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(TagsInputItemText_default), {
                              "data-slot": "tagsItemText",
                              class: ui.value.tagsItemText({ class: [unref(props).ui?.tagsItemText, isInputItem(item) && item.ui?.tagsItemText] })
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
                            createVNode(unref(TagsInputItemDelete_default), {
                              "data-slot": "tagsItemDelete",
                              class: ui.value.tagsItemDelete({ class: [unref(props).ui?.tagsItemDelete, isInputItem(item) && item.ui?.tagsItemDelete] }),
                              disabled: unref(disabled)
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "tags-item-delete", {
                                  item,
                                  index,
                                  ui: ui.value
                                }, () => [
                                  createVNode(_sfc_main$5$1, {
                                    name: unref(props).deleteIcon || unref(appConfig).ui.icons.close,
                                    "data-slot": "tagsItemDeleteIcon",
                                    class: ui.value.tagsItemDeleteIcon({ class: [unref(props).ui?.tagsItemDeleteIcon, isInputItem(item) && item.ui?.tagsItemDeleteIcon] })
                                  }, null, 8, ["name", "class"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class", "disabled"])
                          ]),
                          _: 2
                        }, 1032, ["value", "class"]);
                      }), 128)),
                      createVNode(unref(Component).Input, {
                        modelValue: searchTerm.value,
                        "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(TagsInputInput_default), mergeProps({
                            id: unref(id),
                            ref_key: "inputRef",
                            ref: inputRef
                          }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                            placeholder: unref(props).placeholder,
                            "data-slot": "tagsInput",
                            class: ui.value.tagsInput({ class: unref(props).ui?.tagsInput }),
                            onChange: withModifiers(() => {
                            }, ["stop"])
                          }), null, 16, ["id", "placeholder", "class", "onChange"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 3
                  }, 8, ["model-value", "disabled", "required", "onRemoveTag"])) : (openBlock(), createBlock(unref(Component).Input, mergeProps({
                    key: 1,
                    id: unref(id),
                    ref_key: "inputRef",
                    ref: inputRef
                  }, { ...!isAutocomplete.value ? { displayValue } : {}, ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                    "data-slot": unref(props).multiple ? void 0 : "base",
                    type: unref(props).type,
                    placeholder: unref(props).placeholder,
                    required: unref(props).required,
                    onBlur,
                    onFocus,
                    onChange: withModifiers(() => {
                    }, ["stop"]),
                    "onUpdate:modelValue": onInputUpdate
                  }), null, 16, ["id", "data-slot", "type", "placeholder", "required", "onChange"])),
                  unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                    key: 2,
                    "data-slot": "leading",
                    class: ui.value.leading({ class: unref(props).ui?.leading })
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => [
                      unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
                        key: 0,
                        name: unref(leadingIconName),
                        "data-slot": "leadingIcon",
                        class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
                      }, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
                        key: 1,
                        size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                      }, unref(props).avatar, {
                        "data-slot": "itemLeadingAvatar",
                        class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  unref(isTrailing) || !!slots.trailing || !!unref(props).clear ? (openBlock(), createBlock(unref(Component).Trigger, {
                    key: 3,
                    "data-slot": "trailing",
                    class: ui.value.trailing({ class: unref(props).ui?.trailing })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "trailing", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => [
                        !!unref(props).clear && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(Component).Cancel, {
                          key: 0,
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$9, mergeProps({
                              as: "span",
                              icon: unref(props).clearIcon || unref(appConfig).ui.icons.close,
                              size: inputSize.value,
                              variant: "link",
                              color: "neutral",
                              tabindex: "-1"
                            }, clearProps.value, {
                              "data-slot": "trailingClear",
                              class: ui.value.trailingClear({ class: unref(props).ui?.trailingClear }),
                              onClick: withModifiers(onClear, ["stop"])
                            }), null, 16, ["icon", "size", "class"])
                          ]),
                          _: 1
                        })) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
                          key: 1,
                          name: unref(trailingIconName),
                          "data-slot": "trailingIcon",
                          class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["as-child", "data-slot", "class"]),
              createVNode(unref(Component).Portal, unref(portalProps), {
                default: withCtx(() => [
                  createVNode(unref(FieldGroupReset), null, {
                    default: withCtx(() => [
                      createVNode(unref(Component).Content, mergeProps({
                        "data-slot": "content",
                        class: ui.value.content({ class: unref(props).ui?.content })
                      }, contentProps.value, {
                        onFocusOutside: withModifiers(() => {
                        }, ["prevent"])
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "content-top"),
                          createVNode(unref(Component).Empty, {
                            "data-slot": "empty",
                            class: ui.value.empty({ class: unref(props).ui?.empty })
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
                            class: ui.value.viewport({ class: unref(props).ui?.viewport })
                          }, [
                            !!unref(props).virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                              createVNode(unref(Component).Virtualizer, mergeProps({
                                options: filteredItems.value,
                                "text-content": (item2) => isInputItem(item2) ? unref(get)(item2, unref(props).labelKey) : String(item2)
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
                              createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(Component).Group, {
                                key: 0,
                                "data-slot": "group",
                                class: ui.value.group({ class: unref(props).ui?.group })
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseCreateItemTemplate))
                                ]),
                                _: 1
                              }, 8, ["class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                return openBlock(), createBlock(unref(Component).Group, {
                                  key: `group-${groupIndex}`,
                                  "data-slot": "group",
                                  class: ui.value.group({ class: unref(props).ui?.group })
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
                              createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(Component).Group, {
                                key: 1,
                                "data-slot": "group",
                                class: ui.value.group({ class: unref(props).ui?.group })
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseCreateItemTemplate))
                                ]),
                                _: 1
                              }, 8, ["class"])) : createCommentVNode("", true)
                            ], 64))
                          ], 2),
                          renderSlot(_ctx.$slots, "content-bottom"),
                          !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: unref(props).ui?.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ]),
                        _: 3
                      }, 16, ["class", "onFocusOutside"])
                    ]),
                    _: 3
                  })
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "NuxtTime",
  __ssrInlineRender: true,
  props: {
    locale: { type: String, required: false },
    datetime: { type: [String, Number, Date], required: true },
    localeMatcher: { type: String, required: false },
    weekday: { type: String, required: false },
    era: { type: String, required: false },
    year: { type: String, required: false },
    month: { type: String, required: false },
    day: { type: String, required: false },
    hour: { type: String, required: false },
    minute: { type: String, required: false },
    second: { type: String, required: false },
    timeZoneName: { type: String, required: false },
    formatMatcher: { type: String, required: false },
    hour12: { type: Boolean, required: false, default: void 0 },
    timeZone: { type: String, required: false },
    calendar: { type: String, required: false },
    dayPeriod: { type: String, required: false },
    numberingSystem: { type: String, required: false },
    dateStyle: { type: String, required: false },
    timeStyle: { type: String, required: false },
    hourCycle: { type: String, required: false },
    relative: { type: Boolean, required: false },
    numeric: { type: String, required: false },
    relativeStyle: { type: String, required: false },
    title: { type: [Boolean, String], required: false }
  },
  setup(__props) {
    const props = __props;
    const el = getCurrentInstance()?.vnode.el;
    const renderedDate = el?.getAttribute("datetime");
    const _locale = el?.getAttribute("data-locale");
    const nuxtApp = useNuxtApp();
    const date = computed(() => {
      const date2 = props.datetime;
      if (renderedDate && nuxtApp.isHydrating) {
        return new Date(renderedDate);
      }
      if (!props.datetime) {
        return /* @__PURE__ */ new Date();
      }
      return new Date(date2);
    });
    const now = ref(/* @__PURE__ */ new Date());
    const formatter = computed(() => {
      const { locale: propsLocale, relative, relativeStyle, ...rest } = props;
      if (relative) {
        return new Intl.RelativeTimeFormat(_locale ?? propsLocale, { ...rest, style: relativeStyle });
      }
      return new Intl.DateTimeFormat(_locale ?? propsLocale, rest);
    });
    const formattedDate = computed(() => {
      if (!props.relative) {
        return formatter.value.format(date.value);
      }
      const diffInSeconds = (date.value.getTime() - now.value.getTime()) / 1e3;
      const units = [
        { unit: "second", seconds: 1, threshold: 60 },
        // 60 seconds → minute
        { unit: "minute", seconds: 60, threshold: 60 },
        // 60 minutes → hour
        { unit: "hour", seconds: 3600, threshold: 24 },
        // 24 hours → day
        { unit: "day", seconds: 86400, threshold: 30 },
        // ~30 days → month
        { unit: "month", seconds: 2592e3, threshold: 12 },
        // 12 months → year
        { unit: "year", seconds: 31536e3, threshold: Infinity }
      ];
      const { unit, seconds } = units.find(({ seconds: seconds2, threshold }) => Math.abs(diffInSeconds / seconds2) < threshold) || units[units.length - 1];
      const value = diffInSeconds / seconds;
      return formatter.value.format(Math.round(value), unit);
    });
    const isoDate = computed(() => date.value.toISOString());
    const title = computed(() => props.title === true ? isoDate.value : typeof props.title === "string" ? props.title : void 0);
    const dataset = {};
    {
      for (const prop in props) {
        if (prop !== "datetime") {
          const value = props?.[prop];
          if (value) {
            const propInKebabCase = prop.split(/(?=[A-Z])/).join("-");
            dataset[`data-${propInKebabCase}`] = props?.[prop];
          }
        }
      }
      onPrehydrate("(e=>{let t=window._nuxtTimeNow||=Date.now(),n=(e,t)=>t>0?e[0].toUpperCase()+e.slice(1):e,r=new Date(e.getAttribute(`datetime`)),i={};for(let t of e.getAttributeNames())if(t.startsWith(`data-`)){let r=t.slice(5).split(`-`).map(n).join(``);r===`relativeStyle`&&(r=`style`),i[r]=e.getAttribute(t)}if(i.relative){let n=(r.getTime()-t)/1e3,a=[{unit:`second`,seconds:1,threshold:60},{unit:`minute`,seconds:60,threshold:60},{unit:`hour`,seconds:3600,threshold:24},{unit:`day`,seconds:86400,threshold:30},{unit:`month`,seconds:2592e3,threshold:12},{unit:`year`,seconds:31536e3,threshold:1/0}],{unit:o,seconds:s}=a.find(({seconds:e,threshold:t})=>Math.abs(n/e)<t)||a[a.length-1],c=n/s;e.textContent=new Intl.RelativeTimeFormat(i.locale,i).format(Math.round(c),o)}else e.textContent=new Intl.DateTimeFormat(i.locale,i).format(r)})", "WFaGyVfuXU");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<time${ssrRenderAttrs(mergeProps(dataset, {
        datetime: isoDate.value,
        title: title.value
      }, _attrs))}>${ssrInterpolate(formattedDate.value)}</time>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-time.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "",
    "header": "flex items-center justify-between",
    "body": "flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0",
    "heading": "flex-1 min-w-0 text-center",
    "headingLabel": "font-medium block truncate p-1.5",
    "grid": "w-full border-collapse select-none space-y-1 focus:outline-none",
    "gridRow": "grid",
    "gridWeekDaysRow": "mb-1 grid w-full grid-cols-7",
    "gridBody": "grid",
    "headCell": "rounded-md",
    "headCellWeek": "rounded-md text-muted",
    "cell": "relative text-center",
    "cellTrigger": [
      "m-0.5 relative flex items-center justify-center whitespace-nowrap focus-visible:outline-3 data-disabled:text-muted data-unavailable:line-through data-unavailable:text-muted data-unavailable:pointer-events-none data-today:font-semibold",
      "transition"
    ],
    "cellWeek": "relative text-center text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "headCell": "text-primary",
        "cellTrigger": "outline-primary/25"
      },
      "secondary": {
        "headCell": "text-secondary",
        "cellTrigger": "outline-secondary/25"
      },
      "success": {
        "headCell": "text-success",
        "cellTrigger": "outline-success/25"
      },
      "info": {
        "headCell": "text-info",
        "cellTrigger": "outline-info/25"
      },
      "warning": {
        "headCell": "text-warning",
        "cellTrigger": "outline-warning/25"
      },
      "error": {
        "headCell": "text-error",
        "cellTrigger": "outline-error/25"
      },
      "neutral": {
        "headCell": "text-highlighted",
        "cellTrigger": "outline-inverted/25"
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
        "headingLabel": "text-xs",
        "cell": "text-xs",
        "cellWeek": "text-xs",
        "headCell": "text-[10px]",
        "headCellWeek": "text-[10px]",
        "body": "space-y-2 pt-2"
      },
      "sm": {
        "headingLabel": "text-xs",
        "headCell": "text-xs",
        "headCellWeek": "text-xs",
        "cellWeek": "text-xs",
        "cell": "text-xs"
      },
      "md": {
        "headingLabel": "text-sm",
        "headCell": "text-xs",
        "headCellWeek": "text-xs",
        "cellWeek": "text-xs",
        "cell": "text-sm"
      },
      "lg": {
        "headingLabel": "text-md",
        "headCell": "text-md",
        "headCellWeek": "text-md"
      },
      "xl": {
        "headingLabel": "text-lg",
        "headCell": "text-lg",
        "headCellWeek": "text-lg"
      }
    },
    "view": {
      "day": {
        "gridRow": "grid-cols-7 place-items-center",
        "cellTrigger": "rounded-full data-outside-view:text-muted"
      },
      "month": {
        "gridRow": "grid-cols-4",
        "cellTrigger": "rounded-md"
      },
      "year": {
        "gridRow": "grid-cols-4",
        "cellTrigger": "rounded-md"
      }
    },
    "weekNumbers": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-selected:bg-primary data-selected:text-inverted data-today:not-data-selected:text-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20"
      }
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-selected:bg-secondary data-selected:text-inverted data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20"
      }
    },
    {
      "color": "success",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-selected:bg-success data-selected:text-inverted data-today:not-data-selected:text-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20"
      }
    },
    {
      "color": "info",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-selected:bg-info data-selected:text-inverted data-today:not-data-selected:text-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20"
      }
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-selected:bg-warning data-selected:text-inverted data-today:not-data-selected:text-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20"
      }
    },
    {
      "color": "error",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-selected:bg-error data-selected:text-inverted data-today:not-data-selected:text-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20"
      }
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-primary/50 data-selected:text-primary data-selected:focus-visible:ring-primary data-today:not-data-selected:text-primary data-highlighted:bg-primary/10 hover:not-data-selected:bg-primary/10"
      }
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-secondary/50 data-selected:text-secondary data-selected:focus-visible:ring-secondary data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/10 hover:not-data-selected:bg-secondary/10"
      }
    },
    {
      "color": "success",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-success/50 data-selected:text-success data-selected:focus-visible:ring-success data-today:not-data-selected:text-success data-highlighted:bg-success/10 hover:not-data-selected:bg-success/10"
      }
    },
    {
      "color": "info",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-info/50 data-selected:text-info data-selected:focus-visible:ring-info data-today:not-data-selected:text-info data-highlighted:bg-info/10 hover:not-data-selected:bg-info/10"
      }
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-warning/50 data-selected:text-warning data-selected:focus-visible:ring-warning data-today:not-data-selected:text-warning data-highlighted:bg-warning/10 hover:not-data-selected:bg-warning/10"
      }
    },
    {
      "color": "error",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-error/50 data-selected:text-error data-selected:focus-visible:ring-error data-today:not-data-selected:text-error data-highlighted:bg-error/10 hover:not-data-selected:bg-error/10"
      }
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-selected:bg-primary/10 data-selected:text-primary data-today:not-data-selected:text-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20"
      }
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-selected:bg-secondary/10 data-selected:text-secondary data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20"
      }
    },
    {
      "color": "success",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-selected:bg-success/10 data-selected:text-success data-today:not-data-selected:text-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20"
      }
    },
    {
      "color": "info",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-selected:bg-info/10 data-selected:text-info data-today:not-data-selected:text-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20"
      }
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-selected:bg-warning/10 data-selected:text-warning data-today:not-data-selected:text-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20"
      }
    },
    {
      "color": "error",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-selected:bg-error/10 data-selected:text-error data-today:not-data-selected:text-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20"
      }
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-selected:bg-primary/10 data-selected:text-primary data-selected:ring data-selected:ring-inset data-selected:ring-primary/25 data-selected:focus-visible:ring-primary data-today:not-data-selected:text-primary data-highlighted:bg-primary/20 hover:not-data-selected:bg-primary/20"
      }
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-selected:bg-secondary/10 data-selected:text-secondary data-selected:ring data-selected:ring-inset data-selected:ring-secondary/25 data-selected:focus-visible:ring-secondary data-today:not-data-selected:text-secondary data-highlighted:bg-secondary/20 hover:not-data-selected:bg-secondary/20"
      }
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-selected:bg-success/10 data-selected:text-success data-selected:ring data-selected:ring-inset data-selected:ring-success/25 data-selected:focus-visible:ring-success data-today:not-data-selected:text-success data-highlighted:bg-success/20 hover:not-data-selected:bg-success/20"
      }
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-selected:bg-info/10 data-selected:text-info data-selected:ring data-selected:ring-inset data-selected:ring-info/25 data-selected:focus-visible:ring-info data-today:not-data-selected:text-info data-highlighted:bg-info/20 hover:not-data-selected:bg-info/20"
      }
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-selected:bg-warning/10 data-selected:text-warning data-selected:ring data-selected:ring-inset data-selected:ring-warning/25 data-selected:focus-visible:ring-warning data-today:not-data-selected:text-warning data-highlighted:bg-warning/20 hover:not-data-selected:bg-warning/20"
      }
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-selected:bg-error/10 data-selected:text-error data-selected:ring data-selected:ring-inset data-selected:ring-error/25 data-selected:focus-visible:ring-error data-today:not-data-selected:text-error data-highlighted:bg-error/20 hover:not-data-selected:bg-error/20"
      }
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": {
        "cellTrigger": "data-selected:bg-inverted data-selected:text-inverted data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/20 hover:not-data-selected:bg-inverted/10"
      }
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": {
        "cellTrigger": "data-selected:ring data-selected:ring-inset data-selected:ring-accented data-selected:text-default data-selected:bg-default data-selected:focus-visible:ring-inverted data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/10 hover:not-data-selected:bg-inverted/10"
      }
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": {
        "cellTrigger": "data-selected:bg-elevated data-selected:text-default data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/20 hover:not-data-selected:bg-inverted/10"
      }
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": {
        "cellTrigger": "data-selected:bg-elevated data-selected:text-default data-selected:ring data-selected:ring-inset data-selected:ring-accented data-selected:focus-visible:ring-inverted data-today:not-data-selected:text-highlighted data-highlighted:bg-inverted/20 hover:not-data-selected:bg-inverted/10"
      }
    },
    {
      "size": "xs",
      "view": "day",
      "class": {
        "cellTrigger": "size-7"
      }
    },
    {
      "size": "sm",
      "view": "day",
      "class": {
        "cellTrigger": "size-7"
      }
    },
    {
      "size": "md",
      "view": "day",
      "class": {
        "cellTrigger": "size-8"
      }
    },
    {
      "size": "lg",
      "view": "day",
      "class": {
        "cellTrigger": "size-9 text-md"
      }
    },
    {
      "size": "xl",
      "view": "day",
      "class": {
        "cellTrigger": "size-10 text-lg"
      }
    },
    {
      "size": "xs",
      "view": [
        "month",
        "year"
      ],
      "class": {
        "cellTrigger": "h-7 px-2"
      }
    },
    {
      "size": "sm",
      "view": [
        "month",
        "year"
      ],
      "class": {
        "cellTrigger": "h-7 px-2"
      }
    },
    {
      "size": "md",
      "view": [
        "month",
        "year"
      ],
      "class": {
        "cellTrigger": "h-8 px-3"
      }
    },
    {
      "size": "lg",
      "view": [
        "month",
        "year"
      ],
      "class": {
        "cellTrigger": "h-9 px-4 text-md"
      }
    },
    {
      "size": "xl",
      "view": [
        "month",
        "year"
      ],
      "class": {
        "cellTrigger": "h-10 px-5 text-lg"
      }
    },
    {
      "view": "day",
      "weekNumbers": true,
      "class": {
        "gridRow": "grid-cols-8",
        "gridWeekDaysRow": "grid-cols-8 [&>*:first-child]:col-start-2"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "solid",
    "view": "day"
  }
};
const _sfc_main$3 = {
  __name: "UCalendar",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    type: { type: String, required: false, default: "date" },
    nextYearIcon: { type: null, required: false },
    nextYear: { type: Object, required: false },
    nextMonthIcon: { type: null, required: false },
    nextMonth: { type: Object, required: false },
    prevYearIcon: { type: null, required: false },
    prevYear: { type: Object, required: false },
    prevMonthIcon: { type: null, required: false },
    prevMonth: { type: Object, required: false },
    viewControl: { type: [Boolean, Object], required: false, default: true },
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
    ui: { type: Object, required: false },
    defaultPlaceholder: { type: Object, required: false },
    placeholder: { type: Object, required: false },
    allowNonContiguousRanges: { type: Boolean, required: false },
    pagedNavigation: { type: Boolean, required: false },
    preventDeselect: { type: Boolean, required: false },
    maximumDays: { type: Number, required: false },
    weekStartsOn: { type: Number, required: false },
    weekdayFormat: { type: String, required: false },
    fixedWeeks: { type: Boolean, required: false, default: true },
    maxValue: { type: Object, required: false },
    minValue: { type: Object, required: false },
    locale: { type: String, required: false },
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
    fixedDate: { type: String, required: false },
    isMonthDisabled: { type: Function, required: false },
    isMonthUnavailable: { type: Function, required: false },
    isYearDisabled: { type: Function, required: false },
    isYearUnavailable: { type: Function, required: false }
  },
  emits: ["update:modelValue", "update:placeholder", "update:startValue", "update:validModelValue"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const props = useComponentProps("calendar", _props);
    const { dir, t, locale } = useLocale();
    const appConfig = useAppConfig();
    const VIEWS = ["day", "month", "year"];
    const minView = computed(() => props.type === "year" ? "year" : props.type === "month" ? "month" : "day");
    const maxView = "year";
    const view = ref(minView.value);
    watch(() => props.type, () => {
      view.value = minView.value;
    });
    const switchable = computed(() => minView.value !== maxView);
    const isMinView = computed(() => view.value === minView.value);
    function clampView(value) {
      const min = VIEWS.indexOf(minView.value);
      const max = VIEWS.indexOf(maxView);
      return VIEWS[Math.min(Math.max(VIEWS.indexOf(value), min), max)];
    }
    function setView(value) {
      view.value = clampView(value);
    }
    function cycleView() {
      const max = VIEWS.indexOf(maxView);
      const next = VIEWS.indexOf(view.value) >= max ? minView.value : VIEWS[VIEWS.indexOf(view.value) + 1];
      view.value = next;
    }
    function resolveDateValue(value) {
      if (Array.isArray(value)) {
        return value[0];
      }
      if (!value) {
        return void 0;
      }
      if ("start" in value || "end" in value) {
        const range = value;
        return range.start ?? range.end ?? void 0;
      }
      return value;
    }
    const placeholder = shallowRef(
      props.placeholder ?? resolveDateValue(props.modelValue) ?? resolveDateValue(props.defaultValue) ?? today(getLocalTimeZone())
    );
    watch(() => props.placeholder, (value) => {
      if (value) {
        placeholder.value = value;
      }
    });
    function setPlaceholder(date) {
      placeholder.value = date;
      emits("update:placeholder", date);
    }
    function onSelect(value) {
      if (isMinView.value) {
        emits("update:modelValue", value);
        return;
      }
      const resolved = resolveDateValue(value);
      if (resolved) {
        setPlaceholder(resolved);
      }
      setView(VIEWS[VIEWS.indexOf(view.value) - 1]);
    }
    function paginateYear(date, sign) {
      return sign === -1 ? date.subtract({ years: 1 }) : date.add({ years: 1 });
    }
    const Picker = computed(() => {
      const range = props.range && isMinView.value;
      if (view.value === "year") {
        return range ? YearRangePicker : YearPicker;
      }
      if (view.value === "month") {
        return range ? MonthRangePicker : MonthPicker;
      }
      return props.range ? RangeCalendar : Calendar;
    });
    const omittedProps = ["type", "placeholder", "range", "modelValue", "defaultValue", "color", "variant", "size", "monthControls", "yearControls", "viewControl", "class", "ui"];
    const dayOnlyProps = ["pagedNavigation", "weekStartsOn", "weekdayFormat", "fixedWeeks", "numberOfMonths", "isDateDisabled", "isDateUnavailable", "isDateHighlightable", "disableDaysOutsideCurrentView", "maximumDays"];
    const monthOnlyProps = ["isMonthDisabled", "isMonthUnavailable"];
    const yearOnlyProps = ["isYearDisabled", "isYearUnavailable"];
    const rangeOnlyProps = ["allowNonContiguousRanges", "fixedDate"];
    const rootProps = useForwardProps(reactiveOmit(
      props,
      (_, key) => omittedProps.includes(key) || view.value !== "day" && dayOnlyProps.includes(key) || view.value !== "month" && monthOnlyProps.includes(key) || view.value !== "year" && yearOnlyProps.includes(key) || !isMinView.value && rangeOnlyProps.includes(key)
    ));
    function cellProps(cellDate, monthValue) {
      if (view.value === "month") {
        return { month: cellDate };
      }
      if (view.value === "year") {
        return { year: cellDate };
      }
      return { day: cellDate, month: monthValue };
    }
    const nextYearIcon = computed(() => props.nextYearIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight));
    const nextMonthIcon = computed(() => props.nextMonthIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const prevYearIcon = computed(() => props.prevYearIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft));
    const prevMonthIcon = computed(() => props.prevMonthIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft));
    const prevLabel = computed(() => view.value === "day" ? t("calendar.prevMonth") : t("calendar.prevYear"));
    const nextLabel = computed(() => view.value === "day" ? t("calendar.nextMonth") : t("calendar.nextYear"));
    const ui = computed(() => tv({ extend: theme$2, ...appConfig.ui?.calendar || {} })({
      color: props.color,
      size: props.size,
      variant: props.variant,
      weekNumbers: props.weekNumbers,
      view: view.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Picker).Root, mergeProps(unref(rootProps), {
        "model-value": isMinView.value ? unref(props).modelValue : void 0,
        "default-value": isMinView.value ? unref(props).defaultValue : void 0,
        placeholder: placeholder.value,
        "data-slot": "root",
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] }),
        "onUpdate:placeholder": setPlaceholder,
        "onUpdate:modelValue": onSelect,
        "onUpdate:startValue": (value) => emits("update:startValue", value),
        "onUpdate:validModelValue": (value) => emits("update:validModelValue", value)
      }, _attrs), {
        default: withCtx(({ weekDays, grid, date }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Picker).Header, {
              "data-slot": "header",
              class: ui.value.header({ class: unref(props).ui?.header })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (view.value === "day" && unref(props).yearControls) {
                    _push3(ssrRenderComponent(unref(Picker).Prev, {
                      "prev-page": (date2) => paginateYear(date2, -1),
                      "aria-label": unref(t)("calendar.prevYear"),
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$9, mergeProps({
                            icon: prevYearIcon.value,
                            size: unref(props).size,
                            color: "neutral",
                            variant: "ghost"
                          }, unref(props).prevYear), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$9, mergeProps({
                              icon: prevYearIcon.value,
                              size: unref(props).size,
                              color: "neutral",
                              variant: "ghost"
                            }, unref(props).prevYear), null, 16, ["icon", "size"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (view.value !== "day" || unref(props).monthControls) {
                    _push3(ssrRenderComponent(unref(Picker).Prev, {
                      "aria-label": prevLabel.value,
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$9, mergeProps({
                            icon: prevMonthIcon.value,
                            size: unref(props).size,
                            color: "neutral",
                            variant: "ghost"
                          }, unref(props).prevMonth), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$9, mergeProps({
                              icon: prevMonthIcon.value,
                              size: unref(props).size,
                              color: "neutral",
                              variant: "ghost"
                            }, unref(props).prevMonth), null, 16, ["icon", "size"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(Picker).Heading, {
                    "data-slot": "heading",
                    class: ui.value.heading({ class: unref(props).ui?.heading })
                  }, {
                    default: withCtx(({ headingValue }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "heading", {
                          value: headingValue,
                          view: view.value,
                          date,
                          setView,
                          setPlaceholder
                        }, () => {
                          if (switchable.value && unref(props).viewControl) {
                            _push4(ssrRenderComponent(_sfc_main$9, mergeProps({
                              label: headingValue,
                              size: unref(props).size,
                              color: "neutral",
                              variant: "ghost",
                              block: ""
                            }, typeof unref(props).viewControl === "object" ? unref(props).viewControl : {}, { onClick: cycleView }), null, _parent4, _scopeId3));
                          } else {
                            _push4(`<span data-slot="headingLabel" class="${ssrRenderClass(ui.value.headingLabel({ class: unref(props).ui?.headingLabel }))}"${_scopeId3}>${ssrInterpolate(headingValue)}</span>`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "heading", {
                            value: headingValue,
                            view: view.value,
                            date,
                            setView,
                            setPlaceholder
                          }, () => [
                            switchable.value && unref(props).viewControl ? (openBlock(), createBlock(_sfc_main$9, mergeProps({
                              key: 0,
                              label: headingValue,
                              size: unref(props).size,
                              color: "neutral",
                              variant: "ghost",
                              block: ""
                            }, typeof unref(props).viewControl === "object" ? unref(props).viewControl : {}, { onClick: cycleView }), null, 16, ["label", "size"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              "data-slot": "headingLabel",
                              class: ui.value.headingLabel({ class: unref(props).ui?.headingLabel })
                            }, toDisplayString(headingValue), 3))
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  if (view.value !== "day" || unref(props).monthControls) {
                    _push3(ssrRenderComponent(unref(Picker).Next, {
                      "aria-label": nextLabel.value,
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$9, mergeProps({
                            icon: nextMonthIcon.value,
                            size: unref(props).size,
                            color: "neutral",
                            variant: "ghost"
                          }, unref(props).nextMonth), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$9, mergeProps({
                              icon: nextMonthIcon.value,
                              size: unref(props).size,
                              color: "neutral",
                              variant: "ghost"
                            }, unref(props).nextMonth), null, 16, ["icon", "size"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (view.value === "day" && unref(props).yearControls) {
                    _push3(ssrRenderComponent(unref(Picker).Next, {
                      "next-page": (date2) => paginateYear(date2, 1),
                      "aria-label": unref(t)("calendar.nextYear"),
                      "as-child": ""
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$9, mergeProps({
                            icon: nextYearIcon.value,
                            size: unref(props).size,
                            color: "neutral",
                            variant: "ghost"
                          }, unref(props).nextYear), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$9, mergeProps({
                              icon: nextYearIcon.value,
                              size: unref(props).size,
                              color: "neutral",
                              variant: "ghost"
                            }, unref(props).nextYear), null, 16, ["icon", "size"])
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
                    view.value === "day" && unref(props).yearControls ? (openBlock(), createBlock(unref(Picker).Prev, {
                      key: 0,
                      "prev-page": (date2) => paginateYear(date2, -1),
                      "aria-label": unref(t)("calendar.prevYear"),
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$9, mergeProps({
                          icon: prevYearIcon.value,
                          size: unref(props).size,
                          color: "neutral",
                          variant: "ghost"
                        }, unref(props).prevYear), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["prev-page", "aria-label"])) : createCommentVNode("", true),
                    view.value !== "day" || unref(props).monthControls ? (openBlock(), createBlock(unref(Picker).Prev, {
                      key: 1,
                      "aria-label": prevLabel.value,
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$9, mergeProps({
                          icon: prevMonthIcon.value,
                          size: unref(props).size,
                          color: "neutral",
                          variant: "ghost"
                        }, unref(props).prevMonth), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])) : createCommentVNode("", true),
                    createVNode(unref(Picker).Heading, {
                      "data-slot": "heading",
                      class: ui.value.heading({ class: unref(props).ui?.heading })
                    }, {
                      default: withCtx(({ headingValue }) => [
                        renderSlot(_ctx.$slots, "heading", {
                          value: headingValue,
                          view: view.value,
                          date,
                          setView,
                          setPlaceholder
                        }, () => [
                          switchable.value && unref(props).viewControl ? (openBlock(), createBlock(_sfc_main$9, mergeProps({
                            key: 0,
                            label: headingValue,
                            size: unref(props).size,
                            color: "neutral",
                            variant: "ghost",
                            block: ""
                          }, typeof unref(props).viewControl === "object" ? unref(props).viewControl : {}, { onClick: cycleView }), null, 16, ["label", "size"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            "data-slot": "headingLabel",
                            class: ui.value.headingLabel({ class: unref(props).ui?.headingLabel })
                          }, toDisplayString(headingValue), 3))
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"]),
                    view.value !== "day" || unref(props).monthControls ? (openBlock(), createBlock(unref(Picker).Next, {
                      key: 2,
                      "aria-label": nextLabel.value,
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$9, mergeProps({
                          icon: nextMonthIcon.value,
                          size: unref(props).size,
                          color: "neutral",
                          variant: "ghost"
                        }, unref(props).nextMonth), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])) : createCommentVNode("", true),
                    view.value === "day" && unref(props).yearControls ? (openBlock(), createBlock(unref(Picker).Next, {
                      key: 3,
                      "next-page": (date2) => paginateYear(date2, 1),
                      "aria-label": unref(t)("calendar.nextYear"),
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$9, mergeProps({
                          icon: nextYearIcon.value,
                          size: unref(props).size,
                          color: "neutral",
                          variant: "ghost"
                        }, unref(props).nextYear), null, 16, ["icon", "size"])
                      ]),
                      _: 1
                    }, 8, ["next-page", "aria-label"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}><!--[-->`);
            ssrRenderList(Array.isArray(grid) ? grid : [grid], (month) => {
              _push2(ssrRenderComponent(unref(Picker).Grid, {
                key: month.value.toString(),
                "data-slot": "grid",
                class: ui.value.grid({ class: unref(props).ui?.grid })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if ("GridHead" in Picker.value) {
                      _push3(ssrRenderComponent(unref(Picker).GridHead, null, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(Picker).GridRow, {
                              "data-slot": "gridWeekDaysRow",
                              class: ui.value.gridWeekDaysRow({ class: unref(props).ui?.gridWeekDaysRow })
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(weekDays, (day) => {
                                    _push5(ssrRenderComponent(unref(Picker).HeadCell, {
                                      key: day,
                                      "data-slot": "headCell",
                                      class: ui.value.headCell({ class: unref(props).ui?.headCell })
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
                                      return openBlock(), createBlock(unref(Picker).HeadCell, {
                                        key: day,
                                        "data-slot": "headCell",
                                        class: ui.value.headCell({ class: unref(props).ui?.headCell })
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
                              createVNode(unref(Picker).GridRow, {
                                "data-slot": "gridWeekDaysRow",
                                class: ui.value.gridWeekDaysRow({ class: unref(props).ui?.gridWeekDaysRow })
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                    return openBlock(), createBlock(unref(Picker).HeadCell, {
                                      key: day,
                                      "data-slot": "headCell",
                                      class: ui.value.headCell({ class: unref(props).ui?.headCell })
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
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(unref(Picker).GridBody, {
                      "data-slot": "gridBody",
                      class: ui.value.gridBody({ class: unref(props).ui?.gridBody })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(month.rows, (row, index) => {
                            _push4(ssrRenderComponent(unref(Picker).GridRow, {
                              key: `row-${index}`,
                              "data-slot": "gridRow",
                              class: ui.value.gridRow({ class: unref(props).ui?.gridRow })
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (view.value === "day" && unref(props).weekNumbers && row[0]) {
                                    _push5(`<td role="gridcell" data-slot="cellWeek" class="${ssrRenderClass(ui.value.cellWeek({ class: unref(props).ui?.cellWeek }))}"${_scopeId4}>${ssrInterpolate(unref(getWeekNumber)(row[0], unref(props).locale ?? unref(locale).code))}</td>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<!--[-->`);
                                  ssrRenderList(row, (cellDate) => {
                                    _push5(ssrRenderComponent(unref(Picker).Cell, {
                                      key: cellDate.toString(),
                                      date: cellDate,
                                      "data-slot": "cell",
                                      class: ui.value.cell({ class: unref(props).ui?.cell })
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
                                            "data-slot": "cellTrigger",
                                            class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
                                          }), {
                                            default: withCtx((cell, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                if (view.value === "day") {
                                                  ssrRenderSlot(_ctx.$slots, "day", { day: cellDate }, () => {
                                                    _push7(`${ssrInterpolate(cellDate.day)}`);
                                                  }, _push7, _parent7, _scopeId6);
                                                } else if (view.value === "month") {
                                                  ssrRenderSlot(_ctx.$slots, "month-cell", {
                                                    month: cellDate,
                                                    selected: cell.selected,
                                                    disabled: cell.disabled
                                                  }, () => {
                                                    _push7(`${ssrInterpolate(cell.monthValue)}`);
                                                  }, _push7, _parent7, _scopeId6);
                                                } else {
                                                  ssrRenderSlot(_ctx.$slots, "year-cell", {
                                                    year: cellDate,
                                                    selected: cell.selected,
                                                    disabled: cell.disabled
                                                  }, () => {
                                                    _push7(`${ssrInterpolate(cell.yearValue)}`);
                                                  }, _push7, _parent7, _scopeId6);
                                                }
                                              } else {
                                                return [
                                                  view.value === "day" ? renderSlot(_ctx.$slots, "day", {
                                                    key: 0,
                                                    day: cellDate
                                                  }, () => [
                                                    createTextVNode(toDisplayString(cellDate.day), 1)
                                                  ]) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
                                                    key: 1,
                                                    month: cellDate,
                                                    selected: cell.selected,
                                                    disabled: cell.disabled
                                                  }, () => [
                                                    createTextVNode(toDisplayString(cell.monthValue), 1)
                                                  ]) : renderSlot(_ctx.$slots, "year-cell", {
                                                    key: 2,
                                                    year: cellDate,
                                                    selected: cell.selected,
                                                    disabled: cell.disabled
                                                  }, () => [
                                                    createTextVNode(toDisplayString(cell.yearValue), 1)
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
                                              "data-slot": "cellTrigger",
                                              class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
                                            }), {
                                              default: withCtx((cell) => [
                                                view.value === "day" ? renderSlot(_ctx.$slots, "day", {
                                                  key: 0,
                                                  day: cellDate
                                                }, () => [
                                                  createTextVNode(toDisplayString(cellDate.day), 1)
                                                ]) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
                                                  key: 1,
                                                  month: cellDate,
                                                  selected: cell.selected,
                                                  disabled: cell.disabled
                                                }, () => [
                                                  createTextVNode(toDisplayString(cell.monthValue), 1)
                                                ]) : renderSlot(_ctx.$slots, "year-cell", {
                                                  key: 2,
                                                  year: cellDate,
                                                  selected: cell.selected,
                                                  disabled: cell.disabled
                                                }, () => [
                                                  createTextVNode(toDisplayString(cell.yearValue), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1040, ["class"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    view.value === "day" && unref(props).weekNumbers && row[0] ? (openBlock(), createBlock("td", {
                                      key: 0,
                                      role: "gridcell",
                                      "data-slot": "cellWeek",
                                      class: ui.value.cellWeek({ class: unref(props).ui?.cellWeek })
                                    }, toDisplayString(unref(getWeekNumber)(row[0], unref(props).locale ?? unref(locale).code)), 3)) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(row, (cellDate) => {
                                      return openBlock(), createBlock(unref(Picker).Cell, {
                                        key: cellDate.toString(),
                                        date: cellDate,
                                        "data-slot": "cell",
                                        class: ui.value.cell({ class: unref(props).ui?.cell })
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
                                            "data-slot": "cellTrigger",
                                            class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
                                          }), {
                                            default: withCtx((cell) => [
                                              view.value === "day" ? renderSlot(_ctx.$slots, "day", {
                                                key: 0,
                                                day: cellDate
                                              }, () => [
                                                createTextVNode(toDisplayString(cellDate.day), 1)
                                              ]) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
                                                key: 1,
                                                month: cellDate,
                                                selected: cell.selected,
                                                disabled: cell.disabled
                                              }, () => [
                                                createTextVNode(toDisplayString(cell.monthValue), 1)
                                              ]) : renderSlot(_ctx.$slots, "year-cell", {
                                                key: 2,
                                                year: cellDate,
                                                selected: cell.selected,
                                                disabled: cell.disabled
                                              }, () => [
                                                createTextVNode(toDisplayString(cell.yearValue), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
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
                            (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (row, index) => {
                              return openBlock(), createBlock(unref(Picker).GridRow, {
                                key: `row-${index}`,
                                "data-slot": "gridRow",
                                class: ui.value.gridRow({ class: unref(props).ui?.gridRow })
                              }, {
                                default: withCtx(() => [
                                  view.value === "day" && unref(props).weekNumbers && row[0] ? (openBlock(), createBlock("td", {
                                    key: 0,
                                    role: "gridcell",
                                    "data-slot": "cellWeek",
                                    class: ui.value.cellWeek({ class: unref(props).ui?.cellWeek })
                                  }, toDisplayString(unref(getWeekNumber)(row[0], unref(props).locale ?? unref(locale).code)), 3)) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(row, (cellDate) => {
                                    return openBlock(), createBlock(unref(Picker).Cell, {
                                      key: cellDate.toString(),
                                      date: cellDate,
                                      "data-slot": "cell",
                                      class: ui.value.cell({ class: unref(props).ui?.cell })
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
                                          "data-slot": "cellTrigger",
                                          class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
                                        }), {
                                          default: withCtx((cell) => [
                                            view.value === "day" ? renderSlot(_ctx.$slots, "day", {
                                              key: 0,
                                              day: cellDate
                                            }, () => [
                                              createTextVNode(toDisplayString(cellDate.day), 1)
                                            ]) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
                                              key: 1,
                                              month: cellDate,
                                              selected: cell.selected,
                                              disabled: cell.disabled
                                            }, () => [
                                              createTextVNode(toDisplayString(cell.monthValue), 1)
                                            ]) : renderSlot(_ctx.$slots, "year-cell", {
                                              key: 2,
                                              year: cellDate,
                                              selected: cell.selected,
                                              disabled: cell.disabled
                                            }, () => [
                                              createTextVNode(toDisplayString(cell.yearValue), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1040, ["class"])
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
                      "GridHead" in Picker.value ? (openBlock(), createBlock(unref(Picker).GridHead, { key: 0 }, {
                        default: withCtx(() => [
                          createVNode(unref(Picker).GridRow, {
                            "data-slot": "gridWeekDaysRow",
                            class: ui.value.gridWeekDaysRow({ class: unref(props).ui?.gridWeekDaysRow })
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(Picker).HeadCell, {
                                  key: day,
                                  "data-slot": "headCell",
                                  class: ui.value.headCell({ class: unref(props).ui?.headCell })
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
                      }, 1024)) : createCommentVNode("", true),
                      createVNode(unref(Picker).GridBody, {
                        "data-slot": "gridBody",
                        class: ui.value.gridBody({ class: unref(props).ui?.gridBody })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (row, index) => {
                            return openBlock(), createBlock(unref(Picker).GridRow, {
                              key: `row-${index}`,
                              "data-slot": "gridRow",
                              class: ui.value.gridRow({ class: unref(props).ui?.gridRow })
                            }, {
                              default: withCtx(() => [
                                view.value === "day" && unref(props).weekNumbers && row[0] ? (openBlock(), createBlock("td", {
                                  key: 0,
                                  role: "gridcell",
                                  "data-slot": "cellWeek",
                                  class: ui.value.cellWeek({ class: unref(props).ui?.cellWeek })
                                }, toDisplayString(unref(getWeekNumber)(row[0], unref(props).locale ?? unref(locale).code)), 3)) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(row, (cellDate) => {
                                  return openBlock(), createBlock(unref(Picker).Cell, {
                                    key: cellDate.toString(),
                                    date: cellDate,
                                    "data-slot": "cell",
                                    class: ui.value.cell({ class: unref(props).ui?.cell })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
                                        "data-slot": "cellTrigger",
                                        class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
                                      }), {
                                        default: withCtx((cell) => [
                                          view.value === "day" ? renderSlot(_ctx.$slots, "day", {
                                            key: 0,
                                            day: cellDate
                                          }, () => [
                                            createTextVNode(toDisplayString(cellDate.day), 1)
                                          ]) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
                                            key: 1,
                                            month: cellDate,
                                            selected: cell.selected,
                                            disabled: cell.disabled
                                          }, () => [
                                            createTextVNode(toDisplayString(cell.monthValue), 1)
                                          ]) : renderSlot(_ctx.$slots, "year-cell", {
                                            key: 2,
                                            year: cellDate,
                                            selected: cell.selected,
                                            disabled: cell.disabled
                                          }, () => [
                                            createTextVNode(toDisplayString(cell.yearValue), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
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
              createVNode(unref(Picker).Header, {
                "data-slot": "header",
                class: ui.value.header({ class: unref(props).ui?.header })
              }, {
                default: withCtx(() => [
                  view.value === "day" && unref(props).yearControls ? (openBlock(), createBlock(unref(Picker).Prev, {
                    key: 0,
                    "prev-page": (date2) => paginateYear(date2, -1),
                    "aria-label": unref(t)("calendar.prevYear"),
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$9, mergeProps({
                        icon: prevYearIcon.value,
                        size: unref(props).size,
                        color: "neutral",
                        variant: "ghost"
                      }, unref(props).prevYear), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["prev-page", "aria-label"])) : createCommentVNode("", true),
                  view.value !== "day" || unref(props).monthControls ? (openBlock(), createBlock(unref(Picker).Prev, {
                    key: 1,
                    "aria-label": prevLabel.value,
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$9, mergeProps({
                        icon: prevMonthIcon.value,
                        size: unref(props).size,
                        color: "neutral",
                        variant: "ghost"
                      }, unref(props).prevMonth), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : createCommentVNode("", true),
                  createVNode(unref(Picker).Heading, {
                    "data-slot": "heading",
                    class: ui.value.heading({ class: unref(props).ui?.heading })
                  }, {
                    default: withCtx(({ headingValue }) => [
                      renderSlot(_ctx.$slots, "heading", {
                        value: headingValue,
                        view: view.value,
                        date,
                        setView,
                        setPlaceholder
                      }, () => [
                        switchable.value && unref(props).viewControl ? (openBlock(), createBlock(_sfc_main$9, mergeProps({
                          key: 0,
                          label: headingValue,
                          size: unref(props).size,
                          color: "neutral",
                          variant: "ghost",
                          block: ""
                        }, typeof unref(props).viewControl === "object" ? unref(props).viewControl : {}, { onClick: cycleView }), null, 16, ["label", "size"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          "data-slot": "headingLabel",
                          class: ui.value.headingLabel({ class: unref(props).ui?.headingLabel })
                        }, toDisplayString(headingValue), 3))
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  view.value !== "day" || unref(props).monthControls ? (openBlock(), createBlock(unref(Picker).Next, {
                    key: 2,
                    "aria-label": nextLabel.value,
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$9, mergeProps({
                        icon: nextMonthIcon.value,
                        size: unref(props).size,
                        color: "neutral",
                        variant: "ghost"
                      }, unref(props).nextMonth), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : createCommentVNode("", true),
                  view.value === "day" && unref(props).yearControls ? (openBlock(), createBlock(unref(Picker).Next, {
                    key: 3,
                    "next-page": (date2) => paginateYear(date2, 1),
                    "aria-label": unref(t)("calendar.nextYear"),
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$9, mergeProps({
                        icon: nextYearIcon.value,
                        size: unref(props).size,
                        color: "neutral",
                        variant: "ghost"
                      }, unref(props).nextYear), null, 16, ["icon", "size"])
                    ]),
                    _: 1
                  }, 8, ["next-page", "aria-label"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["class"]),
              createVNode("div", {
                "data-slot": "body",
                class: ui.value.body({ class: unref(props).ui?.body })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(Array.isArray(grid) ? grid : [grid], (month) => {
                  return openBlock(), createBlock(unref(Picker).Grid, {
                    key: month.value.toString(),
                    "data-slot": "grid",
                    class: ui.value.grid({ class: unref(props).ui?.grid })
                  }, {
                    default: withCtx(() => [
                      "GridHead" in Picker.value ? (openBlock(), createBlock(unref(Picker).GridHead, { key: 0 }, {
                        default: withCtx(() => [
                          createVNode(unref(Picker).GridRow, {
                            "data-slot": "gridWeekDaysRow",
                            class: ui.value.gridWeekDaysRow({ class: unref(props).ui?.gridWeekDaysRow })
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(Picker).HeadCell, {
                                  key: day,
                                  "data-slot": "headCell",
                                  class: ui.value.headCell({ class: unref(props).ui?.headCell })
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
                      }, 1024)) : createCommentVNode("", true),
                      createVNode(unref(Picker).GridBody, {
                        "data-slot": "gridBody",
                        class: ui.value.gridBody({ class: unref(props).ui?.gridBody })
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (row, index) => {
                            return openBlock(), createBlock(unref(Picker).GridRow, {
                              key: `row-${index}`,
                              "data-slot": "gridRow",
                              class: ui.value.gridRow({ class: unref(props).ui?.gridRow })
                            }, {
                              default: withCtx(() => [
                                view.value === "day" && unref(props).weekNumbers && row[0] ? (openBlock(), createBlock("td", {
                                  key: 0,
                                  role: "gridcell",
                                  "data-slot": "cellWeek",
                                  class: ui.value.cellWeek({ class: unref(props).ui?.cellWeek })
                                }, toDisplayString(unref(getWeekNumber)(row[0], unref(props).locale ?? unref(locale).code)), 3)) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(row, (cellDate) => {
                                  return openBlock(), createBlock(unref(Picker).Cell, {
                                    key: cellDate.toString(),
                                    date: cellDate,
                                    "data-slot": "cell",
                                    class: ui.value.cell({ class: unref(props).ui?.cell })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Picker).CellTrigger, mergeProps({ ref_for: true }, cellProps(cellDate, month.value), {
                                        "data-slot": "cellTrigger",
                                        class: ui.value.cellTrigger({ class: unref(props).ui?.cellTrigger })
                                      }), {
                                        default: withCtx((cell) => [
                                          view.value === "day" ? renderSlot(_ctx.$slots, "day", {
                                            key: 0,
                                            day: cellDate
                                          }, () => [
                                            createTextVNode(toDisplayString(cellDate.day), 1)
                                          ]) : view.value === "month" ? renderSlot(_ctx.$slots, "month-cell", {
                                            key: 1,
                                            month: cellDate,
                                            selected: cell.selected,
                                            disabled: cell.disabled
                                          }, () => [
                                            createTextVNode(toDisplayString(cell.monthValue), 1)
                                          ]) : renderSlot(_ctx.$slots, "year-cell", {
                                            key: 2,
                                            year: cellDate,
                                            selected: cell.selected,
                                            disabled: cell.disabled
                                          }, () => [
                                            createTextVNode(toDisplayString(cell.yearValue), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
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
          "px-2 py-1 text-sm/4 gap-1",
          "gap-0.25"
        ],
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "segment": "not-data-[segment=literal]:w-8"
      },
      "sm": {
        "base": [
          "px-2.5 py-1.5 text-sm/4 gap-1.5",
          "gap-0.5"
        ],
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "segment": "not-data-[segment=literal]:w-8"
      },
      "md": {
        "base": [
          "px-2.5 py-1.5 text-base/5 gap-1.5",
          "gap-0.5"
        ],
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "segment": "not-data-[segment=literal]:w-9"
      },
      "lg": {
        "base": [
          "px-3 py-2 text-base/5 gap-2",
          "gap-0.75"
        ],
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "segment": "not-data-[segment=literal]:w-9"
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
        "segment": "not-data-[segment=literal]:w-10"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated has-focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated has-focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent has-focus:outline-none"
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
    "fixed": {
      "false": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-error"
    },
    {
      "color": "primary",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-primary/25 has-focus-visible:outline-3"
    },
    {
      "color": "secondary",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-secondary/25 has-focus-visible:outline-3"
    },
    {
      "color": "success",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-success/25 has-focus-visible:outline-3"
    },
    {
      "color": "info",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-info/25 has-focus-visible:outline-3"
    },
    {
      "color": "warning",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-warning/25 has-focus-visible:outline-3"
    },
    {
      "color": "error",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-error/25 has-focus-visible:outline-3"
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
      "class": "outline-inverted/25 has-focus-visible:outline-3 has-focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "variant": [
        "soft",
        "ghost"
      ],
      "class": "outline-inverted/25 has-focus-visible:outline-3"
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
    },
    {
      "fixed": false,
      "size": "xs",
      "class": "md:text-xs"
    },
    {
      "fixed": false,
      "size": "sm",
      "class": "md:text-xs"
    },
    {
      "fixed": false,
      "size": "md",
      "class": "md:text-sm"
    },
    {
      "fixed": false,
      "size": "lg",
      "class": "md:text-sm"
    },
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
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UInputTime",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    fixed: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    separatorIcon: { type: null, required: false },
    range: { type: Boolean, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false },
    defaultPlaceholder: { type: Object, required: false },
    placeholder: { type: Object, required: false },
    hourCycle: { type: null, required: false },
    step: { type: Object, required: false },
    stepSnapping: { type: Boolean, required: false },
    granularity: { type: String, required: false },
    hideTimeZone: { type: Boolean, required: false },
    maxValue: { type: Object, required: false },
    minValue: { type: Object, required: false },
    locale: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    isTimeUnavailable: { type: Function, required: false }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "update:placeholder"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("inputTime", _props);
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactiveOmit(props, "id", "name", "range", "modelValue", "defaultValue", "color", "variant", "size", "highlight", "fixed", "disabled", "autofocus", "autofocusDelay", "icon", "avatar", "leading", "leadingIcon", "trailing", "trailingIcon", "loading", "loadingIcon", "separatorIcon", "class", "ui"), emits);
    const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, id, color, size: formFieldSize, name, highlight, disabled, ariaAttrs } = useFormField(_props);
    const { orientation, size: fieldGroupSize } = useFieldGroup(_props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const inputSize = computed(() => fieldGroupSize.value || formFieldSize.value);
    const ui = computed(() => tv({ extend: theme$1, ...appConfig.ui?.inputTime || {} })({
      color: color.value ?? props.color,
      variant: props.variant,
      size: inputSize.value ?? props.size,
      loading: props.loading,
      highlight: highlight.value ?? props.highlight,
      fixed: props.fixed,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      fieldGroup: orientation.value
    }));
    const [DefineSegmentsTemplate, ReuseSegmentsTemplate] = createReusableTemplate();
    const inputsRef = ref([]);
    const RangeTimeField = { Root: TimeRangeFieldRoot_default, Input: TimeRangeFieldInput_default };
    const TimeField$1 = computed(() => props.range ? RangeTimeField : TimeField);
    function setInputRef(index, el) {
      inputsRef.value[index] = el;
    }
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
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineSegmentsTemplate), null, {
        default: withCtx(({ segments, type }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(segments, (segment, index) => {
              _push2(ssrRenderComponent(unref(TimeField$1).Input, {
                key: `${segment.part}-${index}`,
                ref_for: true,
                ref: (el) => setInputRef(index, el),
                type,
                part: segment.part,
                "data-slot": "segment",
                class: ui.value.segment({ class: unref(props).ui?.segment }),
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
                return openBlock(), createBlock(unref(TimeField$1).Input, {
                  key: `${segment.part}-${index}`,
                  ref_for: true,
                  ref: (el) => setInputRef(index, el),
                  type,
                  part: segment.part,
                  "data-slot": "segment",
                  class: ui.value.segment({ class: unref(props).ui?.segment }),
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
      _push(ssrRenderComponent(unref(TimeField$1).Root, mergeProps({
        id: unref(id),
        "data-slot": "base"
      }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
        name: unref(name),
        disabled: unref(disabled),
        "model-value": unref(props).modelValue,
        "default-value": unref(props).defaultValue,
        class: ui.value.base({ class: [unref(props).ui?.base, unref(props).class] }),
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
                _push2(ssrRenderComponent(_sfc_main$5$1, {
                  name: unref(props).separatorIcon || unref(appConfig).ui.icons.minus,
                  "data-slot": "separatorIcon",
                  class: ui.value.separatorIcon({ class: unref(props).ui?.separatorIcon })
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              _push2(ssrRenderComponent(unref(ReuseSegmentsTemplate), {
                segments: segments.end,
                type: "end"
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!unref(props).avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$5$1, {
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!unref(props).avatar) {
                  _push2(ssrRenderComponent(_sfc_main$3$1, mergeProps({
                    size: unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, unref(props).avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: unref(props).ui?.leadingAvatar })
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
              _push2(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: unref(props).ui?.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$5$1, {
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
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
                  createVNode(_sfc_main$5$1, {
                    name: unref(props).separatorIcon || unref(appConfig).ui.icons.minus,
                    "data-slot": "separatorIcon",
                    class: ui.value.separatorIcon({ class: unref(props).ui?.separatorIcon })
                  }, null, 8, ["name", "class"])
                ]),
                createVNode(unref(ReuseSegmentsTemplate), {
                  segments: segments.end,
                  type: "end"
                }, null, 8, ["segments"])
              ], 64)),
              renderSlot(_ctx.$slots, "default", { ui: ui.value }),
              unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 2,
                "data-slot": "leading",
                class: ui.value.leading({ class: unref(props).ui?.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
                    key: 0,
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
                    key: 1,
                    size: unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, unref(props).avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: unref(props).ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 3,
                "data-slot": "trailing",
                class: ui.value.trailing({ class: unref(props).ui?.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                  unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
                    key: 0,
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/InputTime.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative flex items-start",
    "container": "flex items-center",
    "base": "rounded-sm ring ring-inset ring-accented overflow-hidden focus-visible:outline-3",
    "indicator": "flex items-center justify-center size-full text-inverted",
    "icon": "shrink-0 size-full",
    "wrapper": "w-full",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "outline-primary/25 focus-visible:ring-primary",
        "indicator": "bg-primary"
      },
      "secondary": {
        "base": "outline-secondary/25 focus-visible:ring-secondary",
        "indicator": "bg-secondary"
      },
      "success": {
        "base": "outline-success/25 focus-visible:ring-success",
        "indicator": "bg-success"
      },
      "info": {
        "base": "outline-info/25 focus-visible:ring-info",
        "indicator": "bg-info"
      },
      "warning": {
        "base": "outline-warning/25 focus-visible:ring-warning",
        "indicator": "bg-warning"
      },
      "error": {
        "base": "outline-error/25 focus-visible:ring-error",
        "indicator": "bg-error"
      },
      "neutral": {
        "base": "outline-inverted/25 focus-visible:ring-inverted",
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
    "highlight": {
      "true": ""
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
    },
    {
      "color": "primary",
      "highlight": true,
      "class": {
        "base": "ring-primary"
      }
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": {
        "base": "ring-secondary"
      }
    },
    {
      "color": "success",
      "highlight": true,
      "class": {
        "base": "ring-success"
      }
    },
    {
      "color": "info",
      "highlight": true,
      "class": {
        "base": "ring-info"
      }
    },
    {
      "color": "warning",
      "highlight": true,
      "class": {
        "base": "ring-warning"
      }
    },
    {
      "color": "error",
      "highlight": true,
      "class": {
        "base": "ring-error"
      }
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": {
        "base": "ring-inverted"
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
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UCheckbox",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    indicator: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    icon: { type: null, required: false },
    indeterminateIcon: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    disabled: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    name: { type: String, required: false },
    value: { type: null, required: false },
    id: { type: String, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    trueValue: { type: null, required: false },
    falseValue: { type: null, required: false }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const slots = useSlots();
    const emits = __emit;
    const props = useComponentProps("checkbox", _props);
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue", "modelValue", "trueValue", "falseValue"), emits);
    const { id: _id, emitFormChange, emitFormInput, size, color, highlight, name, disabled, ariaAttrs } = useFormField(_props);
    const id = _id.value ?? useId();
    const attrs = useAttrs();
    const forwardedAttrs = computed(() => {
      const { "data-state": _, ...rest } = attrs;
      return rest;
    });
    const ui = computed(() => tv({ extend: theme, ...appConfig.ui?.checkbox || {} })({
      size: size.value ?? props.size,
      color: color.value ?? props.color,
      variant: props.variant,
      indicator: props.indicator,
      highlight: highlight.value ?? props.highlight,
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
        as: !unref(props).variant || unref(props).variant === "list" ? unref(props).as : unref(Label_default),
        "data-slot": _ctx.$attrs["data-slot"] ?? "root",
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: unref(props).ui?.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckboxRoot_default), mergeProps({ id: unref(id) }, { ...unref(rootProps), ...forwardedAttrs.value, ...unref(ariaAttrs) }, {
              name: unref(name),
              disabled: unref(disabled),
              "data-slot": "base",
              class: ui.value.base({ class: unref(props).ui?.base }),
              "onUpdate:modelValue": onUpdate
            }), {
              default: withCtx(({ state }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckboxIndicator_default), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: unref(props).ui?.indicator })
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (state === "indeterminate") {
                          _push4(ssrRenderComponent(_sfc_main$5$1, {
                            name: unref(props).indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: unref(props).ui?.icon })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$5$1, {
                            name: unref(props).icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: unref(props).ui?.icon })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          state === "indeterminate" ? (openBlock(), createBlock(_sfc_main$5$1, {
                            key: 0,
                            name: unref(props).indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: unref(props).ui?.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$5$1, {
                            key: 1,
                            name: unref(props).icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: unref(props).ui?.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckboxIndicator_default), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: unref(props).ui?.indicator })
                    }, {
                      default: withCtx(() => [
                        state === "indeterminate" ? (openBlock(), createBlock(_sfc_main$5$1, {
                          key: 0,
                          name: unref(props).indeterminateIcon || unref(appConfig).ui.icons.minus,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: unref(props).ui?.icon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$5$1, {
                          key: 1,
                          name: unref(props).icon || unref(appConfig).ui.icons.check,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: unref(props).ui?.icon })
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
            if (unref(props).label || !!slots.label || (unref(props).description || !!slots.description)) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
              if (unref(props).label || !!slots.label) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(!unref(props).variant || unref(props).variant === "list" ? unref(Label_default) : "p"), {
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: unref(props).ui?.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", {
                        label: unref(props).label
                      }, () => {
                        _push3(`${ssrInterpolate(unref(props).label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", {
                          label: unref(props).label
                        }, () => [
                          createTextVNode(toDisplayString(unref(props).label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if (unref(props).description || !!slots.description) {
                _push2(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {
                  description: unref(props).description
                }, () => {
                  _push2(`${ssrInterpolate(unref(props).description)}`);
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
                class: ui.value.container({ class: unref(props).ui?.container })
              }, [
                createVNode(unref(CheckboxRoot_default), mergeProps({ id: unref(id) }, { ...unref(rootProps), ...forwardedAttrs.value, ...unref(ariaAttrs) }, {
                  name: unref(name),
                  disabled: unref(disabled),
                  "data-slot": "base",
                  class: ui.value.base({ class: unref(props).ui?.base }),
                  "onUpdate:modelValue": onUpdate
                }), {
                  default: withCtx(({ state }) => [
                    createVNode(unref(CheckboxIndicator_default), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: unref(props).ui?.indicator })
                    }, {
                      default: withCtx(() => [
                        state === "indeterminate" ? (openBlock(), createBlock(_sfc_main$5$1, {
                          key: 0,
                          name: unref(props).indeterminateIcon || unref(appConfig).ui.icons.minus,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: unref(props).ui?.icon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$5$1, {
                          key: 1,
                          name: unref(props).icon || unref(appConfig).ui.icons.check,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: unref(props).ui?.icon })
                        }, null, 8, ["name", "class"]))
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]),
                  _: 1
                }, 16, ["id", "name", "disabled", "class"])
              ], 2),
              unref(props).label || !!slots.label || (unref(props).description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
              }, [
                unref(props).label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!unref(props).variant || unref(props).variant === "list" ? unref(Label_default) : "p"), {
                  key: 0,
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: unref(props).ui?.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", {
                      label: unref(props).label
                    }, () => [
                      createTextVNode(toDisplayString(unref(props).label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                unref(props).description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  "data-slot": "description",
                  class: ui.value.description({ class: unref(props).ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {
                    description: unref(props).description
                  }, () => [
                    createTextVNode(toDisplayString(unref(props).description), 1)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ERROR_EMPTY = "Обязательное поле для заполнения";
const PHONE_FORMAT = "Неверный формат номера телефона";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  props: {
    direction: { type: Boolean },
    from: {},
    to: {}
  },
  setup(__props) {
    const props = __props;
    const { orderData, isOrderCreated, isUserValidate, resetOrder, submitOrder } = useOrder();
    const { to_cities, from_cities } = useCities();
    const schema = v.object({
      name: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY)),
      phone: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY), minLength(18, PHONE_FORMAT)),
      to: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY)),
      from: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY)),
      to_address: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY)),
      from_address: v.pipe(v.string(), v.nonEmpty(ERROR_EMPTY)),
      date: v.pipe(v.any(), v.nonEmpty(ERROR_EMPTY)),
      time: v.pipe(v.any(), v.nonEmpty(ERROR_EMPTY))
    });
    function useCities() {
      const CITIES = ref(["Кумертау", "Мелеуз", "Салават", "Уфа"]);
      const from_cities2 = computed(() => {
        return CITIES.value;
      });
      const to_cities2 = computed(() => {
        if (orderData.from === "Уфа") {
          return CITIES.value.filter((i) => i !== "Уфа");
        } else {
          return CITIES.value.filter((i) => i === "Уфа");
        }
      });
      return { from_cities: from_cities2, to_cities: to_cities2 };
    }
    function useOrder() {
      const toast = useToast();
      const isOrderCreated2 = ref(false);
      const isUserValidate2 = ref(false);
      const defaultTime = new Time(16, 30, 0);
      const [day, month, year] = new Date(Date.now()).toLocaleDateString("ru-RU").split(".");
      const currentDate = new CalendarDate(Number(year), Number(month), Number(day));
      let orderData2 = reactive({
        name: "",
        phone: "",
        from: props.from || "Кумертау",
        from_address: "",
        to: props.to || "Уфа",
        to_address: "",
        date: shallowRef(currentDate),
        time: shallowRef(defaultTime)
      });
      const clearToCity = (value) => {
        if (value === "Уфа") orderData2.to = "";
      };
      watch(() => orderData2.from, clearToCity);
      const resetOrder2 = () => {
        orderData2.to_address = "";
        orderData2.from_address = "";
        orderData2.to = "";
        orderData2.from = "";
        orderData2.name = "";
        orderData2.phone = "";
        orderData2.date = currentDate;
        orderData2.time = defaultTime;
      };
      const createOrder = async () => {
        await $fetch("/api/order/create", {
          method: "POST",
          body: {
            ...orderData2
          }
        });
      };
      const submitOrder2 = async () => {
        createOrder().then(() => {
          toast.add({ title: "Ответ", description: "Заявка была успешно создана", color: "success" });
          isOrderCreated2.value = true;
        }).catch((response) => {
          console.log("createOrder: ", response);
          toast.add({ title: "Ответ", description: "Произошла ошибка при создании заявки", color: "error" });
        });
      };
      return { submitOrder: submitOrder2, resetOrder: resetOrder2, orderData: orderData2, isOrderCreated: isOrderCreated2, isUserValidate: isUserValidate2 };
    }
    const config = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionTitle = __nuxt_component_1$1;
      const _component_UForm = _sfc_main$1$1;
      const _component_UFormField = _sfc_main$6;
      const _component_UInput = _sfc_main$7;
      const _component_UInputMenu = _sfc_main$5;
      const _component_UPopover = _sfc_main$8;
      const _component_UButton = _sfc_main$9;
      const _component_NuxtTime = _sfc_main$4;
      const _component_UCalendar = _sfc_main$3;
      const _component_UInputTime = _sfc_main$2;
      const _component_UCheckbox = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UIcon = _sfc_main$5$1;
      if (unref(config).public.orderVisible) {
        _push(`<!--[-->`);
        if (!unref(isOrderCreated)) {
          _push(ssrRenderComponent(_component_SectionTitle, { title: "Сделать заказ" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!unref(isOrderCreated)) {
          _push(`<div class="flex flex-col justify-center items-center text-sm" data-v-57528e33><p class="text-gray-200 text-center" data-v-57528e33> Заполните пожалуйста форму заказа, перед отправкой убедитесь что все данные введены верно </p><p class="text-primary text-center" data-v-57528e33> * Внимание при доставке до определенного адреса взымается дополнительная плата! </p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(isOrderCreated)) {
          _push(ssrRenderComponent(_component_UForm, {
            class: "w-full flex flex-col justify-start items-center pt-5 gap-5",
            schema: unref(schema),
            state: unref(orderData),
            onSubmit: unref(submitOrder),
            id: "form-create-order"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex flex-col lg:grid lg:grid-cols-2 justify-start items-center lg:items-start gap-5" data-v-57528e33${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UFormField, { name: "name" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: unref(orderData).name,
                        "onUpdate:modelValue": ($event) => unref(orderData).name = $event,
                        color: "primary",
                        placeholder: "Ф.И.О",
                        size: "xl",
                        id: "name"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: unref(orderData).name,
                          "onUpdate:modelValue": ($event) => unref(orderData).name = $event,
                          color: "primary",
                          placeholder: "Ф.И.О",
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
                        modelValue: unref(orderData).phone,
                        "onUpdate:modelValue": ($event) => unref(orderData).phone = $event,
                        placeholder: "+7-(000)-000-00-00",
                        icon: "i-lucide-phone",
                        size: "xl",
                        id: "phone"
                      }, ssrGetDirectiveProps(_ctx, unref(vMaska), "+7-(###)-###-##-##")), null, _parent3, _scopeId2));
                    } else {
                      return [
                        withDirectives(createVNode(_component_UInput, {
                          modelValue: unref(orderData).phone,
                          "onUpdate:modelValue": ($event) => unref(orderData).phone = $event,
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
                        modelValue: unref(orderData).from,
                        "onUpdate:modelValue": ($event) => unref(orderData).from = $event,
                        items: unref(from_cities),
                        "open-on-focus": "",
                        color: "primary",
                        placeholder: "Город отправления",
                        size: "xl",
                        id: "from"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInputMenu, {
                          modelValue: unref(orderData).from,
                          "onUpdate:modelValue": ($event) => unref(orderData).from = $event,
                          items: unref(from_cities),
                          "open-on-focus": "",
                          color: "primary",
                          placeholder: "Город отправления",
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
                        modelValue: unref(orderData).from_address,
                        "onUpdate:modelValue": ($event) => unref(orderData).from_address = $event,
                        color: "primary",
                        placeholder: "Адрес отправления",
                        size: "xl",
                        id: "from_address"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: unref(orderData).from_address,
                          "onUpdate:modelValue": ($event) => unref(orderData).from_address = $event,
                          color: "primary",
                          placeholder: "Адрес отправления",
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
                        modelValue: unref(orderData).to,
                        "onUpdate:modelValue": ($event) => unref(orderData).to = $event,
                        items: unref(to_cities),
                        "open-on-focus": "",
                        color: "primary",
                        placeholder: "Город прибытия",
                        size: "xl",
                        id: "to"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInputMenu, {
                          modelValue: unref(orderData).to,
                          "onUpdate:modelValue": ($event) => unref(orderData).to = $event,
                          items: unref(to_cities),
                          "open-on-focus": "",
                          color: "primary",
                          placeholder: "Город прибытия",
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
                        modelValue: unref(orderData).to_address,
                        "onUpdate:modelValue": ($event) => unref(orderData).to_address = $event,
                        color: "primary",
                        placeholder: "Адрес прибытия",
                        size: "xl",
                        id: "to_address"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: unref(orderData).to_address,
                          "onUpdate:modelValue": ($event) => unref(orderData).to_address = $event,
                          color: "primary",
                          placeholder: "Адрес прибытия",
                          size: "xl",
                          id: "to_address"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<div class="date-time w-full flex not-sm:flex-col justify-start items-center gap-5" data-v-57528e33${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UFormField, {
                  name: "date",
                  class: "w-[50%] not-sm:w-[320px]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UPopover, null, {
                        content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UCalendar, {
                              modelValue: unref(orderData).date,
                              "onUpdate:modelValue": ($event) => unref(orderData).date = $event,
                              class: "p-2",
                              id: "date"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UCalendar, {
                                modelValue: unref(orderData).date,
                                "onUpdate:modelValue": ($event) => unref(orderData).date = $event,
                                class: "p-2",
                                id: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ];
                          }
                        }),
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UButton, {
                              icon: "i-lucide-calendar",
                              id: "date-button",
                              class: "w-full bg-gray-600 h-12 rounded-[26px] border border-white justify-between text-left"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (unref(orderData).date) {
                                    _push5(ssrRenderComponent(_component_NuxtTime, {
                                      datetime: new Date(unref(orderData).date),
                                      locale: "ru-RU"
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<p data-v-57528e33${_scopeId4}>Выберете дату</p>`);
                                  }
                                } else {
                                  return [
                                    unref(orderData).date ? (openBlock(), createBlock(_component_NuxtTime, {
                                      key: 0,
                                      datetime: new Date(unref(orderData).date),
                                      locale: "ru-RU"
                                    }, null, 8, ["datetime"])) : (openBlock(), createBlock("p", { key: 1 }, "Выберете дату"))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UButton, {
                                icon: "i-lucide-calendar",
                                id: "date-button",
                                class: "w-full bg-gray-600 h-12 rounded-[26px] border border-white justify-between text-left"
                              }, {
                                default: withCtx(() => [
                                  unref(orderData).date ? (openBlock(), createBlock(_component_NuxtTime, {
                                    key: 0,
                                    datetime: new Date(unref(orderData).date),
                                    locale: "ru-RU"
                                  }, null, 8, ["datetime"])) : (openBlock(), createBlock("p", { key: 1 }, "Выберете дату"))
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UPopover, null, {
                          content: withCtx(() => [
                            createVNode(_component_UCalendar, {
                              modelValue: unref(orderData).date,
                              "onUpdate:modelValue": ($event) => unref(orderData).date = $event,
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
                                unref(orderData).date ? (openBlock(), createBlock(_component_NuxtTime, {
                                  key: 0,
                                  datetime: new Date(unref(orderData).date),
                                  locale: "ru-RU"
                                }, null, 8, ["datetime"])) : (openBlock(), createBlock("p", { key: 1 }, "Выберете дату"))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UFormField, {
                  name: "time",
                  class: "w-[50%] not-sm:w-[320px]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInputTime, {
                        modelValue: unref(orderData).time,
                        "onUpdate:modelValue": ($event) => unref(orderData).time = $event,
                        class: "w-full",
                        "hour-cycle": 24,
                        "default-value": unref(orderData).time,
                        id: "time"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInputTime, {
                          modelValue: unref(orderData).time,
                          "onUpdate:modelValue": ($event) => unref(orderData).time = $event,
                          class: "w-full",
                          "hour-cycle": 24,
                          "default-value": unref(orderData).time,
                          id: "time"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "default-value"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="min-w-[320px] max-w-110 flex flex-col justify-center items-center" data-v-57528e33${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UCheckbox, {
                  modelValue: unref(isUserValidate),
                  "onUpdate:modelValue": ($event) => isRef(isUserValidate) ? isUserValidate.value = $event : null,
                  label: "Подтверждение",
                  description: "Даю согласие на обработку персональных данных и подтверждаю правильность введенных данных",
                  ui: {
                    base: "h-5 w-5 text-white bg-gray-600 mt-10 m-2",
                    description: "text-primary/70",
                    label: "text-white text-lg"
                  },
                  id: "check-user-validate"
                }, null, _parent2, _scopeId));
                _push2(`</div></div><div class="w-full flex flex-row justify-center items-center pt-5 mb-20 gap-5" data-v-57528e33${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  type: "submit",
                  class: "button-gradient h-16",
                  icon: "i-lucide-send",
                  disabled: !unref(isUserValidate)
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
                  class: "button-gradient h-16",
                  onClick: unref(resetOrder)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Очистить`);
                    } else {
                      return [
                        createTextVNode("Очистить")
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
                          modelValue: unref(orderData).name,
                          "onUpdate:modelValue": ($event) => unref(orderData).name = $event,
                          color: "primary",
                          placeholder: "Ф.И.О",
                          size: "xl",
                          id: "name"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, { name: "phone" }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_component_UInput, {
                          modelValue: unref(orderData).phone,
                          "onUpdate:modelValue": ($event) => unref(orderData).phone = $event,
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
                          modelValue: unref(orderData).from,
                          "onUpdate:modelValue": ($event) => unref(orderData).from = $event,
                          items: unref(from_cities),
                          "open-on-focus": "",
                          color: "primary",
                          placeholder: "Город отправления",
                          size: "xl",
                          id: "from"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, { name: "from_address" }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(orderData).from_address,
                          "onUpdate:modelValue": ($event) => unref(orderData).from_address = $event,
                          color: "primary",
                          placeholder: "Адрес отправления",
                          size: "xl",
                          id: "from_address"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, { name: "to" }, {
                      default: withCtx(() => [
                        createVNode(_component_UInputMenu, {
                          modelValue: unref(orderData).to,
                          "onUpdate:modelValue": ($event) => unref(orderData).to = $event,
                          items: unref(to_cities),
                          "open-on-focus": "",
                          color: "primary",
                          placeholder: "Город прибытия",
                          size: "xl",
                          id: "to"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, { name: "to_address" }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(orderData).to_address,
                          "onUpdate:modelValue": ($event) => unref(orderData).to_address = $event,
                          color: "primary",
                          placeholder: "Адрес прибытия",
                          size: "xl",
                          id: "to_address"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "date-time w-full flex not-sm:flex-col justify-start items-center gap-5" }, [
                      createVNode(_component_UFormField, {
                        name: "date",
                        class: "w-[50%] not-sm:w-[320px]"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UPopover, null, {
                            content: withCtx(() => [
                              createVNode(_component_UCalendar, {
                                modelValue: unref(orderData).date,
                                "onUpdate:modelValue": ($event) => unref(orderData).date = $event,
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
                                  unref(orderData).date ? (openBlock(), createBlock(_component_NuxtTime, {
                                    key: 0,
                                    datetime: new Date(unref(orderData).date),
                                    locale: "ru-RU"
                                  }, null, 8, ["datetime"])) : (openBlock(), createBlock("p", { key: 1 }, "Выберете дату"))
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
                            modelValue: unref(orderData).time,
                            "onUpdate:modelValue": ($event) => unref(orderData).time = $event,
                            class: "w-full",
                            "hour-cycle": 24,
                            "default-value": unref(orderData).time,
                            id: "time"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "default-value"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "min-w-[320px] max-w-110 flex flex-col justify-center items-center" }, [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(isUserValidate),
                        "onUpdate:modelValue": ($event) => isRef(isUserValidate) ? isUserValidate.value = $event : null,
                        label: "Подтверждение",
                        description: "Даю согласие на обработку персональных данных и подтверждаю правильность введенных данных",
                        ui: {
                          base: "h-5 w-5 text-white bg-gray-600 mt-10 m-2",
                          description: "text-primary/70",
                          label: "text-white text-lg"
                        },
                        id: "check-user-validate"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "w-full flex flex-row justify-center items-center pt-5 mb-20 gap-5" }, [
                    createVNode(_component_UButton, {
                      type: "submit",
                      class: "button-gradient h-16",
                      icon: "i-lucide-send",
                      disabled: !unref(isUserValidate)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Отправить ")
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(_component_UButton, {
                      class: "button-gradient h-16",
                      onClick: unref(resetOrder)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Очистить")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div data-v-57528e33><div class="order-created w-full flex flex-col justify-start items-start mb-20 gap-5" data-v-57528e33><h3 class="text-2xl font-bold text-center" data-v-57528e33>Ваша заявка принята.</h3><p class="w-full text-center" data-v-57528e33>Спасибо, водитель свяжеться с вами.</p><p data-v-57528e33> Имя: <b data-v-57528e33>${ssrInterpolate(unref(orderData).name)}</b></p><p data-v-57528e33>Телефон: ${ssrInterpolate(unref(orderData).phone)}</p><p data-v-57528e33>Из: ${ssrInterpolate(unref(orderData).from)}, ${ssrInterpolate(unref(orderData).from_address)}</p><p data-v-57528e33>До: ${ssrInterpolate(unref(orderData).to)}, ${ssrInterpolate(unref(orderData).to_address)}</p><p data-v-57528e33>Дата: ${ssrInterpolate(unref(orderData).date)}, время: ${ssrInterpolate(unref(orderData).time)}</p></div></div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-start items-start gap-10 mb-10" }, _attrs))} data-v-57528e33><h3 class="text-2xl" data-v-57528e33>Связаться с диспетчером</h3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "button-gradient h-16 max-w-1/3 flex items-center justify-center gap-3",
          icon: "i-lucide-phone-call",
          to: "tel:+79177666833",
          onClick: ($event) => unref(utils).sendCallToTelegram("+79177666833")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-phone-call",
                size: "18"
              }, null, _parent2, _scopeId));
              _push2(` Вызвать `);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "i-lucide-phone-call",
                  size: "18"
                }),
                createTextVNode(" Вызвать ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="w-1/3 text-gray-300 text-sm" data-v-57528e33>Всю дополнительную информацию можно уточнить у диспетчера</p></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/order/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-57528e33"]]), { __name: "OrderCreate" });

export { __nuxt_component_1 as _ };

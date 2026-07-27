import { _ as _sfc_main$6 } from './Container-BxaGJmMa.mjs';
import { _ as __nuxt_component_1 } from './title-Bvxv237P.mjs';
import { _ as _sfc_main$5$1, b as _sfc_main$8, u as useComponentProps, a as useForwardProps, t as tv, P as Primitive, A as useFormField, m as useComponentIcons, e as _sfc_main$3$1, B as looseToNumber } from './Button-D7hwtKF6.mjs';
import { mergeProps, withCtx, createVNode, defineComponent, withAsyncContext, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, ref, watch, computed, renderSlot, createCommentVNode, useSlots, useTemplateRef, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as utils } from './index-CzlXzl75.mjs';
import { _ as _export_sfc, e as useRoute, b as useAppConfig } from './server.mjs';
import { u as useToast } from './useToast-CZLK1bG2.mjs';
import { a as useFetch } from './fetch-BcNBoCK9.mjs';
import { _ as _sfc_main$7 } from './Drawer-CBvvA4dC.mjs';
import useEmblaCarousel from 'embla-carousel-vue';
import { reactivePick, useVModel } from '@vueuse/core';
import { u as useLocale } from './useLocale-CasdCEot.mjs';
import { _ as _sfc_main$9 } from './Modal-BGQEWp84.mjs';
import { _ as _sfc_main$a } from './Input-DVSPuXok.mjs';
import 'tailwind-variants';
import './index-ByCR7jEh.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-CR0bxPSR.mjs';
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
import 'unhead/plugins';
import 'unhead/utils';
import './nuxt-link-BVaogQjF.mjs';
import './state-DVSaO_PC.mjs';
import '@vue/shared';
import './overlay-BG1xKR7v.mjs';
import '@vueuse/shared';
import 'aria-hidden';
import './useForwardExpose-C3mVDiKg.mjs';
import 'vaul-vue';

const _imports_0 = publicAssetsURL("/images/svg/star.svg");
const useReview = () => {
  const reviews2 = ref([]);
  const current = ref({
    name: "",
    text: "",
    rating: 0,
    date: ""
  });
  const route = useRoute();
  const toast = useToast();
  const modalAddReviewIsOpen = ref(false);
  const modalAllReviewsOpen = ref(false);
  if (route.query.review === "open") {
    modalAddReviewIsOpen.value = true;
  }
  watch(modalAddReviewIsOpen, (value) => {
    if (value) reset(current);
  });
  const reset = (obj) => {
    obj.value = {
      name: "",
      text: "",
      rating: 0,
      date: ""
    };
  };
  const remake = (review) => {
    return {
      name: review.name,
      text: review.text,
      rating: Number(review.rating),
      date: review.createdAt ? new Date(review.createdAt).toLocaleDateString("ru-RU") : Date.now().toLocaleString("ru-RU")
    };
  };
  const getAll = async () => {
    return useFetch(
      "/api/review/all",
      {
        method: "GET"
      },
      "$9RxkCj8pEZ"
      /* nuxt-injected */
    ).then(({ data }) => {
      if (utils.isArray(data.value)) {
        reviews2.value = data.value.map((review) => {
          return remake(review);
        });
      }
    });
  };
  const create = async (review) => {
    return useFetch(
      "/api/review/add",
      {
        method: "POST",
        body: {
          ...review.value
        }
      },
      "$GMk1CtyGrk"
      /* nuxt-injected */
    );
  };
  const add = async () => {
    if (current.value.name && current.value.text && current.value.rating) {
      create(current).then(() => {
        reset(current);
        toast.add({
          title: "Ответ",
          description: "Отзыв был отправлен",
          color: "success"
        });
        modalAddReviewIsOpen.value = false;
      }).catch(() => {
        toast.add({
          title: "Ответ",
          description: "Произошла ошибка при отправке отзыва",
          color: "error"
        });
      });
    } else {
      toast.add({
        title: "Отправка отзыва",
        description: "Пожалуйста, заполните все поля",
        color: "error"
      });
    }
  };
  const preload = async () => {
    if (reviews2.value.length < 3) {
      await getAll().then(() => {
        modalAllReviewsOpen.value = false;
      });
    }
  };
  return {
    preload,
    add,
    current,
    modalAddReviewIsOpen,
    modalAllReviewsOpen,
    reviews: reviews2
  };
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "viewer",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { reviews: reviews2, preload } = useReview();
    [__temp, __restore] = withAsyncContext(() => preload()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$5$1;
      _push(`<!--[-->`);
      ssrRenderList(unref(reviews2).slice(0, 3), (item) => {
        _push(`<div class="item animation-box transition-all duration-150 flex flex-col justify-start items-start gap-1 w-full" data-v-6f4ffd20><div class="flex flex-row justify-between items-start gap-2 w-full" data-v-6f4ffd20><div class="flex sm:flex-row flex-col sm:justify-center sm:items-center gap-5 text-gray-600" data-v-6f4ffd20><div class="uppercase sm:text-[20px] md:text-[30px] lg:text-[36px]" data-v-6f4ffd20>`);
        _push(ssrRenderComponent(_component_UIcon, { name: "i-lucide-circle-user-round" }, null, _parent));
        _push(` ${ssrInterpolate(item.name)}</div><div class="flex flex-row justify-start items-start gap-1 mb-5" data-v-6f4ffd20><!--[-->`);
        ssrRenderList(item.rating, (n) => {
          _push(`<img height="20" width="20"${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", `star +${n}`)} data-v-6f4ffd20>`);
        });
        _push(`<!--]--></div></div><div class="flex flex-row justify-center items-center gap-1 text-gray-600" data-v-6f4ffd20>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-calendar",
          size: "14"
        }, null, _parent));
        _push(`<p data-v-6f4ffd20>${ssrInterpolate(item.date)}</p></div></div><div class="text-gray-600 text-[1rem]" data-v-6f4ffd20>${ssrInterpolate(item.text)}</div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preview/viewer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-6f4ffd20"]]), { __name: "PreviewViewer" });
const theme$1 = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-accented rounded-full outline-inverted/25 focus-visible:outline-3",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
        "next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "data-[state=active]:bg-inverted"
      }
    }
  }
};
const _sfc_main$4 = {
  __name: "UCarousel",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prev: { type: Object, required: false },
    prevIcon: { type: null, required: false },
    next: { type: Object, required: false },
    nextIcon: { type: null, required: false },
    arrows: { type: Boolean, required: false, default: false },
    dots: { type: Boolean, required: false, default: false },
    orientation: { type: null, required: false, default: "horizontal" },
    items: { type: Array, required: false },
    autoplay: { type: [Boolean, Object], required: false, default: false },
    autoScroll: { type: [Boolean, Object], required: false, default: false },
    autoHeight: { type: [Boolean, Object], required: false, default: false },
    classNames: { type: [Boolean, Object], required: false, default: false },
    fade: { type: [Boolean, Object], required: false, default: false },
    wheelGestures: { type: [Boolean, Object], required: false, default: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    align: { type: [String, Function], required: false, default: "center" },
    containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" },
    slidesToScroll: { type: [String, Number], required: false, default: 1 },
    dragFree: { type: Boolean, required: false, default: false },
    dragThreshold: { type: Number, required: false, default: 10 },
    inViewThreshold: { type: null, required: false, default: 0 },
    loop: { type: Boolean, required: false, default: false },
    skipSnaps: { type: Boolean, required: false, default: false },
    duration: { type: Number, required: false, default: 25 },
    startIndex: { type: Number, required: false, default: 0 },
    watchDrag: { type: [Boolean, Function], required: false, default: true },
    watchResize: { type: [Boolean, Function], required: false, default: true },
    watchSlides: { type: [Boolean, Function], required: false, default: true },
    watchFocus: { type: [Boolean, Function], required: false, default: true },
    active: { type: Boolean, required: false, default: true },
    breakpoints: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const props = useComponentProps("carousel", _props);
    const { dir, t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const stopAutoplayOnInteraction = computed(() => {
      if (typeof props.autoplay === "boolean") {
        return true;
      }
      return props.autoplay?.stopOnInteraction ?? true;
    });
    const stopAutoScrollOnInteraction = computed(() => {
      if (typeof props.autoScroll === "boolean") {
        return true;
      }
      return props.autoScroll?.stopOnInteraction ?? true;
    });
    const ui = computed(() => tv({ extend: theme$1, ...appConfig.ui?.carousel || {} })({
      orientation: props.orientation
    }));
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = ref([]);
    async function loadPlugins() {
      const emblaPlugins = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        emblaPlugins.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        emblaPlugins.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        emblaPlugins.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        emblaPlugins.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        emblaPlugins.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('../_/embla-carousel-wheel-gestures.esm.mjs');
        emblaPlugins.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      plugins.value = emblaPlugins;
    }
    watch(() => [props.autoplay, props.autoScroll, props.autoHeight, props.classNames, props.fade, props.wheelGestures], loadPlugins, { immediate: true });
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    watch(options, () => {
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { flush: "post" });
    function stopOnInteraction() {
      if (stopAutoplayOnInteraction.value) {
        emblaApi.value?.plugins().autoplay?.stop();
      }
      if (stopAutoScrollOnInteraction.value) {
        emblaApi.value?.plugins().autoScroll?.stop();
      }
    }
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
      stopOnInteraction();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
      stopOnInteraction();
    }
    function scrollTo(index) {
      emblaApi.value?.scrollTo(index);
    }
    function onKeyDown(event) {
      let prevKey;
      let nextKey;
      if (props.orientation === "horizontal") {
        prevKey = dir.value === "ltr" ? "ArrowLeft" : "ArrowRight";
        nextKey = dir.value === "ltr" ? "ArrowRight" : "ArrowLeft";
      } else {
        prevKey = "ArrowUp";
        nextKey = "ArrowDown";
      }
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    function isCarouselItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        role: "region",
        "aria-roledescription": "carousel",
        "data-orientation": unref(props).orientation,
        tabindex: "0",
        "data-slot": "root",
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: unref(props).ui?.viewport }))}"${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: unref(props).ui?.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(props).items, (item, index) => {
              _push2(`<div${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, unref(props).dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                "data-slot": "item",
                class: ui.value.item({ class: [unref(props).ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
              }))}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (unref(props).arrows || unref(props).dots) {
              _push2(`<div data-slot="controls" class="${ssrRenderClass(ui.value.controls({ class: unref(props).ui?.controls }))}"${_scopeId}>`);
              if (unref(props).arrows) {
                _push2(`<div data-slot="arrows" class="${ssrRenderClass(ui.value.arrows({ class: unref(props).ui?.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$8, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof unref(props).prev === "object" ? unref(props).prev : void 0, {
                  "data-slot": "prev",
                  class: ui.value.prev({ class: unref(props).ui?.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$8, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof unref(props).next === "object" ? unref(props).next : void 0, {
                  "data-slot": "next",
                  class: ui.value.next({ class: unref(props).ui?.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(props).dots) {
                _push2(`<div role="tablist"${ssrRenderAttr("aria-label", unref(t)("carousel.dots"))} data-slot="dots" class="${ssrRenderClass(ui.value.dots({ class: unref(props).ui?.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  _push2(`<button type="button" role="tab"${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))}${ssrRenderAttr("aria-selected", selectedIndex.value === index)} data-slot="dot" class="${ssrRenderClass(ui.value.dot({ class: unref(props).ui?.dot, active: selectedIndex.value === index }))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
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
                ref_key: "emblaRef",
                ref: emblaRef,
                "data-slot": "viewport",
                class: ui.value.viewport({ class: unref(props).ui?.viewport })
              }, [
                createVNode("div", {
                  "data-slot": "container",
                  class: ui.value.container({ class: unref(props).ui?.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(props).items, (item, index) => {
                    return openBlock(), createBlock("div", mergeProps({ key: index }, { ref_for: true }, unref(props).dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                      "data-slot": "item",
                      class: ui.value.item({ class: [unref(props).ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
                    }), [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 16);
                  }), 128))
                ], 2)
              ], 2),
              unref(props).arrows || unref(props).dots ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "controls",
                class: ui.value.controls({ class: unref(props).ui?.controls })
              }, [
                unref(props).arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "arrows",
                  class: ui.value.arrows({ class: unref(props).ui?.arrows })
                }, [
                  createVNode(_sfc_main$8, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof unref(props).prev === "object" ? unref(props).prev : void 0, {
                    "data-slot": "prev",
                    class: ui.value.prev({ class: unref(props).ui?.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$8, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof unref(props).next === "object" ? unref(props).next : void 0, {
                    "data-slot": "next",
                    class: ui.value.next({ class: unref(props).ui?.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                unref(props).dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  role: "tablist",
                  "aria-label": unref(t)("carousel.dots"),
                  "data-slot": "dots",
                  class: ui.value.dots({ class: unref(props).ui?.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    return openBlock(), createBlock("button", {
                      key: index,
                      type: "button",
                      role: "tab",
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      "aria-selected": selectedIndex.value === index,
                      "data-slot": "dot",
                      class: ui.value.dot({ class: unref(props).ui?.dot, active: selectedIndex.value === index }),
                      "data-state": selectedIndex.value === index ? "active" : void 0,
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "aria-selected", "data-state", "onClick"]);
                  }), 128))
                ], 10, ["aria-label"])) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "all",
  __ssrInlineRender: true,
  setup(__props) {
    const { reviews: reviews2, preload } = useReview();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDrawer = _sfc_main$7;
      const _component_UButton = _sfc_main$8;
      const _component_UCarousel = _sfc_main$4;
      const _component_UIcon = _sfc_main$5$1;
      _push(ssrRenderComponent(_component_UDrawer, mergeProps({
        title: "Отзывы",
        description: "Все отзывы о компании",
        ui: {
          body: "bg-gray-600 text-gray-200",
          content: "min-h-[400px] bg-gray-600 border-gray-600"
        }
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="modal-reviews" data-v-70f571c8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCarousel, {
              loop: "",
              autoplay: { delay: 2200 },
              items: unref(reviews2),
              ui: { item: "not-lg:basis-1/1 md:basis-1/2 lg:basis-1/3" },
              class: "m-10"
            }, {
              default: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item flex flex-col justify-start items-start gap-1" data-v-70f571c8${_scopeId2}><div class="flex w-full flex-row justify-between items-start gap-2" data-v-70f571c8${_scopeId2}><div class="flex xl:flex-row flex-col lg:justify-center lg:items-center gap-5 text-gray-600" data-v-70f571c8${_scopeId2}><div class="uppercase text-[14px] not-lg:text-[30px]" data-v-70f571c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, { name: "i-lucide-circle-user-round" }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(item.name)}</div><div class="flex flex-row justify-start items-start gap-1 mb-5" data-v-70f571c8${_scopeId2}><!--[-->`);
                  ssrRenderList(item.rating, (n) => {
                    _push3(`<img height="20" width="20"${ssrRenderAttr("src", _imports_0)}${ssrRenderAttr("alt", `star +${n}`)} data-v-70f571c8${_scopeId2}>`);
                  });
                  _push3(`<!--]--></div></div><div class="flex flex-row justify-center items-center gap-1 text-gray-600" data-v-70f571c8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-calendar",
                    size: "14"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-[clamp(.8rem,1vw,1rem)]" data-v-70f571c8${_scopeId2}>${ssrInterpolate(item.date)}</p></div></div><div class="text-gray-600 text-[1rem]" data-v-70f571c8${_scopeId2}>${ssrInterpolate(item.text)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item flex flex-col justify-start items-start gap-1" }, [
                      createVNode("div", { class: "flex w-full flex-row justify-between items-start gap-2" }, [
                        createVNode("div", { class: "flex xl:flex-row flex-col lg:justify-center lg:items-center gap-5 text-gray-600" }, [
                          createVNode("div", { class: "uppercase text-[14px] not-lg:text-[30px]" }, [
                            createVNode(_component_UIcon, { name: "i-lucide-circle-user-round" }),
                            createTextVNode(" " + toDisplayString(item.name), 1)
                          ]),
                          createVNode("div", { class: "flex flex-row justify-start items-start gap-1 mb-5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.rating, (n) => {
                              return openBlock(), createBlock("img", {
                                height: "20",
                                width: "20",
                                src: _imports_0,
                                alt: `star +${n}`
                              }, null, 8, ["alt"]);
                            }), 256))
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-row justify-center items-center gap-1 text-gray-600" }, [
                          createVNode(_component_UIcon, {
                            name: "i-lucide-calendar",
                            size: "14"
                          }),
                          createVNode("p", { class: "text-[clamp(.8rem,1vw,1rem)]" }, toDisplayString(item.date), 1)
                        ])
                      ]),
                      createVNode("div", { class: "text-gray-600 text-[1rem]" }, toDisplayString(item.text), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "modal-reviews" }, [
                createVNode(_component_UCarousel, {
                  loop: "",
                  autoplay: { delay: 2200 },
                  items: unref(reviews2),
                  ui: { item: "not-lg:basis-1/1 md:basis-1/2 lg:basis-1/3" },
                  class: "m-10"
                }, {
                  default: withCtx(({ item }) => [
                    createVNode("div", { class: "item flex flex-col justify-start items-start gap-1" }, [
                      createVNode("div", { class: "flex w-full flex-row justify-between items-start gap-2" }, [
                        createVNode("div", { class: "flex xl:flex-row flex-col lg:justify-center lg:items-center gap-5 text-gray-600" }, [
                          createVNode("div", { class: "uppercase text-[14px] not-lg:text-[30px]" }, [
                            createVNode(_component_UIcon, { name: "i-lucide-circle-user-round" }),
                            createTextVNode(" " + toDisplayString(item.name), 1)
                          ]),
                          createVNode("div", { class: "flex flex-row justify-start items-start gap-1 mb-5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.rating, (n) => {
                              return openBlock(), createBlock("img", {
                                height: "20",
                                width: "20",
                                src: _imports_0,
                                alt: `star +${n}`
                              }, null, 8, ["alt"]);
                            }), 256))
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-row justify-center items-center gap-1 text-gray-600" }, [
                          createVNode(_component_UIcon, {
                            name: "i-lucide-calendar",
                            size: "14"
                          }),
                          createVNode("p", { class: "text-[clamp(.8rem,1vw,1rem)]" }, toDisplayString(item.date), 1)
                        ])
                      ]),
                      createVNode("div", { class: "text-gray-600 text-[1rem]" }, toDisplayString(item.text), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["items"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              onClick: unref(preload),
              class: "button-gradient",
              icon: "i-lucide-ellipsis"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Все отзывы`);
                } else {
                  return [
                    createTextVNode("Все отзывы")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                onClick: unref(preload),
                class: "button-gradient",
                icon: "i-lucide-ellipsis"
              }, {
                default: withCtx(() => [
                  createTextVNode("Все отзывы")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preview/all.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-70f571c8"]]), { __name: "PreviewAll" });
const theme = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-md border-0 appearance-none placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute start-0 flex items-start",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute end-0 flex items-start",
    "trailingIcon": "shrink-0 text-dimmed"
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
        "leading": "ps-2 inset-y-1",
        "trailing": "pe-2 inset-y-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-sm/4 gap-1.5",
        "leading": "ps-2.5 inset-y-1.5",
        "trailing": "pe-2.5 inset-y-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-base/5 gap-1.5",
        "leading": "ps-2.5 inset-y-1.5",
        "trailing": "pe-2.5 inset-y-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-base/5 gap-2",
        "leading": "ps-3 inset-y-2",
        "trailing": "pe-3 inset-y-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3 inset-y-2",
        "trailing": "pe-3 inset-y-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
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
    "autoresize": {
      "true": {
        "base": "resize-none"
      }
    }
  },
  "compoundVariants": [
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
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UTextarea",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    autoresize: { type: Boolean, required: false },
    autoresizeDelay: { type: Number, required: false, default: 0 },
    disabled: { type: Boolean, required: false },
    rows: { type: Number, required: false, default: 3 },
    maxrows: { type: Number, required: false, default: 0 },
    highlight: { type: Boolean, required: false },
    fixed: { type: Boolean, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    modelModifiers: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("textarea", _props);
    const modelValue = useVModel(props, "modelValue", emits, { defaultValue: props.defaultValue });
    const appConfig = useAppConfig();
    const { emitFormFocus, emitFormBlur, emitFormInput, emitFormChange, size, color, id, name, highlight, disabled, ariaAttrs } = useFormField(_props, { deferInputValidation: true });
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => tv({ extend: theme, ...appConfig.ui?.textarea || {} })({
      color: color.value ?? props.color,
      variant: props.variant,
      size: size?.value ?? props.size,
      loading: props.loading,
      highlight: highlight.value ?? props.highlight,
      fixed: props.fixed,
      autoresize: props.autoresize,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing
    }));
    const textareaRef = useTemplateRef("textareaRef");
    function updateInput(value) {
      if (props.modelModifiers?.trim && (typeof value === "string" || value === null || value === void 0)) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number) {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullable) {
        value ||= null;
      }
      if (props.modelModifiers?.optional && !props.modelModifiers?.nullable && value !== null) {
        value ||= void 0;
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      autoResize();
      if (!props.modelModifiers?.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (props.modelModifiers?.lazy) {
        updateInput(value);
      }
      if (props.modelModifiers?.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    function autoResize() {
      if (props.autoresize && textareaRef.value) {
        textareaRef.value.rows = props.rows;
        const overflow = textareaRef.value.style.overflow;
        textareaRef.value.style.overflow = "hidden";
        const styles = (void 0).getComputedStyle(textareaRef.value);
        const paddingTop = Number.parseInt(styles.paddingTop);
        const paddingBottom = Number.parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = Number.parseInt(styles.lineHeight);
        const { scrollHeight } = textareaRef.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textareaRef.value.rows = props.maxrows ? Math.min(newRows, props.maxrows) : newRows;
        }
        textareaRef.value.style.overflow = overflow;
      }
    }
    watch(modelValue, () => {
      nextTick(autoResize);
    });
    __expose({
      textareaRef,
      autoResize
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": _ctx.$attrs["data-slot"] ?? "root",
        class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
              id: unref(id),
              ref_key: "textareaRef",
              ref: textareaRef,
              value: unref(modelValue),
              name: unref(name),
              rows: unref(props).rows,
              placeholder: unref(props).placeholder,
              class: ui.value.base({ class: unref(props).ui?.base }),
              disabled: unref(disabled),
              required: unref(props).required
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, { "data-slot": "base" }), "textarea")}${_scopeId}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
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
              createVNode("textarea", mergeProps({
                id: unref(id),
                ref_key: "textareaRef",
                ref: textareaRef,
                value: unref(modelValue),
                name: unref(name),
                rows: unref(props).rows,
                placeholder: unref(props).placeholder,
                class: ui.value.base({ class: unref(props).ui?.base }),
                disabled: unref(disabled),
                required: unref(props).required
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                "data-slot": "base",
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "value", "name", "rows", "placeholder", "disabled", "required", "onFocus"]),
              renderSlot(_ctx.$slots, "default", { ui: ui.value }),
              unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 0,
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
                key: 1,
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
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const { add, modalAddReviewIsOpen, current } = useReview();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$9;
      const _component_UButton = _sfc_main$8;
      const _component_UInput = _sfc_main$a;
      const _component_UTextarea = _sfc_main$2;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        title: "Оставить отзыв",
        description: "Оставьте свой отзыв о поездке",
        "close-icon": "i-lucide-circle-x",
        open: unref(modalAddReviewIsOpen),
        "onUpdate:open": ($event) => modalAddReviewIsOpen.value = !unref(modalAddReviewIsOpen),
        ui: {
          body: "bg-gray-600 text-gray-200 flex flex-col justify-center items-start gap-5",
          header: "bg-gray-600 border-gray-600",
          title: "text-gray-200"
        }
      }, _attrs), {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(current).name,
              "onUpdate:modelValue": ($event) => unref(current).name = $event,
              color: "primary",
              placeholder: "Имя",
              ui: {
                root: "w-full",
                base: "h-12 text-white bg-gray-600 rounded-[26px] min-w-full"
              }
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-row justify-start items-start gap-1 pl-1 w-full cursor-pointer"${_scopeId}><!--[-->`);
            ssrRenderList(5, (n) => {
              _push2(`<img height="20" width="20"${ssrRenderAttr("src", _imports_0)} class="${ssrRenderClass({
                grayscale: n > unref(current).rating
              })}"${ssrRenderAttr("alt", `star +${n}`)}${_scopeId}>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_UTextarea, {
              modelValue: unref(current).text,
              "onUpdate:modelValue": ($event) => unref(current).text = $event,
              placeholder: "Текст",
              maxlength: "180",
              rows: 3,
              ui: {
                root: "w-full",
                base: "p-3 text-white bg-gray-600 rounded-[26px] min-w-full"
              }
            }, null, _parent2, _scopeId));
            _push2(`<div class="w-full flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              onClick: unref(add),
              class: "button-gradient",
              icon: "i-lucide-plus"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Оставить отзыв `);
                } else {
                  return [
                    createTextVNode(" Оставить отзыв ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(current).name,
                "onUpdate:modelValue": ($event) => unref(current).name = $event,
                color: "primary",
                placeholder: "Имя",
                ui: {
                  root: "w-full",
                  base: "h-12 text-white bg-gray-600 rounded-[26px] min-w-full"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "flex flex-row justify-start items-start gap-1 pl-1 w-full cursor-pointer" }, [
                (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                  return createVNode("img", {
                    height: "20",
                    width: "20",
                    src: _imports_0,
                    class: {
                      grayscale: n > unref(current).rating
                    },
                    onClick: ($event) => unref(current).rating = n,
                    alt: `star +${n}`
                  }, null, 10, ["onClick", "alt"]);
                }), 64))
              ]),
              createVNode(_component_UTextarea, {
                modelValue: unref(current).text,
                "onUpdate:modelValue": ($event) => unref(current).text = $event,
                placeholder: "Текст",
                maxlength: "180",
                rows: 3,
                ui: {
                  root: "w-full",
                  base: "p-3 text-white bg-gray-600 rounded-[26px] min-w-full"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "w-full flex justify-center items-center" }, [
                createVNode(_component_UButton, {
                  onClick: unref(add),
                  class: "button-gradient",
                  icon: "i-lucide-plus"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Оставить отзыв ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              class: "button-gradient",
              icon: "i-lucide-plus"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Оставить отзыв`);
                } else {
                  return [
                    createTextVNode("Оставить отзыв")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                class: "button-gradient",
                icon: "i-lucide-plus"
              }, {
                default: withCtx(() => [
                  createTextVNode("Оставить отзыв")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preview/add.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "PreviewAdd" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UContainer = _sfc_main$6;
  const _component_SectionTitle = __nuxt_component_1;
  const _component_PreviewViewer = __nuxt_component_2;
  const _component_PreviewAll = __nuxt_component_3;
  const _component_PreviewAdd = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-reviews w-full mx-auto h-auto pt-5 pb-10 border-b border-b-primary/70" }, _attrs))} data-v-a563bc95>`);
  _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col justify-center items-center gap-5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SectionTitle, { title: "Отзывы" }, null, _parent2, _scopeId));
        _push2(`<div class="w-full flex flex-col justify-start items-center pt-10 gap-10" data-v-a563bc95${_scopeId}>`);
        _push2(ssrRenderComponent(_component_PreviewViewer, null, null, _parent2, _scopeId));
        _push2(`<div class="w-full flex flex-row justify-between items-center pt-10 gap-5" data-v-a563bc95${_scopeId}>`);
        _push2(ssrRenderComponent(_component_PreviewAll, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_PreviewAdd, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_SectionTitle, { title: "Отзывы" }),
          createVNode("div", { class: "w-full flex flex-col justify-start items-center pt-10 gap-10" }, [
            createVNode(_component_PreviewViewer),
            createVNode("div", { class: "w-full flex flex-row justify-between items-center pt-10 gap-5" }, [
              createVNode(_component_PreviewAll),
              createVNode(_component_PreviewAdd)
            ])
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/reviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reviews = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a563bc95"]]), { __name: "SectionReviews" });

export { reviews as default };

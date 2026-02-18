import { _ as _sfc_main$9 } from './index-BGZzggxM.mjs';
import { _ as __nuxt_component_0 } from './title-BAS7RGFK.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import './index-CZ0fzO44.mjs';
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
import 'unhead/plugins';
import 'unhead/utils';
import './nuxt-link-DZAxAXO9.mjs';
import 'vaul-vue';
import 'unhead/scripts';

const _imports_0 = publicAssetsURL("/images/svg/arrow-b.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "advantages",
  __ssrInlineRender: true,
  setup(__props) {
    const advantages2 = [
      {
        message: [
          {
            color: "#FFCC00",
            text: "\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0441\u0442\u0430\u0436"
          },
          {
            color: "#FFFFFF",
            text: "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439"
          }
        ],
        description: "\u0441\u0442\u0430\u0436 \u043D\u0430\u0448\u0438\u0445 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u043E\u0442 7 - 10 \u043B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430"
      },
      {
        message: [
          {
            color: "#FFFFFF",
            text: "\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0438"
          },
          {
            color: "#FFCC00",
            text: "\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C"
          }
        ],
        description: "\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E"
      },
      {
        message: [
          {
            color: "#FFFFFF",
            text: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0438"
          },
          {
            color: "#FFCC00",
            text: "\u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044F"
          }
        ],
        description: "\u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043E\u0442\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"
      },
      {
        message: [
          {
            color: "#FFFFFF",
            text: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u0438"
          },
          {
            color: "#FFCC00",
            text: "\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430"
          }
        ],
        description: "\u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u043C \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043F\u043E\u0441\u044B\u043B\u043E\u043A",
        lost: true
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$9;
      const _component_SectionTitle = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-advantages w-full mx-auto h-auto pt-5 pb-10 border-b border-b-primary/70" }, _attrs))} data-v-926f166e>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col justify-start items-center gap-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionTitle, { title: "\u041D\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430" }, null, _parent2, _scopeId));
            _push2(`<div class="lg:w-[70%] flex flex-col justify-center items-center gap-5" data-v-926f166e${_scopeId}><!--[-->`);
            ssrRenderList(advantages2, (item, index) => {
              _push2(`<!--[--><div class="item animation-box flex flex-col justify-center items-center gap-1 w-full" data-v-926f166e${_scopeId}><div class="flex flex-row justify-center items-center gap-2 w-full text-white" data-v-926f166e${_scopeId}><!--[-->`);
              ssrRenderList(item.message, (i) => {
                _push2(`<span class="${ssrRenderClass(`uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${i.color}]`)}" data-v-926f166e${_scopeId}>${ssrInterpolate(i.text)}</span>`);
              });
              _push2(`<!--]--></div><div class="text-white sm:text-[10px] md:text-[14px] lg:text-[20px] w-full text-center uppercase" data-v-926f166e${_scopeId}>${ssrInterpolate(item.description)}</div></div>`);
              if (!item.lost) {
                _push2(`<img height="52" width="12" class="h-7"${ssrRenderAttr("src", _imports_0)} alt="arrow-b" data-v-926f166e${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(_component_SectionTitle, { title: "\u041D\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430" }),
              createVNode("div", { class: "lg:w-[70%] flex flex-col justify-center items-center gap-5" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(advantages2, (item, index) => {
                  return openBlock(), createBlock(Fragment, { key: index }, [
                    createVNode("div", { class: "item animation-box flex flex-col justify-center items-center gap-1 w-full" }, [
                      createVNode("div", { class: "flex flex-row justify-center items-center gap-2 w-full text-white" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.message, (i) => {
                          return openBlock(), createBlock("span", {
                            class: `uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${i.color}]`
                          }, toDisplayString(i.text), 3);
                        }), 256))
                      ]),
                      createVNode("div", { class: "text-white sm:text-[10px] md:text-[14px] lg:text-[20px] w-full text-center uppercase" }, toDisplayString(item.description), 1)
                    ]),
                    !item.lost ? (openBlock(), createBlock("img", {
                      key: 0,
                      height: "52",
                      width: "12",
                      class: "h-7",
                      src: _imports_0,
                      alt: "arrow-b"
                    })) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/advantages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const advantages = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-926f166e"]]), { __name: "SectionAdvantages" });

export { advantages as default };

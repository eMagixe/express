import { _ as _sfc_main$9 } from './index-xFanQrI0.mjs';
import { _ as __nuxt_component_1 } from './title-Bvxv237P.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import 'reka-ui';
import '@vueuse/core';
import './server.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
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
import './index-Cxpc46zU.mjs';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import './nuxt-link-Ck9lQj5E.mjs';
import 'vaul-vue';

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
            text: "Высокий стаж"
          },
          {
            color: "#FFFFFF",
            text: "водителей"
          }
        ],
        description: "стаж наших водителей от 7 - 10 лет опыта"
      },
      {
        message: [
          {
            color: "#FFFFFF",
            text: "скорость и"
          },
          {
            color: "#FFCC00",
            text: "доступность"
          }
        ],
        description: "работаем круглосуточно"
      },
      {
        message: [
          {
            color: "#FFFFFF",
            text: "Безопасность и"
          },
          {
            color: "#FFCC00",
            text: "гарантия"
          }
        ],
        description: "предоставляем отчетные документы"
      },
      {
        message: [
          {
            color: "#FFFFFF",
            text: "Перевозка и"
          },
          {
            color: "#FFCC00",
            text: "доставка"
          }
        ],
        description: "осуществляем перевозки и доставки посылок",
        lost: true
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$9;
      const _component_SectionTitle = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-advantages w-full mx-auto h-auto pt-5 pb-10 border-b border-b-primary/70" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col justify-start items-center gap-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionTitle, { title: "Наши преимущества" }, null, _parent2, _scopeId));
            _push2(`<div class="lg:w-[70%] flex flex-col justify-center items-center gap-5"${_scopeId}><!--[-->`);
            ssrRenderList(advantages2, (item, index) => {
              _push2(`<!--[--><div class="item flex flex-col justify-center items-center gap-1 w-full"${_scopeId}><div class="flex flex-row justify-center items-center gap-2 w-full text-white"${_scopeId}><!--[-->`);
              ssrRenderList(item.message, (i) => {
                _push2(`<span class="${ssrRenderClass(`uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${i.color}]`)}"${_scopeId}>${ssrInterpolate(i.text)}</span>`);
              });
              _push2(`<!--]--></div><div class="text-white sm:text-[10px] md:text-[14px] lg:text-[20px] w-full text-center uppercase"${_scopeId}>${ssrInterpolate(item.description)}</div></div>`);
              if (!item.lost) {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="arrow-b" class="h-7"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(_component_SectionTitle, { title: "Наши преимущества" }),
              createVNode("div", { class: "lg:w-[70%] flex flex-col justify-center items-center gap-5" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(advantages2, (item, index) => {
                  return openBlock(), createBlock(Fragment, { key: index }, [
                    createVNode("div", { class: "item flex flex-col justify-center items-center gap-1 w-full" }, [
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
                      src: _imports_0,
                      alt: "arrow-b",
                      class: "h-7"
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
const advantages = Object.assign(_sfc_main, { __name: "SectionAdvantages" });

export { advantages as default };
//# sourceMappingURL=advantages-BRrUKVU9.mjs.map

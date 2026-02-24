import { _ as _sfc_main$6, a as _sfc_main$5 } from './Button-DmhYxLTA.mjs';
import { _ as __nuxt_component_1 } from './title-Bvxv237P.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'reka-ui';
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
import '@vueuse/core';
import 'tailwind-variants';
import './index-DMLNqBde.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './nuxt-link-9VTXGL_C.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "advantages",
  __ssrInlineRender: true,
  setup(__props) {
    const advantages2 = [
      {
        icon: "i-lucide-user-check",
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
        icon: "i-lucide-clock",
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
        icon: "i-lucide-shield-check",
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
        icon: "i-lucide-truck",
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
      const _component_UContainer = _sfc_main$6;
      const _component_SectionTitle = __nuxt_component_1;
      const _component_UIcon = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-advantages w-full mx-auto h-auto pt-5 pb-10 border-b border-b-primary/70" }, _attrs))} data-v-200d4487>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col justify-start items-center gap-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionTitle, { title: "Наши преимущества" }, null, _parent2, _scopeId));
            _push2(`<div class="lg:w-[70%] flex flex-col justify-center items-center gap-5" data-v-200d4487${_scopeId}><!--[-->`);
            ssrRenderList(advantages2, (item, index) => {
              _push2(`<!--[--><div class="item animation-box flex flex-row justify-center items-center gap-5 w-full" data-v-200d4487${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                class: "text-white min-w-9 min-h-9 text-[4cqw]",
                name: item.icon
              }, null, _parent2, _scopeId));
              _push2(`<div data-v-200d4487${_scopeId}><div class="flex flex-row justify-start items-center gap-2 text-white" data-v-200d4487${_scopeId}><!--[-->`);
              ssrRenderList(item.message, (i) => {
                _push2(`<span class="${ssrRenderClass(`uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${i.color}]`)}" data-v-200d4487${_scopeId}>${ssrInterpolate(i.text)}</span>`);
              });
              _push2(`<!--]--></div><div class="text-white sm:text-[10px] md:text-[14px] lg:text-[20px] text-left uppercase" data-v-200d4487${_scopeId}>${ssrInterpolate(item.description)}</div></div></div>`);
              if (!item.lost) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  class: "text-white text-[20px]",
                  name: "i-lucide-arrow-down"
                }, null, _parent2, _scopeId));
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
                    createVNode("div", { class: "item animation-box flex flex-row justify-center items-center gap-5 w-full" }, [
                      createVNode(_component_UIcon, {
                        class: "text-white min-w-9 min-h-9 text-[4cqw]",
                        name: item.icon
                      }, null, 8, ["name"]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex flex-row justify-start items-center gap-2 text-white" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.message, (i) => {
                            return openBlock(), createBlock("span", {
                              class: `uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${i.color}]`
                            }, toDisplayString(i.text), 3);
                          }), 256))
                        ]),
                        createVNode("div", { class: "text-white sm:text-[10px] md:text-[14px] lg:text-[20px] text-left uppercase" }, toDisplayString(item.description), 1)
                      ])
                    ]),
                    !item.lost ? (openBlock(), createBlock(_component_UIcon, {
                      key: 0,
                      class: "text-white text-[20px]",
                      name: "i-lucide-arrow-down"
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
const advantages = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-200d4487"]]), { __name: "SectionAdvantages" });

export { advantages as default };

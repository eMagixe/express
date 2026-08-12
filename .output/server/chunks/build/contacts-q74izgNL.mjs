import { _ as _sfc_main$1 } from './Container-BzK8dUVM.mjs';
import { _ as _sfc_main$2 } from './Breadcrumb-CbBCRzXd.mjs';
import { _ as _sfc_main$3 } from './PageSection-DW9bN-XW.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useSeoMeta } from './server.mjs';
import './Button-JdAC5Wqn.mjs';
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
import './index-zQtgCi6v.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-r7HxebEa.mjs';
import 'perfect-debounce';
import './nuxt-link-CJMHb7no.mjs';
import './useLocale-DsziUxw1.mjs';
import './usePrefix-DPzF3aqW.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contacts",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        label: "Главная",
        to: "/"
      },
      {
        label: "Наши контакты",
        to: "/contacts"
      }
    ]);
    const features = ref([
      {
        title: "Адрес",
        description: "Республика Башкортостан. г. Кумертау ул. Машиностроителей, 7а-7",
        icon: "i-lucide-map-pin"
      },
      {
        title: "Индивидуальный предприниматель",
        description: "Садыкова",
        icon: "i-lucide-user"
      },
      {
        title: "Телефон",
        description: "+7 (917) 766-68-33",
        icon: "i-lucide-phone"
      }
    ]);
    useSeoMeta({
      title: "Такси Экспресс | Наши контакты",
      description: "Такси Экспресс - контактная информация о нас",
      ogTitle: "Такси Экспресс | Наши контакты",
      ogDescription: "Такси Экспресс - контактная информация о нас",
      ogImage: "https://taxi-express.su/images/preview.png",
      ogUrl: "https://taxi-express.su/",
      ogType: "website",
      ogLocale: "ru_RU",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_UBreadcrumb = _sfc_main$2;
      const _component_UPageSection = _sfc_main$3;
      _push(ssrRenderComponent(_component_UContainer, mergeProps({ class: "flex flex-col justify-start gap-5 pt-10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBreadcrumb, {
              items: unref(items),
              ui: {
                link: "text-white hover:text-primary",
                separatorIcon: "text-white"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageSection, {
              title: "Наши контакты",
              description: "Контактные данные нашей компании",
              orientation: "horizontal",
              features: unref(features),
              ui: {
                title: "text-primary tracking-wider",
                description: "text-white",
                container: "py-10 sm:py-10 lg:py-10",
                wrapper: "text-white flex flex-col justify-start items-start gap-5 w-full",
                links: "w-full flex flex-col justify-center items-center gap-5",
                footer: "w-full",
                features: "text-white"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414.2850109020333!2d55.81429761257149!3d52.76313311808369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417d11c3a6a1844f%3A0xdc766af0487bdac6!2z0YPQuy4g0JzQsNGI0LjQvdC-0YHRgtGA0L7QuNGC0LXQu9C10LksIDfQsCwgNywg0JrRg9C80LXRgNGC0LDRgywg0KDQtdGB0L8uINCR0LDRiNC60L7RgNGC0L7RgdGC0LDQvSwgNDUzMzAw!5e0!3m2!1sru!2sru!4v1773302908411!5m2!1sru!2sru" width="600" height="450" class="w-full h-full min-h-100 rounded-lg" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${_scopeId2}></iframe>`);
                } else {
                  return [
                    createVNode("iframe", {
                      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414.2850109020333!2d55.81429761257149!3d52.76313311808369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417d11c3a6a1844f%3A0xdc766af0487bdac6!2z0YPQuy4g0JzQsNGI0LjQvdC-0YHRgtGA0L7QuNGC0LXQu9C10LksIDfQsCwgNywg0JrRg9C80LXRgNGC0LDRgywg0KDQtdGB0L8uINCR0LDRiNC60L7RgNGC0L7RgdGC0LDQvSwgNDUzMzAw!5e0!3m2!1sru!2sru!4v1773302908411!5m2!1sru!2sru",
                      width: "600",
                      height: "450",
                      class: "w-full h-full min-h-100 rounded-lg",
                      loading: "lazy",
                      referrerpolicy: "no-referrer-when-downgrade"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBreadcrumb, {
                items: unref(items),
                ui: {
                  link: "text-white hover:text-primary",
                  separatorIcon: "text-white"
                }
              }, null, 8, ["items"]),
              createVNode(_component_UPageSection, {
                title: "Наши контакты",
                description: "Контактные данные нашей компании",
                orientation: "horizontal",
                features: unref(features),
                ui: {
                  title: "text-primary tracking-wider",
                  description: "text-white",
                  container: "py-10 sm:py-10 lg:py-10",
                  wrapper: "text-white flex flex-col justify-start items-start gap-5 w-full",
                  links: "w-full flex flex-col justify-center items-center gap-5",
                  footer: "w-full",
                  features: "text-white"
                }
              }, {
                default: withCtx(() => [
                  createVNode("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414.2850109020333!2d55.81429761257149!3d52.76313311808369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x417d11c3a6a1844f%3A0xdc766af0487bdac6!2z0YPQuy4g0JzQsNGI0LjQvdC-0YHRgtGA0L7QuNGC0LXQu9C10LksIDfQsCwgNywg0JrRg9C80LXRgNGC0LDRgywg0KDQtdGB0L8uINCR0LDRiNC60L7RgNGC0L7RgdGC0LDQvSwgNDUzMzAw!5e0!3m2!1sru!2sru!4v1773302908411!5m2!1sru!2sru",
                    width: "600",
                    height: "450",
                    class: "w-full h-full min-h-100 rounded-lg",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade"
                  })
                ]),
                _: 1
              }, 8, ["features"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };

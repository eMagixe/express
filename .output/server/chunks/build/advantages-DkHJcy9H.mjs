import { _ as pe } from './index-Cl72qAB1.mjs';
import { d } from './title-BonmH6n1.mjs';
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
import './index-NPZ-ilWx.mjs';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import './nuxt-link-xfm6sc6S.mjs';
import 'vaul-vue';

const C=publicAssetsURL("/images/svg/arrow-b.svg"),p=defineComponent({__name:"advantages",__ssrInlineRender:true,setup(x){const n=[{message:[{color:"#FFCC00",text:"Высокий стаж"},{color:"#FFFFFF",text:"водителей"}],description:"стаж наших водителей от 7 - 10 лет опыта"},{message:[{color:"#FFFFFF",text:"скорость и"},{color:"#FFCC00",text:"доступность"}],description:"работаем круглосуточно"},{message:[{color:"#FFFFFF",text:"Безопасность и"},{color:"#FFCC00",text:"гарантия"}],description:"предоставляем отчетные документы"},{message:[{color:"#FFFFFF",text:"Перевозка и"},{color:"#FFCC00",text:"доставка"}],description:"осуществляем перевозки и доставки посылок",lost:true}];return (a,c,_,y)=>{const b=pe,d$1=d;c(`<div${ssrRenderAttrs(mergeProps({class:"section-advantages w-full mx-auto h-auto pt-5 pb-10 border-b border-b-primary/70"},y))}>`),c(ssrRenderComponent(b,{class:"flex flex-col justify-start items-center gap-5"},{default:withCtx((P,t,j,e)=>{if(t)t(ssrRenderComponent(d$1,{title:"Наши преимущества"},null,j,e)),t(`<div class="lg:w-[70%] flex flex-col justify-center items-center gap-5"${e}><!--[-->`),ssrRenderList(n,(r,f)=>{t(`<!--[--><div class="item flex flex-col justify-center items-center gap-1 w-full"${e}><div class="flex flex-row justify-center items-center gap-2 w-full text-white"${e}><!--[-->`),ssrRenderList(r.message,s=>{t(`<span class="${ssrRenderClass(`uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${s.color}]`)}"${e}>${ssrInterpolate(s.text)}</span>`);}),t(`<!--]--></div><div class="text-white sm:text-[10px] md:text-[14px] lg:text-[20px] w-full text-center uppercase"${e}>${ssrInterpolate(r.description)}</div></div>`),r.lost?t("<!---->"):t(`<img${ssrRenderAttr("src",C)} alt="arrow-b" class="h-7"${e}>`),t("<!--]-->");}),t("<!--]--></div>");else return [createVNode(d$1,{title:"Наши преимущества"}),createVNode("div",{class:"lg:w-[70%] flex flex-col justify-center items-center gap-5"},[(openBlock(true),createBlock(Fragment,null,renderList(n,(r,f)=>(openBlock(),createBlock(Fragment,{key:f},[createVNode("div",{class:"item flex flex-col justify-center items-center gap-1 w-full"},[createVNode("div",{class:"flex flex-row justify-center items-center gap-2 w-full text-white"},[(openBlock(true),createBlock(Fragment,null,renderList(r.message,s=>(openBlock(),createBlock("span",{class:`uppercase sm:text-[16px] md:text-[24px] lg:text-[40px] text-[${s.color}]`},toDisplayString(s.text),3))),256))]),createVNode("div",{class:"text-white sm:text-[10px] md:text-[14px] lg:text-[20px] w-full text-center uppercase"},toDisplayString(r.description),1)]),r.lost?createCommentVNode("",true):(openBlock(),createBlock("img",{key:0,src:C,alt:"arrow-b",class:"h-7"}))],64))),128))])]}),_:1},_)),c("</div>");}}}),$=p.setup;p.setup=(x,n)=>{const a=useSSRContext();return (a.modules||(a.modules=new Set)).add("components/section/advantages.vue"),$?$(x,n):void 0};const mt=Object.assign(p,{__name:"SectionAdvantages"});

export { mt as default };
//# sourceMappingURL=advantages-DkHJcy9H.mjs.map

import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const s=defineComponent({__name:"title",__ssrInlineRender:true,props:{title:{}},setup(t){return (n,e,l,r)=>{e(`<h2${ssrRenderAttrs(mergeProps({class:"w-full text-[clamp(1.25rem,3vw,3rem)] text-center"},r))}>${ssrInterpolate(t.title)}</h2>`);}}}),o=s.setup;s.setup=(t,n)=>{const e=useSSRContext();return (e.modules||(e.modules=new Set)).add("components/section/title.vue"),o?o(t,n):void 0};const d=Object.assign(s,{__name:"SectionTitle"});

export { d };
//# sourceMappingURL=title-BonmH6n1.mjs.map

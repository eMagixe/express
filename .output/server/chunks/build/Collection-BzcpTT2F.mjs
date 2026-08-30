import { S as Slot } from './Button-0rygPcVD.mjs';
import { ref, provide, inject, computed, defineComponent, watchEffect, markRaw, h, watch } from 'vue';
import { unrefElement } from '@vueuse/core';

function usePrimitiveElement() {
  const primitiveElement = ref();
  const currentElement = computed(() => ["#text", "#comment"].includes(primitiveElement.value?.$el.nodeName) ? primitiveElement.value?.$el.nextElementSibling : unrefElement(primitiveElement));
  return {
    primitiveElement,
    currentElement
  };
}
const ITEM_DATA_ATTR = "data-reka-collection-item";
function useCollection(options = {}) {
  const { key = "", isProvider = false } = options;
  const injectionKey = `${key}CollectionProvider`;
  let context;
  if (isProvider) {
    const itemMap = ref(/* @__PURE__ */ new Map());
    const collectionRef = ref();
    context = {
      collectionRef,
      itemMap
    };
    provide(injectionKey, context);
  } else context = inject(injectionKey);
  const getItems = (includeDisabledItem = false) => {
    const collectionNode = context.collectionRef.value;
    if (!collectionNode) return [];
    const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
    const orderMap = new Map(orderedNodes.map((node, index) => [node, index]));
    const items = Array.from(context.itemMap.value.values());
    const orderedItems = items.sort((a, b) => (orderMap.get(a.ref) ?? -1) - (orderMap.get(b.ref) ?? -1));
    if (includeDisabledItem) return orderedItems;
    else return orderedItems.filter((i) => i.ref.dataset.disabled !== "");
  };
  const CollectionSlot = /* @__PURE__ */ defineComponent({
    name: "CollectionSlot",
    inheritAttrs: false,
    setup(_, { slots, attrs }) {
      const { primitiveElement, currentElement } = usePrimitiveElement();
      watch(currentElement, () => {
        context.collectionRef.value = currentElement.value;
      });
      return () => h(Slot, {
        ref: primitiveElement,
        ...attrs
      }, slots);
    }
  });
  const CollectionItem = /* @__PURE__ */ defineComponent({
    name: "CollectionItem",
    inheritAttrs: false,
    props: { value: { validator: () => true } },
    setup(props, { slots, attrs }) {
      const { primitiveElement, currentElement } = usePrimitiveElement();
      watchEffect((cleanupFn) => {
        if (currentElement.value) {
          const key$1 = markRaw(currentElement.value);
          context.itemMap.value.set(key$1, {
            ref: currentElement.value,
            value: props.value
          });
          cleanupFn(() => context.itemMap.value.delete(key$1));
        }
      });
      return () => h(Slot, {
        ...attrs,
        [ITEM_DATA_ATTR]: "",
        ref: primitiveElement
      }, slots);
    }
  });
  const reactiveItems = computed(() => Array.from(context.itemMap.value.values()));
  const itemMapSize = computed(() => context.itemMap.value.size);
  return {
    getItems,
    reactiveItems,
    itemMapSize,
    CollectionSlot,
    CollectionItem
  };
}

export { usePrimitiveElement as a, useCollection as u };

import { a as useAppConfig } from '../virtual/entry.mjs';

//#region node_modules/@nuxt/ui/dist/runtime/composables/usePrefix.js
function usePrefix() {
	const prefix = useAppConfig().ui?.prefix;
	return (classString) => {
		if (!prefix || !classString) return classString;
		return classString.split(/\s+/).filter(Boolean).map((cls) => `${prefix}:${cls}`).join(" ");
	};
}

export { usePrefix as u };

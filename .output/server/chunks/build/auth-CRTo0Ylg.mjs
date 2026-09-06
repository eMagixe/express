import { d as defineNuxtRouteMiddleware, e as executeAsync, n as navigateTo } from '../virtual/entry.mjs';
import { u as useAuth } from './useAuth-CQVoEIy2.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import 'vue';
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
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'devalue';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import 'unhead/utils';
import './asyncData-D23YQ4Dm.mjs';
import './state-DyBHau4b.mjs';

//#region app/middleware/auth.ts
var auth_default = defineNuxtRouteMiddleware(async (to) => {
	let __temp, __restore;
	const user = useAuth();
	if ([__temp, __restore] = executeAsync(() => user.checkAuth()), __temp = await __temp, __restore(), __temp) return true;
	else if (to.path !== "/dashboard/login") return navigateTo("/dashboard/login");
});

export { auth_default as default };
